// src/components/Heading.tsx
import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-bold tracking-wide text-red-500 text-4xl md:text-5xl mb-4">
      {children}
    </h1>
  );
}
