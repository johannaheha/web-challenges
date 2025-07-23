import Link from "next/link";
import { volumes } from "@/resources/lib/data";
import Image from "next/image";

export default function Volume3() {
  return (
    <>
      <Link href="../">Go back</Link>
      <h1>{volumes[2].title}</h1>
      <p>{volumes[2].description}</p>
      <ul>
        {volumes[2].books.map((book) => (
          <li key={book.ordinal}>
            <p>{book.ordinal}</p>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={144}
        width={144}
        alt=""
      ></Image>
      <Link href="./the-return-of-the-king">previous</Link>
    </>
  );
}
