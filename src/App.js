import './App.css';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portofolio from './containers/portofolio';
import Contact from './containers/contact';
import Navbar from './components/navBar/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      {/* particles js */}

      {/* navbar */}
      <Navbar/>

      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portofolio' element={<Portofolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
