export function NoiseOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="noise-layer" />
      <div className="scanline-layer" />
      <div className="vignette-layer" />
    </div>
  );
}
