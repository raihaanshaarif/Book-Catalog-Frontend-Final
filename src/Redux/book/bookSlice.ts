import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface searchedtextState {
  searchedText: string;
}

const initialState: searchedtextState = {
  searchedText: "",
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchedText: (state, action: PayloadAction<string>) => {
      state.searchedText = action.payload;
    },
  },
});
export const { searchedText } = bookSlice.actions;
