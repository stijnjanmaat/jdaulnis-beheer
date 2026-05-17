import { Mail, MapPin, Phone } from 'lucide-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf7f1] text-stone-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,196,161,0.38),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(170,126,91,0.22),transparent_32%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-12 sm:px-10">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/80 bg-stone-100 shadow-2xl shadow-stone-300/40">
            <picture className="block h-full w-full">
              <source
                type="image/webp"
                srcSet="/images/julia-480.webp 480w, /images/julia-768.webp 768w, /images/julia-1152.webp 1152w"
                sizes="(min-width: 640px) 384px, calc(100vw - 48px)"
              />
              <img
                src="/images/julia-768.jpeg"
                srcSet="/images/julia-480.jpeg 480w, /images/julia-768.jpeg 768w, /images/julia-1152.jpeg 1152w"
                sizes="(min-width: 640px) 384px, calc(100vw - 48px)"
                alt="Julia d'Aulnis"
                className="h-full w-full object-cover"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-linear-to-t from-stone-950/20 via-transparent to-white/10" />
          </div>

          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-balance text-5xl font-semibold leading-[0.98] tracking-tighter text-stone-950 sm:text-7xl">
              Julia krijgt het voor elkaar
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
              Events, hospitality & spellen op maat.
            </p>

            <div className="mt-10 rounded-4xl border border-white/80 bg-white/75 p-6 shadow-xl shadow-stone-300/30 backdrop-blur">
              {/* <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#a67855]">Contact</p> */}
              <h2 className="mt-3 text-2xl font-semibold text-stone-950">Julia d&apos;Aulnis</h2>

              <div className="mt-6 space-y-4 text-stone-600">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#b98962]" />
                  <a
                    href="mailto:julia@leisureteam.nl"
                    className="relative font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#b98962] after:transition-transform hover:text-[#9a6b47] hover:after:scale-x-100 focus-visible:text-[#9a6b47] focus-visible:outline-none focus-visible:after:scale-x-100"
                  >
                    julia@leisureteam.nl
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#b98962]" />
                  <a
                    href="tel:+31640265135"
                    className="relative font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#b98962] after:transition-transform hover:text-[#9a6b47] hover:after:scale-x-100 focus-visible:text-[#9a6b47] focus-visible:outline-none focus-visible:after:scale-x-100"
                  >
                    +31 6 40265135
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#b98962]" />
                  Nijmegen, Nederland
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
