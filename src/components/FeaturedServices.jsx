import React from 'react'

function FeaturedServices() {
  return (
    <div className='container align-items-center justify-content-between d-flex pt-5 pb-5'>
      <h1>Featured Services</h1>
      <div className='d-flex gap-5 align-items-center'>
        <h6>At 32 Dental, we offer a wide variety of dental services.</h6>
        <div className="line"></div>
        <div className="all-services-circle">All services</div>
      </div>
    </div>
  )
}

export default FeaturedServices
