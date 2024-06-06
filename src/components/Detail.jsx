import React from "react";
import logo2 from "../assets/logo-grabfood2.svg";
import iconLocation from "../assets/location.png";
import iconNext from "../assets/icon-next.svg";
import tw from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MealDetail from "./MealDetail";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <>
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

      <div className="container p-0 mt-32">
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
              <Link
                className="no-underline text-sky-500 hover:text-green-600"
                to="/grab-tw"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                className="no-underline text-sky-500 hover:text-green-600"
                to="/restaurant"
              >
                Restaurant
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cuisine
            </li>
          </ol>
        </nav>
        {/* Information of Restaurant*/}
        <div className="ml-8 text-left">
          <h2 className="py-2 font-bold name">
            Trà Sữa MayCha- Trịnh Đình Trọng
          </h2>
          <p className="text-sm text-slate-500 ">Milk Tea</p>
          <div class="flex justify-start text-slate-500 text-sm mb-2">
            <span class="mr-3 inline-flex">
              <img
                className="mr-3"
                src="https://food.grab.com/static/images/icons/icon-star.svg"
              />
              4.2
            </span>
            <span class="mr-3 inline-flex">
              <img
                className="mr-3"
                src="https://food.grab.com/static/images/icons/icon-clock.svg"
              />
              25 mins
            </span>
            <span>
              <span className="mr-3">•</span> 2.1 km
            </span>
          </div>
          <div className="flex">
            <p className="mr-8 text-sm font-semibold text-slate-500">
              Opening Hours
            </p>
            <p className="inline text-sm text-slate-500">Today 08:00-23:30</p>
          </div>
          <span class="mr-3 inline-flex">
            <img
              className="mr-3"
              src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
            />
            Ưu đãi đến 34k
          </span>
        </div>

        <Tabs style={{ position: "sticky" }}>
          <TabList>
            <Tab>Today's Offer</Tab>
            <Tab>SUMMER COLLECTION</Tab>
            <Tab>GOLDEN WEEK</Tab>
            <Tab>Mochi Dai Dài Ngon</Tab>
            <Tab>BEST SELLER</Tab>
            <Tab>TRÀ SỮA</Tab>
          </TabList>

          <TabPanel>
            <MealDetail />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
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
    </>
  );
}
