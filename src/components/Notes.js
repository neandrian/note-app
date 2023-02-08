import React from "react";

import { useSelector } from "react-redux";
import { selectFilteredNotes } from "../redux/notes/notesSlice";
import NoteItem from "./NoteItem";

function Notes() {
  const notes = useSelector(selectFilteredNotes);

  return <div className="grid grid-cols-4 gap-4 text-center">{notes && notes.map((note) => <NoteItem key={note.id} note={note} />)}</div>;
}

export default Notes;
