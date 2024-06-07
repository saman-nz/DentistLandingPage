import React from 'react'
import { Autoplay,EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DentalPracticeHeaderV1 from  '../assets/32-Dental-Practice-Header-V1.jpg'
import DentalPracticeHeaderV2 from  '../assets/32-Dental-Practice-Header-V2.jpg'
import DentalPracticeHeaderV4 from  '../assets/32-Dental-Practice-Header-V4.jpg'
import 'swiper/css';
import 'swiper/css/effect-fade'


function Hero() {
  return (
    <div className='position-relative'>
    <Swiper
    modules={[Autoplay,EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
     autoplay={{delay:2000}}
    effect='fade'
     loop ={true}
    >
      <SwiperSlide><img className="img-fluid" src={DentalPracticeHeaderV1} alt="" /></SwiperSlide>
      <SwiperSlide><img className="img-fluid" src={DentalPracticeHeaderV2} alt="" /></SwiperSlide>
     
      <SwiperSlide><img className="img-fluid" src={DentalPracticeHeaderV4} alt="" /></SwiperSlide>
      
    </Swiper>
    <div className='hero-text d-flex flex-column gap-lg-5 gap-3'>
        <h1 className='text-uppercase'>exceptional care for every smile at <span className='italic'>32 </span> dental</h1>
        <h6>Dive into modern dentistry with a team that cherishes your unique needs.</h6>
        <a className='text-uppercase text-white button-black'>Book my appointment</a>
    </div>
    </div>
  )
}

export default Hero
