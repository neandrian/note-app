import React from "react";

function NoteItem({ note }) {
  const bgColorMap = new Map([
    ["blue", "bg-blue-500"],
    ["red", "bg-red-500"],
    ["yellow", "bg-yellow-500"],
    ["green", "bg-green-500"],
    ["orange", "bg-orange-500"],
  ]);

  return <div className={`${bgColorMap.get(note.color)} py-5 rounded-xl h-40`}>{note.text}</div>;
}

export default NoteItem;
