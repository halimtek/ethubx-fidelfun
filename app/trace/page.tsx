import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Suspense } from "react";
import TraceClient from "@/components/TraceClient";

function TraceLoading() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
            <Sparkles className="text-purple-600" size={28} />
          </div>

          <p className="font-bold text-gray-600">
            Getting your practice ready...
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TracePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-purple-50 via-white to-yellow-50">
      {/* Header */}
      <header className="border-b border-purple-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/learn"
            className="
              inline-flex items-center gap-2
              rounded-xl px-3 py-2
              text-sm font-bold text-gray-600
              transition
              hover:bg-purple-50 hover:text-purple-700
            "
          >
            <ArrowLeft size={18} />
            Back to learning
          </Link>

          <div className="flex items-center gap-2 font-black text-purple-700">
            <Sparkles size={18} />
            EthubX ፊደል
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6 sm:px-6 sm:py-10">
        <Suspense fallback={<TraceLoading />}>
          <TraceClient />
        </Suspense>
      </div>
    </main>
  );
}