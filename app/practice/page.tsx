"use client";

import PracticeClient from "@/components/PracticeClient";
import { words } from "@/data/words";
import { useI18n } from "@/lib/i18n";

export default function PracticePage() {
  const { t } = useI18n();

  return (
    <div className="shell py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">{t.practice.eyebrow}</p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-950 sm:text-6xl">
          {t.practice.title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
          {t.practice.description}
        </p>

        <PracticeClient words={words} />
      </div>
    </div>
  );
}