import React, { useState } from 'react';
import { GEAR_SKILLS, GearSkill } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { Sparkles, CheckCircle, Zap, Shield, Cpu, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeGearId, setActiveGearId] = useState<string>(GEAR_SKILLS[0].id);
  const [boostedMessage, setBoostedMessage] = useState<string | null>(null);

  const handleSelectGear = (gear: GearSkill) => {
    sound.playBlip();
    setActiveGearId(gear.id);
  };

  const handleTestGearBoost = (gear: GearSkill) => {
    sound.playDing();
    setBoostedMessage(`⚡ BOOST DIAKTIFKAN: ${gear.name} memberikan +50% Creative Flow & Precision!`);
    setTimeout(() => {
      setBoostedMessage(null);
    }, 3500);
  };

  const activeGear = GEAR_SKILLS.find((g) => g.id === activeGearId) || GEAR_SKILLS[0];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 relative bg-[#040e1e] border-t-4 border-[#0b2b4f]">
      <div className="max-w-6xl mx-auto">
        {/* Header styled like Duff's Weapon & Gear Shop */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1429] border border-[#a855f7] text-[#c084fc] font-pixel text-xs mb-3 shadow-md">
            <Cpu size={14} className="text-[#a855f7]" />
            <span>iDIVER GEAR & STATUS UPGRADE</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-wide">
            KEAHLIAN & GEAR SPESIFIKASI
          </h2>
          <p className="mt-2 text-[#8ec8f8] font-sans-modern text-sm max-w-xl mx-auto">
            Setiap kemampuan kreatif diasah layaknya perlengkapan ekspedisi laut dalam.
            Klik gear untuk memeriksa status upgrade, atribut software, dan perk spesialisasi.
          </p>
        </div>

        {/* Boost Banner Notification */}
        {boostedMessage && (
          <div className="mb-6 p-3 bg-[#0d2e26] border-2 border-[#10b981] font-pixel text-xs text-[#34d399] flex items-center justify-between animate-in fade-in shadow-lg">
            <span>{boostedMessage}</span>
            <Sparkles size={16} className="text-[#f59e0b] animate-spin" />
          </div>
        )}

        {/* 3 Gear Selection Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {GEAR_SKILLS.map((gear) => {
            const isSelected = gear.id === activeGearId;
            return (
              <button
                key={gear.id}
                onClick={() => handleSelectGear(gear)}
                className={`p-4 text-left transition-all duration-200 border-3 relative pixel-btn ${
                  isSelected
                    ? 'bg-[#0a2342] border-[#00e5ff] shadow-[0_0_15px_rgba(0,229,255,0.35)]'
                    : 'bg-[#061426] border-[#163659] hover:bg-[#081c33] text-[#94a3b8]'
                }`}
              >
                {/* Level Tag */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-pixel text-[10px] text-[#f59e0b] bg-[#2d1b06] px-2 py-0.5 border border-[#f59e0b]/40">
                    LV.{gear.level} / {gear.maxLevel}
                  </span>
                  <span className="font-pixel text-[9px] text-[#00e5ff]">
                    {gear.level === gear.maxLevel ? 'MAXED OUT' : 'READY TO EXPAND'}
                  </span>
                </div>

                {/* Software / Category title */}
                <div className="font-pixel text-xs sm:text-sm text-white mb-1">
                  {gear.name}
                </div>
                <div className="font-vt text-lg text-[#38bdf8] mb-3">
                  {gear.software}
                </div>

                {/* Gear Class Badge */}
                <div className="text-[11px] font-mono text-[#cbd5e1] flex items-center gap-1.5 bg-[#030a14] p-1.5 border border-[#16304d]">
                  <Shield size={13} className="text-[#f59e0b] shrink-0" />
                  <span className="truncate">{gear.gearClass}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Gear Upgrade Console */}
        <div className="bg-[#081a33] border-4 border-[#00e5ff] p-5 sm:p-7 shadow-[4px_4px_0_#000] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Panel: Attributes & Software */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border-b border-[#1b3d66] pb-3">
                <div className="text-[10px] font-pixel text-[#00e5ff] uppercase tracking-wider mb-1">
                  ACTIVE GEAR INSPECTION
                </div>
                <h3 className="font-pixel text-lg sm:text-xl text-white">
                  {activeGear.name}
                </h3>
                <p className="font-sans-modern text-xs text-[#93c5fd] mt-2 leading-relaxed">
                  {activeGear.summary}
                </p>
              </div>

              {/* Software Suite Badge */}
              <div className="p-3 bg-[#030d1d] border border-[#173860]">
                <div className="text-[9px] font-pixel text-[#f59e0b] mb-1">PRIMARY TOOLKIT</div>
                <div className="font-mono text-sm text-white font-bold flex items-center gap-2">
                  <Layers size={15} className="text-[#00e5ff]" />
                  {activeGear.software}
                </div>
              </div>

              {/* Perks List */}
              <div>
                <div className="text-[10px] font-pixel text-[#38bdf8] mb-2 uppercase">
                  EQUIPPED PERKS & SPECIALTIES
                </div>
                <div className="space-y-1.5">
                  {activeGear.perks.map((perk, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs font-sans-modern text-[#cbd5e1] bg-[#051428] p-2 border border-[#112d50]"
                    >
                      <CheckCircle size={14} className="text-[#10b981] shrink-0 mt-0.5" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Upgrade / Boost Button */}
              <button
                onClick={() => handleTestGearBoost(activeGear)}
                className="w-full py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-[#051329] font-pixel text-xs font-bold border-2 border-black pixel-btn flex items-center justify-center gap-2 transition-transform"
              >
                <Zap size={15} />
                <span>UJI EFEK CREATIVE BOOST</span>
              </button>
            </div>

            {/* Right Panel: Stat Meters */}
            <div className="lg:col-span-7 bg-[#041224] p-5 border-2 border-[#16365c] space-y-4">
              <div className="flex items-center justify-between border-b border-[#143257] pb-2">
                <span className="font-pixel text-xs text-[#00e5ff]">SKILL ATTRIBUTES MATRIX</span>
                <span className="font-pixel text-[10px] text-[#f59e0b]">PROFICIENCY: S-RANK</span>
              </div>

              <div className="space-y-4">
                {activeGear.stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white font-semibold">{stat.name}</span>
                      <span className="text-[#00e5ff] font-bold">{stat.value}%</span>
                    </div>
                    {/* Stat Gauge Bar */}
                    <div className="h-4 bg-[#0a1e38] border border-[#1d4574] p-0.5 relative">
                      <div
                        className="h-full bg-gradient-to-r from-[#00bcd4] via-[#0284c7] to-[#00e5ff] transition-all duration-500 relative"
                        style={{ width: `${stat.value}%` }}
                      >
                        {/* Shimmer line */}
                        <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/70" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tactical note */}
              <div className="mt-4 p-3 bg-[#0a1d36] border-l-3 border-[#f59e0b] text-[11px] font-sans-modern text-[#94a3b8]">
                <strong className="text-white">Catatan Ekspedisi:</strong> Setiap keterampilan dapat
                dikustomisasi sesuai kebutuhan proyek kreatif Anda, baik untuk komisi karakter 3D,
                desain identitas merek yang komprehensif, maupun sesi fotografi bercerita.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
