import * as React from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Site-chrome hook (nav collapsing, etc.) — not part of the quiz-ui
 * registry itself. Registry hooks (useQuizEngine, useQuizStep,
 * useQuizAnswers) live in components/ui/quiz/core/hooks.ts, colocated
 * with the engine so they ship as part of the quiz-core registry item.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    mql.addEventListener("change", onChange);
    onChange();
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return Boolean(isMobile);
}
