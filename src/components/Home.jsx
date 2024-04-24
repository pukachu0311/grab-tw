import React, { useState, useEffect } from "react";
import "./Design.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo2 from "../assets/logo-grabfood2.svg";
import logo1 from "../assets/logo-grabfood-white2.svg";
import iconLocation from "../assets/location.png";
import tw from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import Restaurant from "./Restaurant";
import { responsive, restaurantData } from "./data";

const restaurant = restaurantData.map((item) => (
  <Restaurant
    name={item.name}
    imageUrl={item.imageUrl}
    promo={item.promo}
    type={item.type}
    rating={item.rating}
    deliveryTime={item.deliveryTime}
    distance={item.distance}
    promotion={item.promotion}
  />
));
const Home = () => {
  const [color, setColor] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo1);

  const changeColor = () => {
    if (window.scrollY >= 45) {
      setColor(true);
      setLogoSrc(logo2);
    } else {
      setColor(false);
      setLogoSrc(logo1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className="">
      {/* Header */}

      <div className={color ? "header header-bg header-shadow" : "header"}>
        <div className="flex items-center justify-between mx-36">
          <a className="" href="/">
            <img className="logo2" src={logoSrc} alt="Logo" />
          </a>
          <div className="flex space-x-4">
            <button
              className="hidden h-10 px-3 font-semibold bg-white border rounded-lg border-slate-200 text-slate-400 lg:block"
              type="button"
            >
              <img
                src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"
                alt="Cart"
              />
            </button>
            <button
              className="h-10 px-3 font-semibold bg-white border rounded-lg border-slate-200 text-slate-500"
              type="button"
            >
              Login / Sign Up
            </button>

            <button
              className="h-10 px-3 font-semibold bg-white border rounded-lg border-slate-200 text-slate-500"
              type="button"
            >
              EN
            </button>
          </div>
        </div>
      </div>
      {/* Background */}

      <img
        className="relative hidden object-cover w-full bg-center bg-no-repeat bg-cover h-96 -z-1 md:block"
        src="https://food.grab.com/static/page-home/VN-new-1.jpg"
      />
      {/* Searchbox */}
      {/* chưa chỉnh được md width  100%, top 0 */}
      <div className="container">
        <div
          className={`searchContainer ${
            !color ? ".searchContainer" : "md:w-full"
          }`}
        >
          <h5 style={{ textAlign: "left" }}>
            <strong>Good Afternoon</strong>
          </h5>
          <h1 id="textBox">Where should we deliver your food today?</h1>
          <div className="flex items-center pb-2 mb-4 border-b border-gray-300 location-input">
            <img
              id="icon"
              src={iconLocation}
              alt="Location Icon"
              className="h-6 m-1"
            />
            <input
              id="search-input"
              placeholder="Type your location"
              type="text"
              className="flex-1 w-full py-2 focus:outline-none"
            />
            <img
              src="https://food.grab.com/static/images/icons/icon-geo-button.svg"
              alt="Target Icon"
              className="h-6"
            />
          </div>
          <button id="btnSearch" type="button" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
      <hr className="my-16" />
      {/* Content */}

      <div className="container" style={{ height: "1000px" }}>
        <h1 className="ml-8 font-bold text-left">
          GrabFood Promo in
          <a className="text-green-600 no-underline "> location</a>
        </h1>
        {/* Carousel */}
        <Carousel className="sm:flex sm:items-center " responsive={responsive}>
          {restaurant}
        </Carousel>
      </div>

      {/* Footer */}

      <div className="font-normal text-white bg-green-600 ">
        <div className="container text-left ">
          <a className="" href="/">
            <img
              className="pt-3 ml-8 w-44"
              src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
              alt="Logo"
            />
          </a>
          <hr className="mx-8 bg-white border-white " />
          <div className="grid-cols-1 py-4">
            <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-6 ml-8 ">
              <div>About GrabFood</div>
              <div>Be a GrabFood Merchant</div>
              <div>Help</div>
              <div>
                <span class="inline-grid grid-cols-3 gap-1">
                  <span>
                    <img className="w-6 h-6 mr-5" src={fb} />
                  </span>
                  <span>
                    <img className="w-6 h-6 mr-5" src={ig} />
                  </span>
                  <span>
                    <img className="w-6 h-6 mr-5" src={tw} />
                  </span>
                </span>
              </div>
            </div>
            <div class="grid xl:grid-cols-4 gap-4 lg:grid-cols-6 ml-8 py-4">
              <div>About Grab</div>
              <div>Drive With Grab</div>
              <div>FAQs</div>
            </div>
            <div class="grid grid-cols-4  gap-4 ml-8 ">
              <div>Blog</div>
            </div>
          </div>
          <hr className="mx-8 bg-white border-white" />
          <div className="grid-cols-1 py-4">
            <div class="grid xl:grid-cols-4 gap-4  lg:grid-cols-6">
              <div class="col-span-2 flex items-center ml-8 py-2">
                <img
                  className="mr-4"
                  src="https://food.grab.com/static/images/logo-appstore.svg"
                />
                <img src="https://food.grab.com/static/images/logo-playstore.svg" />
              </div>
              <div class="col-span-2 py-4 text-xs xl:text-right  lg:text-left mr-8 lg:ml-8 ">
                <span class="mr-4">© 2024 Grab</span>
                <span class="mr-4">Terms of Service</span>
                <span>• Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
