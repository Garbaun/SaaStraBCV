import { useEffect, useState } from 'react';

interface IdeaBoxProps {
  scrollY: number;
}

// Google Sheets'ten çekilecek Micro-SaaS fikirleri (mock data)
const microSaaSIdeas = [
  // Orijinal 30 fikir
  '🐱 Kediler İçin AI Destekli Yiyecek Takip Sistemi',
  '🎮 8-bit Font Üretici SaaS',
  '🍕 Pizza Siparişi Tahmin Motoru',
  '🌙 Uyku Kalitesi Optimize Edici (Gamerlar İçin)',
  '🎵 Retro Müzik Playlist Jeneratörü',
  '🤖 Discord Bot Fabrikası',
  '📊 Micro-SaaS Fikir Doğrulayıcı',
  '🎨 Piksel Sanatçılar İçin Renk Paleti Yöneticisi',
  '⌨️ Mekanik Klavye Ses Simülatörü SaaS',
  '🚀 Indie Hacker Motivasyon Tracker\'ı',
  '📱 TikTok İçin Hashtag Analiz Aracı',
  '🎯 Küçük İşletmeler İçin CRM SaaS',
  '📝 Blog Yazısı SEO Optimizasyon Aracı',
  '🎨 Logo Tasarım AI Destekli Platform',
  '📧 E-posta Kampanya A/B Test Aracı',
  '💰 Fiyatlandırma Stratejisi Optimizatörü',
  '📊 Anket Analiz ve Raporlama Aracı',
  '🌐 Website Hız Test ve Optimizasyon Aracı',
  '📅 Sosyal Medya İçerik Takvimi Oluşturucu',
  '🎮 Oyun İçi Ekonomi Takip Sistemi',
  '📈 Kripto Portföy Takip Uygulaması',
  '🍳 Tarif Maliyet Hesaplama Aracı',
  '🏃 Kişisel Fitness İlerleme Takipçisi',
  '📚 E-kitap Okuma İlerleme Analiz Aracı',
  '🎵 Spotify Playlist Analiz ve Öneri Aracı',
  '🌤️ Hava Durumu Bazlı Etkinlik Planlayıcı',
  '📝 CV ve Özgeçmiş Analiz Aracı',
  '🎯 Hedef Takip ve Motivasyon Uygulaması',
  '💡 Yaratıcı Yazım Prompt Jeneratörü',
  '📊 Excel Formül Oluşturucu ve Açıklayıcı',
  
  // Kullanıcıdan gelen yeni 30 fikir (AI Destekli Araçlar - 7 adet)
  '🛍️ E-Ticaret İçin Arka Plan Temizleyici (Bulk Remover)',
  '📺 YouTube "Hook" (Kanca) Yazarı',
  '🔍 Yazılımcılar İçin "Regex" Çevirici',
  '🎙️ Podcast Ses İyileştirici (Audio Enhancer)',
  '🧵 Tweet\'ten LinkedIn Carousel\'ına Dönüştürücü',
  '📝 Blog\'dan Tweet Zinciri Oluşturucu',
  '🎁 Hediye Öneri Botu',
  '🖼️ Logo & Favicon Vektörleştirici',
  
  // Sosyal Medya & İçerik (6 adet)
  '📊 YouTube Thumbnail A/B Test Simülatörü',
  '📄 Influencer "Medya Kiti" Oluşturucu',
  '🎬 Otomatik Altyazı ve "Highlight" Kesici',
  '🔗 Biyografi Linki - Podcast Özel',
  '🔄 Eski İçerik Hatırlatıcısı (Repurpose Tool)',
  
  // Finans & Kripto (3 adet)
  '💼 Freelancer Vergi ve Gelir Hesaplayıcı',
  '🔍 Unutulan Abonelik Bulucu',
  '🐋 NFT/Token "Balina" Alarmı',
  
  // Üretkenlik Araçları (5 adet)
  '🌐 Tarayıcı Sekme (Tab) Uyutucu',
  '⏱️ Toplantı Maliyet Sayacı (Meeting Ticker)',
  '📸 Ekran Görüntüsü Güzelleştirici (Beautifier)',
  '🚩 Sözleşme "Kırmızı Bayrak" Tarayıcısı',
  '🔒 Focus Modu & Site Engelleyici',
  
  // Eğlence & Gaming (4 adet)
  '📈 Twitch Chat Duygu Analizi',
  '🎲 FRP/DnD Karakter Kağıdı Oluşturucu',
  '🎮 Oyun Koleksiyonu Takipçisi (Backlog)',
  '🎵 Spotify Playlist "Mood" Analizörü',
  
  // Niche Araçlar (5 adet)
  '🌱 Bitki Sulama Takvimi (Lokasyon Bazlı)',
  '☕ Kahve Demleme Hesaplayıcı (V60/Aeropress)',
  '💒 Düğün Masası Oturma Planlayıcısı',
  '⌨️ Klavye Mekanik Ses Simülatörü (ASMR)',
  '🍕 Pizza Hamuru Hesaplayıcı',
  
  // Kullanıcıdan gelen son 66 fikir
  // AI & Metin Tabanlı Araçlar (15 Adet)
  '💭 Rüya Yorumcusu AI',
  '📧 Soğuk E-posta (Cold Mail) Isıtıcısı',
  '📜 Eski Türkçe Çevirmeni',
  '💬 Kod Yorumlayıcı (Comment Generator)',
  '💍 Düğün Davetiyesi Sözü Yazarı',
  '🎵 Şarkı Sözü Üretici',
  '🎯 Clickbait Başlık Düzeltici',
  '🧸 Çocuk Masalı Kişiselleştirici',
  '🔍 SEO Meta Tag Oluşturucu',
  '🤥 Mazeret Üretici',
  '😎 Emoji Tercümanı',
  '🍳 Yemek Tarifi "Remix"leyici',
  '📖 Kitap Arka Kapak Yazarı',
  '🕊️ Twitter Tartışma Bitirici',
  '🎁 Hediye Notu Yazarı',
  
  // Görsel, Tasarım & Medya (12 Adet)
  '🚫 Ekran Görüntüsü Sansürleyici',
  '🖼️ Profil Resmi Çerçeveleyici',
  '📱 App Store Screenshot Oluşturucu',
  '🎨 Renk Paleti Çıkarıcı',
  '💧 Filigran (Watermark) Ekle/Kaldır',
  '😂 Meme (Caps) Üretici',
  '🎨 QR Kod Sanatçısı',
  '🖥️ Favicon Dönüştürücü',
  '🔤 Font Eşleştirici',
  '📺 YouTube Banner Yapıcı',
  '🔄 SVG Desen (Pattern) Oluşturucu',
  '🖤 Eski Fotoğraf Renklendirici API',
  
  // Yazılımcı & Webmaster Araçları (13 Adet)
  '🔄 JSON to CSV Dönüştürücü',
  '🙈 .gitignore Oluşturucu',
  '⏰ Cron Job Zamanlayıcı',
  '📝 Lorem Ipsum (Türkçe)',
  '⚡ Site Hızı Karşılaştırıcı',
  '🌐 CSS Gölge (Box-Shadow) Yapıcı',
  '📋 Meta Tag Önizleyici',
  '🔌 Port Müsaitlik Kontrolü',
  '🔒 SSL Sertifika Hatırlatıcısı',
  '📡 Public API Bulucu',
  '📝 Markdown Editörü (Canlı)',
  '📍 IP Adresi ve Lokasyon Gösterici',
  '🌐 Browser Uyumluluk Kontrolü',
  
  // Pazarlama & Sosyal Medya (12 Adet)
  '🔗 UTM Link Oluşturucu ve Saklayıcı',
  '💰 Influencer Fiyat Hesaplayıcı',
  '#️⃣ Hashtag Kümesi Oluşturucu',
  '🎰 Çekiliş Yapıcı (Basit)',
  '🔗 Bio Link (Tek Sayfa)',
  '💼 LinkedIn "Hakkımda" Yazarı',
  '📥 Tweet Arşivleyici',
  '🎵 TikTok Trend Müzik Bulucu',
  '📺 Rakip Reklam Ajanı',
  '📧 E-posta İmza Oluşturucu',
  '🎙️ Podcast İsim Önerici',
  '📱 Whatsapp Link Oluşturucu',
  
  // Finans, E-Ticaret & Kripto (12 Adet)
  '💳 KDV Tevkifat Hesaplayıcı',
  '📊 SaaS Churn (Kayip) Hesaplayıcı',
  '💱 Döviz Çevirici (Geçmiş Tarihli)',
  '🛒 Shopify İndirim Hesaplayıcı',
  '💳 Kredi Kartı Taksit Hesaplayıcı',
  '⛽ Crypto "Gas Fee" Alarmı',
  '📄 Fatura Kesme Aracı (Micro)',
  '🏦 IBAN Doğrulayıcı ve Banka Bulucu',
  '🏪 E-Ticaret Ürün Açıklaması HTML Temizleyici',
  '📈 Yatırım Bileşik Getiri Hesaplayıcı',
  '💵 Freelance Saatlik Ücret Hesaplayıcı',
  '📦 Amazon FBA Kar Hesaplayıcı',
  
  // Eğitim & Öğrenci (10 Adet)
  '📚 APA/MLA Kaynakça Oluşturucu',
  '📊 Not Ortalaması (GANO) Hesaplayıcı',
  '🍅 Pomodoro Sayaç (Özelleştirilebilir)',
  '📄 PDF Sayfa Ayırıcı/Birleştirici',
  '🃏 Flashcard (Bilgi Kartı) Yapıcı',
  '🎤 Sunum Süresi Hesaplayıcı',
  '📖 Kelime Sayacı ve Okuma Süresi',
  '📅 Sınav Takvimi Oluşturucu',
  '📚 Ders Programı Tablosu Yapıcı',
  '🔍 Plagiarism (İntihal) Kontrolü (Basit)',
  
  // Yaşam, Sağlık & Spor (10 Adet)
  '💧 Su İçme Hatırlatıcısı (Web)',
  '🏃 Vücut Kitle İndeksi (BMI) Görselleştirici',
  '🥗 Makro Besin Hesaplayıcı',
  '🌸 Adet Takvimi (Gizlilik Odaklı)',
  '👶 Bebek İsim Bulucu',
  '🚭 Sigara Bırakma Sayacı',
  '🏃 Koşu Temposu (Pace) Hesaplayıcı',
  '🧘 Meditasyon Nefes Balonu',
  '💊 İlaç Takip Çizelgesi',
  '😴 Uyku Döngüsü Hesaplayıcı',
  
  // Hobi, Niş & Diğer (16 Adet)
  '⚽ Halısaha Kadro Kurucu',
  '🧳 Seyahat Bavul Listesi',
  '📺 Film/Dizi "Hangi Bölümde Kaldım?"',
  '🐠 Akvarist Su Değişim Takibi',
  '🎸 Gitar Akor Bulucu',
  '🍳 Mutfak Dönüştürücü',
  '🐱 Kedi Yaşı Hesaplayıcı',
  '♈ Burç Uyumu (Basit)',
  '🎲 Rastgele Karar Çarkı',
  '📝 Alışveriş Listesi (Paylaşılabilir)',
  '🌐 İnternet Hız Testi (Basit)',
  '🕐 Saat Farkı Bulucu',
  '••• Mors Alfabesi Çevirici',
  '📝 Kelime Oyunu Yardımcısı',
  '🎲 Zar At (Dice Roller)',
  '⏱️ Kronometre ve Geri Sayım'
];

