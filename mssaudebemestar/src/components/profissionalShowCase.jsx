import React, { useState, useEffect, useRef } from 'react';

function profissionalShowCase({profi,setProfiPage,isActive}) {

  const windowTopAndChange = () => {
    window.scrollTo(0, 0);
    setProfiPage(profi)
  }
 
    

  return (
    <>

        <div className={`profi-showcase ${isActive ? 'visible' : ''}`}  >
          <div className='profi-showcase-image'>
              <img src={profi.image} alt={profi.alt} />
          </div>
          
          <div  className='profi-showcase-content'>
              <h3>{profi.name}</h3>
              <p>
                  {profi.description.length > 100
              ? `${profi.description.slice(0, 100)}...`
              : profi.description}
              </p>
              <button onClick={windowTopAndChange}>Saiba Mais</button>
          </div>
        </div>

      
    </>
    
  )
}

export default profissionalShowCase