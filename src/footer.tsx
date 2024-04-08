import React from "react";
import { NavLink } from "react-router-dom";
/* import Selection from "./Selection"; */

const footer = ({ nextLink, linkFunction }) => {
  const linkList = ["./Selection", "./AddOns", "./Finishing"];

  return (
    <div className=" flex justify-between items-center mt-8 pr-4">
      <p className="pl-5 text-xl text-Coolgray previous invisible">Go back</p>
      <div className=" font-Ubuntu-Medium bg-Marineblue flex justify-center text-xl w-32 py-4 px-2 mr-1 rounded-md text-white">
        <NavLink to={nextLink} onClick={linkFunction}>
          Next Step
        </NavLink>
      </div>
    </div>
  );
};

export default footer;
