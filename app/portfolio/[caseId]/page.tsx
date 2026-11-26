export default async function Portfolio({ params }: { params: Promise<{ caseId: string }> }) {
  const caseId = (await params).caseId;
  return <h1>Historia zabiegów i problemu {caseId}</h1>;
}
