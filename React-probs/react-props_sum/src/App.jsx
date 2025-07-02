export default function App() {
  return <Sum valueA={3} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  const solution = valueA + valueB;
  return (
    <p>
      {valueA} + {valueB} = {solution}{" "}
    </p>
  );
}
