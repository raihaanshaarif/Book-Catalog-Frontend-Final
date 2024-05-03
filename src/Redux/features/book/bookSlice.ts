import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface searchedtextState {
  searchByTGA: string;
  searchByGenre: string;
  searchByAuthor: string;
}

const initialState: searchedtextState = {
  searchByTGA: "",
  searchByGenre: "",
  searchByAuthor: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchByTGA: (state, action: PayloadAction<string>) => {
      state.searchByTGA = action.payload;
    },
    searchByGenre: (state, action: PayloadAction<string>) => {
      state.searchByGenre = action.payload;
    },
    searchByAuthor: (state, action: PayloadAction<string>) => {
      state.searchByAuthor = action.payload;
    },
  },
});
export const { searchByTGA, searchByGenre, searchByAuthor } = bookSlice.actions;
