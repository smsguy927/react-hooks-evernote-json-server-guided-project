import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import { useEffect, useState } from "react";

// Base Api for a single user
const API = "http://localhost:3000/notes";

function NoteContainer() {
  const fetchNotes = () => {
    fetch(API)
      .then((res) => res.json())
      .then((notes) => setAllNotes(notes))
      .catch((err) => console.log(err));
  };
  useEffect(fetchNotes, []);

  const [allNotes, setAllNotes] = useState([]);
  const [contentBoxNote, setContentBoxNote] = useState(null);
  const [isInEditMode, toggleEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEditClick = () => toggleEditMode(!isInEditMode);
  const handleCancelClick = () => {
    toggleEditMode(!isInEditMode);
  };

  function handleUpdateNote(updatedNote) {
    const updatedNotes = allNotes.map((note) => {
      return note.id === updatedNote.id ? updatedNote : note;
    });
    setAllNotes(updatedNotes);
    setContentBoxNote(updatedNote);
  }

  const handleSidebarNoteClick = (e) => {
    // TODO: set Content Box Note Here:
    // In progress, occasional bug when selecting note
    const selectedNoteId = parseInt(e.target.id);
    console.log(selectedNoteId);

    const selectedNote = allNotes.find((note) => note.id === selectedNoteId);
    console.log(selectedNote);
    setContentBoxNote(selectedNote);
    toggleEditMode(false);
  };

  const notesToDisplay = allNotes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddNote = (newNote) => {
    const updatedNotes = [...allNotes, newNote];
    setAllNotes(updatedNotes);
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = allNotes.filter((note) => note.id !== id);
    setAllNotes(updatedNotes);
    setContentBoxNote(null);
  };

  const handleAtoZSortClick = () => {
    const updatedNotes = [...allNotes];
    updatedNotes.sort((first, second) =>
      first.title.toLowerCase().localeCompare(second.title.toLowerCase())
    );
    console.log(updatedNotes);
    setAllNotes(updatedNotes);
  };

  const handleZtoASortClick = () => {
    const updatedNotes = [...allNotes];
    updatedNotes.sort((first, second) =>
      second.title.toLowerCase().localeCompare(first.title.toLowerCase())
    );
    console.log(updatedNotes);
    setAllNotes(updatedNotes);
  };

  return (
    <>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="container">
        <Sidebar
          allNotes={notesToDisplay}
          onSidebarNoteClick={handleSidebarNoteClick}
          onAddNote={handleAddNote}
          onAtoZSortClick={handleAtoZSortClick}
          onZtoASortClick={handleZtoASortClick}
        />
        <Content
          contentBoxNote={contentBoxNote}
          isInEditMode={isInEditMode}
          onEditClick={handleEditClick}
          onCancelClick={handleCancelClick}
          onUpdateNote={handleUpdateNote}
          onDeleteNote={handleDeleteNote}
        />
      </div>
    </>
  );
}

export default NoteContainer;
