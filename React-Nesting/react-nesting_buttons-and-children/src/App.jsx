import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button1</Button>
      <Button>hallöchen</Button>
      <Button>popöchen</Button>
      <Button>Servus die Wadeln</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

// # React Nesting: Buttons and Children

// For now, there is a `Button` component in the `./src/App.jsx` which is rendered several times.

// Unfortunately, all buttons show the same text; supposing that different
// buttons do different things in an application, this is not really a reuseable component.

// Let's use the `children` prop to make the component more flexible!

// ## Task

// Switch to the `./src/App.jsx` file and

// 4. add text of your choice between the opening and closing tags
// of the Button elements (use different texts to see any difference in the browser!)

// 🎉 Congratulations, you can now use the `children` prop to create really flexible components!
