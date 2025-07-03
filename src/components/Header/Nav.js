import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ activeState }) {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="navbar-nav">
      <NavLink to="/home1" className="logo">
        <img src="/assets/images/logo.png" alt="logo" />
      </NavLink>
      <div className="navbar-main">
        <NavLink
          to="/home1"
          className={
            "navbar-item " + (activeState === 0 ? "active" : "noActive")
          }
        >
          Home1
        </NavLink>
        <NavLink
          to="/home2"
          className={
            "navbar-item " + (activeState === 1 ? "active" : "noActive")
          }
        >
          Home2
        </NavLink>
        <NavLink
          to="/staking"
          className={
            "navbar-item " + (activeState === 2 ? "active" : "noActive")
          }
        >
          Staking
        </NavLink>
        <NavLink
          to="/dao"
          className={
            "navbar-item " + (activeState === 3 ? "active" : "noActive")
          }
        >
          Dao
        </NavLink>
      </div>
      <div className="navbar-buttons">
        <button className="connect-wallet">connect wallett</button>
        <div
          className="nav-button"
          onClick={() => {
            setModalState(!modalState);
          }}
        >
          <img src="/assets/images/Bars.png" alt="Bar" />
        </div>
      </div>
      {modalState ? (
        <>
          <div
            className="modal-window"
            onClick={() => {
              setModalState(false);
            }}
          ></div>
          <div className="modal-navbar">
            <NavLink
              to="/home1"
              className={
                "navbar-item " + (activeState === 0 ? "active" : "noActive")
              }
            >
              Home1
            </NavLink>
            <NavLink
              to="/home2"
              className={
                "navbar-item " + (activeState === 1 ? "active" : "noActive")
              }
            >
              Home2
            </NavLink>
            <NavLink
              to="/staking"
              className={
                "navbar-item " + (activeState === 2 ? "active" : "noActive")
              }
            >
              Staking
            </NavLink>
            <NavLink
              to="/dao"
              className={
                "navbar-item " + (activeState === 3 ? "active" : "noActive")
              }
            >
              Dao
            </NavLink>
          </div>
        </>
      ) : null}
    </div>
  );
}
