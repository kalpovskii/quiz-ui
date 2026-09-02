# Contributing

Thanks for your interest in contributing to quiz-ui. We're happy to have you here.

Please take a moment to review this document before submitting your
first pull request. We also strongly recommend that you check for open
issues and pull requests to see if someone else is working on something
similar.

## About this repository

- We use [pnpm](https://pnpm.io) for development.

## Structure

| Path             | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| `/app`           | The Next.js application for the website (docs + example).                         |
| `/components`    | The React components — `components/ui/quiz/` is the registry source.              |
| `/content/docs`  | MDX documentation, one page per component.                                        |
| `/lib`           | `utils.ts` — the shared `cn()` helper.                                            |
| `/hooks`         | Site-chrome hooks (not registry hooks — those live in `components/ui/quiz/core`). |
| `/registry.json` | The registry manifest for the components.                                         |
| `/public/r`      | Generated registry JSON output — do not hand-edit.                                |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/kalpovskii/quiz-ui.git
```

### Navigate to project directory

```bash
cd quiz-ui
```

### Create a new branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm i
```

#### Examples

To run the quiz-ui website:

```bash
pnpm dev
```

## Components

We use a registry system for developing components. You can find the
source code for the components under `components/ui/quiz`.

```
components
└── ui
    └── quiz
        ├── core            headless engine (types, engine, provider, hooks)
        ├── quiz-choice.tsx
        └── quiz-slider.tsx
```

When adding or modifying components, please ensure that:

1. You follow the existing pattern: Radix primitive underneath, styled
   with Tailwind + CVA, current-step answer read/written via
   `useQuizAnswers()` — never `value`/`onChange` props.
2. Naming is `Quiz<Noun>` for components, `useQuiz<Noun>` for hooks. No
   abbreviations — the AI-friendliness of this registry depends on the
   convention holding everywhere.
3. You update the documentation (`content/docs/components/<name>.mdx`).
4. You update the `registry.json` file with your component's metadata
   (`files`, `dependencies`, `registryDependencies`).
5. You run `pnpm registry:build` to regenerate `public/r/*.json` before
   opening a PR — a stale build means the CLI ships old code to consumers.

## Commit Convention

Before you create a Pull Request, please check whether your commits
comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message`, using one of the following categories:

- `feat` / `feature`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally referencing an issue if present)
- `refactor`: any code-related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation
- `build`: changes regarding the build system, dependencies, or new dependencies
- `test`: all changes regarding tests
- `ci`: all changes regarding CI configuration
- `chore`: everything else

e.g. `feat(components): add QuizRating half-star support`

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub.
