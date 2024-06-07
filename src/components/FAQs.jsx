import React from "react";
import Frame2 from "../assets/Frame-2.webp";

function FAQs() {
  return (
    <section className="faqs pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Frequently Asked Questions.</h2>
            <div className="d-flex gap-4 align-items-end pt-4">
              <img src={Frame2} className="img-fluid" alt="" />
              <p>
                Call (770) 423-1132 to schedule an appointment with Drs Vo and
                Breckley at 32 Dental in Kennesaw, GA.
              </p>
            </div>
          </div>
          <div className="col-md-6">
          <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <span className="orange">1. </span> How to choose a dentist right for you?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     The team of 32 Dental in Kennesaw, GA understands how important it is to have a wide variety of professionals who can help you with your dental care.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <span className="orange">2. </span> How to choose a dentist right for you?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The team of 32 Dental in Kennesaw, GA understands how important it is to have a wide variety of professionals who can help you with your dental care.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <span className="orange">3. </span> How to choose a dentist right for you?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      The team of 32 Dental in Kennesaw, GA understands how important it is to have a wide variety of professionals who can help you with your dental care.
      </div>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
