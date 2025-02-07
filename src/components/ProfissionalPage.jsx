import React, { useState, useEffect, useRef } from 'react';
import ScheduleButton from './scheduleButton'
import closeButton from '../assets/icons/close.png'
import arrow from "../assets/icons/left-arrow.png"
import services from "../db/services"
import ServiceSquare from './serviceSquare';
function ProfissionalPage({profi}) {
    const [ligthBox,setLigthBox] = useState(false)

    const [certificate,setCertificate] = useState(null)

    const toggleLigthBox = (certi) => {
        document.body.classList.toggle("light-box-block")
        setLigthBox(!ligthBox)
        setCertificate(certi)
    }

    const [actualImage,setActualImage] = useState(0)

    const lessImage = () => {
        if(actualImage - 1 > 0){
            setActualImage(0)
        }
        else{
            setActualImage(actualImage - 1)
        }
    }

    const moreImage = () => {
        if(actualImage + 1 > certificate.image.length -1){
            setActualImage(certificate.image.length)
        }
        else{
            setActualImage(actualImage + 1)
        }
    }

    const [fullSize,setFullSize] = useState(null)

    //obeserver

    //container
    const [containerVisible, setContainerVisible] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if(entry.isIntersecting){
                    setContainerVisible(true);
                }
                
              },
              {
                
                threshold: 0.3,
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

    //speciality

    const [specialityVisible, setSpecialityVisible] = useState(false)
    const specialityRef = useRef(null)

    useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if(entry.isIntersecting){
                    setSpecialityVisible(true);
                }
                
              },
              {
                
                threshold: 0.3,
                rootMargin:"0px"
              }
            );
        
            if (specialityRef.current) {
              observer.observe(specialityRef.current);
            }
        
            return () => {
              if (specialityRef.current) {
                observer.unobserve(specialityRef.current);
              }
            };
    }, []);


    //services
    const servicesForProfissional = services.filter((service) => {
      if (service.subService) {
          // Filter subServices
          const filteredSubServices = service.subService.filter((sub) =>
              sub.professionals.includes(profi.id)
          );
          
          // Include service only if it has relevant subServices
          return filteredSubServices.length > 0;
      }
      
      // If no subServices, check professionals directly
      return service.professionals.includes(profi.id);
  }).map((service) => {
      if (service.subService) {
          // Create a new object with filtered subServices
          return {
              ...service,
              subService: service.subService.filter((sub) =>
                  sub.professionals.includes(profi.id)
              ),
          };
      }
      return service;
  });
  return (
    <section className='about-us-page-profissional-page'>
              <div className={`about-us-page-profissional-div about-us-page-profissional-page-container ${containerVisible ? 'visible' : ''}`} ref={containerRef}>
                <img className='about-us-page-profissional-page-img' src={profi.image} alt={profi.alt} />
                <p>{profi.description}</p>
                <ScheduleButton isVisible={true}/> 
              </div>
              
              <div className='about-us-page-profissional-div' ref={specialityRef}>
                <h2>Especialidades:</h2>
                <ul className={`${specialityVisible ? 'visible' : ''}`}>
                    {profi.jobs.map((job,index) => (
                        <li key={index}>{job}</li>
                    ))}
                </ul>
              </div>
              

              {servicesForProfissional !== null ?
              <>
                <h2>Serviços</h2>
                 
                <div className='service-section-container' >
                  {servicesForProfissional.map((service, index) => (
                    <ServiceSquare
                      key={service.id}
                      service={service}
                      isVisible={true}
                    />
                  ))}
                </div>
              </>
              :
              <>
              </>}
            
              
    </section>
  )
}

export default ProfissionalPage