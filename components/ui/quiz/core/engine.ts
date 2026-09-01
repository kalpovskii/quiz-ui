import type {
  AnswerValue,
  QuizAnswers,
  QuizBranchRule,
  QuizDefinition,
  QuizEngineAction,
  QuizEngineState,
  QuizStepDefinition,
} from "./types";

/**
 * This is a plain, explicit transition table rather than a general-purpose
 * state-machine library (see SDD Section 8: XState vs. hand-rolled reducer).
 * Chosen for zero added dependency weight and because the branching model
 * needed here — "evaluate rules in order against current answers, first
 * match wins, else fall back to `next`" — doesn't need XState's guards,
 * actors, or parallel states. If nested/parallel funnels become a real
 * requirement later, this module is the only place that needs to change;
 * `QuizDefinition` was designed to be a valid input either way.
 */

export function getStep(
  definition: QuizDefinition,
  stepId: string
): QuizStepDefinition {
  const step = definition.steps.find((s) => s.id === stepId);
  if (!step) {
    throw new Error(
      `quiz-ui: no step with id "${stepId}" in quiz "${definition.id}"`
    );
  }
  return step;
}

function ruleMatches(rule: QuizBranchRule, stepId: string, answers: QuizAnswers): boolean {
  const answerId = rule.answerId ?? stepId;
  const value = answers[answerId];

  if (rule.equals !== undefined) {
    return value === rule.equals;
  }
  if (rule.includes !== undefined) {
    if (Array.isArray(value)) return value.includes(rule.includes);
    if (typeof value === "string") return value.includes(rule.includes);
    return false;
  }
  // A rule with neither `equals` nor `includes` is treated as an
  // unconditional match — useful as a catch-all at the end of a rule list.
  return true;
}

/** Resolves the next step id for the given step, given current answers. */
export function resolveNext(
  step: QuizStepDefinition,
  answers: QuizAnswers
): string | undefined {
  if (step.branch) {
    for (const rule of step.branch) {
      if (ruleMatches(rule, step.id, answers)) {
        return rule.goTo;
      }
    }
  }
  return step.next;
}

export function createInitialState(definition: QuizDefinition): QuizEngineState {
  return {
    currentStepId: definition.entry,
    history: [definition.entry],
    answers: {},
    status: "in-progress",
  };
}

export function isStepAnswered(step: QuizStepDefinition, answers: QuizAnswers): boolean {
  if (step.required === false) return true;
  const value = answers[step.id];
  if (value === undefined) return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  return true;
}

/**
 * Creates the reducer for a specific quiz definition. Definition is closed
 * over rather than passed with every action so the reducer signature stays
 * a plain `(state, action) => state`, compatible with `useReducer` as-is.
 */
export function createQuizReducer(definition: QuizDefinition) {
  return function quizReducer(
    state: QuizEngineState,
    action: QuizEngineAction
  ): QuizEngineState {
    switch (action.type) {
      case "ANSWER": {
        return {
          ...state,
          answers: { ...state.answers, [action.stepId]: action.value },
        };
      }

      case "ADVANCE": {
        const currentStep = getStep(definition, state.currentStepId);
        const nextId = resolveNext(currentStep, state.answers);

        if (!nextId) {
          return { ...state, status: "complete" };
        }

        return {
          ...state,
          currentStepId: nextId,
          history: [...state.history, nextId],
        };
      }

      case "BACK": {
        if (state.history.length <= 1) return state;
        const history = state.history.slice(0, -1);
        return {
          ...state,
          history,
          currentStepId: history[history.length - 1],
          status: "in-progress",
        };
      }

      case "GO_TO": {
        getStep(definition, action.stepId); // throws if invalid
        return {
          ...state,
          currentStepId: action.stepId,
          history: [...state.history, action.stepId],
          status: "in-progress",
        };
      }

      case "RESET": {
        return createInitialState(definition);
      }

      default:
        return state;
    }
  };
}

/** Rough progress estimate: steps visited vs. longest path from entry. */
export function estimateProgress(
  definition: QuizDefinition,
  state: QuizEngineState
): number {
  const total = definition.steps.length;
  if (total === 0) return 1;
  const visited = new Set(state.history).size;
  return Math.min(visited / total, 1);
}

export type { AnswerValue };
