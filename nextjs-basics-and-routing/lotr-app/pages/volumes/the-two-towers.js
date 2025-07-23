import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Volume2() {
  return (
    <>
      <Link href="../">Go back</Link>
      <h1>{volumes[1].title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        {volumes[1].books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={144}
        width={144}
        alt=""
      ></Image>
      <Link href="./the-fellowship-of-the-ring">previous</Link>
      <p></p>
      <Link href="./the-return-of-the-king">next</Link>
    </>
  );
}
