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
          className=""
        />


    <div className="absolute w-screen top-0">


    <div className="">
          <nav className=" my-8 flex justify-center items-center">
            <div className="flex justify-start">
              <div className=" flex w-2/5 justify-start">
                <img src={Vector_1} alt="" className="md:w-3/5" />
                <p className="flex items-center text-transparent text-6xl bg-clip-text bg-gradient-to-r from-indigo-400 to-white ">
                  5ire
                </p>
              </div>
            </div>
            <div className="text-2xl text-white flex items-center justify-between w-5/6">
              <div className="flex">
                <Dropdown title="About Us" className="">
                  <div className="bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-xl w-max my-10 absolute">
                    <DropdownItem className="py-4 mx-4">
                      About 5ire
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">Team</DropdownItem>
                    <DropdownItem className="py-4 mx-4">Blog</DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      Road to Manifest
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      News & Media
                    </DropdownItem>
                  </div>
                </Dropdown>
              </div>
              <div className="flex">
                <Dropdown title="Testnet" className=" bg-transparent ">
                  <div
                    className="bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-xl
                  w-max my-4 absolute z-50"
                  >
                    <DropdownItem className="py-4 mx-4">Testnet</DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      Build To Earn
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      Documentaion
                    </DropdownItem>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Community" className=" bg-transparent">
                  <div className="bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-xl w-max my-4 absolute z-50">
                    <DropdownItem className="py-4 mx-4">Community</DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      5ire Ambassdor
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      Partner with Us
                    </DropdownItem>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Research" className=" bg-transparent">
                  <div className="bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-xl w-max my-4 absolute z-50">
                    <DropdownItem className="py-4 mx-4">
                      Reasearch Papers
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      Yellow paper
                    </DropdownItem>
                    <DropdownItem className="py-4 mx-4">
                      White paper
                    </DropdownItem>
                  </div>
                </Dropdown>
              </div>
              <div>
                <Dropdown title="Validator" className=" bg-transparent">
                  <div className="bg-gradient-to-l from-[#457387] to-[#10171B] p-4 rounded-xl text-xl w-max absolute z-50 my-4">
                    <DropdownItem className="py-4 mx-4">
                      Become a Validator
                    </DropdownItem>
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

        <div className=" -60 text-center  my-10 flex flex-col gap-10 w-full justify-center items-center z-0">
          <p className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#77FFE7] to-white z-0">
            BLOCKCHAIN
          </p>
          <p className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#77FFE7] to-indigo-400">
            MEETS
          </p>
          <p className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 to-white ">
            SUSTAINABLITY
          </p>
        </div>

        {/* cards */}
        <section className=" -3/4 flex justify-between w-4/5 mx-40 my-10">
          <div>
          <div className="container">
            <div className="box">
              <span className="title">GLASS EFFECT</span>
              <div>
                <strong>JOE WATSON SBF</strong>
                <p>0000 000 000 0000</p>
                <span>VALID</span> <span>01/28</span>
              </div>
            </div>
          </div>
          </div>

          <div>
          <div className="container">
            <div className="box">
              <span className="title">GLASS EFFECT</span>
              <div>
                <strong>JOE WATSON SBF</strong>
                <p>0000 000 000 0000</p>
                <span>VALID</span> <span>01/28</span>
              </div>
            </div>
          </div>
          </div>

          <div>
          <div className="container">
            <div className="box">
              <span className="title">GLASS EFFECT</span>
              <div>
                <strong>JOE WATSON SBF</strong>
                <p>0000 000 000 0000</p>
                <span>VALID</span> <span>01/28</span>
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
