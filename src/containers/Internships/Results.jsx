import React from "react";
import Btn from "../../components/UI/Btn";
import Internship from "./Internship";

const Results = (props) => {
  return (
    <section aria-label="Results" className="md:basis-[75%] lg:pr-10 flex-1">
      <div className="mb-10">
        <h2 className="text-xl font-bold ml-5 lg:ml-0">
          Explore more thant 10k of courses made for you!
        </h2>
        <h2 className="text-xl font-bold hidden">
          <span>315</span> results for "<span>react</span>"
        </h2>
        <h2 className="text-xl font-bold hidden">
          No results found for "<span>react</span>"
        </h2>
      </div>
      <div>
        <button onClick={props.onOpen} className="lg:hidden btn mb-5 ml-5">
          Filter
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[1, 2, 3, 4, 34, 534, 6, 456, 299, 33, 3223, 32223320].map(
            (course, i) => (
              <Internship
                key={i}
                id={i}
                name="FrontEnd"
                descreption="practise upto 20 projects with ultimate front end course"
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
