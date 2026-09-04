"use client";

import { useEffect, useMemo, useState } from "react";
import type { Word } from "@/data/words";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";

export default function PracticeClient({words}:{words:Word[]}) {
  const [index,setIndex] = useState(0);
  const [reverse,setReverse] = useState(false);
  const [answer,setAnswer] = useState("");
  const [result,setResult] = useState<"idle"|"correct"|"wrong">("idle");
  const [score,setScore] = useState(0);
  const word = words[index];

  const expected = reverse ? word.amharic : word.english;
  const prompt = reverse ? word.english : word.amharic;

  useEffect(()=> {
    const saved = Number(localStorage.getItem("ethubx-practice-score") || 0);
    setScore(saved);
  },[]);

  function normalize(v:string) {
    return v.trim().toLowerCase().replace(/\s+/g," ");
  }

  function check() {
    if (!answer.trim()) return;
    const ok = normalize(answer) === normalize(expected);
    setResult(ok ? "correct" : "wrong");
    if (ok) {
      const next = score + 1;
      setScore(next);
      localStorage.setItem("ethubx-practice-score", String(next));
      localStorage.setItem("ethubx-last-practice", new Date().toISOString());
    }
  }

  function next() {
    setIndex((index+1)%words.length);
    setAnswer("");
    setResult("idle");
  }

  const progress = useMemo(()=>Math.round(((index+1)/words.length)*100),[index,words.length]);

  return (
    <div className="card mt-8 p-5 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-bold text-stone-500">Word {index+1} / {words.length}</span>
        <span className="rounded-full bg-[#5b3df5]/10 px-3 py-1 text-sm font-black text-[#5b3df5]">Score {score}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-[#5b3df5] transition-all" style={{width:`${progress}%`}}/></div>

      <div className="mt-10 text-center">
        <p className="text-sm font-black uppercase tracking-widest text-stone-400">{reverse?"Write the Amharic word":"Write it in English"}</p>
        <div className={`${reverse?"text-5xl sm:text-7xl":"amharic text-7xl sm:text-9xl"} mt-6 font-black tracking-tight`}>{prompt}</div>
        <p className="mt-4 text-stone-500">{word.hint}</p>
      </div>

      <div className="mx-auto mt-8 max-w-xl">
        <input autoFocus value={answer} onChange={e=>{setAnswer(e.target.value);setResult("idle")}} onKeyDown={e=>e.key==="Enter"&&check()} placeholder={reverse?"Type አማርኛ here...":"Type English here..."} className="w-full rounded-2xl border-2 border-stone-200 bg-white px-5 py-4 text-center text-xl font-bold outline-none transition focus:border-[#5b3df5]" />
        {result!=="idle" && (
          <div className={`mt-4 rounded-2xl p-4 text-center font-bold ${result==="correct"?"bg-green-50 text-green-700":"bg-red-50 text-red-700"}`}>
            {result==="correct" ? <><Check className="mr-1 inline"/> Correct! 🎉</> : <><X className="mr-1 inline"/> Not quite. The answer is <strong>{expected}</strong>.</>}
          </div>
        )}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <button onClick={check} className="btn-primary">Check answer</button>
          <button onClick={()=>setReverse(!reverse)} className="btn-secondary"><RotateCcw/> {reverse?"Amharic → English":"English → Amharic"}</button>
          <button onClick={next} className="btn-secondary"><Shuffle/> Next word</button>
        </div>
      </div>
    </div>
  );
}
