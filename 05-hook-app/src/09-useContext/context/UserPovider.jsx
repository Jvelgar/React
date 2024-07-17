import { useState } from "react";
import { UserContext } from "./UserContext";

const user = {
  id: 1,
  name: "Jorge",
  email: "jvelgar93@gmail.com",
};

export const UserPovider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
