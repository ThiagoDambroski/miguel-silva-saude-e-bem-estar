import React, { useState, useEffect, useRef } from 'react';
import services from "../../db/services"
import profissionals from '../../db/profissionals';
import IndividualService from './IndividualService'
import ScheduleButton from '../../components/scheduleButton'
import arrow from "../../assets/icons/left-arrow.png"

function allServices() {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);
    const [checkAgain,setCheckAgain] = useState(false)
    const containerRef = useRef(null)

    //Change page
    const [page,setPage] = useState(null)

    const setPageToNull = () => {
      setPage(null)
      setCheckAgain(true)
    }

    const servicesNumber = services.map((service) => {
        if (service.subService === null) {
            return 1; 
        } else {
            return service.subService.length; 
        }
    });
    
    const serviceLength = servicesNumber.reduce((prev, number) => {
        return prev + number;
    }, 0);

    const transitionDelay = 200;

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true);
                
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
    
    useEffect(() => {
        if (!isVisible) return;
    
        if (currentIndex < serviceLength) {
          const timeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, transitionDelay);
    
          return () => clearTimeout(timeout); 
        }
    }, [currentIndex, isVisible]);
    
    //Button
    const [isButtonVisible,setIsButtonVisible] = useState(false)

    const buttonRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if(entry.isIntersecting && currentIndex === serviceLength){
                setIsButtonVisible(true);
            }
            
          },
          {
            
            threshold: 0.6,
            rootMargin:"0px"
          }
        );
    
        if (buttonRef.current) {
          observer.observe(buttonRef.current);
        }
    
        return () => {
          if (buttonRef.current) {
            observer.unobserve(buttonRef.current);
          }
        };
      }, [currentIndex,checkAgain]);


    

  return (
    <section className='all-service-section'>
        {page === null ?
            <>
                <h1>Nossos Serviços</h1>
                <div ref={containerRef} className='all-service-div'>
                    {services.map((service,index) => (
                        <>
                            {service.subService === null ?
                                <>
                                    <IndividualService
                                    key={index}
                                    service={service}
                                    isActive={index <= currentIndex}
                                    setPage = {setPage}
                                    />
                                </>
                                :
                                <>
                                    {service.subService.map((sub,index2) => (
                                        <>
                                            <IndividualService
                                            key={index}
                                            service={sub}
                                            isActive={index + index2 <= currentIndex}
                                            setPage = {setPage}
                                            />
                                        </>
                                    ))}
                                </>

                            }
                        </>
                    ))}
                </div>
                <div ref={buttonRef} > 
                  <ScheduleButton  isVisible={isButtonVisible}/>
                </div>
            </>
            :
            <>
                <div className='service-full-page'>
                   <div className='container-arrow'>
                                <img className='arrow-button' src={arrow} alt="Botão de voltar" onClick={setPageToNull} />
                     <h1>{page.name}</h1>    
                  </div>
                  <img className='principal-img' src={page.image} alt={page.alt}/>
                  <p>{page.description}</p>
                  <p>Profissionais:<br></br>
                    {profissionals.map((profi, index) => (
                          page.professionals.includes(profi.id) ? (
                          index === page.professionals.length - 1 ? (
                          <span key={profi.id}>{profi.name}</span> // Last professional, no comma
                          ) : (
                          <span key={profi.id}>{profi.name},</span> // Add comma for others
                          )
                         ) : null
                    ))}
                  </p>
                  <div ref={buttonRef} > 
                  <ScheduleButton  isVisible={true}/>
                  </div>
                </div>
                
            </>
        }
        
        
       
        


        
    </section>
  )
}

export default allServices