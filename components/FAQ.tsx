const questions = [
  { q: "¿Necesito cita para una valoración?", a: "Sí, te recomendamos escribirnos por WhatsApp para encontrar un horario que te funcione." },
  { q: "¿Qué horarios manejan?", a: "Lunes a viernes de 10:00 a 15:00 y de 16:00 a 19:00; sábados de 9:00 a 14:00." },
  { q: "¿Atienden en inglés?", a: "Sí. Atendemos en español e inglés." },
  { q: "¿Dónde se encuentran?", a: "Estamos en Carretera Pte. 1B, Ajijic, Jalisco, 45920." },
  { q: "¿Qué hago si tengo una urgencia dental?", a: "Escríbenos o llámanos para orientarte y revisar la disponibilidad para atenderte." },
];

export function FAQ() {
  return (
    <section id="preguntas" className="paper py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="retro-label">Preguntas frecuentes</span>
          <h2 className="retro-title text-primary mt-6 text-5xl sm:text-6xl">Pregunta con confianza.</h2>
        </div>
        <div className="mt-10 space-y-4">
          {questions.map((item, index) => (
            <details className="ink-frame bg-[var(--color-white)] p-5" key={item.q}>
              <summary className="text-primary cursor-pointer list-none pr-8 font-extrabold"><span className="mr-3 text-[var(--color-coral)]">{String(index + 1).padStart(2, "0")}.</span>{item.q}</summary>
              <p className="mt-4 border-t-2 border-dashed border-[var(--color-primary)] pt-4 leading-7">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
