import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    noOfPieces: 20,
    noOfWeddingCrests: 0,
    noOfIllustrations: 0,
  },
  reducers: {
    setNoOfPieces: (state, action) => {
      state.noOfPieces = action.payload;
    },
    setNoOfWeddingCrests: (state, action) => {
      state.noOfWeddingCrests = action.payload;
    },
    setNoOfIllustrations: (state, action) => {
      state.noOfIllustrations = action.payload;
    },
  },
});

export const { setNoOfPieces, setNoOfWeddingCrests, setNoOfIllustrations } =
  productSlice.actions;

export default productSlice.reducer;
