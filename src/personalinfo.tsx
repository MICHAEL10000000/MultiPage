import React from "react";

const Personalinfo = () => {
  return (
    <div>
      <form action="" className=" font-Ubuntu-Regular">
        <div className="mb-4">
          <label htmlFor="Name" className=" text-base">
            Name
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="e.g Stephen King"
            className="border-gray border border-solid rounded-sm py-2 pl-4 w-full font-Ubuntu-Medium text-base "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email Address" className=" text-base">
            Email Address
          </label>{" "}
          <br />
          <input
            type="email"
            placeholder="e.g stephenking@lorem.com"
            className="border-gray border border-solid rounded-sm py-2 pl-4 w-full font-Ubuntu-Medium text-base"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Number" className=" text-base">
            Number
          </label>{" "}
          <br />
          <input
            type="tel"
            placeholder="e.g +1 234 567 890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            className="border-gray border border-solid rounded-sm py-2 pl-4 w-full font-Ubuntu-Medium text-base"
          />
        </div>
      </form>
    </div>
  );
};

export default Personalinfo;
