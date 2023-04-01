import React from "react";
import build1 from "../assets/build1.png";

const Buildtoearn = () => {
  return (
    <div>
      <div className="flex justify-center my-28">
        <div class="container1">
          <div class="box1">
            <div class="content1 text-white  flex ">
              <div className="bg-slate-500 flex justify-start items-start">
                <p>
                  #BuildToEarn
                  <li>
                    Top 10 dApps to receive an incentive after evaluation.
                  </li>
                  <li>
                    An opportunity to earn rewards through our referral program
                    and grants scheme.
                  </li>
                  <li>
                    An incentivization scheme for dApps focused on sustainable
                    development.
                  </li>
                  <li>
                    Reduced gas fees for early adopters and the first 500
                    builders to receive a share of block rewards.
                  </li>
                </p>
              </div>
              <div>
                <img src={build1} alt="" className="w-1/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buildtoearn;
