import { Bone, CirclePlus, Crown, Gem, ScanLine, ShieldPlus, Sparkles, Stethoscope, Zap, type LucideIcon } from "lucide-react";

export const services = [
  { title: "Limpiezas dentales", description: "Prevención, valoración y pulido para mantener tu sonrisa sana.", price: "Desde $450", icon: Sparkles },
  { title: "Resinas estéticas", description: "Restauraciones que respetan la forma y apariencia natural del diente.", icon: Gem },
  { title: "Endodoncias", description: "Tratamiento preciso para aliviar molestias y conservar tu pieza dental.", icon: Stethoscope },
  { title: "Coronas dentales", description: "Recupera resistencia, función y estética con una solución a tu medida.", icon: Crown },
  { title: "Implantes", description: "Una alternativa estable para reemplazar piezas ausentes.", icon: Bone },
  { title: "Ortodoncia", description: "Brackets y seguimiento profesional para alinear tu sonrisa.", price: "Desde $2,475", icon: ScanLine },
  { title: "Alineadores", description: "Corrección discreta con un plan personalizado y monitoreo clínico.", icon: ShieldPlus },
  { title: "Blanqueamiento y prótesis", description: "Opciones estéticas y funcionales pensadas para ti.", icon: CirclePlus },
  { title: "Urgencias", description: "Orientación y atención oportuna cuando aparece una molestia dental.", icon: Zap },
] as { title: string; description: string; price?: string; icon: LucideIcon }[];

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="retro-label">Catálogo de sonrisas</span>
          <h2 className="retro-title text-primary mx-auto mt-6 max-w-3xl text-5xl sm:text-6xl">Todo empieza con una buena revisión.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7">Te explicamos cada opción con claridad para que elijas con calma y seguridad.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, price, icon: Icon }, index) => (
            <article className="ink-frame paper group relative overflow-hidden p-6 transition-transform hover:-rotate-1" key={title}>
              <span className="serif absolute right-4 top-2 text-5xl font-bold text-[var(--color-primary)] opacity-10">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-fg)] bg-[var(--color-mint)]">
                <Icon size={25} aria-hidden="true" />
              </div>
              <h3 className="serif text-primary mt-6 text-3xl font-bold leading-none">{title}</h3>
              <p className="mt-4 text-sm leading-6">{description}</p>
              {price && <p className="mt-5 inline-block rotate-1 border-y-2 border-[var(--color-fg)] bg-[var(--color-accent)] px-3 py-1 text-sm font-extrabold">{price}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
