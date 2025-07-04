import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

// Use the developer tools of your browser to check this fact.

// To fix this, replace the `<div>` with fragments `<></>`: they won't create an HTML element
// and thus break the layout!

// 🎉 Congratulations, you have seen the basic reason why and how to use React fragments!

// > 💡 Layout with flexbox is not the only reason for using fragments, but it's an easy-to-understand
// xample. In general, fragments are a great way to avoid unnecessary `<div>` clutter.
