import React, { useState,useEffect } from 'react'

function IndividualService({service,isActive,setPage}) {

  //Screen size limit chars

  const setPageAndWindow = () => {
    window.scrollTo(0,0)
    setPage(service)
  }
    
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
    
  let maxLength = 300; // Default for larger screens
  if (screenWidth <= 600) {
        maxLength = 90; // Shorter length for smaller screens
  } else if (screenWidth <= 1024) {
        maxLength = 250; // Adjust for medium-sized screens
  }
  return ( 
    <div className={`individual-services ${isActive ? 'active' : ''}`} onClick={setPageAndWindow}>
        <img src={service.image} alt={service.alt} />
        <div>
            <h2>{service.name}</h2>
            <p>
            {service.description.length > maxLength
                ? `${service.description.slice(0, maxLength)}...`
                : service.description
            }    
            </p>
        </div>
        
    </div>
  )
}

export default IndividualService