import React from 'react';

interface BadgeProps {
  size?: number;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
}

// Reusable torn paper border path for 500x500 circles
const TORN_PAPER_BORDER_PATH = `
  M250 8 
  C285 7, 320 12, 355 24 
  C375 32, 395 44, 415 58 
  C435 74, 452 93, 466 114 
  C482 138, 492 165, 497 195 
  C501 220, 500 248, 496 275 
  C492 305, 482 334, 467 360 
  C452 387, 432 411, 408 431 
  C384 450, 356 465, 326 475 
  C296 485, 264 490, 232 491 
  C200 491, 168 484, 138 472 
  C108 460, 81 443, 58 421 
  C36 399, 19 373, 9 344 
  C-1 315, -2 284, 2 254 
  C6 224, 16 195, 32 168 
  C48 141, 70 117, 95 97 
  C120 77, 149 62, 180 52 
  C210 42, 230 40, 250 8 Z
  
  M250 36
  C220 38, 190 46, 163 60
  C135 74, 110 93, 90 116
  C70 139, 55 166, 46 195
  C37 224, 34 254, 38 284
  C42 314, 52 342, 69 367
  C86 392, 108 413, 134 429
  C160 445, 189 455, 219 459
  C249 463, 280 460, 309 451
  C338 442, 365 427, 388 407
  C411 387, 429 363, 442 335
  C455 307, 462 277, 463 247
  C464 217, 458 187, 446 159
  C434 131, 416 106, 393 85
  C370 64, 343 48, 313 38
  C283 28, 260 34, 250 36 Z
`;

