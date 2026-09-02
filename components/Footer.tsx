import Image from "next/image";
import { Facebook, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const facebook = "https://www.facebook.com/profile.php?id=61554909655683";

export function Footer() {
  return (
    <footer className="paper border-t-3 border-[var(--color-fg)] py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <Image src="/images/logo.png" width={70} height={70} alt="Logo de Dental Lakeside" className="rounded-full border-2 border-[var(--color-fg)]" />
            <p className="serif text-primary text-3xl font-bold leading-none">Dental<br />Lakeside</p>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6">Odontología estética e integral con atención cercana en Ajijic, Jalisco.</p>
        </div>
        <div>
          <p className="retro-label">Contacto</p>
          <a className="mt-5 flex items-center gap-2 text-sm font-bold hover:text-[var(--color-coral)]" href="tel:+523344962966"><Phone size={16} />33 4496 2966</a>
          <a className="mt-3 flex items-start gap-2 text-sm font-bold leading-6 hover:text-[var(--color-coral)]" href="https://maps.google.com/?q=Carretera+Pte.+1B,+Ajijic,+Jalisco" target="_blank" rel="noopener noreferrer"><MapPin className="shrink-0" size={16} />Carretera Pte. 1B, Ajijic, Jal. 45920</a>
          <a className="mt-3 block break-all text-sm font-bold hover:text-[var(--color-coral)]" href="mailto:dental.lakesideajijic@gmail.com">dental.lakesideajijic@gmail.com</a>
        </div>
        <div>
          <p className="retro-label">Horarios</p>
          <p className="mt-5 text-sm font-semibold leading-7">Lun–Vie: 10:00–15:00 y 16:00–19:00<br />Sáb: 9:00–14:00<br />Dom: cerrado</p>
          <a className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold hover:text-[var(--color-coral)]" href={facebook} target="_blank" rel="noopener noreferrer"><Facebook size={17} /> Facebook</a>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t-2 border-dashed border-[var(--color-primary)] px-4 pt-6 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Dental Lakeside. Todos los derechos reservados.</p>
        <Link className="underline hover:text-[var(--color-coral)]" href="/aviso-de-privacidad">Aviso de privacidad</Link>
      </div>
    </footer>
  );
}
