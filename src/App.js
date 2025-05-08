import './App.css';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portofolio from './containers/portofolio';
import Contact from './containers/contact';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      {/* particles js */}

      {/* navbar */}

      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/resume' element={<Resume />} />
        <Route index path='/skills' element={<Skills />} />
        <Route index path='/portofolio' element={<Portofolio />} />
        <Route index path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
