import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [dataSearched, setDataSearched] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputData)
      .then((res) => setDataSearched(res.data.meals));
  }, [inputData]);

  return (
    <div className="app-container">
      <div className="header">
        <h1>React Meal</h1>
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment (en anglais)"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
      </div>

      <div className="meal-container">
        {dataSearched.length > 0
          ? dataSearched
              .slice(
                0,
                dataSearched.length > 12
                  ? dataSearched.length - (dataSearched.length % 12)
                  : dataSearched.length
              )
              .map((meal) => <Card key={meal.idMeal} meal={meal} />)
          : dataSearched.map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default Home;
