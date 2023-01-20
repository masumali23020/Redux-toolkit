import React from 'react';
import { BrowserRouter as Ruter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import NavBar from "./component/navbaer/NavBar";
import Home from './pages/Home';
import Video from './pages/Video';
function App() {
  return (
    <Ruter >
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
      </Routes>

      <Footer />
  
    </Ruter>
  );
}

export default App;
