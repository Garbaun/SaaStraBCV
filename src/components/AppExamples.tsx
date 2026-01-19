import { useEffect, useState, useMemo } from 'react';

interface AppExamplesProps {
  scrollY: number;
}

interface AppWindow {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function AppExamples({ scrollY }: AppExamplesProps) {
  const [windowPositions, setWindowPositions] = useState<number[]>([]);

  const apps = useMemo<AppWindow[]>(() => [
    {
      title: 'PIXEL PALETTE PRO',
      description: 'Piksel Sanatçılar İçin Bulut Tabanlı Renk Paleti Yöneticisi',
      icon: '🎨',
      color: 'border-pink-400'
    },
    {
      title: 'RETRO SYNC',
      description: '8-bit Müzik ve SFX Kütüphanesi',
      icon: '🎵',
      color: 'border-yellow-300'
    },
    {
      title: 'CODE QUEST',
      description: 'Indie Developerlar İçin Quest Tracker',
      icon: '⚔️',
      color: 'border-green-400'
    },
    {
      title: 'PIXEL PUSH',
      description: 'Retro Oyun Marketing Platformu',
      icon: '🚀',
      color: 'border-cyan-400'
    }
  ], []);

  const sectionStart = 2600;

  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 relative pt-32">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl text-center mb-16 sm:mb-24 md:mb-32 text-pink-400 pixel-text neon-text">
          UYGULAMA ÖRNEKLERİ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {apps.map((app, index) => {
            const itemProgress = Math.max(0, Math.min(1, (scrollY - sectionStart - index * 100) / 300));
            const fromLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`border-2 sm:border-4 ${app.color} bg-black transform transition-all duration-500`}
                style={{
                  transform: `translateX(${fromLeft ? (1 - itemProgress) * -200 : (1 - itemProgress) * 200}px)`,
                  opacity: itemProgress
                }}
              >
                <div className="bg-gray-800 px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-between border-b-2 border-current">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 pixel-text">APP.EXE</span>
                </div>

                <div className="p-3 sm:p-4 md:p-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl text-center mb-2 sm:mb-4">{app.icon}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl text-center mb-2 sm:mb-4 pixel-text">{app.title}</h3>
                  <p className="text-center text-green-400 pixel-text text-xs sm:text-sm mb-2 sm:mb-4">
                    {app.description}
                  </p>

                  <div className="border-2 border-current p-2 sm:p-3">
                    <div className="text-xs text-gray-500 mb-1 sm:mb-2 pixel-text">SYSTEM STATUS:</div>
                    <div className="flex justify-between text-xs pixel-text">
                      <span>USERS: {Math.floor(Math.random() * 5000 + 1000)}</span>
                      <span>MRR: ${Math.floor(Math.random() * 10000 + 2000)}</span>
                    </div>
                    <div className="mt-1 sm:mt-2 bg-gray-800 h-1 sm:h-2 rounded">
                      <div
                        className="bg-green-400 h-full rounded animate-pulse"
                        style={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }}
                      ></div>
                    </div>
                  </div>

                  <button className="w-full mt-2 sm:mt-4 border-2 border-current py-1 sm:py-2 hover:bg-current hover:text-black transition-colors pixel-text text-sm sm:text-base">
                    [ BAŞLAT ]
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
