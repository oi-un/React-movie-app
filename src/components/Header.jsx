import Logo from "./Logo";

export default function Header({ searchMovie }) {
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
                searchMovie("now_playing");
              }}
            >
              <a href="#">오늘의 상영작</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                searchMovie("popular");
              }}
            >
              <a href="#">인기 상영작</a>
            </li>
            <li
              className="nav-item"
              onClick={() => {
                searchMovie("top_rated");
              }}
            >
              <a href="#">평점순</a>
            </li>
          </ul>

          <div className="search">
            <input
              type="text"
              placeholder="검색어 입력"
              onChange={(e) => {
                searchMovie(e.target.value);
              }}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>

          <input type="checkbox" id="toggle-btn" />
          <label htmlFor="toggle-btn" className="toggle-btn">
            <i className="fa-solid fa-bars toggle-btn"></i>
          </label>
          <div className="toggle-menu">
            <ul className="toggle-nav">
              <li
                className="nav-item active-item"
                onClick={() => {
                  searchMovie("now_playing");
                }}
              >
                <a href="#">오늘의 상영작</a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  searchMovie("popular");
                }}
              >
                <a href="#">인기 상영작</a>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  searchMovie("top_rated");
                }}
              >
                <a href="#">평점순</a>
              </li>
              <li>
                <a href="#">검색</a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}
