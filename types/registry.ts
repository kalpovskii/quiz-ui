/**
 * App-level type re-exports for the docs site (e.g. rendering a component
 * list page from registry.json). The types that matter for actually using
 * quiz-ui — QuizDefinition, QuizStepDefinition, QuizBranchRule, etc. — live
 * in components/ui/quiz/core/types.ts and ship as part of the quiz-core
 * registry item; import them from there in consumer code, not from here.
 */
export interface RegistryItemSummary {
  name: string;
  type: string;
  title?: string;
  description: string;
  registryDependencies?: string[];
}

export interface Registry {
  name: string;
  homepage: string;
  items: RegistryItemSummary[];
}
