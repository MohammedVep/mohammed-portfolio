"use client";

import { useState } from "react";

type ReferralSummaryCopyProps = {
  summary: string;
};

export default function ReferralSummaryCopy({ summary }: ReferralSummaryCopyProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={copySummary}
        className="rounded bg-amber-300 px-4 py-3 text-xs font-mono font-bold uppercase tracking-widest text-black transition hover:bg-amber-200"
      >
        {status === "copied" ? "Copied" : "Copy Referral Note"}
      </button>
      <p aria-live="polite" className="mt-2 min-h-5 text-xs text-neutral-400">
        {status === "copied"
          ? "Referral note copied. Edit it to reflect your actual relationship with Mohammed."
          : status === "error"
            ? "Copy was unavailable. Select the note above and copy it manually."
            : "Use this as a starting point, not as a claim of personal working experience."}
      </p>
    </div>
  );
}
