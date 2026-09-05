"use client";

import ProgressClient from "@/components/ProgressClient";
import { useI18n } from "@/lib/i18n";

export default function ProgressPageClient() {
  const { t } = useI18n();

  return (
    <div className="shell py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">
          {t.progress.eyebrow}
        </p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-950 dark:text-stone-100 sm:text-6xl">
          {t.progress.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 dark:text-stone-400 dark:text-stone-500 sm:text-lg">
          {t.progress.description}
        </p>

        <ProgressClient />
      </div>
    </div>
  );
}