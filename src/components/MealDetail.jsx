import React, { useState } from "react";
import plus from "../assets/plus-white.svg";

import { Drawer } from "antd";
import "react-modern-drawer/dist/index.css";
const MealDetail = () => {
  const [visible, setVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const mealsData = [
    {
      title: "Mua 3 tặng 1",
      description:
        "Mua Trà Sữa Mochi Khoai Môn Sáp Trà Sữa Double Cheese Mochi Kem Cheese Trà Sữa Trân Châu tặng Trà Sữa Kem Trứng Khè M",
      price: 28000,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE20240416202050013266/detail/5baf45b3_210183_blob.webp",
    },
    {
      title: "Mua 2 tặng 1",
      description:
        "Mua Trà Sữa Muối L Trà Sữa Kem Trứng Khè L tặng Trà Sữa Trân Châu M",
      price: 45750,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE20240401110216034556/detail/c4ca9a3e_126821_blob.webp",
    },
    {
      title: "Mua 3 tặng 1",
      description:
        "Mua Trà Sữa Mochi Khoai Môn Sáp Trà Sữa Double Cheese Mochi Kem Cheese Trà Sữa Trân Châu tặng Trà Sữa Kem Trứng Khè M",
      price: 28000,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE20240102181326010856/detail/7a0e4bce_391301_blob.webp",
    },
    {
      title: "Combo Tiên Cá Vẫy Gọi Mới",
      description: "Trà Sữa Trân Châu L và Ly Tiên Cá Màu Mới",
      price: 45750,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE20240102181326010856/detail/7a0e4bce_391301_blob.webp",
    },
  ];

  const handleClick = (meal) => {
    setSelectedMeal(meal);
    setQuantity(1);
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container p-0 sm:-0 ">
      <div className="grid gap-4 mb-4 text-left xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 md:w-fit">
        {mealsData.map((meal, index) => (
          <div key={index}>
            <div className="card w-96 h-52" onClick={() => handleClick(meal)}>
              <div className="grid grid-cols-3 ">
                <div className="col-span-1">
                  <img
                    src={meal.imageSrc}
                    className="w-full h-auto m-2 rounded"
                    alt="Meal"
                  />
                </div>
                <div className="col-span-2">
                  <div className="card-body">
                    <h5 className="text-lg card-title">{meal.title}</h5>
                    <p className="w-56 text-gray-400 h-fit card-text">
                      {meal.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold ">{meal.price}</p>

                      <button onClick={() => handleClick(meal)}>
                        <img
                          className="bg-green-500 rounded-full w-7"
                          src={plus}
                          alt="Add"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Drawer
          width={600}
          visible={visible}
          closable={false}
          onClose={closeDrawer}
          className="bla "
        >
          {/* nội dung drawer */}
          {selectedMeal && (
            <div className="w-full border-0 card sm:w-full">
              <div className="flex">
                <div className="w-1/4">
                  <img
                    src={selectedMeal.imageSrc}
                    alt=""
                    className="w-40 h-auto m-2 rounded"
                  />
                </div>

                <div className="flex justify-between w-full ml-4 card-body">
                  <div className="w-2/3">
                    <h5 className="text-xl card-title">{selectedMeal.title}</h5>
                    <p className="text-gray-400 h-fit card-text">
                      {selectedMeal.description}
                    </p>
                  </div>
                  <div className="flex items-start justify-end w-1/3">
                    <p className="text-xl font-semibold">
                      {selectedMeal.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="btnQty">
            <div className="container p-0 text-center">
              <div class="grid grid-cols-3 gap-4 ">
                <div className="flex justify-between ">
                  <button className="" onClick={handleDecreaseQuantity}>
                    -
                  </button>
                  <span style={{ fontSize: 20, margin: "0 10px" }}>
                    {quantity}
                  </span>{" "}
                  <button className="" onClick={handleIncreaseQuantity}>
                    +
                  </button>
                </div>
                <div className="col-span-2">
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ width: "100%" }}
                  >
                    {selectedMeal &&
                      `Add to Basket - ${selectedMeal.price * quantity} ₫`}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MealDetail;
