export default function ShowMore({ movies, showMore, setShowMore, movieNum }) {
  const imgSrc = `https://image.tmdb.org/t/p/w500/${movies[movieNum].poster_path}`;
  return (
    <>
      <div
        className="black-bg"
        onClick={() => {
          setShowMore(false);
        }}
      ></div>
      <div className="show-bg container">
        <span
          className="close-btn"
          onClick={() => {
            setShowMore(false);
          }}
        >
          <i class="fa-solid fa-xmark"></i>
        </span>
        <div className="both-box"></div>
        <div className="show-main flex">
          <div className="movie-img">
            <img src={imgSrc} alt="" />
          </div>
          <div className="movie-info">
            <h3 className="movie-title">{movies[movieNum].title}</h3>
            <h3 className="movie-info-title">개봉일</h3>
            <p>{movies[movieNum].release_date}</p>
            <h3 className="movie-info-title">개요</h3>
            <p className="movie-description">{movies[movieNum].overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
