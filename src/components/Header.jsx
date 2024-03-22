import Logo from "./Logo";

export default function Header({ keyword, setKeyword }) {
  const searchMovie = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };
  return (
    <>
      <div className="header-bg">
        <header className="container flex">
          <div className="header-logo">
            <Logo />
          </div>

          <ul className="top-nav flex">
            <li
              className="nav-item active-item"
              onClick={() => {
                setKeyword("now_playing");
              }}
            >
              <a href="#">오늘의 상영작</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                setKeyword("popular");
              }}
            >
              <a href="#">인기 상영작</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                setKeyword("top_rated");
              }}
            >
              <a href="#">평점순</a>
            </li>
          </ul>

          <div className="search">
            <input type="text" placeholder="검색어 입력" onChange={searchMovie} />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </header>
      </div>
    </>
  );
}
