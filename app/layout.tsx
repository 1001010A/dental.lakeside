import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["500", "600", "700"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const siteUrl = "https://dentallakeside.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: { default: "Dental Lakeside | Dentista en Ajijic", template: "%s | Dental Lakeside" },
  description: "Odontología estética e integral en Ajijic, Jalisco. Atención cercana, precisión clínica y tratamientos personalizados para cuidar tu sonrisa.",
  openGraph: { title: "Dental Lakeside | Dentista en Ajijic", description: "Odontología estética e integral en Ajijic, Jalisco.", url: siteUrl, siteName: "Dental Lakeside", images: [{ url: "/images/care.png", width: 499, height: 659, alt: "Atención cercana en Dental Lakeside" }], locale: "es_MX", type: "website" },
  twitter: { card: "summary_large_image", title: "Dental Lakeside | Dentista en Ajijic", description: "Odontología estética e integral en Ajijic, Jalisco.", images: ["/images/care.png"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>;
}
