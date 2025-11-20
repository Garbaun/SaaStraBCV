import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import WhyMicroSaaS from './components/WhyMicroSaaS';
import TipsSection from './components/TipsSection';
import IdeaBox from './components/IdeaBox';
import AppExamples from './components/AppExamples';
import StatsSection from './components/StatsSection';
import ScrollingMarquee from './components/ScrollingMarquee';
// import EasterEgg from './components/EasterEgg';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-cyan-400 overflow-x-hidden font-mono">
      <div className="fixed inset-0 bg-black z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 255, 0.03) 3px)',
          backgroundSize: '100% 4px'
        }} />
      </div>

      <div className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <ScrollingMarquee text="SAAS NEDİR? NASIL KULLILIR? • BAŞARI GARANTİLİ İPUÇLARI! • GELECEĞİN YILDIZLARI İÇİN!" speed={30} />
        <WhyMicroSaaS scrollY={scrollY} />
        <ScrollingMarquee text="MICRO-SAAS = BÜYÜK FIRSATLAR • DÜŞÜK MALİYET = YÜKSEK KARLILIK • NİŞ ODAK = BAŞARI!" speed={25} direction="right" />
        <TipsSection scrollY={scrollY} />
        <IdeaBox scrollY={scrollY} />
        <ScrollingMarquee text="UYGULAMALAR YÜKLENİYOR... • SİSTEM HAZIR • BAŞLAT!" speed={35} />
        <AppExamples scrollY={scrollY} />
        <StatsSection />
        {/* <EasterEgg /> */}
      </div>
    </div>
  );
}

export default App;
