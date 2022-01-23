import React from "react";
import ChefsCard from "./ChefsCard";

const ChefsSection = () => {
  const chefs = [
    {
      name: "Juan Carlos",
      img: "/images/top_chefs/img_1.jpg",
      recepiesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John doe",
      img: "/images/top_chefs/img_2.jpg",
      recepiesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: "/images/top_chefs/img_3.jpg",
      recepiesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "chris Brown",
      img: "/images/top_chefs/img_4.jpg",
      recepiesCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: "/images/top_chefs/img_5.jpg",
      recepiesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: "/images/top_chefs/img_6.jpg",
      recepiesCount: "04",
      cuisine: "Indian",
    },
  ];
  return (
    <div className="section chefs">
      <h1 className="title">Our top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chef) => (
          <ChefsCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default ChefsSection;
