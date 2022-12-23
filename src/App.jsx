import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SidebarMenu from './components/SidebarMenu'
import MenuBtn  from "./assets/icon-menu.svg"
import CloseBtn from "./assets/icon-menu-close.svg"

function App() {
  function backdrop () {
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
    <div className="App">
    <div class="backdrop" onClick={backdrop}></div>
      <Header />
      <SidebarMenu />
      <Main />
    </div>
  )
}

export default App
