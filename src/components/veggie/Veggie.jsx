import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import VeggieCardd from "../card/VeggieCardd";
import "./Veggie.css";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=ef26f568882340729490dd9d9b263b13&tags=vegetarian&number=25"
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data);
      setVeggie(data.recipes);
    }
  };

  return (
    <div>
      <h3 className="veggie-title">Vegan / Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
          breakpoints: {
            1700: { perPage: 3 },
            1250: { perPage: 2 },
            900: { perPage: 2 },
            800: { perPage: 1 },
            640: { perPage: 1 },
          },
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide>
              <Link to={"/recipe/" + recipe.id}>
                <VeggieCardd
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                ></VeggieCardd>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Veggie;
