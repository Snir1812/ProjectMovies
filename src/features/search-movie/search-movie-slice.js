import { createSlice } from "@reduxjs/toolkit";

const initialState = { quary: "" };
const searchedQuary = createSlice({
  name: "searched",
  initialState,
  reducers: {
    ChangeQuary(state, action) {
      state.quary = action.payload;
      console.log(state.quary);
    },
  },
});
export default searchedQuary.reducer;
export const { ChangeQuary } = searchedQuary.actions;
