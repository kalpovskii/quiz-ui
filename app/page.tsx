import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex min-h-svh w-full items-center justify-center bg-background px-4 py-16 sm:px-6">
      <Card className="w-full max-w-sm">
        <CardContent className="p-6">
          <p className="text-sm font-medium leading-relaxed text-foreground">
            hello world
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
