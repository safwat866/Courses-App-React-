import React, { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import Btn from "../../components/UI/Btn";

const UploadFiles = () => {
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
    e.preventDefault()
    history.replace("/dashboard/courses");
  }
  return (
    <form className="mt-8" onSubmit={submitHandler}>
      <div className="md:w-2/3">
        <div className="mb-4">
          <label>
            Eposide Name
            <input
              type="text"
              className="form-control"
              placeholder="ex: eposide[1] what is photoshop?"
            />
          </label>
        </div>
        <div className="mb-6">
          <label>
            upload the Eposide Thumbnail
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
              accept=".mp4"
              ref={fileInput}
            />
          </label>
        </div>
        <div className="mb-6">
          <label>
            upload the Eposide
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
              accept=".mp4"
              ref={fileInput}
            />
          </label>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="btn btn-filled block w-fit">
            Upload The eposide
          </button>
        </div>
      </div>
    </form>
  );
};

export default UploadFiles;
