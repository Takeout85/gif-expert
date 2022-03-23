import React from "react";
import propTypes from "prop-types";
import "animate.css";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div key={id} className="card animate__animated animate__backInLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifGridItem.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default GifGridItem;
