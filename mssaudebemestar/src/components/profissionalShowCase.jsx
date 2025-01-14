import React, { useState, useEffect, useRef } from 'react';

function profissionalShowCase({profi,setProfiPage,isActive}) {

  const windowTopAndChange = () => {
    window.scrollTo(0, 0);
    setProfiPage(profi)
  }
 
    //description

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
          
    useEffect(() => {
          const handleResize = () => {
            setScreenWidth(window.innerWidth);
          };
          
          window.addEventListener('resize', handleResize);
          
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);
      
    let maxLength = 400; // Default for larger screens
    if (screenWidth <= 600) {
          maxLength = 190; // Shorter length for smaller screens
    } else if (screenWidth < 1024) {
          maxLength = 300; // Adjust for medium-sized screens
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
                  {profi.description.length > maxLength
              ? `${profi.description.slice(0, maxLength)}...`
              : profi.description}
              </p>
              <button onClick={windowTopAndChange}>Saiba Mais</button>
          </div>
        </div>

      
    </>
    
  )
}

export default profissionalShowCase