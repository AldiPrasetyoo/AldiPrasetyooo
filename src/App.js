import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import './App.css'
import './Components/CSS/custom.css'
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
          <Route exact path="/Gallery" element={<Gallery/>}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
