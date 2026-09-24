import { SiteHeader } from "@/components/ui/site/header";
import { SiteHero } from "@/components/ui/site/hero";
import { ExamplesSection } from "@/components/ui/site/examples-section";
import { SiteFooter } from "@/components/ui/site/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-svh w-full flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <SiteHero
          title="Build quiz funnels with Radix components"
          description="quiz-ui is a shadcn/ui-compatible registry of Radix-based components for building quiz funnels — multi-step question flows with branching, progress tracking, and a result screen. Install exactly the components you need as source, no npm package."
          primaryLabel="Get started"
          secondaryLabel="View example"
        />
        <ExamplesSection />
      </main>
      <SiteFooter />
    </div>
  );
}