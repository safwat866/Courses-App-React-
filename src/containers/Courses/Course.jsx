import React from 'react'
import CourseImage from "../../assets/course_image.jpg"
import {Link} from "react-router-dom"

const Course = ({ name , descreption,id}) => {
  return (
    <Link to={"/courses/" + name } aria-label="course">
      <div>
        <img src={CourseImage} alt="course" className="h-[200px] w-[100%] object-cover " />
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-600">{descreption}</p>
      </div>
    </Link>
  );
}

export default Course