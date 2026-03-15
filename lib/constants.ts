/**
 * Site-wide constants.
 * Centralise all static data here — nav links, footer links, social URLs, etc.
 */

import type { NavLink } from "./types";

export const SITE_NAME = "Axiler";
export const SITE_URL = "https://axiler.com";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
