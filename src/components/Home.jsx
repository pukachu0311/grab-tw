import React, { useState, useEffect } from "react";
import "./Design.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import tick from "../assets/tick.svg";
import logo2 from "../assets/logo-grabfood2.svg";
import logo1 from "../assets/logo-grabfood-white2.svg";
import iconLocation from "../assets/location.png";
import tw from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import Restaurant from "./Restaurant";
import { faqData, responsive, restaurantData, typeData } from "./data";
import Type from "./Type";
import Infomation from "./Infomation";

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
const type = typeData.map((item) => (
  <Type title={item.title} image={item.image} />
));
const faq = faqData.map((item) => (
  <Infomation
    question={item.question}
    answer1={item.answer1}
    answer2={item.answer2}
    num1={item.num1}
    tit1={item.tit1}
    content1={item.content1}
    num2={item.num2}
    tit2={item.tit2}
    content2={item.content2}
    num3={item.num3}
    tit3={item.tit3}
    content3={item.content3}
  />
));
const Home = () => {
  const [color, setColor] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo1);

  const changeColor = () => {
    if (window.scrollY >= 45 || window.innerWidth < 1024) {
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
          <img className="w-40 h-20 mt-2" src={logoSrc} alt="Logo" />

          <div className="flex space-x-4">
            <button
              className="hidden h-10 px-3 font-semibold bg-white border rounded border-slate-200 text-slate-400 lg:block"
              type="button"
            >
              <img
                src="https://food.grab.com/static/images/icons/icon-cart-default-black.svg"
                alt="Cart"
              />
            </button>
            <button
              className="h-10 px-3 font-semibold bg-white border rounded border-slate-200 text-slate-500 font-sm "
              type="button"
            >
              Login / Sign Up
            </button>

            <button
              className="h-10 px-3 font-semibold bg-white border rounded font-sm border-slate-200 text-slate-500"
              type="button"
            >
              EN
            </button>
          </div>
        </div>
      </div>
      {/* Background */}

      <img
        className="relative hidden object-cover w-full bg-center bg-no-repeat bg-cover h-96 -z-1 lg:block"
        src="https://food.grab.com/static/page-home/VN-new-1.jpg"
      />
      {/* Searchbox */}
      {/* chưa chỉnh được md width  100%, top 0 */}
      <div className="container">
        <div class="searchContainer xl:absolute lg:relative ">
          <h5 className="font-bold text-left lg:w-full">Good Afternoon</h5>
          <h1 className="font-bold text-left ">
            Where should we deliver your food today?
          </h1>
          <div className="location-input">
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

          <button id="btnSearch" type="button" className=" btn btn-primary">
            Search
          </button>
        </div>
      </div>
      <hr className="my-16" />
      {/* Content */}

      <div className="container">
        <h1 className="ml-8 font-bold text-left">
          GrabFood Promo in
          <a className="text-green-600 no-underline "> location</a>
        </h1>
        {/* Carousel */}
        <Carousel className="sm:flex sm:items-center " responsive={responsive}>
          {restaurant}
        </Carousel>
        {/* Button */}
        <div className="gap-2 d-grid" style={{ margin: "0 40px" }}>
          <a href="/restaurant" className="btn btn-primary" id="see-all">
            See all promotions
          </a>
        </div>
        {/* Type */}
        <h1 className="my-5 ml-8 font-bold text-left">
          There's something for everyone!
        </h1>
        <div className="grid grid-cols-1 gap-3 ml-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {type}
        </div>
        {/* FAQ */}
        <h1 className="my-5 ml-8 font-bold text-left">Why GrabFood?</h1>
        <section className="ml-8 text-left">
          <p>
            <img className="inline mr-2" src={tick}></img>
            <strong>Quickest</strong>- GrabFood provides the fastest food
            delivery in the market.
          </p>
          <p>
            <img className="inline mr-2" src={tick}></img>
            <strong>Easiest</strong> - Now grabbing your food is just a few
            clicks or taps away. Order online or download our Grab super app for
            a faster and more rewarding experience.
          </p>
          <p>
            <img className="inline mr-2" src={tick}></img>
            <strong>Food for all cravings</strong>- From local fare to
            restaurant favourites, our wide selection of food will definitely
            satisfy all your cravings
          </p>
          <p>
            <img className="inline mr-2" src={tick}></img>
            <strong>Pay with ease</strong>- It’s easy to get your meals
            delivered to you. It’s even easier to pay for it with GrabPay.
          </p>
          <p>
            <img className="inline mr-2" src={tick}></img>
            <strong>More Rewarding</strong>- earn GrabRewards points for every
            order you make and use them to redeem more goodies.
          </p>
        </section>
        <h1 className="my-5 ml-8 font-bold text-left">
          Frequently Asked Questions
        </h1>
        {/* chưa sửa được readmore */}
        <div className="ml-4">{faq}</div>
      </div>
      {/* Download */}
      <div class="my-0 bg-slate-50">
        <div class="grid grid-cols-1 lg:grid-cols-2 mx-2">
          <div class="flex flex-col items-center justify-center m-28 ">
            <img src="https://food.grab.com/static/page-home/bottom-food-options.svg" />
            <h5>Curated restaurants</h5>
            <p>
              From small bites to big meals, we won't limit your appetite. Go
              ahead and order all you want.
            </p>
          </div>
          <div class="flex flex-col items-center justify-center m-20">
            <img
              class="w-40"
              src="https://food.grab.com/static/images/ilus-cool-features-app.svg"
            />
            <h5>More cool features available on the app</h5>
            <p>
              Download Grab app to use other payment methods and enjoy seamless
              communication with your driver.
            </p>
            <div class="col-span-2 flex items-center justify-center ml-8 py-2">
              <img
                class="mr-4"
                src="https://food.grab.com/static/images/logo-appstore.svg"
              />
              <img src="https://food.grab.com/static/images/logo-playstore.svg" />
            </div>
          </div>
        </div>
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
};

export default Home;
