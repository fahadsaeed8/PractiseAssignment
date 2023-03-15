import React from "react";
import tech from "../asset/tech.png";
function Technology() {
  return (
    <div className="tech">
    <div className="container m-3">
    <div className="row row-cols-1 row-cols-md-2">
      <div className="col text-center">
        <img src={tech} className='' />
      </div>
      <div className="col text-align-right p-4 text-c">
        <h2>
          <strong>Technology Stack</strong>
        </h2>
        <p>
          We are your ultimate TechStack partners who can successively integrate
          any customizations in your developments just to make them best suited
          for your business needs! Skylinx Technologies can put life in to your
          ideas. The smart software technologies we use are Laravel, NodeJS,
          PHP, Ecommerce and CMS.
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Technology;
