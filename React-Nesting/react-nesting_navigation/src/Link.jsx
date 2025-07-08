import { Children } from "react";

export function Link({ children, href }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
