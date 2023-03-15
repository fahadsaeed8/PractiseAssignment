import React from "react";
import design from "../asset/design.png";
function Design() {
  return (
    <div className="container">
    <div className="container m-3">
    <div className="row ">
      <div className="col text-align-left p-4 text-c">
        <h2>
          <strong>Design UI/UX</strong>
        </h2>
        <p>
        Your product’s progress is directly proportional to how user
            friendly it is. We make sure that we design the UI/UX of your
            product in such a way that it is easily accessible to the targeted
            audience. Our aim is to make a successful digital product for you.
        </p>
      </div>
      <div className="col w-10 p-4 text-center">
        <img src={design} className='w-50 text-c' />
      </div>
    </div>
    </div>
    </div>
  );
}

export default Design;