// 1. BUZZKILL BOYZ BADGE
export const BuzzkillBoyzBadge: React.FC<BadgeProps> = ({ 
  size = 140, 
  className = '', 
  onClick,
  interactive = false 
}) => {
  return (
    <div 
      onClick={onClick}
      style={size ? { width: size, height: size } : undefined}
      className={`relative rounded-full select-none overflow-hidden ${interactive ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''} ${className}`}
    >
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bz-dark-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1e24" />
            <stop offset="70%" stopColor="#111115" />
            <stop offset="100%" stopColor="#08080a" />
          </radialGradient>

          <mask id="bz-stencil-mask">
            <rect width="500" height="500" fill="white" />
            <circle cx="150" cy="180" r="2.5" fill="black" />
            <circle cx="210" cy="195" r="3" fill="black" />
            <circle cx="280" cy="170" r="2" fill="black" />
            <circle cx="330" cy="205" r="3.5" fill="black" />
            <circle cx="190" cy="275" r="3" fill="black" />
            <circle cx="250" cy="300" r="3" fill="black" />
            <circle cx="320" cy="285" r="3.5" fill="black" />
            <circle cx="410" cy="290" r="3" fill="black" />
            <circle cx="130" cy="380" r="3" fill="black" />
            <circle cx="180" cy="405" r="3" fill="black" />
            <circle cx="260" cy="390" r="2.5" fill="black" />
            <circle cx="300" cy="415" r="3" fill="black" />
            <line x1="120" y1="185" x2="135" y2="185" stroke="black" strokeWidth="2.5" />
            <line x1="200" y1="310" x2="220" y2="310" stroke="black" strokeWidth="3" />
            <line x1="380" y1="280" x2="400" y2="280" stroke="black" strokeWidth="2.5" />
            <line x1="240" y1="395" x2="260" y2="395" stroke="black" strokeWidth="3" />
          </mask>
        </defs>

        <circle cx="250" cy="250" r="235" fill="url(#bz-dark-grad)" />

        {/* Paper creases */}
        <path d="M70 120 Q180 200 320 180 T430 290" stroke="rgba(255,255,255,0.03)" strokeWidth="16" fill="none" />
        <path d="M120 380 Q240 310 380 370" stroke="rgba(0,0,0,0.4)" strokeWidth="24" fill="none" />
        <path d="M160 90 L210 240 L340 220 L390 410" stroke="rgba(255,255,255,0.02)" strokeWidth="8" fill="none" />

        {/* Top red streak */}
        <g fill="#d32128" opacity="0.95">
          <path d="M100 135 L370 137 L355 146 L95 144 Z" />
          <path d="M130 148 L330 149 L320 154 L145 153 Z" />
          <path d="M85 138 L105 138 L100 142 L80 142 Z" />
          <circle cx="375" cy="140" r="2" />
          <circle cx="385" cy="144" r="1.5" />
          <circle cx="75" cy="140" r="2" />
        </g>

        {/* Middle red streak extending from the left rim into the letter K */}
        <g fill="#d32128" opacity="0.95">
          <path d="M40 264 L165 266 L155 277 L35 274 Z" />
          <path d="M55 279 L172 281 L168 290 L48 288 Z" />
          <path d="M38 289 L140 292 L130 300 L42 297 Z" />
          <path d="M85 301 L150 303 L142 308 L80 306 Z" />
          <circle cx="178" cy="272" r="2.5" />
          <circle cx="182" cy="285" r="2" />
          <circle cx="172" cy="298" r="2" />
        </g>

        {/* Bottom-right red patch */}
        <g fill="#d32128" opacity="0.95">
          <path d="M335 380 C360 375, 400 378, 420 388 C425 405, 410 422, 385 425 C355 428, 335 410, 335 380 Z" />
          <path d="M340 426 L380 428 L375 435 L335 433 Z" />
          <path d="M350 436 L375 437 L370 442 L345 441 Z" />
          <path d="M410 395 L445 397 L440 404 L405 402 Z" />
          <path d="M415 406 L455 408 L450 415 L410 413 Z" />
          <circle cx="435" cy="385" r="2" />
          <circle cx="448" cy="392" r="2.5" />
          <circle cx="425" cy="425" r="3" />
          <circle cx="395" cy="438" r="2" />
          <circle cx="330" cy="430" r="1.5" />
        </g>

        {/* BUZZ KILL BOYZ */}
        <g 
          fill="#fbfbfb" 
          mask="url(#bz-stencil-mask)"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          <g transform="translate(100, 155)">
            <path d="M10 5 H48 C62 5, 70 12, 70 24 C70 32, 64 38, 54 40 C66 43, 73 50, 73 63 C73 76, 62 84, 46 84 H10 V5 Z M30 22 V34 H44 C49 34, 52 31, 52 28 C52 25, 49 22, 44 22 H30 Z M30 51 V67 H46 C51 67, 55 64, 55 59 C55 54, 51 51, 46 51 H30 Z" />
            <path d="M85 5 H106 V55 C106 66, 112 71, 122 71 C132 71, 138 66, 138 55 V5 H159 V54 C159 74, 144 86, 122 86 C100 86, 85 74, 85 54 V5 Z" />
            <path d="M172 5 H224 V22 L193 67 H226 V84 H170 V67 L202 22 H172 V5 Z" />
            <path d="M238 5 H290 V22 L259 67 H292 V84 H236 V67 L268 22 H238 V5 Z" />
          </g>

          <g transform="translate(148, 245)">
            <path d="M10 5 H32 V40 L65 5 H92 L53 45 L95 84 H68 L32 50 V84 H10 V5 Z" />
            <path d="M105 5 H127 V84 H105 V5 Z" />
            <path d="M140 5 H162 V66 H198 V84 H140 V5 Z" />
            <path d="M208 5 H230 V66 H266 V84 H208 V5 Z" />
          </g>

          <g transform="translate(90, 340)">
            <path d="M10 5 H48 C62 5, 70 12, 70 24 C70 32, 64 38, 54 40 C66 43, 73 50, 73 63 C73 76, 62 84, 46 84 H10 V5 Z M30 22 V34 H44 C49 34, 52 31, 52 28 C52 25, 49 22, 44 22 H30 Z M30 51 V67 H46 C51 67, 55 64, 55 59 C55 54, 51 51, 46 51 H30 Z" />
            <path d="M83 5 C107 5, 125 21, 125 45 C125 68, 107 84, 83 84 C59 84, 41 68, 41 45 C41 21, 59 5, 83 5 Z M83 23 C71 23, 62 32, 62 45 C62 57, 71 66, 83 66 C95 66, 104 57, 104 45 C104 32, 95 23, 83 23 Z" />
            <path d="M136 5 H159 L178 40 L197 5 H220 L190 52 V84 H167 V52 L136 5 Z" />
            <path d="M232 5 H284 V22 L253 67 H286 V84 H230 V67 L262 22 H232 V5 Z" />
          </g>
        </g>

        {/* Torn paper border */}
        <path d={TORN_PAPER_BORDER_PATH} fill="#f4f4f0" fillRule="evenodd" />
        <circle cx="250" cy="250" r="238" stroke="#eaeaea" strokeWidth="4" strokeDasharray="18 4 8 2 12 5" fill="none" opacity="0.6" />
      </svg>
    </div>
  );
};

