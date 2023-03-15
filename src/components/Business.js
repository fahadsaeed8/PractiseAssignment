import React from "react";
import business from "../asset/business.png";
function Business() {
  return (
    <div className="tech">
      <div className="container m-3">
        <div className="row ">
          <div className="col w-10 p-4 text-center m-2">
            <img src={business} className="width50 text-c" />
          </div>
          <div className="col text-align-right p-4 text-cr">
            <h2>
              <strong>Business Logics</strong>
            </h2>
            <p>
              We commit to program the communication between the data base and
              end user in an expert manner. You will never regret doing business
              with us and will experience the perfect business logics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
