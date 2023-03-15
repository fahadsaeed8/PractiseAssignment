import React from "react";
import deliver from "../asset/deliver.png";
function Delivery() {
  return (
    <div className="container">
      <div className="container m-3">
        <div className="row ">
          <div className="col text-align-left p-4 text-c">
            <h2>
              <strong>Testing & Delivery</strong>
            </h2>
            <p>
              But, that’s just not enough. We measure before we deliver cause
              you know “What’s Measured - improves”. We offer the facility of on
              site testing and ensures the smooth delivery with 100% customer
              satisfaction.
            </p>
          </div>
          <div className="col w-10 p-4 text-c">
            <img src={deliver} className="w-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
