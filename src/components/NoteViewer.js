import React from "react";
const API = "http://localhost:3000/notes";

function NoteViewer({ note, onEditClick, onDeleteNote }) {
  const { title, body, id } = note;
  function handleDeleteClick() {
    fetch(`${API}/${id}`, {
      method: "DELETE"
    });
    onDeleteNote(id);
  }
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onEditClick}>Edit</button>
      <button className="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </>
  );
}

export default NoteViewer;
