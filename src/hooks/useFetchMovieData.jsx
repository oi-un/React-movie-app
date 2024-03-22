import { useState, useEffect } from "react";

export default function useFetchMovieData(movieType) {
  const [movies, setMovies] = useState([]);

  const FetchMovieData = (keyword) => {
    let url = ``;

    if (["now_playing", "popular", "top_rated"].includes(keyword)) {
      url = `https://api.themoviedb.org/3/movie/${keyword}?language=ko&page=1`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=ko&page=1`;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjZmNWJkNjdiZTA3MWRjNWUxZjk3YjEzMzJmMWE5NSIsInN1YiI6IjY1ZjQ0YmE3MWZhMWM4MDE5NjVjNzYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6UUUieiP8xOMkAjlfV-7eKzfrpGVxiwqyUH16KeyJ24",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    FetchMovieData(movieType);
  }, [movieType]);

  return movies;
}
