import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  artist: string;
  youtubeId?: string;
  coverImage?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  artist,
  youtubeId,
  coverImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#111116] border border-[#27272a] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#09090b] border-b border-[#27272a]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e11d24] animate-pulse" />
            <span className="font-bebas text-lg tracking-wider text-white">
              DOOR44 PLAYBACK // {artist.toUpperCase()} - {title.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-[#27272a] transition-colors cursor-pointer"
            aria-label="Fechar player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Frame */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {youtubeId ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
              title={`${artist} - ${title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-[#18181b] to-black">
              {coverImage && (
                <img
                  src={coverImage}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 blur-xs"
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full bg-[#e11d24] text-white flex items-center justify-center shadow-[0_0_30px_#e11d24] hover:scale-105 transition-transform cursor-pointer mb-4"
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
                <h3 className="font-bebas text-2xl md:text-3xl text-white tracking-wide">
                  {artist} - {title}
                </h3>
                <p className="text-xs text-[#a1a1aa] mt-1">
                  Produção Oficial Door44 Studios · Gravado em 4K
                </p>
              </div>

              {/* Controls bar simulation */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#e11d24]">
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)} className="hover:text-[#e11d24]">
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-[11px] text-[#71717a]">01:45 / 03:52</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.youtube.com/@Door44.Studios"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#d4d4d8] hover:text-white"
                  >
                    Assistir no YouTube <ExternalLink className="w-3 h-3" />
                  </a>
                  <button onClick={onClose}>
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#0d0d12] flex flex-wrap items-center justify-between gap-4 border-t border-[#27272a]/60">
          <div>
            <h4 className="text-sm font-semibold text-white">{artist} — {title}</h4>
            <p className="text-xs text-[#71717a]">Produzido por Door44 Studios · Direção & Fotografia Especializada</p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@Door44.Studios"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#e11d24] hover:bg-[#b91c1c] rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              Inscrever-se no Canal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
