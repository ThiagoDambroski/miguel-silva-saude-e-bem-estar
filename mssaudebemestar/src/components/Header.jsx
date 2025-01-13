import React, { useEffect, useState } from 'react'
import "../css/header/header.css"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

function Header() {

    const [hamburugerActive,setHamburgerActive] = useState(false)
    const [scrollP,setScrollP] = useState(0)


    useEffect(() => {
        
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPosition = (scrollTop / docHeight) * 100;
          setScrollP(scrollPosition);
        };
    
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
        
      }, []);



    const toggleHamburger = () => {
        setHamburgerActive(!hamburugerActive)
        
    }


  return (
    <header className={`${scrollP >= 15 ? 'add-bckg' : ''}`}>
        <div>
            <img className='logo' src={logo} alt="Logótipo de Miguel Silva Saúde e Bem-Estar" />
        </div>
        <nav className={`${hamburugerActive ? "ham-active" : ""}`}>
            <ul >
                <li onClick={toggleHamburger}>
                  <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>Inicio</NavLink>
                </li>
                <li onClick={toggleHamburger } >
                  <NavLink to='/services'  onClick={() => window.scrollTo(0, 0)}>Serviços</NavLink>
                </li >
                <li onClick={toggleHamburger } >
                  <NavLink to='/aboutUs'  onClick={() => window.scrollTo(0, 0)}>Sobre Nós</NavLink>
                </li >
                <li>Blog</li>
                
            </ul>
           
        </nav>
        <div onClick={toggleHamburger} className={`hamburger ${hamburugerActive ? "ham-active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
    </header>
  )
}

export default Header