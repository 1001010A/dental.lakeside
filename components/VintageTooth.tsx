interface VintageToothProps {
  className?: string;
}

export function VintageTooth({ className = "" }: VintageToothProps) {
  return (
    <svg className={className} viewBox="0 0 220 260" role="img" aria-label="Personaje original de un diente sonriente">
      <path d="M57 49c19-31 89-31 107 1 15 26-5 50-11 80-7 35-8 72-28 72-14 0-12-38-24-38s-9 38-24 38c-21 0-22-38-29-73-6-30-24-56 9-80Z" fill="var(--color-paper)" stroke="var(--color-fg)" strokeWidth="7" strokeLinejoin="round" />
      <path d="M80 91c6 8 15 8 21 0M121 91c6 8 15 8 21 0" fill="none" stroke="var(--color-fg)" strokeWidth="5" strokeLinecap="round" />
      <path d="M83 118c17 15 41 15 57-1" fill="none" stroke="var(--color-fg)" strokeWidth="6" strokeLinecap="round" />
      <path d="M49 108C20 111 19 90 7 82M160 108c28 2 31-18 44-25" fill="none" stroke="var(--color-fg)" strokeWidth="7" strokeLinecap="round" />
      <path d="M8 82c1-12 12-15 20-9 7 5 4 17-6 20M204 83c0-12-11-16-19-10-7 5-4 17 6 20" fill="var(--color-paper)" stroke="var(--color-fg)" strokeWidth="5" />
      <path d="M78 199c-3 25-13 29-20 43M126 200c3 23 13 28 20 42" fill="none" stroke="var(--color-fg)" strokeWidth="7" strokeLinecap="round" />
      <path d="M41 244c10-10 26-9 33 1M131 245c7-10 23-11 34-1" fill="none" stroke="var(--color-fg)" strokeWidth="8" strokeLinecap="round" />
      <path d="M61 52c9-10 24-15 37-16" fill="none" stroke="var(--color-mint)" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
