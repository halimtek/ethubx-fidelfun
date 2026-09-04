import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#faf9f6]/85 backdrop-blur-xl">
      <div className="shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#5b3df5] text-xl text-white">ፊ</span>
          <span className="text-lg">EthubX <span className="text-[#5b3df5]">ፊደል</span></span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <Link href="/learn" className="rounded-xl px-3 py-2 text-sm font-bold hover:bg-white"><BookOpen className="mr-1 inline h-4 w-4"/>Learn</Link>
          <Link href="/practice" className="rounded-xl px-3 py-2 text-sm font-bold hover:bg-white"><GraduationCap className="mr-1 inline h-4 w-4"/>Practice</Link>
          <Link href="/quiz" className="rounded-xl px-3 py-2 text-sm font-bold hover:bg-white">Quiz</Link>
          <Link href="/progress" className="rounded-xl px-3 py-2 text-sm font-bold hover:bg-white">Progress</Link>
        </nav>
      </div>
    </header>
  );
}
