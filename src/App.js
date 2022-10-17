import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Loader from './Pages/Loader';


function App() {

  let id;
  let [r, sr] = useState(1);

  useEffect(() => {
    clearTimeout(id)
    id = setTimeout(() => {
      sr(0);
    }, 3000);
  }, []);

  return r ? <Loader></Loader> : (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  )
}

export default App;
