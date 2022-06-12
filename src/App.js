import { Routes  , Route, Router } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Homepage from './Pages/Homepage/hompage';
import About from './Pages/about/about';
import Track from './Pages/track/track';
import Blog from  './Pages/blog/blog'
import Carrier from './Pages/carriers/carriers';
import Shippers from './Pages/shippers/shippers';
import Services from './components/services';
function App() {
  return (
    <div className="App">
      {/* <Router> */}

     <Navbar/>
      <Routes>
        {/* <Route path='/shippers' element={}/> */}
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/carrier' element={<Carrier/>}/>
        <Route path='/shippers' element={<Shippers/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/track' element={<Track/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
     <Footer/>
      {/* </Router> */}
    </div>
  );
}

export default App;
