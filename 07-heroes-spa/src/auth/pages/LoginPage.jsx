import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login("Jorge Vela");
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3">
        <h1 className="text-2xl font-bold mb-4">Acceder</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
