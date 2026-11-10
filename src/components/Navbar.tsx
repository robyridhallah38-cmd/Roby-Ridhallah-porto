import React, { useState } from 'react';
import { Volume2, VolumeX, Sun, Moon, Menu, X, Compass, Shield, Briefcase, Mail } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface NavbarProps {
  currentDepth: number;
  oxygen: number;
  isNightMode: boolean;
  setIsNightMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenGoogleSitesModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentDepth,
  oxygen,
  isNightMode,
  setIsNightMode,
  soundEnabled,
  setSoundEnabled,
  onOpenGoogleSitesModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const next = !soundEnabled;
    sound.enabled = next;
    setSoundEnabled(next);
    if (next) sound.playDing();
  };

  const toggleDayNight = () => {
    sound.playBlip();
    setIsNightMode((prev) => !prev);
  };

  const handleNavClick = () => {
    sound.playBubble();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#051329]/90 border-b-4 border-[#0b2b4f] transition-colors duration-300">
      {/* Top Game HUD bar */}
      <div className="bg-[#030d1d] border-b border-[#143d6c] px-3 py-1.5 text-xs font-pixel text-[#8ec8f8] flex items-center justify-between flex-wrap gap-2">
        {/* Diver Status */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#00e5ff]">
            <span className="inline-block w-2.5 h-2.5 bg-[#00e5ff] animate-pulse rounded-none"></span>
            DIVER: <strong className="text-white">ROBY RIZQY</strong>
            <span className="text-[#f59e0b] ml-1 bg-[#f59e0b]/20 px-1 py-0.5 border border-[#f59e0b]/40">
              LV.99
            </span>
          </span>

          <span className="hidden sm:inline-block text-[#275382]">|</span>

          {/* O2 Meter */}
          <div className="flex items-center gap-1 text-[#38bdf8]">
            <span>O2:</span>
            <div className="w-16 sm:w-24 h-2.5 bg-[#0b2447] border border-[#00e5ff]/50 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#00e5ff] to-[#38bdf8] transition-all duration-300"
                style={{ width: `${oxygen}%` }}
              />
            </div>
            <span className="text-[10px] text-white">{oxygen}%</span>
          </div>

          <span className="hidden md:inline-block text-[#275382]">|</span>

          {/* Depth meter */}
          <div className="hidden md:flex items-center gap-1 text-[#f59e0b]">
            <span>DEPTH:</span>
            <span className="text-white font-bold">{currentDepth}m</span>
          </div>
        </div>

        {/* Currency & Toggles */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[#f59e0b] bg-[#1a2310] px-2 py-0.5 border border-[#f59e0b]/50">
            <span>🪙</span>
            <span className="text-white font-mono">99,990G</span>
          </div>

          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? 'Matikan Suara Efek' : 'Nyalakan Suara Efek'}
            className="p-1 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0e2c52] border border-[#143d6c] transition-colors"
            title={soundEnabled ? 'Sound FX: ON' : 'Sound FX: OFF'}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} className="text-red-400" />}
          </button>

          {/* Day / Night Theme */}
          <button
            onClick={toggleDayNight}
            aria-label={isNightMode ? 'Ubah ke Mode Siang Blue Hole' : 'Ubah ke Mode Malam Bancho Sushi'}
            className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] bg-[#0c274c] hover:bg-[#13396c] border border-[#00e5ff]/40 text-[#00e5ff] transition-colors"
          >
            {isNightMode ? (
              <>
                <Moon size={12} className="text-[#f59e0b]" />
                <span className="hidden lg:inline text-[#f59e0b]">BANCHO NIGHT</span>
              </>
            ) : (
              <>
                <Sun size={12} className="text-[#38bdf8]" />
                <span className="hidden lg:inline text-[#38bdf8]">BLUE HOLE DAY</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={handleNavClick}
          className="flex items-center gap-2 group"
          aria-label="Kembali ke Beranda Roby Rizqy"
        >
          <div className="w-9 h-9 bg-gradient-to-br from-[#00bcd4] to-[#006064] border-2 border-[#00e5ff] flex items-center justify-center font-pixel text-lg text-white shadow-md group-hover:scale-105 transition-transform">
            🤿
          </div>
          <div className="flex flex-col">
            <span className="font-pixel text-xs sm:text-sm text-white tracking-wider flex items-center gap-1">
              ROBY RIZQY
              <span className="text-[10px] text-[#00e5ff] font-vt hidden sm:inline">[PORTFOLIO]</span>
            </span>
            <span className="font-vt text-sm sm:text-base text-[#38bdf8] leading-none">
              3D Artist & Graphic Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 font-pixel text-[11px]" aria-label="Menu Utama">
          <a
            href="#hero"
            onClick={handleNavClick}
            className="px-3 py-1.5 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0c2a52] transition-colors border-b-2 border-transparent hover:border-[#00e5ff]"
          >
            BERANDA
          </a>
          <a
            href="#skills"
            onClick={handleNavClick}
            className="px-3 py-1.5 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0c2a52] transition-colors border-b-2 border-transparent hover:border-[#00e5ff]"
          >
            GEAR & STATUS
          </a>
          <a
            href="#portfolio"
            onClick={handleNavClick}
            className="px-3 py-1.5 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0c2a52] transition-colors border-b-2 border-transparent hover:border-[#00e5ff]"
          >
            PORTOFOLIO
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="ml-2 px-3.5 py-1.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#041226] font-bold border-2 border-black pixel-btn transition-transform"
          >
            HUBUNGI
          </a>
          <button
            onClick={() => {
              sound.playDing();
              onOpenGoogleSitesModal();
            }}
            className="ml-2 px-3 py-1.5 bg-[#00e5ff] hover:bg-[#38bdf8] text-[#031525] font-bold border-2 border-black pixel-btn transition-transform flex items-center gap-1.5"
            title="Dapatkan Kode Siap Tempel ke Google Sites"
          >
            <span>📋 KODE GOOGLE SITES</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => {
            sound.playBlip();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          className="md:hidden p-2 text-white bg-[#0e2a4f] border border-[#00e5ff]/50"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#041328] border-b-4 border-[#00e5ff] px-4 py-4 space-y-3 font-pixel text-xs animate-in slide-in-from-top">
          <a
            href="#hero"
            onClick={handleNavClick}
            className="flex items-center gap-3 px-3 py-2 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0c2950] border border-[#143f6f]"
          >
            <Compass size={16} className="text-[#00e5ff]" />
            BERANDA DIVER
          </a>
          <a
            href="#skills"
            onClick={handleNavClick}
            className="flex items-center gap-3 px-3 py-2 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0c2950] border border-[#143f6f]"
          >
            <Shield size={16} className="text-[#f59e0b]" />
            GEAR & SKILL UPGRADE
          </a>
          <a
            href="#portfolio"
            onClick={handleNavClick}
            className="flex items-center gap-3 px-3 py-2 text-[#8ec8f8] hover:text-[#00e5ff] hover:bg-[#0c2950] border border-[#143f6f]"
          >
            <Briefcase size={16} className="text-[#38bdf8]" />
            3 TABS PORTOFOLIO
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="flex items-center gap-3 px-3 py-2 text-[#041226] bg-[#f59e0b] font-bold border-2 border-black"
          >
            <Mail size={16} />
            BANCHO'S NIGHT BAR (KONTAK)
          </a>
          <button
            onClick={() => {
              sound.playDing();
              setMobileMenuOpen(false);
              onOpenGoogleSitesModal();
            }}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-[#031525] bg-[#00e5ff] font-bold border-2 border-black shadow"
          >
            <span>📋 SALIN KODE GOOGLE SITES</span>
          </button>
        </div>
      )}
    </header>
  );
};
