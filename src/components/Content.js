import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
//import { useState } from "react";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({
  contentBoxNote,
  onCancelClick,
  onEditClick,
  isInEditMode,
  onUpdateNote,
  onDeleteNote
}) {
  const MODES = {
    EDIT: (
      <NoteEditor
        note={contentBoxNote}
        onCancelClick={onCancelClick}
        onUpdateNote={onUpdateNote}
      />
    ),
    INSTRUCT: <Instructions />,
    VIEW: (
      <NoteViewer
        note={contentBoxNote}
        onEditClick={onEditClick}
        onDeleteNote={onDeleteNote}
      />
    )
  };

  const getMode = () => {
    return isInEditMode ? "EDIT" : contentBoxNote ? "VIEW" : "INSTRUCT";
  };

  const mode = getMode();
  return <div className="master-detail-element detail">{MODES[mode]}</div>;
}

export default Content;
