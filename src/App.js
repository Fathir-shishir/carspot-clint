import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddItems from './Components/AddItems/AddItem';
import Cars from './Components/Cars/Cars';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/Nav/NavBar/NavBar';
import NavHead from './Components/Nav/NavHead/NavHead';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import StockUpdate from './StockUpdate/StockUpdate';


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
        <Route path="*" element={<NotFound></NotFound>} />
        <Route path="addItems" element={<AddItems></AddItems>} />
        <Route path="stockUpdate" element={<StockUpdate></StockUpdate>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
