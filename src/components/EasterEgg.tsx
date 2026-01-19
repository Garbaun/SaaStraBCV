import { useEffect, useState } from 'react';

export default function EasterEgg() {
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);
  const targetSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.key].slice(-10);
      setKonamiCode(newCode);

      if (newCode.join(',') === targetSequence.join(',')) {
        setActivated(true);
        setTimeout(() => setActivated(false), 5000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode]);

  if (!activated) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center pointer-events-none">
      <div className="border-8 border-rainbow bg-black p-12 animate-bounce pointer-events-auto">
        <div className="text-6xl text-center mb-4">🎮</div>
        <h2 className="text-4xl text-center text-yellow-300 pixel-text neon-text mb-4">
          ★ KONAMI CODE ACTIVATED! ★
        </h2>
        <p className="text-2xl text-center text-pink-400 pixel-text">
          +30 LIVES UNLOCKED!
        </p>
        <p className="text-xl text-center text-cyan-400 pixel-text mt-4">
          GİZLİ MESAJ: ASLA PES ETME, INDIE HACKER!
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <div className="w-6 h-6 bg-red-500 animate-spin"></div>
          <div className="w-6 h-6 bg-green-500 animate-spin" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-6 h-6 bg-blue-500 animate-spin" style={{ animationDelay: '0.4s' }}></div>
          <div className="w-6 h-6 bg-yellow-500 animate-spin" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
}
