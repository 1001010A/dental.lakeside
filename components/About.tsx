import Image from "next/image";
import { Check, Languages, MapPin } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="sunburst bg-primary py-16 text-[var(--color-paper)] md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="relative order-2 md:order-1">
          <div className="photo-frame aspect-square shadow-[9px_10px_0_var(--color-accent)]">
            <Image src="/images/doctor.png" alt="Profesional de Dental Lakeside en el consultorio de Ajijic" fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover" />
          </div>
          <p className="serif absolute -bottom-5 left-5 -rotate-2 rounded-lg border-3 border-[var(--color-fg)] bg-[var(--color-paper)] px-5 py-3 text-xl font-bold text-[var(--color-primary)] shadow-[4px_4px_0_var(--color-fg)]">Precisión + cercanía</p>
        </div>

        <div className="order-1 md:order-2">
          <span className="retro-label">Conoce Dental Lakeside</span>
          <h2 className="retro-title mt-6 text-5xl sm:text-6xl">Aquí cuidamos personas, no expedientes.</h2>
          <p className="mt-6 text-lg leading-8">Combinamos odontología estética e integral con un trato paciente y honesto. Te explicamos lo que vemos, resolvemos tus dudas y construimos un plan pensado para ti.</p>
          <div className="mt-8 grid gap-4 text-sm font-bold sm:grid-cols-2">
            <p className="flex items-center gap-3"><Check className="text-[var(--color-accent)]" /> Aviso COFEPRIS</p>
            <p className="flex items-center gap-3"><Languages className="text-[var(--color-accent)]" /> Español / English</p>
            <p className="flex items-center gap-3"><MapPin className="text-[var(--color-accent)]" /> Ajijic y la Ribera</p>
            <p className="flex items-center gap-3"><Check className="text-[var(--color-accent)]" /> Céd. Prof. PEJ396797</p>
          </div>
        </div>
      </div>
    </section>
  );
}
