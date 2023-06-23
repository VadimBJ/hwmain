/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { RootState, useAppDispatch } from '../../store';
import TodoTask from './types/todo';
import {
 addTodo, deleteTodo, editTodo, togleIsDone
} from './todoSlice';
import bground from '../../img/fon.jpg';
import reduxImg from '../../img/redux.svg';
import './Todo.css';

export default function ToDo(): JSX.Element {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState('');
  const [editDescription, setEditDescription] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDone, setIsDone] = useState(true);
  const [filter, setFilter] = useState<'all' | 'true' | 'false'>('all');
  const [edit, setEdit] = useState<number>(-1);
  const toDoList = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDoList));
  }, [dispatch, toDoList]);

  const handleEdit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (editDescription.trim()) {
      const todoItem: TodoTask = {
        id: edit,
        description: editDescription.trim(),
        isDone: false,
      };
      dispatch(editTodo(todoItem));
      setEditDescription('');
      setEdit(-1);
    }
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    if (description.trim()) {
      const todoItem: TodoTask = {
        id: new Date().getTime(),
        description: description.trim(),
        isDone: false,
      };
      dispatch(addTodo(todoItem));
      setDescription('');
    }
  };

  return (
    <>
      <img src={bground} alt="bgroud" className="mainImg" />
      <h1 className="h1title">To Do List</h1>
      <div className="todoContainer">
        <div className="todoForm">
          <form onSubmit={handleSubmit}>
            <input
              className="todoInput"
              value={description}
              placeholder="Enter your task here.."
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              className="todoButton"
              type="submit"
              data-tip="Это всплывающая подсказка"
            >
              Add Task
            </button>
          </form>
          <span className="filterSpan">Filter: </span>
          <button
            type="button"
            className="filterButton"
            style={{ backgroundColor: filter === 'all' ? 'grey' : 'lightgrey' }}
            onClick={() => {
              setFilter('all');
            }}
          >
            All
          </button>
          <button
            type="button"
            className="filterButton"
            style={{
              backgroundColor: filter === 'false' ? 'grey' : 'lightgrey',
            }}
            onClick={() => {
              setFilter('false');
            }}
          >
            Active
          </button>
          <button
            type="button"
            className="filterButton"
            style={{
              backgroundColor: filter === 'true' ? 'grey' : 'lightgrey',
            }}
            onClick={() => {
              setFilter('true');
            }}
          >
            Done
          </button>
        </div>
        <div className="todoListContainer">
          {toDoList
            .filter((todo: TodoTask) => {
              if (filter === 'true') {
                return todo.isDone === true;
              }
              if (filter === 'false') {
                return todo.isDone === false;
              }
              return true;
            })
            .map((todo: TodoTask) => (
              <div key={todo.id} className="todoItem">
                <button
                  title="Delete task"
                  className="deleteButton"
                  type="button"
                  onClick={() => {
                    dispatch(deleteTodo(todo.id));
                  }}
                >
                  <AiOutlineDelete />
                </button>
                <button
                  title="Edit task"
                  type="button"
                  className="editButton"
                  onClick={() => {
                    setEdit(todo.id);
                    setEditDescription(todo.description);
                  }}
                >
                  <AiOutlineEdit />
                </button>
                <p
                  title="Click on task to change its status"
                  onClick={() => {
                    dispatch(togleIsDone(todo));
                  }}
                  className={todo.isDone ? 'task completed' : 'task'}
                >
                  {todo.description}
                </p>
              </div>
            ))}
        </div>
        {edit !== -1 && (
          <form onSubmit={handleEdit}>
            <input
              className="todoInput"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <button className="todoButton" type="submit">
              Save
            </button>
          </form>
        )}
      </div>
      <div className="reduxTK">
        <img src={reduxImg} alt="redux" />
        Redux Toolkit
      </div>
    </>
  );
}
