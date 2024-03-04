import React, { useState } from "react";
import useLoginHook from "../hooks/LoginHook";

export default function Login() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLoginHook();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const details = { fullname, username, password };

    await login(details);
    setFullname("");
    setUsername("");
    setPassword("");
  };
  return (
    <div className="login">
      <form onSubmit={handlesubmit}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3>
          Don't have an account?{" "}
          <a href="http://localhost:3000/signup">Signup</a>
        </h3>
        <button>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
