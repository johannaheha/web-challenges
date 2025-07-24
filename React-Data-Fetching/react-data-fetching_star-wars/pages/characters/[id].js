import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  // const id = 1;
  const {
    data: person,
    error,
    isLoading,
  } = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher);
  console.log(person);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>is Loading</div>;

  return (
    <Layout>
      <Card
        id={id}
        name={person.name}
        height={person.height}
        eyeColor={person.eye_color}
        birthYear={person.birth_year}
      />
    </Layout>
  );
}
