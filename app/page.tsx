import Image from 'next/image'
import Link from 'next/link';
import { PROCEDURES } from './data/procedures';

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
    <section className="bg-brand-cream max-w-6xl mx-auto px-4 py-16 lg:py-24">
      <h2>Najpopularniejsze zabiegi</h2>
      <h3>Wybierz sprawdzony i skuteczny zabieg</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROCEDURES.slice(0, 3).map((procedure) => (
          <article className="bg-brand-cream rounded-2xl p-6 border border-brand-dark/10 flex flex-col justify-between">
          <h3>{procedure.name}</h3>
          <p>{procedure.shortDescription}</p>
          <p>{procedure.price} zł</p>
          <p>czas zabiegu: {procedure.duration} min</p>
          </article>
        ))}
        <Link href="/procedures">Zobacz pełną ofertę</Link>
      </div>
    </section>
    </>
  );
}
