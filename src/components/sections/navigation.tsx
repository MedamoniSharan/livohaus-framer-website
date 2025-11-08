"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/properties", label: "Properties" },
  { href: "/calculators", label: "Calculators" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Initialise theme based on saved preference or OS-level setting.
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const storedTheme = window.localStorage.getItem("livohaus-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Persist theme choice and update the root <html> class.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("livohaus-theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const headerClasses = [
    "fixed top-0 left-0 z-50 w-full flex justify-center px-4 sm:px-6 lg:px-12",
    isScrolled ? "py-3" : "py-6",
    "transition-all duration-500 ease-in-out",
  ].join(" ");

  const navClassName = [
    "mx-auto flex w-full max-w-screen-2xl items-center justify-between",
    "px-5 sm:px-8 lg:px-10 transition-all duration-500 ease-in-out",
    isScrolled
      ? "bg-white/70 dark:bg-neutral-900/70 border border-white/20 dark:border-neutral-800 backdrop-blur-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] rounded-2xl"
      : "bg-transparent border border-transparent",
  ].join(" ");

  const baseTextColor = isScrolled ? "text-neutral-800 dark:text-neutral-100" : "text-white";
  const desktopToggleClasses = isScrolled
    ? "border border-white/20 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-100 hover:bg-white/90 dark:hover:bg-neutral-900/40"
    : "border border-white/30 bg-white/10 text-white hover:bg-white/20";
  const hamburgerClasses = isScrolled
    ? "border border-white/20 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 text-neutral-800 dark:text-neutral-100 hover:bg-white/90 dark:hover:bg-neutral-900/60"
    : "border border-white/30 bg-white/10 text-white hover:bg-white/20";
  const mobileShellClasses = isScrolled
    ? "border border-white/20 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-100 backdrop-blur-xl shadow-lg shadow-black/10"
    : "border border-white/10 bg-neutral-900/70 text-white backdrop-blur-2xl shadow-lg shadow-black/20";
  const linkClasses = `group relative text-sm font-medium uppercase tracking-[0.18em] ${baseTextColor} transition-colors duration-300 hover:text-[#FF642F]`;
  const mobileLinkClasses = `relative py-2 transition-colors duration-300 hover:text-[#FF642F] ${isScrolled ? "text-neutral-800 dark:text-neutral-100" : "text-white"}`;
  const contactButtonClasses = isScrolled
    ? "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF642F] to-[#FF4800] px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:translate-x-1 hover:shadow-[0_12px_30px_rgba(255,100,47,0.32)]"
    : "inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-900 transition-all duration-300 hover:bg-white/90 hover:translate-x-1";

  return (
    <header className={headerClasses} style={{ fontFamily: '"Poppins","Inter",sans-serif' }}>
      <nav className={navClassName} aria-label="Primary navigation">
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:opacity-95"
          aria-label="ASL Realtors home"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white/90 p-1 shadow-md dark:bg-white/10">
            <Image
              src="/logo.jpg"
              alt="ASL Realtors logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span className={`text-xl sm:text-2xl font-semibold tracking-wide ${baseTextColor}`}>ASL Realtors</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-12 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={label} href={href} className={linkClasses}>
              {label}
              <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-[#FF642F] transition-all duration-300 group-hover:w-8" />
            </Link>
          ))}
        </div>

        <div className="ml-auto hidden items-center space-x-3 lg:flex">
          <Link
            href="/contact"
            className={contactButtonClasses}
          >
            Contact →
          </Link>
          <button
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${desktopToggleClasses}`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 hover:text-[#FF642F] lg:hidden ${hamburgerClasses}`}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={`fixed inset-x-4 top-[92px] z-40 overflow-hidden rounded-2xl transition-all ease-in-out lg:hidden ${mobileShellClasses} ${
          isMenuOpen ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
        style={{ fontFamily: '"Poppins","Inter",sans-serif', transitionDuration: "400ms" }}
      >
        <div className="flex flex-col gap-3 px-6 py-6 text-base font-medium uppercase tracking-[0.2em]">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={mobileLinkClasses}
            >
              {label}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleThemeToggle}
            className={`mt-2 flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
              theme === "dark"
                ? "border-white/20 bg-white/5 text-[#f5f5f5] hover:bg-white/10"
                : "border-white/40 bg-white/70 text-[#222222] hover:bg-white/90"
            }`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF642F] to-[#FF4800] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:translate-x-1 hover:shadow-[0_14px_40px_rgba(255,100,47,0.35)]"
          >
            Contact →
          </Link>
        </div>
      </div>
    </header>
  );
}