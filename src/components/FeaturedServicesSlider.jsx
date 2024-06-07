import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Frame1 from '../assets/Frame-1.svg'
import Frame2 from '../assets/frame-2.svg'
import Frame3 from '../assets/Frame-3.svg'
import Frame4 from '../assets/Frame-4.svg'

function FeaturedServicesSlider() {
  return (
    <div className='container featured-services-slider pt-5 pb-5'>
        <Swiper
    modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={4}
      pagination={{clickable:true}}
          
    >
      <SwiperSlide>
        
           <img src={Frame1} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>general dentistry</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
        
      </SwiperSlide>
      <SwiperSlide> 
           <img src={Frame2} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>cosmetic dentistry</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
        </SwiperSlide>
      <SwiperSlide>
           <img src={Frame3} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>dental implants</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
        </SwiperSlide>
      <SwiperSlide>
           <img src={Frame4} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>cosmetic dentistry</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
        </SwiperSlide>
        <SwiperSlide>
       
           <img src={Frame1} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>general dentistry</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
       
      </SwiperSlide>
      <SwiperSlide> 
           <img src={Frame2} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>cosmetic dentistry</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
        </SwiperSlide>
      <SwiperSlide>
           <img src={Frame3} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>dental implants</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
       </SwiperSlide>
      <SwiperSlide>
           <img src={Frame4} className='img-fluid' alt="" /> 
           <h5 className='text-uppercase'>cosmetic dentistry</h5>
           <p>At 32 Dental, we offer our patients general dentistry procedures to help maintain a healthy mouth.</p>
           <a href="" class="orange-btn text-uppercase">Learn More</a>
        </SwiperSlide>
    </Swiper>

    </div>
    
  )
}

export default FeaturedServicesSlider
