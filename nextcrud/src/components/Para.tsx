// src/components/Paragraph.tsx
import React from "react";

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-xl text-lg opacity-80 leading-relaxed text-gray-300 mb-6">
      {children}
    </p>
  );
}
