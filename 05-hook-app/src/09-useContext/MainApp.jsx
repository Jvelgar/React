import { Route, Routes } from "react-router";
import { AboutPage, HomePage, LoginPage, Navbar } from "./index.js";
import { UserPovider } from "./context/UserPovider.jsx";

export const MainApp = () => {
  return (
    <UserPovider>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </UserPovider>
  );
};
