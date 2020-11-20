import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <a href='#' class='brand-logo left'>
          <img src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fdocument-export.canva.com%2F61wrM%2FDAEN_O61wrM%2F1%2Fpreview%2FaQJ4bVYh7G3Zg7Ky8scQZw-0001-13344360149.png' />
        </a>
        <ul id='nav-mobile' class='right '>
          <li>
            <Link to='/collections'> My Collections </Link>
          </li>
        </ul>
        <ul id='nav-mobile' class='right '>
          <li>
            <Link to='/login'> Login </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
