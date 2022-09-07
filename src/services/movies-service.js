export const movieUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export const imageUrl = (image_path) =>
  `https://image.tmdb.org/t/p/original${image_path}`;

export const movieUrlCategory = (category) =>
  `https://api.themoviedb.org/3/discover/movie?api_key=ad40cc6b3df48398b3ba8f28020bca29&language=en&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${category}`;
