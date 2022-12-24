import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Pedro", age: 20, email: "email@gmail.com" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
