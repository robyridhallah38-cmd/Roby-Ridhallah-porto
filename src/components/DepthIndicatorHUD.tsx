import React from 'react';
import { ChevronUp, Anchor, Compass } from 'lucide-react';
import { DepthInfo } from '../utils/portfolioLogic';
import { sound } from '../utils/soundEffects';

interface DepthIndicatorHUDProps {
  depthInfo: DepthInfo;
}

export const DepthIndicatorHUD: React.FC<DepthIndicatorHUDProps> = ({ depthInfo }) => {
  const scrollToTop = () => {
    sound.playBubble();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Status Kedalaman Penyelam"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex flex-col items-end gap-1.5"
    >
      {/* Floating HUD Widget */}
      <div className="bg-[#041224]/90 backdrop-blur-md border-2 sm:border-3 border-[#00e5ff] p-2 sm:p-3 shadow-[3px_3px_0_#000] min-w-[110px] sm:min-w-[170px] text-right font-pixel text-xs">
        {/* Layer Zone */}
        <div
          className="text-[8px] sm:text-[9px] uppercase tracking-wider mb-0.5 truncate hidden sm:block"
          style={{ color: depthInfo.zoneColor }}
        >
          {depthInfo.zoneName}
        </div>

        {/* Big Depth Counter */}
        <div className="flex items-baseline justify-end gap-1">
          <span className="text-base sm:text-2xl font-bold text-white font-mono">
            {depthInfo.depthMeters}
          </span>
          <span className="text-[#00e5ff] text-[10px] sm:text-xs">METER</span>
        </div>

        {/* Oxygen indicator */}
        <div className="mt-0.5 sm:mt-1 flex items-center justify-end gap-1 text-[9px] sm:text-[10px] text-[#94a3b8]">
          <span className="hidden sm:inline">O2:</span>
          <span
            className={`font-mono font-bold ${
              depthInfo.oxygenPercent < 40 ? 'text-red-400 animate-pulse' : 'text-[#38bdf8]'
            }`}
          >
            {depthInfo.oxygenPercent}% O2
          </span>
        </div>
      </div>

      {/* Surface Button */}
      {depthInfo.depthMeters > 30 && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke permukaan laut"
          className="p-2 sm:p-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-[#041226] font-pixel text-[10px] sm:text-xs border-2 border-black pixel-btn flex items-center gap-1 shadow-lg"
          title="Naik ke Permukaan (Top)"
        >
          <ChevronUp size={14} />
          <span className="hidden sm:inline">SURFACE</span>
        </button>
      )}
    </aside>
  );
};
