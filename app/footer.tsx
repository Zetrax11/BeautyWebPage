import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Strona główna' },
  { href: '/about', label: 'O mnie' },
  { href: '/procedures', label: 'Zabiegi' },
  { href: '/portfolio', label: 'Efekty' },
  { href: '/reviews', label: 'Opinie' },
  { href: '/contact', label: 'Kontakt' },
];

export const FooterBar = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#c7c7c7] text-brand-dark border-t border-brand-dark/10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Kolumna 1: Marka i krótki opis */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semibold tracking-wide">
              NAZWA SALONU
            </Link>
            <p className="text-sm leading-relaxed text-brand-muted">
              Profesjonalna kosmetologia i indywidualne podejście do pielęgnacji
              skóry. Zadbaj o siebie w spokojnej atmosferze.
            </p>
            <div className="flex gap-4 pt-2 text-sm font-medium">
              <a
                href="https://www.instagram.com/martabala_beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578488919374"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Kolumna 2: Nawigacja */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Nawigacja
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolumna 3: Kontakt i godziny */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>ul. Przykładowa 12/4, Wrocław</li>
              <li>
                <a href="tel:+48123456789" className="hover:text-brand-dark transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@salon.pl" className="hover:text-brand-dark transition-colors">
                  kontakt@salon.pl
                </a>
              </li>
              <li className="pt-2 text-xs">
                Pn–Pt: 9:00 – 19:00 <br />
                Sb: 9:00 – 14:00
              </li>
            </ul>
          </div>

          {/* Kolumna 4: CTA do Booksy */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Rezerwacja wizyty
            </h3>
            <p className="text-sm text-brand-muted">
              Wybierz dogodny termin online przez nasz profil na Booksy.
            </p>
            <a
              href="https://booksy.com/pl-pl/318514_marta-bala-beauty_salon-kosmetyczny_13750_wroclaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-brand-dark px-6 py-3 text-sm font-medium text-brand-beige transition-opacity hover:opacity-90"
            >
              Zarezerwuj przez Booksy
            </a>
          </div>

        </div>

        {/* Dolny pasek: Copyright + dokumenty prawne */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-dark/10 pt-6 text-xs text-brand-muted sm:flex-row">
          <p>© {currentYear} Nazwa Salonu. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-brand-dark">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-brand-dark">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};