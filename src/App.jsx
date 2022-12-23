import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import SidebarMenu from './components/SidebarMenu'

function App() {

  return (
    <div className="App">
    <div class="backdrop"></div>
      <Header />
      <SidebarMenu />
      <Main />
    </div>
  )
}

export default App
