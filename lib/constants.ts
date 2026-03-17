/**
 * Site-wide constants.
 * Centralise all static data here — nav links, footer links, social URLs, etc.
 */

import type { NavLink } from "./types";

export const SITE_NAME = "Axiler";
export const SITE_URL = "https://axiler.com";

export const NAV_LINKS: NavLink[] = [
  { label: "What It Does", href: "#why-axiler" },
  { label: "Why Axiler", href: "#what-it-does" },
  { label: "Services", href: "#security-lifecycle" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];
