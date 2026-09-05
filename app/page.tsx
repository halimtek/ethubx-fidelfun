"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  Headphones,
  PencilLine,
  Trophy,
} from "lucide-react";

import { useI18n } from "@/lib/i18n";

const letters = [
  ["ሀ", "Ha"],
  ["ለ", "La"],
  ["መ", "Ma"],
  ["ሰ", "Sa"],
  ["በ", "Be"],
  ["ተ", "Te"],
  ["ነ", "Ne"],
  ["ፐ", "Pe"],
];

export default function Home() {
  const { t } = useI18n();

  const features = [
    {
      icon: BookOpen,
      title: t.home.learnFidel,
      text: t.learn.chooseFamilyText,
      href: "/learn",
    },
    {
      icon: Headphones,
      title: t.home.explore,
      text: t.learn.listenText,
      href: "/learn",
    },
    {
      icon: PencilLine,
      title: t.home.trace,
      text: t.learn.practiceWritingText,
      href: "/trace",
    },
    {
      icon: Gamepad2,
      title: t.home.test,
      text: t.quiz.description,
      href: "/quiz",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#fffdf9] dark:bg-[#171412]">
      {/* Hero */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="shell px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="eyebrow">{t.home.badge}</p>

              <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-stone-950 dark:text-stone-100 sm:text-6xl lg:text-7xl">
                {t.home.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 dark:text-stone-400 sm:text-xl">
                {t.home.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/learn"
                  className="btn-primary min-h-12"
                >
                  <BookOpen className="h-5 w-5" />
                  {t.home.startLearning}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/trace"
                  className="btn-secondary min-h-12"
                >
                  <PencilLine className="h-5 w-5" />
                  {t.home.tryWriting}
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-stone-400 dark:text-stone-500">
                <span>✓ {t.home.free}</span>
                <span>✓ {t.home.noSignup}</span>
                <span>✓ {t.home.learnAtYourPace}</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="border-y border-stone-200 px-10 py-12 text-center dark:border-stone-800 sm:px-16">
                <div className="amharic text-[9rem] font-black leading-none text-purple-600 dark:text-purple-400 sm:text-[11rem]">
                  ሀ
                </div>

                <p className="mt-2 text-3xl font-black text-stone-950 dark:text-stone-100">
                  Ha
                </p>

                <Link
                  href="/trace?letter=ሀ"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black text-purple-700 transition hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  <PencilLine className="h-4 w-4" />
                  {t.home.tryWriting}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="shell px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid grid-cols-2 divide-x divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800 sm:grid-cols-4">
          <div className="px-4 py-6 text-center">
            <p className="text-3xl font-black text-purple-600 dark:text-purple-400">
              34
            </p>

            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-stone-400 dark:text-stone-500">
              {t.home.families}
            </p>
          </div>

          <div className="px-4 py-6 text-center">
            <p className="text-3xl font-black text-purple-600 dark:text-purple-400">
              238
            </p>

            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-stone-400 dark:text-stone-500">
              {t.home.letters}
            </p>
          </div>

          <div className="border-t border-stone-200 px-4 py-6 text-center dark:border-stone-800 sm:border-t-0">
            <p className="text-3xl font-black text-purple-600 dark:text-purple-400">
              7
            </p>

            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-stone-400 dark:text-stone-500">
              {t.home.formsEach}
            </p>
          </div>

          <div className="border-t border-stone-200 px-4 py-6 text-center dark:border-stone-800 sm:border-t-0">
            <p className="text-3xl font-black text-purple-600 dark:text-purple-400">
              ∞
            </p>

            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-stone-400 dark:text-stone-500">
              {t.home.thingsToLearn}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-stone-200 bg-[#f7f3ff] dark:border-stone-800 dark:bg-[#1c1917]">
        <div className="shell px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.home.learnYourWay}</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-950 dark:text-stone-100 sm:text-5xl">
              {t.home.seeHearPlay}
            </h2>
          </div>

          <div className="mt-12 grid border-t border-stone-300 dark:border-stone-700 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group border-b border-stone-300 px-1 py-8 transition hover:bg-white/70 dark:border-stone-700 dark:hover:bg-stone-900 sm:px-6 sm:py-10 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <Icon className="h-7 w-7 text-purple-600 transition group-hover:-translate-y-0.5 dark:text-purple-400" />

                  <h3 className="mt-6 text-xl font-black text-stone-950 dark:text-stone-100">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    {feature.text}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-black text-purple-700 transition group-hover:gap-2 dark:text-purple-400">
                    {t.home.explore}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Letter introduction */}
      <section className="shell px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{t.home.explore}</p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-950 dark:text-stone-100 sm:text-5xl">
              {t.home.meetFriends}
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-stone-600 dark:text-stone-400">
              {t.learn.patternText}
            </p>

            <Link
              href="/learn"
              className="mt-7 inline-flex items-center gap-2 font-black text-purple-700 transition hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
            >
              {t.home.exploreAll}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-4 border-l border-t border-stone-200 dark:border-stone-800">
            {letters.map(([letter, sound]) => (
              <Link
                key={letter}
                href="/learn"
                className="border-b border-r border-stone-200 px-3 py-7 text-center transition hover:bg-purple-50 dark:border-stone-800 dark:hover:bg-purple-950/30"
              >
                <span className="amharic block text-4xl font-black text-stone-950 dark:text-stone-100 sm:text-5xl">
                  {letter}
                </span>

                <span className="mt-2 block text-xs font-bold text-stone-400 dark:text-stone-500">
                  {sound}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-200 bg-stone-950 text-white dark:border-stone-800 dark:bg-stone-950">
        <div className="shell px-4 py-16 sm:px-6 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-purple-300">
              {t.home.badge}
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              {t.home.adventure}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300">
              {t.home.pickFirst}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/learn"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 font-black text-stone-950 transition hover:bg-purple-100 dark:bg-white dark:text-stone-950 dark:hover:bg-purple-100"
              >
                <BookOpen className="h-5 w-5" />
                {t.home.learnFidel}
              </Link>

              <Link
                href="/quiz"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-stone-700 px-6 font-black text-white transition hover:border-purple-400 hover:text-purple-300"
              >
                <Trophy className="h-5 w-5" />
                {t.home.takeQuiz}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}