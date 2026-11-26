export default async function Reviews({ params }: { params: Promise<{ reviewId: string }> }) {
  const reviewId = (await params).reviewId;
  return <h1>Opinia {reviewId}</h1>;
}
