import React from "react";
import video from "../assets/video.mp4";
import Vector_1 from "../assets/Vector_1.png";

const Landingpage = () => {
  return (
    <>
      <video src={video} autoPlay loop className=" w-screen object-cover" />
      <div>
        <nav className="absolute top-0 my-10 flex gap-20 bg-indigo-500 w-full justify-start">
          <div className="flex justify-start bg-green-500">
            <div className="bg-red-500 flex justify-end w-3/5">
              <img src={Vector_1} alt="" className="md:w-3/5" />
            </div>
            <p className="text-4xl text-white bg-slate-400 flex items-center">
              5ire
            </p>
          </div>
          <div className="text-xl text-white flex items-center gap-10 justify-between bg-slate-400 w-full6 px-20">
            <div>About Us</div>
            <div>Testnet</div>
            <div>Community</div>
            <div>Research</div>
            <div>Sustainablity</div>
            <div>Validator</div>
            <div className="bg-[#01FFA4] px-6 p">5ire Explorer</div>

          </div>
        </nav>
      </div>
    </>
  );
};

export default Landingpage;
