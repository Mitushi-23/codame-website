import React from "react";
import Navbar from "../../components/Navbar";
import triangle from "../../assets/triangle.svg";
import team from "../../assets/team.png";
import Card from "./Card";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

export default function Team() {
  return (
    <div className="pb-20">
      <Navbar active="team" />
      <img
        src={images["triangle.svg"]}
        alt=""
        className="absolute top-0 right-0"
      />
      <div className="">
        <h1 className="text-darkBlue font-encodeSans text-9xl uppercase mt-20 z-5 text-left ml-32">
          Team
        </h1>
      </div>

      <div className="mt-20 founding_members text-4xl font-medium uppercase text-darkBlue font-encodeSans text-center">
        Founding members
      </div>
      <div className="container grid grid-cols-5 gap-5 ml-auto mr-auto mt-10">
        <Card category="Founding Members" />
      </div>

      <div className="mt-20 founding_members text-4xl font-medium uppercase text-darkBlue font-encodeSans text-center ">
        Competitive Programming Team
      </div>
      <div className="container grid grid-cols-5 gap-5 ml-auto mr-auto mt-10">
        <Card category="CP" />
      </div>

      <div className="mt-20 founding_members text-4xl font-medium uppercase text-darkBlue font-encodeSans text-center">
        Web Development Team
      </div>
      <div className="container grid grid-cols-5 gap-5 ml-auto mr-auto mt-10">
        <Card category="WebDev" />
      </div>
    </div>
  );
}
