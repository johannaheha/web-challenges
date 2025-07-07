import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "kiwi",
      color: "green",
    },
    {
      id: 1339,
      name: "strawberry",
      color: "red",
    },
    {
      id: 1340,
      name: "grape",
      color: "blue",
    },
    {
      id: 1341,
      name: "eggplant",
      color: "black",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} color={color}>
          {name}
        </Card>
      ))}
    </div>
  );
}

// Use the array method `map` to create a Card component for each fruit in your array.
//  Use the name of each object as the text of the component and the id as the key prop.

// ## Bonus

// Change the `Card` component so that it receives a `color` prop and set the background-color of the Card to this value. Use the color property of each fruit object
// for this prop.

// - Hint: check the `./src/components/Card.css` file for some cues as to how to handle having the colors change automatically
