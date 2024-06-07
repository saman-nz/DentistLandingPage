import React from 'react'

function Footer() {
  return (
    <div className='pt-5'>
        <div className='img-footer d-flex align-items-end justify-content-end ' >
            <div className="cta d-flex gap-4 align-items-center justify-content-center "><h2>Special Financing Options Available</h2>
            <a className="text-uppercase text-white button-black">Book my appointment</a>
            </div>
        </div>
    <div className='footer'>
      <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
        </ul>
      </div>

      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="orange-btn" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between  border-top">
      <p className='pt-4'>© 2021 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
    </div>
  )
}

export default Footer
