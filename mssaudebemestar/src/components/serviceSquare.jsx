import React, { useState,useEffect } from 'react'
import ScheduleButton from './scheduleButton'
import closeButton from '../assets/icons/close.png'
import profissionals from '../db/profissionals'
import leftArrow from "../assets/icons/left-arrow.png"
import { NavLink } from 'react-router-dom'

function serviceSquare({service,isVisible}) {

    const[ligthBox,setLigthBox] = useState(false)

    const[subForPage,setSubForPage] = useState(null)

    const toggleLigthBox = () => {
        document.body.classList.toggle("light-box-block")
        setLigthBox(!ligthBox)
    }

    const changeSubForPage = (sub) => {
        setSubForPage(sub)
    }

    //Screen size limit chars
    
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
      
    let maxLength = 200; // Default for larger screens
    if (screenWidth <= 600) {
          maxLength = 80; // Shorter length for smaller screens
    } else if (screenWidth <= 1024) {
          maxLength = 150; // Adjust for medium-sized screens
    }


  return (
    <>
        <div className={`service-square ${isVisible ? 'visible' : ''}`} onClick={toggleLigthBox}>
            <img src={service.image}  alt={service.alt} />
            <p >{service.name}</p>
        </div>
        {ligthBox ? 
        <>
            <div className="ligth-box">
                <div className="ligth-box-content">
                    <div className='ligth-box-service'>
                        {subForPage !== null ? 
                            <>
                                <img className='arrow-button' src={leftArrow} alt="Botão de voltar ao sub menu" onClick={() => changeSubForPage(null)} />
                            </>
                            :
                            <>
                            </>
                        }
                        <img className='close-button' src={closeButton} alt="Botão de fechar" onClick={toggleLigthBox} />
                        <h2>{service.name}</h2>
                        {service.subService === null ?
                            <>
                                <img className='ligth-box-service-img' src={service.image} alt={service.alt} />
                                <p>
                                    {service.description.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                    ))}
                                </p>
                                <div>
                                    <p className='meat-team'>Concheça os profissionais:</p>
                                    <p>
                                        {profissionals.map((profi, index) => (
                                        service.professionals.includes(profi.id) ? (
                                            index === service.professionals.length - 1 ? (
                                                <NavLink 
                                                to={`/aboutUs/${profi.id - 1}`} 
                                                onClick={(e) => {

                                                    e.preventDefault();

                                                    // Scroll to the top
                                                    window.scrollTo(0, 0);

                                                    // Perform your custom logic
                                                    toggleLigthBox();

                                                    // Navigate to the target URL
                                                    window.location.href = `/#/aboutUs/${profi.id - 1}`;
                                                }}
                                                >
                                                    <span key={profi.id}>{profi.name}</span>
                                                </NavLink>
                                             // Last professional, no comma
                                            ) : (
                                                <NavLink 
                                                to={`/aboutUs/${profi.id - 1}`} 
                                                onClick={(e) => {

                                                    e.preventDefault();

                                                    // Scroll to the top
                                                    window.scrollTo(0, 0);

                                                    // Perform your custom logic
                                                    toggleLigthBox();

                                                    // Navigate to the target URL
                                                    window.location.href = `/#/aboutUs/${profi.id - 1}`;
                                                }}
                                                >
                                                    <span key={profi.id}>{profi.name},</span>
                                                </NavLink>
                                            )
                                        ) : null
                                        ))}
                                    </p>
                                </div>
                            </>
                            :
                            <>
                                {subForPage === null ?
                                    <>
                                        {service.subService.map((sub,index) => (
                                        <div key={index} className='submenu' onClick={() => changeSubForPage(sub)}>
                                            <img src={sub.image} alt={sub.alt} />
                                            <div className="submenu-div">
                                                <h3>{sub.name}</h3>
                                                <p>
                                                    {sub.description.length > maxLength
                                                        ? `${sub.description.slice(0, maxLength)}...`
                                                        : sub.description}
                                                </p>
                                                
                                            </div>
                                            
                                        </div>
                                        ))}
                                    </>
                                    :
                                    <>
                                        <img className='ligth-box-service-img' src={subForPage.image} alt={subForPage.alt} />
                                        <p>
                                            {subForPage.description.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                            ))}
                                        </p>
                                        <div>
                                            <p className='meat-team'>Concheça os profissionais:</p>
                                            <p>
                                                {profissionals.map((profi, index) => (
                                                subForPage.professionals.includes(profi.id) ? (
                                                    index === subForPage.professionals.length - 1 ? (
                                                        <NavLink 
                                                        to={`/aboutUs/${profi.id - 1}`} 
                                                        onClick={(e) => {
        
                                                            e.preventDefault();

                                                            // Scroll to the top
                                                            window.scrollTo(0, 0);

                                                            // Perform your custom logic
                                                            toggleLigthBox();

                                                            // Navigate to the target URL
                                                            window.location.href = `/#/aboutUs/${profi.id - 1}`;
                                                        }}
                                                        >
                                                            <span key={profi.id}>{profi.name}</span>
                                                        </NavLink>
                                                     // Last professional, no comma
                                                    ) : (
                                                        <NavLink 
                                                        to={`/aboutUs/${profi.id - 1}`} 
                                                        onClick={(e) => {
        
                                                            e.preventDefault();

                                                            // Scroll to the top
                                                            window.scrollTo(0, 0);

                                                            // Perform your custom logic
                                                            toggleLigthBox();

                                                            // Navigate to the target URL
                                                            window.location.href = `/#/aboutUs/${profi.id - 1}`;
                                                        }}
                                                        >
                                                            <span key={profi.id}>{profi.name},</span>
                                                        </NavLink>
                                                    )
                                                ) : null
                                                ))}
                                            </p>
                                        </div>
                                    </>
                                 }
                                
                            </>
                        }
                        
                        
                        <ScheduleButton isVisible={true}/>
                    </div>
                    
                </div>
            </div>
        
        </> 
        
        : <></>}
    </>
    
  )
}

export default serviceSquare