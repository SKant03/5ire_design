import React from "react";
import build1 from "../assets/build1.png";

const Buildtoearn = () => {
  return (
<div className="flex justify-center items-center my-28">
<div class="card px-12">
      <div className="text-white flex flex-col gap-20">
        <p className="text-center text-6xl font-semibold">#BuildToEarn</p>
        <div className="flex">
          <div className="flex flex-col gap-10 text-[22px]">
            <li>Top 10 dApps to receive an incentive after evaluation.</li>
            <li>
              An opportunity to earn rewards through our referral program and
              grants scheme.
            </li>
            <li>
              An incentivization scheme for dApps focused on sustainable
              development.
            </li>
            <li>
              Reduced gas fees for early adopters and the first 500 builders to
              receive a share of block rewards.
            </li>
          </div>
          <div>
            <img src={build1} alt="" className="w-11/12" />
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Buildtoearn;
