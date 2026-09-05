"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import {
  languages,
  useI18n,
  type Language,
} from "@/lib/i18n";

export default function Nav() {
  const { language, setLanguage, t } = useI18n();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [languageOpen, setLanguageOpen] =
    useState(false);

  const currentLanguage = languages.find(
    (item) => item.code === language
  );

  const links = [
    {
      href: "/learn",
      label: t.nav.learn,
    },
    {
      href: "/practice",
      label: t.nav.practice,
    },
    {
      href: "/trace",
      label: t.nav.trace,
    },
    {
      href: "/quiz",
      label: t.nav.quiz,
    },
    {
      href: "/progress",
      label: t.nav.progress,
    },
  ];

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    setLanguageOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#faf9f6]/95 backdrop-blur">
      <div className="shell">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 font-black tracking-tight"
          >
      
            <span className="text-lg text-stone-950">
              EthubX{" "}
              <span className="text-purple-600">
                ፊደል
              </span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 md:flex">
            <nav className="flex items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-bold text-stone-600 transition hover:text-purple-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Language */}
            <div className="relative ml-3 border-l border-stone-200 pl-3">
              <button
                type="button"
                onClick={() =>
                  setLanguageOpen((open) => !open)
                }
                className="flex min-h-10 items-center gap-2 px-3 text-sm font-bold text-stone-700 transition hover:text-purple-700"
                aria-expanded={languageOpen}
              >
                <span>
                  {currentLanguage?.native}
                </span>

                <span className="text-stone-400">
                  ▾
                </span>
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 border border-stone-200 bg-white py-1 shadow-lg">
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      onClick={() =>
                        changeLanguage(item.code)
                      }
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-stone-50 ${
                        language === item.code
                          ? "font-black text-purple-700"
                          : "font-semibold text-stone-700"
                      }`}
                    >
                      <span>{item.native}</span>

                      {language === item.code && (
                        <span>✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() =>
              setMobileOpen((open) => !open)
            }
            className="flex h-11 w-11 items-center justify-center text-stone-800 md:hidden"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-stone-200 py-4 md:hidden">
            <nav className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="border-b border-stone-100 py-3 text-base font-bold text-stone-700 transition hover:text-purple-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile languages */}
            <div className="pt-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-stone-400">
                {t.nav.language}
              </p>

              <div className="grid grid-cols-2 gap-x-5">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() =>
                      changeLanguage(item.code)
                    }
                    className={`border-b border-stone-100 py-3 text-left text-sm ${
                      language === item.code
                        ? "font-black text-purple-700"
                        : "font-semibold text-stone-600"
                    }`}
                  >
                    {item.native}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}