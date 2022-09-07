import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoaderSpinner from "./components/LoaderSpinner";
import TopNav from "./components/nav/TopNav";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import useMovies from "./hooks/useMovies";
import Home from "./pages/Home";
import "./App.css";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import CategoryMovies from "./pages/CategoryMovies";

const App = () => {
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className={darkToggle.darkTheme ? "dark" : "light"}>
      <TopNav />
      {/* <LoaderSpinner /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies category="" />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/history" element={<CategoryMovies category="36" />} />
        <Route path="/drama" element={<CategoryMovies category="18" />} />
        <Route path="/comedy" element={<CategoryMovies category="35" />} />
        <Route path="/romance" element={<CategoryMovies category="10749" />} />
        <Route path="/action" element={<CategoryMovies category="28" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
