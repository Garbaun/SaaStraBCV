import { useEffect, useState } from 'react';

interface TipsSectionProps {
  scrollY: number;
}

export default function TipsSection({ scrollY }: TipsSectionProps) {
  const [planePos, setPlanePos] = useState(100);

  const tips = [
    'CTRL+ALT+DEL = Başlangıç Maliyetlerini Düşür',
    'ESC+ENTER = Pivot Yapmayı Öğren',
    'SHIFT+SPACE = Müşteri Geri Bildirimlerini Dinle',
    'ALT+F4 = Korkularını Kapat, Başla!',
    'CTRL+S = Sürekli Kaydet (Verilerini Yedekle)',
    'F5 = Yenile ve Geliş!'
  ];

  useEffect(() => {
    const sectionStart = 1800; // Eski haline (1800) geri çekildi
    const progress = Math.max(0, Math.min(100, ((scrollY - sectionStart) / 10)));
    setPlanePos(100 - progress);
  }, [scrollY]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl text-center mb-16 text-pink-400 pixel-text neon-text">
          İPUÇLARI & HİLELER
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute top-0 text-4xl transition-all duration-100"
            style={{
              right: `${planePos}%`,
              transform: 'translateY(-50%)'
            }}
          >
            ✈️
          </div>

          <div className="space-y-6 mt-16">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="border-4 border-yellow-300 bg-black p-4 transform hover:scale-105 transition-transform cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">💾</span>
                  <div>
                    <div className="text-xs text-gray-500">CHEAT CODE #{index + 1}</div>
                    <p className="text-lg text-green-400 pixel-text">&gt; {tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 text-2xl text-cyan-400 pixel-text animate-pulse">
          ★ KONAMI CODE DETECTED ★
        </div>
      </div>
    </section>
  );
}
