import React from "react";
import logo2 from "../assets/logo-grabfood2.svg";
import iconLocation from "../assets/location.png";
import iconNext from "../assets/icon-next.svg";
import search from "../assets/search.png";
import Restaurant from "./Restaurant";
import { restaurantData } from "./data";

export default function ListRestaurant() {
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
  return (
    <div>
      {/* Header */}
      <div className="header header-bg header-shadow">
        <div className="flex items-center justify-between my-3 mx-36">
          <div className="flex space-x-4 ">
            <img className="w-40 h-12 my-2" src={logo2} alt="Logo" />
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
      <div className="container mt-40">
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

        <button
          className="flex items-center w-full mx-10 mb-3 focus:outline-none bg-slate-50 rounded-2xl"
          style={{ color: "#f7f7f7" }}
        >
          <span className="ml-4 border-0 rounded-l-2xl">
            <img src={search} alt="Search icon" className="h-6" />
          </span>
          <input
            type="text"
            className="flex-1 px-3 py-2 text-black border-0 rounded-2xl bg-slate-50 focus:outline-none"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </button>

        <h1 className="ml-8 font-bold text-left">
          Food Promos in
          <a className="text-green-600 no-underline "> location</a>
        </h1>
        <div className="flex flex-wrap sm:flex sm:items-center">
          {restaurant}
        </div>
      </div>
    </div>
  );
}
