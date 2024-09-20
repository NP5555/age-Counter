import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith("@gmail.com")) {
      toast.error("Email must end with @gmail.com");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    toast.success("Login successful!");
    onLogin();
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-400 to-purple-600 px-4 sm:px-6 lg:px-8">
  <div className="shadow-md rounded-xl p-6 sm:p-10 w-full max-w-sm sm:max-w-md bg-white">
    <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-purple-600">
      Login
    </h2>
    <form
      onSubmit={handleSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <input
        type="hidden"
        name="access_key"
        value="e328686c-026c-409e-a26b-5e4472fada65"
      />
      <div className="mb-4">
        <label className="block text-purple-500 text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your Gmail"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-purple-500 text-sm font-medium mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 text-white bg-purple-500 hover:bg-purple-700 rounded-lg font-semibold text-lg"
      >
        Log In
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;
