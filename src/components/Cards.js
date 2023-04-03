import React from "react";
import video from "../assets/video.mp4";
import Vector_1 from "../assets/Vector_1.png";
import Dropdown from "rsuite/Dropdown";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import videoBg from "../assets/videoBg.mp4";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Email from "./Email";
import image2 from "../assets/image2.png";
import image1 from "../assets/image1.png";

const Cards = () => {
  return (
    <div>
      {/* cards */}
      <section className="mx-32 2xl:mx-60 mt-24 ">
        <div>
        <div className="flex justify-evenly">
          <div>
            <div
              className="container my-10 relative before:bg-[#5E51F3] before:absolute before:rounded-[50%] before:w-[6rem]
              before:h-[6rem] before:top-8 before:right-3 after:bg-[#5E51F3] after:absolute after:h-[3rem] after:top-4 after:right-3 after:border "
            >
              <div className="box h-[720px] w-[720px] py-[40px] bg-[#5E51F3] backdrop:blur-3xl rounded-[20px] transition-all flex flex-col items-center hover:border relative">
                <div className="my-10 flex flex-col items-center">
                  <div className="title text-center text-white flex flex-col items-center gap-4">
                    <h className="text-8xl">Government</h>
                    <br />
                    <img
                    src={image1}
                    alt=""
                    className="rounded-full my-4 w-2/5"
                  />
                    <p>
                      5ire provides a novel way for governments to engage with
                      citizens and scale their capacities for effective
                      administration with transparency, efficiency, and speed.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div>
          <div
              className="container my-10 relative before:bg-[#5E51F3] before:absolute before:rounded-[50%] before:w-[6rem]
              before:h-[6rem] before:top-8 before:right-3 after:bg-[#5E51F3] after:absolute after:h-[3rem] after:top-4 after:right-3 after:border "
            >
              <div className="box h-[720px] w-[720px] py-[40px] bg-[#5E51F3] backdrop:blur-3xl rounded-[20px] transition-all flex flex-col items-center hover:border relative">
                <div className="my-10 flex flex-col items-center">
                  <div className="title text-center text-white flex flex-col items-center gap-2">
                    <h className="text-8xl">Fortune 500</h>
                    <br />
                    <img
                    src={image2}
                    alt=""
                    className="rounded-full my-4 w-2/6"
                  />
                    <p>
                    Fortune 500 companies have a disproportionate impact on the future of the world's sustainability. By encoding SGDs and ESG in our blockchain, 5ire makes it easy for businesses to do good.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div>
        <div className="flex justify-evenly">
          <div>
            <div
              className="container my-10 relative before:bg-[#5E51F3] before:absolute before:rounded-[50%] before:w-[6rem]
              before:h-[6rem] before:top-8 before:right-3 after:bg-[#5E51F3] after:absolute after:h-[3rem] after:top-4 after:right-3 after:border "
            >
              <div className="box h-[720px] w-[720px] py-[40px] bg-[#5E51F3] backdrop:blur-3xl rounded-[20px] transition-all flex flex-col items-center hover:border relative">
                <div className="my-10 flex flex-col items-center">
                  <div className="title text-center text-white flex flex-col items-center gap-4">
                    <h className="text-8xl">Universities</h>
                    <br />
                    <img
                    src={image1}
                    alt=""
                    className="rounded-full my-4 w-2/5"
                  />
                    <p>
                    5ire helps universities leverage the power of sustainability and make their administration and operations digitalized, real-time and transparent.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div>
          <div
              className="container my-10 relative before:bg-[#5E51F3] before:absolute before:rounded-[50%] before:w-[6rem]
              before:h-[6rem] before:top-8 before:right-3 after:bg-[#5E51F3] after:absolute after:h-[3rem] after:top-4 after:right-3 after:border "
            >
              <div className="box h-[720px] w-[720px] py-[40px] bg-[#5E51F3] backdrop:blur-3xl rounded-[20px] transition-all flex flex-col items-center hover:border relative">
                <div className="my-10 flex flex-col items-center">
                  <div className="title text-center text-white flex flex-col items-center gap-2">
                    <h className="text-7xl">Social Entrepreneurs</h>
                    <br />
                    <img
                    src={image2}
                    alt=""
                    className="rounded-full my-4 w-2/6"
                  />
                    <p>
                    5ire is fast, secure, and cheap. This makes us an ideal ecosystem for entrepreneurs who want to combine impact with business as they scale their mission.
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


      </section>
    </div>
  );
};

export default Cards;
