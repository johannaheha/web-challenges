import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();
  const id = router.query.id;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  console.log(data);
  return (
    <ul>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        {data.price}
        {data.currency}
      </p>
      <p>{data.category}</p>
      <Link href="/products">
        <p>back</p>
      </Link>
    </ul>
  );
}
