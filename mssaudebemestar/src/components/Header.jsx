import React, { useEffect, useRef, useState } from 'react'
import "../css/header/header.css"
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

function Header() {

    const [hamburugerActive,setHamburgerActive] = useState(false)
    const [scrollP,setScrollP] = useState(0)
    const checkbox = useRef(null)

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
        checkbox.current.checked = !checkbox.current.checked;  
    }

    const toggleHamburger2 = () => {
      setHamburgerActive(!hamburugerActive)
       
  }

  return (
    <header className={`${scrollP >= 15 ? 'add-bckg' : ''}`}>
        <div>
          <NavLink to='/' onClick={() => window.scrollTo(0, 0)}><img className='logo' src={logo} alt="Logótipo de Miguel Silva Saúde e Bem-Estar" /></NavLink>
            
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


                
                
            </ul>
           
        </nav>
        <div className='none'>
          <input type="checkbox" id="checkbox2" class="checkbox2 visuallyHidden" ref={checkbox} />
            <label for="checkbox2" >
                <div class="hamburger hamburger2" onClick={toggleHamburger2}>
                    <span class="bar bar1"></span>
                    <span class="bar bar2"></span>
                    <span class="bar bar3"></span>
                    <span class="bar bar4"></span>
                </div>
            </label>
        </div>
        
        
    </header>
  )
}

export default Header