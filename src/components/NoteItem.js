import React from "react";

function NoteItem({ note, onSidebarNoteClick }) {
  // TODO: Expand or fix this when adding more users
  const userIDs = { 1: "smsguy927" };
  //

  const MAX_LENGTH = 20;

  const truncate = (text) =>
    text.length <= MAX_LENGTH ? text : `${text.slice(0, MAX_LENGTH)}...`;

  const { id, userId, title, body } = note;

  return (
    <li id={id} onClick={onSidebarNoteClick}>
      <h2 id={id}>{title}</h2>
      <p id={id}>{truncate(body)}</p>
      <aside id={id}>written by {userIDs[userId]}</aside>
    </li>
  );
}

export default NoteItem;
