import Link from "next/link";
import { introduction } from "../resources/lib/data";
import { volumes } from "../resources/lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="./volumes/the-fellowship-of-the-ring">
            {
              volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
                .title
            }
          </Link>
        </li>
        <li>
          <Link href="volumes/the-two-towers">
            {volumes.find(({ slug }) => slug === "the-two-towers").title}
          </Link>
        </li>
        <li>
          <Link href="volumes/the-return-of-the-king">
            {
              volumes.find(({ slug }) => slug === "the-return-of-the-king")
                .title
            }
          </Link>
        </li>
      </ul>
    </div>
  );
}
