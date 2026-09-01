"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsTopLevel, docsGroups } from "../../config/docs-nav";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex w-56 shrink-0 flex-col gap-6 text-sm">
      <ul className="flex flex-col gap-1">
        {docsTopLevel.map((item) => (
          <SidebarLink key={item.href} item={item} active={pathname === item.href} />
        ))}
      </ul>

      {docsGroups.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          <span className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {group.title}
          </span>
          <ul className="flex flex-col gap-1">
            {group.items.map((item) => (
              <SidebarLink key={item.href} item={item} active={pathname === item.href} />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function SidebarLink({ item, active }: { item: { title: string; href: string }; active: boolean }) {
  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "block rounded-md px-2 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
          active && "bg-accent font-medium text-foreground"
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}