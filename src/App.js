import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Hero from "./Components/Hero.jsx";
import Parallax from "./Components/Parallax.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Contact from "./Components/Contact.jsx";
import Cursor from "./Components/Cursor.jsx";
function App() {

  return (
    <>
    <div className="snap-mandatory snap-y">
      <Sidebar />
      <section id="HomePage" className="h-screen snap-center p-8  ">
        <Navbar />
        <Hero />
      </section>
      <section id="skills" className="h-screen snap-center p-8 overflow-y-auto   ">
        <Parallax type="skills" />
      </section>
      
      <section id="PortFolio" className=" snap-center p-8 ">
        <Portfolio/>
      </section>
      <section id="Contact" className=" snap-center h-screen    ">
        <Contact/>
      </section>
     
    </div></>
  );
}

export default App;
