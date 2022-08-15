import React from "react";
import { Switch, Route } from "react-router-dom";
import UploadCourse from "./UploadCourse";
import Courses from "./Courses";
import Header from "./Header";
import Home from "./Home";
import UploadFiles from "./UploadFiles";

const Content = (props) => {
  return (
    <div className="flex-1 p-10">
      <Header />
      <p className="text-gray-500 mt-2">
        Welcome
        <span> Ahmed! </span>
      </p>
      <div className="mt-5">
        <Switch>
          <Route path="/dashboard" exact>
            <Home />
          </Route>
          <Route path="/dashboard/upload-course">
            <UploadCourse />
          </Route>
          <Route path="/dashboard/upload-files">
            <UploadFiles />
          </Route>
          <Route path="/dashboard/courses">
            <Courses onDelete={props.onDelete}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Content;