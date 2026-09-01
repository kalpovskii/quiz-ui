# db/

8bitcn-ui has a `db/` + `drizzle.config.ts` at the repo root, used by
their site backend (contributor/download stats, most likely — the
public repo doesn't document the schema). That's a feature of *their*
site, not part of the registry distribution mechanism itself: a
consumer installing `@quiz-ui/quiz-choice` never touches this folder.

Left empty here rather than filled with a guessed schema. Add a Drizzle
schema (+ `drizzle.config.ts` at the repo root) here if/when quiz-ui's
own site needs persistence — e.g. tracking which components get
installed most, or a contributor leaderboard.
