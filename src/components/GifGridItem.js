import React from "react";
import "animate.css";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card animate__animated animate__backInLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
