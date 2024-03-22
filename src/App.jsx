import { useEffect } from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./reset.css";
import ShowMore from "./components/ShowMore";

function App() {
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("now_playing");

  const [showMore, setShowMore] = useState(false);
  const [movieNum, setMovieNum] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjZmNWJkNjdiZTA3MWRjNWUxZjk3YjEzMzJmMWE5NSIsInN1YiI6IjY1ZjQ0YmE3MWZhMWM4MDE5NjVjNzYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6UUUieiP8xOMkAjlfV-7eKzfrpGVxiwqyUH16KeyJ24",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${keyword}?language=ko&page=1`, options)
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((err) => console.error(err));
  }, [keyword]);
  return (
    <>
      <Header setKeyword={setKeyword}></Header>
      <Main movies={movies} showMore={showMore} setShowMore={setShowMore} movieNum={movieNum} setMovieNum={setMovieNum}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
