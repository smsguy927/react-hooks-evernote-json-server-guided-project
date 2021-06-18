import React from "react";
import NoteList from "./NoteList";

const API = "http://localhost:3000/notes";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const PLACEHOLDER_TITLE = "New Note";
const PLACEHOLDER_BODY = "New Note Body";
const DEFAULT_USER_ID = 1;

function Sidebar({
  allNotes,
  onSidebarNoteClick,
  onAddNote,
  onAtoZSortClick,
  onZtoASortClick
}) {
  function handleNewNoteClick() {
    fetch(API, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        userId: DEFAULT_USER_ID,
        title: PLACEHOLDER_TITLE,
        body: PLACEHOLDER_BODY
      })
    })
      .then((response) => response.json())
      .then((newNote) => onAddNote(newNote));
  }

  return (
    <div className="master-detail-element sidebar">
      <button onClick={onAtoZSortClick}>Sort A-Z</button>
      <button onClick={onZtoASortClick}>Sort Z-A</button>
      <NoteList allNotes={allNotes} onSidebarNoteClick={onSidebarNoteClick} />
      <button onClick={handleNewNoteClick}>New</button>
    </div>
  );
}

export default Sidebar;
