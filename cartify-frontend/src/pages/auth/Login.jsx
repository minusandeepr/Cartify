// src/pages/auth/Login.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import Button from "../../components/ui/Button";
import { setAuthStart, setAuthSuccess, setAuthFailure } from "../../features/auth/authSlice";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(setAuthStart());

    try {
      const res = await API.post("/auth/login", form);
      const { token, user } = res.data;

      // store token & user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(setAuthSuccess({ token, user }));

      // redirect based on role
      if (user.role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      dispatch(setAuthFailure(err?.response?.data?.message || "Login failed"));
      alert(err?.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[72vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Sign in</h2>
        <p className="text-sm text-gray-500 mb-6">Welcome back! Please log in to your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-indigo-600 hover:underline">
            Create one
          </Link>
        </div>
      </div>
    </div>
  );
}
