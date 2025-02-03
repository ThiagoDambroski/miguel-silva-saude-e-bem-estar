import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import "../../css/mainPage/aboutUsSection.css"
function aboutUsSection() {

  const [active,isActive] = useState(false)
  const [buttonActive,isButtonActive] = useState(false)
  const containerRef = useRef(null);
 
  
  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
          
            isActive(true)
            isButtonActive(true)
            
          }
        },
        {
          
          threshold: 0.6,
          rootMargin:"0px"
        }
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);


    
  return (
    <section className='about-us-section'>
        <h2>Sobre Nós</h2>
        <p className={`${active ? 'active' : ''}`} ref={containerRef}>{`
        Na nossa clínica, mais do que tratamentos, valorizamos pessoas. Primamos pela empatia, assegurando que cada cliente se sente compreendido e confiante com a nossa ajuda. 
        Seja para o alívio de qualquer dor e/ou lesão ou para uma manutenção, personalizamos todos os nossos serviços com uma abordagem Holística e o foco na saúde e o bem-estar físico e mental.
        Orgulhamo-nos da capacidade de mudar e impactar vidas de maneira saudável.`}
        </p>
        <NavLink to={`/aboutUs`} onClick={() => window.scrollTo(0, 0)}>
          <button  className={`${buttonActive ? 'active' : ''}`}>
              Saiba mais
          </button>
        </NavLink>
    </section>
    
  )
}

export default aboutUsSection