"use client";

import { useEffect, useMemo, useState } from "react";
import type { Word } from "@/data/words";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function PracticeClient({ words }: { words: Word[] }) {
  const { t } = useI18n();

  const [index, setIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const word = words[index];

  const expected = reverse ? word.amharic : word.english;
  const prompt = reverse ? word.english : word.amharic;

  useEffect(() => {
    const saved = Number(
      localStorage.getItem("ethubx-practice-score") || 0
    );

    setScore(saved);
  }, []);

  function normalize(value: string) {
    return value.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function checkAnswer() {
    if (!answer.trim()) return;

    const correct = normalize(answer) === normalize(expected);

    setResult(correct ? "correct" : "wrong");

    if (correct) {
      const nextScore = score + 1;

      setScore(nextScore);

      localStorage.setItem(
        "ethubx-practice-score",
        String(nextScore)
      );

      localStorage.setItem(
        "ethubx-last-practice",
        new Date().toISOString()
      );
    }
  }

  function nextWord() {
    setIndex((current) => (current + 1) % words.length);
    setAnswer("");
    setResult("idle");
  }

  function switchDirection() {
    setReverse((current) => !current);
    setAnswer("");
    setResult("idle");
  }

  const progress = useMemo(
    () => Math.round(((index + 1) / words.length) * 100),
    [index, words.length]
  );

  if (!word) {
    return null;
  }

  return (
    <section className="mt-10 border-y border-stone-200 dark:border-stone-800 py-7 sm:py-9">
      {/* Progress */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-bold text-stone-500 dark:text-stone-400 dark:text-stone-500">
          {index + 1} / {words.length}
        </span>

        <span className="text-sm font-black text-purple-700">
          {t.quiz.score}: {score}
        </span>
      </div>

      <div className="mt-3 h-1.5 overflow-hidden bg-stone-100">
        <div
          className="h-full bg-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Prompt */}
      <div className="mt-10 text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
          {reverse
            ? "Write the Amharic word"
            : "Write it in English"}
        </p>

        <div
          className={`mt-5 font-black tracking-tight text-stone-950 dark:text-stone-100 ${reverse
            ? "text-5xl sm:text-7xl"
            : "amharic text-7xl sm:text-9xl"
            }`}
        >
          {prompt}
        </div>

        {word.hint && (
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-stone-500 dark:text-stone-400 dark:text-stone-500">
            {word.hint}
          </p>
        )}
      </div>

      {/* Answer */}
      <div className="mx-auto mt-8 max-w-xl">
        <input
          autoFocus
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
            setResult("idle");
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              checkAnswer();
            }
          }}
          placeholder={
            reverse
              ? "Type አማርኛ here..."
              : "Type English here..."
          }
          className="w-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 px-4 py-4 text-center text-lg font-bold text-stone-900 outline-none transition placeholder:text-stone-400 dark:text-stone-500 focus:border-purple-600 sm:text-xl"
        />

        {/* Result */}
        {result !== "idle" && (
          <div
            className={`mt-4 border px-4 py-4 text-center text-sm font-bold ${result === "correct"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
              }`}
          >
            {result === "correct" ? (
              <>
                <Check className="mr-1 inline h-4 w-4" />
                Correct!
              </>
            ) : (
              <>
                <X className="mr-1 inline h-4 w-4" />
                Not quite. The answer is{" "}
                <strong>{expected}</strong>.
              </>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          <button
            type="button"
            onClick={checkAnswer}
            className="btn-primary min-h-12"
          >
            {t.common.continue}
          </button>

          <button
            type="button"
            onClick={switchDirection}
            className="btn-secondary min-h-12"
          >
            <RotateCcw className="h-4 w-4" />

            {reverse
              ? "Amharic → English"
              : "English → Amharic"}
          </button>

          <button
            type="button"
            onClick={nextWord}
            className="btn-secondary min-h-12"
          >
            <Shuffle className="h-4 w-4" />
            {t.common.next}
          </button>
        </div>
      </div>
    </section>
  );
}