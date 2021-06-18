import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ allNotes, onSidebarNoteClick }) {
  return (
    <ul>
      {/* Render list of notes here... */}
      {allNotes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onSidebarNoteClick={onSidebarNoteClick}
        />
      ))}
    </ul>
  );
}

export default NoteList;
