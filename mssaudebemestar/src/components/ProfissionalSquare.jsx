import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
function ProfissionalSquare({ profi, style }) {
  const containerRef2 = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [disactive,setDisactive] = useState(false)

  useEffect(() => {
    if ( disactive||!containerRef2.current) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setDisactive(true)
          
        }
         // Set visibility state
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0, 
        rootMargin: '-100px 300px', 
      }
    );

    sectionObserver.observe(containerRef2.current);

    return () => sectionObserver.disconnect();
  }, []); 

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
      
    let maxLength = 300; // Default for larger screens
    if (screenWidth <= 600) {
          maxLength = 90; // Shorter length for smaller screens
    } else if (screenWidth <= 1024) {
          maxLength = 250; // Adjust for medium-sized screens
    }

  return (
    <div
      className={`profissional-square`}
      style={disactive? { transform: 'translateX(0%)' } : style}
      ref={containerRef2}
    >
      <img src={profi.image} alt={profi.alt} />
      <div className="profissional-square-information">
        <h3>{profi.name}</h3>
        <p>
          {profi.description.length > maxLength
            ? `${profi.description.slice(0, maxLength)}...`
            : profi.description}
        </p>
        <ul>
          {profi.jobs.map((job, jobIndex) =>
            jobIndex < 3 ? <li key={jobIndex}>{job}</li> : null
          )}
        </ul>
        <NavLink to={`/aboutUs/${profi.id -1}`} onClick={(e) => {
       
          e.preventDefault();
          window.scrollTo(0, 0);
          window.location.href = `/#/aboutUs/${profi.id - 1}`;
          }}>
          <button>
            Mais sobre{' '}
            {profi.name.slice(
              0,
              profi.name.indexOf(' ') === -1 ? profi.name.length : profi.name.indexOf(' ')
            )}
          </button>
        </NavLink>
        
      </div>
    </div>
  );
}

export default ProfissionalSquare;
