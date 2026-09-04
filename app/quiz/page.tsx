"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Heart,
  Home,
  RotateCcw,
  Sparkles,
  Trophy,
  Volume2,
  X,
  Zap,
} from "lucide-react";

import { allForms } from "@/data/fidel";

type QuestionType =
  | "sound"
  | "letter"
  | "family";

type Question = {
  letter: string;
  answer: string;
  options: string[];
  type: QuestionType;
  pronunciation: string;
};

const TOTAL_QUESTIONS = 10;

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function createQuestion(): Question {
  const correct =
    allForms[Math.floor(Math.random() * allForms.length)];

  const typeOptions: QuestionType[] = [
    "sound",
    "letter",
    "family",
  ];

  const type =
    typeOptions[Math.floor(Math.random() * typeOptions.length)];

  if (type === "sound") {
    const wrong = shuffle(
      allForms.filter(
        (item) =>
          item.letter !== correct.letter &&
          item.transliteration !== correct.transliteration
      )
    )
      .slice(0, 3)
      .map((item) => item.transliteration);

    return {
      letter: correct.letter,
      answer: correct.transliteration,
      options: shuffle([
        correct.transliteration,
        ...wrong,
      ]),
      type,
      pronunciation: correct.pronunciation,
    };
  }

  if (type === "family") {
    const correctFamily = allForms.find(
      (item) => item.letter === correct.letter
    );

    const families = shuffle(
      Array.from(
        new Set(
          allForms.map((item) => item.transliteration)
        )
      )
    ).slice(0, 4);

    if (!families.includes(correct.transliteration)) {
      families[Math.floor(Math.random() * families.length)] =
        correct.transliteration;
    }

    return {
      letter: correct.letter,
      answer: correct.transliteration,
      options: shuffle(families),
      type,
      pronunciation: correct.pronunciation,
    };
  }

  const wrongLetters = shuffle(
    allForms.filter(
      (item) => item.letter !== correct.letter
    )
  )
    .slice(0, 3)
    .map((item) => item.letter);

  return {
    letter: correct.letter,
    answer: correct.letter,
    options: shuffle([
      correct.letter,
      ...wrongLetters,
    ]),
    type,
    pronunciation: correct.pronunciation,
  };
}

