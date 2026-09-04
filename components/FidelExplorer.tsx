"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Headphones,
  PencilLine,
  Play,
  Sparkles,
  Volume2,
} from "lucide-react";

import type { FidelFamily, FidelForm } from "@/data/fidel";

type FidelExplorerProps = {
  families: FidelFamily[];
};

export default function FidelExplorer({
  families,
}: FidelExplorerProps) {
  const [selected, setSelected] = useState(0);
  const [activeForm, setActiveForm] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  const family = families[selected];

  const form: FidelForm | undefined = family?.forms[activeForm];

  useEffect(() => {
    setActiveForm(0);
  }, [selected]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
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

    const utterance = new SpeechSynthesisUtterance();

    /*
      Use the pronunciation value from fidel.ts.
      This is important because raw Amharic Unicode can be
      pronounced incorrectly by some browser voices.
    */
    utterance.text = currentForm.pronunciation;
    utterance.lang = "en-US";
    utterance.rate = 0.55;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  function previousFamily() {
    setSelected((current) =>
      current === 0 ? families.length - 1 : current - 1
    );
  }

  function nextFamily() {
    setSelected((current) =>
      current === families.length - 1 ? 0 : current + 1
    );
  }

  if (!family || !form) {
    return null;
  }

  return (
    <div className="w-full">
      {/* ====================================================== */}
      {/* FAMILY NAVIGATION */}
      {/* ====================================================== */}

      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-500">
              Choose a family
            </p>

            <p className="mt-1 text-sm font-bold text-stone-400">
              {selected + 1} of {families.length}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={previousFamily}
              aria-label="Previous Fidel family"
              className="grid h-11 w-11 place-items-center rounded-full bg-stone-100 text-stone-600 transition hover:bg-purple-100 hover:text-purple-600 active:scale-90"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={nextFamily}
              aria-label="Next Fidel family"
              className="grid h-11 w-11 place-items-center rounded-full bg-stone-100 text-stone-600 transition hover:bg-purple-100 hover:text-purple-600 active:scale-90"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Family bubbles */}
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-3">
          {families.map((item, index) => {
            const isSelected = index === selected;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`Learn ${item.name} family`}
                aria-current={isSelected ? "true" : undefined}
                className={`group flex shrink-0 flex-col items-center transition ${
                  isSelected ? "scale-105" : ""
                }`}
              >
                <div
                  className={`amharic grid h-14 w-14 place-items-center rounded-full border-4 font-black text-2xl transition sm:h-16 sm:w-16 sm:text-3xl ${
                    isSelected
                      ? "border-purple-500 bg-purple-100 text-purple-700 shadow-lg shadow-purple-100"
                      : "border-white bg-stone-100 text-stone-600 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                >
                  {item.base}
                </div>

                <span
                  className={`mt-2 max-w-14 truncate text-[10px] font-bold ${
                    isSelected
                      ? "text-purple-600"
                      : "text-stone-400"
                  }`}
                >
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ====================================================== */}
      {/* MAIN LEARNING AREA */}
      {/* ====================================================== */}

      <div className="relative overflow-hidden rounded-[3rem] bg-[#faf8ff] px-4 py-8 sm:px-8 sm:py-12">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-yellow-200/40 blur-3xl" />

        <div className="relative">
          {/* Family heading */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-purple-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Family {selected + 1}
            </div>

            <h2 className="mt-4 text-3xl font-black text-stone-900 sm:text-4xl">
              {family.name}
            </h2>

            <p className="mt-1 text-sm font-semibold text-stone-400">
              Seven sounds to discover
            </p>
          </div>

          {/* ================================================== */}
          {/* BIG LETTER */}
          {/* ================================================== */}

          <div className="relative mx-auto mt-8 flex max-w-xl justify-center">
            {/* floating decorations */}
            <span className="absolute left-3 top-10 rotate-[-15deg] text-3xl sm:left-10">
              ⭐
            </span>

            <span className="absolute right-4 top-16 rotate-[12deg] text-3xl sm:right-12">
              ✨
            </span>

            <span className="absolute bottom-10 left-8 rotate-[8deg] text-3xl sm:left-16">
              🎵
            </span>

            <div className="relative flex h-[270px] w-[270px] items-center justify-center rounded-[47%_53%_50%_50%/52%_46%_54%_48%] bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 shadow-2xl shadow-purple-200 sm:h-[330px] sm:w-[330px]">
              <div className="flex h-[205px] w-[205px] flex-col items-center justify-center rounded-full bg-white/15 backdrop-blur-sm sm:h-[250px] sm:w-[250px]">
                <div className="amharic text-[7rem] font-black leading-none text-white drop-shadow-lg sm:text-[8.5rem]">
                  {form.letter}
                </div>

                <div className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  {form.transliteration}
                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* LISTEN BUTTON */}
          {/* ================================================== */}

          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => speak(form)}
              className={`inline-flex min-h-14 items-center gap-3 rounded-full px-7 font-black shadow-lg transition active:scale-95 ${
                speaking
                  ? "bg-purple-700 text-white"
                  : "bg-white text-purple-600 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {speaking ? (
                <>
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.2s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-current [animation-delay:-0.1s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-current" />
                  </span>

                  Playing...
                </>
              ) : (
                <>
                  <Volume2 className="h-5 w-5" />
                  Hear the sound
                </>
              )}
            </button>
          </div>

          {/* ================================================== */}
          {/* SEVEN FORMS */}
          {/* ================================================== */}

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="mb-5 text-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">
                Tap a letter
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
              {family.forms.map((item, index) => {
                const active = index === activeForm;

                return (
                  <button
                    key={item.letter}
                    type="button"
                    onClick={() => {
                      setActiveForm(index);
                      speak(item);
                    }}
                    aria-label={`Select ${item.letter}, ${item.transliteration}`}
                    className="group flex flex-col items-center"
                  >
                    <div
                      className={`relative flex h-[68px] w-[68px] items-center justify-center rounded-full transition duration-300 sm:h-20 sm:w-20 ${
                        active
                          ? "scale-110 bg-purple-600 text-white shadow-xl shadow-purple-200"
                          : "bg-white text-stone-800 shadow-sm hover:-translate-y-1 hover:shadow-md"
                      }`}
                    >
                      {active && (
                        <div className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-yellow-300 text-purple-700">
                          <Check className="h-3 w-3" />
                        </div>
                      )}

                      <span className="amharic text-3xl font-black sm:text-4xl">
                        {item.letter}
                      </span>
                    </div>

                    <span
                      className={`mt-2 text-[10px] font-bold ${
                        active
                          ? "text-purple-600"
                          : "text-stone-400"
                      }`}
                    >
                      {item.transliteration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================== */}
          {/* CURRENT SOUND */}
          {/* ================================================== */}

          <div className="mx-auto mt-10 max-w-md text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-sm">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-purple-100 text-purple-600">
                <Headphones className="h-4 w-4" />
              </div>

              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                  This sound
                </p>

                <p className="font-black text-stone-800">
                  {form.transliteration}
                </p>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* PRACTICE ACTIONS */}
          {/* ================================================== */}

          <div className="mx-auto mt-12 flex max-w-lg flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/trace"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-yellow-300 px-6 font-black text-stone-900 transition hover:-translate-y-1 hover:bg-yellow-200 active:scale-95"
            >
              <PencilLine className="h-5 w-5" />
              Trace {form.letter}
            </Link>

            <Link
              href="/quiz"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-stone-900 px-6 font-black text-white transition hover:-translate-y-1 hover:bg-purple-600 active:scale-95"
            >
              <Play className="h-5 w-5" />
              Practice quiz
            </Link>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* FAMILY PROGRESS */}
      {/* ====================================================== */}

      <div className="mt-8 flex items-center justify-center gap-3">
        <span className="text-xs font-bold text-stone-400">
          Family {selected + 1}
        </span>

        <div className="h-2 w-32 overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-purple-500 transition-all"
            style={{
              width: `${((selected + 1) / families.length) * 100}%`,
            }}
          />
        </div>

        <span className="text-xs font-bold text-stone-400">
          {families.length}
        </span>
      </div>
    </div>
  );
}