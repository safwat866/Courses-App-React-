import React, { useEffect } from "react";
import Hero from "./HomeHero";
import Courses from "./HomeCourses";
import Internships from "./Internships";
import Companies from "./Companies";
import NextSteps from "./NextSteps";

const Home = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    document.title = props.title;
  }, []);
  
  return (
    <div>
      <Hero />
      <Companies />
      <Courses />
      <Internships />
      <NextSteps />
    </div>
  );
};

export default Home;
