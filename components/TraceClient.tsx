"use client";

import {
  ChevronLeft,
  ChevronRight,
  Eraser,
  Eye,
  EyeOff,
  RotateCcw,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import { allForms } from "@/data/fidel";
import { useI18n } from "@/lib/i18n";

export default function TraceClient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const searchParams = useSearchParams();
  const { t } = useI18n();

  const [index, setIndex] = useState(0);
  const [showGuide, setShowGuide] = useState(true);
  const [drawing, setDrawing] = useState(false);

  const current = allForms[index];

  /*
   * ---------------------------------------------------------
   * Read selected letter from URL
   *
   * Example:
   * /trace?letter=ቀ
   * ---------------------------------------------------------
   */
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

  /*
   * ---------------------------------------------------------
   * Canvas setup
   * ---------------------------------------------------------
   */
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();

    const size = Math.max(
      1,
      Math.floor(Math.min(rect.width, 420))
    );

    const pixelRatio = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    canvas.width = size * pixelRatio;
    canvas.height = size * pixelRatio;

    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.setTransform(
      pixelRatio,
      0,
      0,
      pixelRatio,
      0,
      0
    );

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(
      6,
      Math.min(10, size / 42)
    );

    ctx.strokeStyle = "#7c3aed";
  }, []);

  useEffect(() => {
    setupCanvas();

    const observer = new ResizeObserver(() => {
      setupCanvas();
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", setupCanvas);
    window.addEventListener(
      "orientationchange",
      setupCanvas
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "resize",
        setupCanvas
      );

      window.removeEventListener(
        "orientationchange",
        setupCanvas
      );
    };
  }, [setupCanvas]);

  /*
   * ---------------------------------------------------------
   * Get pointer position
   * ---------------------------------------------------------
   */
  const getPoint = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return {
        x: 0,
        y: 0,
      };
    }

    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  /*
   * ---------------------------------------------------------
   * Start drawing
   * ---------------------------------------------------------
   */
  const startDrawing = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    event.preventDefault();

    canvas.setPointerCapture(event.pointerId);

    const { x, y } = getPoint(event);

    ctx.beginPath();
    ctx.moveTo(x, y);

    setDrawing(true);
  };

  /*
   * ---------------------------------------------------------
   * Draw
   * ---------------------------------------------------------
   */
  const draw = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    event.preventDefault();

    const { x, y } = getPoint(event);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  /*
   * ---------------------------------------------------------
   * Stop drawing
   * ---------------------------------------------------------
   */
  const stopDrawing = (
    event?: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;

    if (canvas && event) {
      try {
        canvas.releasePointerCapture(
          event.pointerId
        );
      } catch {
        // Pointer already released.
      }
    }

    setDrawing(false);
  };

  /*
   * ---------------------------------------------------------
   * Clear drawing
   * ---------------------------------------------------------
   */
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    setupCanvas();
  };

  /*
   * ---------------------------------------------------------
   * Previous letter
   * ---------------------------------------------------------
   */
  const goPrevious = () => {
    setIndex((currentIndex) =>
      currentIndex === 0
        ? allForms.length - 1
        : currentIndex - 1
    );

    clearCanvas();
  };

  /*
   * ---------------------------------------------------------
   * Next letter
   * ---------------------------------------------------------
   */
  const goNext = () => {
    setIndex((currentIndex) =>
      currentIndex === allForms.length - 1
        ? 0
        : currentIndex + 1
    );

    clearCanvas();
  };

  /*
   * ---------------------------------------------------------
   * Speak letter
   * ---------------------------------------------------------
   */
  const speakLetter = () => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(
        current.pronunciation
      );

    utterance.lang = "am-ET";
    utterance.rate = 0.78;
    utterance.pitch = 1;

    const voices =
      window.speechSynthesis.getVoices();

    const amharicVoice =
      voices.find((voice) =>
        voice.lang
          .toLowerCase()
          .startsWith("am")
      ) ||
      voices.find((voice) =>
        voice.lang
          .toLowerCase()
          .startsWith("et")
      );

    if (amharicVoice) {
      utterance.voice = amharicVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  /*
   * ---------------------------------------------------------
   * Progress
   * ---------------------------------------------------------
   */
  const progress =
    ((index + 1) / allForms.length) * 100;

  return (
    <section className="mx-auto w-full max-w-4xl">
      {/* Header */}
      <div className="mb-8 text-center sm:mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-600">
          {t.trace.eyebrow}
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-tight text-stone-950 dark:text-stone-100 sm:text-5xl">
          {t.trace.title} {current.letter}
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-stone-600 dark:text-stone-400 dark:text-stone-500 sm:text-base">
          {t.trace.description}
        </p>
      </div>

      {/* Letter information */}
      <div className="mb-6 flex flex-col items-center justify-between gap-4 border-y border-stone-200 dark:border-stone-800 py-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 dark:text-stone-500">
            {t.trace.letter}
          </p>

          <div className="mt-1 flex items-baseline justify-center gap-3 sm:justify-start">
            <span className="amharic text-5xl font-black leading-none text-purple-600 sm:text-6xl">
              {current.letter}
            </span>

            <span className="text-lg font-bold text-stone-700">
              {current.pronunciation}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={speakLetter}
          className="inline-flex min-h-11 items-center justify-center gap-2 border border-stone-300 dark:border-stone-700 px-4 py-2 text-sm font-bold text-stone-800 transition hover:border-purple-400 hover:text-purple-700 active:scale-[0.98]"
        >
          <Volume2 className="h-4 w-4" />
          {t.common.hear}
        </button>
      </div>

      {/* Tracing area */}
      <div className="flex justify-center px-2 sm:px-0">
        <div
          ref={containerRef}
          className="
            relative
            aspect-square
            w-[min(88vw,420px)]
            overflow-hidden
            border
            border-stone-200 dark:border-stone-800
            bg-white dark:bg-stone-950
          "
        >
          {/* Guide */}
          {showGuide && (
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                grid
                place-items-center
                select-none
              "
            >
              <span
                className="
                  amharic
                  text-[clamp(9rem,42vw,18rem)]
                  font-black
                  leading-none
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
            className="
              absolute
              inset-0
              block
              h-full
              w-full
              touch-none
              cursor-crosshair
            "
            onPointerDown={startDrawing}
            onPointerMove={draw}
            onPointerUp={stopDrawing}
            onPointerCancel={stopDrawing}
          />

          {/* Drawing indicator */}
          {drawing && (
            <div className="pointer-events-none absolute bottom-3 left-3 border border-purple-200 bg-white dark:bg-stone-950/90 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-700">
              {t.trace.drawing}
            </div>
          )}
        </div>
      </div>

      {/* Guide toggle */}
      <div className="mt-5 flex justify-center">
        <button
          type="button"
          onClick={() =>
            setShowGuide((visible) => !visible)
          }
          className="inline-flex min-h-10 items-center gap-2 px-3 py-2 text-sm font-bold text-stone-600 dark:text-stone-400 dark:text-stone-500 transition hover:text-purple-700"
        >
          {showGuide ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}

          {showGuide
            ? t.trace.hideGuide
            : t.trace.showGuide}
        </button>
      </div>

      {/* Controls */}
      <div className="mx-auto mt-6 grid w-full max-w-[420px] grid-cols-2 border-y border-stone-200 dark:border-stone-800 sm:grid-cols-4">
        <button
          type="button"
          onClick={goPrevious}
          className="
            flex
            min-h-12
            items-center
            justify-center
            gap-2
            border-b
            border-r
            border-stone-200 dark:border-stone-800
            px-3
            text-sm
            font-bold
            text-stone-700
            transition
            hover:text-purple-700
            sm:border-b-0
          "
        >
          <ChevronLeft className="h-4 w-4" />
          {t.common.previous}
        </button>

        <button
          type="button"
          onClick={clearCanvas}
          className="
            flex
            min-h-12
            items-center
            justify-center
            gap-2
            border-b
            border-stone-200 dark:border-stone-800
            px-3
            text-sm
            font-bold
            text-stone-700
            transition
            hover:text-purple-700
            sm:border-b-0
            sm:border-r
          "
        >
          <Eraser className="h-4 w-4" />
          {t.common.clear}
        </button>

        <button
          type="button"
          onClick={clearCanvas}
          className="
            flex
            min-h-12
            items-center
            justify-center
            gap-2
            border-r
            border-stone-200 dark:border-stone-800
            px-3
            text-sm
            font-bold
            text-stone-700
            transition
            hover:text-purple-700
          "
        >
          <RotateCcw className="h-4 w-4" />
          {t.common.reset}
        </button>

        <button
          type="button"
          onClick={goNext}
          className="
            flex
            min-h-12
            items-center
            justify-center
            gap-2
            px-3
            text-sm
            font-bold
            text-stone-700
            transition
            hover:text-purple-700
          "
        >
          {t.common.next}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Progress */}
      <div className="mx-auto mt-8 w-full max-w-[420px]">
        <div className="mb-2 flex items-center justify-between text-xs font-bold text-stone-500 dark:text-stone-400 dark:text-stone-500">
          <span>
            {t.trace.letter} {index + 1} /{" "}
            {allForms.length}
          </span>

          <span>{Math.round(progress)}%</span>
        </div>

        <div className="h-1 w-full bg-stone-200">
          <div
            className="h-1 bg-purple-600 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-stone-200 dark:border-stone-800 pt-6 sm:flex-row">
        <Link
          href="/learn"
          className="text-sm font-bold text-stone-600 dark:text-stone-400 dark:text-stone-500 transition hover:text-purple-700"
        >
          ← {t.common.back}
        </Link>

        <span className="hidden text-stone-300 sm:inline">
          |
        </span>

        <Link
          href={`/trace?letter=${encodeURIComponent(
            current.letter
          )}`}
          className="text-sm font-bold text-purple-700 transition hover:text-purple-900"
        >
          {t.trace.practiceAgain}
        </Link>
      </div>
    </section>
  );
}