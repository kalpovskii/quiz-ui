"use client";

import {
  QuizRoot,
  QuizProgress,
  QuizStep,
  QuizTransition,
  QuizChoiceGroup,
  QuizRating,
  QuizSlider,
  QuizEmailInput,
  QuizNavigation,
  QuizResult,
} from "@/components/ui/quiz";
import { fitnessQuiz } from "./definition";

/**
 * Full composition example: every top-level piece a funnel needs, wired
 * to one QuizDefinition. Copy this file as a starting point — swap the
 * `switch` cases for whichever step types your own funnel uses.
 */
export default function ExamplePage() {
  return (
    <QuizRoot
      definition={fitnessQuiz}
      onComplete={(answers) => {
        // Wire this up to your own submission endpoint.
        console.log("quiz complete:", answers);
      }}
      className=""
    >
      <QuizProgress />
      <QuizTransition>
        <QuizStep>
          {(step) => {
            switch (step.type) {
              case "choice":
                return <QuizChoiceGroup options={step.props?.options as any} />;
              case "rating":
                return (
                  <QuizRating
                    scale={step.props?.scale as number}
                    numeric={step.props?.numeric as boolean}
                  />
                );
              case "slider":
                return (
                  <QuizSlider
                    min={step.props?.min as number}
                    max={step.props?.max as number}
                    step={step.props?.step as number}
                  />
                );
              case "email":
                return <QuizEmailInput />;
              case "result":
                return (
                  <QuizResult>
                    {(answers) => (
                      <p className="text-sm text-foreground">
                        Thanks! We'll send your plan to {String(answers.email ?? "you")}.
                      </p>
                    )}
                  </QuizResult>
                );
              default:
                return null;
            }
          }}
        </QuizStep>
      </QuizTransition>
      <QuizNavigation />
    </QuizRoot>
  );
}
