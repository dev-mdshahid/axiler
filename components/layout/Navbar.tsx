"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 motion-reduce:transition-none",
        isScrolled
          ? "bg-neutral-950/80 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-navbar w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* ── Logo ───────────────────────────────────────────── */}
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src="/axiler-logo.svg"
            alt="Axiler logo"
            width={120}
            height={40}
            className="h-8 w-auto sm:h-10"
            priority
          />
        </Link>

        {/* ── Desktop Links ──────────────────────────────────── */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-neutral-300 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA Buttons ────────────────────────────── */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#partnership"
            className="inline-flex h-10 items-center justify-center rounded-full border border-white px-6 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-neutral-950 motion-reduce:transition-none"
          >
            Apply Partnership
          </Link>
          <Link
            href="#demo"
            className="inline-flex h-10 items-center justify-center rounded-full border border-white bg-white px-6 text-sm font-medium text-neutral-950 transition-all duration-300 hover:bg-transparent hover:text-white motion-reduce:transition-none"
          >
            Demo
          </Link>
        </div>

        {/* ── Mobile Hamburger Button ──────────────────────── */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="relative z-50 flex size-10 items-center justify-center rounded-lg text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <HiOutlineXMark className="size-6" aria-hidden="true" />
          ) : (
            <HiOutlineBars3 className="size-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ─────────────────────────────── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-neutral-950/95 backdrop-blur-xl transition-all duration-500 motion-reduce:transition-none lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className={cn(
                  "transition-all duration-500 motion-reduce:transition-none",
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${150 + index * 75}ms`
                    : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  className="text-2xl font-medium text-white transition-colors duration-300 hover:text-brand-primary-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA Buttons */}
          <div
            className={cn(
              "flex flex-col items-center gap-4 pt-4 transition-all duration-500 motion-reduce:transition-none",
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: isMobileMenuOpen
                ? `${150 + NAV_LINKS.length * 75}ms`
                : "0ms",
            }}
          >
            <Link
              href="#partnership"
              className="inline-flex h-12 w-56 items-center justify-center rounded-full border border-white text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-neutral-950"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Partnership
            </Link>
            <Link
              href="#demo"
              className="inline-flex h-12 w-56 items-center justify-center rounded-full border border-white bg-white text-base font-medium text-neutral-950 transition-all duration-300 hover:bg-transparent hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
