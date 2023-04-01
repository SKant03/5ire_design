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

const Tryout = () => {
  return (
    <div className="w-full">
      <video
        src={videoBg}
        autoPlay="{true}"
        loop="{true}"
        className=" w-full md:h-full h-[1440px] object-cover "
      />

      <div className="absolute top-0 w-full h-full">
        <div>
          <nav className=" my-8 flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col md:flex-row md:justify-start  w-1/6">
              <div className=" flex justify-center md:justify-start">
                <img src={Vector} alt="" className="md:w-3/12" />
                <p className="flex text-transparent md:text-7xl text-6xl bg-clip-text bg-gradient-to-r from-indigo-400 to-white items-center ">
                  5ire
                </p>
              </div>
            </div>
            <div className="2xl:text-3xl text-2xl text-white flex flex-col md:flex-row items-center gap-12">
              <div className="flex">
                <Dropdown title="About Us" className=" justify-center">
                  <div className="flex flex-col  bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 py-4 px-6  rounded-3xl text-2xl w-max my-6 absolute z-50">
                    <DropdownItem className="py-4 mx-4">
                      <NavLink to="/about5ire">About 5ire</NavLink>
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      <NavLink to="/team">Team</NavLink>
                    </DropdownItem>
                    <NavLink to="/blog" className="py-4 mx-4">
                      Blog
                    </NavLink>
                    <NavLink to="/roadtomanifest" className="py-4 mx-4">
                      Road to Manifest
                    </NavLink>
                    <NavLink to="news & media" className="py-4 mx-4">
                      News & Media
                    </NavLink>
                  </div>
                </Dropdown>
              </div>
              <div className="flex">
                <Dropdown title="Testnet" className=" bg-transparent ">
                  <div
                    className="flex flex-col bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 p-4 rounded-3xl text-2xl
                  w-max my-4 absolute z-50"
                  >
                    <NavLink to="/testnet" className="py-4 mx-4">
                      Testnet
                    </NavLink>
                    <NavLink to="/build to earn " className="py-4 mx-4">
                      Build To Earn
                    </NavLink>
                    <NavLink to="/documentation" className="py-4 mx-4">
                      Documentaion
                    </NavLink>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Community" className=" bg-transparent">
                  <div className="flex flex-col bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 p-4 rounded-3xl text-2xl w-max my-4 absolute z-50">
                    <NavLink to="/community" className="py-4 mx-4">
                      Community
                    </NavLink>
                    <NavLink to="5ire ambassodor" className="py-4 mx-4">
                      5ire Ambassador
                    </NavLink>
                    <NavLink to="/partner wiht us" className="py-4 mx-4">
                      Partner with Us
                    </NavLink>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Research" className=" bg-transparent">
                  <div className="flex flex-col bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 p-4 rounded-3xl text-2xl w-max my-4 absolute z-50">
                    <NavLink to="/research papers" className="py-4 mx-4">
                      Reasearch Papers
                    </NavLink>
                    <NavLink to="/yellow paper" className="py-4 mx-4">
                      Yellow paper
                    </NavLink>
                    <NavLink to="/white paper" className="py-4 mx-4">
                      White paper
                    </NavLink>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Validator" className=" bg-transparent">
                  <div className="bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 p-4 rounded-3xl text-2xl w-max absolute z-50 my-4">
                    <NavLink to="/become a validator" className="py-4 mx-4">
                      Become a Validator
                    </NavLink>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Contact Us" className=" bg-transparent">
                  <div className="flex flex-col bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 p-4 rounded-3xl text-2xl w-max my-4 absolute z-50">
                    <NavLink to="/Twitter" className="py-4 mx-4">
                      Twitter
                    </NavLink>
                    <NavLink to="/GitHub" className="py-4 mx-4">
                      GitHub
                    </NavLink>
                    <NavLink to="/Discord" className="py-4 mx-4">
                      Discord
                    </NavLink>
                    <NavLink to="/Telegram" className="py-4 mx-4">
                      Telegram
                    </NavLink>
                    <NavLink to="/Crew" className="py-4 mx-4">
                      Crew
                    </NavLink>
                  </div>
                </Dropdown>
              </div>
              <div>
                <NavLink to="/sustainablity" className="">
                  Sustainablity
                </NavLink>
              </div>
              <div className="bg-gradient-to-l from-[#4260D7] to-indigo-400 opacity-95 rounded-full">
                <NavLink
                  to="/5ire Explorer"
                  className=" px-8 font-light text-2xl h-[60px] flex justify-end items-center  text-black hover:text-white"
                >
                  5ire Explorer
                </NavLink>
              </div>
            </div>
          </nav>
        </div>

        <div className=""></div>

        <div className="text-center  my-20 flex flex-col gap-6 items-center font-extralight z-0">
          <p className="text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-[#77FFE7] to-white z-0">
            BLOCKCHAIN
          </p>
          <p className="text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-[#77FFE7] to-indigo-400">
            MEETS
          </p>
          <p className="text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 to-white ">
            SUSTAINABLITY
          </p>
        </div>

        {/* searchbox */}

        <div>
          <div className="flex flex-col md:flex-row justify-center items-center mx-6 gap-4 text-2xl ">
            <input
              type="email"
              placeholder="Please Enter your Email Address"
              className="md:w-[700px] md:rounded-3xl  rounded-2xl text-center h-[60px] md:h-[70px]"
            />
            <button
              type="submit"
              className="bg-[#77FFE7] md:rounded-3xl rounded-2xl\ h-[60px] md:h-[70px] w-3/5 md:w-[160px]"
            >
              Get started
            </button>
          </div>
        </div>

        {/* cards */}
        <section className="flex flex-col gap-2 md:flex-row justify-center items-center md:justify-between md:mx-28 2xl:mx-60 mt-24">
          <div>
            <div className="container">
              <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center md:w-[520px] md:h-[142px] w-[370px] h-[100px]">
                <img src={Vector} alt="" className="w-1/5 rounded-full" />
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
              <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center md:w-[520px] md:h-[142px] w-[370px] h-[100px]">
                <img src={Vector} alt="" className="w-1/5 rounded-full" />
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
              <div className="box text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-white flex items-center md:w-[520px] md:h-[142px] w-[370px] h-[100px]">
                <img src={Vector} alt="" className="w-1/5 rounded-full" />
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
  );
};

export default Tryout;
