import React, { useState, useEffect, useRef } from 'react';
import services from "../../db/services"
import profissionals from '../../db/profissionals';
import IndividualService from './IndividualService'
import ScheduleButton from '../../components/scheduleButton'
import arrow from "../../assets/icons/left-arrow.png"
import { NavLink } from 'react-router-dom'

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

    const transitionDelay = 300;

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true);
                
            }
            
          },
          {
            
            threshold: 0.1,
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

    //Filter

    const [input, setInput] = useState(''); 

    const servicesFilter = services
    .map((service) => {
      if (service.subService && Array.isArray(service.subService)) {
        // Filter matching sub-services
        const filteredSubServices = service.subService.filter((sub) =>
          sub.name.toLowerCase().includes(input.toLowerCase())
        );

        // If any sub-service matches, return only those sub-services
        if (filteredSubServices.length > 0) {
          return {
            ...service,
            subService: filteredSubServices,
          };
        }
      }

      // If no sub-service matches, check the main service name
      if (input.toLowerCase() === "massagem") {
        if (service.name.toLowerCase().includes("massagens")) {
          return service;
        }
      } else if (service.name.toLowerCase().includes(input.toLowerCase())) {
        return service;
      }

      // Exclude services with no matches
      return null;
    })
    .filter((service) => service !== null); // Remove null values
    
    
    

  return (
    <section className='all-service-section'>
        {page === null ?
            <>
                <h1>Nossos Serviços</h1>
                <div ref={containerRef} 
                className='all-service-div'>
                    <input type="text"  placeholder='Procure um Serviço'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                    {servicesFilter.length > 0 
                      ?
                      <>
                        {servicesFilter.map((service,index) => (
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
                      </>
                      :
                      <>
                      <h2 className='not-found'>Nenhum Serviço Encontrado</h2>
                      </>
                    }
                    
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
                    {profissionals.filter((prof) => page.professionals.includes(prof.id)).map((profi, index) => (
                          index === page.professionals.length - 1 ? (
                            <NavLink 
                            to={`/aboutUs/${profi.id - 1}`} 
                            onClick={(e) => {

                                

                                // Scroll to the top
                                window.scrollTo(0, 0);


                                // Navigate to the target URL
                                
                            }}
                            >
                                <span key={profi.id}>{profi.name}</span>
                            </NavLink>
                          ) : (
                            <NavLink 
                            to={`/aboutUs/${profi.id - 1}`} 
                            onClick={(e) => {

                                

                                // Scroll to the top
                                window.scrollTo(0, 0);


                                // Navigate to the target URL
                               
                            }}
                            >
                                <span key={profi.id}>{profi.name},</span>
                            </NavLink>
                          )
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