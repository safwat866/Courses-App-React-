import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from "react-router-dom"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = (props) => {
  const data = [];
  for (let i = 0; i < props.items.length; i++) {
    data.push(
      <SwiperSlide key={props.items[i].id}>
        {/* here you can replace this Link with your data  */}
        <Link to={`/courses/${props.items[i].name}`}>
          <figure>
            <img
              src={props.image}
              alt="course"
              className="h-[232px]  object-cover w-full"
            />
            <figcaption className="px-5 md:p-0 mt-2">
              <h4 className="text-xl font-medium">{props.items[i].name}</h4>
              <p className="text-gray-800 my-2">{props.items[i].description}</p>
              <span className="text-orange-500">${props.items[i].price}</span>
            </figcaption>
          </figure>
        </Link>
      </SwiperSlide>
    );
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      className="custome-slider"
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {data}
    </Swiper>
  );
};

export default Slider;
