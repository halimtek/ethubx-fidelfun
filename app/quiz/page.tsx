"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, RotateCcw, X } from "lucide-react";
import { fidelFamilies } from "@/data/fidel";import { useI18n } from "@/lib/i18n";

type QuizQuestion = {
  letter: string;
  answer: string;
  options: string[];
};

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function createQuestions(): QuizQuestion[] {
  const forms = fidelFamilies.flatMap((family) => family.forms);

  const selected = shuffle(forms).slice(0, 10);

  return selected.map((form) => {
    const wrongAnswers = shuffle(
      forms
        .filter((item) => item.letter !== form.letter)
        .map((item) => item.transliteration)
    ).slice(0, 3);

    return {
      letter: form.letter,
      answer: form.transliteration,
      options: shuffle([form.transliteration, ...wrongAnswers]),
    };
  });
}

export default function QuizPage() {
  const { t } = useI18n();

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(createQuestions());
  }, []);

  const question = questions[current];

  const progress = useMemo(() => {
    if (!questions.length) return 0;

    return Math.round(((current + 1) / questions.length) * 100);
  }, [current, questions.length]);

  function chooseAnswer(answer: string) {
    if (selected || !question) return;

    setSelected(answer);

    if (answer === question.answer) {
      setScore((value) => value + 1);
    }
  }

  function nextQuestion() {
    if (!selected) return;

    if (current === questions.length - 1) {
      const finalScore =
        score + (selected === question.answer ? 0 : 0);

      localStorage.setItem(
        "ethubx-quiz-score",
        String(finalScore)
      );

      localStorage.setItem(
        "ethubx-last-quiz",
        new Date().toISOString()
      );

      setFinished(true);
      return;
    }

    setCurrent((value) => value + 1);
    setSelected(null);
  }

  function restart() {
    setQuestions(createQuestions());
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (!questions.length) {
    return (
      <div className="shell py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold text-stone-500">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="shell py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.quiz.completed}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-stone-950 sm:text-6xl">
            {score} / {questions.length}
          </h1>

          <p className="mt-4 text-lg text-stone-600">
            {percentage}%
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={restart}
              className="btn-primary min-h-12"
            >
              <RotateCcw className="h-4 w-4" />
              {t.quiz.tryAgain}
            </button>

            <Link
              href="/learn"
              className="btn-secondary min-h-12"
            >
              {t.common.continue}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shell py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">{t.quiz.eyebrow}</p>

        <h1 className="mt-2 text-4xl font-black tracking-tight text-stone-950 sm:text-6xl">
          {t.quiz.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
          {t.quiz.description}
        </p>

        {/* Quiz header */}
        <div className="mt-10 border-y border-stone-200 py-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold text-stone-500">
              {t.quiz.question} {current + 1} / {questions.length}
            </span>

            <span className="text-sm font-black text-purple-700">
              {t.quiz.score}: {score}
            </span>
          </div>

          <div className="mt-3 h-1.5 bg-stone-100">
            <div
              className="h-full bg-purple-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <section className="mt-12 text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">
            {t.quiz.question} {current + 1}
          </p>

          <div className="amharic mt-5 text-8xl font-black leading-none text-stone-950 sm:text-[10rem]">
            {question.letter}
          </div>

          <p className="mt-5 text-base text-stone-500">
            Choose the correct pronunciation.
          </p>
        </section>

        {/* Answers */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {question.options.map((option, index) => {
            const isSelected = selected === option;
            const isCorrect = option === question.answer;

            let stateClass =
              "border-stone-200 text-stone-800 hover:border-purple-400 hover:text-purple-700";

            if (selected) {
              if (isCorrect) {
                stateClass =
                  "border-green-300 bg-green-50 text-green-700";
              } else if (isSelected) {
                stateClass =
                  "border-red-300 bg-red-50 text-red-700";
              } else {
                stateClass =
                  "border-stone-200 text-stone-400";
              }
            }

            return (
              <button
                key={`${option}-${index}`}
                type="button"
                onClick={() => chooseAnswer(option)}
                disabled={Boolean(selected)}
                className={`min-h-16 border px-5 py-4 text-left text-base font-bold transition ${stateClass}`}
              >
                <span className="mr-3 text-sm text-stone-400">
                  {String.fromCharCode(65 + index)}
                </span>

                {option}

                {selected && isCorrect && (
                  <Check className="float-right mt-0.5 h-5 w-5" />
                )}

                {selected && isSelected && !isCorrect && (
                  <X className="float-right mt-0.5 h-5 w-5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {selected && (
          <div className="mt-6 border-t border-stone-200 pt-5">
            <p
              className={`text-sm font-bold ${
                selected === question.answer
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {selected === question.answer
                ? t.quiz.correct
                : `${t.quiz.incorrect} ${t.quiz.correct}: ${question.answer}`}
            </p>
          </div>
        )}

        {/* Next */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            disabled={!selected}
            onClick={nextQuestion}
            className="btn-primary min-h-12 w-full sm:w-auto"
          >
            {current === questions.length - 1
              ? t.quiz.finish
              : t.quiz.next}
          </button>
        </div>
      </div>
    </div>
  );
}