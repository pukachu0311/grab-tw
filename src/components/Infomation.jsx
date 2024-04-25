import React, { useState } from "react";

function Infomation(props) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className={showMore ? "" : "hidden"}>
        <div className="container text-left">
          <h3 className="py-2 font-bold">{props.question}</h3>
          <p>{props.answer1}</p>
          {props.num1 && props.tit1 && props.content1 && (
            <div className="ml-4">
              <p className="inline ml-2">{props.num1}</p>
              <p className="inline ml-1 font-bold">{props.tit1}</p>
              <p className="inline ml-1">{props.content1}</p>
            </div>
          )}
          {props.num2 && props.tit2 && props.content2 && (
            <div className="ml-4">
              <p className="inline ml-2">{props.num2}</p>
              <p className="inline ml-1 font-bold">{props.tit2}</p>
              <p className="inline">{props.content2}</p>
            </div>
          )}
          {props.num3 && props.tit3 && props.content3 && (
            <div className="ml-4">
              <p className="inline ml-2">{props.num3}</p>
              <p className="inline ml-1 font-bold">{props.tit3}</p>
              <p className="inline">{props.content3}</p>
            </div>
          )}
          <p>{props.answer2}</p>
          <hr />
        </div>
      </div>
      {!showMore && (
        <div className="gap-2 d-grid" style={{ margin: "20px 20px" }}>
          <button
            onClick={toggleShowMore}
            id="see-all"
            type="button"
            className="btn btn-primary"
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
}

export default Infomation;
