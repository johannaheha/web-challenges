export default function App() {
  function Currywurst() {
    console.log("du hast den button gedrückt");
  }
  return (
    <>
      <Button
        backgroundColor="green"
        color="red"
        disabled={false}
        text="ichbin ein button"
        pommes={Currywurst}
      />
      <Button
        backgroundColor="pink"
        color="blue"
        disabled={true}
        text="ichbin button2"
      />
    </>
  );
}

function Button({ backgroundColor, color, disabled, text, pommes }) {
  return (
    <button
      style={{ color, backgroundColor }}
      disabled={disabled}
      onClick={pommes}
    >
      {text}
    </button>
  );
}

// ### 4. Pass a Function as a Prop

// Finally, let's pass a function as a prop to the `Button` component.

// - Move the `handleClick` function from the `Button` component to the `App` component.
// - In the `App` component, pass the `handleClick` function as a prop called `onClick` to the `Button` component
// (hint: `onEventName={handleEventName}`).
// - In the `Button` component, receive the `onClick` prop as a parameter.
// - Pass the received `onClick` prop to the `<button>`'s `onClick` prop.

// 🎉 Congratulations, you've built a button component that can handle any function passed to it as a prop!

// ## Notes

// - You only have to touch the `./src/App.jsx` file.

// ## Development

// To work locally, please install the dependencies using `npm i` first.

// Run `npm run dev` to start a development server and open the displayed URL in a browser.

// ### Scripts

// You can use the following command:

// - `npm run dev` to start a development server
