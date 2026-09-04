"use client";

import { useEffect, useState } from "react";
import { BookOpen, Flame, RotateCcw, Trophy } from "lucide-react";
import { fidelFamilies } from "@/data/fidel";

export default function ProgressClient() {
  const [practice,setPractice] = useState(0);
  const [quiz,setQuiz] = useState(0);

  useEffect(()=>{
    setPractice(Number(localStorage.getItem("ethubx-practice-score")||0));
    setQuiz(Number(localStorage.getItem("ethubx-quiz-score")||0));
  },[]);

  const learned = Math.min(fidelFamilies.length, Number(localStorage.getItem("ethubx-learned")||0));
  const overall = Math.min(100, Math.round(((learned/fidelFamilies.length)*60) + Math.min(practice/20,1)*20 + Math.min(quiz/10,1)*20));

  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
      <div className="card p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div><p className="text-sm font-bold text-stone-500">Overall progress</p><h2 className="mt-1 text-4xl font-black">{overall}%</h2></div>
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#5b3df5]/10 text-[#5b3df5]"><Trophy/></div>
        </div>
        <div className="mt-6 h-4 overflow-hidden rounded-full bg-stone-100"><div className="h-full rounded-full bg-[#5b3df5] transition-all" style={{width:`${overall}%`}}/></div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Stat icon={<BookOpen/>} label="Fidel families" value={`${learned}/${fidelFamilies.length}`}/>
          <Stat icon={<Flame/>} label="Practice correct" value={practice}/>
          <Stat icon={<Trophy/>} label="Best quiz" value={`${quiz}/10`}/>
        </div>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-black">Keep going</h3>
        <p className="mt-2 leading-7 text-stone-600">A few minutes every day is better than one long session. Practice words, then challenge yourself with the quiz.</p>
        <button onClick={()=>{localStorage.clear();location.reload()}} className="btn-secondary mt-6 w-full"><RotateCcw/> Reset progress</button>
      </div>
    </div>
  );
}

function Stat({icon,label,value}:{icon:React.ReactNode,label:string,value:string|number}) {
  return <div className="rounded-2xl bg-stone-50 p-4"><div className="text-[#5b3df5]">{icon}</div><p className="mt-3 text-xs font-bold text-stone-500">{label}</p><p className="mt-1 text-xl font-black">{value}</p></div>;
}
