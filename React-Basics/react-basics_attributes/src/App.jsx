import "./styles.css";

export default function App() {
  return Article();
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Text of your choice</h2>
      <form>
        <label htmlFor="Eingabe">Eingabefeld</label>
        <input type="text" id="Eingabe"></input>
      </form>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/React"
      >Click me for more information</a>
    </article>
  );
}
