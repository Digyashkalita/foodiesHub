import React from "react";
import PreviousSearches from "../components/PreviousSearches";
import Recipecard from "../components/Recipecard";

const Recipes = () => {
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      image: "/images/gallery/img_1.jpg",
      authorImg: "/images/top_chefs/img_1.jpg",
    },
    {
      title: "Spaghetti and Meatballs",
      image: "/images/gallery/img_4.jpg",
      authorImg: "/images/top_chefs/img_2.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/images/gallery/img_5.jpg",
      authorImg: "/images/top_chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/images/gallery/img_6.jpg",
      authorImg: "/images/top_chefs/img_5.jpg",
    },
    {
      title: "Japanese Sushi",
      image: "/images/gallery/img_10.jpg",
      authorImg: "/images/top_chefs/img_6.jpg",
    },
    {
      title: "American Cheese Burger",
      image: "/images/gallery/img_5.jpg",
      authorImg: "/images/top_chefs/img_3.jpg",
    },
    {
      title: "Mutton Biriyani",
      image: "/images/gallery/img_6.jpg",
      authorImg: "/images/top_chefs/img_5.jpg",
    },
  ];
  return (
    <div>
      <PreviousSearches />
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <Recipecard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
