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
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    udpateUser: (state, action) => {
      state.value.map((user) => {
        if (user.id == action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, udpateUser } = userSlice.actions;

// The filter() method creates a new array filled with elements that pass a test provided by a function.
