import React, { useState } from 'react';
import {
  Compass,
  Utensils,
  Camera,
  Heart,
  MessageCircle,
  Sparkles,
  Search,
  ExternalLink,
  Layers,
  Flame,
  Award,
} from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, filterPortfolioItems } from '../utils/portfolioLogic';
import { sound } from '../utils/soundEffects';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
  likedItemIds: Set<string>;
  onToggleLike: (id: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectItem,
  likedItemIds,
  onToggleLike,
}) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'graphic' | 'photo'>('3d');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (tab: '3d' | 'graphic' | 'photo') => {
    sound.playBubble();
    setActiveTab(tab);
  };

  const filteredItems = filterPortfolioItems(PORTFOLIO_ITEMS, activeTab, searchQuery);

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 relative bg-[#051329] border-t-4 border-[#0b2b4f]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0b294d] border border-[#00e5ff] text-[#00e5ff] font-pixel text-xs mb-3 shadow-md">
            <Compass size={14} className="text-[#f59e0b] animate-spin" />
            <span>KARYA & REKAM JEJAK EKSPLORASI</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-wide">
            PORTOFOLIO ROBY RIZQY
          </h2>
          <p className="mt-2 text-[#8ec8f8] font-sans-modern text-sm max-w-xl mx-auto">
            Jelajahi karya terbaik dalam tiga zona khusus: keindahan 3D di Blue Hole,
            koleksi desain di Bancho Menu, dan feed visual di Cooksta.
          </p>
        </div>

        {/* 3 Game Category Navigation Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 font-pixel text-xs">
          {/* Tab 1: 3D Art */}
          <button
            onClick={() => handleTabChange('3d')}
            className={`w-full sm:w-auto px-5 py-3.5 border-3 flex items-center justify-center gap-2.5 transition-all pixel-btn ${
              activeTab === '3d'
                ? 'bg-[#0e2a52] border-[#00e5ff] text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                : 'bg-[#061426] border-[#183a60] text-[#8ec8f8] hover:bg-[#0a1e36]'
            }`}
          >
            <Compass size={16} className={activeTab === '3d' ? 'text-[#00e5ff]' : ''} />
            <div className="text-left">
              <div className="text-[10px] text-[#f59e0b]">ZONA 1</div>
              <div>THE BLUE HOLE (3D ART)</div>
            </div>
          </button>

          {/* Tab 2: Graphic Design */}
          <button
            onClick={() => handleTabChange('graphic')}
            className={`w-full sm:w-auto px-5 py-3.5 border-3 flex items-center justify-center gap-2.5 transition-all pixel-btn ${
              activeTab === 'graphic'
                ? 'bg-[#291705] border-[#f59e0b] text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-[#061426] border-[#183a60] text-[#8ec8f8] hover:bg-[#0a1e36]'
            }`}
          >
            <Utensils size={16} className={activeTab === 'graphic' ? 'text-[#f59e0b]' : ''} />
            <div className="text-left">
              <div className="text-[10px] text-[#f59e0b]">ZONA 2</div>
              <div>BANCHO'S DESIGN MENU</div>
            </div>
          </button>

          {/* Tab 3: Photography */}
          <button
            onClick={() => handleTabChange('photo')}
            className={`w-full sm:w-auto px-5 py-3.5 border-3 flex items-center justify-center gap-2.5 transition-all pixel-btn ${
              activeTab === 'photo'
                ? 'bg-[#2d091e] border-[#ec4899] text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]'
                : 'bg-[#061426] border-[#183a60] text-[#8ec8f8] hover:bg-[#0a1e36]'
            }`}
          >
            <Camera size={16} className={activeTab === 'photo' ? 'text-[#ec4899]' : ''} />
            <div className="text-left">
              <div className="text-[10px] text-[#f59e0b]">ZONA 3</div>
              <div>COOKSTA FEED (PHOTO)</div>
            </div>
          </button>
        </div>

        {/* Search & Status Bar */}
        <div className="mb-8 p-3 bg-[#030d1d] border-2 border-[#153459] flex items-center justify-between flex-wrap gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8ec8f8]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari karya, tools (Blender, Illustrator), atau kata kunci..."
              className="w-full pl-9 pr-4 py-2 bg-[#06172d] border border-[#1b4372] text-xs font-sans-modern text-white placeholder-[#64748b] focus:outline-none focus:border-[#00e5ff]"
            />
          </div>

          <div className="font-pixel text-[11px] text-[#8ec8f8] flex items-center gap-2">
            <span>HASIL:</span>
            <span className="text-[#f59e0b] font-bold">{filteredItems.length} KARYA TERSEDIA</span>
          </div>
        </div>

        {/* TAB 1: THE BLUE HOLE DEPTHS (3D ART) */}
        {activeTab === '3d' && (
          <div className="space-y-8">
            {/* Featured Hero Box for Roby's Blender Sculpt: Wino */}
            <div className="p-5 sm:p-7 bg-gradient-to-br from-[#120924] via-[#091a33] to-[#041226] border-4 border-[#c084fc] shadow-[0_0_25px_rgba(192,132,252,0.35)] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Wino Artwork Image Viewport */}
                <div className="lg:col-span-7 relative group cursor-pointer" onClick={() => onSelectItem(PORTFOLIO_ITEMS[0])}>
                  <div className="relative border-3 border-[#c084fc] overflow-hidden bg-black shadow-2xl">
                    <img
                      src="/assets/aistudio/Cuplikan_layar_2026-08-19_185710_562f1186.png"
                      alt="Wino 3D Character Sculpt in Blender 5.1.1 by Roby Ridhallah"
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-[#a855f7] text-white font-pixel text-[10px] px-2.5 py-1 border border-white shadow">
                      ★ FEATURED 3D ARTWORK
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 text-[#00e5ff] font-pixel text-[10px] px-2 py-1 border border-[#00e5ff]">
                      BLENDER 5.1.1 WORKSPACE
                    </div>
                  </div>
                </div>

                {/* Details & Commentary */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-block px-2 py-0.5 bg-[#4c1d95]/70 border border-[#a855f7] font-pixel text-[10px] text-[#e9d5ff]">
                    CHARACTER SCULPTING • BLENDER 5.1.1
                  </div>
                  <h3 className="font-pixel text-xl sm:text-2xl text-white">
                    Wino - Stylized Character Sculpt
                  </h3>

                  <p className="font-sans-modern text-sm text-[#cbd5e1] leading-relaxed">
                    Karya 3D orisinal karya <strong>Roby Ridhallah</strong>. Memperlihatkan
                    proses digital sculpting wajah anime dengan anatomi stylized, proporsi mata ekspresif,
                    serta rambut helai dinamis dengan transisi warna gradasi ungu yang mencolok.
                  </p>

                  <div className="space-y-2 text-xs font-sans-modern bg-[#040e1e] p-3 border border-[#16365c]">
                    <div className="flex items-center gap-2 text-[#38bdf8]">
                      <Layers size={14} />
                      <strong>Viewport Analysis:</strong>
                    </div>
                    <ul className="list-disc list-inside text-[#94a3b8] space-y-1">
                      <li>Kiri: Front Orthographic Sculpting (Topology check)</li>
                      <li>Kanan: Lit Shading EEVEE Render (Color & Form)</li>
                    </ul>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        sound.playDing();
                        onSelectItem(PORTFOLIO_ITEMS[0]);
                      }}
                      className="px-4 py-2.5 bg-[#a855f7] hover:bg-[#9333ea] text-white font-pixel text-xs border-2 border-black pixel-btn flex items-center gap-2"
                    >
                      <Sparkles size={14} />
                      <span>INSPECT FULL DETAIL</span>
                    </button>

                    <button
                      onClick={() => {
                        sound.playLike();
                        onToggleLike(PORTFOLIO_ITEMS[0].id);
                      }}
                      className={`px-3 py-2.5 font-pixel text-xs border border-[#a855f7] flex items-center gap-1.5 ${
                        likedItemIds.has(PORTFOLIO_ITEMS[0].id) ? 'bg-[#ec4899] text-white' : 'bg-[#180d2e] text-[#e9d5ff]'
                      }`}
                    >
                      <Heart size={14} className={likedItemIds.has(PORTFOLIO_ITEMS[0].id) ? 'fill-white' : ''} />
                      <span>{(PORTFOLIO_ITEMS[0].likes || 0) + (likedItemIds.has(PORTFOLIO_ITEMS[0].id) ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Other 3D Artifacts Grid / Commission Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems
                .filter((item) => item.id !== '3d-wino')
                .map((item) => {
                  const isLiked = likedItemIds.has(item.id);
                  return (
                    <div
                      key={item.id}
                      className="bg-[#071932] border-3 border-[#163860] hover:border-[#00e5ff] transition-all duration-300 flex flex-col justify-between group overflow-hidden pixel-box"
                    >
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {item.depthLevel && (
                          <div className="absolute top-2 left-2 bg-[#041226]/90 border border-[#00e5ff] px-2 py-0.5 text-[10px] font-pixel text-[#00e5ff]">
                            {item.depthLevel}m
                          </div>
                        )}
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <div className="text-[10px] font-pixel text-[#f59e0b] mb-1">
                            {item.subcategory}
                          </div>
                          <h4 className="font-pixel text-sm text-white line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-xs font-sans-modern text-[#94a3b8] mt-1.5 line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-[#133257]">
                          <button
                            onClick={() => {
                              sound.playBubble();
                              onSelectItem(item);
                            }}
                            className="text-xs font-pixel text-[#00e5ff] hover:underline flex items-center gap-1"
                          >
                            <span>PERIKSA</span>
                            <ExternalLink size={12} />
                          </button>

                          <button
                            onClick={() => {
                              sound.playLike();
                              onToggleLike(item.id);
                            }}
                            className="flex items-center gap-1 text-xs font-mono text-[#8ec8f8] hover:text-[#ec4899]"
                          >
                            <Heart size={14} className={isLiked ? 'fill-[#ec4899] text-[#ec4899]' : ''} />
                            <span>{(item.likes || 0) + (isLiked ? 1 : 0)}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* Slot Khusus: Menerima Komisi 3D Modeling & Sculpting */}
              <div className="bg-[#051428] border-3 border-dashed border-[#00e5ff]/60 p-6 flex flex-col justify-between items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-none bg-[#0a2342] border-2 border-[#00e5ff] flex items-center justify-center text-2xl">
                  👾
                </div>
                <div>
                  <div className="font-pixel text-xs text-[#00e5ff] mb-1">
                    OPEN FOR 3D COMMISSIONS
                  </div>
                  <h4 className="font-pixel text-sm text-white">
                    Punya Ide Karakter atau Aset 3D?
                  </h4>
                  <p className="text-xs font-sans-modern text-[#94a3b8] mt-2">
                    Roby siap mewujudkan konsep 2D Anda ke dalam model 3D Blender siap pakai (animasi, game props, dan stylised character).
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => sound.playBlip()}
                  className="px-4 py-2 bg-[#00e5ff] text-[#031525] font-pixel text-[10px] font-bold border border-black pixel-btn"
                >
                  AJUKAN PROYEK 3D
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BANCHO'S DESIGN MENU (GRAPHIC DESIGN) */}
        {activeTab === 'graphic' && (
          <div className="space-y-6">
            {/* Sushi Bar Menu Header Board */}
            <div className="p-4 bg-[#231508] border-3 border-[#f59e0b] shadow-[0_0_15px_rgba(245,158,11,0.3)] flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f59e0b] text-[#231508] flex items-center justify-center font-bold text-xl">
                  🍣
                </div>
                <div>
                  <h3 className="font-pixel text-sm sm:text-base text-white">
                    BANCHO'S SPECIAL DESIGN CREATIONS
                  </h3>
                  <p className="text-xs font-sans-modern text-[#fed7aa]">
                    Koleksi desain grafis yang disajikan dengan komposisi visual matang dan cita rasa estetika tinggi.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 font-pixel text-xs text-[#f59e0b] bg-[#140c04] px-3 py-1.5 border border-[#f59e0b]">
                <Award size={15} />
                <span>MICHELIN 3-STAR DESIGN</span>
              </div>
            </div>

            {/* Graphic Design Cards formatted like gourmet sushi recipes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => {
                const isLiked = likedItemIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-[#0b1b2d] border-3 border-[#854d0e] hover:border-[#f59e0b] p-5 transition-all duration-200 pixel-box flex flex-col justify-between space-y-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* Image Thumbnail */}
                      <div
                        onClick={() => {
                          sound.playBubble();
                          onSelectItem(item);
                        }}
                        className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-black border-2 border-[#f59e0b] overflow-hidden cursor-pointer group"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-pixel text-[9px] text-[#f59e0b] bg-[#291705] px-1.5 py-0.5 border border-[#f59e0b]/40">
                            {item.subcategory}
                          </span>
                          <span className="text-xs text-[#f59e0b]">★★★★★</span>
                        </div>

                        <h4
                          onClick={() => {
                            sound.playBubble();
                            onSelectItem(item);
                          }}
                          className="font-pixel text-sm text-white mt-1 cursor-pointer hover:text-[#f59e0b] transition-colors"
                        >
                          {item.title}
                        </h4>

                        <p className="font-sans-modern text-xs text-[#94a3b8] mt-1.5 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Ingredients / Tools used */}
                    <div className="pt-2 border-t border-[#1a385c] flex items-center justify-between flex-wrap gap-2 text-xs">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#cbd5e1]">
                        <span className="text-[#f59e0b] font-pixel text-[9px]">TOOLS:</span>
                        <span>{item.tools.join(', ')}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            sound.playLike();
                            onToggleLike(item.id);
                          }}
                          className="flex items-center gap-1 font-mono text-xs text-[#8ec8f8] hover:text-[#ec4899]"
                        >
                          <Heart size={14} className={isLiked ? 'fill-[#ec4899] text-[#ec4899]' : ''} />
                          <span>{(item.likes || 0) + (isLiked ? 1 : 0)}</span>
                        </button>

                        <button
                          onClick={() => {
                            sound.playDing();
                            onSelectItem(item);
                          }}
                          className="px-2.5 py-1 bg-[#f59e0b] text-[#031525] font-pixel text-[10px] font-bold border border-black pixel-btn"
                        >
                          DETAIL
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: COOKSTA FEED (PHOTOGRAPHY) */}
        {activeTab === 'photo' && (
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Cooksta Smartphone App Header */}
            <div className="p-4 bg-gradient-to-r from-[#2a081a] via-[#1a0515] to-[#040d1a] border-3 border-[#ec4899] shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-tr from-[#ec4899] to-[#f43f5e] flex items-center justify-center font-bold text-white text-sm">
                    🍳
                  </div>
                  <div>
                    <div className="font-pixel text-xs text-[#ec4899] flex items-center gap-1">
                      <span>COOKSTA FEED</span>
                      <Flame size={13} className="text-[#f59e0b]" />
                    </div>
                    <div className="text-[11px] font-sans-modern text-[#fbcfe8]">
                      Dave the Diver Social Photography App
                    </div>
                  </div>
                </div>

                <div className="text-right font-pixel text-[10px]">
                  <div className="text-white">14.2K FOLLOWER</div>
                  <div className="text-[#f59e0b]">DIAMOND CHEF TIER</div>
                </div>
              </div>
            </div>

            {/* Cooksta Posts Feed */}
            <div className="space-y-8">
              {filteredItems.map((item) => {
                const isLiked = likedItemIds.has(item.id);
                return (
                  <article
                    key={item.id}
                    className="bg-[#081a33] border-3 border-[#1c3a63] shadow-xl overflow-hidden"
                  >
                    {/* Post Author Header */}
                    <div className="p-3 bg-[#041022] border-b border-[#143257] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/assets/aistudio/Gambar_WhatsApp_2025-02-16_pukul_14.19.36_4757f056-removebg-preview_0d08c160.png"
                          alt="Roby profile thumbnail"
                          className="w-8 h-8 rounded-full object-cover border border-[#00e5ff] bg-[#0b2447]"
                        />
                        <div>
                          <div className="font-pixel text-xs text-white flex items-center gap-1.5">
                            <span>roby.ridhallah</span>
                            <span className="text-[10px] text-[#00e5ff]">✓</span>
                          </div>
                          <div className="text-[10px] font-sans-modern text-[#94a3b8]">
                            Giant Blue Hole Harbor • {item.subcategory}
                          </div>
                        </div>
                      </div>

                      <span className="font-pixel text-[10px] text-[#f59e0b]">
                        COOKSTA VERIFIED
                      </span>
                    </div>

                    {/* Photo Container */}
                    <div
                      onClick={() => {
                        sound.playBubble();
                        onSelectItem(item);
                      }}
                      className="relative bg-black cursor-pointer group overflow-hidden max-h-[620px] flex items-center justify-center border-y border-[#163860]"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-h-[600px] object-contain group-hover:scale-102 transition-transform duration-300 mx-auto"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 bg-[#00e5ff] text-[#031525] font-pixel text-xs font-bold border border-black shadow">
                          LIHAT RESOLUSI PENUH
                        </span>
                      </div>
                    </div>

                    {/* Social Action Bar */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => {
                              sound.playLike();
                              onToggleLike(item.id);
                            }}
                            className={`flex items-center gap-1.5 font-pixel text-xs transition-transform active:scale-125 ${
                              isLiked ? 'text-[#ec4899]' : 'text-[#94a3b8] hover:text-[#ec4899]'
                            }`}
                          >
                            <Heart size={20} className={isLiked ? 'fill-[#ec4899]' : ''} />
                            <span>{(item.likes || 0) + (isLiked ? 1 : 0)} LIKES</span>
                          </button>

                          <button
                            onClick={() => {
                              sound.playBubble();
                              onSelectItem(item);
                            }}
                            className="flex items-center gap-1.5 font-pixel text-xs text-[#94a3b8] hover:text-[#00e5ff]"
                          >
                            <MessageCircle size={18} />
                            <span>{(item.comments || []).length} KOMENTAR</span>
                          </button>
                        </div>

                        <span className="font-mono text-xs text-[#64748b]">{item.date}</span>
                      </div>

                      {/* Post Caption */}
                      <div className="font-sans-modern text-sm text-[#cbd5e1] leading-relaxed">
                        <strong className="text-white mr-1.5">{item.title}</strong>
                        {item.description}
                      </div>

                      {/* In-Game Comments Box */}
                      {item.comments && item.comments.length > 0 && (
                        <div className="bg-[#030d1d] p-3 border border-[#143257] space-y-2 text-xs font-sans-modern">
                          <div className="font-pixel text-[10px] text-[#f59e0b] uppercase">
                            POPULAR COMMENTS DARI DIVER CREW
                          </div>
                          {item.comments.map((comment, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-base">{comment.avatar}</span>
                              <div>
                                <span className="font-bold text-white mr-1.5 font-pixel text-[10px]">
                                  {comment.author}:
                                </span>
                                <span className="text-[#cbd5e1]">{comment.text}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
