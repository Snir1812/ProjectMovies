import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [
    {
      id: 1,
      MovieName: "Dragon Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
    {
      id: 2,
      MovieName: "Ball Ball",
      YourOpinion: "Very good movie",
      Date: "12 / 2 / 2002",
    },
    {
      id: 3,
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
    addComment: (state, { payload }) => {
      state.comments.push(payload);
    },
    deleteComment: (state, { payload }) => {
      const idx = state.comments.findIndex((c) => c.id === payload);
      if (idx >= 0) state.comments.splice(idx, 1);
    },
    editComment: (state, { payload }) => {
      const idx = state.comments.findIndex((c) => c.id === payload.id);
      if (idx >= 0) state.comments[idx] = payload;
    },
  },
});
export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions;
