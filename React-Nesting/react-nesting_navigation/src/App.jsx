import "./styles.css";

import { Header } from "./Header.jsx";
import { Navigation } from "./Navigation.jsx";
import { Link } from "./Link.jsx";
import { Image } from "./Image.jsx";

export default function App() {
  return (
    <>
      <Header>
        {" "}
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Image src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}

// ### 5. Logo and Avatar component

// Task: Create a `Logo` and `Avatar` component, respectively.

// - Use the same JSX as in the `App.jsx` as basis (copy the tags including `<a>` or `<button>`
// tag and their children)
//   - import the `Image` component and use it.
//   - make sure to import the correct `jpg` file.
// - In the `App.jsx` file, import the `Logo` and `Avatar` component
//  and replace the relevant JSX to use them.
// - Check that the UI still looks the same.

// You should now have an `App` component returning only your custom components
//  (besides `main`)! Nice work 🎉

// To check, you App.jsx file should look something like this now:

// ```.jsx
// import Header from "./components/Header";
// import Avatar from "./components/Avatar";
// import Logo from "./components/Logo";
// import Navigation from "./components/Navigation";
// import Link from "./components/Link";
// import "./styles.css";

// export default function App() {
// return (
// <>
// <Header>
// <Logo />
// <Navigation>
// <Link href="#home">Home</Link>
// <Link href="#about">About</Link>
// <Link href="#impressum">Impressum</Link>
// </Navigation>
// <Avatar />
// </Header>
// <main>content goes here…</main>
// </>
// );
// }

// ```
