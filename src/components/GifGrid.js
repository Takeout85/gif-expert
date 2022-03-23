import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import Loading from "./Loading";
import GifGridItem from "./GifGridItem";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && <Loading />}

      <li className="category">
        <h3>{category.toUpperCase()}</h3>
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
        <hr />
      </li>
    </>
  );
};

GifGrid.prototype = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
