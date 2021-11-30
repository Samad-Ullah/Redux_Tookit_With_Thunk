import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCost = createAsyncThunk(
  'stock/getCost',
  async ({ symbol }) => {

    return fetch(

      `https://jsonplaceholder.typicode.com/posts?_limit=${symbol}`
    ).then((res) => res.json())
  }
)


const initialState = {
  value: [],
  status: null,
}


export const stockSlice = createSlice({
  name: "stock",
  initialState,

  extraReducers: {

    [getCost.fulfilled]: (state, { payload }) => {
      state.value = payload
      state.status = 'success'
    },
  },




})




export default stockSlice.reducer
