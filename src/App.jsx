import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Process from "./components/Process";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
      <>
 <Navbar/>

 <main>
   <Hero/>
   <Services/>
   <Process/>
   <Projects />
   <Testimonials/>
   <Pricing/>
   <Contact/>
   <About/>
 </main>

 <Footer/>
</>
  )
}

export default App;