import React from "react";
import video from "../assets/video.mp4";
import Vector_1 from "../assets/Vector_1.png";
import Dropdown from "rsuite/Dropdown";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import videoBg from "../assets/videoBg.mp4";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Email from "./Email";
import Vector from "../assets/Vector.png";

const Cards = () => {
  return (
    <div>
      {/* cards */}
      <section className="flex justify-between mx-32 2xl:mx-60 mt-24 ">
            <div>
              <div className="container">
                <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center">
                  <img
                    src={Vector}
                    alt=""
                    className="w-1/5 rounded-full"
                  />
                  <NavLink to="/testnet" className="title">
                    Testnet Beta
                  </NavLink>
                  <div className="flex flex-col">
                    <strong></strong>
                    <p></p>
                    <span></span> <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="container">
                <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center">
                  <img
                    src={Vector}
                    alt=""
                    className="w-1/5 rounded-full"
                  />
                  <NavLink to="/documentation" className="title">
                    5ire Documentation
                  </NavLink>
                  <div className="flex flex-col">
                    <strong></strong>
                    <p></p>
                    <span></span> <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="container">
                <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center">
                  <img
                    src={Vector}
                    alt=""
                    className="w-1/5 rounded-full"
                  />
                  <NavLink to="/paertnerwithus" className="title">
                    Partner with us
                  </NavLink>
                  <div className="flex flex-col">
                    <strong></strong>
                    <p></p>
                    <span></span> <span></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}

export default Cards
