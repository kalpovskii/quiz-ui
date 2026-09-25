/**
 * Single source of truth for all SEO landing pages.
 * Add a new entry to create a new statically-generated page at /<slug>.
 * Every entry MUST have a unique slug and unique title.
 */

export interface SeoPageEntry {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  faqs: { question: string; answer: string }[];
}

const faqDefault = (
  q1: string,
  a1: string,
  q2: string,
  a2: string,
  q3: string,
  a3: string,
) => [
  { question: q1, answer: a1 },
  { question: q2, answer: a2 },
  { question: q3, answer: a3 },
];

export const seoPages: SeoPageEntry[] = [
  // ── Quiz Funnel ──────────────────────────────────────────
  {
    slug: "quiz-funnel",
    keyword: "quiz funnel",
    title: "Quiz Funnel — Build Multi-Step Quiz Funnels with Radix Components",
    description:
      "Build a quiz funnel with headless Radix components. Handle branching, progress, and result screens — all as plain source code.",
    intro:
      "A quiz funnel guides users through a sequence of questions, branches their path depending on each answer, and lands them on a result screen. With quiz-ui, you define the entire funnel as a plain JavaScript object and drop the components into your React project — no npm package, no black box.",
    faqs: faqDefault(
      "What is a quiz funnel?",
      "A quiz funnel is a multi-step question flow that routes users through different paths based on their answers, ending on a personalized result or a lead-capture form.",
      "Why use Radix components for a quiz funnel?",
      "Radix UI primitives give you accessible, unstyled building blocks. quiz-ui layers the funnel engine and answer components on top, so you own the source and style it however you want.",
      "Can quiz-ui handle branching in a quiz funnel?",
      "Yes. Each step in a QuizDefinition can declare branch rules that evaluate against collected answers — the first rule that matches determines where the funnel goes next.",
    ),
  },
  {
    slug: "quiz-funnel-builder",
    keyword: "quiz funnel builder",
    title: "Quiz Funnel Builder — Headless Builder for React & Next.js",
    description:
      "A quiz funnel builder that ships as source code. Build branching quiz flows with progress tracking, result screens, and full control over every pixel.",
    intro:
      "Quiz funnel builders typically lock you into a SaaS platform with limited styling. quiz-ui is different: you install exactly the components you need as .tsx files into your own project, then style them with Tailwind or plain CSS. The funnel logic — branching, progress, navigation — lives in a serializable QuizDefinition object.",
    faqs: faqDefault(
      "What makes quiz-ui different from other quiz funnel builders?",
      "It's headless and source-first. You install individual components (no npm package), define the funnel as data, and own every line of code in your repo.",
      "Do I need a paid subscription?",
      "No. quiz-ui is open source and MIT licensed. There's no SaaS to pay for and no seat limits.",
      "Can I use it with Next.js?",
      "Yes. quiz-ui works with any React 18+ project including Next.js App Router. Every component starts with 'use client' so it integrates cleanly.",
    ),
  },
  {
    slug: "quiz-funnel-software",
    keyword: "quiz funnel software",
    title: "Quiz Funnel Software — Open Source Alternative to SaaS Quizzes",
    description:
      "Quiz funnel software that lives in your repo, not on someone else's server. Full control, zero subscription, built on Radix UI primitives.",
    intro:
      "Most quiz funnel software comes with a monthly fee and a walled garden. quiz-ui flips the model: it's a set of React components you install as source — no SaaS, no API calls, no vendor lock-in. The funnel engine handles branching, progress calculation, and answer collection; you handle the styling.",
    faqs: faqDefault(
      "How is quiz-ui different from SaaS quiz funnel software?",
      "You own the code completely. No monthly fees, no usage limits, no data leaving your infrastructure. The components are plain .tsx files in your project.",
      "Does it need a backend?",
      "No. The engine runs entirely in the browser via React state. You decide what to do with the collected answers — send them to your API, CRM, or nothing at all.",
      "What components are included?",
      "QuizRoot, QuizStep, QuizProgress, QuizNavigation, QuizTransition, QuizChoiceGroup, QuizSlider, QuizRating, QuizTextInput, QuizEmailInput, QuizImageChoice, QuizResult, and QuizDialog.",
    ),
  },
  {
    slug: "quiz-funnel-examples",
    keyword: "quiz funnel examples",
    title: "Quiz Funnel Examples — Interactive Demos Built with Radix UI",
    description:
      "Live quiz funnel examples built with headless Radix components. See slider, rating, choice, and email inputs working together with branching and progress.",
    intro:
      "The best way to understand a quiz funnel is to see one working. quiz-ui ships with interactive examples for every component — choice cards, image grids, sliders, rating scales, text inputs, and email capture — each wired into a real QuizRoot with a progress bar and navigation buttons.",
    faqs: faqDefault(
      "Where can I see quiz funnel examples?",
      "The quiz-ui docs site includes a live example page that runs a branching fitness-quiz funnel using every component in the registry.",
      "Can I copy the example code?",
      "Yes. Every example has a 'Copy' button for both the LLM prompt and the raw TypeScript code. Drop either into your project.",
      "Do the examples show branching?",
      "Yes. The fitness quiz example branches on the first answer: 'Build strength' leads to a rating question, 'Improve cardio' leads to a slider question, and both converge on email → result.",
    ),
  },
  {
    slug: "quiz-funnel-template",
    keyword: "quiz funnel template",
    title: "Quiz Funnel Template — Copy-Paste Templates for React",
    description:
      "Ready-to-use quiz funnel templates for React. Copy and paste a complete funnel definition with branching, progress, and result screens.",
    intro:
      "Start with a working quiz funnel template instead of building from scratch. Each template is a complete QuizDefinition object plus the JSX that renders it — copy one file, tweak the questions, and you have a live funnel in minutes.",
    faqs: faqDefault(
      "What quiz funnel templates are available?",
      "The quickest way to get a template is the examples section on the quiz-ui home page — pick a component example, copy the code, and paste it into your project.",
      "Are templates free?",
      "Everything in quiz-ui is open source and free. No premium templates, no pro tier.",
      "How do I customize a template?",
      "Edit the QuizDefinition object to change questions, options, and branching rules. Change the className props on each component to restyle it with Tailwind.",
    ),
  },
  {
    slug: "quiz-funnel-for-lead-generation",
    keyword: "quiz funnel for lead generation",
    title: "Quiz Funnel for Lead Generation — Capture Leads with Interactive Quizzes",
    description:
      "Build a quiz funnel for lead generation. Capture emails, qualify leads with branching logic, and send enriched data to your CRM.",
    intro:
      "A quiz funnel for lead generation turns passive visitors into qualified leads. quiz-ui gives you the building blocks: question steps that collect data, an email capture component with format validation, and a result screen that can trigger your CRM integration. Because the components are headless, you style the entire funnel to match your brand.",
    faqs: faqDefault(
      "How does a quiz funnel generate leads?",
      "Visitors answer questions that segment them, then reach an email capture step or a result screen with a CTA. The collected answers plus contact info become a lead record.",
      "Can quiz-ui validate email addresses?",
      "Yes. QuizEmailInput validates email format and shows inline error messages when the value is malformed.",
      "How do I send leads to my CRM?",
      "quiz-ui handles the UI. In your onComplete callback you receive all collected answers — call your CRM API, webhook, or server action from there.",
    ),
  },
  {
    slug: "quiz-funnel-react",
    keyword: "quiz funnel react",
    title: "Quiz Funnel React — React Components for Quiz Funnels",
    description:
      "Build a quiz funnel in React with headless Radix components. Works with Next.js, Vite, Remix — any React 18+ project.",
    intro:
      "quiz-ui is purpose-built for React developers who need quiz funnels. Every component is a React functional component using Radix UI primitives under the hood. The funnel engine is a useReducer-based state machine that handles branching resolution, answer collection, and progress calculation without external dependencies.",
    faqs: faqDefault(
      "Does quiz-ui work with Next.js?",
      "Yes. Every component has 'use client', so it works with Next.js App Router. Render a QuizRoot in any client component or page.",
      "What version of React is required?",
      "React 18 or later. quiz-ui uses hooks, context, and useReducer internally.",
      "Does it work with Vite or Remix?",
      "Yes. The components are standard React — nothing Next.js-specific in the quiz engine or components.",
    ),
  },
  {
    slug: "quiz-funnel-nextjs",
    keyword: "quiz funnel nextjs",
    title: "Next.js Quiz Funnel — Quiz Funnels for Next.js App Router",
    description:
      "Build a quiz funnel in Next.js with headless Radix components. Works with App Router, server components, and shadcn/ui out of the box.",
    intro:
      "Next.js is the natural home for quiz-ui. Every component is compatible with the App Router, and the headless architecture means you style with Tailwind — the same stack shadcn/ui projects already use. Define your funnel as data, render it in a client component, and handle the completed answers in a server action.",
    faqs: faqDefault(
      "Do I need 'use client' for quiz-ui in Next.js?",
      "Yes. quiz-ui components use React state and context, so wrap them in a client component or add 'use client' to the page.",
      "Can I use server actions with quiz-ui?",
      "Yes. Pass a server action to the onComplete prop of QuizRoot — the funnel calls it when the user finishes.",
      "Does it work with Turbopack?",
      "Yes. quiz-ui is tested with Next.js 16 and Turbopack. Run pnpm dev and everything builds fine.",
    ),
  },
  {
    slug: "quiz-funnel-wordpress",
    keyword: "quiz funnel wordpress",
    title: "WordPress Quiz Funnel — Headless Quiz Components for WP",
    description:
      "Add a quiz funnel to a WordPress site using headless React components. Embed the quiz in a Gutenberg block or a custom page.",
    intro:
      "WordPress sites can use quiz-ui through a headless setup: render your React app (Next.js, Vite, or plain React) on a sub-path, embed it in a Gutenberg block, or add it to a custom page template. The quiz runs entirely in the browser — no WordPress plugin needed.",
    faqs: faqDefault(
      "Do I need a WordPress plugin for quiz-ui?",
      "No. quiz-ui is a React component library, not a WordPress plugin. Embed the React build in your WP site.",
      "Can I use quiz-ui with a headless WordPress setup?",
      "Yes. If you're using Next.js as a frontend for a headless WordPress backend, quiz-ui works natively.",
      "How do I collect leads in WordPress?",
      "In your onComplete callback, POST the answers to your WordPress REST API or a custom endpoint.",
    ),
  },
  {
    slug: "build-a-quiz-funnel",
    keyword: "build a quiz funnel",
    title: "Build a Quiz Funnel — Step by Step with Headless Components",
    description:
      "Learn how to build a quiz funnel in React. Define steps, add branching, wire up progress, and capture results — all with open source components.",
    intro:
      "Building a quiz funnel from scratch means handling state, branching, progress tracking, and validation. quiz-ui provides all of that as headless React components. This page walks through the pieces: define a QuizDefinition, wrap it in QuizRoot, render steps with QuizStep, and add navigation with QuizNavigation.",
    faqs: faqDefault(
      "What's the first step to build a quiz funnel?",
      "Define a QuizDefinition object with an id, an entry step, and a list of steps — each step has an id, type, and optional branch rules.",
      "How do I add branching?",
      "Add a branch array to any step. Each rule checks an answer value — if it matches, the funnel goes to the specified step. Otherwise it falls through to next.",
      "How do I handle the result?",
      "Add a result-type step at the end of your funnel and use QuizResult to read back all collected answers.",
    ),
  },
  {
    slug: "free-quiz-funnel",
    keyword: "free quiz funnel",
    title: "Free Quiz Funnel — Build Quiz Funnels at Zero Cost",
    description:
      "Build a free quiz funnel with open source components. No subscription, no seat limits, no vendor lock-in — just React components you own.",
    intro:
      "Most quiz funnel tools charge monthly fees. quiz-ui is free and open source (MIT license) — every component installs as plain TypeScript files directly into your project. There's no SaaS, no usage caps, and no monthly bill. Install what you need and ship it.",
    faqs: faqDefault(
      "Is quiz-ui really free?",
      "Yes. quiz-ui is MIT licensed. No paid tiers, no premium components, no seat limits.",
      "Are there hidden costs?",
      "No. The only cost is your own hosting. The components are source code in your repo — they don't phone home.",
      "How does it compare to paid quiz funnel tools?",
      "Paid tools bundle hosting, analytics, and customer support. quiz-ui gives you the UI layer — you provide the rest yourself, and you keep full control.",
    ),
  },
  {
    slug: "quiz-marketing-funnel",
    keyword: "quiz marketing funnel",
    title: "Quiz Marketing Funnel — Interactive Marketing Quizzes for React",
    description:
      "Build a quiz marketing funnel that segments your audience and captures qualified leads. Headless Radix components, zero SaaS fees.",
    intro:
      "A quiz marketing funnel replaces static landing pages with an interactive question flow that segments visitors and qualifies them before they reach your sales team. quiz-ui gives you the front-end components: branching logic to route different answers, an email capture step, and a result screen to display personalized recommendations.",
    faqs: faqDefault(
      "How do marketing quizzes increase conversions?",
      "Interactive content engages visitors longer than static pages. A quiz that asks relevant questions and delivers a personalized result builds trust and captures more qualified leads.",
      "Can I A/B test quiz funnels?",
      "Yes — because quiz-ui components live in your own codebase, you can use any A/B testing tool (Vercel Edge Config, LaunchDarkly, etc.) to swap QuizDefinition objects.",
      "How do I track quiz performance?",
      "Add your analytics (Plausible, PostHog, GA) to the onComplete callback or embed tracking events in your funnel page.",
    ),
  },

  // ── Quiz Builder ─────────────────────────────────────────
  {
    slug: "quiz-builder",
    keyword: "quiz builder",
    title: "Quiz Builder — Headless React Components for Building Quizzes",
    description:
      "A quiz builder that ships as source code. Build single-select, multi-select, slider, rating, and text input questions with Radix primitives.",
    intro:
      "quiz-ui is a quiz builder for React developers. Instead of a drag-and-drop SaaS tool, you get composable, headless components you install into your project and style with Tailwind. The quiz engine handles state, branching, and progress — so you focus on your questions and design.",
    faqs: faqDefault(
      "What types of quiz questions are supported?",
      "Single-select (radio), multi-select (checkbox), image choice, numeric slider, star/numeric rating, free text, and validated email input.",
      "Is there an AI quiz generator?",
      "quiz-ui components can be generated by AI agents. The examples section includes copy-paste prompts for every component — feed them to an LLM and it produces the code.",
      "Can I build a scored quiz?",
      "The engine collects answers — scoring is up to you. Use the onComplete callback to compute a score from the collected answers.",
    ),
  },
  {
    slug: "headless-quiz-builder",
    keyword: "headless quiz builder",
    title: "Headless Quiz Builder — Unstyled Quiz Components for React",
    description:
      "Build a quiz with headless components. No colors, borders, or layout baked in — style every element with Tailwind or plain CSS.",
    intro:
      "A headless quiz builder separates logic from presentation. quiz-ui components ship with just the structural classes Radix needs to work — everything visual is your choice. Restyle a slider, swap card borders, or theme the entire funnel without touching branching logic.",
    faqs: faqDefault(
      "What does 'headless' mean for a quiz builder?",
      "The components have no default colors, borders, or layout beyond what Radix primitives require to function. Every visual decision is yours via className props.",
      "How do I style the components?",
      "Pass Tailwind classes to the className props on each component. QuizSlider, for example, accepts valueClassName, trackClassName, rangeClassName, and thumbClassName.",
      "Can I use CSS modules instead of Tailwind?",
      "Yes. The className props accept any valid CSS class string.",
    ),
  },
  {
    slug: "open-source-quiz-builder",
    keyword: "open source quiz builder",
    title: "Open Source Quiz Builder — Free Quiz Components for React",
    description:
      "An open source quiz builder for React. MIT licensed, installs as source, built on Radix UI primitives. No SaaS, no limits.",
    intro:
      "quiz-ui is an open source quiz builder distributed shadcn-style: you install individual components as .tsx files into your project. The entire source — the engine, the hooks, every component — lives in your repo under an MIT license. Modify anything. Ship it anywhere.",
    faqs: faqDefault(
      "What license does quiz-ui use?",
      "MIT. Free for personal and commercial use. No attribution required.",
      "Can I modify the source code?",
      "Yes — the components install as plain .tsx files. Edit them like any other file in your project.",
      "Where can I contribute?",
      "The repository is on GitHub at github.com/kalpovskii/quiz-ui. PRs and issues are welcome.",
    ),
  },
  {
    slug: "radix-quiz-components",
    keyword: "radix quiz components",
    title: "Radix Quiz Components — Quiz UI Built on Radix Primitives",
    description:
      "Quiz components built on Radix UI: radio groups, checkboxes, sliders, toggle groups, labels, dialogs, and progress bars.",
    intro:
      "Every quiz-ui component sits on top of a Radix UI primitive: QuizChoiceGroup uses Radix Radio Group, QuizSlider uses Radix Slider, QuizRating uses Radix Toggle Group, QuizDialog uses Radix Dialog. You get full accessibility and keyboard navigation out of the box, plus complete control over styling.",
    faqs: faqDefault(
      "Which Radix primitives does quiz-ui use?",
      "RadioGroup, Checkbox, Slider, ToggleGroup, Label, Progress, and Dialog — all from @radix-ui/react-*.",
      "Do I need to install Radix separately?",
      "No. Installing a quiz-ui component via the shadcn CLI automatically installs the Radix packages it depends on.",
      "Are the components accessible?",
      "Yes. Each component inherits Radix's built-in ARIA attributes, keyboard navigation, and focus management.",
    ),
  },
  {
    slug: "shadcn-quiz",
    keyword: "shadcn quiz",
    title: "shadcn Quiz — Quiz Components for shadcn/ui Projects",
    description:
      "A shadcn/ui-compatible quiz registry. Install quiz components with npx shadcn add — same workflow as shadcn/ui.",
    intro:
      "quiz-ui is a shadcn/ui registry. That means you install quiz components exactly like you install shadcn/ui components: add the @quiz-ui registry URL to your components.json, then run npx shadcn add @quiz-ui/quiz-choice. The component lands in your components/ui/quiz/ folder as a .tsx file you own.",
    faqs: faqDefault(
      "How do I install quiz-ui in a shadcn/ui project?",
      "Add '@quiz-ui': 'https://quiz-ui-phi.vercel.app/r/{name}.json' to the registries map in your components.json, then run npx shadcn@latest add @quiz-ui/quiz-choice.",
      "Does quiz-ui use the same conventions as shadcn/ui?",
      "Yes. Components land in components/ui/quiz/, use cn() for className merging, and are styled with Tailwind + CVA.",
      "Can I use both shadcn/ui and quiz-ui together?",
      "Absolutely. quiz-ui components import from the same lib/utils.ts and follow the same patterns.",
    ),
  },
  {
    slug: "react-quiz-builder",
    keyword: "react quiz builder",
    title: "React Quiz Builder — Build Quizzes as React Components",
    description:
      "A React quiz builder that uses useReducer for state management. Branching logic as data, questions as components — all in your own codebase.",
    intro:
      "quiz-ui is a React quiz builder that treats a quiz as data, not UI. You define a QuizDefinition object (id, entry step, array of step definitions) and wrap it in QuizRoot. The engine — a useReducer-based state machine — handles answer collection, branching resolution, and progress calculation. Your job is styling the questions.",
    faqs: faqDefault(
      "How does the React state management work?",
      "QuizProvider (used by QuizRoot) owns a useReducer initialized from your QuizDefinition. All components read/write via the useQuizAnswers and useQuizStep hooks.",
      "Can I use Redux or Zustand instead?",
      "The engine is self-contained. If you want external state, call onComplete with the answers and feed them into your store.",
      "Does it support React Server Components?",
      "The quiz components are client components ('use client'). You can render QuizRoot inside a client boundary within an RSC page.",
    ),
  },
  {
    slug: "quiz-builder-component-library",
    keyword: "quiz builder component library",
    title: "Quiz Builder Component Library — Reusable Quiz Components",
    description:
      "A component library for building quizzes in React. Drop in question types, progress bars, navigation, and result screens.",
    intro:
      "quiz-ui is a focused component library for quiz building. Instead of a giant UI kit, you get exactly the pieces a quiz funnel needs: a root provider, a step renderer, answer components for every common question type, a progress bar, navigation buttons, transitions, and a result screen. Install only what you use.",
    faqs: faqDefault(
      "What components are in the library?",
      "QuizRoot, QuizStep, QuizProgress, QuizNavigation, QuizTransition, QuizChoiceGroup, QuizImageChoice, QuizSlider, QuizRating, QuizTextInput, QuizEmailInput, QuizResult, and QuizDialog.",
      "Can I install individual components?",
      "Yes. Each component installs independently via the shadcn CLI. Install only the question types your funnel actually uses.",
      "How big is each component?",
      "Most components are under 100 lines of TypeScript. The engine (core) is about 160 lines — small enough to read in one sitting.",
    ),
  },
  {
    slug: "quiz-components",
    keyword: "quiz components",
    title: "Quiz Components — Reusable Question Inputs for React Quizzes",
    description:
      "Reusable quiz components: radio groups, checkboxes, sliders, ratings, text inputs, and email fields — all headless and unstyled.",
    intro:
      "quiz-ui provides a set of quiz components that cover every common question type: single-select choice, multi-select checkbox, image choice grid, numeric slider, star/numeric rating, free text, and validated email. Each component reads and writes its answer automatically via React context — you never pass value/onChange props.",
    faqs: faqDefault(
      "Why don't quiz-ui components use value/onChange props?",
      "Because they read and write the current step's answer automatically via useQuizAnswers(). The engine owns the state; components just hook into it. This keeps QuizDefinition objects serializable and portable.",
      "Can I create custom question components?",
      "Yes. Use the useQuizAnswers hook from quiz-core to read/write the answer for the current step inside your own component.",
      "Do I need to use all components?",
      "No. Install only the ones you need via the shadcn CLI.",
    ),
  },
  {
    slug: "interactive-quiz-components",
    keyword: "interactive quiz components",
    title: "Interactive Quiz Components — Engaging Question Inputs for React",
    description:
      "Build interactive quizzes with draggable sliders, clickable rating scales, and animated transitions between questions.",
    intro:
      "Interactive quiz components keep users engaged. quiz-ui provides a slider with a live value display, a rating scale with click-to-select buttons, image choice cards with visual feedback, and a QuizTransition component that animates between steps using CSS animations.",
    faqs: faqDefault(
      "How do I animate between quiz steps?",
      "Wrap your QuizStep in a QuizTransition component. It keys on the current step ID so React remounts — and re-animates — the subtree on every transition.",
      "Can I use custom animations?",
      "Yes. QuizTransition accepts a className prop — pass any CSS animation class. The docs include a quiz-ui-step-in keyframe you can drop in.",
      "Is the slider touch-friendly?",
      "Yes. QuizSlider wraps Radix Slider which supports touch, pointer, and keyboard input.",
    ),
  },
  {
    slug: "radix-ui-quiz",
    keyword: "radix ui quiz",
    title: "Radix UI Quiz — Quiz Components Powered by Radix Primitives",
    description:
      "A Radix UI quiz library. Each component wraps a Radix primitive — slider, radio group, toggle group, dialog, label, progress.",
    intro:
      "Radix UI provides unstyled, accessible primitives. quiz-ui wraps those primitives into opinionated quiz components that handle the wiring so you don't have to: a QuizChoiceGroup is a RadioGroup with answer-state binding, a QuizSlider is a Slider that writes into the engine, and so on.",
    faqs: faqDefault(
      "Do I need to know Radix UI to use quiz-ui?",
      "No. quiz-ui abstracts the Radix wiring. You just pass className props to style each piece.",
      "What happens if Radix updates?",
      "Since the components live in your project, you control the version. Update Radix packages like any other dependency.",
      "Can I access the underlying Radix components?",
      "Yes. The quiz-ui components are thin wrappers — you can inspect the source and use the Radix primitives directly if you prefer.",
    ),
  },

  // ── Multi-step Form ──────────────────────────────────────
  {
    slug: "multi-step-form",
    keyword: "multi step form",
    title: "Multi Step Form — Build Multi-Step Question Flows in React",
    description:
      "Build a multi step form with branching logic in React. Progress bar, back/next navigation, and validation per step.",
    intro:
      "A multi step form breaks a long form into digestible chunks, reducing abandonment and improving completion rates. quiz-ui handles the plumbing: a step-by-step flow with a progress indicator, back/next navigation that auto-disables until a step is answered, and branching to skip irrelevant questions.",
    faqs: faqDefault(
      "How is quiz-ui different from a regular multi step form?",
      "It adds a quiz engine on top: branching (different answers lead to different next steps), progress tracking, and a result screen — all from a declarative QuizDefinition object.",
      "Can each step have validation?",
      "Yes. Steps are 'required' by default — the Next button is disabled until the current step has a valid answer. QuizEmailInput adds format validation on top.",
      "Can I use it for surveys?",
      "Yes. Define your survey questions as steps, and use QuizResult or an onComplete callback to collect all answers at the end.",
    ),
  },
  {
    slug: "multi-step-form-builder",
    keyword: "multi step form builder",
    title: "Multi Step Form Builder — Build Form Wizards with React Components",
    description:
      "A multi step form builder for React. Define steps as data, render with headless components, and collect answers at the end.",
    intro:
      "quiz-ui acts as a multi step form builder: you define the form as a list of step objects (each with a type and props), and the engine handles the user's journey through them. It tracks which steps have been visited, computes progress, and collects all answers into a single object at the end.",
    faqs: faqDefault(
      "Can I build a form wizard with quiz-ui?",
      "Yes. A 'wizard' is just a multi-step form. Define your steps in order, and quiz-ui handles the forward/backward navigation.",
      "How do I collect all answers?",
      "Use the onComplete callback on QuizRoot — it receives the full answers object. Or use QuizResult to display them in the UI.",
      "Can users go back to change answers?",
      "Yes. QuizNavigation includes a back button. The engine tracks history and restores the previous step's state.",
    ),
  },
  {
    slug: "multi-step-quiz",
    keyword: "multi step quiz",
    title: "Multi Step Quiz — Build Interactive Quizzes with Multiple Questions",
    description:
      "Create a multi step quiz in React. Add questions one at a time, show progress, and display results at the end.",
    intro:
      "A multi step quiz presents one question at a time, keeping the user focused and reducing cognitive load. quiz-ui makes building one straightforward: define each question as a step with a type (choice, slider, rating, text, email), and the engine handles the rest.",
    faqs: faqDefault(
      "How many steps can a quiz have?",
      "No limit. A QuizDefinition can have as many steps as you need. The progress bar and navigation scale automatically.",
      "Can I mix different question types in one quiz?",
      "Yes. A single QuizDefinition can include any combination of choice, slider, rating, text, and email steps — each with its own type.",
      "Does the user see which step they're on?",
      "Yes. QuizProgress shows 'Step N of M' and a progress bar, both driven by the engine.",
    ),
  },
  {
    slug: "branching-quiz",
    keyword: "branching quiz",
    title: "Branching Quiz — Quiz Funnels That Route Based on Answers",
    description:
      "Build a branching quiz where answers determine the next question. Define branch rules as data — no spaghetti code.",
    intro:
      "A branching quiz changes its path depending on what the user answers. In quiz-ui, branching is data-driven: each step can declare a branch array of rules (if answer equals X, go to step Y). Rules evaluate in order; the first match wins; if no rule matches, the step's next fallback is used.",
    faqs: faqDefault(
      "How does branching work in quiz-ui?",
      "Every step can have a branch array. Each rule has a condition (equals or includes) and a goTo target. The engine evaluates rules against collected answers and routes accordingly.",
      "Can branches converge?",
      "Yes. Multiple branch paths can all point to the same next step — for example, both 'strength' and 'cardio' answers might lead to 'email'.",
      "How many branch rules per step?",
      "No limit. Define as many rules as you need. They're evaluated in array order.",
    ),
  },
  {
    slug: "branching-logic-form",
    keyword: "branching logic form",
    title: "Branching Logic Form — Conditional Question Routing in React",
    description:
      "Add branching logic to multi-step forms. Show or skip questions based on previous answers — all driven by a data object.",
    intro:
      "Branching logic lets your form adapt to each user. quiz-ui implements it through branch rules on each step: if a previous answer matches a value, jump to a specific step. Rules are serializable, predictable, and isolated from the UI — change the branching without touching a single component.",
    faqs: faqDefault(
      "Can I skip entire sections based on answers?",
      "Yes. A branch rule can jump to any step in the definition — even one that would otherwise be several steps ahead, effectively skipping the steps in between.",
      "Is there a limit to how deep branching can go?",
      "No. Branches can lead to steps that themselves have branches, creating nested routing. The engine handles any depth.",
      "How do I handle a 'none of the above' branch?",
      "Add a catch-all branch rule (a rule with neither equals nor includes) at the end of the array. If nothing else matches, it fires.",
    ),
  },
  {
    slug: "conditional-form",
    keyword: "conditional form",
    title: "Conditional Form — Show or Skip Form Fields Based on Answers",
    description:
      "Build a conditional form in React where fields appear or hide depending on previous answers. Data-driven, no spaghetti code.",
    intro:
      "A conditional form adapts to each user's answers: skip irrelevant questions, show deeper follow-ups only when needed, and keep the experience tight. quiz-ui handles this with branch rules on each step — the form flows where the answers lead.",
    faqs: faqDefault(
      "How is conditional logic different from branching?",
      "They're the same thing in quiz-ui. A conditional step is just a step with branching rules — the engine routes to the right next step based on conditions.",
      "Can I conditionally show multiple steps?",
      "Yes. Each step evaluates its own branch rules. A single answer can cause the funnel to skip several steps at once.",
      "Do I need to write if/else in my component code?",
      "No. Conditional logic lives in the branch rules on your QuizDefinition — the component code stays clean.",
    ),
  },
  {
    slug: "conditional-quiz",
    keyword: "conditional quiz",
    title: "Conditional Quiz — Quizzes That Adapt to Every Answer",
    description:
      "Build a conditional quiz where each question depends on previous answers. Branch to different paths dynamically.",
    intro:
      "A conditional quiz feels personal because it responds to the user's answers. quiz-ui makes this easy: define branch rules on any step, and the engine routes the user to the most relevant follow-up question. No answer is wasted — every choice can change the path.",
    faqs: faqDefault(
      "Can a quiz branch more than once?",
      "Yes. Every step can have its own branch rules. A funnel can branch, converge, and branch again as needed.",
      "What types of conditions are supported?",
      "The engine supports equals (exact value match) and includes (substring or array membership). For more complex logic, handle it in onComplete.",
      "Can I see an example?",
      "The quiz-ui home page has a live branching funnel demo: pick 'Build strength' vs 'Improve cardio' and watch it route differently.",
    ),
  },
  {
    slug: "multi-step-survey",
    keyword: "multi step survey",
    title: "Multi Step Survey — Build Survey Funnels with React Components",
    description:
      "Create a multi step survey in React. One question per screen, progress tracking, and branching based on responses.",
    intro:
      "A multi step survey keeps respondents engaged by showing one question at a time. quiz-ui's step-by-step architecture is ideal for surveys: each question is a step, answer collection is automatic, and the result screen (or onComplete callback) delivers all responses at once.",
    faqs: faqDefault(
      "Can I use quiz-ui for NPS surveys?",
      "Yes. Use a QuizRating component with numeric scale (0–10) for NPS, then follow up with a text step for open-ended feedback.",
      "How do I prevent survey abandonment?",
      "QuizProgress shows respondents how far they've come. The progress bar fills with each step, reducing the 'how long is this?' anxiety.",
      "Can I randomize question order?",
      "quiz-ui doesn't randomize steps natively, but you can shuffle your QuizDefinition.steps array before passing it to QuizRoot.",
    ),
  },

  // ── Lead Generation ──────────────────────────────────────
  {
    slug: "lead-generation-quiz",
    keyword: "lead generation quiz",
    title: "Lead Generation Quiz — Convert Visitors into Qualified Leads",
    description:
      "Build a lead generation quiz with branching logic. Segment your audience, capture emails, and send enriched data to your CRM.",
    intro:
      "A lead generation quiz does what a static form can't: it engages visitors, qualifies them through targeted questions, and captures their contact details at peak interest. quiz-ui provides the front-end components — question steps, an email input with validation, and a result screen — while you own the data pipeline.",
    faqs: faqDefault(
      "What makes a quiz better for lead gen than a form?",
      "Quizzes have higher conversion rates because they're interactive and deliver immediate value. Users who complete a quiz have already invested time and are more likely to share their email.",
      "How do I score leads?",
      "Define scoring logic in your onComplete callback or server action. Assign point values to specific answers and route leads into segments based on their score.",
      "Can I integrate with Mailchimp or HubSpot?",
      "Yes. Call their API from your onComplete callback with the collected answers. quiz-ui doesn't restrict your integrations.",
    ),
  },
  {
    slug: "lead-capture-quiz",
    keyword: "lead capture quiz",
    title: "Lead Capture Quiz — Capture Emails with Interactive Questions",
    description:
      "Build a lead capture quiz that collects emails after engaging users with questions. Higher opt-in rates than static forms.",
    intro:
      "A lead capture quiz earns the right to ask for an email. The user answers a few questions, gets a personalized result, and only then is asked for their contact details. This pattern consistently outperforms upfront lead forms. quiz-ui gives you the question components and an email validation step — you design the flow.",
    faqs: faqDefault(
      "Where should I place the email capture step?",
      "Most effective is just before the result screen — the user has invested time, seen value, and is primed to share their email.",
      "How do I validate emails?",
      "QuizEmailInput validates format in real time and shows an inline error. Add server-side validation in your onComplete handler.",
      "Can I skip email for some quiz paths?",
      "Yes. Branch around the email step based on earlier answers if certain paths don't need lead capture.",
    ),
  },
  {
    slug: "lead-qualification-quiz",
    keyword: "lead qualification quiz",
    title: "Lead Qualification Quiz — Qualify Prospects with Branching Logic",
    description:
      "Build a lead qualification quiz that scores prospects based on their answers. Route high-intent leads to sales automatically.",
    intro:
      "A lead qualification quiz separates serious prospects from casual browsers. quiz-ui handles the question flow and branching — each answer can route the user to a different path, and the onComplete callback receives all answers so you can score, tag, and route the lead to your CRM or sales team.",
    faqs: faqDefault(
      "How do I score a lead?",
      "In your onComplete callback, assign point values to specific answers. Leads above a threshold get tagged 'qualified' and routed to sales.",
      "Can I show different result screens based on lead score?",
      "Yes. Use branching to route qualified and unqualified leads to different result steps, each with its own QuizResult rendering.",
      "What data does the quiz collect for qualification?",
      "You define the questions. Typical qualification quizzes ask about budget, timeline, need, and authority — the BANT framework fits naturally into a quiz format.",
    ),
  },
  {
    slug: "quiz-lead-generation",
    keyword: "quiz lead generation",
    title: "Quiz Lead Generation — Generate Leads with Interactive Quizzes",
    description:
      "Quiz lead generation strategy: build engaging question flows that segment your audience and capture qualified contact details.",
    intro:
      "Quiz lead generation turns your website into a qualification engine. Instead of a generic 'Contact Us' form, a multi-step quiz asks targeted questions that both engage the visitor and collect actionable data. quiz-ui handles the technical side — you focus on the questions that matter to your business.",
    faqs: faqDefault(
      "What's the average conversion rate for quiz lead gen?",
      "Industry reports show 30-50% opt-in rates for well-designed quiz funnels, compared to 2-5% for static forms.",
      "How many questions should a lead gen quiz have?",
      "3-7 questions is the sweet spot — enough to qualify but not so many that users abandon. Longer quizzes work for high-consideration products.",
      "Can I embed the quiz on a landing page?",
      "Yes. Render QuizRoot anywhere in your React component tree — on a dedicated page, in a modal, or embedded in an existing page.",
    ),
  },
  {
    slug: "lead-gen-form",
    keyword: "lead gen form",
    title: "Lead Gen Form — Replace Static Forms with Interactive Quiz Flows",
    description:
      "Replace your lead gen form with an interactive quiz. Higher engagement, better data, more qualified leads.",
    intro:
      "Static lead gen forms ask for everything upfront. An interactive lead gen form — a quiz — builds engagement first, then captures the lead. quiz-ui provides the components to build this pattern in React: question steps, an email capture step, and a result screen that can trigger your CRM.",
    faqs: faqDefault(
      "Why replace a static form with a quiz?",
      "Quizzes have up to 16x higher conversion rates in some studies. They build rapport before asking for contact info.",
      "Can I still collect the same fields?",
      "Yes. Each quiz step captures one piece of data. At the end you have a richer profile than a single form could collect.",
      "Does quiz-ui handle file uploads?",
      "Not natively. Add a file input step using a custom component with useQuizAnswers if you need attachments.",
    ),
  },
  {
    slug: "quiz-to-capture-leads",
    keyword: "quiz to capture leads",
    title: "Quiz to Capture Leads — Interactive Lead Capture for Your Website",
    description:
      "Use a quiz to capture leads on your website. Engage visitors with questions, then collect their email at peak interest.",
    intro:
      "Using a quiz to capture leads follows a proven pattern: engage → qualify → capture. quiz-ui makes the technical side straightforward — the QuizDefinition defines the flow, the components render the UI, and the onComplete callback hands you the collected answers and contact details.",
    faqs: faqDefault(
      "What types of businesses use quiz lead capture?",
      "Ecommerce stores, SaaS companies, coaches, agencies, real estate — any business that benefits from qualifying leads before a sales conversation.",
      "How do I embed the quiz on my site?",
      "Add the QuizRoot component to any page in your React project. Use QuizDialog to open it in a modal.",
      "Can I track quiz conversions in analytics?",
      "Yes. Fire analytics events in the onComplete callback alongside your lead data processing.",
    ),
  },
  {
    slug: "interactive-lead-form",
    keyword: "interactive lead form",
    title: "Interactive Lead Form — Engaging Question Flows That Capture Leads",
    description:
      "Build an interactive lead form with branching questions, progress tracking, and validated email capture in React.",
    intro:
      "An interactive lead form replaces a flat list of fields with an engaging, step-by-step experience. quiz-ui's components — choice cards, sliders, rating scales, text and email inputs — give you the building blocks. The engine tracks progress and collects answers automatically.",
    faqs: faqDefault(
      "How many steps should an interactive lead form have?",
      "3-5 steps works well. Start with an engaging question (not 'give us your email'), build to the email step, and finish with a result.",
      "Can I A/B test different lead form flows?",
      "Yes. Since the QuizDefinition is a plain object, swap it conditionally to test different question sequences.",
      "Does it work on mobile?",
      "Yes. All quiz-ui components are mobile-first. The slider, rating, and choice cards are touch-friendly.",
    ),
  },
  {
    slug: "quiz-funnel-lead-gen",
    keyword: "quiz funnel lead gen",
    title: "Quiz Funnel Lead Gen — Full-Funnel Lead Generation with Quizzes",
    description:
      "Build a complete quiz funnel lead gen system. Engage, qualify, capture, and route — all with React components you own.",
    intro:
      "A quiz funnel lead gen system replaces your entire top-of-funnel with an interactive experience: engage visitors with a targeted question, qualify them through branching, capture their contact details, and route them to the right follow-up. quiz-ui provides the front-end stack for this pattern.",
    faqs: faqDefault(
      "What's the difference between a quiz and a quiz funnel?",
      "A quiz is the interactive experience. A quiz funnel is the full journey — from the first question through to the lead being routed to your CRM.",
      "Can I integrate quiz-ui with my email marketing?",
      "Yes. In onComplete, call your email platform's API to add the lead and trigger a welcome sequence.",
      "How do I measure quiz funnel performance?",
      "Track starts, completions, and conversion rate. quiz-ui doesn't include analytics — integrate your own (Plausible, GA, PostHog) via onComplete.",
    ),
  },

  // ── Quiz Types ───────────────────────────────────────────
  {
    slug: "recommendation-quiz",
    keyword: "recommendation quiz",
    title: "Recommendation Quiz — Product Recommendation Quiz Builder",
    description:
      "Build a recommendation quiz that matches products to customers. Branching logic routes answers to personalized results.",
    intro:
      "A recommendation quiz helps customers find the right product by asking targeted questions and routing them to a personalized result. quiz-ui handles the question flow and branching — each answer can lead to a different product recommendation, shown on the result screen.",
    faqs: faqDefault(
      "How does a product recommendation quiz work?",
      "Ask questions about the customer's needs, preferences, and constraints. Use branching to route them to a result step that displays the matching product.",
      "Can I show multiple products on the result?",
      "Yes. The QuizResult component receives all answers — filter and display any subset of your product catalog based on the collected data.",
      "How many products can a quiz recommend?",
      "No limit from quiz-ui's side. Your result logic can match against any number of products.",
    ),
  },
  {
    slug: "personality-quiz-builder",
    keyword: "personality quiz builder",
    title: "Personality Quiz Builder — Build 'Which Type Are You?' Quizzes",
    description:
      "Build a personality quiz in React. Score answers, assign personality types, and display custom result pages.",
    intro:
      "A personality quiz builder needs scoring, type assignment, and custom result pages. quiz-ui handles the question flow — you handle the scoring in your onComplete callback, then display the result using QuizResult. The components stay clean; the logic lives where it belongs.",
    faqs: faqDefault(
      "How do I score a personality quiz?",
      "In onComplete, tally which personality type (category) received the most answers. Pass that type to the result screen.",
      "Can I show different images per personality type?",
      "Yes. QuizResult receives all answers — conditionally render different images, text, and CTAs per type.",
      "How many personality types can I have?",
      "No limit. Your scoring logic handles as many types as you define.",
    ),
  },
  {
    slug: "assessment-quiz",
    keyword: "assessment quiz",
    title: "Assessment Quiz — Build Scored Assessments and Knowledge Tests",
    description:
      "Build an assessment quiz in React. Score answers automatically, show pass/fail results, and generate completion certificates.",
    intro:
      "An assessment quiz evaluates knowledge or readiness. quiz-ui provides the question components — choice, slider, rating, text — and the engine collects answers. In your onComplete callback, compute a score, determine pass/fail, and display the result. For certification, generate a PDF or trigger a server action.",
    faqs: faqDefault(
      "How do I calculate a score?",
      "In onComplete, iterate over answers and sum point values. quiz-ui doesn't enforce a scoring model — you define it.",
      "Can I show correct/incorrect feedback per question?",
      "Not natively. quiz-ui focuses on the question flow, not answer grading. Add feedback in a custom step or on the result screen.",
      "Can I time the assessment?",
      "Add your own timer logic. quiz-ui doesn't include a timer — but it doesn't prevent one either.",
    ),
  },
  {
    slug: "diagnostic-quiz",
    keyword: "diagnostic quiz",
    title: "Diagnostic Quiz — Interactive Problem-Diagnosis Quizzes",
    description:
      "Build a diagnostic quiz that identifies problems and recommends solutions. Branching logic routes to specific diagnoses.",
    intro:
      "A diagnostic quiz walks users through a decision tree: answer questions about symptoms or challenges, and the quiz identifies the root cause and recommends a solution. quiz-ui's branching engine is built for this — each answer routes to a more specific follow-up, narrowing down the diagnosis.",
    faqs: faqDefault(
      "How does branching help in a diagnostic quiz?",
      "Each branch rule narrows the diagnosis. Answer 'yes' to a symptom → go to a deeper question. Answer 'no' → skip to the next possible cause.",
      "Can I show treatment or solution recommendations?",
      "Yes. Use the result step to display a diagnosis and recommended next steps, with CTAs to book a consultation or purchase a solution.",
      "How many diagnostic paths can a quiz have?",
      "No limit. Branch rules can create as many paths as your diagnostic tree requires.",
    ),
  },
  {
    slug: "product-recommendation-quiz",
    keyword: "product recommendation quiz",
    title: "Product Recommendation Quiz — Match Products to Customer Needs",
    description:
      "Build a product recommendation quiz for your ecommerce store. Ask questions, match answers to products, and boost conversions.",
    intro:
      "A product recommendation quiz replaces a crowded product grid with a guided experience. quiz-ui lets you build the question flow: ask about use case, budget, and preferences, then branch to a result that shows the best-matching products. The components are headless — style them to match your store.",
    faqs: faqDefault(
      "Can I integrate with Shopify or WooCommerce?",
      "quiz-ui is front-end only. In your onComplete callback, fetch matching products from Shopify's Storefront API or your WooCommerce REST endpoint.",
      "How do I display recommended products on the result screen?",
      "QuizResult gives you all answers — match them against your product catalog and render product cards in the result component.",
      "Can I show prices and add-to-cart buttons?",
      "Yes. QuizResult is a render prop — return any JSX, including product cards with prices and add-to-cart links.",
    ),
  },
  {
    slug: "ecommerce-quiz",
    keyword: "ecommerce quiz",
    title: "Ecommerce Quiz — Interactive Product Finders for Online Stores",
    description:
      "Build an ecommerce quiz that helps shoppers find the right product. Increase conversion rate and average order value.",
    intro:
      "An ecommerce quiz — also called a product finder or shopping assistant — guides shoppers to the right product through a series of questions. quiz-ui gives you the interactive front-end: choice questions, image selection, a slider for budget, and a result screen showing matching products.",
    faqs: faqDefault(
      "Does an ecommerce quiz increase sales?",
      "Product recommendation quizzes typically increase conversion rates by reducing choice paralysis and matching customers to products they're more likely to buy.",
      "Can I use image choice for product selection?",
      "Yes. QuizImageChoice shows image cards — perfect for letting shoppers pick from visual options like styles, colors, or categories.",
      "Does quiz-ui integrate with payment gateways?",
      "No — quiz-ui is the UI layer. Connect to Stripe or Shopify in your onComplete callback or result screen.",
    ),
  },
  {
    slug: "onboarding-quiz",
    keyword: "onboarding quiz",
    title: "Onboarding Quiz — Interactive User Onboarding with Questions",
    description:
      "Build an onboarding quiz that personalizes the user experience. Ask questions during signup and customize the initial setup.",
    intro:
      "An onboarding quiz replaces generic welcome screens with targeted questions that personalise the first-run experience. quiz-ui components can render inline in your signup flow — ask about goals, preferences, and skill level, then use the answers to customize the user's dashboard or setup.",
    faqs: faqDefault(
      "Can I use quiz-ui inside a signup flow?",
      "Yes. Render QuizRoot anywhere — as a step in a multi-step signup form, in a modal after registration, or on a dedicated onboarding page.",
      "How do I save onboarding answers to the user profile?",
      "In onComplete, call your backend API to save the answers against the user record.",
      "Can I skip onboarding for returning users?",
      "Yes. Conditionally render QuizRoot based on whether the user has already completed onboarding.",
    ),
  },
  {
    slug: "quiz-landing-page",
    keyword: "quiz landing page",
    title: "Quiz Landing Page — High-Converting Landing Pages with Quizzes",
    description:
      "Build a quiz landing page that converts. Replace static hero sections with an interactive question flow.",
    intro:
      "A quiz landing page puts the interactive experience front and center — no scrolling past a hero, no hunting for a CTA. quiz-ui lets you embed a QuizRoot directly on your landing page. The first question is the hook; the email step captures the lead; the result screen delivers the payoff.",
    faqs: faqDefault(
      "Should the quiz replace the hero section?",
      "Often yes. An engaging first question outperforms a static headline in many A/B tests. Start with 'Find your perfect [X]' and go from there.",
      "Can I style the landing page to match my brand?",
      "Yes. quiz-ui components are headless — style every element with Tailwind to match your brand exactly.",
      "Can I embed the quiz in a page builder like Webflow or Framer?",
      "If you're hosting your React app alongside, yes. Otherwise, build the page in your React project and embed the quiz inline.",
    ),
  },

  // ── Tech / Developer ─────────────────────────────────────
  {
    slug: "quiz-definition-json",
    keyword: "quiz definition json",
    title: "Quiz Definition JSON — Define Quizzes as Data, Not Code",
    description:
      "Define your entire quiz funnel as a JSON-serializable QuizDefinition object. Branching, steps, and props — all in one place.",
    intro:
      "A QuizDefinition is a plain JavaScript object that describes every step of a quiz funnel: the entry point, the list of steps (each with an id, type, optional branch rules, and props), and the connections between them. Because it's pure data, you can store it in a config file, generate it with AI, or load it from a CMS.",
    faqs: faqDefault(
      "What does a QuizDefinition look like?",
      "{ id: 'my-quiz', entry: 'step-1', steps: [{ id: 'step-1', type: 'choice', props: { question: '...', options: [...] }, next: 'step-2' }] }",
      "Can I generate a QuizDefinition with AI?",
      "Yes. The examples section includes LLM prompts for every component. An AI can generate a complete QuizDefinition from a natural-language description.",
      "Is the QuizDefinition validated?",
      "The engine validates step references at runtime. Missing step IDs or circular references will throw clear errors.",
    ),
  },
  {
    slug: "ai-quiz-generator",
    keyword: "ai quiz generator",
    title: "AI Quiz Generator — Generate Quiz Funnels with LLM Prompts",
    description:
      "Use AI to generate quiz funnels. Copy a prompt from the examples, paste it into an LLM, and get a working QuizDefinition and component code.",
    intro:
      "quiz-ui is designed for AI-assisted development. Every component example includes a copy-paste prompt you can feed to an LLM. The AI generates a complete QuizDefinition plus the JSX that renders it — ready to drop into your project. No drag-and-drop, no manual wiring.",
    faqs: faqDefault(
      "Which AI models work best for generating quiz-ui code?",
      "Claude, GPT-4, and DeepSeek all produce working quiz-ui code from the example prompts. The components follow predictable naming conventions that LLMs handle well.",
      "Can the AI handle branching logic?",
      "Yes. Include branching in your prompt description ('if the user chooses X, show step Y') and the AI generates the branch rules.",
      "Where do I find the prompts?",
      "The quiz-ui home page has a 'Prompt' tab for every component example. Copy it and paste into any LLM chat.",
    ),
  },
  {
    slug: "web2web-builder",
    keyword: "web2web builder",
    title: "Web2Web Builder — AI-Powered No-Code Quiz Funnel Generation",
    description:
      "A web2web builder for quiz funnels: describe what you want in plain English and an AI generates the complete QuizDefinition and React components.",
    intro:
      "A web2web builder turns a natural-language description into a working web application. quiz-ui is built for this workflow: the QuizDefinition object is a serializable format that LLMs can generate. Describe your quiz funnel in plain English — 'a 3-step fitness quiz with a slider for budget and an email capture' — and the AI outputs ready-to-use React code.",
    faqs: faqDefault(
      "What is a web2web builder?",
      "A web2web builder uses AI to generate a complete web app (or component) from a text prompt — no manual coding. quiz-ui's data-driven architecture makes it an ideal target for this generation pattern.",
      "Can quiz-ui components be generated from a single prompt?",
      "Yes. The examples section has prompts for every component. A single prompt like 'Create a recommendation quiz with 4 choice questions and an email capture' can produce a full working funnel.",
      "Do I need to write any code myself?",
      "The AI generates the QuizDefinition and JSX. You copy-paste it into your project and style it with Tailwind. The engine, components, and hooks are installed via the shadcn CLI — no manual wiring.",
    ),
  },
  {
    slug: "generate-quiz-with-ai",
    keyword: "generate quiz with ai",
    title: "Generate Quiz with AI — AI-Assisted Quiz Development for React",
    description:
      "Generate a complete quiz with AI. Copy a prompt, get a working QuizDefinition and component code back in seconds.",
    intro:
      "Generating a quiz with AI is fast when the target library is designed for it. quiz-ui uses predictable naming (Quiz + Noun), serializable definitions, and clear prop contracts — all things LLMs handle reliably. The examples section includes ready-to-use prompts for every component type.",
    faqs: faqDefault(
      "How accurate is AI-generated quiz-ui code?",
      "From the example prompts, LLMs reliably produce correct QuizDefinition objects and JSX. Minor prop tweaks might be needed for complex branching, but single-step components work on the first try.",
      "Can I generate an entire multi-step funnel?",
      "Yes. Describe the full flow in your prompt — steps, question types, branching conditions — and the AI generates the complete definition.",
      "Do I need to know React to use quiz-ui with AI?",
      "Basic React knowledge helps for styling and integration, but the AI handles the quiz-ui-specific code. You just need to paste it into a component file.",
    ),
  },
  {
    slug: "headless-components",
    keyword: "headless components",
    title: "Headless Components — Unstyled, Accessible UI Primitives",
    description:
      "Headless components for React: no colors, no borders, no opinions. Style every pixel yourself with Tailwind or CSS.",
    intro:
      "Headless components separate behavior from presentation. quiz-ui's components carry only the structural classes Radix needs — positioning, layout, and interaction states. Everything visual (colors, borders, shadows, spacing) is yours to define through className props.",
    faqs: faqDefault(
      "What's the advantage of headless components?",
      "Your design, not ours. Headless components don't fight your stylesheet. Theme them once and every quiz matches your brand.",
      "Do headless components mean unstyled?",
      "They have no default visual styles — but they do have semantic HTML, ARIA attributes, and keyboard navigation. You add the visual layer.",
      "Are quiz-ui components fully headless?",
      "Yes. Even components like QuizProgress and QuizTransition have no baked-in colors or sizes — every class is a prop you pass.",
    ),
  },
  {
    slug: "quiz-framework",
    keyword: "quiz framework",
    title: "Quiz Framework — A Lightweight Quiz Engine for React",
    description:
      "A quiz framework built on a useReducer state machine. Handles branching, progress, and answer collection — less than 200 lines.",
    intro:
      "quiz-ui's core is a lightweight quiz framework: a single useReducer-based state machine that handles step transitions, branching resolution, answer collection, and progress calculation. The entire engine is under 200 lines of TypeScript — read it, understand it, extend it.",
    faqs: faqDefault(
      "How does the quiz engine work?",
      "The engine is a reducer that responds to ANSWER, ADVANCE, BACK, GO_TO, and RESET actions. Branching is done by evaluating branch rules (equals/includes) against collected answers.",
      "Can I extend the engine?",
      "Yes — the source lands in your project. Add new action types, modify the branching logic, or integrate external state.",
      "What's the bundle size impact?",
      "Minimal. The engine has zero external dependencies beyond React itself. Most components are under 100 lines.",
    ),
  },
  {
    slug: "customizable-quiz",
    keyword: "customizable quiz",
    title: "Customizable Quiz — Fully Themable Quiz Components for React",
    description:
      "Build a fully customizable quiz. Every component accepts className props — change colors, borders, spacing, and animations.",
    intro:
      "A customizable quiz means you're not stuck with someone else's design. quiz-ui components expose granular className props: style the track, range, and thumb of a slider independently; change the active and inactive states of choice cards; theme the progress bar. Nothing is hardcoded.",
    faqs: faqDefault(
      "How many className props does a component have?",
      "It varies. QuizSlider has 5 (className, valueClassName, trackClassName, rangeClassName, thumbClassName). QuizChoiceGroup has 6 for items, active state, indicators, labels, and descriptions.",
      "Can I use Tailwind theme tokens?",
      "Yes. The className props accept any Tailwind class — including your design-token variables.",
      "Can I completely restyle a component?",
      "Yes. Every visual property is controllable via className. You can make a slider look like a toggle, or choice cards look like chips — it's all classes.",
    ),
  },
  {
    slug: "quiz-engine",
    keyword: "quiz engine",
    title: "Quiz Engine — A useReducer State Machine for Quiz Funnels",
    description:
      "A standalone quiz engine for React. Handles branching, answer collection, progress tracking, and step transitions.",
    intro:
      "The quiz engine is the brain of quiz-ui: a useReducer-based state machine that lives inside QuizProvider. It manages the current step, the answer map, the visit history, and the funnel status. Components read from it via hooks — useQuizStep, useQuizAnswers, useQuizEngine — and never touch the state directly.",
    faqs: faqDefault(
      "Can I use the quiz engine without the styled components?",
      "Yes. quiz-core is a headless package — install it independently and build your own components on top of the engine hooks.",
      "What actions does the engine support?",
      "ANSWER (record an answer), ADVANCE (go to next step, resolving branches), BACK (go to previous step in history), GO_TO (jump to a specific step), and RESET (start over).",
      "Is the engine tested?",
      "The engine is a pure function (reducer) — test it with any test runner by calling createQuizReducer with your definition.",
    ),
  },
];