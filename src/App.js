import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'animate.css/animate.min.css';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import show from './Components/Popup';
import About from './Pages/About';
import Serivices from './Pages/Serivices';
import Contact from './Pages/Contact';
import AutomaticPopup from './Components/Popup';

function App() {
  return (
    
    <div className='overflow-hidden bg-slate-5'>
    
        {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <h1 className="text-3xl font-bold text-blue-600">Hello, TailwindCSS!</h1>
        </div> */}
      
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />         
            <Route path="/about" element={<About />} />         
            <Route path="/services" element={<Serivices />} />         
            <Route path="/contact" element={<Contact/>} />         
          </Routes>
          <AutomaticPopup/>
        </Router>
    </div>
  );
}

export default App;
