import React from "react";
import TileInner from "../TileInner/TileInner";

import { ReactComponent as Ellipsis } from "./menuIcon.svg";

import "./TileOuter.css";

const TileOuter = ({ shortcut }) => {
  return (
    <div className="tileOuter">
      <div className="button-container">
        <button>
          <Ellipsis />
        </button>
      </div>
      <TileInner
        icon={shortcut.icon}
        url={shortcut.url}
        title={shortcut.title}
      />
    </div>
  );
};

export default TileOuter;
