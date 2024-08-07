import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "jvelgar93@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("Called");
  }, []);
  
  useEffect(() => {
    //console.log("formState change");
  }, [formState]);
  
  useEffect(() => {
    //console.log("email change");
  }, [email]);
  

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="UserName"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="jvelgar93@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />


        {
            (username === 'strider2') && <Message/>
        }
     
    </>
  );
};

export default SimpleForm;
