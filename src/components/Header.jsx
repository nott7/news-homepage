import Logo from "../assets/images/logo.svg";
import Switch from "./Header/Switch";
import MenuBtn  from "../assets/icon-menu.svg"
import CloseBtn from "../assets/icon-menu-close.svg"

export default function Header() {

function toggleSidebar() {
  document.querySelector(".sidebar_menu").classList.toggle("active");
  document.querySelector(".sidebar__btn").classList.toggle("active");
  document.querySelector(".backdrop").classList.toggle("active");

  if (document.querySelector(".sidebar_menu").classList.contains("active")) {
    document.querySelector(".sidebar__btn img").src = CloseBtn;
  } else {
    document.querySelector(".sidebar__btn img").src = MenuBtn;
  }
}




  return (
    <header>
      <div className="header__logo">
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div class="sidebar__btn" onClick={toggleSidebar}>
        <img src={MenuBtn} alt="" />
      </div>

      <div className="header__nav">
        <nav>
          <ul>
            <li>
              {" "}
              <a href="">Home</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">New</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Popular</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Trending</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">Categories</a>{" "}
            </li>
            <li>
              {" "}
              <Switch />{" "}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
