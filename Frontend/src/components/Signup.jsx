import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import API from '../api';

function Signup({onClose}) {
  const [form, setForm] = useState({
    email: "",
    number: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await API.post("/auth/signup", form);
      const user = res.data.user;

      localStorage.setItem("userid", user._id);

      navigate("/user");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center  z-[100] scale-95 opacity-0  scale-100 opacity-100 transition">

      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl text-center border border-gray-100 hover:scale-105 transition relative">
         <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <form onSubmit={Submit} className="space-y-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Enter your number"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={form.number}
            onChange={e => setForm({ ...form, number: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
          />

          <button className="w-full py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition">
            Sign up
          </button>

        </form>

        <p className="mt-4 text-sm">
          Already a member?{" "}
          <Link to="/login" className="text-emerald-500 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
//res.data is the body of the response sent by your backend

//{
//  "user": {
 //   "_id": "12345",
 //   "name": "John",
 //   "email": "john@example.com"
 // },
//  "token": "abcd1234"
//}