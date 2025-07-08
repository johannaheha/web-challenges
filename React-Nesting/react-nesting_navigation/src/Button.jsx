export function Button({ children, ariaLabel, onClick }) {
  return (
    <button type="button" onClick={onClick} aria-label="ariaLabel"></button>
  );
}
