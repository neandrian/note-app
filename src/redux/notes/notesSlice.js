import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: 1,
        text: "Deneme note yazısı",
        color: "blue",
      },
    ],
    selectedColor: "red",
    searchText: "",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push({ ...action.payload, color: state.selectedColor });
      },
      prepare: ({ text }) => {
        return {
          payload: {
            id: nanoid(),
            text,
          },
        };
      },
    },
    changeSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
    changeSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const selectFilteredNotes = (state) => {
  if (state.notes.searchText === "") {
    return state.notes.items;
  }

  return state.notes.items.filter((note) => note.text.indexOf(state.notes.searchText) !== -1);
};

export const { addNote, changeSelectedColor, changeSearchText } = notesSlice.actions;

export default notesSlice.reducer;
