# Claim Ready — Warranty Claim Checklist Landing Page

A calm, factual, editorial landing page for consumers filing warranty claims, built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**. 

Designed strictly in accordance with the **"Sorry Bravia: Emerald Editorial"** design system specifications (`DESIGN.md`) and containing verbatim content from `content.txt`.

---

## 📋 The Prompt

Below is the complete sequence of prompts used to generate and refine this landing page:

### Initial Creation Prompt
```text
Create a Next.js app in this folder and build one landing page from the text in content.txt. Follow DESIGN.md exactly for the colors, fonts, spacing and components. Use every section of content.txt and keep its wording. Make it work on phones too. When it is done, run it locally so I can preview it.
```

### Content Strictness & Refinement Prompts
```text
The page has text that is not in content.txt, like "Official checklist", the extra tip under every step, and lines such as "Brands cannot legally withhold the technical assessment report". Remove every sentence, label and tip that is not in content.txt, so the page only says what content.txt says. Keep the design and layout.
```

```text
Three fixes: 
1) KEY NUMBERS FOR THE PAGE, CALL TO ACTION and FOOTER NOTE are my notes, not page headings, so hide those three headings. 
2) Keep the header on one line: the logo, two links "The 15 steps" and "Key numbers", and the Download button. 
3) In "Who this is for", show the full sentence once and remove the four device cards. Keep everything else as it is.
```

### Mobile Responsiveness Fix
```text
On a phone the header is too wide and the Download button is cut off on the right. On small screens, hide the two header links so the logo and the Download button fit.
```

---

## 🛠️ How to Reuse and Adapt This Project

This codebase serves as a reusable template for **one-cause editorial websites**: consumer campaigns, open letters, petitions, case files, checklists, or long-form investigative explainers.

### 1. Quick Start / Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/elhankimi/youtube-sorry-bravia-case.git
   cd youtube-sorry-bravia-case
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

### 2. Adapting for Your Own Cause / Content

To adapt this site for a different product, warranty dispute, or campaign:

#### A. Updating the Copy
Edit `app/page.tsx` and `components/Ticker.tsx`:
- **The Hero & Headline Card**: Update the main cause title, lead paragraph, and *"The Idea in One Line"* statement in the scanline hero card.
- **The 15 Steps / Checklist Items**: Replace the 4 phases (`BEFORE ANYTHING GOES WRONG`, `WHEN THE FAULT APPEARS`, `WHEN A TECHNICIAN VISITS`, `IF THE CLAIM IS REFUSED`) with your campaign's action steps or timeline points.
- **Key Numbers**: Modify the 3-cell stat grid figures (e.g. `15`, `4`, `1`) and their captions.
- **Call to Action**: Update the download document text generator in `handleDownload` to export your custom checklist.

#### B. Changing the Color Palette & Design Tokens
All design system variables are centralized in `tailwind.config.ts`:
```ts
colors: {
  primary: {
    DEFAULT: "#087A58",   // Primary brand accent
    strong: "#066748",    // Hover state
    ink: "#065F43",       // Text on mint background
    soft: "#EEFAF5",      // Mint wash
    border: "#B9E6D6",    // Soft border
    bright: "#34D399",    // Accent used ON dark section
  },
  secondary: {
    DEFAULT: "#0D1117",   // Near-black ink
  },
  surface: {
    DEFAULT: "#FFFFFF",
    muted: "#F7F8FA",     // Mist alternate section background
    sunken: "#F2F4F7",
  },
}
```

#### C. Component Architecture
- `components/Ticker.tsx`: Infinitely scrolling mono ticker strip that automatically respects `prefers-reduced-motion`.
- `components/Header.tsx`: Sticky 72px header with 92% backdrop-blur. Responsive design automatically hides secondary links on mobile viewports (< 640px) to keep the logo and CTA button on one line.
- `components/Footer.tsx`: Editorial footer with disclaimer card.
- `app/page.tsx`: Single-page layout structured with alternating white, mist, and inverted dark ink (`#0D1117`) sections.

---

## 🎨 Design System Highlights (Emerald Editorial)

- **Light theme only** with one focused emerald accent (`#087A58`).
- **Typography**: Fluid-clamp **Plus Jakarta Sans** (ExtraBold 800 for headlines, 400 for body) paired with **JetBrains Mono** for uppercase data pills, ticket numbers, and tickers.
- **Inverted Dark Section**: Phase 4 (*"If The Claim Is Refused"*) uses an ink background (`#0D1117`) with bright emerald (`#34D399`) highlights to signify dispute escalation without breaking editorial calm.
- **Interactive Checkboxes**: Users can check off checklist items in real time, with full mobile touch-target compliance (min 44px).
