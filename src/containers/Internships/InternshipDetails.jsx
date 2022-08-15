import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseImage from "../../assets/Internships.jpg";
import Btn from "../../components/UI/Btn";

const InternshipDetails = (props) => {
  const params = useParams();

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
      <div className="container">
        <div className="flex flex-col md:flex-row py-10 ">
          <div className="md:mr-14 flex-1 md:w-[600px] w-full ">
            <img
              src={CourseImage}
              alt="course"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-3 md:p-0">
            <h2 className="text-3xl font-bold mt-5 md:m-0">Course name</h2>
            <p className="my-5 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              obcaecati ut consequuntur explicabo nisi hic voluptatibus natus
              laboriosam ipsam, nihil magnam odio dolor quaerat a eum minima
              ipsa iste incidunt.
            </p>
            <p className="my-5">created by mohamed ali</p>
            <Btn
              href={`/form?target=purchase%20Inerenship&course=${params.InternshipId}`}
              className="w-fit"
              fill
            >
              buy this course
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
