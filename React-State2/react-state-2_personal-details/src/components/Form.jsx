import { useState } from "react";

export default function Form({ onCreateUser }) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // onCreateUser übergibt name und email direkt an App in Zeile 15!

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const nameValue = form.elements.name.value;
    const emailValue = form.elements.email.value;
    // setName(nameValue);
    // setEmail(emailValue)
    onCreateUser(nameValue, emailValue);
    form.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
