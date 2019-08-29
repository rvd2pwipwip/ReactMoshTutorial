import React from "react";

const Navbar = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {`${counters.filter(c => c.value > 0).length}`}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
