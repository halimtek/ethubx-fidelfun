import PracticeClient from "@/components/PracticeClient";
import { words } from "@/data/words";

export default function PracticePage() {
  return (
    <div className="shell py-10 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">Practice</p>
        <h1 className="mt-2 text-4xl font-black sm:text-6xl">See it. Type it. Learn it.</h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">Practice Amharic words by typing their English transliteration, then switch direction when you&apos;re ready.</p>
        <PracticeClient words={words}/>
      </div>
    </div>
  );
}
