import Link from "next/link";
import { useRouter } from "next/router";
import { introduction, volumes } from "../../lib/data";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  function handleRandomClick() {
    const randomVolume = getRandomElement(volumes);
    // console.log(randomVolume.title);
    router.push(`/volumes/${randomVolume.nacktschnecke}`);
  }

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.nacktschnecke}>
            <Link href={`/volumes/${volume.nacktschnecke}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomClick}>Go to a Random Volume</button>
    </>
  );
}
