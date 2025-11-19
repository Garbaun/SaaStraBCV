interface ScrollingMarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
}

export default function ScrollingMarquee({ text, speed = 30, direction = 'left' }: ScrollingMarqueeProps) {
  return (
    <div className="py-2 sm:py-3 md:py-4 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 border-y-2 sm:border-y-4 border-yellow-300 overflow-hidden">
      <div
        className={`whitespace-nowrap ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl pixel-text mx-2 sm:mx-4" style={{ color: '#00ff00' }}>
          🤖 {text} 🤖
        </span>
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl pixel-text mx-2 sm:mx-4" style={{ color: '#00ff00' }}>
          🤖 {text} 🤖
        </span>
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl pixel-text mx-2 sm:mx-4" style={{ color: '#00ff00' }}>
          🤖 {text} 🤖
        </span>
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl pixel-text mx-2 sm:mx-4" style={{ color: '#00ff00' }}>
          🤖 {text} 🤖
        </span>
      </div>
    </div>
  );
}
