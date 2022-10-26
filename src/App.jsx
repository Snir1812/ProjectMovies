import React from "react";
import { Route, Routes } from "react-router-dom";
// import LoaderSpinner from "./components/LoaderSpinner";
import TopNav from "./components/nav/TopNav";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import "./App.css";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/LoginPage";
import Comments from "./pages/Comments";
// import SecondNav from "./components/secondNav/SecondNav";
// import CategoryMovies from "./pages/CategoryMovies";

const App = () => {
  const darkToggle = useSelector((state) => state.theme);
  // const searchedQuary = useSelector((state) => state.searched.quary);

  return (
    <div className={darkToggle.darkTheme ? "dark" : "light"}>
      <TopNav />
      {/* <SecondNav /> */}
      {/* <LoaderSpinner /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies category="" />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/history" element={<Movies category="36" />} />
        <Route path="/drama" element={<Movies category="18" />} />
        <Route path="/comedy" element={<Movies category="35" />} />
        <Route path="/romance" element={<Movies category="10749" />} />
        <Route path="/action" element={<Movies category="28" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
