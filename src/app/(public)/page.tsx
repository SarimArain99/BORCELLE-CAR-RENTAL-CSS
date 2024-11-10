import React from "react";
import HeroSec from "./components/heroSec/HeroSec";
import Story from "./components/story/Story";
import Search from "./components/search/Search";
import Cars from "./components/cars/Car";
import "./global.css";

function page() {
  return (
    <div className="container">
      <HeroSec />
      <Story />
      <Search />
      <div className="carCont">
        <h1>Our Best Offers</h1>
        <Cars />
      </div>
    </div>
  );
}

export default page;
