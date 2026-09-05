"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  PencilLine,
  Volume2,
} from "lucide-react";

import type { FidelFamily, FidelForm } from "@/data/fidel";
import { useI18n } from "@/lib/i18n";

type FidelExplorerProps = {
  families: FidelFamily[];
};

export default function FidelExplorer({
  families,
}: FidelExplorerProps) {
  const { t } = useI18n();

  const [selected, setSelected] = useState(0);
  const [activeForm, setActiveForm] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  const family = families[selected];
  const form: FidelForm | undefined =
    family?.forms[activeForm];

  useEffect(() => {
    setActiveForm(0);
  }, [selected]);

  useEffect(() => {
    return () => {
      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window
      ) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function speak(currentForm: FidelForm) {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      currentForm.letter
    );

    utterance.lang = "am-ET";
    utterance.rate = 0.78;
    utterance.pitch = 1.05;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  function previousFamily() {
    setSelected((current) =>
      current === 0
        ? families.length - 1
        : current - 1
    );
  }

  function nextFamily() {
    setSelected((current) =>
      current === families.length - 1
        ? 0
        : current + 1
    );
  }

  if (!family || !form) {
    return null;
  }

  return (
    <section className="mt-12">
      {/* Family selector */}
      <div>
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm font-black text-stone-950 dark:text-stone-100">
            {t.explorer.chooseFamily}
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={previousFamily}
              aria-label={t.explorer.previousFamily}
              className="flex h-10 w-10 items-center justify-center border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 dark:text-stone-500 transition hover:border-purple-300 hover:text-purple-700"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={nextFamily}
              aria-label={t.explorer.nextFamily}
              className="flex h-10 w-10 items-center justify-center border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 dark:text-stone-500 transition hover:border-purple-300 hover:text-purple-700"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="no-scrollbar flex gap-2 overflow-x-auto border-y border-stone-200 dark:border-stone-800 py-3">
          {families.map((item, index) => (
            <button
              key={`${item.base}-${index}`}
              type="button"
              onClick={() => setSelected(index)}
              className={`shrink-0 px-4 py-2 text-sm font-black transition ${selected === index
                ? "bg-purple-600 text-white"
                : "text-stone-600 dark:text-stone-400 dark:text-stone-500 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-100"
                }`}
            >
              <span className="amharic">
                {item.forms[0]?.letter}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main explorer */}
      <div className="mt-8 border-y border-stone-200 dark:border-stone-800">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* Selected letter */}
          <div className="border-b border-stone-200 dark:border-stone-800 px-5 py-12 text-center sm:px-8 lg:border-b-0 lg:border-r">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-600">
              {t.explorer.family}
            </p>

            <div className="amharic mt-5 text-[8rem] font-black leading-none text-stone-950 dark:text-stone-100 sm:text-[10rem]">
              {form.letter}
            </div>

            <p className="mt-3 text-3xl font-black text-stone-950 dark:text-stone-100">
              {form.transliteration}
            </p>

            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 dark:text-stone-500">
              {t.explorer.form} {activeForm + 1}{" "}
              {t.explorer.sevenForms}
            </p>

            <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => speak(form)}
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-200 dark:border-stone-800 px-5 text-sm font-black text-stone-800 transition hover:border-purple-300 hover:text-purple-700"
              >
                {speaking ? (
                  <Volume2 className="h-4 w-4 animate-pulse" />
                ) : (
                  <Headphones className="h-4 w-4" />
                )}

                {t.explorer.listen}
              </button>

              <Link
                href={`/trace?letter=${encodeURIComponent(
                  form.letter
                )}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-purple-600 px-5 text-sm font-black text-white transition hover:bg-purple-700"
              >
                <PencilLine className="h-4 w-4" />
                {t.explorer.trace}
              </Link>
            </div>
          </div>

          {/* Seven forms */}
          <div className="p-5 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                  {t.explorer.sevenForms}
                </p>

                <h3 className="mt-1 text-xl font-black text-stone-950 dark:text-stone-100">
                  {family.name}
                </h3>
              </div>

              <span className="text-sm font-bold text-stone-400 dark:text-stone-500">
                {activeForm + 1} / {family.forms.length}
              </span>
            </div>

            <div className="grid grid-cols-2 border-l border-t border-stone-200 dark:border-stone-800 sm:grid-cols-4">
              {family.forms.map(
                (currentForm, index) => (
                  <button
                    key={`${currentForm.letter}-${index}`}
                    type="button"
                    onClick={() => setActiveForm(index)}
                    className={`border-b border-r border-stone-200 dark:border-stone-800 p-5 text-center transition sm:p-6 ${activeForm === index
                      ? "bg-purple-50"
                      : "bg-white dark:bg-stone-950 hover:bg-stone-50 dark:bg-stone-900"
                      }`}
                  >
                    <span
                      className={`amharic block text-4xl font-black sm:text-5xl ${activeForm === index
                        ? "text-purple-700"
                        : "text-stone-950 dark:text-stone-100"
                        }`}
                    >
                      {currentForm.letter}
                    </span>

                    <span className="mt-2 block text-xs font-bold text-stone-400 dark:text-stone-500">
                      {currentForm.transliteration}
                    </span>
                  </button>
                )
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={() =>
                  setActiveForm((current) =>
                    current === 0
                      ? family.forms.length - 1
                      : current - 1
                  )
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-200 dark:border-stone-800 px-5 text-sm font-black text-stone-700 transition hover:border-purple-300 hover:text-purple-700"
              >
                <ArrowLeft className="h-4 w-4" />
                {t.common.previous}
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveForm((current) =>
                    current === family.forms.length - 1
                      ? 0
                      : current + 1
                  )
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-200 dark:border-stone-800 px-5 text-sm font-black text-stone-700 transition hover:border-purple-300 hover:text-purple-700"
              >
                {t.common.next}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}