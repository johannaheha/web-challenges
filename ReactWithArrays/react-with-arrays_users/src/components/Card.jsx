import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {/* // 2) Switch to the card component and use `Array.map` to create a `Tag` for each role in the roles array of a user. Make sure to add a unique
// key to each tag - in this instance, feel free to use the role itself as a key. */}

        {user.roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
        {/* <Tag tag={user.roles[0]} /> */}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
