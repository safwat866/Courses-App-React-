import React, { useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import Btn from "../../components/UI/Btn";

const UploadCourse = () => {
  const [isDropped, setIsDropped] = useState(false);
  const [isDraggedOver, setIsDraggedOver] = useState(false);
  const history = useHistory();
  const fileInput = useRef();

  const uploadHandler = () => {
    fileInput.current.click();
  };

  const dropHandler = (event, id) => {
    event.preventDefault();
    setIsDropped(true);
    setIsDraggedOver(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    history.replace("/dashboard/upload-files");
  };

  return (
    <div>
      <form className="mt-8" onSubmit={submitHandler}>
        <div className="md:w-2/3">
          <div className="mb-4">
            <label>
              what is your course name
              <input
                type="text"
                className="form-control"
                placeholder="ex: learn photoshop in 7 hours!"
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              what is your course category
              <select className="form-control">
                <option value="art-and-humanities">Arts and Humanities</option>
                <option value="Business">Businesss</option>
                <option value="computer-science">Computer Science</option>
                <option value="data-science">Data Science</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <label>
              description of the course
              <textarea
                className="form-control"
                placeholder="ex: in this course you can learn advanced photoshop tips and tricks!"
              ></textarea>
            </label>
          </div>
          <div className="mb-4">
            <label>
              what is the required skills for this course
              <input
                type="text"
                className="form-control"
                placeholder="ex: no programming experience needed."
              />
            </label>
          </div>
          <div className="mb-4">
            <label>
              Course price
              <input
                type="number"
                className="form-control"
                placeholder="min 100$ and maxmimum 1000$"
                min={100}
                max={1000}
              />
            </label>
          </div>
          <div className="mb-6">
            <label>
              upload your course thumbnail
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
                accept=".png"
                ref={fileInput}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn btn-filled block w-fit">
              Upload Course Files
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadCourse;
