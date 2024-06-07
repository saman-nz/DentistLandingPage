import React from "react";
import section2 from'../assets/section2.jpg'
function Welcome() {
  return (
    <section className="pt-5 pb-5 welcome-sec">
      <div className="container pt-5 pb-5">
        <div className="row">
            <div className="col-md-6 rounded d-flex align-items-center justify-content-center">
                <img src={section2} className="img-fluid rounded" alt="" />
            </div>
            <div className="col-md-6 d-flex gap-4 flex-column align-itmes-center justify-content-center">
                <h2>Welcome to  <span className="italic"></span>32 Dental.</h2>
                <h5 className="orange text-uppercase">DENTISTS IN KENNESAW GA, DR LAN VO, DMD AND DR SEAN BRECKLEY, DMD</h5>
                <p>32 Dental in the Cobb County area is committed to providing comfort to our patients, along with the dental excellence they expect and deserve. The dentists at 32 Dental, Dr. Lan Vo, and Dr. Sean Breckley, take pride in offering our patients a lifetime of positive, uplifting dental experiences, and they will care for each patient’s specific dental needs with the best that dental technology and education can provide.  Our entire Team looks forward to welcoming you to our dental family!</p>
           <a href="" className="orange-btn text-uppercase">Meet our Team</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
