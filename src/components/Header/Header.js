import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav";
import "../../assets/css/header.css";

export default function Header({
  header,
  subheader,
  imgName,
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
        <div
          className={
            "header-content-subheader " +
            (activeState === 0 || activeState === 1
              ? "homeHeaderSub"
              : "otherHeaderSub")
          }
        >
          {subheader}
        </div>
        <div
          className={
            "header-content-content " +
            (activeState === 0 || activeState === 1
              ? "homeHeaderContent"
              : "otherHeaderContent")
          }
        >
          {children}
        </div>
      </div>
      {activeState === 0 || activeState === 1 ? null : (
        <img
          className={`header-image ${imgName}`}
          src={`/assets/images/${imgName}.png`}
          alt={`${imgName}`}
        />
      )}
    </header>
  );
}
