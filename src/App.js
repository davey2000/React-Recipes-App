import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/searchresults/:search" element={<SearchResults />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
