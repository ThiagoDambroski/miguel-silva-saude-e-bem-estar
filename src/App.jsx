import { useState } from 'react'
import './css/app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Whatsapp from './components/Whatsapp';
import Mainpage from './pages/mainPage/mainpage';
import ServicePage from './pages/servicePage/servicePage';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage';
import Footer from './components/Footer';
import Blog from './pages/BlogPage/blog';


function App() {
  const url = "/miguel-silva-saude-e-bem-estar/#"
  //  <Route  path="/blog" element={< Blog/>} />
  //<Route path="*" element={<Missing />} />

  return (
    <>
      <Header/>
      <Whatsapp/>
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route  path="/services" element={<ServicePage />} />
        <Route  path="/aboutUs" element={<AboutUsPage profiIndex={null} />} />
        <Route path="/aboutus/:id" element={<AboutUsPage />} />
        
	    </Routes>
      <Footer/> 
    </>
  )
}

export default App
