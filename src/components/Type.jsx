import React from "react";
function Type(props) {
  return (
    <div className="h-56 text-left border-0 rounded-md card w-72">
      <img className="rounded-md" src={props.image} />
      <h5 className="py-2 text-base font-bold">{props.title}</h5>
    </div>
  );
}
export default Type;
