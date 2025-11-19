import { useEffect, useState } from 'react';

// Özel yavaş smooth scroll fonksiyonu
function smoothScrollToTop() {
  const startPosition = window.pageYOffset;
  const duration = 2000; // 2 saniye süre
  let startTime: number | null = null;

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Ease-out fonksiyonu - sona doğru yavaşlar
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    window.scrollTo(0, startPosition * (1 - easeOut));
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}

export default function StatsSection() {
  const [visitors, setVisitors] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [feedback, setFeedback] = useState(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  useEffect(() => {
    const visitorInterval = setInterval(() => {
      setVisitors(prev => prev < 12345 ? prev + Math.floor(Math.random() * 100 + 50) : 12345);
    }, 100);

    const clickInterval = setInterval(() => {
      setClicks(prev => prev < 8765 ? prev + Math.floor(Math.random() * 50 + 25) : 8765);
    }, 150);

    const feedbackInterval = setInterval(() => {
      setFeedback(prev => prev < 4321 ? prev + Math.floor(Math.random() * 30 + 15) : 4321);
    }, 200);

    return () => {
      clearInterval(visitorInterval);
      clearInterval(clickInterval);
      clearInterval(feedbackInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="border-8 border-yellow-300 bg-black p-8">
          <h2 className="text-4xl md:text-6xl text-center mb-12 text-pink-400 pixel-text neon-text">
            ═══ saastra İSTATİSTİKLERİ ═══
          </h2>

          <div className="border-4 border-green-400 bg-gray-900 p-8 mb-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-cyan-400 pb-4">
                <span className="text-xl text-cyan-400 pixel-text">🚀 GİREN UZAY PİLOTU SAYISI:</span>
                <span className="text-3xl text-yellow-300 pixel-text font-bold">{visitors.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center border-b-2 border-cyan-400 pb-4">
                <span className="text-xl text-cyan-400 pixel-text">💎 BONUS LİNKLERE TIKLAYANLAR:</span>
                <span className="text-3xl text-yellow-300 pixel-text font-bold">{clicks.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center border-b-2 border-cyan-400 pb-4">
                <span className="text-xl text-cyan-400 pixel-text">⭐ GALİBİYET VEREN FEEDBACK\'LER:</span>
                <span className="text-3xl text-yellow-300 pixel-text font-bold">{feedback.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-4xl mb-2">🏆</div>
                <div className="text-sm text-green-400 pixel-text">HIGH SCORE</div>
              </div>
              <div>
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-sm text-green-400 pixel-text">POWER-UP</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🎮</div>
                <div className="text-sm text-green-400 pixel-text">LEVEL UP</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowFeedbackForm(!showFeedbackForm)}
              className="w-full border-4 border-pink-400 bg-black py-4 hover:bg-pink-400 hover:text-black transition-colors pixel-text text-xl animate-pulse"
            >
              {showFeedbackForm ? '[ KAPAT ]' : '[ GERİ BİLDİRİM BIRAK ]'}
            </button>

            {showFeedbackForm && (
              <div className="mt-4 border-4 border-cyan-400 bg-black p-6 animate-fade-in">
                <p className="text-center text-xl text-yellow-300 mb-4 pixel-text">
                  ★ YORUMLARINIZ BİZİM İÇİN YÜKSEK PUAN DEMEKTİR! ★
                </p>
                <textarea
                  className="w-full bg-gray-900 border-2 border-green-400 text-green-400 p-4 pixel-text resize-none"
                  rows={4}
                  placeholder="> MESAJINIZI GİRİN..."
                />
                <button className="w-full mt-4 border-2 border-green-400 bg-black text-green-400 py-3 hover:bg-green-400 hover:text-black transition-colors pixel-text">
                  [ GÖNDER ]
                </button>
              </div>
            )}
          </div>

          <div className="mt-8 text-center">
            <p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-400 pixel-text animate-pulse cursor-pointer hover:text-cyan-400 transition-colors duration-300 transform hover:scale-105 px-2"
              onClick={smoothScrollToTop}
              style={{ userSelect: 'none', wordBreak: 'break-word' }}
            >
              ▂▃▅▇█▓▒░ GAME OVER? NO! PRESS START! ░▒▓█▇▅▃▂
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
