import React from "react";
import logo2 from "../assets/logo-grabfood2.svg";
import iconLocation from "../assets/location.png";
import iconNext from "../assets/icon-next.svg";
import search from "../assets/search.png";
import RestaurantAll from "./RestaurantAll";
import tw from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import { restaurantData } from "./data";
import DealCards from "./DealCard";
import { Link } from "react-router-dom";

export default function ListRestaurant() {
  const restaurant = restaurantData.map((item) => (
    <RestaurantAll
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
  return (
    <div>
      {/* Header */}
      <div className="header header-bg header-shadow">
        <div className="flex items-center justify-between px-3 container-sm">
          <div className="flex space-x-4 ">
            <Link to="/grab-tw">
              <img className="w-40 h-12 my-2" src={logo2} alt="Logo" />
            </Link>
            <div className="w-auto h-12 my-2 location-input">
              <img src={iconLocation} alt="Location Icon" className="h-6 m-1" />
              <input
                placeholder="Type your location"
                type="text"
                className="flex-1 w-full p-2 focus:outline-none"
              />
              <img
                src="https://food.grab.com/static/images/icons/icon-geo-button.svg"
                alt="Target Icon"
                className="h-6"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              className="hidden h-10 px-3 font-semibold bg-white border rounded border-slate-200 text-slate-400 lg:block "
              type="button"
            >
              <img
                className="w-4"
                src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"
                alt="Cart"
              />
            </button>
            <button
              className="h-10 px-3 text-xs font-semibold bg-white border rounded border-slate-200 text-slate-500 "
              type="button"
            >
              Login/Sign Up
            </button>

            <button
              className="h-10 px-3 text-xs font-semibold bg-white border rounded border-slate-200 text-slate-500"
              type="button"
            >
              EN
            </button>
          </div>
        </div>
      </div>
      {/* Search */}
      <button className="flex items-center w-4/5 mt-24 md:mx-36 sm:mx-0 focus:outline-none bg-slate-50 rounded-2xl container-sm">
        <span className="ml-4 border-0 rounded-l-2xl">
          <img src={search} alt="Search icon" className="h-6" />
        </span>
        <input
          type="text"
          className="flex-1 px-3 py-2 text-black border-0 rounded-2xl bg-slate-50 focus:outline-none"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search for a dish or a restaurant"
        />
      </button>

      <div className="grid grid-cols-1 gap-1 mx-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"></div>
      <div className="container mt-20 ">
        {/* Breadcumb */}
        <nav
          className="mx-10 "
          style={{
            "--bs-breadcrumb-divider": `url(${iconNext})`,
          }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a
                className="no-underline text-sky-500 hover:text-green-600"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cuisine
            </li>
          </ol>
        </nav>

        <h1 className="ml-8 font-bold text-left">
          Food Promos in
          <a className="text-green-600 no-underline "> location</a>
        </h1>
        {/* List Restaurant */}
        <div className="flex flex-wrap ml-6">{restaurant}</div>
      </div>
      {/* Footer */}

      <div className="font-normal text-white bg-green-600">
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
}
