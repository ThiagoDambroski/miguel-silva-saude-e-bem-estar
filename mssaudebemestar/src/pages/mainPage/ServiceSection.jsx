import React, { useState, useEffect, useRef } from 'react';
import services from '../../db/services';
import ServiceSquare from '../../components/serviceSquare';
import ScheduleButton from '../../components/scheduleButton';
import '../../css/mainPage/serviceSection.css';

function ServiceSection() {
  const [visibleSquares, setVisibleSquares] = useState([]);
  const [showScheduleButton, setShowScheduleButton] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'), 10);
            setVisibleSquares((prev) => [...new Set([...prev, index])]); // Avoid duplicates
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
        rootMargin: '0px 0px -100px 0px', // Expand the observation area slightly
      }
    );

    const elements = containerRef.current.querySelectorAll('.service-square');
    elements.forEach((el, index) => {
      el.setAttribute('data-index', index);
      observer.observe(el);
    });
  
    return () => observer.disconnect();
  }, []);

  //button
  useEffect(() => {
    if (visibleSquares.length === services.length) {
      setShowScheduleButton(true); // Show the button when all squares are visible
    }
  }, [visibleSquares]);

  return (
    <section className="service-section" >
      <h2>Os nossos serviços</h2>
      <div className='service-section-container' ref={containerRef}>
        {services.map((service, index) => (
          <ServiceSquare
            key={service.id}
            service={service}
            isVisible={visibleSquares.includes(index)}
          />
        ))}
      </div>

      <ScheduleButton isVisible={showScheduleButton}/>
      
      
    </section>
  );
}

export default ServiceSection;
