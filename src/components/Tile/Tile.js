import React from "react";
import "./Tile.css"


const Tile = (props) => {
  return (
    <button className="tile">
      <img src={props.src} alt="logo" className="tile-img" />
    </button>
  );
};

export default Tile;
