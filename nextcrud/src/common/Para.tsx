// src/components/Paragraph.tsx
// src/components/Paragraph.tsx
import React from "react";
import { Playfair_Display } from "next/font/google"; // classy serif font

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"], // normal & bold
  variable: "--font-playfair",
});

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${playfair.variable} font-playfair max-w-xl text-lg opacity-80 leading-relaxed text-gray-300 mb-6`}
    >
      {children}
    </p>
  );
}
