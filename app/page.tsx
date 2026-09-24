import { SiteHeader } from "@/components/ui/site/header";
import { SiteHero } from "@/components/ui/site/hero";
import { ExamplesSection } from "@/components/ui/site/examples-section";
import { HowItWorksSection } from "@/components/ui/site/how-it-works-section";
import { SiteFooter } from "@/components/ui/site/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-svh w-full flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <SiteHero
          title="Build quiz funnels with headless Radix components"
          description="Free, headless quiz components you install as source. Style them any way you like — they ship with zero opinions."
          primaryLabel="Get started"
          secondaryLabel="View example"
        />
        <ExamplesSection />
        <HowItWorksSection />
      </main>
      <SiteFooter />
    </div>
  );
}