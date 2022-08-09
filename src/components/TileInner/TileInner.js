import React, { useState } from "react";
import Tile from "../Tile/Tile";

import "./TileInner.css";

const TileInner = (props) => {
  const [title, setTitle] = useState(props.title);
  const [url, setUrl] = useState(props.url);
  const [icon, setIcon] = useState(props.icon);

  return (
    <div className="tileInner">
      <a href={url}>
        <Tile src={icon} />
      </a>
      <a href={url} className="title">
        {title}
      </a>
    </div>
  );
};

export default TileInner;
