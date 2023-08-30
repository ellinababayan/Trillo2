import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";

const LoginForm = (props) => {
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
          Welcome back! Log In to reveal new features
        </p>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={props.handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="username" className="label">
                Username
              </label>
              <Field
                type="username"
                name="username"
                placeholder="username"
                className="input"
              />
              <div className="error">
                <ErrorMessage
                  name="username"
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
                {props.errorMessage && (
                  <div className="error_message">{props.errorMessage}</div>
                )}
              </div>
              <div className="error">
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error_message"
                />
              </div>
              <div className="default_profile">
                <p className="rule">Use following credentials:</p>{" "}
                <p>Username: admin</p>
                <p> Password: 0979167159e</p>
              </div>
              <div className="buttonDiv">
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
