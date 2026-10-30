import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Romantic ambient synthesized melody fallback (pentatonic soft music box chime)
  const playSynthesizedMelody = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Romantic soft chord notes (frequencies for C major 9 / F major 7 / A minor chords)
      const chordProgressions = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [349.23, 440.00, 523.25, 659.25], // Fmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [392.00, 493.88, 587.33, 698.46], // G
      ];

      let chordIdx = 0;
      let noteIdx = 0;

      const playChime = (freq: number) => {
        if (!ctx || ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm sine wave + soft bell overtones
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft envelope
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 1.8);
      };

      synthIntervalRef.current = window.setInterval(() => {
        const chord = chordProgressions[chordIdx];
        const note = chord[noteIdx % chord.length];
        playChime(note);

        noteIdx++;
        if (noteIdx % chord.length === 0) {
          chordIdx = (chordIdx + 1) % chordProgressions.length;
        }
      }, 550);
    } catch (e) {
      console.warn("Synthesizer error", e);
    }
  };

  const stopSynthesizer = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      // Pause
      if (audioRef.current && !audioError) {
        audioRef.current.pause();
      }
      stopSynthesizer();
      setIsPlaying(false);
    } else {
      // Play
      if (audioRef.current && !audioError) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Fallback to web audio synth
          setAudioError(true);
          playSynthesizedMelody();
          setIsPlaying(true);
        });
      } else {
        playSynthesizedMelody();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    return () => {
      stopSynthesizer();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="relative flex items-center">
      <audio
        ref={audioRef}
        src="/audio/bg-music.mp3"
        loop
        preload="auto"
        onError={() => setAudioError(true)}
      />
      
      <button
        id="bg-music-toggle"
        onClick={toggleMusic}
        title={isPlaying ? "Mute Romantic Music" : "Play Romantic Music"}
        className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
          isPlaying
            ? 'bg-rose-500 text-white shadow-md shadow-rose-300/50 scale-105'
            : 'bg-white/80 hover:bg-rose-50 text-rose-600 border border-rose-200 shadow-sm'
        }`}
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-200 opacity-75"></span>
              <Volume2 className="w-3.5 h-3.5 relative" />
            </>
          ) : (
            <VolumeX className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
          )}
        </span>
        
        <span className="hidden sm:inline font-sans">
          {isPlaying ? "Music Playing" : "Romantic Music"}
        </span>

        {isPlaying && (
          <span className="flex items-center gap-0.5 ml-0.5">
            <span className="w-0.5 h-2.5 bg-white rounded-full animate-pulse"></span>
            <span className="w-0.5 h-3.5 bg-white rounded-full animate-pulse delay-100"></span>
            <span className="w-0.5 h-2 bg-white rounded-full animate-pulse delay-200"></span>
          </span>
        )}
      </button>
    </div>
  );
};
