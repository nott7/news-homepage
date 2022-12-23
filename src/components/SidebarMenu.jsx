import Switch from "./Header/Switch";

export default function SidebarMenu() {
  return (
    <div className="sidebar_menu">
      <div className="sidebar__list">
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
      </div>
    </div>
  );
}
