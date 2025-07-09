import PokemonList from "./components/PokemonList";
import "./styles.css";

export default function App() {
  return <PokemonList />;
}


// # React Effects and Fetch: Pokémon API with Paging

// We want to display a complete list of Pokémon, but the API only returns 20 Pokémon per request and uses pagination. Let's implement the logic to navigate through the individual pages.

// ## Tasks

// ### The "Next Page" Button

// Open the file `./src/components/PokemonList.jsx`.

// There is a button labeled "Next Page", but it currently has no functionality. Add the logic to load the next page of Pokémon.

// > _Hint 1:_ You need a way to store the current page and update this value to load the next page.

// > _Hint 2:_ Look at the URL parameter `?offset=` used in the `fetch` request. The API starts by returning the first 20 Pokémon. You need to modify the URL to fetch the next page. You can either keep track of the `offset` yourself or use the `next` value provided in the API response.

// ### The "Previous Page" Button

// Can you adapt your solution for the button to navigate to the previous page?

// You might notice that the app crashes when you are on the first page and click the "Previous Page" button. Can you implement a way to disable or hide the button when there is no previous page available?

// > _Hint:_ The API response includes a `previous` value, which indicates if a previous page exists.
