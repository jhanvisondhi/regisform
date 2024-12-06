import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => navigate("/home")}>Skip Login</button>
    </div>
  );
};

export default LoginPage;
