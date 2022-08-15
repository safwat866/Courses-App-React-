import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

let isIntialedFirstTime = true;
const Filter = (props) => {
  const [price, setPrice] = useState(100);
  const [filter, setFilter] = useState({ subject: null, skills: null});
  const location = useLocation();
  const history = useHistory();

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const filterHanlder = (e) => {
    setFilter((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.dataset.filter,
      };
    });
  };

  useEffect(() => {
    if (!isIntialedFirstTime) {
      history.push(
        `${location.pathname}?${
          filter.subject !== null ? `subject=${filter.subject}` : ""
        }${
          filter.skills !== null && filter.subject !== null
            ? `&skills=${filter.skills}`
            : filter.skills !== null
            ? `skills=${filter.skills}`
            : ""
        }`
      );
    }
    isIntialedFirstTime = false;
  }, [filter]);

  const toggleCheckHandler = () => {
    setIsChecked((prevState => !prevState))
  }

  return (
    <section
      aria-label="filter"
      className={`basis-[25%] fixed lg:w-auto w-[300px]  lg:static ${
        !props.isOpened ? "filter-bar-closed" : "filter-bar-opened"
      }`}
    >
      <div className="lg:pl-14 pl-8 pt-5 lg:pt-0 overflow-auto h-screen lg:h-auto lg:overflow-hidden">
        <div>
          <h2 className="text-xl font-bold">Filter by</h2>
        </div>
        <div className="my-8">
          {["subject", "skills"].map((filter, i) => {
            return (
              <div key={i}>
                <h3 className="text-lg mb-3">{filter}</h3>
                <div className="pb-3 flex items-center gap-3">
                  <input
                    type="radio"
                    id={"arts-" + i}
                    name={filter}
                    data-filter="arts-and-humanities"
                    onChange={filterHanlder}
                  />
                  <label
                    htmlFor={"arts-" + i}
                    className="select-none"
                    onChange={filterHanlder}
                  >
                    Arts and Humanities
                  </label>
                </div>
                <div className="pb-3 flex items-center gap-3">
                  <input
                    type="radio"
                    id={"business-" + i}
                    name={filter}
                    onChange={filterHanlder}
                    data-filter="business"
                  />
                  <label htmlFor={"business-" + i} className="select-none">
                    Business
                  </label>
                </div>
                <div className="pb-3 flex items-center gap-3">
                  <input
                    type="radio"
                    id={"computer-science-" + i}
                    name={filter}
                    onChange={filterHanlder}
                    data-filter="computer-science"
                  />
                  <label
                    htmlFor={"computer-science-" + i}
                    className="select-none"
                  >
                    Computer Science
                  </label>
                </div>
                <div className="pb-3 flex items-center gap-3">
                  <input
                    type="radio"
                    id={"data-science-" + i}
                    name={filter}
                    onChange={filterHanlder}
                    data-filter="data-science"
                  />
                  <label htmlFor={"data-science-" + i} className="select-none">
                    Data Science
                  </label>
                </div>
              </div>
            );
          })}
          <div className="mt-2">
            <h3 className="text-lg mb-3">Price</h3>
            <div className="">
              <input
                type="range"
                className="w-36"
                step={100}
                id="range"
                min={100}
                max={1000}
                onChange={priceChangeHandler}
                value={price}
              />
              <label htmlFor="range" className="block">
                {price}$
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
