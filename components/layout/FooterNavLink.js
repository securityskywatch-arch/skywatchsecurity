"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FooterNavLink({ href, className, children }) {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}