// 2. CENA CLASS BADGE (Exact reproduction of uploaded image)
export const CenaClassBadge: React.FC<BadgeProps> = ({ 
  size = 140, 
  className = '', 
  onClick,
  interactive = false 
}) => {
  return (
    <div 
      onClick={onClick}
      style={size ? { width: size, height: size } : undefined}
      className={`relative rounded-full select-none overflow-hidden ${interactive ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''} ${className}`}
    >
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="cc-dark-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e1e24" />
            <stop offset="70%" stopColor="#111116" />
            <stop offset="100%" stopColor="#08080a" />
          </radialGradient>

          {/* Gradients for community figures */}
          {/* Top-Left: Red-Orange */}
          <linearGradient id="fig-red" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          {/* Top-Right: Orange-Yellow */}
          <linearGradient id="fig-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          {/* Right: Green */}
          <linearGradient id="fig-green" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          {/* Bottom: Blue-Cyan */}
          <linearGradient id="fig-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          {/* Left: Purple */}
          <linearGradient id="fig-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>

        {/* 1. Dark Base */}
        <circle cx="250" cy="250" r="235" fill="url(#cc-dark-bg)" />

        {/* Paper crease shadows */}
        <path d="M90 140 Q220 220 380 180" stroke="rgba(255,255,255,0.03)" strokeWidth="18" fill="none" />
        <path d="M140 370 Q250 310 400 360" stroke="rgba(0,0,0,0.35)" strokeWidth="20" fill="none" />

        {/* 2. Ring of Stylized Figures Holding Hands (Prominent and Filling the Circle) */}
        <g id="community-ring">
          {/* Top-Left Figure (Coral/Red) */}
          <g>
            <circle cx="160" cy="115" r="24" fill="url(#fig-red)" />
            <path 
              d="M110 205 C115 155, 140 135, 195 130 C205 145, 190 170, 155 190 C140 215, 130 250, 120 280 C105 255, 100 230, 110 205 Z" 
              fill="url(#fig-red)" 
            />
            {/* Left Arm Connecting to Top-Right */}
            <path d="M190 130 Q245 135 295 145 C285 158 265 158 235 155 C205 152 195 145 190 130 Z" fill="url(#fig-red)" opacity="0.9" />
          </g>

          {/* Top-Right Figure (Orange/Yellow) */}
          <g>
            <circle cx="330" cy="115" r="24" fill="url(#fig-yellow)" />
            <path 
              d="M385 205 C380 155, 355 135, 300 130 C290 145, 305 170, 340 190 C355 215, 365 250, 375 280 C390 255, 395 230, 385 205 Z" 
              fill="url(#fig-yellow)" 
            />
            {/* Arm connecting down-right */}
            <path d="M375 240 Q410 280 415 325 C402 325 390 310 380 290 C370 270 372 250 375 240 Z" fill="url(#fig-yellow)" />
          </g>

          {/* Right Figure (Green) */}
          <g>
            <circle cx="410" cy="270" r="24" fill="url(#fig-green)" />
            <path 
              d="M405 270 C415 320, 395 365, 350 405 C335 390, 345 365, 360 330 C355 300, 350 260, 335 220 C360 225, 385 240, 405 270 Z" 
              fill="url(#fig-green)" 
            />
          </g>

          {/* Bottom Figure (Blue/Cyan Arch) */}
          <g>
            <path 
              d="M135 415 C190 460, 300 460, 360 415 C345 395, 310 425, 250 435 C190 425, 150 395, 135 415 Z" 
              fill="url(#fig-blue)" 
            />
          </g>

          {/* Left Figure (Purple/Magenta) */}
          <g>
            <circle cx="90" cy="270" r="24" fill="url(#fig-purple)" />
            <path 
              d="M95 270 C85 320, 105 365, 150 405 C165 390, 155 365, 140 330 C145 300, 150 260, 165 220 C140 225, 115 240, 95 270 Z" 
              fill="url(#fig-purple)" 
            />
          </g>
        </g>

        {/* 3. Center Clapperboard & Theater Mask */}
        <g id="center-clapperboard">
          {/* Angled Upper Clapper Stick */}
          <g transform="translate(160, 170) rotate(-16)">
            {/* Clapper Top Bar */}
            <rect x="0" y="0" width="165" height="34" rx="4" fill="#ffffff" />
            {/* Diagonal black zebra stripes */}
            <path d="M22 0 L40 34 H25 L7 0 Z" fill="#121217" />
            <path d="M57 0 L75 34 H60 L42 0 Z" fill="#121217" />
            <path d="M92 0 L110 34 H95 L77 0 Z" fill="#121217" />
            <path d="M127 0 L145 34 H130 L112 0 Z" fill="#121217" />
          </g>

          {/* Main Clapperboard Screen Body */}
          <g transform="translate(170, 235)">
            {/* White outline rounded box */}
            <rect 
              x="0" 
              y="0" 
              width="160" 
              height="115" 
              rx="12" 
              fill="#18181f" 
              stroke="#ffffff" 
              strokeWidth="7" 
            />

            {/* Play Button Triangle in Center */}
            <polygon 
              points="70,40 102,57 70,75" 
              fill="#ffffff" 
            />
          </g>

          {/* Theater Mask at Bottom (Comedy & Tragedy Split) */}
          <g transform="translate(250, 380)">
            {/* Mask Outline & Shape */}
            <path 
              d="M-42 -45 C-42 -65, 42 -65, 42 -45 C42 0, 30 40, 0 52 C-30 40, -42 0, -42 -45 Z" 
              fill="#ffffff" 
              stroke="#ffffff" 
              strokeWidth="4" 
            />

            {/* Left Half (Comedy Smile - White face with dark cutouts) */}
            <path 
              d="M-38 -42 C-38 -60, 0 -60, 0 -42 L0 48 C-25 36, -38 0, -38 -42 Z" 
              fill="#ffffff" 
            />
            {/* Left smiling eye */}
            <path d="M-26 -25 Q-17 -34 -8 -25" stroke="#121217" strokeWidth="4.5" fill="none" strokeLinecap="round" />
            {/* Left smile mouth */}
            <path d="M-28 5 Q-14 25 0 20" stroke="#121217" strokeWidth="5" fill="none" strokeLinecap="round" />

            {/* Right Half (Tragedy Sad - Dark face with white cutouts) */}
            <path 
              d="M0 -42 C0 -60, 38 -60, 38 -42 C38 0, 25 36, 0 48 Z" 
              fill="#121217" 
            />
            {/* Right sad eye */}
            <circle cx="18" cy="-22" r="5" fill="#ffffff" />
            {/* Right sad mouth */}
            <path d="M0 20 Q14 15 26 24" stroke="#ffffff" strokeWidth="4" fill="none" strokeLinecap="round" />
          </g>
        </g>

        {/* 4. Torn Paper White Circular Border */}
        <path d={TORN_PAPER_BORDER_PATH} fill="#f4f4f0" fillRule="evenodd" />
        <circle cx="250" cy="250" r="238" stroke="#eaeaea" strokeWidth="4" strokeDasharray="18 4 8 2 12 5" fill="none" opacity="0.6" />
      </svg>
    </div>
  );
};

