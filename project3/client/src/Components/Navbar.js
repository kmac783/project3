import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/Auth/AuthContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;
  const onLogout = async () => {
    await logout();
    window.location.reload();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <i className="material-icons right">collections</i>
      </li>
      <li>
        <Link to="/collections"> My Collections</Link>
      </li>

      <li>Hello {user && user.username}</li>
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
        <Link to="/">Home</Link>
      </li>
      <li>|</li>
      <li>
        <Link to="/about"> About</Link>
      </li>
      <li>
        <Link to="/register"> Register </Link>
      </li>
      <li>
        <Link to="/login"> Login </Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className="nav-wrapper">
        <div class="logo">
          <a href="/" className="brand-logo-left">
            <img src="/download.png" />
            <div class="logo-text">FIND ME...</div>
          </a>
        </div>

        <ul id="nav-mobile" className="right ">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
