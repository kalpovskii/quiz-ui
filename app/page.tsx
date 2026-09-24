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
          description="Drop-in quiz questions, sliders, and forms you install as source code. No npm package — you own every line."
          primaryLabel="Get started"
          secondaryLabel="View example"
        />
        <ExamplesSection />
      </main>
      <SiteFooter />
    </div>
  );
}