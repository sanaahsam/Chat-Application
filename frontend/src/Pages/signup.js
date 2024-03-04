import React, { useState } from "react";
import { useSignupHook } from "../hooks/SignupHook";

export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");

  const { signup } = useSignupHook();

  //handle submit
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("password do not match");
      return;
    }

    const data = { fullname, username, password, confirmpassword, gender };
    await signup(data);
    setFullname("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  //forgender
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="signup">
      <form onSubmit={handlesubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="full name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="confirm password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="gender">
          <label htmlFor="Gender">Choose your gender: </label>
          <select
            name="Gender"
            id="Gender"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <h3>
          Already have an account?{" "}
          <a href="http://localhost:3000/login">Login</a>
        </h3>
        <button>Signup</button>
      </form>
    </div>
  );
}
/*
{ fullname, username, confirmpassword, password, gender }
*/
