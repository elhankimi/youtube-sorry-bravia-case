"use client";

import { ShieldCheck, ArrowDownToLine } from "lucide-react";

export default function Header() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px] transition-all">
      <div className="max-w-[1180px] mx-auto h-full px-4 sm:px-6 md:px-10 flex items-center justify-between gap-3 sm:gap-6 flex-nowrap whitespace-nowrap">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#087A58] rounded-md py-1 flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[#087A58] text-white flex items-center justify-center shadow-sm group-hover:bg-[#066748] transition-colors flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-[17px] sm:text-[19px] tracking-[-0.035em] text-[#0D1117]">
            CLAIM READY
          </span>
        </a>

        {/* Two links strictly: 'The 15 steps' and 'Key numbers' */}
        <nav className="flex items-center gap-3 sm:gap-6 text-[13px] sm:text-[15px] font-medium text-[#363C47]">
          <button
            onClick={() => scrollTo("the-15-steps")}
            className="hover:text-[#087A58] transition-colors py-1 focus:outline-none"
          >
            The 15 steps
          </button>
          <button
            onClick={() => scrollTo("key-numbers")}
            className="hover:text-[#087A58] transition-colors py-1 focus:outline-none"
          >
            Key numbers
          </button>
        </nav>

        {/* Download Button */}
        <button
          onClick={() => scrollTo("download-checklist")}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0D1117] text-white text-[12.5px] sm:text-[13.5px] font-medium px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#087A58] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 flex-shrink-0"
        >
          <ArrowDownToLine className="w-4 h-4 flex-shrink-0" />
          <span>Download</span>
        </button>
      </div>
    </header>
  );
}
