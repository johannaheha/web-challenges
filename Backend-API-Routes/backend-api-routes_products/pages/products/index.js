import useSWR from "swr";
import Link from "next/link";

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products");
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <ul>
      {" "}
      {data.map((product) => (
        <Link href={`/products/${product.id}`}>
          <li>{product.name}</li>
         
        </Link>
      ))}
    </ul>
  );
}
