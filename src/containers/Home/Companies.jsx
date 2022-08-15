import React from "react";
import Facebook from "../../assets/Facebook-Logo.png";
import Google from "../../assets/google-logo.png";
import Udemy from "../../assets/udemy-logo.png";
import Youtube from "../../assets/Youtube-Logo.png";
import Instagram from "../../assets/instagram-logo.png";

const Companies = () => {
  return (
    <section aria-label="trusted companies">
      <div className="container px-5 py-12 ">
        <div className="flex items-center flex-wrap justify-between gap-3">
          <a href="" className="flex-1 flex justify-center">
            <img src={Facebook} alt="facebook" className=" w-36 min-w-[120px]" />
          </a>
          <a href="" className="flex-1 flex justify-center ">
            <img src={Google} alt="google" className=" w-36 min-w-[120px]" />
          </a>
          <a href="" className="flex-1 flex justify-center ">
            <img src={Udemy} alt="udemy" className=" w-36 min-w-[120px]" />
          </a>
          <a href="" className="flex-1 flex justify-center ">
            <img src={Youtube} alt="youtube" className=" w-36 min-w-[120px]" />
          </a>
          <a href="" className="flex-1 flex justify-center ">
            <img src={Instagram} alt="youtube" className=" w-36 min-w-[120px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
