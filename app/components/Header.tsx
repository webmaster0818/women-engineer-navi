"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/ranking/", label: "おすすめエージェント" },
  { href: "/articles/category-index/", label: "記事一覧" },
  { href: "/articles/faq-all/", label: "よくある質問" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f7f1ea]/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            aria-hidden
            className="text-secondary text-lg leading-none transition-transform duration-300 group-hover:rotate-45"
          >
            &#9670;
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="text-[1.25rem] text-text"
              style={{ fontFamily: "var(--font-fraunces), serif" }}
            >
              <span style={{ fontWeight: 500 }}>CareeHUB</span>
              <span className="text-text-light" style={{ fontStyle: "italic", fontWeight: 400 }}>
                {" "}
                for woman
              </span>
            </span>
            <span className="mt-1 text-[0.58rem] tracking-[0.22em] text-text-light">
              女性エンジニアの転職・キャリア
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8rem] tracking-[0.06em] font-medium text-text-light hover:text-primary link-underline transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-text hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-[#f7f1ea]">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-wide font-medium text-text py-3 border-b border-border/60 last:border-0 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
