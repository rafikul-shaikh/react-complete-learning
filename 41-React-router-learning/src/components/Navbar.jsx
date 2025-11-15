import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div style={{ background: "pink", padding: "20px" }}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/About"}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/Contact"}
        >
          Contact
        </NavLink>

        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "blue",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to={"/User"}
        >
          User
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
