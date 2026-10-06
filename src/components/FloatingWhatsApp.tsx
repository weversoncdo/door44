import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = '5511999999999';
  const message = encodeURIComponent(
    'Olá Door44 Studios! Gostaria de falar sobre um projeto audiovisual (videoclipe, curta ou longa-metragem).'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Badge on Hover or on Desktop */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center"
        aria-label="Falar no WhatsApp com a Door44 Studios"
      >
        {/* Floating text badge */}
        <span
          className={`hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[#111116]/95 border border-[#27272a] text-white text-xs font-semibold shadow-2xl backdrop-blur-md transition-all duration-200 ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Fale Conosco no WhatsApp
        </span>

        {/* WhatsApp Icon Circle Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer">
          {/* Pulsing ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

          {/* Official WhatsApp SVG Icon */}
          <svg
            className="w-7 h-7 fill-white relative z-10"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.238-.245-.588-.494-.508-.678-.518-.176-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376s-1.054 1.029-1.054 2.509 1.079 2.91 1.229 3.111c.15.2 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.722.23 1.379.197 1.9-.119.58-.352 1.78-1.03 2.03-2.026.251-.996.251-1.849.176-2.026-.075-.177-.276-.277-.577-.428zM12.04 2C6.516 2 2.026 6.49 2.026 12.014c0 1.986.58 3.844 1.584 5.417L2 22l4.721-1.547a9.98 9.98 0 0 0 5.319 1.561c5.524 0 10.014-4.49 10.014-10.014C22.054 6.49 17.564 2 12.04 2zm0 18.243c-1.63 0-3.15-.494-4.434-1.341l-.318-.21-2.801.918.932-2.731-.231-.338a8.204 8.204 0 0 1-1.393-4.527c0-4.547 3.7-8.247 8.245-8.247 4.545 0 8.245 3.7 8.245 8.247 0 4.547-3.7 8.249-8.245 8.249z" />
          </svg>
        </div>
      </a>
    </div>
  );
};
