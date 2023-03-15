import React from "react";


function Carosal() {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner ">
          <div class="carousel-item active p-5">
            <h3>GARY FEUERSTEIN</h3>
            <p>CEO - PROSITE24</p>
            <p>
              Skylinx Technologies has played a crucial part in the design,
              setup, and development of our platform. Communication has been
              excellent throughout the whole process and their technical
              expertise has proven invaluable.
            </p>
          </div>
          <div class="carousel-item p-5">
            <h3>LISA APOLINSKI</h3>
            <p>FOUNDER & CEO - 3 DOG WRITE</p>
            <p>
              I have had the pleasure of working with Skylinx Technologies for
              several critical projects. Faizan and his team bring solid coding
              skills as well as forward vision to these projects. This creates a
              digital asset that works in today's digital paradigm and can
              easily pivot into the next. Faizan and his team also manage these
              projects effectively and keep the projects moving to completion.
            </p>
          </div>
          <div class="carousel-item p-5">
            <h3>IQBAL HAIDER</h3>
            <p>CEO - IINFINITTY MEDIA & TECHNOLOGIES</p>
            <p>
              We’ve been working with Skylinx since last year and a half. We’ve
              done a number of projects together starting from Web to mobile to
              ERP to SaaS platforms. I must say Faizan and his team at Skylinx
              are very well versed when it comes to providing their clients a
              360 degrees solution. Their approach to handling any project is
              always curated for every client based on their requirement. I
              highly recommend Faizan and his team for any development and
              engineering projects. I’m and I’ll keep on hiring and engaging
              them for our future projects.
            </p>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only"></span>
        </a>
      </div>
    </div>
  );
}

export default Carosal;
