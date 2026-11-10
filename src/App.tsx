/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Portofolio Dave the Diver - Roby Rizqy Ridhallah
 * 3D Artist, Graphic Designer, & Creative Explorer
 * 
 * Komentar dalam bahasa Indonesia disertakan pada bagian-bagian penting
 * untuk memudahkan penyesuaian gambar dan teks di masa mendatang.
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { ItemModal } from './components/ItemModal';
import { GoogleSitesModal } from './components/GoogleSitesModal';
import { BubblesBackground } from './components/BubblesBackground';
import { DepthIndicatorHUD } from './components/DepthIndicatorHUD';
import { PORTFOLIO_ITEMS } from './data/portfolioData';
import { PortfolioItem, calculateDepth, DepthInfo } from './utils/portfolioLogic';

export default function App() {
  // State untuk melacak kedalaman laut berdasarkan scroll
  const [depthInfo, setDepthInfo] = useState<DepthInfo>({
    depthMeters: 0,
    zoneName: 'Shallow Waters (Surface Reef)',
    zoneColor: '#00e5ff',
    oxygenPercent: 100,
    warning: false,
  });

  // Mode Siang (Blue Hole Day) vs Mode Malam (Bancho Sushi Night)
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  // Status Efek Suara
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Modal rincian karya terpilih
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Modal kode sematan Google Sites
  const [isGoogleSitesModalOpen, setIsGoogleSitesModalOpen] = useState<boolean>(false);

  // Melacak karya yang diberi Love / Like oleh pengunjung
  const [likedItemIds, setLikedItemIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('roby_portfolio_likes');
      return saved ? new Set(JSON.parse(saved)) : new Set(['3d-wino']);
    } catch {
      return new Set(['3d-wino']);
    }
  });

  // Toggle Love / Like pada karya
  const handleToggleLike = (id: string) => {
    setLikedItemIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem('roby_portfolio_likes', JSON.stringify(Array.from(next)));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Listener scroll untuk menghitung kedalaman laut
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentDepth = calculateDepth(scrollY, maxScroll);
      setDepthInfo(currentDepth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Buka karya 3D unggulan (Wino Sculpt)
  const handleOpenFeaturedSculpt = () => {
    const winoItem = PORTFOLIO_ITEMS.find((item) => item.id === '3d-wino') || PORTFOLIO_ITEMS[0];
    setSelectedItem(winoItem);
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen relative font-sans-modern transition-colors duration-500 ${
        isNightMode ? 'bg-[#040814] text-[#f1f5f9]' : 'bg-[#051329] text-[#e2f1ff]'
      }`}
    >
      {/* Background Gelembung Bawah Laut */}
      <BubblesBackground />

      {/* Game HUD Navbar */}
      <Navbar
        currentDepth={depthInfo.depthMeters}
        oxygen={depthInfo.oxygenPercent}
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenGoogleSitesModal={() => setIsGoogleSitesModalOpen(true)}
      />

      <main className="relative z-10">
        {/* 1. Hero Section: Sapaan bertema game & profil Roby */}
        <HeroSection
          onExplorePortfolio={() => handleScrollTo('portfolio')}
          onExploreGear={() => handleScrollTo('skills')}
          onOpenFeaturedSculpt={handleOpenFeaturedSculpt}
        />

        {/* 2. Skills Section: Tampilan Status & Upgrade Gear layaknya game Dave the Diver */}
        <SkillsSection />

        {/* 3. Portofolio Section: 3 Tab Kategori (3D Art Blue Hole, Bancho Graphic Design, Cooksta Photography) */}
        <PortfolioSection
          onSelectItem={(item) => setSelectedItem(item)}
          likedItemIds={likedItemIds}
          onToggleLike={handleToggleLike}
        />

        {/* 4. Footer & Kontak: Bancho's Night Bar & Form Pengiriman Sinyal */}
        <ContactSection />
      </main>

      {/* Floating Depth Meter HUD di kanan bawah */}
      <DepthIndicatorHUD depthInfo={depthInfo} />

      {/* Modal Rincian Karya (Blender Sculpt Wino, Desain Grafis, & Foto Cooksta) */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onLike={handleToggleLike}
        isLiked={selectedItem ? likedItemIds.has(selectedItem.id) : false}
      />

      {/* Modal Kode Google Sites Siap Salin */}
      <GoogleSitesModal
        isOpen={isGoogleSitesModalOpen}
        onClose={() => setIsGoogleSitesModalOpen(false)}
      />
    </div>
  );
}
