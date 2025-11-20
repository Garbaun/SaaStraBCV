import { useEffect, useState } from 'react';
const crtImageUrl = new URL('../assets/image/commodore-crt.png', import.meta.url).href;
const keyboardImageUrl = new URL('../assets/image/keyboard.png', import.meta.url).href;

interface HeroSectionProps {
  scrollY: number;
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const [textVisible, setTextVisible] = useState(true);
  const [scanlineOffset, setScanlineOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scanlineInterval = setInterval(() => {
      setScanlineOffset(prev => (prev + 1) % 4);
    }, 100);
    return () => clearInterval(scanlineInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden" style={{
      transform: `translateY(${scrollY * 0.3}px)`
    }}>
      {/* CRT Scanline efekti */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 0, 0, 0.4) 3px
          )`,
          backgroundSize: `100% 3px`,
          transform: `translateY(${scanlineOffset}px)`
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40" />
      </div>

      {/* Dekoratif pixel karakterler */}
      <div className="absolute left-4 sm:left-8 md:left-16 top-1/4 text-4xl sm:text-6xl animate-pulse" style={{ color: '#ff00ff' }}>
        👾
      </div>
      <div className="absolute right-4 sm:right-8 md:right-16 top-1/3 text-4xl sm:text-6xl animate-bounce" style={{ color: '#00ffff', animationDelay: '0.5s' }}>
        🛸
      </div>
      <div className="absolute left-8 sm:left-16 md:left-32 bottom-1/4 text-3xl sm:text-5xl animate-pulse" style={{ color: '#ffff00', animationDelay: '1s' }}>
        🚀
      </div>
      <div className="absolute right-8 sm:right-16 md:right-32 bottom-1/3 text-3xl sm:text-5xl animate-bounce" style={{ color: '#ff0080', animationDelay: '1.5s' }}>
        💎
      </div>

      {/* Ana CRT Monitör Container - Özel Görsel İçin - DAHA YUKARI */}
      <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-4" style={{ marginTop: '-5rem' }}>
        {/* Monitor çerçevesi - SADECE Görsel */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Özel CRT Görseli - TEK BAŞINA - %20 KÜÇÜLTÜLMÜŞ */}
          <img 
            src={crtImageUrl} 
            alt="Commodore CRT Monitor" 
            className="w-4/5 h-auto object-contain mx-auto"
            style={{
              filter: 'contrast(1.2) saturate(1.3) brightness(0.95)',
              imageRendering: 'pixelated'
            }}
          />
          
          {/* Klavye Görseli - CRT'nin hemen altında */}
          <img 
            src={keyboardImageUrl} 
            alt="Retro Keyboard" 
            className="w-4/5 h-auto object-contain mx-auto"
            style={{
              filter: 'contrast(1.1) saturate(1.2) brightness(0.9)',
              imageRendering: 'pixelated',
              marginTop: '10px'
            }}
          />
          
          {/* Ekran içeriği - Görselin üstünde */}
          <div className="absolute inset-0 flex items-start justify-center pt-36">
            {/* Ekran alanı - Daha büyük ve orantılı */}
            <div className="relative w-5/6 h-3/5 flex flex-col items-center justify-start mt-1">
              {/* CRT içeriği */}
              <div className="text-center relative mb-6 sm:mb-10">
                {/* Glowing efekt */}
                <div className={`transition-opacity duration-500 ${textVisible ? 'opacity-100' : 'opacity-80'}`}>
                  {/* Başlık - DAHA BÜYÜK */}
                  <div className="mb-4 sm:mb-6 animate-crt-glow">
                    <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3 text-green-400 pixel-text font-bold">
                      MICRO-SAAS
                    </p>
                    <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 text-green-400 pixel-text font-bold">
                      DÜNYASINA
                    </p>
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-green-400 pixel-text font-bold animate-pulse">
                      HOŞ GELDİNİZ!
                    </p>
                  </div>

                  {/* Loading çubuğu - DAHA BÜYÜK */}
                  <div className="max-w-sm md:max-w-md mx-auto mb-3 sm:mb-5">
                    <div className="bg-gray-800 h-3 sm:h-4 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full animate-pulse" style={{ width: '85%' }} />
                    </div>
                    <p className="text-sm md:text-base text-green-400 mt-2 font-mono animate-pulse">
                      ▂▃▅▇█▓▒░LOADING...░▒▓█▇▅▃▂
                    </p>
                  </div>

                  {/* System Ready - DAHA BÜYÜK */}
                  <div className="text-green-400 text-sm md:text-base font-mono">
                    <span className="animate-pulse text-lg">&gt;</span> SYSTEM READY
                  </div>
                </div>
              </div>

              {/* Kursor - DAHA BÜYÜK */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-400 animate-pulse rounded-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Alt başlık - DAHA BÜYÜK */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-400 pixel-text font-bold animate-pulse animate-crt-glow">
            NEDEN MICRO-SAAS?
          </p>
        </div>
      </div>

      {/* Dekoratif kenar elementleri */}
      <div className="absolute top-4 left-4 text-xs sm:text-sm text-gray-600 font-mono">
        <div>SYSTEM=ATARI</div>
        <div>STATUS=ONLINE</div>
      </div>
      <div className="absolute top-4 right-4 text-xs sm:text-sm text-gray-600 font-mono text-right">
        <div>VERSION=2024</div>
        <div>BUILD=RETRO</div>
      </div>

      {/* Ek scanline efekti görsel üzerinde - DAHA OPAK */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(0, 255, 0, 0.05) 0px,
            transparent 1px,
            transparent 2px,
            rgba(0, 255, 0, 0.05) 3px
          )`,
          backgroundSize: `100% 2px`,
          mixBlendMode: 'screen'
        }} />
      </div>
    </section>
  );
}
