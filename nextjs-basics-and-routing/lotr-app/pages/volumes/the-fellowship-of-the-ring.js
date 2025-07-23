import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Volume1() {
  return (
    <>
      <Link href="../">Go back</Link>
      <h1>{volumes[0].title}</h1>
      <p>{volumes[0].description}</p>
      <ul>
        {volumes[0].books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={144}
        width={144}
        alt=""
      ></Image>
      <Link href="./the-two-towers">next</Link>
    </>
  );
}
