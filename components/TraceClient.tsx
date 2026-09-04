"use client";

import {
  Eraser,
  Volume2,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { allForms } from "@/data/fidel";

export default function TraceClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const searchParams = useSearchParams();

  const [index, setIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const [drawing, setDrawing] = useState(false);

  const current = allForms[index];

  // ------------------------------------------
  // Start from ?letter=...
  // ------------------------------------------
  useEffect(() => {
    const requestedLetter = searchParams.get("letter");

    if (!requestedLetter) return;

    const foundIndex = allForms.findIndex(
      (item) => item.letter === requestedLetter
    );

    if (foundIndex !== -1) {
      setIndex(foundIndex);
    }
  }, [searchParams]);

  // ------------------------------------------
  // Resize canvas correctly on every screen
  // ------------------------------------------
  // ------------------------------------------
// Resize canvas correctly on every screen
// ------------------------------------------
useEffect(() => {
  function resizeCanvas() {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();

    const width = Math.max(280, Math.floor(rect.width));
    const height = width;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(7, Math.min(11, width / 45));
    ctx.strokeStyle = "#7c3aed";
  }

  resizeCanvas();

  const observer = new ResizeObserver(resizeCanvas);

  const container = containerRef.current;

  if (container) {
    observer.observe(container);
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("orientationchange", resizeCanvas);

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("orientationchange", resizeCanvas);
  };
}, []);

  // ------------------------------------------
  // Get pointer position
  // ------------------------------------------
  function getPosition(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    const canvas = canvasRef.current;

    if (!canvas) {
      return { x: 0, y: 0 };
    }

    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  // ------------------------------------------
  // Start drawing
  // ------------------------------------------
  function startDrawing(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    event.preventDefault();

    const canvas = canvasRef.current;

    if (!canvas) return;

    canvas.setPointerCapture(event.pointerId);

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const { x, y } = getPosition(event);

    ctx.beginPath();
    ctx.moveTo(x, y);

    setDrawing(true);
  }

  // ------------------------------------------
  // Draw
  // ------------------------------------------
  function draw(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    if (!drawing) return;

    event.preventDefault();

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const { x, y } = getPosition(event);

    ctx.lineTo(x, y);
    ctx.stroke();
  }

  // ------------------------------------------
  // Stop
  // ------------------------------------------
  function stopDrawing(
    event: React.PointerEvent<HTMLCanvasElement>
  ) {
    event.preventDefault();

    const canvas = canvasRef.current;

    if (canvas?.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }

    setDrawing(false);
  }

  // ------------------------------------------
  // Clear drawing
  // ------------------------------------------
  function clearCanvas() {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // ------------------------------------------
  // Navigation
  // ------------------------------------------
  function previous() {
    clearCanvas();

    setIndex((value) =>
      value === 0 ? allForms.length - 1 : value - 1
    );
  }

  function next() {
    clearCanvas();

    setIndex((value) =>
      value === allForms.length - 1 ? 0 : value + 1
    );
  }

  // ------------------------------------------
  // Pronunciation
  // ------------------------------------------
  function speak() {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    window.speechSynthesis.cancel();

    const voices = window.speechSynthesis.getVoices();

    const amharicVoice =
      voices.find((voice) =>
        voice.lang.toLowerCase().startsWith("am")
      ) ||
      voices.find((voice) =>
        voice.lang.toLowerCase().includes("et")
      );

    const utterance = new SpeechSynthesisUtterance();

    if (amharicVoice) {
      utterance.text = current.letter;
      utterance.voice = amharicVoice;
      utterance.lang = amharicVoice.lang;
    } else {
      utterance.text = current.pronunciation;
      utterance.lang = "en-US";
    }

    utterance.rate = 0.62;
    utterance.pitch = 1.05;

    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Friendly intro */}
      <div className="mb-5 text-center sm:mb-7">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-black text-yellow-700">
          <Sparkles size={16} />
          Let's practice!
        </div>

        <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-5xl">
          Write this Fidel ✏️
        </h1>

        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-500 sm:text-base">
          Use your finger, mouse, stylus, or trackpad to follow the letter.
        </p>
      </div>

      {/* Current letter */}
      <div className="mb-5 flex items-center justify-center gap-4 sm:mb-7">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100 sm:h-24 sm:w-24">
          <span className="text-5xl font-black text-purple-700 sm:text-6xl">
            {current.letter}
          </span>
        </div>

        <div>
          <div className="text-2xl font-black text-gray-900 sm:text-3xl">
            {current.transliteration}
          </div>

          <button
            onClick={speak}
            className="
              mt-2 inline-flex min-h-10 items-center gap-2
              rounded-xl bg-purple-100 px-3 py-2
              text-sm font-bold text-purple-700
              active:scale-95
            "
          >
            <Volume2 size={17} />
            Hear it
          </button>
        </div>
      </div>

      {/* Drawing area */}
      <div
        ref={containerRef}
        className="
          relative mx-auto w-full max-w-[620px]
          overflow-hidden rounded-[2rem]
          border-4 border-purple-100
          bg-white shadow-xl shadow-purple-100
        "
      >
        {/* Guide letter */}
        {showGuide && (
          <div
            className="
              pointer-events-none absolute inset-0
              flex items-center justify-center
              select-none
            "
            aria-hidden="true"
          >
            <span
              className="
                font-black leading-none
                text-[clamp(12rem,48vw,25rem)]
                text-purple-100
              "
            >
              {current.letter}
            </span>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerCancel={stopDrawing}
          onPointerLeave={stopDrawing}
          className="
            relative z-10 block w-full
            touch-none
            cursor-crosshair
          "
          style={{
            touchAction: "none",
          }}
        />

        {/* Mobile hint */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-gray-500 shadow-sm">
          👆 Trace with your finger
        </div>
      </div>

      {/* Controls */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <button
          onClick={previous}
          className="
            flex min-h-12 items-center justify-center gap-2
            rounded-2xl border-2 border-gray-100
            bg-white px-4 py-3
            font-bold text-gray-700
            shadow-sm transition
            active:scale-95
          "
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <button
          onClick={next}
          className="
            flex min-h-12 items-center justify-center gap-2
            rounded-2xl bg-purple-600
            px-4 py-3 font-bold text-white
            shadow-md transition
            active:scale-95
          "
        >
          Next
          <ChevronRight size={20} />
        </button>

        <button
          onClick={clearCanvas}
          className="
            flex min-h-12 items-center justify-center gap-2
            rounded-2xl border-2 border-red-100
            bg-red-50 px-4 py-3
            font-bold text-red-600
            active:scale-95
          "
        >
          <Eraser size={19} />
          Clear
        </button>

        <button
          onClick={() => setShowGuide((value) => !value)}
          className="
            flex min-h-12 items-center justify-center gap-2
            rounded-2xl border-2 border-purple-100
            bg-purple-50 px-4 py-3
            font-bold text-purple-700
            active:scale-95
          "
        >
          {showGuide ? (
            <>
              <EyeOff size={19} />
              Hide guide
            </>
          ) : (
            <>
              <Eye size={19} />
              Show guide
            </>
          )}
        </button>
      </div>

      {/* Progress */}
      <div className="mt-6 rounded-3xl bg-gray-50 p-4">
        <div className="mb-2 flex items-center justify-between text-xs font-bold text-gray-500">
          <span>Fidel practice</span>
          <span>
            {index + 1} / {allForms.length}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-purple-500 transition-all duration-300"
            style={{
              width: `${((index + 1) / allForms.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={clearCanvas}
        className="mx-auto mt-5 flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-purple-600"
      >
        <RotateCcw size={15} />
        Start again
      </button>
    </div>
  );
}