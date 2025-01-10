import React, { useState, useEffect, useRef } from 'react';

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
        <p className={`${active ? 'active' : ''}`} ref={containerRef}>Na nossa clínica, valorizamos mais do que tratamentos – valorizamos pessoas. Primamos pela Empatia, assegurando que cada cliente se sente compreendido e acolhido. Oferecemos Qualidade em todos os nossos serviços, desde massagens relaxantes a tratamentos especializados em osteopatia, com foco na sua Saúde e bem-estar.
        </p>
        <button  className={`${buttonActive ? 'active' : ''}`}>
            Saiba mais
        </button>
    </section>
    
  )
}

export default aboutUsSection