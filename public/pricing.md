# Pricing — quiz-ui

quiz-ui is free and open source (MIT license). There are no paid tiers, no seat limits, and no subscription.

## Free

- Price: $0/month, forever
- License: MIT (free for personal and commercial use, no attribution required)
- Limits: none — install as many components as you need
- Features:
  - All quiz funnel components (QuizRoot, QuizStep, QuizProgress, QuizNavigation, QuizTransition, QuizResult, QuizDialog)
  - All question types (choice, image choice, slider, rating, text, email)
  - Headless engine with branching logic (QuizDefinition, useQuizEngine, useQuizStep, useQuizAnswers)
  - Full source code installed directly into your project (not an npm dependency)
- Distribution: shadcn CLI — `npx shadcn@latest add @quiz-ui/<component>`

## What's not included (hosted yourself)

quiz-ui is the front-end engine only. You provide and host:

- Your own hosting (any static host or React server)
- Your own analytics (Plausible, PostHog, GA, etc.)
- Your own CRM/email integration (called from the onComplete callback)

There is no hosted SaaS, no API, and no data collection on this project's side.

## Questions

- Why is it free? quiz-ui is an open-source maintainer project, MIT licensed.
- Where's the source? https://github.com/kalpovskii/quiz-ui
- Where are the docs? https://quiz-ui-phi.vercel.app/docs
