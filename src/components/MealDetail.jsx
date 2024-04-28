import React, { useState } from "react";
import plus from "../assets/plus-white.svg";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
const MealDetail = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [visible, setVisible] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const mealsData = [
    {
      title: "Combo Rice With Chicken Thigh Includes Coca Coca 50% Off",
      description: "Mỗi phần ăn bao gồm 01 bịch tương ớt, 01 bịch nước tương.",
      price: 28000,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020610441903248/detail/menueditor_item_85427b70d75840c7bc76d341bd3635a8_1708608269260714876.webp",
    },
    {
      title: "Combo Rice With Chicken Thigh And Sauce",
      description:
        "Combo Includes Chicken Thigh Rice With Optional Sauce And Cold Seaweed Soup",
      price: 45750,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020610441903248/detail/menueditor_item_85427b70d75840c7bc76d341bd3635a8_1708608269260714876.webp",
    },
    {
      title: "Rice With Grilled Pork",
      description: "Mỗi phần ăn bao gồm 01 bịch tương ớt, 01 bịch nước tương.",
      price: 35000,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020304250857510/detail/menueditor_item_07b32cc0e2f84eca92996ac4db79b06f_1706934294696427230.webp",
    },
    {
      title: "Rice With Chicken Thigh Without Sauce",
      description:
        "Combo Includes Chicken Thigh Rice With Optional Sauce And Cold Seaweed Soup",
      price: 45750,
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020303512252464/detail/menueditor_item_4c0e6f1a3f9d4a498ef98ba6203eaf2a_1706953593181323001.webp",
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
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-0">
        {mealsData.map((meal, index) => (
          <div key={index} className="col">
            <div className="card" style={{ width: "385px", height: "210px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={meal.imageSrc}
                    className="card-img"
                    alt="Meal"
                    style={{
                      margin: "15px",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div
                    className="card-body"
                    style={{ textAlign: "left", marginLeft: "5px" }}
                  >
                    <h5
                      className="card-title"
                      style={{ fontWeight: "300", fontSize: "16px" }}
                    >
                      {meal.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{ color: "#9a9a9a", fontSize: "15px" }}
                    >
                      {meal.description}
                    </p>
                    <p className="fw-500">{meal.price}</p>
                  </div>

                  <button onClick={toggleDrawer}>
                    <Drawer
                      style={{}}
                      open={isOpen}
                      onClose={toggleDrawer}
                      direction="right"
                      className="bla"
                    ></Drawer>
                    <img src={plus} alt="Add" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealDetail;
