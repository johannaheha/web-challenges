import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { nacktschnecke } = router.query;

  if (!nacktschnecke) {
    return <p>Loading...</p>;
  }

  const volumeIndex = volumes.findIndex(
    (volume) => volume.nacktschnecke === nacktschnecke
  );

  if (volumeIndex === -1) {
    return <p>Volume not found.</p>;
  }

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume && (
        <div>
          <Link href={`/volumes/${previousVolume.nacktschnecke}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      )}
      {nextVolume && (
        <div>
          <Link href={`/volumes/${nextVolume.nacktschnecke}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      )}
    </>
  );
}
