import React, { useContext } from "react";
import AuthContext from "../../context/Auth/AuthContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to='login' /> : <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
