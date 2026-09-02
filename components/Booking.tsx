"use client";

import { CalendarPlus, CalendarSync, CheckCircle2, Clock, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { buildAppointmentUrl, buildInfoUrl, buildManageUrl } from "@/lib/whatsapp";
import { services } from "./Services";
import { VintageTooth } from "./VintageTooth";

type Field = "name" | "service" | "date" | "time";
type BookingMode = "new" | "manage";

const labels: Record<Field, string> = {
  name: "Nombre completo",
  service: "Servicio de interés",
  date: "Fecha preferida",
  time: "Horario preferido",
};

const inputClass = "w-full rounded-lg border-2 border-[var(--color-fg)] bg-[var(--color-white)] p-3 font-semibold shadow-[3px_3px_0_var(--color-fg)]";

export function Booking() {
  const [mode, setMode] = useState<BookingMode>("new");
  const [form, setForm] = useState({ name: "", service: "", date: "", time: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [minDate, setMinDate] = useState("");
  const refs = useRef<Partial<Record<Field, HTMLInputElement | HTMLSelectElement>>>({});

  useEffect(() => setMinDate(new Date().toISOString().split("T")[0]), []);

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (field !== "message") setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<Field, string>> = {};
    (Object.keys(labels) as Field[]).forEach((field) => {
      if (!form[field].trim()) nextErrors[field] = `Indica ${labels[field].toLowerCase()}.`;
    });
    setErrors(nextErrors);
    const first = (Object.keys(labels) as Field[]).find((field) => nextErrors[field]);
    if (first) {
      refs.current[first]?.focus();
      return;
    }
    window.open(buildAppointmentUrl(form), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="citas" className="bg-[var(--color-mint)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="retro-label">Agenda fácilmente</span>
          <h2 className="retro-title text-primary mx-auto mt-6 max-w-3xl text-5xl sm:text-6xl">El primer paso es muy sencillo.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold">Elige qué necesitas y WhatsApp se abrirá con tu solicitud lista para enviar.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <button type="button" aria-pressed={mode === "new"} onClick={() => setMode("new")} className={`ink-frame flex items-center gap-4 p-5 text-left ${mode === "new" ? "bg-[var(--color-accent)]" : "paper"}`}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-fg)] bg-[var(--color-paper)]"><CalendarPlus /></span>
            <span><strong className="serif text-primary block text-2xl">Nueva cita</strong><small className="font-semibold">Quiero elegir tratamiento, fecha y horario.</small></span>
          </button>
          <button type="button" aria-pressed={mode === "manage"} onClick={() => setMode("manage")} className={`ink-frame flex items-center gap-4 p-5 text-left ${mode === "manage" ? "bg-[var(--color-accent)]" : "paper"}`}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-fg)] bg-[var(--color-paper)]"><CalendarSync /></span>
            <span><strong className="serif text-primary block text-2xl">Cambiar mi cita</strong><small className="font-semibold">Necesito reagendar o cancelar una cita.</small></span>
          </button>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          {mode === "new" ? (
            <form className="ink-frame paper p-6 sm:p-8" noValidate onSubmit={submit}>
              <div className="mb-7 flex items-center gap-3 border-b-2 border-dashed border-[var(--color-primary)] pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-coral)] font-extrabold text-white">1</span>
                <h3 className="serif text-primary text-3xl font-bold">Cuéntanos sobre tu cita</h3>
              </div>

              <div className="grid gap-x-5 sm:grid-cols-2">
                {(Object.keys(labels) as Field[]).map((field) => (
                  <div className="mb-5" key={field}>
                    <label className="text-primary mb-2 block text-sm font-extrabold" htmlFor={field}>{labels[field]}</label>
                    {field === "service" || field === "time" ? (
                      <select id={field} ref={(element) => { if (element) refs.current[field] = element; }} className={inputClass} value={form[field]} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} onChange={(event) => update(field, event.target.value)}>
                        <option value="">Selecciona una opción</option>
                        {field === "service" ? services.map((service) => <option key={service.title}>{service.title}</option>) : <><option>Mañana</option><option>Tarde</option></>}
                      </select>
                    ) : (
                      <input id={field} ref={(element) => { if (element) refs.current[field] = element; }} className={inputClass} type={field === "date" ? "date" : "text"} min={field === "date" ? minDate : undefined} value={form[field]} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} onChange={(event) => update(field, event.target.value)} />
                    )}
                    {errors[field] && <p id={`${field}-error`} className="mt-2 text-sm font-bold text-red-800">{errors[field]}</p>}
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label className="text-primary mb-2 block text-sm font-extrabold" htmlFor="message">Mensaje o dudas <span className="font-normal">(opcional)</span></label>
                <textarea id="message" className={inputClass} maxLength={300} rows={4} value={form.message} onChange={(event) => update("message", event.target.value)} />
                <p className="mt-2 text-right text-xs font-bold">{form.message.length}/300</p>
              </div>

              <button className="button-coral w-full" type="submit"><MessageCircle size={19} /> Agendar por WhatsApp</button>
              <a className="button-secondary mt-4 w-full" href={buildInfoUrl()} target="_blank" rel="noopener noreferrer">Solo quiero más información</a>
              <p className="mt-5 text-center text-xs leading-5">Al enviar, se abrirá WhatsApp con tus datos. No guardamos tu información en este sitio.</p>
            </form>
          ) : (
            <div className="ink-frame paper flex min-h-[28rem] flex-col items-center justify-center p-8 text-center">
              <CalendarSync className="text-primary" size={56} />
              <h3 className="retro-title text-primary mt-6 text-5xl">Te ayudamos a cambiarla.</h3>
              <p className="mt-5 max-w-md leading-7">Escríbenos por WhatsApp con tu nombre y la fecha de tu cita actual. Nuestro equipo revisará la disponibilidad contigo.</p>
              <a className="button-coral mt-8" href={buildManageUrl()} target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a>
            </div>
          )}

          <aside className="sunburst ink-frame bg-primary relative overflow-hidden p-7 text-[var(--color-paper)]">
            <VintageTooth className="tooth-bob mx-auto w-36" />
            <h3 className="retro-title mt-2 text-center text-4xl">Tu cita, sin vueltas.</h3>
            <ul className="mt-7 space-y-5 text-sm font-bold">
              <li className="flex gap-3"><CheckCircle2 className="shrink-0 text-[var(--color-accent)]" /> Atención en español e inglés</li>
              <li className="flex gap-3"><Clock className="shrink-0 text-[var(--color-accent)]" /> Horarios de lunes a sábado</li>
              <li className="flex gap-3"><MapPin className="shrink-0 text-[var(--color-accent)]" /> Consultorio en Ajijic</li>
            </ul>
            <p className="mt-8 border-t-2 border-dashed border-[var(--color-accent)] pt-6 text-center text-sm leading-6">Te respondemos en horario de atención:<br /><strong>Lun–Vie 10–15 h y 16–19 h<br />Sáb 9–14 h</strong></p>
          </aside>
        </div>
      </div>
    </section>
  );
}
