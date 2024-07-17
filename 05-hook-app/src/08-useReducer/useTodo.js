import { useEffect, useReducer } from "react";
import { todoReducer } from "./index.js";

const initialState = [];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const handleNewTODO = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTODO = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggleTODO = (todoId) => {
    const action = {
      type: "toggle",
      payload: todoId,
    };
    dispatch(action);
  };

  const todoCount = state.length;
  const pendingTodosCount = state.filter((todo) => !todo.done).length;

  return {
    state,
    handleNewTODO,
    handleDeleteTODO,
    handleToggleTODO,
    todoCount,
    pendingTodosCount,
  };
};
