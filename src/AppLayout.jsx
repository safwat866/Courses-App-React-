import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/index";
import Courses from "./containers/Courses/index";
import CourseDetails from "./containers/Courses/CourseDetails";
import Form from "./containers/Form/register";
import Error from "./containers/ErrorPage";
import WaitForActivation from "./containers/WaitForActiviatoin";
import Internships from "./containers/Internships";
import InternshipDetails from './containers/Internships/InternshipDetails'
import Login from './containers/Form/login'

const AppLayout = () => {
  return (
    <>
      <Header />
      <main className="md:mt-[77px] mt-[57px]">
        <Switch>
          <Route path="/" exact>
            <Home title="Forsa" />
          </Route>
          <Route path="/courses/" exact>
            <Courses title="Forsa | courses" />
          </Route>
          <Route path="/courses/:courseId">
            <CourseDetails title="Forsa | Course" />
          </Route>
          <Route path="/register/">
            <Form title="Forsa | register" />
          </Route>
          <Route path="/login">
            <Login title="Forsa | login" />
          </Route>
          <Route path="/wait-until-activation">
            <WaitForActivation title="Forsa | Thank you for using forsa" />
          </Route>
          <Route path="/Internships" exact>
            <Internships title="Forsa | Internships" />
          </Route>
          <Route path="/Internships/:InternshipId">
            <InternshipDetails title="Forsa | Internship" />
          </Route>
          <Route path="*">
            <Error title="Forsa | Not Found" />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
