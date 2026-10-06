import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramCardProps {
  artistName: string;
  songTitle: string;
  location: string;
  credits?: { role: string; name: string }[];
  instagramUrl?: string;
  username?: string;
  postDate?: string;
  captionSnippet?: string;
  imagePreview?: string;
}

// Helper to extract reel or post ID from Instagram URL
function extractInstagramId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:reel|p|tv)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

export const InstagramCard: React.FC<InstagramCardProps> = ({
  artistName,
  location,
  instagramUrl,
  username,
}) => {
  // Resolve default URLs based on artist if not passed
  const resolvedUrl = instagramUrl || (
    artistName.toLowerCase().includes('gabrielz') 
      ? 'https://www.instagram.com/gabrielz._/reel/DZ8R1i-vQAQ/'
      : 'https://www.instagram.com/gleyfybraulyy/reel/DC-fxphv1xc/'
  );

  const resolvedUsername = username || (
    artistName.toLowerCase().includes('gabrielz') ? 'gabrielz._' : 'gleyfybraulyy'
  );

  const reelId = extractInstagramId(resolvedUrl);
  const embedUrl = reelId 
    ? `https://www.instagram.com/reel/${reelId}/embed` 
    : undefined;

  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    // Trigger Instagram embed processing if instgrm script is loaded
    if (typeof window !== 'undefined' && (window as any).instgrm?.Embeds) {
      try {
        (window as any).instgrm.Embeds.process();
      } catch (err) {
        // silent
      }
    }
  }, [embedUrl]);

  return (
    <div className="w-full max-w-[440px] mx-auto bg-black border-2 border-[#27272a] hover:border-[#dd2a7b]/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col group">
      {/* Live Instagram Embed Iframe (Directly displaying the post) */}
      <div className="relative w-full h-[540px] sm:h-[580px] bg-black">
        {/* Loading Indicator while iframe initializes */}
        {!iframeLoaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#0d0d12] p-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center shadow-lg animate-pulse">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <div>
              <h5 className="text-white font-bold text-sm">Carregando postagem do Instagram...</h5>
              <p className="text-[#a1a1aa] text-xs mt-1">Conectando a @{resolvedUsername}</p>
            </div>
            <div className="w-32 h-1 bg-[#27272a] rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-[#dd2a7b] animate-pulse" />
            </div>
          </div>
        )}

        {/* Real Instagram Embed Iframe */}
        {embedUrl && (
          <iframe
            src={embedUrl}
            className="w-full h-full border-0 bg-black"
            scrolling="no"
            allowTransparency={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            onLoad={() => setIframeLoaded(true)}
            title={`Instagram Reel - ${artistName}`}
          />
        )}
      </div>

      {/* Card Footer: Direct Link to Instagram Reel */}
      <div className="p-3.5 bg-[#12121a] border-t border-[#27272a] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#a1a1aa] text-[11px] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Link Oficial do Reel:
          </span>
          <span className="text-[#71717a] text-[11px]">{location}</span>
        </div>

        <a
          href={resolvedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(221,42,123,0.4)] cursor-pointer"
        >
          <Instagram className="w-4 h-4 fill-white text-transparent" />
          <span>Ver Postagem no Instagram</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Clean URL display for transparency */}
        <p className="text-[10px] text-center text-[#71717a] font-mono truncate px-2">
          {resolvedUrl}
        </p>
      </div>
    </div>
  );
};
