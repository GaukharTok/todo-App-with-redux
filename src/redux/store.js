import { configureStore } from "@reduxjs/toolkit";

import todoItemReducer from "../slices/todoItemsSlice";
export const store = configureStore({
  reducer: {
    todoItems: todoItemReducer,
  },
});
