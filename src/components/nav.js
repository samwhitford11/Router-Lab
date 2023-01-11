import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>STIZZY.STOCKS</div>
      </Link>
      <Link to="/stocks">
        <div>STOCKS</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
    </div>
  );
};

export default Nav;