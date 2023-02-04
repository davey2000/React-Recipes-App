import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=ef26f568882340729490dd9d9b263b13`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <>
      <div>
        <h2 className="recipe-title">{details.title}</h2>
        <img className="recipe-image" alt="recipe" src={details.image} />
      </div>
      <div className="body">
        <button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div className="instructions-wrapper">
            <h3
              className="summary"
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></h3>
            <h3
              className="recipe-instructions"
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className="list">
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};


export default Recipe;
