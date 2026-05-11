import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SectionLabel } from "@/components/SectionLabel";
import { TransmissionFrame } from "@/components/TransmissionFrame";
import { archiveFrames, products, telemetry } from "@/lib/content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-night text-off-white selection:bg-signal-red selection:text-off-white">
      <NoiseOverlay />
      <HeroSection />
      <DropSection />
      <ArchiveSection />
      <ProductShowcase />
      <PhilosophySection />
      <WaitlistSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center px-5 py-8 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10">
        <TransmissionFrame className="h-full w-full border-0 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,230,227,0.08),transparent_25%),linear-gradient(180deg,rgba(10,10,10,0.24),#0A0A0A_88%)]" />
      </div>

      <nav className="absolute left-5 right-5 top-6 z-10 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
        <span className="mono-label text-off-white/50">DROP_001 / NO SIGNAL</span>
        <a className="mono-label nav-link" href="#waitlist">JOIN TRANSMISSION</a>
      </nav>

      <div className="absolute bottom-8 left-5 hidden max-w-[240px] sm:left-8 md:block lg:left-12">
        <p className="mono-label leading-relaxed text-off-white/40">ANALOG STREETWEAR SYSTEM FOR MIDNIGHT ENVIRONMENTS. SOURCE: UNKNOWN.</p>
      </div>

      <div className="absolute bottom-8 right-5 hidden text-right sm:right-8 md:block lg:right-12">
        {telemetry.map((item) => (
          <p className="mono-label leading-relaxed text-off-white/40" key={item}>{item}</p>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="mono-label mb-6 text-signal-red/80">CHANNEL LOST / GARMENT ARCHIVE</p>
        <h1 className="brand-title text-[clamp(3.4rem,13vw,12rem)] leading-[0.78] tracking-[-0.08em]">NIGHTFRAME</h1>
        <p className="mt-8 max-w-2xl text-balance font-mono text-xs uppercase tracking-[0.38em] text-off-white/70 sm:text-sm">
          LOST FRAMES FROM A FILM THAT NEVER EXISTED.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#drop" className="btn-primary">View Drop_001</a>
          <a href="#archive" className="btn-secondary">Open Archive</a>
        </div>
      </div>
    </section>
  );
}

function DropSection() {
  return (
    <section id="drop" className="section-shell border-t border-off-white/10">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <div className="space-y-8">
          <SectionLabel index="01" eyebrow="DROP_001 — NO SIGNAL" />
          <h2 className="headline max-w-3xl">A midnight transmission cut into heavyweight black cotton.</h2>
          <p className="editorial-copy">
            DROP_001 is assembled from fragmented street footage, rain-lit architecture, and the residue of a broadcast nobody can verify. Every garment is treated like a recovered frame: reduced, severe, and built for the hours after the city turns monochrome.
          </p>
        </div>
        <div className="relative min-h-[580px] lg:min-h-[720px]">
          <TransmissionFrame variant="portrait" className="absolute left-0 top-8 h-[64%] w-[62%] rotate-[-2deg]" />
          <TransmissionFrame variant="product" className="absolute bottom-0 right-0 h-[58%] w-[70%] rotate-[1.5deg]" />
          <div className="absolute left-[12%] top-[48%] w-64 border border-off-white/10 bg-night/80 p-5 backdrop-blur-sm">
            <p className="mono-label text-signal-red">FIELD NOTE 001</p>
            <p className="mt-5 font-mono text-xs uppercase leading-6 tracking-[0.22em] text-off-white/60">Signal interference appears as memory. Memory appears as garment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchiveSection() {
  return (
    <section id="archive" className="section-shell border-t border-off-white/10">
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <SectionLabel index="02" eyebrow="VISUAL ARCHIVE" />
          <h2 className="headline mt-8 max-w-4xl">Surveillance frames, contact sheets, and evidence of a film that cannot be found.</h2>
        </div>
        <p className="mono-label max-w-xs leading-relaxed text-off-white/40">ARCHIVE ACCESS IS PARTIAL. TAPE DAMAGE PRESENT. COLOR INFORMATION REMOVED.</p>
      </div>
      <div className="archive-grid">
        {archiveFrames.map((frame, index) => (
          <article className="archive-card" key={frame.id}>
            <div className="archive-visual" data-index={index} />
            <div className="mt-4 flex items-start justify-between gap-5">
              <div>
                <p className="mono-label text-off-white/40">{frame.id}</p>
                <h3 className="mt-2 font-display text-sm uppercase tracking-[0.24em] text-off-white/80">{frame.caption}</h3>
              </div>
              <div className="text-right">
                <p className="mono-label text-signal-red/75">{frame.time}</p>
                <p className="mono-label mt-2 text-off-white/40">{frame.signal}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="section-shell border-t border-off-white/10">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-12">
          <SectionLabel index="03" eyebrow="PRODUCT SHOWCASE" />
          <h2 className="headline mt-8">Black garments engineered like cinematic artifacts.</h2>
          <p className="editorial-copy mt-8">Oversized silhouettes, negative-space graphics, archival labeling, and signal-red details. Built to feel less like merchandise and more like wardrobe from a lost neo-noir production.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, index) => (
            <article className="product-card" key={product.code}>
              <div className="product-image">
                <div className="tee-shape" data-side={product.side} />
                <span className="mono-label absolute left-5 top-5 text-off-white/40">{product.code}</span>
                <span className="mono-label absolute bottom-5 right-5 text-signal-red/70">{product.side}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg uppercase tracking-[0.18em] text-off-white">{product.name}</h3>
                  <p className="mono-label mt-3 leading-relaxed text-off-white/40">{product.detail}</p>
                </div>
                <span className="mono-label text-off-white/40">0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="section-shell border-t border-off-white/10">
      <div className="grid gap-12 md:grid-cols-[0.45fr_1fr]">
        <SectionLabel index="04" eyebrow="BRAND PHILOSOPHY" />
        <div>
          <p className="manifesto">
            NIGHTFRAME exists between the cut and the memory of the cut. We design garments for scenes that were never shot: silent streets, erased tapes, faceless protagonists, and the exact second before a signal disappears.
          </p>
          <div className="mt-12 grid gap-4 border-t border-off-white/10 pt-8 sm:grid-cols-3">
            {["NOIR MINIMALISM", "ARCHIVE FUNCTION", "AFTER-HOURS UNIFORM"].map((item) => (
              <p className="mono-label text-off-white/40" key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WaitlistSection() {
  return (
    <section id="waitlist" className="relative isolate border-t border-off-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(193,18,31,0.16),transparent_30%),linear-gradient(180deg,#0A0A0A,rgba(22,22,22,0.95))]" />
      <div className="mx-auto max-w-5xl text-center">
        <SectionLabel index="05" eyebrow="WAITLIST / CTA" />
        <h2 className="headline mx-auto mt-8 max-w-4xl">Receive the next recovered transmission.</h2>
        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 border border-off-white/10 bg-black/30 p-2 sm:flex-row" action="/" aria-label="Join NIGHTFRAME waitlist">
          <input className="waitlist-input" type="email" name="email" placeholder="EMAIL ADDRESS" aria-label="Email address" required />
          <button className="btn-primary sm:min-w-48" type="submit">Join Waitlist</button>
        </form>
        <p className="mono-label mt-6 text-off-white/40">NO SPAM. NO BRIGHTNESS. ONLY DROP SIGNALS.</p>
      </div>
    </section>
  );
}
