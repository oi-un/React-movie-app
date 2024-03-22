export default function MovieCard({ movie, showMore, setShowMore, setMovieNum, i }) {
  const imgSrc = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <>
      <div className="card flex">
        <img src={imgSrc} alt="" />
        <div className="card-info">
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-description">{movie.overview}</p>
          <button
            className="btn btn-main card-button"
            onClick={() => {
              setShowMore(true);
              setMovieNum(i);
            }}
          >
            Show Add Info
          </button>
        </div>
      </div>
    </>
  );
}
