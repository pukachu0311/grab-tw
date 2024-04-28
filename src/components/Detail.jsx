import React from "react";
import logo2 from "../assets/logo-grabfood2.svg";
import iconLocation from "../assets/location.png";
import iconNext from "../assets/icon-next.svg";
import search from "../assets/search.png";
import RestaurantAll from "./RestaurantAll";
import tw from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
export default function Detail() {
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
    </div>
  );
}
