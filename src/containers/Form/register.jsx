import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Btn from "../../components/UI/Btn";

let isFirstTimeToRun = true;

const Form = (props) => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    day: "",
    month: "",
    year: "",
    university: "",
    cv: "",
  });
  const [formIsValid, setFormIsValid] = useState({});
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const [isDropped, setIsDropped] = useState(false);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const fileInput = useRef();
  const history = useHistory();

  useEffect(() => {
    document.title = props.title;
  }, []);

  const changeHanlder = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormIsValid({
      firstName:
        inputValues.firstName === "" ? "please fill in this field" : "",
      lastName: inputValues.lastName === "" ? "please fill in this field" : "",
      address: inputValues.address === "" ? "please fill in this field" : "",
      day: inputValues.day === "" ? "please fill in this field" : "",
      month: inputValues.month === "" ? "please fill in this field" : "",
      year: inputValues.year === "" ? "please fill in this field" : "",
      university:
        inputValues.university === "" ? "please fill in this field" : "",
      cv: inputValues.cv === "" ? "you must add a cv" : "",
    });
    setFormIsSubmitted(true);
  };

  useEffect(() => {
    if (!isFirstTimeToRun) {
      if (
        formIsValid.firstName === "" &&
        formIsValid.lastName === "" &&
        formIsValid.address === "" &&
        formIsValid.day === "" &&
        formIsValid.month === "" &&
        formIsValid.year === "" &&
        formIsValid.university === "" &&
        formIsValid.cv === "" &&
        formIsSubmitted
      ) {
        submitTheForm();
      } else {
        console.log("form isn't valid");
      }
    }
    isFirstTimeToRun = false;
  }, [formIsValid]);

  const submitTheForm = () => {
    history.replace("/wait-until-activation");
  };

  /*
    in react router when you have a fixed navbar and you click on a link
    and you are in the bottom of the page , the navigated page will be 
    in the same scroll in the bottom of the page
  */
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const uploadHandler = () => {
    fileInput.current.click();
  };

  const dropHandler = (event, id) => {
    event.preventDefault();
    setIsDropped(true);
    setIsDraggedOver(false);
  };

  return (
    <>
      <div className="flex items-center py-10 xl:pl-40" aria-label="form">
        <div className="p-5 w-full max-w-[900px]">
          <h2 className="text-2xl my-4">You have to Enter your data first!</h2>
          <form className="-m-2" onSubmit={handleSubmit}>
            <div className="flex">
              <div className="flex-1 p-2">
                <label htmlFor="firstname">firstname</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstname"
                  className={`form-control ${
                    formIsValid.firstName ? "form-invalid" : ""
                  }`}
                  onChange={changeHanlder}
                />
                {formIsValid.firstName && (
                  <p className="text-red-700 font-bold">
                    {formIsValid.firstName}
                  </p>
                )}
              </div>
              <div className="flex-1 p-2">
                <label htmlFor="lastname">lastname</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  className={`form-control ${
                    formIsValid.lastName ? "form-invalid" : ""
                  }`}
                  onChange={changeHanlder}
                />
                {formIsValid.lastName && (
                  <p className="text-red-700 font-bold">
                    {formIsValid.lastName}
                  </p>
                )}
              </div>
            </div>
            <div className="p-2">
              <div className="flex-1">
                <label htmlFor="address">address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className={`form-control ${
                    formIsValid.address ? "form-invalid" : ""
                  }`}
                  onChange={changeHanlder}
                />
                {formIsValid.address && (
                  <p className="text-red-700 font-bold">
                    {formIsValid.address}
                  </p>
                )}
              </div>
              <p className="w-full text-gray-600">
                enter your country and city , Ex: Egypt - Cairo
              </p>
            </div>
            <div>
              <p className="p-2">your birthday</p>
              <div className="flex">
                <div className="flex-1 p-2">
                  <label htmlFor="day">day</label>
                  <input
                    type="number"
                    name="day"
                    className={`form-control ${
                      formIsValid.day ? "form-invalid" : ""
                    }`}
                    onChange={changeHanlder}
                  />
                  {formIsValid.day && (
                    <p className="text-red-700 font-bold">{formIsValid.day}</p>
                  )}
                </div>
                <div className="flex-1 p-2">
                  <label htmlFor="month">month</label>
                  <input
                    type="number"
                    className={`form-control ${
                      formIsValid.month ? "form-invalid" : ""
                    }`}
                    id="month"
                    name="month"
                    onChange={changeHanlder}
                  />
                  {formIsValid.month && (
                    <p className="text-red-700 font-bold">
                      {formIsValid.month}
                    </p>
                  )}
                </div>
                <div className="flex-1 p-2">
                  <label htmlFor="year">year</label>
                  <input
                    type="number"
                    className={`form-control ${
                      formIsValid.year ? "form-invalid" : ""
                    }`}
                    name="year"
                    id="year"
                    onChange={changeHanlder}
                  />
                  {formIsValid.year && (
                    <p className="text-red-700 font-bold">{formIsValid.year}</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="flex-1 p-2">
                <label htmlFor="university">university</label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  className={`form-control ${
                    formIsValid.university ? "form-invalid" : ""
                  }`}
                  onChange={changeHanlder}
                />
                {formIsValid.university && (
                  <p className="text-red-700 font-bold">
                    {formIsValid.university}
                  </p>
                )}
              </div>
            </div>
            <div className="p-2">
              <div className="flex-1">
                <label htmlFor="job">job title</label>
                <input
                  type="text"
                  name="job"
                  id="job"
                  className="form-control"
                />
              </div>
              <p className="w-full text-gray-600">
                you can keep it empty if you are a student
              </p>
            </div>
            <div className="p-2">
              <div className="flex">
                <div className="flex-1">
                  <p>upload your cv (pdf only)</p>
                  <button
                    className={
                      "flex justify-center items-center w-full px-5 py-8 border-dashed border-[3px] rounded text-xl mt-2 transition-transform " +
                      (!isDropped
                        ? "bg-rose-100 border-rose-600 text-rose-600 "
                        : "bg-green-100 border-grees-600 text-green-600 ") +
                      (isDraggedOver ? "scale-105" : "")
                    }
                    type="button"
                    onClick={uploadHandler}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDraggedOver(true);
                    }}
                    onDragLeave={() => setIsDraggedOver(false)}
                    // onDragEnter={(e) => e.preventDefault()}
                    onDrop={dropHandler}
                  >
                    <AiOutlineCloudUpload className="mr-5 text-3xl" /> upload
                  </button>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    name="cv"
                    ref={fileInput}
                    onChange={changeHanlder}
                  />
                  {formIsValid.cv && (
                    <p className="text-red-700 font-bold">{formIsValid.cv}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full mt-4 p-2">
              <button type="submit" className="btn btn-fill py-2 px-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
