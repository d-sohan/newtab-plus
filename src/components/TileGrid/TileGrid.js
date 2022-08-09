import React from "react";

import "./TileGrid.css"

import youtube from "../../Youtube_logo.png"
import amazon from "../../amazon.jpg"
import TileOuter from "../TileOuter/TileOuter";

const shortcuts = [
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: youtube,
    url: "http://www.youtube.com",
    title: "Youtube" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
  {
    icon: amazon,
    url: "http://www.amazon.com",
    title: "Amazon" 
  },
]

const TileGrid = () => {
  return (
    <div className="tile-grid">
      {shortcuts.map(s => <TileOuter shortcut={s}/>)}
    </div>
  );
};

export default TileGrid;
