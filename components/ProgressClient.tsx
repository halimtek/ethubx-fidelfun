"use client";

import { useEffect, useState } from "react";
import {
  Trophy,
  Target,
  BookOpen,
  RotateCcw,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function ProgressClient() {
  const { t } = useI18n();

  const [quizScore, setQuizScore] =
    useState<number | null>(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedScore =
      localStorage.getItem("ethubx-quiz-score");

    if (savedScore !== null) {
      const parsedScore = Number(savedScore);

      if (!Number.isNaN(parsedScore)) {
        setQuizScore(parsedScore);
      }
    }

    setLoaded(true);
  }, []);

  function resetProgress() {
    localStorage.removeItem("ethubx-quiz-score");
    setQuizScore(null);
  }

  if (!loaded) {
    return (
      <div className="mt-10 border-y border-stone-200 dark:border-stone-800 py-10">
        <div className="h-5 w-32 animate-pulse bg-stone-200" />
        <div className="mt-5 h-12 w-48 animate-pulse bg-stone-100" />
      </div>
    );
  }

  return (
    <section className="mt-10">
      {/* Main progress */}
      <div className="border-y border-stone-200 dark:border-stone-800 py-8 sm:py-10">
        <div className="flex items-start gap-4">
          <Trophy className="mt-1 h-6 w-6 shrink-0 text-yellow-600" />

          <div>
            <p className="text-xs font-black uppercase tracking-wider text-stone-400 dark:text-stone-500">
              {t.progress.eyebrow}
            </p>

            <h2 className="mt-1 text-2xl font-black text-stone-950 dark:text-stone-100 sm:text-3xl">
              {t.progress.title}
            </h2>
          </div>
        </div>

        <div className="mt-8">
          {quizScore !== null ? (
            <>
              <div className="text-5xl font-black tracking-tight text-purple-600 sm:text-6xl">
                {quizScore}
                <span className="ml-2 text-base font-bold text-stone-400 dark:text-stone-500 sm:text-lg">
                  {t.progress.points}
                </span>
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500 dark:text-stone-400 dark:text-stone-500 sm:text-base">
                {t.progress.keepLearning}
              </p>
            </>
          ) : (
            <>
              <div className="text-2xl font-black text-stone-950 dark:text-stone-100 sm:text-3xl">
                {t.progress.startLearning}
              </div>

              <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500 dark:text-stone-400 dark:text-stone-500 sm:text-base">
                {t.progress.noProgress}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid border-b border-stone-200 dark:border-stone-800 sm:grid-cols-2">
        <div className="border-b border-stone-200 dark:border-stone-800 py-8 sm:border-b-0 sm:border-r sm:pr-8">
          <BookOpen className="h-6 w-6 text-purple-600" />

          <p className="mt-6 text-xs font-black uppercase tracking-wider text-stone-400 dark:text-stone-500">
            {t.progress.fidelFamilies}
          </p>

          <p className="mt-2 text-4xl font-black text-stone-950 dark:text-stone-100">
            34
          </p>

          <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 dark:text-stone-500">
            {t.progress.familiesAvailable}
          </p>
        </div>

        <div className="py-8 sm:pl-8">
          <Target className="h-6 w-6 text-purple-600" />

          <p className="mt-6 text-xs font-black uppercase tracking-wider text-stone-400 dark:text-stone-500">
            {t.progress.practiceGoal}
          </p>

          <p className="mt-2 text-3xl font-black text-stone-950 dark:text-stone-100 sm:text-4xl">
            {t.progress.keepGoing}
          </p>

          <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400 dark:text-stone-500">
            {t.progress.dailyTip}
          </p>
        </div>
      </div>

      {/* Local storage */}
      <p className="mt-6 text-xs font-medium text-stone-400 dark:text-stone-500">
        {t.progress.local}
      </p>

      {/* Reset */}
      {quizScore !== null && (
        <button
          type="button"
          onClick={resetProgress}
          className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-stone-400 dark:text-stone-500 transition hover:text-purple-600"
        >
          <RotateCcw className="h-4 w-4" />
          {t.progress.reset}
        </button>
      )}
    </section>
  );
}