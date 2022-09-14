import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [
    {
      MovieName: "Dragon Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
    {
      MovieName: "Ball Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
    {
      MovieName: "Dragon Dragon",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
  ],
};

const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: ({ payload }, state) => {
      const { MovieName, YourOpinion, Date } = payload;
      const newComment = {
        MovieName: MovieName,
        YourOpinion: YourOpinion,
        Date: Date,
      };
      state.comments = { ...state, newComment };
    },
  },
});
export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
