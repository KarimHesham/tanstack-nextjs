"use client";

import { Demo } from "@repo/ui/demo";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">Docs</h1>
      <Demo appName="docs" />
    </main>
  );
}
