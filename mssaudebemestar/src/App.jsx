import { useState } from 'react'
import './css/app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Whatsapp from './components/whatsapp';
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
        <Route  path={`${url}/aboutus/0`} element={<AboutUsPage profiIndex={0} />} />
        <Route  path={`${url}/aboutus/1`} element={<AboutUsPage profiIndex={1} />} />
        <Route  path={`${url}/aboutus/2`} element={<AboutUsPage profiIndex={2} />} />
        
	    </Routes>
      <Footer/> 
    </>
  )
}

export default App
