"use client";

import { useI18n } from "@/lib/i18n";

export default function LearnIntro() {
  const { t } = useI18n();

  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
        {t.learn.eyebrow}
      </p>

      <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-950 dark:text-stone-100 sm:text-6xl">
        {t.learn.title}
      </h1>

      <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-400 dark:text-stone-500 sm:text-lg sm:leading-8">
        {t.learn.description}
      </p>
    </div>
  );
}