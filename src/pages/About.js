import React, { useState } from "react";
import "animate.css/animate.min.css";

// Import Swiper styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {
  Explore,
  HomeOutlined,
  Menu,
  RoomServiceOutlined,
  Web,
  Work,
} from "@material-ui/icons";
import "./css/about.css";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper";
import AboutHeader from "../component/AboutHeader";
import Footer from "../component/Footer";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

const About = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="explore-nav">
        <div className="explore-flex">
          {" "}
          <div className="menu">
            {" "}
            <div className={open ? "explore-block" : null}></div>
            <Menu
              style={{
                color: "#32cd32",
                cursor: "pointer",
                marginLeft: "0px",
              }}
              onClick={handleNav}
            ></Menu>
          </div>
        </div>
      </nav>
      <div className="border"></div>
      <section className="explore-nav-2">
        {open ? (
          <div className="explore-block">
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <div
                style={{
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {" "}
                <HomeOutlined></HomeOutlined>
                <h3>Home</h3>
              </div>
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Work></Work>
                <h3>About</h3>
              </div>
            </Link>
            <Link
              to="/explore"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Explore></Explore>
                <h3>Explore</h3>
              </div>
            </Link>

            <a
              href="https://raenewsblog.netlify.app/"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
              rel="noreferrer"
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {" "}
                <Web></Web>
                <h3>Portfolio</h3>
              </div>
            </a>
          </div>
        ) : null}
        <AboutHeader></AboutHeader>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
