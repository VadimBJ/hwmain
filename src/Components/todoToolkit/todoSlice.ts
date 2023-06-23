/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import TodosState from './types/todosState';
import TodoTask from './types/todo';

function getToDoLS(): TodoTask[] {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

const initialState: TodosState = { todos: getToDoLS() };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((obj) => obj.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((obj) => {
        if (obj.id === action.payload.id) {
          return { ...obj, description: action.payload.description };
        }
        return obj;
      });
    },
    togleIsDone: (state, action) => {
      state.todos = state.todos.map((obj) => {
        if (obj.id === action.payload.id) {
          return { ...obj, isDone: !obj.isDone };
        }
        return obj;
      });
    }
  },
});

export const {
 addTodo, deleteTodo, editTodo, togleIsDone
} = todosSlice.actions;

export default todosSlice.reducer;
