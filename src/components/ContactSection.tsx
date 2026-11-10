import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, Sparkles, MapPin, Globe, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    category: '3D Art / Blender',
    message: '',
  });

  const [questCompleted, setQuestCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playDing();
    setQuestCompleted(true);
    // Auto-reset form state
    setFormState({
      name: '',
      email: '',
      category: '3D Art / Blender',
      message: '',
    });
  };

  return (
    <footer id="contact" className="relative py-16 px-4 sm:px-6 bg-[#040c17] border-t-4 border-[#f59e0b] overflow-hidden">
      {/* Background warm lantern glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header styled like Bancho's VIP Lounge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#261505] border border-[#f59e0b] text-[#f59e0b] font-pixel text-xs mb-3 shadow-md">
            <span>🍣</span>
            <span>BANCHO'S NIGHT BAR & SEA DISPATCH</span>
          </div>
          <h2 className="font-pixel text-2xl sm:text-3xl text-white tracking-wide">
            KOLABORASI & KONTAK
          </h2>
          <p className="mt-2 text-[#cbd5e1] font-sans-modern text-sm max-w-xl mx-auto">
            Pintu bar selalu terbuka! Siap menerima komisi karya 3D, proyek desain grafis,
            maupun kolaborasi fotografi konseptual.
          </p>
        </div>

        {/* Quest Completed In-Game Celebration Modal */}
        {questCompleted && (
          <div className="mb-8 p-6 bg-[#0a2e1d] border-4 border-[#10b981] shadow-[0_0_25px_rgba(16,185,129,0.4)] text-center animate-in zoom-in-95">
            <div className="inline-block p-2 bg-[#10b981] text-[#041226] rounded-full mb-3">
              <CheckCircle2 size={32} />
            </div>
            <div className="font-pixel text-base sm:text-lg text-[#34d399] mb-1">
              ★ QUEST ACCEPTED: SIGNAL DISPATCHED! ★
            </div>
            <p className="font-sans-modern text-sm text-[#a7f3d0] max-w-md mx-auto">
              Pesan dan sinyal proyek Anda telah diterima dengan aman di pos selam Roby. Kami akan segera
              merespon via email dalam 24 jam!
            </p>
            <button
              onClick={() => {
                sound.playBlip();
                setQuestCompleted(false);
              }}
              className="mt-4 px-4 py-2 bg-[#10b981] hover:bg-[#059669] text-[#041226] font-pixel text-xs font-bold border-2 border-black pixel-btn"
            >
              TUTUP NOTIFIKASI
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Game Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#091a30] border-3 border-[#173a66] p-6 pixel-box space-y-4">
              <h3 className="font-pixel text-base text-white flex items-center gap-2">
                <Sparkles size={16} className="text-[#f59e0b]" />
                <span>SALURAN KOMUNIKASI RESMI</span>
              </h3>

              <p className="font-sans-modern text-xs text-[#94a3b8] leading-relaxed">
                Anda bisa mengirimkan tawaran kerja sama, brief project, atau sekadar berdiskusi seputar
                3D modeling dan desain grafis secara langsung.
              </p>

              {/* Direct Email Card */}
              <a
                href={`mailto:${PROFILE_DATA.contactEmail}`}
                onClick={() => sound.playBlip()}
                className="flex items-center gap-3 p-3 bg-[#041022] hover:bg-[#071933] border-2 border-[#00e5ff] text-white transition-all group"
              >
                <div className="p-2 bg-[#00e5ff] text-[#041226]">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-pixel text-[#00e5ff]">EMAIL UTAMA</div>
                  <div className="font-mono text-xs sm:text-sm font-bold truncate group-hover:text-[#00e5ff]">
                    {PROFILE_DATA.contactEmail}
                  </div>
                </div>
              </a>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-3 bg-[#041022] border border-[#143257] text-[#cbd5e1] text-xs font-sans-modern">
                <MapPin size={18} className="text-[#f59e0b] shrink-0" />
                <span>{PROFILE_DATA.location}</span>
              </div>
            </div>

            {/* Social Links Styled as Retro Game Badges */}
            <div className="bg-[#091a30] border-3 border-[#173a66] p-6 pixel-box space-y-3">
              <div className="font-pixel text-xs text-[#f59e0b]">
                MEDIA SOSIAL & PLATFORM KREATIF
              </div>

              {/* Tombol-tombol media sosial: Anda bisa mengganti href dengan akun pribadi Anda */}
              <div className="grid grid-cols-2 gap-2 text-xs font-pixel">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playBlip()}
                  className="p-2.5 bg-[#064e3b] hover:bg-[#047857] text-white border border-[#10b981] pixel-btn flex items-center gap-1.5"
                >
                  <MessageCircle size={14} />
                  <span>WHATSAPP</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playBlip()}
                  className="p-2.5 bg-[#831843] hover:bg-[#9d174d] text-white border border-[#ec4899] pixel-btn flex items-center gap-1.5"
                >
                  <span>📷 INSTAGRAM</span>
                </a>

                {/* ArtStation */}
                <a
                  href="https://artstation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playBlip()}
                  className="p-2.5 bg-[#0f2d4a] hover:bg-[#164470] text-[#38bdf8] border border-[#38bdf8] pixel-btn flex items-center gap-1.5"
                >
                  <span>🎨 ARTSTATION</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playBlip()}
                  className="p-2.5 bg-[#172554] hover:bg-[#1e3a8a] text-white border border-[#3b82f6] pixel-btn flex items-center gap-1.5"
                >
                  <span>💼 LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Project Form */}
          <div className="lg:col-span-7 bg-[#071830] border-4 border-[#00e5ff] p-6 sm:p-8 pixel-box relative">
            <div className="flex items-center justify-between border-b border-[#16365c] pb-3 mb-5">
              <div>
                <span className="font-pixel text-[10px] text-[#00e5ff] uppercase">
                  SEA DRONE PROJECT DISPATCH
                </span>
                <h3 className="font-pixel text-lg text-white">
                  KIRIM PESAN / TAWARAN PROYEK
                </h3>
              </div>
              <div className="hidden sm:flex items-center gap-1 font-pixel text-xs text-[#f59e0b]">
                <Award size={14} />
                <span>QUICK RESPONSE</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nama */}
              <div>
                <label className="block font-pixel text-xs text-[#8ec8f8] mb-1">
                  NAMA / PERUSAHAAN *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Contoh: Bancho Sushi / Duff Weapon Lab"
                  className="w-full px-3 py-2.5 bg-[#030d1d] border-2 border-[#153a66] text-white text-xs font-sans-modern focus:outline-none focus:border-[#00e5ff]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-pixel text-xs text-[#8ec8f8] mb-1">
                  ALAMAT EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="nama@perusahaan.com"
                  className="w-full px-3 py-2.5 bg-[#030d1d] border-2 border-[#153a66] text-white text-xs font-sans-modern focus:outline-none focus:border-[#00e5ff]"
                />
              </div>

              {/* Kategori Proyek */}
              <div>
                <label className="block font-pixel text-xs text-[#8ec8f8] mb-1">
                  KATEGORI EKSPLORASI
                </label>
                <select
                  value={formState.category}
                  onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#030d1d] border-2 border-[#153a66] text-white text-xs font-sans-modern focus:outline-none focus:border-[#00e5ff]"
                >
                  <option value="3D Art / Blender">3D Art & Digital Sculpting (Blender)</option>
                  <option value="Graphic Design">Graphic Design & Logo Maker (Illustrator)</option>
                  <option value="Photography">Konseptual Photography & Visual Storytelling</option>
                  <option value="Full Project Collaboration">Full Creative Direction Collaboration</option>
                </select>
              </div>

              {/* Pesan */}
              <div>
                <label className="block font-pixel text-xs text-[#8ec8f8] mb-1">
                  DETAIL PROYEK / PESAN *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Ceritakan visi proyek Anda, timeline, atau detail aset yang ingin dibuat..."
                  className="w-full px-3 py-2.5 bg-[#030d1d] border-2 border-[#153a66] text-white text-xs font-sans-modern focus:outline-none focus:border-[#00e5ff]"
                />
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#051329] font-pixel text-xs sm:text-sm font-bold border-2 border-black pixel-btn flex items-center justify-center gap-2 transition-transform"
              >
                <Send size={16} />
                <span>LUNCURKAN DRONE SINYAL (KIRIM PESAN)</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Credit Line */}
        <div className="mt-12 pt-6 border-t border-[#122e54] flex items-center justify-between flex-wrap gap-4 text-xs font-sans-modern text-[#64748b]">
          <div>
            © 2026 <strong>Roby Rizqy Ridhallah</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-pixel text-[10px] text-[#38bdf8]">
            <span>THEMED AFTER DAVE THE DIVER</span>
            <span>•</span>
            <span className="text-[#f59e0b]">READY TO DIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
