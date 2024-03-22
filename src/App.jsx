import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import useFetchMovieData from "./hooks/useFetchMovieData";
import "./reset.css";

function App() {
  const [movieType, setMovieType] = useState("now_playing");
  const movies = useFetchMovieData(movieType);

  const searchMovie = (id) => {
    setMovieType(id);
  };

  //ShowMore 모달상태, 영화 인덱스값
  const [showMore, setShowMore] = useState(false);
  const [movieNum, setMovieNum] = useState();

  return (
    <>
      <Header searchMovie={searchMovie}></Header>
      <Main movies={movies} showMore={showMore} setShowMore={setShowMore} movieNum={movieNum} setMovieNum={setMovieNum}></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
