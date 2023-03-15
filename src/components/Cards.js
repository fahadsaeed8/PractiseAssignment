import React from "react";

function Cards() {
  return (
    <div className="container card-col">
      <div className="row row-cols-1 row-cols-md-3 text-start">
        <div className="col">
          <div class="card  mb-3 text-left">
            <div class="card-header bg-transparent ">
              <h5>Hourly Work</h5>
            </div>
            <div class="card-body ">
              {/* <h5 class="card-title">Success card title</h5> */}
              <p class="card-text">Best for small tasks</p>
              <p class="card-text">Free Research</p>
              <p class="card-text">Demo available</p>
              <p class="card-text">Limited sales support</p>
              <p class="card-text">Limited QA Hours</p>
            </div>
            <div class="card-footer bg-transparent">
              <h5>Get started now </h5>
            </div>
          </div>
        </div>
        <div className="col ">
          <div class="card card-shadow  mb-3 bg-grey text-left">
            <div class="card-header bg-transparent">
              <h5>Monthly Dedicated</h5>
            </div>
            <div class="card-body ">
              <p class="card-text">40 hours per week</p>
              <p class="card-text"> Dedicated Resource</p>
              <p class="card-text">Development Manager</p>
              <p class="card-text">12 hours of sales support</p>
              <p class="card-text">QA included</p>
            </div>
            <div class="card-footer bg-transparent ">
              <h5>Get started now </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card  mb-3 text-left">
            <div class="card-header bg-transparent ">
              {" "}
              <h5>Project Based</h5>
            </div>
            <div class="card-body ">
              <p class="card-text">Documentation oriented</p>
              <p class="card-text">Bi-weekly meetings</p>
              <p class="card-text">Development Manager</p>
              <p class="card-text">Flexible hours</p>
              <p class="card-text">After-sales support</p>
            </div>
            <div class="card-footer bg-transparent ">
              <h5>Get started now </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
