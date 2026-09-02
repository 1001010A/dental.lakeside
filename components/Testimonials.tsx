import { Star } from "lucide-react";

const testimonials = [
  { name: "Reneesiendo", text: "Fue muy rápido, sin dolor y me explicó muy bien las diferencias de cuidarse. Un servicio de excelencia." },
  { name: "Milagros Aguilar", text: "El lugar es súper limpio y el personal es servicial y agradable; transmiten una confianza increíble." },
  { name: "Ariadna Avalos", text: "Muy buena atención. Me ayudaron a no perder mi muela y sin dolor alguno. 100% recomendado." },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="testimonios-titulo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="retro-label">Lo dicen nuestros pacientes</span>
          <h2 id="testimonios-titulo" className="retro-title text-primary mx-auto mt-6 max-w-3xl text-5xl sm:text-6xl">Buenas historias empiezan con una sonrisa.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure className={`ink-frame paper p-6 ${index === 1 ? "md:-translate-y-4 md:rotate-1" : "-rotate-1"}`} key={item.name}>
              <div className="flex gap-1 text-[var(--color-accent)]" aria-label="5 de 5 estrellas">{Array.from({ length: 5 }, (_, star) => <Star key={star} size={18} fill="currentColor" stroke="var(--color-fg)" />)}</div>
              <blockquote className="serif text-primary mt-5 text-2xl font-semibold leading-8">“{item.text}”</blockquote>
              <figcaption className="mt-6 border-t-2 border-dashed border-[var(--color-primary)] pt-4 text-sm font-extrabold">— {item.name}, Google</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
