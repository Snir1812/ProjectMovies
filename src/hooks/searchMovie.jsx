import { useEffect, useState } from "react";
import axios from "axios";

export const useSearchMovies = (query) => {
  //   const searchedQuary = useSelector((state) => state.searched.quary);
  // const [movies1, setMovies1] = useState(null);
  //   useEffect(() => {
  //     axios({
  //       method: "get",
  //       url: `https://api.themoviedb.org/3/search/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&query=${searchedQuary}`,
  //     }).then((res) => {
  //       const result = res.data.results;
  //       console.log(result);
  //       setMovies1(result);
  //     });
  //   }, [setMovies1]);
  //   return [movies1];
  // };

  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (!query) return;
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/search/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&query=${query}`,
    }).then((res) => {
      const result = res.data.results;
      console.log(result);
      setSearchResults({ result });
    });
  }, [query]);

  return [searchResults];
};

// export const useSearchMovies = ({ searchedQuary }) => {
//     //   const searchedQuary = useSelector((state) => state.searched.quary);
//     const [movies1, setMovies1] = useState(null);
//     useEffect(() => {
//       fetch(
//         `       https://api.themoviedb.org/3/search/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&query=${searchedQuary}
//   `
//       )
//         .then((response) => response.json())

//         .then((data) => {
//           setMovies1(data.results);
//         });
//     }, []);
//     return [movies1];
//   };
