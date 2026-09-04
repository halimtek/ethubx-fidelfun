import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  Headphones,
  PencilLine,
  Sparkles,
  Star,
  Trophy,
  Volume2,
} from "lucide-react";

const features = [
  {
    id: "learn",
    icon: BookOpen,
    title: "Learn ፊደል",
    text: "Discover Amharic letters one family at a time.",
    href: "/learn",
    emoji: "📚",
  },
  {
    id: "listen",
    icon: Headphones,
    title: "Listen",
    text: "Hear each letter and practice its sound.",
    href: "/learn",
    emoji: "🔊",
  },
  {
    id: "trace",
    icon: PencilLine,
    title: "Write",
    text: "Trace letters with your finger or mouse.",
    href: "/trace",
    emoji: "✏️",
  },
  {
    id: "quiz",
    icon: Gamepad2,
    title: "Play",
    text: "Test what you know with fun quizzes.",
    href: "/quiz",
    emoji: "🎮",
  },
];

const letters = [
  ["ሀ", "Ha"],
  ["ለ", "La"],
  ["መ", "Ma"],
  ["ሰ", "Sa"],
  ["በ", "Be"],
  ["ተ", "Te"],
  ["ነ", "Ne"],
  ["ፐ", "Pe"],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fffdf9]">
      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative min-h-[680px]">
        {/* Organic background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute right-[-100px] top-20 h-96 w-96 rounded-full bg-yellow-200/50 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[35%] h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />
        </div>

        {/* Floating letters */}
        <div className="pointer-events-none absolute left-[5%] top-32 hidden rotate-[-12deg] font-black text-purple-200 lg:block lg:text-7xl">
          ለ
        </div>

        <div className="pointer-events-none absolute right-[7%] top-44 hidden rotate-[12deg] font-black text-yellow-300 lg:block lg:text-6xl">
          መ
        </div>

        <div className="pointer-events-none absolute bottom-24 left-[12%] hidden rotate-[8deg] font-black text-pink-200 lg:block lg:text-6xl">
          ሰ
        </div>

        <div className="shell relative px-4 pb-20 pt-12 sm:px-6 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2.5 text-sm font-black text-purple-700">
                <Sparkles className="h-4 w-4" />
                Learning can be fun!
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-stone-900 sm:text-6xl lg:text-7xl">
                Discover the
                <span className="mx-2 text-purple-600">ፊደል</span>
                <br />
                <span className="relative inline-block">
                  magic of Amharic.
                  <span className="absolute -bottom-1 left-0 -z-10 h-4 w-full -rotate-2 rounded-full bg-yellow-300/70" />
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl">
                Learn Amharic letters, hear their sounds, practice writing,
                and play along the way. Made to make learning feel like an
                adventure.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/learn"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-purple-600 px-7 font-black text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-purple-700 hover:shadow-xl active:scale-95"
                >
                  <BookOpen className="h-5 w-5" />
                  Start learning
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/trace"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border-2 border-stone-200 bg-white px-7 font-black text-stone-800 transition hover:-translate-y-1 hover:border-purple-200 hover:text-purple-600 active:scale-95"
                >
                  <PencilLine className="h-5 w-5" />
                  Try writing
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-stone-400">
                <span>✓ Free</span>
                <span>✓ No signup</span>
                <span>✓ Learn at your pace</span>
              </div>
            </div>

            {/* RIGHT - ORGANIC LETTER */}
            <div className="relative mx-auto flex w-full max-w-[500px] justify-center">
              {/* Floating decorations */}
              <div className="absolute left-0 top-8 z-20 grid h-14 w-14 rotate-[-12deg] place-items-center rounded-full bg-yellow-300 text-2xl shadow-lg sm:left-4">
                ⭐
              </div>

              <div className="absolute right-0 top-16 z-20 grid h-14 w-14 rotate-[12deg] place-items-center rounded-full bg-pink-200 text-2xl shadow-lg sm:right-2">
                🎨
              </div>

              <div className="absolute bottom-5 left-5 z-20 grid h-14 w-14 rotate-[8deg] place-items-center rounded-full bg-green-200 text-2xl shadow-lg">
                ✏️
              </div>

              {/* Main organic shape */}
              <div className="relative flex h-[390px] w-[390px] items-center justify-center rounded-[48%_52%_55%_45%/50%_45%_55%_50%] bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 shadow-2xl shadow-purple-200 sm:h-[450px] sm:w-[450px]">
                {/* Inner circle */}
                <div className="flex h-[275px] w-[275px] flex-col items-center justify-center rounded-full bg-white/15 text-center backdrop-blur-sm sm:h-[320px] sm:w-[320px]">
                  <div className="amharic text-[9rem] font-black leading-none text-white drop-shadow-lg sm:text-[10rem]">
                    ሀ
                  </div>

                  <div className="mt-1 text-3xl font-black text-white">
                    Ha
                  </div>

                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-purple-600 shadow-md transition hover:scale-105 active:scale-95"
                  >
                    <Volume2 className="h-4 w-4" />
                    Listen
                  </button>
                </div>

                {/* Orbit letters */}
                <span className="amharic absolute left-8 top-20 text-4xl font-black text-white/80">
                  ሁ
                </span>

                <span className="amharic absolute right-9 top-28 text-4xl font-black text-white/80">
                  ሂ
                </span>

                <span className="amharic absolute bottom-20 right-12 text-4xl font-black text-white/80">
                  ሆ
                </span>

                <span className="amharic absolute bottom-16 left-12 text-4xl font-black text-white/80">
                  ሄ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* NUMBERS - NOT CARDS */}
      {/* ========================================================= */}

      <section className="shell px-4 pb-20 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-7 text-center sm:gap-x-16">
          <div>
            <div className="text-4xl font-black text-purple-600">33</div>
            <div className="mt-1 text-sm font-bold text-stone-400">
              Fidel families
            </div>
          </div>

          <div className="hidden h-10 w-px bg-stone-200 sm:block" />

          <div>
            <div className="text-4xl font-black text-pink-500">231</div>
            <div className="mt-1 text-sm font-bold text-stone-400">
              Letters
            </div>
          </div>

          <div className="hidden h-10 w-px bg-stone-200 sm:block" />

          <div>
            <div className="text-4xl font-black text-yellow-500">7</div>
            <div className="mt-1 text-sm font-bold text-stone-400">
              Forms each
            </div>
          </div>

          <div className="hidden h-10 w-px bg-stone-200 sm:block" />

          <div>
            <div className="text-4xl font-black text-green-500">∞</div>
            <div className="mt-1 text-sm font-bold text-stone-400">
              Things to learn
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section className="relative bg-[#f7f3ff]">
        <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-yellow-200/30 blur-3xl" />

        <div className="shell relative px-4 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-wider text-purple-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Learn your way
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-stone-900 sm:text-5xl">
              See it. Hear it.{" "}
              <span className="text-purple-600">Play with it.</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-stone-500 sm:text-lg">
              Four simple ways to make Amharic part of your day.
            </p>
          </div>

          {/* Organic feature layout */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(
              ({ id, icon: Icon, title, text, href, emoji }, index) => (
                <Link
                  key={id}
                  href={href}
                  className="group text-center"
                >
                  <div
                    className={`relative mx-auto grid h-28 w-28 place-items-center rounded-full transition duration-300 group-hover:-translate-y-3 group-hover:scale-105 ${
                      index === 0
                        ? "bg-purple-200"
                        : index === 1
                          ? "bg-blue-200"
                          : index === 2
                            ? "bg-yellow-200"
                            : "bg-pink-200"
                    }`}
                  >
                    <Icon className="h-10 w-10 text-stone-800" />

                    <span className="absolute -right-1 -top-1 text-2xl transition group-hover:rotate-12">
                      {emoji}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black text-stone-900">
                    {title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-stone-500">
                    {text}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-black text-purple-600">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* LETTER CLOUD */}
      {/* ========================================================= */}

      <section className="shell px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-full bg-yellow-100 px-5 py-2 text-xs font-black uppercase tracking-wider text-yellow-700">
              🔤 Start here
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-stone-900 sm:text-5xl">
              Meet some of your new friends.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-stone-600">
              Every Amharic letter belongs to a family. Start with one, learn
              its seven forms, and slowly build your knowledge.
            </p>

            <Link
              href="/learn"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-purple-600 active:scale-95"
            >
              Explore all ፊደል
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Floating letters instead of cards */}
          <div className="relative mx-auto h-[330px] w-full max-w-[560px]">
            {letters.map(([letter, sound], index) => {
              const positions = [
                "left-[4%] top-[30%]",
                "left-[20%] top-[4%]",
                "left-[40%] top-[38%]",
                "left-[58%] top-[8%]",
                "right-[3%] top-[35%]",
                "left-[25%] bottom-[5%]",
                "left-[50%] bottom-[8%]",
                "right-[12%] bottom-[2%]",
              ];

              const sizes = [
                "h-20 w-20",
                "h-24 w-24",
                "h-28 w-28",
                "h-20 w-20",
                "h-24 w-24",
                "h-20 w-20",
                "h-24 w-24",
                "h-28 w-28",
              ];

              return (
                <Link
                  key={letter}
                  href="/learn"
                  className={`absolute ${positions[index]} ${sizes[index]} group flex flex-col items-center justify-center rounded-full border-4 border-white bg-white shadow-lg transition duration-300 hover:z-10 hover:-translate-y-2 hover:scale-110`}
                >
                  <span className="amharic text-3xl font-black text-stone-800 sm:text-4xl">
                    {letter}
                  </span>

                  <span className="text-[10px] font-bold text-stone-400">
                    {sound}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 px-6 py-14 text-center text-white shadow-2xl shadow-purple-200 sm:px-10 sm:py-20">
            {/* Decorative blobs */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-28 -right-10 h-80 w-80 rounded-full bg-white/10" />

            <div className="relative">
              <div className="mx-auto flex items-center justify-center gap-3">
                <div className="text-4xl">🌟</div>
                <div className="text-4xl">📚</div>
                <div className="text-4xl">✏️</div>
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-5xl">
                Your Amharic adventure starts here!
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-purple-100 sm:text-lg">
                Pick your first letter and let&apos;s learn something new
                today.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/learn"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-8 font-black text-purple-700 shadow-lg transition hover:-translate-y-1 hover:bg-purple-50 active:scale-95"
                >
                  <BookOpen className="h-5 w-5" />
                  Start learning
                </Link>

                <Link
                  href="/quiz"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white/15 px-8 font-black text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95"
                >
                  <Trophy className="h-5 w-5" />
                  Take a quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}