"use client";

import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  PencilLine,
} from "lucide-react";

import FidelExplorer from "@/components/FidelExplorer";
import { fidelFamilies } from "@/data/fidel";import { useI18n } from "@/lib/i18n";
export default function LearnPage() {
  const { t } = useI18n();

  return (
    <div className="bg-[#fffdf9]">
      {/* Header */}
      <section className="border-b border-stone-200">
        <div className="shell px-4 py-12 sm:px-6 sm:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">
              {t.learn.eyebrow}
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-stone-950 sm:text-6xl">
              {t.learn.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
              {t.learn.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick guide */}
      <section className="shell px-4 py-12 sm:px-6 sm:py-16">
        <div>
          <p className="eyebrow">
            {t.learn.quickGuide}
          </p>

          <div className="mt-6 grid border-t border-stone-200 md:grid-cols-3">
            <div className="border-b border-stone-200 px-1 py-7 md:border-b-0 md:border-r md:px-6">
              <span className="text-sm font-black text-purple-600">
                01
              </span>

              <h2 className="mt-4 text-xl font-black text-stone-950">
                {t.learn.chooseFamily}
              </h2>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                {t.learn.chooseFamilyText}
              </p>
            </div>

            <div className="border-b border-stone-200 px-1 py-7 md:border-b-0 md:border-r md:px-6">
              <Headphones className="h-5 w-5 text-purple-600" />

              <h2 className="mt-4 text-xl font-black text-stone-950">
                {t.learn.listen}
              </h2>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                {t.learn.listenText}
              </p>
            </div>

            <div className="px-1 py-7 md:px-6">
              <PencilLine className="h-5 w-5 text-purple-600" />

              <h2 className="mt-4 text-xl font-black text-stone-950">
                {t.learn.practiceWriting}
              </h2>

              <p className="mt-2 text-sm leading-6 text-stone-600">
                {t.learn.practiceWritingText}
              </p>
            </div>
          </div>
        </div>

        {/* Explorer */}
        <FidelExplorer families={fidelFamilies} />

        {/* Tip */}
        <div className="mt-16 border-y border-stone-200 py-10">
          <div className="grid gap-6 sm:grid-cols-[0.35fr_1fr]">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-purple-600">
              {t.learn.learningTip}
            </p>

            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              {t.learn.learningTipText}
            </p>
          </div>
        </div>

        {/* Next */}
        <div className="mt-16 border-t border-stone-200 pt-12">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {t.learn.nextStep}
            </p>

            <p className="mt-4 text-lg leading-8 text-stone-600">
              {t.learn.nextStepText}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/practice"
                className="btn-primary"
              >
                {t.nav.practice}
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/quiz"
                className="btn-secondary"
              >
                {t.nav.quiz}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}