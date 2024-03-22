import MovieCard from "./MovieCard";
import ShowMore from "./ShowMore";

export default function Main({ movies, showMore, setShowMore, movieNum, setMovieNum }) {
  return (
    <>
      <div className="movie-box container flex">
        {movies.map((movie, i) => {
          return <MovieCard key={movie.id} movie={movie} showMore={showMore} setShowMore={setShowMore} setMovieNum={setMovieNum} i={i} />;
        })}
      </div>

      {showMore == true ? <ShowMore setShowMore={setShowMore} movies={movies} movieNum={movieNum} /> : null}
    </>
  );
}
