import React from "react";
import { useDispatch } from "react-redux";
import { changeSearchText } from "../redux/notes/notesSlice";

function Search() {
  const dispatch = useDispatch();
  return (
    <div>
      <input onChange={(e) => dispatch(changeSearchText(e.target.value))} type="text" className="h-9 rounded-full border border-gray-400 px-5 shadow-xl outline-none" placeholder="Search..." />
    </div>
  );
}

export default Search;
