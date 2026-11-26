import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <section className="min-h-[85vh] bg-cover bg-center bg-[url(/glowna_prawa.jpg)] flex flex-col justify-between pt-28">
       <div className="px-10 py-40 text-brand-muted">
          <p className="uppercase tracking-wider text-sm">
            Kosmetologia estetyczna Wrocław
          </p>
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Tutaj hasło przewodnie salonu Marta 
          </h1>
          <p>
            Tutaj krótki opis 1-2 zdania o salonie / misji czy czymkolwiek marketingowo sensownym
          </p>
          <Link href="/contact">
            Zarezerwuj wizyte
          </Link>
          <Link href="/procedures">
            Poznaj zabiegi
          </Link>
        </div>
    </section>
    <section className="min-h-[85vh] bg-brand-cream">
      <div>
        Tutaj będzie coś
      </div>
    </section>
    </>
  );
}
