"use client";

import { useState } from "react";
import { ShieldCheck, Menu, X, ArrowDownToLine } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px] transition-all">
      <div className="max-w-[1180px] mx-auto h-full px-5 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#087A58] rounded-md px-1 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[#087A58] text-white flex items-center justify-center shadow-sm group-hover:bg-[#066748] transition-colors">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-[19px] tracking-[-0.035em] text-[#0D1117]">
            CLAIM READY
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-[13.5px] font-semibold text-[#363C47]">
          <button
            onClick={() => scrollTo("before-anything-goes-wrong")}
            className="hover:text-[#087A58] transition-colors py-1 focus:outline-none"
          >
            BEFORE ANYTHING GOES WRONG
          </button>
          <button
            onClick={() => scrollTo("when-the-fault-appears")}
            className="hover:text-[#087A58] transition-colors py-1 focus:outline-none"
          >
            WHEN THE FAULT APPEARS
          </button>
          <button
            onClick={() => scrollTo("when-a-technician-visits")}
            className="hover:text-[#087A58] transition-colors py-1 focus:outline-none"
          >
            WHEN A TECHNICIAN VISITS
          </button>
          <button
            onClick={() => scrollTo("if-the-claim-is-refused")}
            className="hover:text-[#087A58] transition-colors py-1 focus:outline-none"
          >
            IF THE CLAIM IS REFUSED
          </button>
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("call-to-action")}
            className="inline-flex items-center gap-2 bg-[#0D1117] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full hover:bg-[#087A58] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2"
          >
            <ArrowDownToLine className="w-4 h-4" />
            <span>Download the checklist</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#363C47] hover:text-[#087A58] rounded-md focus:outline-none focus:ring-2 focus:ring-[#087A58]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E7EAEF] px-5 py-6 shadow-float">
          <nav className="flex flex-col gap-4 text-[14px] font-semibold text-[#363C47]">
            <button
              onClick={() => scrollTo("before-anything-goes-wrong")}
              className="text-left py-2 border-b border-[#E7EAEF]/60 hover:text-[#087A58]"
            >
              BEFORE ANYTHING GOES WRONG
            </button>
            <button
              onClick={() => scrollTo("when-the-fault-appears")}
              className="text-left py-2 border-b border-[#E7EAEF]/60 hover:text-[#087A58]"
            >
              WHEN THE FAULT APPEARS
            </button>
            <button
              onClick={() => scrollTo("when-a-technician-visits")}
              className="text-left py-2 border-b border-[#E7EAEF]/60 hover:text-[#087A58]"
            >
              WHEN A TECHNICIAN VISITS
            </button>
            <button
              onClick={() => scrollTo("if-the-claim-is-refused")}
              className="text-left py-2 border-b border-[#E7EAEF]/60 hover:text-[#087A58]"
            >
              IF THE CLAIM IS REFUSED
            </button>
            <button
              onClick={() => scrollTo("key-numbers-for-the-page")}
              className="text-left py-2 border-b border-[#E7EAEF]/60 hover:text-[#087A58]"
            >
              KEY NUMBERS FOR THE PAGE
            </button>
            <button
              onClick={() => scrollTo("call-to-action")}
              className="mt-2 w-full flex items-center justify-center gap-2 bg-[#087A58] text-white text-[14px] font-semibold py-3 rounded-full hover:bg-[#066748]"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download the checklist</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
