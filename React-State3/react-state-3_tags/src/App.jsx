import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

//Hier lebt der state tag

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }

  function handleDeleteTag(tagToDelete) {
    const filterdTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(filterdTags);
  }

  return (
    <main className="app">
      {/* //Übergibt das prob */}
      <Form CURRYWURST={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
