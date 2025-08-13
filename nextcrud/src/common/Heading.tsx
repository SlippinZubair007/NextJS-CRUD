// src/components/Heading.tsx
import React from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"], // bold only for headings
  variable: "--font-orbitron",
});

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1
      className={`${orbitron.variable} font-orbitron font-bold tracking-wide text-red-500 text-4xl md:text-5xl mb-4`}
    >
      {children}
    </h1>
  );
}
