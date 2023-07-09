import About from './About'
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Skills from './Skills'
import Projects from './Project/Projects'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <div className=" bg-[#1A1B29] text-white ">
      <Navbar></Navbar>
      <div className=" w-[98%] mx-auto ">
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
