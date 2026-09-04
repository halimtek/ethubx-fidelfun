import Link from "next/link";
import {
  ArrowRight,
  Gamepad2,
  Headphones,
  PencilLine,
  Sparkles,
  Star,
  Volume2,
} from "lucide-react";

import { fidelFamilies } from "@/data/fidel";
import FidelExplorer from "@/components/FidelExplorer";

export default function LearnPage() {
  return (
    <main className="overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute right-[-120px] top-80 h-96 w-96 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="shell px-4 pb-10 pt-8 sm:px-6 sm:pb-14 sm:pt-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-purple-600 via-violet-600 to-fuchsia-600 px-6 py-10 text-white shadow-2xl shadow-purple-200 sm:px-10 sm:py-14">
          {/* Decorative shapes */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Let&apos;s learn!
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Discover the
                <span className="mx-2 text-yellow-300">ፊደል</span>
                family!
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-purple-100 sm:text-lg">
                Choose a family, listen to each sound, and explore all seven
                forms. Learning Amharic can be fun!
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                  33 Families
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                  <Volume2 className="h-4 w-4" />
                  Listen
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur-sm">
                  <PencilLine className="h-4 w-4" />
                  Practice
                </div>
              </div>
            </div>

            {/* Hero letters */}
            <div className="mx-auto flex w-full max-w-sm items-center justify-center">
              <div className="relative grid h-64 w-64 place-items-center rounded-[2.5rem] bg-white/10 shadow-inner backdrop-blur-sm sm:h-72 sm:w-72">
                <div className="absolute -right-3 top-5 rotate-12 rounded-2xl bg-yellow-300 px-3 py-2 text-xl shadow-lg">
                  ⭐
                </div>

                <div className="absolute -bottom-3 -left-3 -rotate-12 rounded-2xl bg-pink-300 px-3 py-2 text-xl shadow-lg">
                  🎨
                </div>

                <div className="text-center">
                  <div className="amharic text-[8rem] font-black leading-none text-white drop-shadow-lg sm:text-[9rem]">
                    ሀ
                  </div>

                  <div className="mt-2 text-2xl font-black">
                    Ha
                  </div>

                  <div className="mt-1 text-sm font-semibold text-purple-100">
                    ሀ ሁ ሂ ሃ ሄ ህ ሆ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK GUIDE */}
      <section className="shell px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-purple-50 p-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-purple-100 text-purple-600">
              <span className="text-xl font-black">1</span>
            </div>

            <div>
              <div className="font-black text-stone-900">
                Choose
              </div>
              <div className="text-sm text-stone-500">
                Pick a Fidel family
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-100 text-blue-600">
              <span className="text-xl font-black">2</span>
            </div>

            <div>
              <div className="font-black text-stone-900">
                Listen
              </div>
              <div className="text-sm text-stone-500">
                Hear every sound
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-yellow-100 bg-yellow-50 p-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-100 text-yellow-600">
              <span className="text-xl font-black">3</span>
            </div>

            <div>
              <div className="font-black text-stone-900">
                Practice
              </div>
              <div className="text-sm text-stone-500">
                Write and remember
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAMILY EXPLORER */}
      <section className="bg-[#faf8ff]">
        <div className="shell px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-purple-700">
              <Sparkles className="h-4 w-4" />
              Choose your family
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-stone-900 sm:text-5xl">
              Which one shall we learn?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
              Tap a family below and explore its seven beautiful forms.
            </p>
          </div>

          {/* Explorer card */}
          <div className="rounded-[2rem] border border-white bg-white p-3 shadow-xl shadow-purple-100 sm:p-6">
            <FidelExplorer families={fidelFamilies} />
          </div>
        </div>
      </section>

      {/* LEARNING TIP */}
      <section className="shell px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Big letter */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 p-8 text-center shadow-xl">
              <div className="absolute -right-5 -top-5 text-5xl">
                ⭐
              </div>

              <div className="absolute -bottom-5 -left-5 text-5xl">
                ✨
              </div>

              <div className="relative">
                <p className="text-sm font-black uppercase tracking-wider text-orange-800">
                  Remember
                </p>

                <div className="amharic mt-3 text-[8rem] font-black leading-none text-stone-900">
                  ሂ
                </div>

                <div className="mt-2 text-3xl font-black text-stone-900">
                  Hi
                </div>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-stone-700">
                  <Volume2 className="h-4 w-4" />
                  Hear it
                </div>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div>
            <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-green-700">
              💡 Learning tip
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
              Learn the pattern, not just one letter.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">
              Every Fidel family has seven forms. Once you understand how the
              forms change, you can recognize many more Amharic letters much
              faster.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="amharic text-3xl font-black text-purple-600">
                  ሀ ሁ ሂ ሃ
                </div>
                <p className="mt-2 text-xs font-bold text-stone-500">
                  See the pattern
                </p>
              </div>

              <div className="rounded-2xl bg-stone-50 p-4">
                <div className="amharic text-3xl font-black text-purple-600">
                  ሄ ህ ሆ
                </div>
                <p className="mt-2 text-xs font-bold text-stone-500">
                  Practice all seven
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-24">
        <div className="shell">
          <div className="rounded-[2rem] bg-stone-900 px-6 py-10 text-white sm:px-10 sm:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-yellow-300">
                  <Star className="h-4 w-4 fill-current" />
                  Great job!
                </div>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Ready to practice?
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-stone-400">
                  You&apos;ve learned the letters. Now try writing them,
                  listening to them, or challenge yourself with a quiz.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/trace"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-6 font-black text-stone-900 transition hover:-translate-y-1 hover:bg-yellow-200 active:scale-95"
                >
                  <PencilLine className="h-5 w-5" />
                  Trace letters
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/quiz"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 font-black text-white transition hover:bg-white/15 active:scale-95"
                >
                  <Gamepad2 className="h-5 w-5" />
                  Play quiz
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}