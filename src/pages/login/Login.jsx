import React, { createContext, useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import authService from "../../service/auth.service";

const LoginForm = (props) => {
  //   const AuthContext = createContext();

  //   const useAuth = () => {
  //     return useContext(AuthContext);
  //   };
  const navigate = useNavigate(); // For the automatic navigation
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div className="loginField">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div>
        <h1 className="loginName">Login</h1>
        <p className="signupSubtitle">
          Welcome back! Log in to generate a date plan
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          //   validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="email" className="label">
                Email
              </label>
              <Field
                type="username"
                name="email"
                placeholder="email"
                className="input"
              />

              <div className="error">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error_message"
                />
              </div>
              <label htmlFor="password" className="label">
                Password
              </label>
              <div>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="input"
                />
                <span className="eye" onClick={props.togglePassword}>
                  <i id="toggler" className="far fa-eye"></i>
                </span>
              </div>

              <div className="error">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error_message"
                />
              </div>
              <label className="terms" htmlFor="rememberMe">
                <input
                  type={"checkbox"}
                  name="rememberMe"
                  className="checkbox"
                  id="rememberMe"
                />
                <div className="checkbox_input"></div>
                Remember me
              </label>
              <div className="buttonDiv">
                {errorMessage && (
                  <div className="error_message">{errorMessage}</div>
                )}
              </div>
              <div className="error">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error_message"
                />
              </div>

              <div className="buttonDiv">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>

              <div>
                <NavLink to="/signup">
                  <div className="already">
                    Don&apos;t have an account?{" "}
                    <span className="underline">Sign Up</span>
                  </div>
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
