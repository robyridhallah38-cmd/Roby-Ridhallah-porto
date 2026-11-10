import React from 'react';
import { ArrowDown, Sparkles, ExternalLink, ShieldCheck, Box, Flame } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
  onExploreGear: () => void;
  onOpenFeaturedSculpt: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePortfolio,
  onExploreGear,
  onOpenFeaturedSculpt,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background glow and circular sonar ripples */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00bcd4]/15 via-[#0284c7]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Portrait and Diver Equipment Frame */}
        <div className="lg:col-span-5 flex flex-col items-center">
          {/* Dave the Diver Avatar Frame with Pixel Border & Tech HUD */}
          <div className="relative group">
            {/* Outer golden game border */}
            <div className="relative p-2.5 bg-[#0a1e36] border-4 border-[#00e5ff] shadow-[0_0_25px_rgba(0,229,255,0.4)]">
              {/* Corner pixel studs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#f59e0b] border-2 border-black" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#f59e0b] border-2 border-black" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#f59e0b] border-2 border-black" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#f59e0b] border-2 border-black" />

              {/* Profile Image Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden bg-gradient-to-b from-[#103159] via-[#0b2447] to-[#041226] border-2 border-[#1e4a7a] flex items-end justify-center">
                {/* Sonar grid background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Actual User Profile Photo */}
                <img
                  src={PROFILE_DATA.avatar}
                  alt={PROFILE_DATA.name}
                  className="relative z-10 w-full h-full object-cover object-top filter contrast-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041226] via-transparent to-transparent z-15 pointer-events-none" />

                {/* In-game rank badge */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2 py-1 bg-[#041328]/90 border border-[#00e5ff] text-[10px] font-pixel text-[#00e5ff] backdrop-blur-sm">
                  <span className="w-2 h-2 bg-[#00e5ff] rounded-none animate-ping" />
                  RANK: S-CLASS
                </div>

                {/* Level badge */}
                <div className="absolute bottom-3 right-3 z-20 bg-[#f59e0b] text-[#041226] font-pixel text-xs px-2 py-1 border-2 border-black shadow-[2px_2px_0_#000]">
                  LV.99
                </div>
              </div>
            </div>

            {/* Sub-label under portrait */}
            <div className="mt-3 text-center">
              <span className="font-pixel text-[10px] text-[#38bdf8] tracking-widest uppercase">
                ★ CERTIFIED DEEP DIVER & ARTIST ★
              </span>
            </div>
          </div>

          {/* Quick Diver Inventory Box */}
          <div className="w-full max-w-sm mt-4 p-3 bg-[#071830] border-2 border-[#1e4470] shadow-md">
            <div className="text-[10px] font-pixel text-[#00e5ff] mb-2 flex items-center justify-between">
              <span>iDIVER GEAR STATUS</span>
              <span className="text-[#f59e0b]">ONLINE</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 p-1.5 bg-[#030d1d] border border-[#143257]">
                <ShieldCheck size={14} className="text-[#38bdf8]" />
                <div className="text-[11px] leading-tight">
                  <div className="text-[#94a3b8] text-[9px]">SUIT LEVEL</div>
                  <div className="text-white font-bold">Abyssal MK.V</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 bg-[#030d1d] border border-[#143257]">
                <Box size={14} className="text-[#f59e0b]" />
                <div className="text-[11px] leading-tight">
                  <div className="text-[#94a3b8] text-[9px]">CARGO CAP</div>
                  <div className="text-white font-bold">120 KG (Max)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Titles, Bio, and Dave the Diver Style CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-5">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b2b4f] border-2 border-[#00e5ff] shadow-[2px_2px_0_#000]">
            <Sparkles size={14} className="text-[#f59e0b] animate-spin" />
            <span className="font-pixel text-xs sm:text-sm text-[#00e5ff] uppercase tracking-wide">
              {PROFILE_DATA.greeting}
            </span>
          </div>

          {/* Main Title / Name */}
          <div>
            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
              ROBY RIZQY <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-[#38bdf8] to-[#f59e0b]">
                RIDHALLAH
              </span>
            </h1>

            {/* Role Subheading */}
            <div className="mt-3 flex items-center flex-wrap gap-2 font-vt text-xl sm:text-2xl text-[#8ec8f8]">
              <span className="text-[#00e5ff]">3D Artist</span>
              <span className="text-[#f59e0b]">•</span>
              <span className="text-[#f59e0b]">Graphic Designer</span>
              <span className="text-[#f59e0b]">•</span>
              <span className="text-[#38bdf8]">Creative Explorer</span>
            </div>
          </div>

          {/* Creative Bio Paragraph */}
          <div className="bg-[#071a33]/80 border-l-4 border-[#00e5ff] p-4 text-sm sm:text-base text-[#cbd5e1] font-sans-modern leading-relaxed shadow-lg">
            <p>
              Halo! Saya <strong>{PROFILE_DATA.name}</strong>, seorang penjelajah visual yang gemar
              menyelami kedalaman imajinasi kreatif. Dari memahat karakter 3D di <strong>Blender</strong>,
              meracik desain grafis berbobot tinggi di <strong>Adobe Illustrator</strong>, hingga menangkap
              cerita konseptual lewat lensa <strong>fotografi</strong>.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-[#94a3b8]">
              Layaknya menjelajahi misteri <em>The Giant Blue Hole</em> di <em>Dave the Diver</em>, saya selalu
              siap menangkap tantangan visual tersulit dan mengubahnya menjadi karya seni yang menggugah selera!
            </p>
          </div>

          {/* Quick Highlight of the Wino Sculpt */}
          <div className="w-full p-3 bg-gradient-to-r from-[#171126] via-[#0c1f38] to-[#08182b] border border-[#a855f7]/60 shadow-md flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-[#c084fc] overflow-hidden bg-black shrink-0">
                <img
                  src="/assets/aistudio/Cuplikan_layar_2026-08-19_185710_562f1186.png"
                  alt="Wino 3D Sculpt thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-[10px] font-pixel text-[#c084fc] flex items-center gap-1">
                  <Flame size={12} className="text-[#f59e0b]" /> FEATURED 3D SCULPT
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  Wino - Character 3D Sculpt in Blender 5.1.1
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playDing();
                onOpenFeaturedSculpt();
              }}
              className="px-3 py-1.5 bg-[#a855f7] hover:bg-[#9333ea] text-white font-pixel text-[10px] border border-white pixel-btn flex items-center gap-1.5"
            >
              <span>INSPECT WORKSPACE</span>
              <ExternalLink size={12} />
            </button>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex items-center flex-wrap gap-3 font-pixel text-xs">
            <button
              onClick={() => {
                sound.playBubble();
                onExplorePortfolio();
              }}
              className="px-5 py-3 bg-[#00e5ff] hover:bg-[#00b4d8] text-[#031525] font-bold border-2 border-black pixel-btn flex items-center gap-2"
            >
              <span>DIVE TO PORTOFOLIO</span>
              <ArrowDown size={14} className="animate-bounce" />
            </button>

            <button
              onClick={() => {
                sound.playBlip();
                onExploreGear();
              }}
              className="px-4 py-3 bg-[#0a2544] hover:bg-[#123866] text-[#00e5ff] border-2 border-[#00e5ff] pixel-btn flex items-center gap-2"
            >
              <span>BUKA GEAR & UPGRADE</span>
            </button>

            <a
              href="#contact"
              onClick={() => sound.playBlip()}
              className="px-4 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-[#051329] font-bold border-2 border-black pixel-btn"
            >
              BANCHO'S BAR (KONTAK)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
