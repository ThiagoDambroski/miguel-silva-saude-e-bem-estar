import { useState } from 'react'
import './css/app.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Whatsapp from './components/whatsapp';
import Mainpage from './pages/mainpage';



function App() {
  
  //  
  //<Route path="*" element={<Missing />} />

  return (
    <>
      <Header/>
      <Whatsapp/>
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
          
	    </Routes>
    </>
  )
}

export default App
