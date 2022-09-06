import { useState, useEffect } from "react";
// import { movieUrlCategory } from "../services/movies-service";

export const useCategory = (category) => {
  const [categoryMovie, setCategoryMovie] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&[19:31]%20alex%20kiochukov%20&with_genres=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCategoryMovie(data.results);
      });
  }, []);
  return [categoryMovie];
};
