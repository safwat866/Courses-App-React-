import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Content from "./Content";
import Popup from "../../components/Popup/Popup";
import Btn from "../../components/UI/Btn";

const Dashboard = (props) => {
  const [popupIsOpen, setPopupIsOpened] = useState(false);

  useEffect(() => {
    document.title = props.title;
  }, []);

  const popupToggleHandler = (e) => {
    e.preventDefault();
    setPopupIsOpened((prev) => !prev);
  };

  return (
    <div>
      <div className="flex">
        <Aside />
        <Content onDelete={popupToggleHandler} />
        {popupIsOpen && (
          <Popup toggleMenu={popupToggleHandler}>
            <h3 className="text-3xl font-bold text-center mb-8">
              Are you sure you want to delete this course
            </h3>
            <div className="flex">
              <button className="btn btn-fill !rounded-lg flex-1 m-3">
                Delete
              </button>
              <button
                className="btn btn-fill !rounded-lg flex-1 m-3"
                onClick={popupToggleHandler}
              >
                Cancle
              </button>
            </div>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
