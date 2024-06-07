import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import slideImg1 from "../assets/slide-img1.webp";
import slideImg2 from "../assets/slide-img2.png";
import slideImg3 from "../assets/slide-img3.webp";
import slideImg4 from "../assets/slide-img4.png";
import slideImg5 from "../assets/slide-img5.webp";


function SecondHero() {
  return (
    <div className="second-slider ">
      <Swiper modules={[Navigation,Scrollbar]} spaceBetween={50} slidesPerView={5} className="container" navigation scrollbar={{draggable:true}} >
        <SwiperSlide>
          <img src={slideImg1} className="img-fluid" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg2} className="img-fluid" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg3} className="img-fluid" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg4} className="img-fluid" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg5} className="img-fluid" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg4} className="img-fluid" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideImg5} className="img-fluid" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SecondHero;
