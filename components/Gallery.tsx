import Image from "next/image";

export function Gallery() {
  return (
    <section id="galeria" className="paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <span className="retro-label">Dentro del consultorio</span>
            <h2 className="retro-title text-primary mt-6 max-w-3xl text-5xl sm:text-6xl">Una clínica con historia y trato humano.</h2>
          </div>
          <p className="max-w-sm leading-7">Un espacio en Ajijic pensado para que te sientas escuchado, acompañado y en buenas manos.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          <figure className="ink-frame relative min-h-96 overflow-hidden md:col-span-7">
            <Image src="/images/care.png" alt="Tratamiento dental realizado con precisión en Dental Lakeside" fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
            <figcaption className="absolute bottom-4 left-4 z-10 max-w-xs rotate-1 border-2 border-[var(--color-fg)] bg-[var(--color-paper)] px-4 py-2 font-extrabold">Atención cercana y personalizada</figcaption>
          </figure>
          <div className="grid gap-5 md:col-span-5">
            <figure className="ink-frame relative min-h-80 overflow-hidden">
              <Image src="/images/doctor.png" alt="Equipo profesional de Dental Lakeside" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-top" />
            </figure>
            <div className="ink-frame flex min-h-44 items-center justify-center bg-[var(--color-accent)] p-8 text-center">
              <p className="serif text-primary -rotate-2 text-4xl font-bold leading-none">“Tu sonrisa, siempre con calma.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
