import { NoiseOverlay } from "@/components/NoiseOverlay";
import { SectionLabel } from "@/components/SectionLabel";
import { TransmissionFrame } from "@/components/TransmissionFrame";
import { archiveFrames, products, productSpecs, socials, telemetry } from "@/lib/content";

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
      <FooterSection />
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
        <span className="mono-label text-off-white/50">DROP_001 / NO SIGNAL / MÉXICO</span>
        <a className="mono-label nav-link" href="#waitlist">Acceso al drop</a>
      </nav>

      <div className="absolute bottom-8 left-5 hidden max-w-[260px] sm:left-8 md:block lg:left-12">
        <p className="mono-label leading-relaxed text-off-white/40">STREETWEAR OVERSIZED PARA ATMÓSFERAS DE MEDIANOCHE. ORIGEN: MÉXICO.</p>
      </div>

      <div className="absolute bottom-8 right-5 hidden text-right sm:right-8 md:block lg:right-12">
        {telemetry.map((item) => (
          <p className="mono-label leading-relaxed text-off-white/40" key={item}>{item}</p>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <p className="mono-label mb-6 text-signal-red/80">LANZAMIENTO LIMITADO / ARCHIVO DE PRENDAS</p>
        <h1 className="brand-title text-[clamp(3.4rem,13vw,12rem)] leading-[0.78] tracking-[-0.08em]">NIGHTFRAME</h1>
        <p className="mt-8 max-w-3xl text-balance font-mono text-xs uppercase tracking-[0.34em] text-off-white/70 sm:text-sm">
          PRENDAS RECUPERADAS DE UNA PELÍCULA QUE NUNCA EXISTIÓ.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#drop" className="btn-primary">Explorar Drop_001</a>
          <a href="#productos" className="btn-secondary">Ver prendas</a>
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
          <h2 className="headline max-w-3xl">Una transmisión nocturna impresa sobre algodón pesado.</h2>
          <p className="editorial-copy">
            DROP_001 nace de señales perdidas, calles vacías después de medianoche y fragmentos de una cinta imposible de rastrear. Cuatro piezas oversized en negro lavado, diseñadas como evidencia: NO SIGNAL, STATIC MEMORY, MIDNIGHT TRANSMISSION y LOST FRAME.
          </p>
          <div className="spec-strip" aria-label="Detalles del producto">
            {productSpecs.map((spec) => (
              <span key={spec}>{spec}</span>
            ))}
          </div>
        </div>
        <div className="relative min-h-[580px] lg:min-h-[720px]">
          <TransmissionFrame variant="portrait" className="absolute left-0 top-8 h-[64%] w-[62%] rotate-[-2deg]" />
          <TransmissionFrame variant="product" className="absolute bottom-0 right-0 h-[58%] w-[70%] rotate-[1.5deg]" />
          <div className="absolute left-[12%] top-[48%] w-64 border border-off-white/10 bg-night/80 p-5 backdrop-blur-sm">
            <p className="mono-label text-signal-red">FIELD NOTE 001</p>
            <p className="mt-5 font-mono text-xs uppercase leading-6 tracking-[0.22em] text-off-white/60">La interferencia se vuelve memoria. La memoria se vuelve prenda.</p>
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
          <h2 className="headline mt-8 max-w-4xl">Fotogramas de vigilancia, pruebas de campaña y rastros de una película sin estreno.</h2>
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
    <section id="productos" className="section-shell border-t border-off-white/10">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-12">
          <SectionLabel index="03" eyebrow="PRODUCT SHOWCASE" />
          <h2 className="headline mt-8">Cuatro prendas negras. Un solo archivo perdido.</h2>
          <p className="editorial-copy mt-8">Silueta oversized boxy, algodón heavyweight 280 GSM, acabado washed black y gráfica DTF premium. Cada pieza pertenece al mismo universo visual: limitado, nocturno y coleccionable.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, index) => (
            <article className="product-card" key={product.code} data-asset-slot={product.assetSlot}>
              <div className="product-image" data-product={product.name.toLowerCase().replaceAll(" ", "-")}>
                <div className="tee-shape" data-side={product.side} />
                <span className="mono-label absolute left-5 top-5 text-off-white/40">{product.code}</span>
                <span className="mono-label absolute bottom-5 right-5 text-signal-red/70">{product.side}</span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg uppercase tracking-[0.18em] text-off-white">{product.name}</h3>
                  <p className="mt-4 max-w-md font-mono text-xs uppercase leading-6 tracking-[0.18em] text-off-white/60">{product.description}</p>
                  <p className="mono-label mt-4 leading-relaxed text-off-white/40">{product.detail}</p>
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
            NIGHTFRAME diseña prendas para escenas que nunca fueron filmadas: avenidas vacías, cintas borradas, protagonistas sin rostro y el segundo exacto antes de que una señal desaparezca.
          </p>
          <div className="mt-12 grid gap-4 border-t border-off-white/10 pt-8 sm:grid-cols-3">
            {["NOIR MINIMALISM", "ARCHIVO FUNCIONAL", "UNIFORME DE MEDIANOCHE"].map((item) => (
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
        <SectionLabel index="05" eyebrow="ACCESO AL LANZAMIENTO" />
        <h2 className="headline mx-auto mt-8 max-w-4xl">Recibe la señal antes de que el drop desaparezca.</h2>
        <p className="mx-auto mt-8 max-w-2xl font-mono text-xs uppercase leading-7 tracking-[0.24em] text-off-white/50">
          Acceso anticipado a DROP_001 — NO SIGNAL. Lanzamiento limitado en México. Sin reposición confirmada.
        </p>
        <form className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 border border-off-white/10 bg-black/30 p-2 sm:flex-row" action="/" aria-label="Acceso al lanzamiento NIGHTFRAME">
          <input className="waitlist-input" type="email" name="email" placeholder="CORREO ELECTRÓNICO" aria-label="Correo electrónico" required />
          <button className="btn-primary sm:min-w-48" type="submit">Solicitar acceso</button>
        </form>
        <p className="mono-label mt-6 text-off-white/40">DROP LIMITADO. ARCHIVO PRIVADO. SEÑAL ÚNICA.</p>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="border-t border-off-white/10 px-5 py-10 sm:px-8 lg:px-12">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-3xl uppercase leading-none tracking-[-0.08em] text-off-white sm:text-5xl">NIGHTFRAME</p>
          <p className="mono-label mt-4 max-w-xl leading-relaxed text-off-white/40">MÉXICO / DROP_001 — NO SIGNAL / OVERSIZED STREETWEAR FROM A FILM THAT NEVER EXISTED.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          {socials.map((social) => (
            <a className="footer-link" href="#" key={social} aria-label={`NIGHTFRAME ${social}`}>{social}</a>
          ))}
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-off-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label text-off-white/40">© 2026 NIGHTFRAME MÉXICO</p>
        <p className="mono-label text-off-white/40">ARCHIVE ID / NF-MX-DROP001 / LIMITED TRANSMISSION</p>
      </div>
    </footer>
  );
}
