import useSWR from "swr";

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character");
  console.log(data);
  console.log(isLoading);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data.firstName}!</div>;
}
