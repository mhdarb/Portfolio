import { useState } from "react";
import "./app.scss";
import AboutMe from "./components/aboutMe/AboutMe";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Portfolio from "./components/portfolio/Portfolio";
import Profession from "./components/profession/Profession";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Profession/>
          <Contact/>
          <AboutMe/>
      </div>
    </div>
  );
}

export default App;
