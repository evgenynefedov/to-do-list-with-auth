import React from "react";
import { useState } from "react";
import useLogin from "../../../hooks/useLogin";

import "./index.css";

export const LoginForm: React.FC = () => {
  //An another way to manage it is to Use e.target.[input name].value and submit form on a click
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, login } = useLogin();

  return (
    <div className="signinContainer">
      <h2>Please Sign In</h2>
      <form className="signinForm">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
          id="login"
        />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          id="password"
        />
        <button
          onClick={() => {
            login({ username, password });
          }}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Log-in"}
        </button>
      </form>
      {error?.length ? <div className="error">{error}</div> : ""}
    </div>
  );
};
