import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import TraceClient from "@/components/TraceClient";

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
        <TraceClient />
      </div>
    </main>
  );
}