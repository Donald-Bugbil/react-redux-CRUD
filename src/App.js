import React from 'react';
import './App.css';
import Footer from './Components/Footer-component';
import Navbar from './Components/Navbar-component';
import Thumbnail from './Components/Thumbnail-component';
import Content from './Components/Content';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Navbar />
      <Thumbnail />

    </div>
  );
}

export default App;
