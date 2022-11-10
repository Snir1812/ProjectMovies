import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchMovies = (query) => {
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (!query) {
      setSearchResults(null);
      return;
    }
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&query=${query}`,
    }).then((res) => {
      const result = res.data.results;
      console.log(result);
      setSearchResults({ result });
    });
  }, [query]);

  return [searchResults, setSearchResults];
};
