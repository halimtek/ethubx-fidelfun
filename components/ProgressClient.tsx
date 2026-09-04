"use client";

import { useEffect, useState } from "react";
import { Trophy, Target, BookOpen, RotateCcw } from "lucide-react";

export default function ProgressClient() {
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // localStorage only runs in the browser
    const savedScore = localStorage.getItem("ethubx-quiz-score");

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
      <div className="mt-10">
        <div className="animate-pulse rounded-[2rem] border border-stone-200 bg-white p-8">
          <div className="h-6 w-32 rounded-full bg-stone-200" />
          <div className="mt-4 h-12 w-48 rounded-2xl bg-stone-200" />
          <div className="mt-4 h-5 w-64 rounded-full bg-stone-100" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-6">
      {/* Main progress */}
      <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#f4b942]/15" />
        <div className="absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-[#5b3df5]/10" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f4b942]/20">
              <Trophy className="h-6 w-6 text-[#b77900]" />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-stone-400">
                Quiz progress
              </p>
              <h2 className="text-2xl font-black text-stone-900">
                Your best score
              </h2>
            </div>
          </div>

          <div className="mt-8">
            {quizScore !== null ? (
              <>
                <div className="flex items-end gap-3">
                  <span className="text-6xl font-black tracking-tight text-stone-900">
                    {quizScore}
                  </span>
                  <span className="mb-2 text-lg font-bold text-stone-400">
                    points
                  </span>
                </div>

                <p className="mt-3 text-stone-500">
                  Keep practicing and try to beat your score!
                </p>
              </>
            ) : (
              <>
                <div className="text-4xl font-black text-stone-900">
                  Ready to learn?
                </div>

                <p className="mt-3 text-stone-500">
                  Complete a quiz and your score will appear here.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Learning stats */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[1.75rem] border border-stone-200 bg-[#fffaf0] p-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f4b942]/20">
            <BookOpen className="h-6 w-6 text-[#b77900]" />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-wider text-stone-400">
            Fidel families
          </p>

          <p className="mt-1 text-3xl font-black text-stone-900">33</p>

          <p className="mt-2 text-sm text-stone-500">
            Families available to explore
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-[#f7f5ff] p-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#5b3df5]/10">
            <Target className="h-6 w-6 text-[#5b3df5]" />
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-wider text-stone-400">
            Practice goal
          </p>

          <p className="mt-1 text-3xl font-black text-stone-900">
            Keep going!
          </p>

          <p className="mt-2 text-sm text-stone-500">
            Learn a little Fidel every day.
          </p>
        </div>
      </div>

      {/* Reset */}
      {quizScore !== null && (
        <div className="flex justify-center pt-2">
          <button
            onClick={resetProgress}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-stone-500 transition hover:bg-stone-100 hover:text-stone-800"
          >
            <RotateCcw className="h-4 w-4" />
            Reset progress
          </button>
        </div>
      )}
    </div>
  );
}