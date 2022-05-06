import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Cars from './Components/Cars/Cars';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/Nav/NavBar/NavBar';
import NavHead from './Components/Nav/NavHead/NavHead';
import Register from './Components/Register/Register';


function App() {
  return (
    <div>
    <NavHead></NavHead>
    <NavBar></NavBar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<Cars></Cars>} />
        <Route path="about" element={<About />} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
