
import './App.css';
import NavBar from './Components/NavBar';
import { ImageSlider } from './Components/ImageSlide';
import { Services } from './Components/Services';
import Project from './Components/Projects';
import { About } from './Components/AboutUs';
import Footer from './Components/Footer';
import { Testimonials } from './Components/Testiimonials';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Architectural from './Pages/Services/Architech';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
    <NavBar/>
    <div className='mt-20'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Architectural/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
 