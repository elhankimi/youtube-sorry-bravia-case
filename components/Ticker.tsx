"use client";

export default function Ticker() {
  const items = [
    "CLAIM READY",
    "A free checklist for anyone about to file a warranty claim.",
    "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
    "15 steps in the checklist.",
    "4 records to keep before anything goes wrong.",
    "1 rule: if it is not in writing, it did not happen.",
    "Download the checklist and keep it with your invoices.",
    "Share it with a friend who just bought something expensive.",
  ];

  return (
    <div
      aria-label="Ticker"
      className="bg-[#EEFAF5] border-b border-[#B9E6D6] overflow-hidden py-3 select-none"
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center text-[10px] font-mono font-medium tracking-[0.16em] uppercase text-[#065F43] mx-5"
          >
            <span>{item}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#087A58] ml-10 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}
