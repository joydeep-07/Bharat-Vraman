import { useState } from "react";
import axios from "axios";
import { AUTH_ENDPOINTS } from "../api/endpoint";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post(AUTH_ENDPOINTS.REGISTER, form);
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4">Register</h2>

        <input
          className="w-full mb-2 p-2 border"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full mb-2 p-2 border"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full mb-4 p-2 border"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleRegister}
          className="bg-black text-white w-full p-2"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
