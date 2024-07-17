import React, { useEffect, useReducer } from "react";
import { TodoList, todoReducer, TodoAdd } from "./index.js";
import { useTodo } from "./useTodo.js";

export const TodoApp = () => {
  const {
    state,
    handleDeleteTODO,
    handleNewTODO,
    handleToggleTODO,
    todoCount,
    pendingTodosCount,
  } = useTodo();

  console.log(state);
  return (
    <>
      <h1>
        TodoApp: {todoCount}, <small>pendientes: {pendingTodosCount}</small>{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={state}
            onDeleteTodo={handleDeleteTODO}
            onToggleTodo={handleToggleTODO}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTODO} />
        </div>
      </div>
    </>
  );
};
