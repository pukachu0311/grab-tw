import React from "react";
function Restaurant(props) {
  return (
    <div className=" text-left border-0 rounded-md card w-[23%] m-[1%] h-80">
      <img className="rounded-md" src={props.imageUrl} />
      <div className="absolute flex items-center w-12 h-5 text-xs font-medium text-white bg-green-600 -left-1 top-3">
        {props.promo}
      </div>
      <h5 className="py-2 font-bold name">{props.name}</h5>
      <p className="text-sm text-slate-500 ">{props.type}</p>

      <div class="flex justify-start text-slate-500 text-sm mb-2">
        <span class="mr-3 inline-flex">
          <img
            className="mr-3"
            src="https://food.grab.com/static/images/icons/icon-star.svg"
          />
          {props.rating}
        </span>
        <span class="mr-3 inline-flex">
          <img
            className="mr-3"
            src="https://food.grab.com/static/images/icons/icon-clock.svg"
          />
          {props.deliveryTime}
        </span>
        <span>
          <span className="mr-3">•</span> {props.distance}
        </span>
      </div>
      <div class="flex justify-center text-black text-md">
        <span class="mr-3 inline-flex">
          <img
            className="mr-3"
            src="https://food.grab.com/static/images/icons/icon-promo-tag.svg"
          />
          {props.promotion}
        </span>
      </div>
    </div>
  );
}
export default Restaurant;
