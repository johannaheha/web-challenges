import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  // zwei State-Variablen, speichern die übermittelten Werte
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleCreateUser(name, email) {
    setName(name);
    setEmail(email);
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser} />
      {/* // Pass the handleCreateUser function to the Form component */}
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
