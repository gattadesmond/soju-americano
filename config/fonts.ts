import { Fira_Code as FontMono } from "next/font/google";

/* Sans: Google Sans Flex via @fontsource-variable in globals.css */

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
});
