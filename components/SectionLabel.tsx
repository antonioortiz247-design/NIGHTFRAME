export function SectionLabel({ index, eyebrow }: { index: string; eyebrow: string }) {
  return (
    <div className="mono-label flex items-center gap-3 text-off-white/50">
      <span className="text-signal-red">{index}</span>
      <span className="h-px w-10 bg-off-white/20" />
      <span>{eyebrow}</span>
    </div>
  );
}
