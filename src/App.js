import { useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Loader from './Pages/Loader';
import Project from './Pages/Project';
import Skills from './Pages/Skills';


function App() {

  let id;
  let [r, sr] = useState(1);

  useEffect(() => {
    clearTimeout(id)
    id = setTimeout(() => {
      sr(0);
    }, 1000);
  }, []);

  return r ? <Loader></Loader> : (
    <div className="App">

      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      {/* <AllRoutes></AllRoutes> */}
    </div>
  )
}

export default App;
