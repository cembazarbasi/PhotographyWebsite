import React from 'react'; 
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar } from './Navbar';
import { About } from './pages/About';
import { BlackAndWhite } from './pages/BlackAndWhite';
import { Details } from './pages/Details';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  return (
    <div className="App">  
    <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID}}>   
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/black&white' element={<BlackAndWhite />} />                   
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </Router>   
      </PayPalScriptProvider>    
    </div>
  );
}

export default App;
