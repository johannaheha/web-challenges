import PokemonList from "./components/PokemonList";
import "./styles.css";

export default function App() {
  return <PokemonList />;
}

// # React Effects and Fetch: Pokémon API

// This app is designed to load and display a list of Pokémon.

// ## Tasks

// Open the file `./src/components/PokemonList.jsx`.

// Currently, the Pokémon are only fetched when the "Load Pokémon" button is clicked. Let’s update the code so that the app fetches Pokémon automatically when it first renders.

// - Remove the "Load Pokémon" button.
// - Modify the code so that the `loadPokemon` function is executed automatically when the component is initially rendered.

// _Hint:_ Don’t forget to include the dependency array!
