import React, { useState } from "react";
export default function Test() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <p
        style={{
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          display: "-webkit-box",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor commodi
        odio magnam. Dolorem officia molestias ab assumenda suscipit sequi!
        Laudantium beatae architecto aspernatur veritatis molestiae perspiciatis
        aut eum omnis tenetur. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dolor commodi odio magnam. Dolorem officia molestias
        ab assumenda suscipit sequi! Laudantium beatae architecto aspernatur
        veritatis molestiae perspiciatis aut eum omnis tenetur.
      </p>
      <button onClick={() => setIsOpen(!isOpen)}>
        {" "}
        {isOpen ? "Read Less..." : "Read More..."}
      </button>
    </div>
  );
}
