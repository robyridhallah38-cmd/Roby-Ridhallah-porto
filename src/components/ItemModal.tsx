import React from 'react';
import { X, Heart, MessageSquare, Tag, Layers, Calendar, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../utils/portfolioLogic';
import { sound } from '../utils/soundEffects';

interface ItemModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onLike: (id: string) => void;
  isLiked?: boolean;
}

export const ItemModal: React.FC<ItemModalProps> = ({
  item,
  onClose,
  onLike,
  isLiked = false,
}) => {
  if (!item) return null;

  const handleLike = () => {
    sound.playLike();
    onLike(item.id);
  };

  const handleClose = () => {
    sound.playBubble();
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-[#051329] border-4 border-[#00e5ff] w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-[0_0_30px_rgba(0,229,255,0.4)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 bg-[#030d1d] border-b-2 border-[#163860] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-pixel text-xs text-[#00e5ff]">
            <span className="w-2.5 h-2.5 bg-[#00e5ff]" />
            <span>iDIVER ARTIFACT INSPECTOR</span>
            {item.category === '3d' && (
              <span className="text-[#c084fc] bg-[#3b1261] px-1.5 py-0.5 border border-[#a855f7]">
                BLENDER 3D
              </span>
            )}
            {item.category === 'graphic' && (
              <span className="text-[#f59e0b] bg-[#382404] px-1.5 py-0.5 border border-[#f59e0b]">
                BANCHO MENU
              </span>
            )}
            {item.category === 'photo' && (
              <span className="text-[#ec4899] bg-[#3d0824] px-1.5 py-0.5 border border-[#ec4899]">
                COOKSTA FEED
              </span>
            )}
          </div>

          <button
            onClick={handleClose}
            aria-label="Tutup jendela rincian"
            className="p-1 text-[#94a3b8] hover:text-white hover:bg-[#1a385f] border border-[#234873] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Main Visual Display */}
          <div className="relative bg-[#020712] border-2 border-[#153459] overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-[550px] object-contain mx-auto"
            />

            {/* Depth tag if available */}
            {item.depthLevel && (
              <div className="absolute top-3 left-3 bg-[#041226]/90 border border-[#00e5ff] px-2.5 py-1 text-xs font-pixel text-[#00e5ff] backdrop-blur-sm">
                DEPTH: {item.depthLevel}m
              </div>
            )}
          </div>

          {/* Title and Action Header */}
          <div className="flex items-start justify-between flex-wrap gap-4 border-b border-[#133257] pb-4">
            <div>
              <div className="text-xs font-pixel text-[#f59e0b] mb-1">
                {item.subcategory}
              </div>
              <h2 id="modal-title" className="font-pixel text-xl sm:text-2xl text-white">
                {item.title}
              </h2>
            </div>

            {/* Like action button */}
            <button
              onClick={handleLike}
              className={`px-4 py-2 font-pixel text-xs border-2 border-black pixel-btn flex items-center gap-2 transition-transform ${
                isLiked
                  ? 'bg-[#ec4899] text-white shadow-[2px_2px_0_#000]'
                  : 'bg-[#0a2342] text-[#8ec8f8] hover:bg-[#11325c]'
              }`}
            >
              <Heart size={16} className={isLiked ? 'fill-white' : ''} />
              <span>{isLiked ? 'TERSIMPAN DI COOKSTA' : 'BERI LOVE'}</span>
              <span className="font-mono font-bold">({(item.likes || 0) + (isLiked ? 1 : 0)})</span>
            </button>
          </div>

          {/* Project Detailed Description */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 space-y-4 font-sans-modern text-sm text-[#cbd5e1] leading-relaxed">
              <div className="bg-[#081a33] p-4 border-l-4 border-[#00e5ff]">
                <h4 className="font-pixel text-xs text-[#00e5ff] mb-2 uppercase">
                  DESKRIPSI KARYA & PROSES KREATIF
                </h4>
                <p>{item.description}</p>
              </div>

              {/* Special Note for Wino Project */}
              {item.id === '3d-wino' && (
                <div className="bg-[#190e2b] p-4 border border-[#a855f7] text-xs space-y-2">
                  <div className="font-pixel text-[#c084fc] flex items-center gap-2">
                    <Layers size={14} />
                    <span>CATATAN TEKNIS BLENDER 5.1.1</span>
                  </div>
                  <p className="text-[#e9d5ff]">
                    Karya <strong>Wino</strong> didesain dengan teknik <em>dynamic topology (Dyntopo)</em> pada mesh bola dasar
                    (Sphere). Tampilan terbagi menjadi dua viewport: sisi kiri menampilkan <em>Front Orthographic Sculpting mode</em>
                    dengan matcap shading untuk memvalidasi kurvatur hidung, bibir, dan poni; sedangkan sisi kanan menampilkan
                    <em> lit shading</em> dengan highlight rambut gradasi ungu vibran.
                  </p>
                </div>
              )}

              {/* In-Game Character Comments */}
              {item.comments && item.comments.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-pixel text-xs text-[#f59e0b] flex items-center gap-2">
                    <MessageSquare size={14} />
                    <span>KOMENTAR CREW DAVE THE DIVER</span>
                  </h4>
                  <div className="space-y-2">
                    {item.comments.map((c, i) => (
                      <div
                        key={i}
                        className="bg-[#030d1d] p-3 border border-[#16365c] flex items-start gap-3"
                      >
                        <div className="text-xl p-1 bg-[#091f3b] border border-[#224b7a]">
                          {c.avatar}
                        </div>
                        <div className="text-xs">
                          <div className="flex items-center gap-2 font-pixel text-[11px] text-[#38bdf8]">
                            <span>{c.author}</span>
                            <span className="text-[#f59e0b] text-[9px] font-sans">({c.role})</span>
                          </div>
                          <p className="text-[#cbd5e1] mt-1 font-sans-modern italic">
                            "{c.text}"
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Meta Column */}
            <div className="md:col-span-4 space-y-4">
              {/* Tools & Software */}
              <div className="bg-[#06172d] p-4 border border-[#143357]">
                <div className="font-pixel text-[10px] text-[#00e5ff] mb-2 flex items-center gap-1.5 uppercase">
                  <Layers size={13} />
                  <span>TOOLS & SOFTWARE</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#030b17] border border-[#00e5ff]/40 text-[#8ec8f8] text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {item.tags && (
                <div className="bg-[#06172d] p-4 border border-[#143357]">
                  <div className="font-pixel text-[10px] text-[#f59e0b] mb-2 flex items-center gap-1.5 uppercase">
                    <Tag size={13} />
                    <span>TAGS & KATEGORI</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-pixel text-[#94a3b8] bg-[#020710] px-2 py-0.5 border border-[#18365a]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Production Year */}
              <div className="p-3 bg-[#030a14] border border-[#143254] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#38bdf8]" />
                  <span>TAHUN RILIS</span>
                </span>
                <span className="text-white font-bold">{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
