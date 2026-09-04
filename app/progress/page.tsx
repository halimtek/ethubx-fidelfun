import ProgressClient from "@/components/ProgressClient";

export default function ProgressPage() {
  return (
    <div className="shell py-10 sm:py-14">
      <div className="max-w-2xl">
        <p className="eyebrow">Your learning</p>
        <h1 className="mt-2 text-4xl font-black sm:text-6xl">Progress that stays with you.</h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">Your practice and quiz scores are saved locally in your browser. No account is needed.</p>
      </div>
      <ProgressClient />
    </div>
  );
}
