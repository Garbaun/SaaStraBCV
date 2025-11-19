interface WhyMicroSaaSProps {
  scrollY: number;
}

export default function WhyMicroSaaS({ scrollY }: WhyMicroSaaSProps) {
  const benefits = [
    { title: 'DÜŞÜK MALİYET', desc: 'Başlangıç masrafları minimal!' },
    { title: 'NİŞ ODAK', desc: 'Belirli bir kitleye hitap et!' },
    { title: 'ESNEKLİK', desc: 'Hızlı pivotlar ve güncellemeler!' },
    { title: 'PASIF GELİR', desc: 'Abonelik modeli ile sürekli kazanç!' }
  ];

  const sectionStart = 800;
  const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / 500));

  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-2 sm:px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl text-center mb-8 sm:mb-12 md:mb-16 text-pink-400 pixel-text neon-text">
          NEDEN MİCRO-SAAS?
        </h2>

        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <div
            className="text-4xl sm:text-6xl md:text-8xl transition-transform duration-1000"
            style={{
              transform: `translateY(${(1 - progress) * -200}px) rotate(${progress * 360}deg)`,
              opacity: progress
            }}
          >
            🚀
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const itemProgress = Math.max(0, Math.min(1, (scrollY - sectionStart - index * 100) / 300));
            return (
              <div
                key={index}
                className="border-2 sm:border-4 border-green-400 bg-black p-4 sm:p-6 transform transition-all duration-500"
                style={{
                  transform: `translateX(${(1 - itemProgress) * (index % 2 === 0 ? -100 : 100)}px)`,
                  opacity: itemProgress
                }}
              >
                <div className="text-xs text-gray-500 mb-1 sm:mb-2">█▓▒░ TERMINAL_{index + 1} ░▒▓█</div>
                <h3 className="text-lg sm:text-xl md:text-2xl text-yellow-300 mb-1 sm:mb-2 pixel-text">&gt; {benefit.title}</h3>
                <p className="text-cyan-400 pixel-text text-sm sm:text-base">{benefit.desc}</p>
                <div className="mt-2 sm:mt-4 text-green-400 pixel-text text-sm sm:text-base">[ ✓ AKTIF ]</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
