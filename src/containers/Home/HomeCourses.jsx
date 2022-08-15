import React from "react";
import CourseHeading from "./CourseHeading";
import Slider from "../../components/Slider/Slider";
import data from "../../data/courses";
import Btn from "../../components/UI/Btn"
import courseImage from "../../assets/course_image.jpg";

const Courses = () => {
  return (
    <section aria-label="some courses">
      <div className="py-12">
        <CourseHeading
          name="Some Courses"
          description=" set of popular courses choosen for you"
        />
        <div>
          <Slider items={data} image={courseImage} />
        </div>
        <div>
          <Btn
            href="/courses/"
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

export default Courses;
