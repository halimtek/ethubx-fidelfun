import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Youtube,
} from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ethubx",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ethubx",
    icon: Linkedin,
  },
  {
    name: "Telegram",
    href: "https://t.me/ethubx",
    icon: Send,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/ethubxhq",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/ethubx",
    icon: Facebook,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ethubx",
    icon: Youtube,
  },
];

const learnLinks = [
  { name: "Learn ፊደል", href: "/learn" },
  { name: "Practice", href: "/practice" },
  { name: "Trace & Write", href: "/trace" },
  { name: "Quizzes", href: "/quiz" },
  { name: "My Progress", href: "/progress" },
];

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
      {/* Main footer */}
      <div className="shell px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-600 text-white shadow-lg shadow-purple-200">
                <BookOpen className="h-6 w-6" />
              </div>

              <div>
                <div className="text-xl font-black tracking-tight text-stone-900">
                  EthubX
                </div>
                <div className="text-xs font-bold text-purple-600">
                  Amharic Learning
                </div>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-stone-500 dark:text-stone-400 dark:text-stone-500 sm:text-base">
              Making Amharic learning simple, fun, and accessible for
              everyone — especially young learners.
            </p>

            {/* Fun letter decoration */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["ሀ", "ለ", "መ", "ሰ", "በ", "ተ", "ነ", "ፐ"].map(
                (letter, index) => (
                  <span
                    key={letter}
                    className={`amharic grid h-9 w-9 place-items-center rounded-xl text-lg font-black ${index % 2 === 0
                      ? "bg-purple-100 text-purple-600"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {letter}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-stone-900">
              Learn
            </h3>

            <ul className="mt-5 space-y-3">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm font-semibold text-stone-500 dark:text-stone-400 dark:text-stone-500 transition hover:text-purple-600"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-stone-900">
              Follow EthubX
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-stone-500 dark:text-stone-400 dark:text-stone-500">
              Follow us for new projects, technology tips, learning resources,
              and updates.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`EthubX on ${name}`}
                  title={name}
                  className="group grid h-11 place-items-center rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-500 dark:text-stone-400 dark:text-stone-500 transition hover:-translate-y-1 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 hover:shadow-sm"
                >
                  <Icon className="h-5 w-5 transition group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-100 bg-stone-50 dark:bg-stone-900">
        <div className="shell flex flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-center text-xs font-semibold text-stone-400 dark:text-stone-500 md:text-left">
            © {new Date().getFullYear()} EthubX. Made with ❤️ in Ethiopia.
          </p>

          <div className="flex items-center justify-center gap-5 text-xs font-semibold text-stone-400 dark:text-stone-500">
            <Link
              href="/"
              className="transition hover:text-purple-600"
            >
              Home
            </Link>

            <Link
              href="/learn"
              className="transition hover:text-purple-600"
            >
              Learn
            </Link>

            <a
              href="https://ethubx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-purple-600"
            >
              EthubX
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}