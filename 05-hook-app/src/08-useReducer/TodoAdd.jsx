import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    console.log(newTodo);
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Agregar ..."
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
