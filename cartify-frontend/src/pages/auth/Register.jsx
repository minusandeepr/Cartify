// src/pages/auth/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import Button from "../../components/ui/Button";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function update(e) { setForm((s) => ({ ...s, [e.target.name]: e.target.value })); }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/auth/register", form);
      // on success, navigate to welcome or login
      navigate("/auth/welcome");
    } catch (err) {
      console.error("Register error", err);
      alert(err?.response?.data?.message || "Register failed");
    } finally { setLoading(false); }
  }

  return (
    <div className="min-h-[72vh] flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Create an account</h2>
        <p className="text-sm text-gray-500 mb-6">Start shopping on Cartify — it’s fast and free.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Username</label>
            <input name="username" value={form.username} onChange={update} required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input name="email" type="email" value={form.email} onChange={update} required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input name="password" type="password" value={form.password} onChange={update} required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" />
          </div>

          <div className="pt-2">
            <Button type="submit" disabled={loading} className="w-full">{loading ? "Creating..." : "Create account"}</Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/auth/login" className="text-indigo-600">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
