import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoPages } from "@/config/seo-keywords";
import { SiteHeader } from "@/components/ui/site/header";
import { SiteFooter } from "@/components/ui/site/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) {
    return { title: "Not Found" };
  }
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function SeoPage({ params }: PageProps) {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <div className="flex min-h-svh w-full flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          {/* H1 + paragraph */}
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {page.intro}
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-fuchsia-500">
              <Link href="/docs">Try it now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/example">See a live example</Link>
            </Button>
          </div>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Frequently asked questions
            </h2>
            <ul className="mt-6 flex flex-col gap-6">
              {page.faqs.map((faq) => (
                <li key={faq.question} className="rounded-lg border bg-muted/30 p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Secondary CTA */}
          <div className="mt-12 flex justify-start">
            <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-500 hover:to-fuchsia-500">
              <Link href="/docs">Try it now</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}