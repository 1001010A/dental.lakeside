import { ArrowUpRight } from "lucide-react";
import { buildInfoUrl } from "@/lib/whatsapp";
import { VintageTooth } from "./VintageTooth";

export function CTA() {
  return (
    <section className="sunburst bg-[var(--color-coral)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <VintageTooth className="tooth-bob w-28 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-extrabold uppercase tracking-widest">Tu próxima sonrisa comienza aquí</p>
          <h2 className="retro-title mt-2 text-5xl text-[var(--color-white)] sm:text-6xl">¡Hagamos una cita!</h2>
        </div>
        <a className="button-secondary shrink-0" href={buildInfoUrl()} target="_blank" rel="noopener noreferrer">Escríbenos <ArrowUpRight size={19} /></a>
      </div>
    </section>
  );
}
