# quiz-ui

Radix-based components for building quiz funnels, distributed shadcn-style.

Visit the [docs](./content/docs) · Built on [shadcn/ui](https://ui.shadcn.com)

## Contributing

Please read the [contributing guide](./contributing.md).

### Usage Example

To add the `quiz-choice` component to your project, run the following command:

```bash
pnpm dlx shadcn@latest add @quiz-ui/quiz-choice
```

(First time using a quiz-ui component in this project? Add the registry
to your `components.json` — see [Getting Started](./content/docs/getting-started.mdx).)

Once installed, you can import and use the component in your files:

```tsx
import {
  QuizRoot, QuizStep, QuizChoiceGroup, QuizNavigation,
} from "@/components/ui/quiz";
import type { QuizDefinition } from "@/components/ui/quiz/core";

const quiz: QuizDefinition = {
  id: "example",
  entry: "goal",
  steps: [
    {
      id: "goal",
      type: "choice",
      props: {
        question: "What's your goal?",
        options: [
          { value: "strength", label: "Build strength" },
          { value: "cardio", label: "Improve cardio" },
        ],
      },
    },
  ],
};

export default function App() {
  return (
    <QuizRoot definition={quiz} onComplete={(answers) => console.log(answers)}>
      <QuizStep>
        {(step) =>
          step.type === "choice" ? (
            <QuizChoiceGroup options={step.props.options as any} />
          ) : null
        }
      </QuizStep>
      <QuizNavigation />
    </QuizRoot>
  );
}
```

**Note:** The import path `@/components/ui/quiz` assumes your project
has a path alias configured (see `components.json`'s `aliases.ui`).
Adjust the path to match your project's structure if needed.

See `app/example/` in this repo for a complete branching funnel.

## Repo structure

```
app/                     Next.js site (docs + home + /example)
components/ui/quiz/      registry source — what ships to consumers
  core/                  headless engine (state machine, hooks)
  quiz-*.tsx             styled components, one per file
content/docs/            MDX documentation
registry.json            registry manifest (source of truth for `pnpm registry:build`)
public/r/                generated registry JSON output
public/llms.txt          AI-agent-facing index of every component
```

## Local development

```bash
pnpm install
pnpm dev              # run the docs/demo site
pnpm registry:build   # regenerate public/r/*.json (runs `shadcn build` against registry.json)
pnpm typecheck
```

## Design notes

- **Two layers.** `components/ui/quiz/core` is headless (state machine +
  hooks, no styling); the rest of `components/ui/quiz/` is styled and
  built on Radix + the core hooks. Restyling never touches branching
  logic; extending branching logic never touches component code.
- **Branching is data, not code.** A `QuizDefinition` is a plain,
  serializable object. Answer components never receive `value`/`onChange`
  props — they read/write the current step's answer via
  `useQuizAnswers()` automatically.
- **Distribution mirrors shadcn.** `registry.json` conforms to shadcn's
  native registry schema, built with shadcn's own `shadcn build` CLI
  command rather than a bespoke script — see `contributing.md`.

## License

MIT
