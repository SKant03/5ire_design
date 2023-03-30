import React from "react";
import video from "../assets/video.mp4";
import Vector_1 from "../assets/Vector_1.png";

const Landingpage = () => {
  return (
    <>
      <video src={video} autoPlay="{true}" loop="{true}" className="md:w-screen h-screen md:h-full object-cover" />
      <div>
        <nav className="absolute top-0 my-10 flex gap-10 w-full justify-center items-center">
          <div className="flex justify-start">
            <div className=" flex justify-start w-3/5">
              <img src={Vector_1} alt="" className="md:w-3/5" />
              <p className="text-6xl text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 flex items-center">
              5ire
            </p>
            </div>
            
          </div>
          <div className="text-2xl text-white flex items-center gap-2  justify-between w-3/5">
            <div>About Us</div>
            <div>Testnet</div>
            <div>Community</div>
            <div>Research</div>
            <div>Sustainablity</div>
            <div>Validator</div>
          </div>
          <div className="bg-[#01FFA4] px-8 text-xl h-[50px] font-semibold flex justify-center items-center rounded-full">5ire Explorer</div>
        </nav>
        <section>
          
        </section>
      </div>
    </>
  );
};

export default Landingpage;
