import './App.css';
import { Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Order from './pages/Order';
import AddUser from './pages/SignUp';
import { BrowserRouter as Router, Route, Routes,
useLocation } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<AddUser />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
