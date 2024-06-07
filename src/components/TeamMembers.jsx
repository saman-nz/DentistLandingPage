import React from 'react'
import DrBreckley from '../assets/Dr-Breckley-V1.jpg'
import DrBreckley2 from '../assets/Dr.-Vo-V1.jpg'
import Rectangle27 from '../assets/Rectangle-27.webp'

function TeamMembers() {
  return (
    <section className='team-members pt-5 pb-5 position-relative'>
        <div className="container">
            <div className="row pt-5 pb-5">
                <div className="col-md-6 d-flex flex-column align-items-end  position-relative">
                    <div className="orange-img"></div>
                    <img src={DrBreckley} className='img-fluid' alt="" />
                    <p className='name'>DR. SEAN BRECKLEY</p>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-start ">
                    <p className='text-justify'>A graduate from the Temple University School of Dentistry and Susquehanna University, Dr. Sean Breckley is an established professional in the field of dentistry. He is a firm believer of contributing to the community and ensuring his patients receive the best possible dental care. Whilst maintaining his professionalism, Dr. Breckley takes time to get to know his patients and make sure they are comfortable and at ease to avoid any unnecessary dental anxiety and stress. He is presently a member of the American Dental Association, Georgia Dental Association, Northwest District Dental Society, and a graduate of the Mercer Mastery Program.</p>
                </div>
            </div>
            <div className="row pt-5 pb-5">
                <div className="col-md-6 d-flex flex-column align-items-end  position-relative">
                <div className="orange-img"></div>
                    <img src={DrBreckley2} className='img-fluid' alt="" />
                    <p className='name'>DR. LAN VO</p>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-start">
                    <p className='text-justify'>A graduate from the Temple University School of Dentistry and Susquehanna University, Dr. Sean Breckley is an established professional in the field of dentistry. He is a firm believer of contributing to the community and ensuring his patients receive the best possible dental care. Whilst maintaining his professionalism, Dr. Breckley takes time to get to know his patients and make sure they are comfortable and at ease to avoid any unnecessary dental anxiety and stress. He is presently a member of the American Dental Association, Georgia Dental Association, Northwest District Dental Society, and a graduate of the Mercer Mastery Program.</p>
                </div>
            </div>
            <a href="" class="orange-btn text-uppercase ms-5">Meet the 32 dental team</a>
        </div>
    </section>
  )
}

export default TeamMembers
