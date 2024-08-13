
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
import OurServices from './Pages/Services/Services';
import ProManagement from './Pages/Services/ProManagement';
import Construction from './Pages/Services/Construction';
import Residential from './Pages/Services/Residential';
import Commercial from './Pages/Services/Commercial';
import Renovation from './Pages/Services/Renovation';
import { AboutUs } from './Pages/AboutUs';
import OurProject from './Pages/Projects/ProjectsNav';
import High from './Pages/Projects/RiseBuilding';
import Blog from './Pages/Blogs';
import LuxuryBuilding from './Pages/Projects/LuxuryBuilding';
import CommercialBuilding from './Pages/Projects/CommercialBuilding';


function App() {
  return (
    <div>
    <NavBar/>
    <div className='mt-20'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<OurServices/>}>
        <Route path='architecture' element={<Architectural/>}/>
        <Route path='pro_management' element={<ProManagement/>}/>
        <Route path='construction' element={<Construction/>}/>
        <Route path='residential' element={<Residential/>}/>
        <Route path='commercial' element={<Commercial/>}/>
        <Route path='renovation' element={<Renovation/>}/>
        </Route>
        <Route path='/projects' element={<OurProject/>}>     
          <Route path='high_rise' element={<High/>}/>
          <Route path='luxury' element={<LuxuryBuilding/>}/>
          <Route path='commercial' element={<CommercialBuilding/>}/>

          
        </Route>
        
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
 