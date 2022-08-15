import React from "react";
import CourseHeading from "./CourseHeading";
import Slider from "../../components/Slider/Slider";
import data from "../../data/courses";
import Internships from "../../assets/Internships.jpg";
import Btn from "../../components/UI/Btn";

const HomeInternships = () => {
  return (
    <section aria-label="some excercieses">
      <div className="py-10">
        <CourseHeading
          name="Some Internships"
          description=" set of popular Internships choosen for you"
        />
        <div>
          <Slider items={data} image={Internships} />
        </div>
        <div>
          <Btn
            href="/Internships/"
            fill="true"
            className="md:w-fit md:mx-auto mx-5 mt-6"
          >
            Show more
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default HomeInternships;
