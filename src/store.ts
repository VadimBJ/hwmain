// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import todoReducer from './Components/todoToolkit/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// для правильной типизации будем использовать useAppDispatch() вместо useDispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
