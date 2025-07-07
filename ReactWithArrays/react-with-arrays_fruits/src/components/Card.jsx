import { Children } from "react";
import "./Card.css";

export default function Card({ children, color }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {children}
    </p>
  );
}
