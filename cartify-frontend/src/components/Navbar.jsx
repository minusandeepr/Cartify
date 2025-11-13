import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
import Button from "./ui/Button";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(logout());
      navigate("/auth/login");
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Cartify
      </Link>

      <div className="flex items-center gap-4">
        {!isAuthenticated ? (
          <>
            <Link
              to="/auth/login"
              className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-700 text-sm font-medium">
              {user?.name || "User"}
            </span>
            <Button
              onClick={handleLogout}
              className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-lg shadow-sm transition"
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}
