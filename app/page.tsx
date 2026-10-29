"use client";

import { useState } from "react";
import Ticker from "@/components/Ticker";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Circle, Download, Share2 } from "lucide-react";

export default function Home() {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleDownload = () => {
    if (typeof window !== "undefined") {
      const content = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "claim-ready.txt";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-white text-[#363C47] flex flex-col antialiased">
      {/* Ticker strip */}
      <Ticker />

      {/* Header (single line with Logo, The 15 steps, Key numbers, and Download button) */}
      <Header />

      <main className="flex-1">
        {/* =========================================================================
            HERO SECTION
            - 2 columns on desktop: Copy left (~55%), Headline Card right (~45%)
            - Mobile: Visual stacks below headline
            - "Who this is for": shows full sentence once, without device cards
            ========================================================================= */}
        <section className="bg-white py-16 sm:py-20 md:py-28 lg:py-32 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column (55%) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Pill label */}
                <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] tracking-[0.16em] uppercase px-[14px] py-[6px] rounded-full inline-flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  <span>CLAIM READY</span>
                </div>

                {/* Display Headline */}
                <h1 className="font-extrabold text-[44px] sm:text-[54px] lg:text-[60px] leading-[1.06] tracking-[-0.035em] text-[#0D1117] mb-5">
                  CLAIM READY
                </h1>

                {/* Subtitle */}
                <p className="text-[20px] sm:text-[23px] font-semibold text-[#0D1117] leading-[1.3] mb-8">
                  A free checklist for anyone about to file a warranty claim.
                </p>

                {/* WHO THIS IS FOR: Full sentence shown once without extra device cards */}
                <div className="border-l-2 border-[#B9E6D6] pl-5 py-1 mb-8 max-w-[62ch]">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-[#087A58] block mb-2">
                    WHO THIS IS FOR
                  </span>
                  <p className="text-[17.5px] sm:text-[19px] leading-[1.72] text-[#5B6472]">
                    Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
                  </p>
                </div>

                {/* Action button */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2.5 bg-[#087A58] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-raised hover:bg-[#066748] hover:-translate-y-[2px] transition-all focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download the checklist and keep it with your invoices.</span>
                  </button>
                </div>
              </div>

              {/* Right Column (45%): HEADLINE CARD */}
              <div className="lg:col-span-5 w-full">
                <div className="relative bg-[#0D1117] text-white rounded-[26px] p-8 sm:p-10 lg:p-12 shadow-raised overflow-hidden scanline-pattern border border-[#0D1117]">
                  <div className="mb-6 border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#34D399] font-semibold">
                      THE IDEA IN ONE LINE
                    </span>
                  </div>

                  <blockquote className="font-mono text-[20px] sm:text-[24px] leading-[1.4] text-white font-medium">
                    A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: BEFORE ANYTHING GOES WRONG (Steps 1 to 4)
            - White background
            - Anchor id "the-15-steps"
            ========================================================================= */}
        <section id="the-15-steps" className="bg-white py-20 sm:py-24 md:py-32 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Section Header */}
            <div className="flex flex-col items-start mb-12 md:mb-16">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] tracking-[0.16em] uppercase px-[14px] py-[6px] rounded-full inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span>BEFORE ANYTHING GOES WRONG</span>
              </div>
              <h2 className="font-extrabold text-[32px] sm:text-[40px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-[#0D1117]">
                BEFORE ANYTHING GOES WRONG
              </h2>
            </div>

            {/* Steps 1 to 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Step 1 */}
              <div
                onClick={() => toggleCheck(1)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[1] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      1. Keep the invoice.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 1"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[1] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                onClick={() => toggleCheck(2)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[2] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      2. Register the product.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 2"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[2] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Many brands ask you to register on their website or app; some add extra warranty when you do.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                onClick={() => toggleCheck(3)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[3] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      3. Read the warranty card once.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 3"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[3] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Note how long it lasts, what it covers, and what it excludes.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div
                onClick={() => toggleCheck(4)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[4] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      4. Record the condition.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 4"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[4] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Take a few dated photos of the product once it is installed or unboxed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHEN THE FAULT APPEARS (Steps 5 to 7)
            - Alternating background: Mist (#F7F8FA)
            ========================================================================= */}
        <section id="when-the-fault-appears" className="bg-[#F7F8FA] py-20 sm:py-24 md:py-32 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Section Header */}
            <div className="flex flex-col items-start mb-12 md:mb-16">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] tracking-[0.16em] uppercase px-[14px] py-[6px] rounded-full inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span>WHEN THE FAULT APPEARS</span>
              </div>
              <h2 className="font-extrabold text-[32px] sm:text-[40px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-[#0D1117]">
                WHEN THE FAULT APPEARS
              </h2>
            </div>

            {/* Steps 5 to 7 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Step 5 */}
              <div
                onClick={() => toggleCheck(5)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[5] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      5. Record the fault.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 5"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[5] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div
                onClick={() => toggleCheck(6)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[6] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      6. Raise the complaint in writing.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 6"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[6] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Use email, the brand's website or its app, not only a phone call, so there is a record.
                  </p>
                </div>
              </div>

              {/* Step 7 */}
              <div
                onClick={() => toggleCheck(7)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[7] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      7. Note every reference number.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 7"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[7] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Write down the complaint or ticket number, the date and the name of anyone you speak to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHEN A TECHNICIAN VISITS (Steps 8 to 10)
            - White background
            ========================================================================= */}
        <section id="when-a-technician-visits" className="bg-white py-20 sm:py-24 md:py-32 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Section Header */}
            <div className="flex flex-col items-start mb-12 md:mb-16">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] tracking-[0.16em] uppercase px-[14px] py-[6px] rounded-full inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span>WHEN A TECHNICIAN VISITS</span>
              </div>
              <h2 className="font-extrabold text-[32px] sm:text-[40px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-[#0D1117]">
                WHEN A TECHNICIAN VISITS
              </h2>
            </div>

            {/* Steps 8 to 10 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Step 8 */}
              <div
                onClick={() => toggleCheck(8)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[8] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      8. Ask for the job sheet.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 8"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[8] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Ask the technician for a copy of the visit report or job sheet before they leave.
                  </p>
                </div>
              </div>

              {/* Step 9 */}
              <div
                onClick={() => toggleCheck(9)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[9] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      9. Ask what was tested.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 9"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[9] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Ask which test or instrument was used to reach the diagnosis.
                  </p>
                </div>
              </div>

              {/* Step 10 */}
              <div
                onClick={() => toggleCheck(10)}
                className={`cursor-pointer bg-white border ${
                  checkedItems[10] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                } rounded-[18px] p-7 sm:p-8 shadow-card hover:shadow-raised hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-[#0D1117] tracking-tight">
                      10. Take your own photos.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 10"
                      className="text-[#087A58] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[10] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#087A58]" />
                      ) : (
                        <Circle className="w-6 h-6 text-[#D6DBE3] hover:text-[#087A58]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-[#363C47]">
                    Photograph the product and anything the technician points to, during the visit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: IF THE CLAIM IS REFUSED (Steps 11 to 15)
            - Dark section (#0D1117)
            - Bright emerald (#34D399) accent
            ========================================================================= */}
        <section id="if-the-claim-is-refused" className="bg-[#0D1117] text-white py-20 sm:py-24 md:py-32 border-b border-[#0D1117]">
          <div className="max-w-[1180px] mx-auto px-5 md:px-10">
            {/* Section Header */}
            <div className="flex flex-col items-start mb-12 md:mb-16">
              <div className="bg-white/10 border border-white/20 text-[#34D399] font-mono text-[10px] tracking-[0.16em] uppercase px-[14px] py-[6px] rounded-full inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span>IF THE CLAIM IS REFUSED</span>
              </div>
              <h2 className="font-extrabold text-[32px] sm:text-[40px] md:text-[47px] leading-[1.06] tracking-[-0.035em] text-white">
                IF THE CLAIM IS REFUSED
              </h2>
            </div>

            {/* Steps 11 to 15 Cards on Dark */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Step 11 */}
              <div
                onClick={() => toggleCheck(11)}
                className={`cursor-pointer bg-white/10 border ${
                  checkedItems[11] ? "border-[#34D399] bg-[#34D399]/15" : "border-white/15"
                } rounded-[18px] p-7 sm:p-8 backdrop-blur-sm hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-white tracking-tight">
                      11. Ask for the reason in writing.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 11"
                      className="text-[#34D399] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[11] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#34D399]" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/40 hover:text-[#34D399]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-white/80">
                    Request a written explanation that names the exact cause and the evidence for it.
                  </p>
                </div>
              </div>

              {/* Step 12 */}
              <div
                onClick={() => toggleCheck(12)}
                className={`cursor-pointer bg-white/10 border ${
                  checkedItems[12] ? "border-[#34D399] bg-[#34D399]/15" : "border-white/15"
                } rounded-[18px] p-7 sm:p-8 backdrop-blur-sm hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-white tracking-tight">
                      12. Ask for the technical report.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 12"
                      className="text-[#34D399] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[12] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#34D399]" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/40 hover:text-[#34D399]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-white/80">
                    If the refusal rests on an inspection, ask for that inspection report.
                  </p>
                </div>
              </div>

              {/* Step 13 */}
              <div
                onClick={() => toggleCheck(13)}
                className={`cursor-pointer bg-white/10 border ${
                  checkedItems[13] ? "border-[#34D399] bg-[#34D399]/15" : "border-white/15"
                } rounded-[18px] p-7 sm:p-8 backdrop-blur-sm hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-white tracking-tight">
                      13. Escalate inside the company.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 13"
                      className="text-[#34D399] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[13] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#34D399]" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/40 hover:text-[#34D399]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-white/80">
                    Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                  </p>
                </div>
              </div>

              {/* Step 14 */}
              <div
                onClick={() => toggleCheck(14)}
                className={`cursor-pointer bg-white/10 border ${
                  checkedItems[14] ? "border-[#34D399] bg-[#34D399]/15" : "border-white/15"
                } rounded-[18px] p-7 sm:p-8 backdrop-blur-sm hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-white tracking-tight">
                      14. Keep it factual.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 14"
                      className="text-[#34D399] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[14] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#34D399]" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/40 hover:text-[#34D399]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-white/80">
                    Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                  </p>
                </div>
              </div>

              {/* Step 15 */}
              <div
                onClick={() => toggleCheck(15)}
                className={`cursor-pointer bg-white/10 border ${
                  checkedItems[15] ? "border-[#34D399] bg-[#34D399]/15" : "border-white/15"
                } rounded-[18px] p-7 sm:p-8 backdrop-blur-sm hover:-translate-y-[2px] transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-extrabold text-[22px] sm:text-[24px] leading-[1.2] text-white tracking-tight">
                      15. Know your consumer helpline.
                    </h3>
                    <button
                      type="button"
                      aria-label="Toggle step 15"
                      className="text-[#34D399] focus:outline-none ml-3 flex-shrink-0"
                    >
                      {checkedItems[15] ? (
                        <CheckCircle2 className="w-6 h-6 text-[#34D399]" />
                      ) : (
                        <Circle className="w-6 h-6 text-white/40 hover:text-[#34D399]" />
                      )}
                    </button>
                  </div>
                  <p className="text-[17px] leading-[1.72] text-white/80">
                    Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            KEY NUMBERS SECTION (Heading "KEY NUMBERS FOR THE PAGE" hidden per fix 1)
            - Alternating background: Mist (#F7F8FA)
            - Stat Grid: 3 cells joined by 1px hairline gaps inside one rounded card
            ========================================================================= */}
        <section id="key-numbers" className="bg-[#F7F8FA] py-16 sm:py-20 md:py-24 border-b border-[#E7EAEF]">
          <div className="max-w-[880px] mx-auto px-5 md:px-10">
            {/* Stat Grid Component directly without the note heading */}
            <div className="bg-[#E7EAEF] border border-[#E7EAEF] rounded-[18px] overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-card">
              {/* Cell 1: 15 */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between">
                <div className="font-extrabold text-[52px] leading-none tracking-[-0.035em] text-[#0D1117] tabular-nums mb-3">
                  15
                </div>
                <p className="text-[15px] font-normal leading-[1.6] text-[#5B6472]">
                  steps in the checklist.
                </p>
              </div>

              {/* Cell 2: 4 */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between">
                <div className="font-extrabold text-[52px] leading-none tracking-[-0.035em] text-[#0D1117] tabular-nums mb-3">
                  4
                </div>
                <p className="text-[15px] font-normal leading-[1.6] text-[#5B6472]">
                  records to keep before anything goes wrong.
                </p>
              </div>

              {/* Cell 3: 1 (Hot Cell in emerald) */}
              <div className="bg-white p-7 sm:p-8 flex flex-col justify-between">
                <div className="font-extrabold text-[52px] leading-none tracking-[-0.035em] text-[#087A58] tabular-nums mb-3">
                  1
                </div>
                <p className="text-[15px] font-medium leading-[1.6] text-[#065F43]">
                  rule: if it is not in writing, it did not happen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION: CALL TO ACTION (Heading "CALL TO ACTION" hidden per fix 1)
            - White background
            - Action card with the two buttons directly
            ========================================================================= */}
        <section id="download-checklist" className="bg-white py-16 sm:py-20 md:py-24 border-b border-[#E7EAEF]">
          <div className="max-w-[880px] mx-auto px-5 md:px-10">
            {/* Action Card with exact text */}
            <div className="bg-[#F7F8FA] border border-[#E7EAEF] rounded-[18px] p-8 sm:p-10 shadow-card">
              <div className="flex flex-col sm:flex-row gap-5">
                {/* Button 1: Download */}
                <button
                  onClick={handleDownload}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#087A58] text-white text-[15px] font-semibold px-7 py-4 rounded-full shadow-raised hover:bg-[#066748] hover:-translate-y-[2px] transition-all focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 text-center"
                >
                  <Download className="w-4 h-4 flex-shrink-0" />
                  <span>Download the checklist and keep it with your invoices.</span>
                </button>

                {/* Button 2: Share */}
                <button
                  onClick={handleShare}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-white text-[#0D1117] border border-[#E7EAEF] text-[15px] font-semibold px-7 py-4 rounded-full hover:bg-white hover:border-[#087A58] hover:-translate-y-[2px] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#087A58] text-center"
                >
                  <Share2 className="w-4 h-4 text-[#087A58] flex-shrink-0" />
                  <span>Share it with a friend who just bought something expensive.</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (without "FOOTER NOTE" heading per fix 1) */}
      <Footer />
    </div>
  );
}
