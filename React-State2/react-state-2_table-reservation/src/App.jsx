import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0); //State für die Anzahl der Personen

  function handleIncrement() {
    setPeople(people + 1);
  }

  function handleDecrement() {
    if (people > 0) setPeople(people - 1);
  }
  // handleInDecrement sind funktionen zum Erhöhen/verringern die an den Counter übergeben werden

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      {/* //Counter bekommt die beiden Funktionen als Prop , prop beginnt immer mit on, funktion mit handle*/}

      <p>You are going to reserve a table for {people} people.</p>
      {/* //{peole}->Dynamische Anzeige der Anzahl */}
    </div>
  );
}
