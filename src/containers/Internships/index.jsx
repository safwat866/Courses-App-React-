import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Results from "./Results";

const Internships = (props) => {
  const [opendFilterMenu, setOpendFilterMenu] = useState(false);

  const handleMenuState = () => {
    setOpendFilterMenu((prev) => !prev);
  };

  useEffect(() => {
    document.title = props.title;
  }, []);

  useEffect(() => {
    if (opendFilterMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [opendFilterMenu]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="bg-gray-100 relative py-10 flex w-full min-h-screen">
      <div
        className={`top-0 left-0 w-full h-[100vh] bg-black/50 z-0 lg:hidden ${
          opendFilterMenu ? "fixed" : "hidden"
        } `}
        onClick={handleMenuState}
      ></div>
      <Filter isOpened={opendFilterMenu} />
      <Results onOpen={handleMenuState} />
    </div>
  );
};

export default Internships;
