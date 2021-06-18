import React from "react";
import { useState } from "react";

const API = "http://localhost:3000/notes";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

function NoteEditor({ note, onCancelClick, onUpdateNote }) {
  const { id, userId, title, body } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newBody, setNewBody] = useState(body);

  const handleTitleChange = (event) => {
    console.log(event.target.value);
    setNewTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    console.log(event.target.value);
    setNewBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: HEADERS,
      body: JSON.stringify({ title: newTitle, body: newBody })
    })
      .then((response) => response.json())
      .then((updatedNote) => onUpdateNote(updatedNote));
  };

  return (
    <form
      className="note-editor"
      id={id}
      userid={userId}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        value={newTitle}
        onChange={handleTitleChange}
      />
      <textarea name="body" value={newBody} onChange={handleBodyChange} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={onCancelClick}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NoteEditor;
