import React from "react";
import video from "../assets/video.mp4";
import Vector_1 from "../assets/Vector_1.png";
import Dropdown from "rsuite/Dropdown";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import videoBg from "../assets/videoBg.mp4";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Email from "./Email";

const Landingpage = () => {
  return (
    <>
      <div className="">
        <video
          src={videoBg}
          autoPlay="{true}"
          loop="{true}"
          className="w-[2560px]"
        />

        <div className="absolute w-full top-0">
          <div className="">
            <Header/>
          </div>

          <div className="text-center  my-20 flex flex-col gap-6 items-center font-extralight z-0">
            <p className="text-transparent text-4xl md:text-9xl bg-clip-text bg-gradient-to-r from-[#77FFE7] to-white z-0">
              BLOCKCHAIN
            </p>
            <p className="text-transparent text-4xl md:text-9xl bg-clip-text bg-gradient-to-r from-[#77FFE7] to-indigo-400">
              MEETS
            </p>
            <p className="text-transparent text-4xl md:text-9xl bg-clip-text bg-gradient-to-r from-indigo-400 to-white ">
              SUSTAINABLITY
            </p>
          </div>

          {/* searchbox */}

          <Email/>

          {/* cards */}
          <section className="flex justify-between mx-28 md:mx-60 md:mt-28 ">
            <div>
              <div className="container">
                <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center">
                  <img
                    src={Vector_1}
                    alt=""
                    className="md:w-1/5 rounded-full"
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
                    src={Vector_1}
                    alt=""
                    className="md:w-1/5 rounded-full"
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
                    src={Vector_1}
                    alt=""
                    className="md:w-1/5 rounded-full"
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
      </div>
    </>
  );
};

export default Landingpage;
