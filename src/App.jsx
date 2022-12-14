import React from "react";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/nav/TopNav";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import "./App.css";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import Comments from "./pages/Comments";

const App = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className={darkToggle.darkTheme ? "dark" : "light"}>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies category="" />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
