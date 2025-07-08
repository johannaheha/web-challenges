import { useState } from "react";

export default function Counter({ onIncrement, onDecrement }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container"> 
        {/* //<- Ruft die Erhöhungsfunktion aus App auf */}
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onIncrement} //übergibt onIncrement
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onDecrement}
        >
          -
        </button>
      </div>
    </>
  );
}
