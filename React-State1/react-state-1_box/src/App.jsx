import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isActive, Banane] = useState(false);

  // let isActive = false;

  function handleClick() {
    Banane(!isActive);
    // Check that the value changes correctly.
    console.log(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{isActive ? `deactive` : `active`}</button>
    </main>
  );
}

// ## Tasks

// Refactor the code so that React re-renders the `App` component
//  whenever `isActive` changes.

// You can follow these hints as a guideline:

// - Replace the `let` variable with the `useState` function.
//   - Don't forget to import `useState` from React.
//   - Set the initial state value to `false`.
// - Inside the `handleClick` function, use the `set` function from `useState` to update the value of the `isActive` state.

// Once you’ve implemented these changes, you should be able to toggle the box’s color using the button! 🎉
