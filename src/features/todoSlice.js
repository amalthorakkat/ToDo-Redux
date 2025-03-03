import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        todoId: Date.now(),
        todoText: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.todoId !== action.payload);
    },
    completeTodo: (state, action) => {
      state.map((todo) => {
        if (todo.todoId === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      state.map((todo) => {
        if (todo.todoId === action.payload.todoId) {
          todo.todoText = action.payload.todoText;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
