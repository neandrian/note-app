import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changeSelectedColor, addNote } from "../redux/notes/notesSlice";

function Form() {
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.notes.selectedColor);
  const [text, setText] = useState("");

  const handleChangeColor = (color) => {
    dispatch(changeSelectedColor(color));
  };

  const handleChangeNoteText = (text) => {
    setText(text);
  };

  const handleAddNote = () => {
    if (text !== "") {
      dispatch(addNote({ text }));
      setText("");
    }
  };

  return (
    <div className="relative bg-white px-2 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-5 md:max-w-5xl">
      <div className="mx-auto max-w-5xl">
        <div className="flex">
          <textarea onChange={(e) => handleChangeNoteText(e.target.value)} value={text} cols="100" rows="5" className="w-max resize-none px-3 focus:outline-none" placeholder="Enter your note here..."></textarea>
        </div>
        <div className="flex justify-between">
          <div>
            <button onClick={() => handleChangeColor("green")} className="bg-green-400 w-8 h-8 mx-1 p-2 rounded-full border hover:border-gray-800">
              {selectedColor === "green" && <FaCheck className="text-gray-600" />}
            </button>
            <button onClick={() => handleChangeColor("red")} className="bg-red-400 w-8 h-8 mx-1 p-2 rounded-full border hover:border-gray-800">
              {selectedColor === "red" && <FaCheck className="text-gray-600" />}
            </button>
            <button onClick={() => handleChangeColor("blue")} className="bg-blue-400 w-8 h-8 mx-1 p-2 rounded-full border hover:border-gray-800">
              {selectedColor === "blue" && <FaCheck className="text-gray-600" />}
            </button>
            <button onClick={() => handleChangeColor("orange")} className="bg-orange-400 w-8 h-8 mx-1 p-2 rounded-full border hover:border-gray-800">
              {selectedColor === "orange" && <FaCheck className="text-gray-600" />}
            </button>
            <button onClick={() => handleChangeColor("yellow")} className="bg-yellow-400 w-8 h-8 mx-1 p-2 rounded-full border hover:border-gray-800">
              {selectedColor === "yellow" && <FaCheck className="text-gray-600" />}
            </button>
          </div>
          <button onClick={() => handleAddNote()} className="rounded-full bg-green-600 px-8 py-1 text-white hover:bg-green-500">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
