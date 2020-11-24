import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import AlertContext from "../../context/Alert/AlertContext";

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    password2: "",
  });

  const { username, password, password2 } = userData;

  const onChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (username === "" || password === "" || password2 === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        username,
        password,
      });
    }
  };
  return (
    <div>
      <div className="container">
        <h2 className="center-align">Register</h2>
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
              <input
                id="login"
                name="password2"
                type="text"
                value={password2}
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

export default Register;
