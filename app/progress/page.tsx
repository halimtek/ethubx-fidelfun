import ProgressClient from "@/components/ProgressClient";

export default function ProgressPage() {
  return (
    <main className="bg-[#fffdf9]">
      <div className="shell py-10 sm:py-16">
        <div className="max-w-2xl">
          <p className="eyebrow">Your learning</p>

          <h1 className="mt-4 text-[clamp(2.25rem,8vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em]">
            Progress that
            <br />
            stays with you.
          </h1>

          <p className="mt-6 text-base leading-7 text-stone-500 sm:text-lg sm:leading-8">
            Your practice and quiz scores are saved locally in
            your browser. No account is needed.
          </p>
        </div>

        <ProgressClient />
      </div>
    </main>
  );
}