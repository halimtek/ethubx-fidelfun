"use client";

import { useEffect, useMemo, useState } from "react";
import { allForms } from "@/data/fidel";
import { Check, X, Trophy } from "lucide-react";

function shuffle<T>(arr:T[]) { return [...arr].sort(()=>Math.random()-.5); }

export default function QuizClient() {
  const [question,setQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [selected,setSelected] = useState<string|null>(null);
  const [done,setDone] = useState(false);
  const [items,setItems] = useState(allForms.slice(0,10));

  useEffect(()=>setItems(shuffle(allForms).slice(0,10)),[]);

  const current = items[question];
  const options = useMemo(()=>{
    if (!current) return [];
    return shuffle([current.english,...shuffle(allForms.filter(x=>x.letter!==current.letter)).slice(0,3).map(x=>x.english)]);
  },[current]);

  function answer(option:string) {
    if (selected || done) return;
    setSelected(option);
    if (option===current.english) setScore(s=>s+1);
    setTimeout(()=>{
      if (question===items.length-1) {
        setDone(true);
        const finalScore = score + (option===current.english ? 1 : 0);
        localStorage.setItem("ethubx-quiz-score", String(finalScore));
      } else {
        setQuestion(q=>q+1);
        setSelected(null);
      }
    },650);
  }

  if (done) return (
    <div className="card mt-8 p-8 text-center sm:p-12">
      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#f4b942]/20"><Trophy className="h-10 w-10 text-[#b77900]"/></div>
      <h2 className="mt-6 text-4xl font-black">{score} / {items.length}</h2>
      <p className="mt-2 text-stone-500">{score===items.length?"Perfect! You know your Fidel!":"Great job — keep practicing and try again."}</p>
      <button onClick={()=>{setQuestion(0);setScore(0);setSelected(null);setDone(false);setItems(shuffle(allForms).slice(0,10))}} className="btn-primary mt-7">Play again</button>
    </div>
  );

  if (!current) return null;

  return (
    <div className="card mt-8 p-5 sm:p-8">
      <div className="flex items-center justify-between text-sm font-bold text-stone-500">
        <span>Question {question+1} / {items.length}</span><span>Score {score}</span>
      </div>
      <div className="mt-10 text-center">
        <div className="amharic text-9xl font-black">{current.letter}</div>
        <p className="mt-4 text-lg font-bold">Which sound is closest?</p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {options.map(option=>{
          const isCorrect = option===current.english;
          const isSelected = option===selected;
          return <button key={option} onClick={()=>answer(option)} className={`rounded-2xl border-2 p-5 text-left text-lg font-black transition ${isSelected&&isCorrect?"border-green-500 bg-green-50 text-green-700":isSelected?"border-red-500 bg-red-50 text-red-700":"border-stone-200 hover:border-[#5b3df5] hover:bg-[#5b3df5]/5"}`}>
            <span className="mr-2">{isSelected ? (isCorrect?<Check className="inline"/>:<X className="inline"/>) : "○"}</span>{option}
          </button>
        })}
      </div>
    </div>
  );
}
