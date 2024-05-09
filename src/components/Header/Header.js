import React, { useState } from "react";
import Navbar from "./Nav";
import "../../assets/css/header.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header({
  header,
  subheader,
  imgName1,
  imgName2,
  imgName3,
  children,
  activeState,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    appendDots: (dots) => (
      <div>
        <ul
          style={{
            margin: "0px",
            padding: "0px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <header className="header-container">
      <div className="navbar-container">
        <Navbar activeState={activeState} />
      </div>
      {activeState === 2 ? (
        <Slider {...settings}>
          <div className="full-width-slide">
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
                className={`header-image ${imgName1}`}
                src={`/assets/images/${imgName1}.png`}
                alt={`${imgName1}`}
              />
            )}
          </div>
          <div className="full-width-slide">
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
            <img
              className={`header-image ${imgName2}`}
              src={`/assets/images/${imgName2}.png`}
              alt={`${imgName2}`}
            />
          </div>

          <div className="full-width-slide">
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
            <img
              className={`header-image ${imgName3}`}
              src={`/assets/images/${imgName3}.png`}
              alt={`${imgName3}`}
            />
          </div>
        </Slider>
      ) : (
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
      )}
    </header>
  );
}
