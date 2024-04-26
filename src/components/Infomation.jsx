import React, { useState } from "react";

function Infomation(props) {
  return (
    <div>
      <div>
        <div className="container text-left">
          <h3 className="py-2 ml-4 font-bold">{props.question}</h3>
          <p className="ml-4">{props.answer1}</p>

          {props.num1 && props.tit1 && props.content1 && (
            <div className="ml-4">
              <p className="inline ml-4">{props.num1}</p>
              <p className="inline ml-1 font-bold">{props.tit1}</p>
              <p className="inline ml-1">{props.content1}</p>
            </div>
          )}
          {props.num2 && props.tit2 && props.content2 && (
            <div className="ml-4">
              <p className="inline ml-4">{props.num2}</p>
              <p className="inline ml-1 font-bold">{props.tit2}</p>
              <p className="inline ml-1">{props.content2}</p>
            </div>
          )}
          {props.num3 && props.tit3 && props.content3 && (
            <div className="ml-4">
              <p className="inline ml-4">{props.num3}</p>
              <p className="inline ml-1 font-bold">{props.tit3}</p>
              <p className="inline">{props.content3}</p>
            </div>
          )}
          <p className="ml-4">{props.answer2}</p>
          <hr className="mx-3" />
        </div>
      </div>
    </div>
  );
}

export default Infomation;
