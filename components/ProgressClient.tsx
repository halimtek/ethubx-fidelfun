"use client";

import { useEffect, useState } from "react";
import {
  Trophy,
  Target,
  BookOpen,
  RotateCcw,
} from "lucide-react";

export default function ProgressClient() {
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
      <div className="mt-10 animate-pulse border-y border-stone-200 py-10">
        <div className="h-5 w-32 bg-stone-200" />
        <div className="mt-5 h-12 w-48 bg-stone-100" />
      </div>
    );
  }

  return (
    <section className="mt-10">
      {/* Quiz */}
      <div className="border-y border-stone-200 py-8 sm:py-10">
        <div className="flex items-start gap-4">
          <Trophy className="mt-1 h-6 w-6 shrink-0 text-yellow-600" />

          <div>
            <p className="text-xs font-black uppercase tracking-wider text-stone-400">
              Quiz progress
            </p>

            <h2 className="mt-1 text-2xl font-black">
              Your best score
            </h2>
          </div>
        </div>

        <div className="mt-8">
          {quizScore !== null ? (
            <>
              <div className="text-6xl font-black tracking-tight text-purple-600">
                {quizScore}
                <span className="ml-2 text-lg text-stone-400">
                  points
                </span>
              </div>

              <p className="mt-3 text-stone-500">
                Keep practicing and try to beat your score.
              </p>
            </>
          ) : (
            <>
              <div className="text-3xl font-black">
                Ready to learn?
              </div>

              <p className="mt-3 text-stone-500">
                Complete a quiz and your score will appear here.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid border-b border-stone-200 sm:grid-cols-2">
        <div className="border-b border-stone-200 py-8 sm:border-b-0 sm:border-r sm:pr-8">
          <BookOpen className="h-6 w-6 text-purple-600" />

          <p className="mt-6 text-xs font-black uppercase tracking-wider text-stone-400">
            Fidel families
          </p>

          <p className="mt-2 text-4xl font-black">
            33
          </p>

          <p className="mt-2 text-sm text-stone-500">
            Families available to explore
          </p>
        </div>

        <div className="py-8 sm:pl-8">
          <Target className="h-6 w-6 text-purple-600" />

          <p className="mt-6 text-xs font-black uppercase tracking-wider text-stone-400">
            Practice goal
          </p>

          <p className="mt-2 text-4xl font-black">
            Keep going
          </p>

          <p className="mt-2 text-sm text-stone-500">
            Learn a little Fidel every day.
          </p>
        </div>
      </div>

      {quizScore !== null && (
        <button
          type="button"
          onClick={resetProgress}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-stone-400 transition hover:text-purple-600"
        >
          <RotateCcw className="h-4 w-4" />
          Reset progress
        </button>
      )}
    </section>
  );
}