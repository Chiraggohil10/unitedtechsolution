import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import { FaUser, FaLock } from "react-icons/fa";
import Button from "../Components/common/Button.jsx";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login(username, password)) {
      navigate("/admin");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Admin Login
        </h2>
        <div className="space-y-5">
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 ring-blue-300 bg-gray-50">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 ring-blue-300 bg-gray-50">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button
              onClick={handleLogin}
              className={
                "w-30 bg-blue-600 text-white font-semibold cursor-pointer rounded-lg hover:bg-blue-700"
              }
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
