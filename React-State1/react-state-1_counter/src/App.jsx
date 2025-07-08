import "./styles.css";

export default function App() {
  // let count = 0;

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCount(count--);
            console.log(count);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCount(count++);
            console.log(count);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
// - Using `let` doesn't seem to be the right approach for declaring a variable in this scenario.
// - Is there a built-in React function you can use instead?
//   - Make sure to import this function.
// - Currently, the `<button>`s' event handlers log an emoji to the console.
//   - The event handlers should instead handle a different type of functionality.
