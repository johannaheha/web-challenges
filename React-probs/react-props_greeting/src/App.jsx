export default function App() {
  return <Greeting name="Felix" />;
}

function Greeting({ name }) {
  const coach = "Felix";
  const isCoach = name === coach;

  return <p>Hello, {isCoach ? "Coach" : name}!</p>;
}
