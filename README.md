# EthubX ፊደል

A free, Vercel-ready Next.js + TypeScript + Tailwind learning app for Amharic Fidel.

## Features

- ሀ → ፐ Fidel explorer
- Seven forms per Fidel family
- Large, child-friendly typography
- English transliteration
- Browser pronunciation with Amharic voice preference and fallback
- Handwriting/tracing canvas for mouse, trackpad, touch and tablet
- Amharic ↔ English word practice
- Instant answer correction
- 10-question Fidel quiz
- Local browser progress tracking
- Responsive mobile-first UI
- No database required

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Build command: `next build` (Vercel detects this automatically).
5. No environment variables are required.

## Notes

Pronunciation uses the browser's built-in Speech Synthesis API, preferring an available Amharic/Ethiopian voice. Because voice availability depends on the device/browser, the app falls back to the English transliteration when no Amharic voice is installed. For production-quality native audio, replace this with recorded Amharic clips in public/sounds.
