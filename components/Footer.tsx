import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 text-[#5B6472]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-10 border-b border-[#E7EAEF]">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#087A58] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-[19px] tracking-[-0.035em] text-[#0D1117]">
              CLAIM READY
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-[14px] font-medium text-[#5B6472]">
            <a href="#the-15-steps" className="hover:text-[#087A58] transition-colors">
              The 15 steps
            </a>
            <a href="#key-numbers" className="hover:text-[#087A58] transition-colors">
              Key numbers
            </a>
          </div>
        </div>

        {/* Text without the 'FOOTER NOTE' heading */}
        <div className="pt-8">
          <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-6 sm:p-8">
            <p className="text-[15px] sm:text-[16px] leading-[1.72] text-[#363C47]">
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
