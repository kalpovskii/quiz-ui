export interface DocsNavItem {
  title: string;
  href: string;
  /** Path to the source .mdx, relative to repo root — used by the raw-markdown route. */
  file: string;
}

export interface DocsNavGroup {
  title: string;
  items: DocsNavItem[];
}

export const docsTopLevel: DocsNavItem[] = [
  { title: "Introduction", href: "/docs", file: "content/docs/index.mdx" },
  { title: "Getting Started", href: "/docs/getting-started", file: "content/docs/getting-started.mdx" },
];

export const docsGroups: DocsNavGroup[] = [
  {
    title: "Layout & Flow",
    items: [
      { title: "QuizRoot", href: "/docs/components/quiz-root", file: "content/docs/components/quiz-root.mdx" },
      { title: "QuizStep", href: "/docs/components/quiz-step", file: "content/docs/components/quiz-step.mdx" },
      { title: "QuizProgress", href: "/docs/components/quiz-progress", file: "content/docs/components/quiz-progress.mdx" },
      { title: "QuizNavigation", href: "/docs/components/quiz-navigation", file: "content/docs/components/quiz-navigation.mdx" },
      { title: "QuizTransition", href: "/docs/components/quiz-transition", file: "content/docs/components/quiz-transition.mdx" },
    ],
  },
  {
    title: "Answer Inputs",
    items: [
      { title: "QuizChoice", href: "/docs/components/quiz-choice", file: "content/docs/components/quiz-choice.mdx" },
      { title: "QuizImageChoice", href: "/docs/components/quiz-image-choice", file: "content/docs/components/quiz-image-choice.mdx" },
      { title: "QuizSlider", href: "/docs/components/quiz-slider", file: "content/docs/components/quiz-slider.mdx" },
      { title: "QuizRating", href: "/docs/components/quiz-rating", file: "content/docs/components/quiz-rating.mdx" },
      { title: "QuizTextInput", href: "/docs/components/quiz-text-input", file: "content/docs/components/quiz-text-input.mdx" },
      { title: "QuizEmailInput", href: "/docs/components/quiz-email-input", file: "content/docs/components/quiz-email-input.mdx" },
    ],
  },
  {
    title: "Results",
    items: [
      { title: "QuizResult", href: "/docs/components/quiz-result", file: "content/docs/components/quiz-result.mdx" },
    ],
  },
  {
    title: "Extras",
    items: [
      { title: "QuizDialog", href: "/docs/components/quiz-dialog", file: "content/docs/components/quiz-dialog.mdx" },
    ],
  },
];

/** Flat lookup used by the raw-markdown route handler below. */
export const docsFileMap: Record<string, string> = Object.fromEntries(
  [...docsTopLevel, ...docsGroups.flatMap((g) => g.items)].map((item) => [item.href, item.file])
);