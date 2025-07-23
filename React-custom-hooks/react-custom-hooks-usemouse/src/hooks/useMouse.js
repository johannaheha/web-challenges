import { useEffect, useState } from "react";

export default function useMouse() {
  const [x, setX] = useState(200);
  const [y, setY] = useState(100);
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) => {
      setX(event.clientX);
      setY(event.clientY);
    });
  }, []);
  return [x, y];
}

// - Write the following logic only inside the useMouse hook! hamwa
// - You need a state for the cursor position, since the value needs to change. hamwa
// - Within a useEffect, you can add an event listener to the body of the page with `document.body.addEventListener`.hamwa
// - We want to listen to the `mousemove` event.hamwa
// - Whenever the cursor position changes, the new position needs to be set as new state value.
// - You can read the cursor position via the `mousemove` event object: `event.clientX`, `event.clientY`.