// 3. CRISTINI MAKEUP BADGE (Exact reproduction of uploaded image)
export const CristiniMakeupBadge: React.FC<BadgeProps> = ({ 
  size = 140, 
  className = '', 
  onClick,
  interactive = false 
}) => {
  return (
    <div 
      onClick={onClick}
      style={size ? { width: size, height: size } : undefined}
      className={`relative rounded-full select-none overflow-hidden ${interactive ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''} ${className}`}
    >
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Exact Lilac / Vivid Purple Gradient matching uploaded image */}
          <radialGradient id="cr-lilac-bg" cx="45%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#c867f0" />
            <stop offset="60%" stopColor="#b650e2" />
            <stop offset="100%" stopColor="#9e39ce" />
          </radialGradient>
        </defs>

        {/* 1. Lilac Purple Circular Background */}
        <circle cx="250" cy="250" r="235" fill="url(#cr-lilac-bg)" />

        {/* Subtle crumpled paper creases */}
        <path d="M50 135 Q190 220 370 160" stroke="rgba(255,255,255,0.14)" strokeWidth="16" fill="none" />
        <path d="M110 380 Q250 310 420 370" stroke="rgba(0,0,0,0.18)" strokeWidth="20" fill="none" />
        <path d="M140 80 L220 250 L330 230 L400 420" stroke="rgba(255,255,255,0.08)" strokeWidth="8" fill="none" />

        {/* 2. Ultra-Tall Condensed "CRISTINI" in solid black (exact editorial typography from image) */}
        <g fill="#050507" className="select-none">
          {/* C */}
          <path d="M96 140 H68 C56 140 48 149 48 161 V339 C48 351 56 360 68 360 H96 V351 H69 C61 351 57 346 57 338 V162 C57 154 61 149 69 149 H96 Z" />

          {/* R */}
          <path d="M115 140 H124 V360 H115 Z" />
          <path d="M124 140 H145 C155 140 162 147 162 158 V230 C162 241 155 248 145 248 H124 V239 H144 C150 239 153 235 153 229 V159 C153 153 150 149 144 149 H124 Z" />
          <path d="M136 245 L162 360 H151 L126 248 Z" />

          {/* I (first) */}
          <rect x="180" y="140" width="8.5" height="220" rx="1" />

          {/* S */}
          <path d="M246 140 H218 C209 140 204 146 204 154 V228 C204 236 209 242 217 244 L237 249 C243 251 246 255 246 261 V346 C246 352 242 360 234 360 H204 V351 H233 C236 351 238 349 238 345 V262 C238 257 234 254 230 252 L210 247 C202 245 196 238 196 228 V155 C196 145 203 140 215 140 H246 Z" />

          {/* T */}
          <rect x="264" y="140" width="44" height="8.5" rx="1" />
          <rect x="281.5" y="148" width="8.5" height="212" rx="1" />

          {/* I (second) */}
          <rect x="325" y="140" width="8.5" height="220" rx="1" />

          {/* N */}
          <rect x="350" y="140" width="8.5" height="220" rx="1" />
          <path d="M352 140 H361 L396 354 V360 H387 L352 146 Z" />
          <rect x="388" y="140" width="8.5" height="220" rx="1" />

          {/* I (third) */}
          <rect x="418" y="140" width="8.5" height="220" rx="1" />
        </g>

        {/* 3. Fluid White Cursive Script "Makeup" (Exact Signature Calligraphy from Image) */}
        <g 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-[0_3px_8px_rgba(0,0,0,0.4)]"
        >
          {/* Continuous cursive stroke for M-a-k-e-u-p */}
          {/* Letter M: starts over C/R, two grand rounded loops */}
          <path d="M42 295 C45 280, 50 215, 68 208 C80 202, 85 240, 88 310 C92 312, 102 205, 118 200 C130 196, 136 240, 138 290" />
          
          {/* Connector to 'a' and oval of 'a' */}
          <path d="M138 290 C144 262, 162 258, 172 268 C178 274, 178 288, 170 294 C160 300, 146 295, 148 278 C150 262, 166 260, 176 264" />
          <path d="M174 262 V292 C174 292, 176 294, 184 286" />

          {/* Letter 'k': tall ascender loop soaring between R and I/S */}
          <path d="M184 286 C194 274, 206 195, 212 155 C215 140, 218 140, 212 165 C204 198, 198 255, 198 295" />
          {/* 'k' loop and leg */}
          <path d="M198 268 C206 256, 218 262, 214 274 C210 282, 204 286, 214 290 C220 292, 226 285, 230 274" />

          {/* Letter 'e' */}
          <path d="M230 274 C236 260, 248 260, 248 272 C248 284, 236 294, 228 290 C222 286, 224 276, 234 272" />
          
          {/* Letter 'u' */}
          <path d="M246 276 C255 264, 268 264, 268 284 C268 294, 276 295, 282 284 C286 274, 292 264, 298 264 C304 264, 304 280, 304 292 C304 292, 308 294, 318 282" />

          {/* Letter 'p': descender down, loop around, and long sweeping flourish to the right */}
          <path d="M318 282 C324 270, 332 258, 336 254 V375" />
          <path d="M336 296 C344 260, 368 262, 368 278 C368 292, 350 300, 338 298" />
          {/* Elegant sweeping exit tail of 'p' reaching past the final 'I' */}
          <path d="M366 280 C385 265, 415 250, 452 238" />
        </g>

        {/* 4. Torn Paper White Circular Border */}
        <path d={TORN_PAPER_BORDER_PATH} fill="#f4f4f0" fillRule="evenodd" />
        <circle cx="250" cy="250" r="238" stroke="#eaeaea" strokeWidth="4" strokeDasharray="18 4 8 2 12 5" fill="none" opacity="0.6" />
      </svg>
    </div>
  );
};

// 4. A SUA MARCA AQUI BADGE
export const YourBrandHereBadge: React.FC<BadgeProps> = ({ 
  size = 140, 
  className = '', 
  onClick,
  interactive = false 
}) => {
  return (
    <div 
      onClick={onClick}
      style={size ? { width: size, height: size } : undefined}
      className={`relative rounded-full select-none overflow-hidden ${interactive ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''} ${className}`}
    >
      <svg 
        viewBox="0 0 500 500" 
        className="w-full h-full drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="250" cy="250" r="235" fill="#14141b" />

        <g 
          fill="#ffffff" 
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
          textAnchor="middle"
        >
          <text x="250" y="200" fontSize="72" fontWeight="bold">A SUA</text>
          <text x="250" y="275" fontSize="72" fontWeight="bold">MARCA</text>
          <text x="250" y="350" fontSize="72" fontWeight="bold" fill="#e11d24">AQUI</text>
        </g>

        <path d={TORN_PAPER_BORDER_PATH} fill="#f4f4f0" fillRule="evenodd" />
        <circle cx="250" cy="250" r="238" stroke="#eaeaea" strokeWidth="4" strokeDasharray="18 4 8 2 12 5" fill="none" opacity="0.6" />
      </svg>
    </div>
  );
};
