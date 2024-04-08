import React from "react";
import { NavLink } from "react-router-dom";

const Hdnumber = ({
  firstFunction,
  secondFunction,
  thirdFunction,
  fourthFunction,
}) => {
  const linkList = ["./", "./Selection", "./AddOns", "./Finishing"];

  return (
    <div className="mb-8 flex justify-center items-center  text-white absolute  top-6 transform -translate-x-1/2 left-1/2 ">
      <ol className="flex gap-4">
        <li>
          <NavLink
            to={linkList[0]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={firstFunction}
          >
            1
          </NavLink>
          <div className="hidden">
            <p>STEP 1</p>
            <h1>YOUR INFO</h1>
          </div>
        </li>
        <li>
          <NavLink
            to={linkList[1]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={secondFunction}
          >
            2
          </NavLink>
          <div className="hidden">
            <p>STEP 2</p>
            <h1>SELECT PLAN</h1>
          </div>
        </li>
        <li>
          <NavLink
            to={linkList[2]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={thirdFunction}
          >
            3
          </NavLink>
          <div className="hidden">
            <p>STEP 3</p>
            <h1>ADD-ONS</h1>
          </div>
        </li>
        <li>
          <NavLink
            to={linkList[3]}
            className="border-white border-solid border round flex justify-center items-center w-10 p-2 hover:bg-Lightblue hover:border-none hover:text-black"
            onClick={fourthFunction}
          >
            4
          </NavLink>
          <div className="hidden">
            <p>STEP 4</p>
            <h1>SUMMARY</h1>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Hdnumber;
