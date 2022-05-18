import React from "react";

const Card = ({ meal }) => {
  const description = meal.strInstructions;
  return (
    <div className="card">
      <h3>
        {meal.strMeal.length > 20
          ? meal.strMeal.substring(0, 19)
          : meal.strMeal}
      </h3>
      <h4>Origin : {meal.strArea}</h4>
      <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      <p>
        {description.length > 400
          ? description.substring(0, 400) + " ..."
          : description}
      </p>
    </div>
  );
};

export default Card;
