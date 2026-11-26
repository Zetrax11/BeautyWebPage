export default async function Procedures({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  if (slug?.length === 1) {
    return <h1>Przeglądasz opis zabiegu {slug[0]}</h1>;
  }
  return <h1>Zabiegi</h1>;
}
