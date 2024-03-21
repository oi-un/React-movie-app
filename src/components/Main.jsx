import MovieCard from "./MovieCard";

export default function Main({ movies }) {
  return (
    <>
      <div className="movie-box container flex">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
}
