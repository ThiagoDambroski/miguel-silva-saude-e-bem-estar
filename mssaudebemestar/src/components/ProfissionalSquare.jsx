import React, { useState, useEffect, useRef } from 'react';

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
        rootMargin: '-150px 300px', 
      }
    );

    sectionObserver.observe(containerRef2.current);

    return () => sectionObserver.disconnect();
  }, []); 

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
          {profi.description.length > 80
            ? `${profi.description.slice(0, 80)}...`
            : profi.description}
        </p>
        <ul>
          {profi.jobs.map((job, jobIndex) =>
            jobIndex < 3 ? <li key={jobIndex}>{job}</li> : null
          )}
        </ul>
        <button>
          Mais sobre{' '}
          {profi.name.slice(
            0,
            profi.name.indexOf(' ') === -1 ? profi.name.length : profi.name.indexOf(' ')
          )}
        </button>
      </div>
    </div>
  );
}

export default ProfissionalSquare;