export default function IdeaBox({ scrollY }: IdeaBoxProps) {
  const [boxPosition, setBoxPosition] = useState(100);
  const [displayedIdeas, setDisplayedIdeas] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null);

  const getIdeaDescription = (idea: string) => {
    const name = idea.replace(/^([\p{Emoji}\p{Extended_Pictographic}]+\s*)/u, '');
    return `${name} fikrinin prototipini hızlıca doğrulamak için küçük bir MVP geliştir, hedef kullanıcıları belirle ve geri bildirim topla. Monetizasyon için basit bir abonelik veya tek seferlik satın alma modeli değerlendirilir.`;
  };

  // İlk yüklemede 10 random fikir göster
  useEffect(() => {
    generateRandomIdeas();
  }, []);

  useEffect(() => {
    const sectionStart = 1400;
    const sectionEnd = 2000;
    const progress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
    setBoxPosition(100 - (progress * 100));
  }, [scrollY]);

  // Random fikir üretme fonksiyonu - 126 fikir arasından 10 seçer
  const generateRandomIdeas = () => {
    setIsGenerating(true);
    
    // 2 saniye thinking efekti
    setTimeout(() => {
      const shuffled = [...microSaaSIdeas].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 12);
      setDisplayedIdeas(selected);
      setIsGenerating(false);
    }, 2000); // 2 saniye thinking süresi
  };

  

  return (
    <section className="min-h-screen flex items-center justify-center py-12 relative overflow-hidden mb-32">
      <div
        className="container mx-auto px-4 transition-transform duration-300"
        style={{
          transform: `translateY(${boxPosition}%)`
        }}
      >
        <div className="border-8 border-purple-500 bg-black p-8 max-w-6xl mx-auto">
          <div className="border-4 border-pink-400 p-6">
            <h2 className="text-4xl md:text-6xl text-center mb-8 text-yellow-300 pixel-text neon-text">
              ░▒▓ FİKİR KUTUSU ▓▒░
            </h2>
            <p className="text-center text-2xl text-cyan-400 mb-8 pixel-text transition-all duration-300">
              {isGenerating ? '💭 THINKING...' : 'YENİ PROJE KULUÇKASI'}
            </p>

            <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-300 ${isGenerating ? 'opacity-50 animate-pulse' : 'opacity-100'}`}>
              {displayedIdeas.map((idea, index) => (
                <div
                  key={`${idea}-${index}`}
                  className={`border-2 border-green-400 bg-gray-900 p-4 hover:bg-gray-800 transition-all cursor-pointer group transform hover:scale-105 ${
                    isGenerating ? 'animate-bounce' : ''
                  }`}
                  style={{
                    animationDelay: isGenerating ? `${index * 0.1}s` : '0s'
                  }}
                  onClick={() => !isGenerating && setSelectedIdea(idea)}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-300 group-hover:animate-spin">●</span>
                    <p className="text-sm text-green-400 pixel-text flex-1">{idea}</p>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 pixel-text">
                    &gt; FEASIBILITY: {Math.floor(Math.random() * 30 + 70)}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={generateRandomIdeas}
                disabled={isGenerating}
                className={`inline-block border-4 border-yellow-300 px-8 py-4 cursor-pointer hover:bg-yellow-300 hover:text-black transition-all duration-300 transform hover:scale-105 ${
                  isGenerating 
                    ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                    : 'bg-black text-yellow-300 animate-pulse'
                }`}
              >
                <span className="text-2xl pixel-text">
                  {isGenerating ? '[ FİKİRLER OLUŞTURULUYOR... ]' : '[ RANDOM FİKİR GENERATE ET ]'}
                </span>
              </button>
              
              {isGenerating && (
                <div className="mt-4 text-green-400 pixel-text animate-pulse">
                  ▂▃▅▇█▓▒░ YENİ FİKİRLER OLUŞTURULUYOR... ░▒▓█▇▅▃▂
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedIdea && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full border-8 border-cyan-400 bg-black shadow-xl">
            <div className="border-b-4 border-cyan-400 bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="text-cyan-400 pixel-text text-lg">PROJE KULUÇKASI</div>
              <button className="border-2 border-cyan-400 px-3 py-1 text-cyan-400 hover:bg-cyan-400 hover:text-black transition" onClick={() => setSelectedIdea(null)}>[ KAPAT ]</button>
            </div>
            <div className="p-6">
              <div className="text-green-400 pixel-text text-xl mb-3">{selectedIdea}</div>
              <div className="text-sm text-gray-300 pixel-text leading-relaxed">
                {getIdeaDescription(selectedIdea)}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs pixel-text">
                <div className="border-2 border-cyan-400 p-3">
                  <div className="text-gray-400">HEDEF KİTLE</div>
                  <div className="text-green-400">Niş kullanıcılar</div>
                </div>
                <div className="border-2 border-cyan-400 p-3">
                  <div className="text-gray-400">MVP SÜRESİ</div>
                  <div className="text-green-400">2-3 hafta</div>
                </div>
                <div className="border-2 border-cyan-400 p-3">
                  <div className="text-gray-400">GELİR MODELİ</div>
                  <div className="text-green-400">Aylık abonelik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
