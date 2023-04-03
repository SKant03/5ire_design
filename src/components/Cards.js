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
              <div className="container my-10 relative before:bg-[#5E51F3] before:absolute before:rounded-[50%] before:w-[6rem]
              before:h-[6rem] before:top-[30%] before:right-[7%] after:bg-[#5E51F3] after:absolute after:h-[3rem] after:top-[8%] after:right-[5%] after:border ">
                <div className="box py-[40px] bg-[#000000] backdrop:blur-3xl rounded-[20px] transition-all flex flex-col items-center hover:border relative">
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
          </section>
    </div>
  )
}

export default Cards
