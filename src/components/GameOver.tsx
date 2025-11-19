import { useState } from 'react';

export default function GameOver() {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Matrix tarzı arka plan efekti */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 255, 255, 0.03) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 255, 255, 0.03) 3px
          )`,
          backgroundSize: '100% 4px'
        }} />
      </div>
      
      <div className="relative z-10 text-center">
        <div 
          className={`cursor-pointer transition-all duration-300 transform ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToTop}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-red-500 mb-4 tracking-wider animate-pulse">
            GAME OVER
          </h1>
          
          <div className="text-cyan-400 text-xl md:text-2xl mb-8 font-mono">
            [ TIKLA VE BAŞA DÖN ]
          </div>
          
          {/* Retro bilgisayar ikonu */}
          <div className="text-6xl mb-4 animate-bounce">
            💻
          </div>
          
          {/* Altında yanan efekt çizgileri */}
          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-16 h-1 bg-red-500 animate-pulse"></div>
            <div className="w-16 h-1 bg-cyan-400 animate-pulse delay-75"></div>
            <div className="w-16 h-1 bg-red-500 animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
      
      {/* Köşe dekorumları */}
      <div className="absolute top-4 left-4 text-cyan-400 text-sm font-mono">
        &gt; SYSTEM READY
      </div>
      <div className="absolute top-4 right-4 text-red-500 text-sm font-mono">
        ERROR: 0x0000
      </div>
      <div className="absolute bottom-4 left-4 text-cyan-400 text-sm font-mono">
        &gt; RESTARTING...
      </div>
      <div className="absolute bottom-4 right-4 text-red-500 text-sm font-mono">
        REBOOT SEQUENCE
      </div>
    </div>
  );
}