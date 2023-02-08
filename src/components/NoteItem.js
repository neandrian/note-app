import React from "react";

function NoteItem({ note }) {
  return <div className={`bg-${note.color}-500 py-5 rounded-xl h-40`}>{note.text}</div>;
}

export default NoteItem;
