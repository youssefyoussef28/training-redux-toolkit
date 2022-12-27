import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

const initialState = { value: UsersData };

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
