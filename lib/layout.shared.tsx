import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="/logo.svg"
          alt="quiz-ui"
          width={36}
          height={36}
          className="h-14 w-auto"
        />
      ),
    },
    githubUrl: "https://github.com/kalpovskii/quiz-ui",
  };
}