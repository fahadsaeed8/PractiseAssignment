import React from "react";

function Foooter() {
  return (
    <div>
      <footer class="bg-dark text-center text-white py-5 m-top ">
        <div class="container p-4">
          <section class="">
            <div class="row justify-content-between">
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-5">
                <h5 class="text-uppercase text-left f-18">Follow Us</h5>

                <ul class="list-unstyled mb-0 d-flex">
                  <li className="mx-2 f-18">
                    <i class="fa-brands fa-facebook"></i>
                  </li>
                  <li className="mx-2 f-18">
                    <i class="fa-brands fa-instagram"></i>
                  </li>
                  <li className="mx-2 f-18">
                    <i class="fa-brands fa-twitter"></i>
                  </li>
                  <li className="mx-2 f-18">
                    <i class="fa-brands fa-linkedin"></i>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-5 ">
                <h4 class="text-uppercase f-18">Our Services</h4>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      Mobile App Development
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      Dev Ops
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0 p-5 ">
                <h4 class="text-uppercase f-18">Get in Touch</h4>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">
                      1st Floor. 608 G1, Block G-1, Phase 1 Johar Town, Lahore,
                      Punjab
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      info@skylinxtech.com
                    </a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">
                      (042) 32187015
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          class="text-center p-5"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Foooter;
