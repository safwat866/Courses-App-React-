import React from "react";
import Btn from "../../components/UI/Btn";
import nextSteps  from "../../assets/next.png";

const NextSteps = () => {
  return (
    <section aria-label="next steps" className="my-10">
      <div className="container py-20 px-5">
        <div className="flex items-center flex-col lg:flex-row lg:justify-center">
          <div className="flex-1">
            <img src={nextSteps} alt="lady standing on a chair" />
          </div>
          <div className="flex-1 mt-5 lg:ml-5">
            <h2 className="text-4xl font-bold lg:max-w-[75%] leading-[1.4]">
              Take the next step toward your personal and professional goals
              with Coursaty.
            </h2>
            <p className="font-bold my-7 lg:max-w-[75%]">
              Join now to receive personalized recommendations from the full
              Coursera catalog.
            </p>
            <Btn href="/courses/" fill="true" className="w-fit">
              Join for free
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
