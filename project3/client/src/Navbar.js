import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/Auth/AuthContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  const onLogout = async () => {
    await logout();
    window.location.reload();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.username}</li>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/collections"> My Collections </Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <a onClick={onLogout}>
          Logout <i className="material-icons right">arrow_back</i>
          <span className="hide">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register"> Register </Link>
      </li>
      <li>
        <Link to="/login"> Login </Link>
      </li>
      <li>
        <Link to="/about"> About</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img src="/download.jpg" />
        </a>
        <p>Find Me...</p>
        <ul id="nav-mobile" className="right ">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
