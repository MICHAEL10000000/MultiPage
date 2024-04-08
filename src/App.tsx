import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hdnumber from "./Hdnumber";
import Footer from "./footer";
import Personalinfo from "./personalinfo";
import Selection from "./Selection";
import Title_des from "./Title_des";
import checkmark from "./assets/images/icon-checkmark.svg";
import mobileHeaderImage from "./assets/images/bg-sidebar-mobile.svg";
import AddOns from "./AddOns";
import Finishing from "./Finishing";
import desktopImage from "./assets/images/bg-sidebar-desktop.svg";

function App() {
  const [count, setCount] = useState(0);
  const linkList = ["./", "./Selection", "./AddOns", "./Finishing"];
  const [nextLink, setnextLink] = useState(1);
  const [AddonPrices, setAddonPrices] = useState({});

  const AddonPriceDeterminer = () => {
    const changeDeterminer = document.querySelector(".button");
    if (changeDeterminer?.classList.contains("justify-start")) {
      setAddonPrices({
        online: "+$1/mo",
        storage: "+$2/mo",
        profile: "+$2/mo",
      });
    } else {
      setAddonPrices({
        online: "+$10/yr",
        storage: "+$20/yr",
        profile: "+$20/yr",
      });
    }
  };

  const linkFunction = () => {
    setnextLink(nextLink + 1);
    console.log(nextLink);
    previousFunction();
    AddonPriceDeterminer();
  };
  const previousFunction = () => {
    const previous = document.querySelector(".previous");
    if (nextLink >= 1) {
      previous?.classList.remove("invisible");
    } else {
      previous?.classList.add("invisible");
    }
  };
  const Debug = () => {
    console.log("Hello");
  };

  return (
    <BrowserRouter>
      <div className="App md:flex ">
        <div className="">
          <img src={mobileHeaderImage} alt="" className="md:hidden" />
          <img src={desktopImage} alt="" className="hidden md:inline" />
        </div>
        <div className=" ">
          <Hdnumber
            firstFunction={() => {
              setnextLink(1);
              const previous = document.querySelector(".previous");
              previous?.classList.add("invisible");
            }}
            secondFunction={() => {
              setnextLink(2);
              previousFunction();
            }}
            thirdFunction={() => {
              AddonPriceDeterminer();
              setnextLink(3);
              previousFunction();
            }}
            fourthFunction={() => {
              setnextLink(4);
              previousFunction();
            }}
          />
          <div className="main box  py-56 px-6 bg-Magnolia text-lg">
            <div className=" rounded-md absolute top-24 left-1/2 transform -translate-x-1/2 px-6 bg-white w-11/12 pb-8 pt-2">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Title_des
                        title="Personal info"
                        dsc="Please provide your name, email address and phone number"
                      />
                      <Personalinfo />
                    </>
                  }
                ></Route>
                <Route
                  path="/Selection"
                  element={
                    <>
                      <Title_des
                        title="Select Your Plan"
                        dsc="You have the option of monthly or yearly billing"
                      />
                      <Selection />
                    </>
                  }
                ></Route>
                <Route
                  path="/AddOns"
                  element={
                    <>
                      <Title_des
                        title="Pick add-ons"
                        dsc="Add-ons help your gaining experience"
                      />
                      <AddOns Addon={AddonPrices} />
                    </>
                  }
                ></Route>
                <Route
                  path="/Finishing"
                  element={
                    <>
                      <Title_des
                        title="Finishing up"
                        dsc="Double-check everything looks OK before confirming"
                      />
                      <Finishing />
                    </>
                  }
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
        <Footer nextLink={linkList[nextLink]} linkFunction={linkFunction} />
        <div>
          <img src={checkmark} alt="" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
