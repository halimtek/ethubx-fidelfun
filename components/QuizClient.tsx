"use client";

import { useEffect, useMemo, useState } from "react";
import { allForms } from "@/data/fidel";
import { Check, X, Trophy } from "lucide-react";

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function QuizClient() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [items, setItems] = useState(allForms.slice(0, 10));

  useEffect(() => {
    setItems(shuffle(allForms).slice(0, 10));
  }, []);

  const current = items[question];

  const options = useMemo(() => {
    if (!current) return [];

    return shuffle([
      current.pronunciation,
      ...shuffle(
        allForms.filter((x) => x.letter !== current.letter)
      )
        .slice(0, 3)
        .map((x) => x.pronunciation),
    ]);
  }, [current]);

  function answer(option: string) {
    if (selected || done || !current) return;

    const isCorrect = option === current.pronunciation;

    setSelected(option);

    if (isCorrect) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (question === items.length - 1) {
        setDone(true);

        const finalScore = score + (isCorrect ? 1 : 0);

        localStorage.setItem(
          "ethubx-quiz-score",
          String(finalScore)
        );
      } else {
        setQuestion((q) => q + 1);
        setSelected(null);
      }
    }, 650);
  }

  function playAgain() {
    setQuestion(0);
    setScore(0);
    setSelected(null);
    setDone(false);
    setItems(shuffle(allForms).slice(0, 10));
  }

  if (done) {
    return (
      <div className="card mt-8 p-8 text-center sm:p-12">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#f4b942]/20">
          <Trophy className="h-10 w-10 text-[#b77900]" />
        </div>

        <h2 className="mt-6 text-4xl font-black">
          {score} / {items.length}
        </h2>

        <p className="mt-2 text-stone-500">
          {score === items.length
            ? "Perfect! You know your Fidel!"
            : "Great job — keep practicing and try again."}
        </p>

        <button
          onClick={playAgain}
          className="btn-primary mt-7"
        >
          Play again
        </button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className="card mt-8 p-5 sm:p-8">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm font-bold text-stone-500">
        <span>
          Question {question + 1} / {items.length}
        </span>

        <span>Score {score}</span>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-stone-100">
        <div
          className="h-full rounded-full bg-[#5b3df5] transition-all duration-500"
          style={{
            width: `${((question + 1) / items.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div className="mt-10 text-center">
        <div className="amharic text-8xl font-black sm:text-9xl">
          {current.letter}
        </div>

        <p className="mt-4 text-lg font-bold text-stone-700">
          Which sound is closest?
        </p>

        <p className="mt-1 text-sm text-stone-400">
          Choose the correct pronunciation
        </p>
      </div>

      {/* Answers */}
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const isCorrect =
            option === current.pronunciation;

          const isSelected =
            option === selected;

          let buttonClass =
            "border-stone-200 hover:border-[#5b3df5] hover:bg-[#5b3df5]/5";

          if (isSelected && isCorrect) {
            buttonClass =
              "border-green-500 bg-green-50 text-green-700";
          } else if (isSelected) {
            buttonClass =
              "border-red-500 bg-red-50 text-red-700";
          }

          return (
            <button
              key={option}
              onClick={() => answer(option)}
              disabled={!!selected}
              className={`rounded-2xl border-2 p-5 text-left text-lg font-black transition ${buttonClass}`}
            >
              <span className="mr-2">
                {isSelected ? (
                  isCorrect ? (
                    <Check className="inline h-5 w-5" />
                  ) : (
                    <X className="inline h-5 w-5" />
                  )
                ) : (
                  "○"
                )}
              </span>

              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}