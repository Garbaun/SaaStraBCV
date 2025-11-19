import { useEffect, useState } from 'react';

export default function Header() {
  const [glitchOffset, setGlitchOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchOffset(Math.random() > 0.95 ? Math.random() * 4 - 2 : 0);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative py-4 sm:py-6 md:py-8 border-b-4 border-cyan-400">
      <div className="container mx-auto px-2 sm:px-4">
        <h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-2 sm:mb-4 pixel-text neon-text"
          style={{
            transform: `translate(${glitchOffset}px, 0)`,
          }}
        >
          <span style={{ color: '#00ffff', textShadow: '2px 2px 0 #ff00ff, -2px -2px 0 #ff0080' }}>sa</span><span style={{ color: '#ff00ff', textShadow: '2px 2px 0 #00ffff, -2px -2px 0 #ffff00' }}>astra</span>
        </h1>
        <div className="overflow-hidden bg-gradient-to-r from-transparent via-pink-500 to-transparent py-1 sm:py-2">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-lg sm:text-xl md:text-2xl text-yellow-300 mx-4 sm:mx-8">
              ★ MİCRO-SAAS & SAAS REHBERİN - BAŞARILI OLMANIN 8-BİT YOLU! ★
            </span>
            <span className="text-lg sm:text-xl md:text-2xl text-yellow-300 mx-4 sm:mx-8">
              ★ MİCRO-SAAS & SAAS REHBERİN - BAŞARILI OLMANIN 8-BİT YOLU! ★
            </span>
            <span className="text-lg sm:text-xl md:text-2xl text-yellow-300 mx-4 sm:mx-8">
              ★ MİCRO-SAAS & SAAS REHBERİN - BAŞARILI OLMANIN 8-BİT YOLU! ★
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
