/**
 * Web Audio API synthesizer for Dave the Diver sound effects
 * Menghasilkan efek suara retro 8-bit dan bubble bawah laut secara prosedural.
 */

class SoundController {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Efek gelembung air (Underwater Bubble Pop)
   */
  playBubble() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime;
      // Nada naik cepat seperti gelembung meletup
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, startTime);
      osc.frequency.exponentialRampToValueAtTime(750, startTime + 0.08);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.12);
    } catch {
      // Audio fallback jika browser membatasi autoplay
    }
  }

  /**
   * Efek retro 8-bit blip untuk klik tombol iDiver
   */
  playBlip() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime;
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, startTime);
      osc.frequency.setValueAtTime(900, startTime + 0.04);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.1);
    } catch {
      // ignore
    }
  }

  /**
   * Efek lonceng Bancho Sushi / Upgrade Sukses
   */
  playDing() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, startTime); // A5
      osc.frequency.exponentialRampToValueAtTime(1760, startTime + 0.08); // A6

      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.35);
    } catch {
      // ignore
    }
  }

  /**
   * Efek Cooksta Love / Like
   */
  playLike() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const startTime = this.ctx.currentTime;
      osc1.type = 'sine';
      osc2.type = 'triangle';

      osc1.frequency.setValueAtTime(523.25, startTime); // C5
      osc1.frequency.setValueAtTime(659.25, startTime + 0.06); // E5
      osc1.frequency.setValueAtTime(783.99, startTime + 0.12); // G5

      osc2.frequency.setValueAtTime(1046.5, startTime + 0.12); // C6

      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.28);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(startTime);
      osc2.start(startTime + 0.12);
      osc1.stop(startTime + 0.28);
      osc2.stop(startTime + 0.28);
    } catch {
      // ignore
    }
  }
}

export const sound = new SoundController();
