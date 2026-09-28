"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime error caught by Next.js error boundary:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#f4f4f6] text-[#0f1011] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-[#EE3028] font-bold text-5xl mb-3">Notice</div>
        <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
        <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
          An unexpected error occurred. Please try reloading the page.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0f1011] text-white font-medium text-sm hover:bg-[#EE3028] transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
