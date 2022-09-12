import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [
    {
      MovieName: "Dragon Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
    {
      MovieName: "Dragon Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
    {
      MovieName: "Dragon Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
  ],
};

const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
});
export default commentsSlice.reducer;
// export const {} = commentsSlice.actions;
