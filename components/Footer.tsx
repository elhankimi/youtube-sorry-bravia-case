import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 text-[#5B6472]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#E7EAEF]">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#087A58] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-[19px] tracking-[-0.035em] text-[#0D1117]">
              CLAIM READY
            </span>
          </div>

          {/* Section Links strictly from content.txt */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[13px] font-mono uppercase tracking-[0.16em] text-[#5B6472]">
            <a href="#before-anything-goes-wrong" className="hover:text-[#087A58] transition-colors">
              BEFORE ANYTHING GOES WRONG
            </a>
            <a href="#when-the-fault-appears" className="hover:text-[#087A58] transition-colors">
              WHEN THE FAULT APPEARS
            </a>
            <a href="#when-a-technician-visits" className="hover:text-[#087A58] transition-colors">
              WHEN A TECHNICIAN VISITS
            </a>
            <a href="#if-the-claim-is-refused" className="hover:text-[#087A58] transition-colors">
              IF THE CLAIM IS REFUSED
            </a>
            <a href="#key-numbers-for-the-page" className="hover:text-[#087A58] transition-colors">
              KEY NUMBERS FOR THE PAGE
            </a>
            <a href="#call-to-action" className="hover:text-[#087A58] transition-colors">
              CALL TO ACTION
            </a>
          </div>
        </div>

        {/* FOOTER NOTE - Strictly from content.txt */}
        <div className="pt-8">
          <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8">
            <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] tracking-[0.16em] uppercase px-[14px] py-[6px] rounded-full inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>FOOTER NOTE</span>
            </div>
            <p className="text-[15px] sm:text-[16px] leading-[1.72] text-[#363C47]">
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
