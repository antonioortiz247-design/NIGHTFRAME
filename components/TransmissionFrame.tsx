export function TransmissionFrame({ className = "", variant = "hero" }: { className?: string; variant?: "hero" | "portrait" | "product" }) {
  return (
    <div className={`transmission-frame group transmission-${variant} ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(232,230,227,0.16),transparent_28%),linear-gradient(140deg,rgba(193,18,31,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.9))]" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-off-white/10 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0_8%,rgba(255,255,255,0.05)_8.2%,transparent_8.4%_100%),linear-gradient(0deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:140px_100%,100%_7px] opacity-45" />
      <div className="absolute left-6 top-5 flex gap-2">
        <span className="h-2 w-2 rounded-full bg-signal-red shadow-[0_0_18px_rgba(193,18,31,0.8)]" />
        <span className="mono-label text-[10px] text-off-white/50">REC / DAMAGED SOURCE</span>
      </div>
      <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between border-t border-off-white/10 pt-4">
        <span className="mono-label text-off-white/40">NIGHTFRAME ARCHIVE</span>
        <span className="mono-label text-signal-red/80">NO SIGNAL</span>
      </div>
      <div className="absolute inset-8 border border-off-white/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  );
}
