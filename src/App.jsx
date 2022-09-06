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

const App = () => {
  useMovies();
  const darkToggle = useSelector((state) => state.theme);

  return (
    <div className={darkToggle.darkTheme ? "dark" : "light"}>
      <TopNav />
      {/* <LoaderSpinner /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
