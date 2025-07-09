import { useEffect, useState } from "react";

//useState, speichert Daten. useEffect, ausführen von Seiteneffecten

export default function PokemonList() {
  //Start der React-Komponente PokemonList
  const [pokemon, setPokemon] = useState([]); //Initialisiert ein State
  const [apiUrl, setApiUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [apiUrl]);

  return (
    <main>
      <button type="button" onClick={() => setApiUrl(prevUrl)}>
        Previous Page
      </button>
      <button type="button" onClick={() => setApiUrl(nextUrl)}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
