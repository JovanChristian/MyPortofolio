import './App.css';
import Navbar from './components/navbar/index';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portofolio from './containers/portofolio';
import Contact from './containers/contact';
import { Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './util.js/particle'; // Pastikan path-nya benar

function App() {
  const handleInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className='App'>
      {/* Particles background */}
      <Particles id='particles'options={particles} init={handleInit} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Routing for pages */}
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
