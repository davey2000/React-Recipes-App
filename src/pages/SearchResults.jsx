import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PopularCardd from "../components/card/PopularCardd";
import '../components/popular/Popular.css';

const SearchResults = () => {
    
    const [searchRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ef26f568882340729490dd9d9b263b13&number=35&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);  
    
  return (
    <div>
    <h3 className="popular-title">Recipe Results for " {params.search} "</h3>
    <Splide
    options={{
        perPage: 4,
        arrows: true,
        pagination: false,
        drag: "free",
        gap: "5rem",
        breakpoints: {
          1700: {perPage: 3},
          1250: {perPage: 2},
          900: {perPage: 2},
          800 : { perPage: 1 },
          640 : {perPage: 1},
        },
      }}>
      {searchRecipes.map((item) => {
        return(
            <SplideSlide>
            <Link to={"/recipe/" + item.id}>
        <PopularCardd key={item.id} id={item.id} title={item.title} image={item.image}>
          
            
          
        </PopularCardd>
        </Link>
        </SplideSlide>
        );
      })}
    </Splide>
    </div>
  )}

export default SearchResults