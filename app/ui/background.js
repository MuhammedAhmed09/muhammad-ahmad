export default function ModernBubbleBackground() {
  const bubbles = Array.from({ length: 25 }).map((_, i) => {
    const size = Math.random() * 70 + 20; // 20px - 90px
    const left = Math.random() * 100; // 0% - 100%
    const delay = Math.random() * 20; // 0s - 20s
    const duration = 15 + Math.random() * 20; // 15s - 35s
    const colorClass = i % 2 === 0 ? "bubble-cyan" : "bubble-orange";
    return { size, left, delay, duration, colorClass };
  });

  return (
    <div className="modern-bubble-bg">
      {/* Bubbles */}
      {bubbles.map((b, i) => (
        <span
          key={i}
          className={`modern-bubble ${b.colorClass}`}
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            animation: `floatModern ${b.duration}s linear ${b.delay}s infinite`,
          }}
        ></span>
      ))}

      {/* Thin scanlines overlay */}
      <div className="scanlines-overlay"></div>
    </div>
  );
}
