import React from "react";
import video from "../assets/video.mp4";
import Vector_1 from "../assets/Vector_1.png";
import Dropdown from "rsuite/Dropdown";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import videoBg from "../assets/videoBg.mp4";
import { NavLink } from "react-router-dom";

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
            <nav className=" my-8 flex gap-20 justify-center w-full items-center">
              <div className="flex justify-start">
                <div className=" flex w-3/5 justify-start">
                  <img src={Vector_1} alt="" className="md:w-3/5" />
                  <p className="flex items-center text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-400 to-white ">
                    5ire
                  </p>
                </div>
              </div>
              <div className="text-2xl text-white flex items-center gap-20">
                <div className="flex">
                  <Dropdown title="About Us" className=" justify-center">
                    <div className="flex flex-col  bg-gradient-to-l from-[#4260D7] to-indigo-400 py-4 px-6  rounded-3xl text-2xl w-max my-6 absolute z-50">
                      <DropdownItem className="py-4 mx-4">
                        <NavLink to="/about5ire">About 5ire</NavLink>
                      </DropdownItem>
                      <DropdownItem className="py-4 mx-4"><NavLink to="/team">Team</NavLink></DropdownItem>
                      <NavLink to='/blog' className="py-4 mx-4">Blog</NavLink>
                      <NavLink to='/roadtomanifest' className="py-4 mx-4">
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
                      <NavLink to="/testnet" className="py-4 mx-4">Testnet</NavLink>
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
                    <div className="flex flex-col bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-2xl text-xl w-max my-4 absolute z-50">
                      <NavLink to='/community' className="py-4 mx-4">
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
                    <div className="flex flex-col bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-xl w-max my-4 absolute z-50">
                      <NavLink to='/research papers' className="py-4 mx-4">
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
                    <div className="bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-lg w-max absolute z-50 my-4">
                      <NavLink to="/become a validator" className="py-4 mx-4">
                        Become a Validator
                      </NavLink>
                    </div>
                  </Dropdown>
                </div>
                <div>
                  <NavLink to="/sustainablity" className="">
                    Sustainablity
                  </NavLink>
                </div>
                <div className="relative -4">
                  <NavLink
                    to="/5ire Explorer"
                    className="bg-[#01FFA4] px-8 text-xl h-[50px] font-semibold flex justify-end items-center rounded-full text-black"
                  >
                    5ire Explorer
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>

          <div className="text-center  my-20 flex flex-col gap-10 items-center font-extralight z-0">
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

          {/* cards */}
          <section className="flex justify-between mx-36 w-5/6 md:mt-28">
            <div>
              <div className="container">
                <div className="box text-white flex items-center">
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
                <div className="box text-white flex items-center">
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
                <div className="box text-white flex items-center">
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
