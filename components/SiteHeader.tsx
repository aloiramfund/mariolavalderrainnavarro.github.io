"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={open ? "site-header menu-open" : "site-header"}>
      <Link className="brand" href="/">
        {siteConfig.name}
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
      <nav className="site-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
