import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";
import "../../assets/css/header.css";

export default function Header({
  header,
  subheader,
  imgURL,
  children,
  activeState,
}) {
  return (
    <header className="header-container">
      <div className="navbar-container">
        <Navbar activeState={activeState} />
      </div>
      <div className="header-content">
        <div className="header-content-header">{header}</div>
        <div className="header-content-subheader">{subheader}</div>
        <div className="header-content-content">{children}</div>
      </div>
      <img className="header-image" src={`${imgURL}`} />
    </header>
  );
}
