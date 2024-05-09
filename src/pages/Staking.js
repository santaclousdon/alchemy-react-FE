import Header from "../components/Header/Header";
import "../assets/css/staking.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Staking() {
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
    <div className="staking-container">
      <div className="full-width-carousel">
        <Slider {...settings}>
          <div className="full-width-slide">
            <Header
              header="STAKING"
              subheader="Start your staking now"
              imgName="staking-one"
              activeState={2}
            >
              Alchemy will soon offer a set of magical tools for you to build
              and deploy your very own decentralized autonomous organizations
              (DAO) Runes Protocol…111
            </Header>
          </div>
          <div className="full-width-slide">
            <Header
              header="STAKING"
              subheader="Start your staking now"
              imgName="staking-two"
              activeState={2}
            >
              Alchemy will soon offer a set of magical tools for you to build
              and deploy your very own decentralized autonomous organizations
              (DAO) Runes Protocol…111
            </Header>
          </div>
          <div className="full-width-slide">
            <Header
              header="STAKING"
              subheader="Start your staking now"
              imgName="staking-three"
              activeState={2}
            >
              Alchemy will soon offer a set of magical tools for you to build
              and deploy your very own decentralized autonomous organizations
              (DAO) Runes Protocol…111
            </Header>
          </div>
        </Slider>
      </div>
    </div>
  );
}
