import { useForm } from "../hook/useForm";

const FormWithCustomHook = () => {
  const {formState, onInputChange, username, email, password, onResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  });

  //const {username, email, password} = formState;

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Nombre de Usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary">Borrar</button>
    </>
  );
};

export default FormWithCustomHook;