function createQuestions() {
  const questions: Question[] = [];

  while (questions.length < TOTAL_QUESTIONS) {
    const question = createQuestion();

    const duplicate = questions.some(
      (item) =>
        item.letter === question.letter &&
        item.type === question.type
    );

    if (!duplicate) {
      questions.push(question);
    }
  }

  return questions;
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>(() =>
    createQuestions()
  );

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const progress = ((current + 1) / TOTAL_QUESTIONS) * 100;

  const message = useMemo(() => {
    if (score >= 9) return "Amazing! 🌟";
    if (score >= 7) return "Excellent! 🎉";
    if (score >= 5) return "Great job! 👏";
    if (score >= 3) return "Keep going! 💪";
    return "You are learning! 🌱";
  }, [score]);

  function speak() {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(
        question.pronunciation
      );

    utterance.lang = "en-US";
    utterance.rate = 0.55;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }

  function chooseAnswer(answer: string) {
    if (answered) return;

    setSelectedAnswer(answer);
    setAnswered(true);

    const correct = answer === question.answer;

    if (correct) {
      const newStreak = streak + 1;

      setScore((value) => value + 1);
      setStreak(newStreak);

      setBestStreak((value) =>
        Math.max(value, newStreak)
      );
    } else {
      setStreak(0);

      setLives((value) => {
        const next = value - 1;

        if (next <= 0) {
          setTimeout(() => {
            setFinished(true);
          }, 900);
        }

        return next;
      });
    }
  }

  function nextQuestion() {
    if (current + 1 >= TOTAL_QUESTIONS || lives <= 0) {
      setFinished(true);
      return;
    }

    setCurrent((value) => value + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  }

  function restart() {
    setQuestions(createQuestions());
    setCurrent(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setLives(3);
    setSelectedAnswer(null);
    setAnswered(false);
    setFinished(false);
  }

  if (finished) {
    return (
      <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#fffdf9]">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute right-[-100px] top-40 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />
          <div className="absolute bottom-[-100px] left-1/3 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
        </div>

        <div className="shell relative flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12 sm:px-6">
          <div className="w-full max-w-xl text-center">
            {/* Trophy */}
            <div className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-[48%_52%_50%_50%/52%_45%_55%_48%] bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 shadow-2xl shadow-yellow-100">
              <Trophy className="h-20 w-20 text-stone-800" />

              <span className="absolute -right-3 top-3 text-4xl">
                ⭐
              </span>

              <span className="absolute -bottom-2 left-2 text-3xl">
                🎉
              </span>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-sm font-black text-purple-700">
              <Sparkles className="h-4 w-4" />
              Quiz complete
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-stone-900 sm:text-6xl">
              {message}
            </h1>

            <p className="mt-4 text-lg font-semibold text-stone-500">
              You finished your Amharic challenge!
            </p>

            {/* Score */}
            <div className="mx-auto mt-8 flex max-w-sm items-center justify-center gap-8">
              <div>
                <div className="text-5xl font-black text-purple-600">
                  {score}
                </div>

                <div className="mt-1 text-xs font-black uppercase tracking-wider text-stone-400">
                  Correct
                </div>
              </div>

              <div className="h-12 w-px bg-stone-200" />

              <div>
                <div className="text-5xl font-black text-yellow-500">
                  {bestStreak}
                </div>

                <div className="mt-1 text-xs font-black uppercase tracking-wider text-stone-400">
                  Best streak
                </div>
              </div>

              <div className="h-12 w-px bg-stone-200" />

              <div>
                <div className="text-5xl font-black text-pink-500">
                  {Math.round(
                    (score / TOTAL_QUESTIONS) * 100
                  )}
                  %
                </div>

                <div className="mt-1 text-xs font-black uppercase tracking-wider text-stone-400">
                  Score
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-purple-600 px-8 font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-purple-700 active:scale-95"
              >
                <RotateCcw className="h-5 w-5" />
                Play again
              </button>

              <Link
                href="/learn"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-stone-200 bg-white px-8 font-black text-stone-800 transition hover:-translate-y-1 hover:border-purple-200 hover:text-purple-600 active:scale-95"
              >
                <Home className="h-5 w-5" />
                Back to learning
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#fffdf9]">
      {/* ====================================================== */}
      {/* BACKGROUND */}
      {/* ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-full bg-yellow-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="shell relative px-4 py-8 sm:px-6 sm:py-12">
        {/* ==================================================== */}
        {/* HEADER */}
        {/* ==================================================== */}

        <div className="mx-auto max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-black text-stone-400 transition hover:text-purple-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Exit quiz
            </Link>

            {/* Lives */}
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((heart) => (
                <Heart
                  key={heart}
                  className={`h-6 w-6 transition ${
                    heart < lives
                      ? "fill-pink-500 text-pink-500"
                      : "text-stone-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="mt-7">
            <div className="mb-2 flex items-center justify-between text-xs font-black">
              <span className="text-purple-600">
                Question {current + 1}
              </span>

              <span className="text-stone-400">
                {TOTAL_QUESTIONS}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-stone-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* QUIZ */}
        {/* ==================================================== */}

        <div className="mx-auto mt-10 max-w-3xl">
          {/* Score strip */}
          <div className="mb-8 flex items-center justify-center gap-7 text-center sm:gap-12">
            <div>
              <div className="text-2xl font-black text-purple-600">
                {score}
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                Score
              </div>
            </div>

            <div className="h-8 w-px bg-stone-200" />

            <div>
              <div className="flex items-center gap-1 text-2xl font-black text-yellow-500">
                <Zap className="h-5 w-5 fill-current" />
                {streak}
              </div>

              <div className="text-[10px] font-black uppercase tracking-wider text-stone-400">
                Streak
              </div>
            </div>
          </div>

          {/* Question area */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2 text-xs font-black uppercase tracking-wider text-purple-700">
              <Sparkles className="h-4 w-4" />

              {question.type === "sound"
                ? "What sound is this?"
                : question.type === "letter"
                  ? "Find the letter"
                  : "Which sound belongs to this family?"}
            </div>

            {/* BIG LETTER */}
            <div className="relative mx-auto mt-8 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-[48%_52%_52%_48%/50%_46%_54%_50%] bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 shadow-2xl shadow-purple-200" />

              <div className="absolute inset-5 rounded-full bg-white/10 backdrop-blur-sm" />

              <div className="relative">
                <div className="amharic text-[9rem] font-black leading-none text-white drop-shadow-lg sm:text-[10rem]">
                  {question.letter}
                </div>
              </div>

              {/* Decorations */}
              <span className="absolute -left-4 top-8 text-3xl">
                ⭐
              </span>

              <span className="absolute -right-3 top-16 text-3xl">
                ✨
              </span>

              <span className="absolute bottom-4 left-5 text-3xl">
                🎵
              </span>
            </div>

            {/* Listen */}
            <button
              type="button"
              onClick={speak}
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 font-black text-purple-600 shadow-md transition hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              <Volume2 className="h-5 w-5" />
              Hear it
            </button>
          </div>

          {/* ==================================================== */}
          {/* ANSWERS */}
          {/* ==================================================== */}

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === question.answer;

              let style =
                "border-stone-200 bg-white text-stone-800 hover:border-purple-300 hover:bg-purple-50";

              if (answered && isCorrect) {
                style =
                  "border-green-400 bg-green-50 text-green-700";
              }

              if (
                answered &&
                isSelected &&
                !isCorrect
              ) {
                style =
                  "border-red-400 bg-red-50 text-red-600";
              }

              return (
                <button
                  key={`${option}-${index}`}
                  type="button"
                  disabled={answered}
                  onClick={() => chooseAnswer(option)}
                  className={`group relative min-h-20 rounded-[2rem] border-2 px-5 py-4 text-left transition duration-200 active:scale-[0.98] ${style}`}
                >
                  <div className="flex items-center gap-4">
                    {/* Option letter */}
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black ${
                        answered && isCorrect
                          ? "bg-green-200 text-green-700"
                          : answered &&
                              isSelected
                            ? "bg-red-200 text-red-700"
                            : "bg-stone-100 text-stone-500 group-hover:bg-purple-100 group-hover:text-purple-600"
                      }`}
                    >
                      {answered && isCorrect ? (
                        <Check className="h-5 w-5" />
                      ) : answered &&
                        isSelected ? (
                        <X className="h-5 w-5" />
                      ) : (
                        ["A", "B", "C", "D"][index]
                      )}
                    </span>

                    {/* Answer */}
                    <span
                      className={`${
                        question.type === "letter"
                          ? "amharic text-4xl"
                          : "text-lg"
                      } font-black`}
                    >
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ==================================================== */}
          {/* FEEDBACK */}
          {/* ==================================================== */}

          {answered && (
            <div
              className={`mt-6 rounded-[2rem] p-5 text-center ${
                selectedAnswer === question.answer
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <div className="text-xl font-black">
                {selectedAnswer === question.answer
                  ? "🎉 Correct!"
                  : "💡 Keep practicing!"}
              </div>

              {selectedAnswer !== question.answer && (
                <p className="mt-1 text-sm font-semibold">
                  The answer is{" "}
                  <strong>
                    {question.answer}
                  </strong>
                </p>
              )}

              <button
                type="button"
                onClick={nextQuestion}
                className="mx-auto mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-stone-900 px-7 font-black text-white transition hover:-translate-y-1 active:scale-95"
              >
                {current + 1 >= TOTAL_QUESTIONS
                  ? "See my result"
                  : "Next question"}

                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}