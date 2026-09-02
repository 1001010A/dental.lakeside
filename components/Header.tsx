"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buildInfoUrl } from "@/lib/whatsapp";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#galeria", label: "Consultorio" },
  { href: "#citas", label: "Citas" },
  { href: "#preguntas", label: "Preguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="paper sticky top-0 z-40 border-b-3 border-[var(--color-fg)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <a className="flex items-center gap-3" href="#inicio" aria-label="Dental Lakeside, ir al inicio">
          <Image src="/images/logo.png" width={52} height={52} alt="Logotipo de Dental Lakeside" className="rounded-full border-2 border-[var(--color-fg)]" />
          <span className="serif text-primary hidden text-2xl font-bold sm:inline">Dental Lakeside</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
          {links.map((link) => <a className="text-sm font-extrabold hover:text-[var(--color-coral)]" key={link.href} href={link.href}>{link.label}</a>)}
        </nav>

        <a className="button-coral hidden lg:inline-flex" href={buildInfoUrl()} target="_blank" rel="noopener noreferrer">¡Quiero mi cita!</a>

        <button className="text-primary rounded-full border-2 border-[var(--color-fg)] bg-[var(--color-accent)] p-2 lg:hidden" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="paper border-t-2 border-[var(--color-fg)] px-4 py-4 lg:hidden" aria-label="Menú móvil">
          {links.map((link) => <a className="block border-b-2 border-dashed border-[var(--color-primary)] py-4 font-extrabold" key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
          <a className="button-coral mt-5 w-full" href={buildInfoUrl()} onClick={() => setOpen(false)} target="_blank" rel="noopener noreferrer">¡Quiero mi cita!</a>
        </nav>
      )}
    </header>
  );
}
