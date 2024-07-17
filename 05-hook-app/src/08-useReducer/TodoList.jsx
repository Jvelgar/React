import { TodoIntem } from "./index.js";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, i) => (
        <TodoIntem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  );
};
