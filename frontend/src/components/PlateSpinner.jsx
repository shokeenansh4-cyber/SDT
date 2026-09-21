const holes = [0, 72, 144, 216, 288].map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return { x: 100 + 46 * Math.cos(rad), y: 100 + 46 * Math.sin(rad) };
});

export default function PlateSpinner({ className = "", reverse = false }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${reverse ? "animate-plate-spin-rev" : "animate-plate-spin"} ${className}`}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="9" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="2.5" />
        {holes.map((h, i) => (
          <circle key={i} cx={h.x} cy={h.y} r="12" fill="none" stroke="currentColor" strokeWidth="5" />
        ))}
        <circle cx="100" cy="100" r="16" fill="none" stroke="currentColor" strokeWidth="7" />
      </svg>
    </div>
  );
}
