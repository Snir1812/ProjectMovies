import { useState, useEffect } from "react";
import { movieUrlCategory } from "../services/movies-service";

export const useCategory = (category) => {
  const [categoryMovie, setCategoryMovie] = useState();
  useEffect(() => {
    fetch(movieUrlCategory(category))
      .then((response) => response.json())
      .then((data) => {
        setCategoryMovie(data.results);
      });
  }, []);
  return [categoryMovie];
};
