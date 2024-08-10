
import './App.css';
import NavBar from './Components/NavBar';
import { ImageSlider } from './Components/ImageSlide';
import { Services } from './Components/Services';
import Project from './Components/Projects';
import { About } from './Components/AboutUs';
import Footer from './Components/Footer';
import { Testimonials } from './Components/Testiimonials';


function App() {
  return (
    <div>
    <NavBar/>
    <ImageSlider/>
    <Services/>
    <Project/>
    <About/>
    <Testimonials/>
    <Footer/>
    </div>
  );
}

export default App;
