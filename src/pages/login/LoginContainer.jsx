import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../service/auth.service";
import LoginForm from "./Login";

const LoginContainer = (props) => {
  const togglePassword = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const toggleConfirmPassword = () => {
    const x = document.getElementById("confirmation");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  const handleLogout = () => {
    authService.logoutUser();
    setIsLoggedIn(false);
  };

  const handleLogin = async (values, actions) => {
    try {
      const loginResult = await authService.loginUser(values, navigate);
      if (loginResult) {
        setIsLoggedIn(true);
        // TODO: navigate to where user came from, not always home
        navigate("/");
        console.log("success");
      }
    } catch (error) {
      setErrorMessage(error.message);
      console.log("something wrong");
    }
    actions.setSubmitting(false);
  };

  const navigate = useNavigate(); // For the automatic navigation
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login" onSubmit={props.handleSubmit}>
      <LoginForm
        togglePassword={togglePassword}
        toggleConfirmPassword={toggleConfirmPassword}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        errorMessage={props.errorMessage}
      />
    </div>
  );
};

export default LoginContainer;
