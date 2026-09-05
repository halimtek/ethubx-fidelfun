import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import TraceClient from "@/components/TraceClient";

function TraceLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl py-20 text-center">
      <p className="text-sm font-bold text-stone-400 dark:text-stone-500">
        Getting your practice ready...
      </p>
    </div>
  );
}

export default function TracePage() {
  return (
    <main className="min-h-screen bg-[#fffdf9]">
      <div className="shell py-5 sm:py-8">
        <Link
          href="/learn"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-stone-500 dark:text-stone-400 dark:text-stone-500 transition hover:text-purple-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to learning
        </Link>

        <div className="mt-5 sm:mt-8">
          <Suspense fallback={<TraceLoading />}>
            <TraceClient />
          </Suspense>
        </div>
      </div>
    </main>
  );
}