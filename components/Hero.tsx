import Image from "next/image";
import { ArrowDown, CalendarDays, Star } from "lucide-react";
import { buildInfoUrl } from "@/lib/whatsapp";
import { VintageTooth } from "./VintageTooth";

export function Hero() {
  return (
    <>
      <section id="inicio" className="paper relative overflow-hidden">
        <div className="mx-auto grid min-h-[42rem] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:px-8">
          <div className="relative z-10">
            <span className="retro-label"><Star size={13} fill="currentColor" /> Dentista en Ajijic</span>
            <h1 className="retro-title text-primary mt-6 max-w-2xl text-6xl sm:text-7xl lg:text-8xl">¡Sonríe con confianza!</h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-8">Odontología estética e integral con trato cercano, precisión clínica y ese cuidado que se siente desde que llegas.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="button-coral" href={buildInfoUrl()} target="_blank" rel="noopener noreferrer"><CalendarDays size={19} /> Agendar por WhatsApp</a>
              <a className="button-secondary" href="#servicios"><ArrowDown size={19} /> Conocer tratamientos</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-extrabold">
              <span>★ 5.0 en Google</span><span>★ 112 reseñas</span><span>ES / EN</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md pb-8">
            <div className="photo-frame aspect-[4/5]">
              <Image src="/images/care.png" alt="Atención dental cercana y personalizada en Dental Lakeside" fill priority sizes="(max-width: 768px) 90vw, 42vw" className="object-cover" />
            </div>
            <VintageTooth className="tooth-bob absolute -bottom-4 -left-14 hidden w-36 drop-shadow-lg sm:block" />
            <div className="serif absolute -right-3 top-8 rotate-3 rounded-full border-3 border-[var(--color-fg)] bg-[var(--color-accent)] px-4 py-3 text-center text-xl font-bold leading-5 shadow-[4px_4px_0_var(--color-fg)]">¡Atención<br />sin prisas!</div>
          </div>
        </div>
      </section>
      <div className="marquee" aria-hidden="true"><div className="marquee-track">Limpiezas ✦ Resinas ✦ Endodoncias ✦ Coronas ✦ Implantes ✦ Ortodoncia ✦ Alineadores ✦ Blanqueamiento ✦ Limpiezas ✦ Resinas ✦ Endodoncias ✦ Coronas ✦ Implantes ✦ Ortodoncia ✦ Alineadores ✦ Blanqueamiento ✦ </div></div>
    </>
  );
}
