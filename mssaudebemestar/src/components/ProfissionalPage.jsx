import React, { useState, useEffect, useRef } from 'react';
import ScheduleButton from './scheduleButton'
import closeButton from '../assets/icons/close.png'
import arrow from "../assets/icons/left-arrow.png"

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




  return (
    <section className='about-us-page-profissional-page'>
              <div className={`about-us-page-profissional-page-container ${containerVisible ? 'visible' : ''}`} ref={containerRef}>
                <img className='about-us-page-profissional-page-img' src={profi.image} alt={profi.alt} />
                <p>{profi.description}</p>
                <ScheduleButton isVisible={true}/> 
              </div>
              
              <div ref={specialityRef}>
                <h2>Especialidades:</h2>
                <ul className={`${specialityVisible ? 'visible' : ''}`}>
                    {profi.jobs.map((job,index) => (
                        <li key={index}>{job}</li>
                    ))}
                </ul>
              </div>
              {profi.certificates !== null ?
              <>
                <div>
                <h2>Certificados:</h2>
                
                {profi.certificates.map((certi) => (
                    <div className="profissional-page-certificate-div" onClick={() => toggleLigthBox(certi)}>
                        <div className="profissional-page-certificate-div-images">
                            {certi.image !==null ?
                            <>
                               <img src={certi.image[0]} alt={certi.image[0]} /> 
                            </>
                            :
                            <>
                            </>}
                        
                        </div>
                        <div className="profissional-page-certificate-div-content">
                            <h3>{certi.name}</h3>

                            <p>
                            {profi.description.length > 100
                                ? `${profi.description.slice(0, 100)}...`
                                : profi.description}
                                </p>
                        </div>
                        
                    </div>
                ))}
                
                </div>
              </>
              :
              <>
              </>}
              {ligthBox ? 
                <>
                    <div className="ligth-box">
                        <div className="ligth-box-content">
                            <h2>{certificate.name}</h2>
                            <img className='close-button' src={closeButton} alt="Botão de fechar" onClick={() => toggleLigthBox(null)} />
                            {fullSize ?
                            <>
                                <div className='full-size'>
                                    <img className='arrow-button' src={arrow} alt="Botão de voltar" onClick={() => setFullSize(null)} />
                                    <img className='full-size-img' src={fullSize} alt="full size certificate" />
                                </div>
                                
                            </>
                            :
                            <>
                                <div className='image-selector'>
                                    {actualImage !== 0 ?
                                        <>
                                            <img className='arrow' src={arrow} alt="left-arrow"  onClick={lessImage}/>
                                        </>
                                        :
                                        <>
                                            <img className='arrow-none' src={arrow} alt="left-arrow" />
                                        </>
                                    }
                                    
                                    <img src={certificate.image[actualImage]} alt={certificate.alt[actualImage]} onClick={() => setFullSize(certificate.image[actualImage])} />

                                    {actualImage !== certificate.image.length - 1  ?
                                        <>
                                            <img className='arrow-2' src={arrow} alt="rigth-arrow" onClick={moreImage}/>
                                        </>
                                        :
                                        <>
                                            <img className='arrow-none' src={arrow} alt="left-arrow" />
                                        </>
                                    }
                                    
                                </div>
                                
                                <p>{certificate.description}</p>
                            </>
                            }
                            
                            <ScheduleButton isVisible={true}/>                  
                        
                        </div>
                    </div>
                    
                </>
              :
                <>
                </>
              }
              
    </section>
  )
}

export default ProfissionalPage