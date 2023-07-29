import Navbar from "./components/Navbar"
import About from "./elements/About"
import Contact from "./elements/Contact"
import Portofolio from "./elements/Portofolio"
import Skills from "./elements/Skills"

function App() {

  return (
    <div className="w-full h-full bg-color-four">
      <Navbar/>
      <About/>
      <Skills/>
      <Portofolio/>
      <Contact/>
    </div>
  )
}

export default App
