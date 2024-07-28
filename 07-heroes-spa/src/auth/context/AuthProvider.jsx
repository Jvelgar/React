import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (name) => {
    const action = {
      type: types.login,
      payload: {
        id: 123,
        name: name,
      },
    };

    localStorage.setItem("user", JSON.stringify(action.payload));

    dispatch(action);
  };

  const logoutAction = () => {
    localStorage.removeItem("user");
    dispatch({ type: types.logout });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};
