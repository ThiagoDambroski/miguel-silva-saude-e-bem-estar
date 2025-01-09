import React, { useState, useEffect, useRef } from 'react';
import "../../css/mainPage/professionalSection.css";
import profissionals from '../../db/profissionals';
import ProfissionalSquare from '../../components/ProfissionalSquare';
import ScheduleButton from '../../components/scheduleButton';

function ProfissionalsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const scheduleButtonRef = useRef(null);
  const [disactive,setDisactive] = useState(false)
  useEffect(() => {
    if(disactive || !scheduleButtonRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          
          setDisactive(true)
          
        }
        
      },
      {
        root: null, // Use the viewport as the container
        threshold: 0.1, // At least 10% of the button must be visible
      }
    );

    if (scheduleButtonRef.current) {
      observer.observe(scheduleButtonRef.current);
    }

    return () => {
      if (scheduleButtonRef.current) {
        observer.unobserve(scheduleButtonRef.current);
      }
    };
  }, []);

  return (
    <section className="profissional-section">
      <h2>Nossa Equipa</h2>
      <div className="profissional-section-container">
        {profissionals.map((profi, index) => (
          <ProfissionalSquare
            key={profi.id}
            profi={profi}
            style={{
              transform:
                index % 2 === 0
                  ? 'translateX(100%)' // Initially off-screen to the right when even
                  : 'translateX(-100%)', // Initially off-screen to the left when odd
            }}
          />
        ))}
      </div>
      <div className='profissional-section-button-container' ref={scheduleButtonRef}>
        <ScheduleButton isVisible={disactive} />
      </div>
    </section>
  );
}

export default ProfissionalsSection;
