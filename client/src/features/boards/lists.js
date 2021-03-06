import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchBoard } from "./boards";
import apiClient from "../../lib/ApiClient";

const initialState = [];

export const createList = createAsyncThunk(
  "lists/createList", 
  async ({ newList, callback }) => {
    const data = await apiClient.createList(newList)
    if (callback) {
      callback()
    }
    return data
  }
)

export const updateList = createAsyncThunk(
  "lists/updateList", 
  async ({ updatedList, listId, callback }) => {
    const data = await apiClient.updateList(updatedList, listId)
    if (callback) {
      callback()
    }
    return data
  }
)

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBoard.fulfilled, (state, action) => {
      let lists = action.payload.lists.reduce((acc, comm) => {
        //eslint-disable-next-line
        const { cards, ...listWithoutCards } = comm; 
        return acc.concat(listWithoutCards);
      }, []);
      return lists
    }),
    builder.addCase(createList.fulfilled, (state, action) => {
      return state.concat(action.payload)
    }),
    builder.addCase(updateList.fulfilled, (state, action) => {
      return state.map(list => list._id === action.payload._id ? action.payload : list)
    })
  },
});

export default listSlice.reducer;
