import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddItems from './Components/AddItems/AddItem';
import Blogs from './Components/Blogs/Blogs';
import Cars from './Components/Cars/Cars';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyItems from './Components/MyItems/MyItems';
import NavBar from './Components/Nav/NavBar/NavBar';
import NavHead from './Components/Nav/NavHead/NavHead';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import RestockItem from './Components/ReStock/RestockItem';
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
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/addItems" element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>} />
        <Route path="/myitems" element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>} />
        <Route path="/stockupdate/:id" element={<StockUpdate></StockUpdate>} />
        <Route path="/update/:id" element={<RestockItem></RestockItem>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
