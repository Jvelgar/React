import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";

export const NavBar = () => {
  const { user, logoutAction } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
    logoutAction();
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                className="text-white text-2xl font-bold ml-2 flex items-center"
                to="/"
              >
                <img
                  className="h-8 w-8 mr-2"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <h1>Asociaciones</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/marvel"
                      ? "bg-gray-700 text-white"
                      : ""
                  }`}
                  to="/marvel"
                >
                  Marvel
                </Link>
                <Link
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/dc" ? "bg-gray-700 text-white" : ""
                  }`}
                  to="/dc"
                >
                  DC
                </Link>
                <Link
                  className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/search"
                      ? "bg-gray-700 text-white"
                      : ""
                  }`}
                  to="/search"
                >
                  Buscar
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <h5 className="text-white text-1xl font-bold ml-2 flex items-center">
                {user?.name}
              </h5>

              <button
                className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium `}
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
