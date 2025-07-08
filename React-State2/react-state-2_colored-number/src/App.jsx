import "./styles.css";
import Counter from "./components/Counter";

export default function App() {
  return <Counter />;
}


// # React State 2: Colored Number

// This challenge provides a `./src/components/Counter.jsx` component with two buttons that increment or decrement a count.

// The current count is passed to the `./src/components/ColoredNumber.jsx` component, which displays the number with a color that depends on its value.

// However, at the moment, clicking the buttons doesn't change anything. Let's use state to fix that.

// ## Tasks

// Refactor the `./src/components/Counter.jsx` component so that it updates the displayed number when a button is clicked.

// You can follow these hints as a guideline:

// - It seems like the `Counter` component needs a state. What would be an appropriate initial value?
// - Pass the current count to the `ColoredNumber` component via the `value` prop.
// - Update the state when the buttons are clicked. How can you achieve that?
