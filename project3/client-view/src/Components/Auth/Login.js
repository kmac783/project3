import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import AlertContext from "../../context/Alert/AlertContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userData;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        username,
        password,
      });
    }
  };
  return (
    <div>
      <div className="container">
        <h2 className="center-align">Login</h2>
        <form
          onSubmit={(e) => {
            onSubmitForm(e);
          }}
        >
          {" "}
          <div className="input-field" id="login-container">
            <div className="div-center">
              {" "}
              <input
                id="login"
                name="username"
                type="text"
                value={username}
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <input
                id="login"
                name="password"
                type="text"
                value={password}
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>

            <button
              type="submit"
              className="btn small purple waves-effect waves-light"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
