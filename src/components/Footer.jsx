import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top flex">
            <Logo />

            <ul className="sns flex">
              <li className="sns-item">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className="sns-item">
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="sns-item">
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom flex">
            <div className="footer-left">
              <ul className="footer-nav flex">
                <li className="nav-item">
                  <a href="">이용약관</a>
                </li>
                <li className="nav-item">
                  <a href="">개인정보 처리방침</a>
                </li>
                <li className="nav-item">
                  <a href="">서비스 이용약관</a>
                </li>
              </ul>

              <ul className="company-info flex">
                <li className="nav-item">회사명: YungTV</li>
                <li className="nav-item">대표: 홍길동</li>
                <li className="nav-item">사업자등록번호: 200-81-0000</li>
              </ul>

              <ul className="company-info flex">
                <li className="nav-item">주소: 서울특별시 강남구 태해란로 144</li>
              </ul>

              <ul className="company-info flex">
                <li className="nav-item">TEl:02-0000-0000</li>
                <li className="nav-item">FAX: 02-0000-0000</li>
                <li className="nav-item">E-MAIL: choiyj@kakao.com</li>
              </ul>

              <p className="slogan">항상 즐거운 시간, YungTV</p>

              <p className="copyright">Copyright 2024 Yunji Choi</p>
            </div>

            <div className="footer-right">
              <div className="customerCenter ">
                <h3 className="title">고객센터</h3>
                <h3 className="title">02-0000-0000</h3>
                <div className="customerCenterTime flex">
                  <ul className="centerTel">
                    <li>평일</li>
                    <li>점심</li>
                    <li>휴무</li>
                  </ul>
                  <ul className="centerTel">
                    <li>오전 9시 - 오후 6시</li>
                    <li>오후 12시 - 오후2시</li>
                    <li>주말/공휴일</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
