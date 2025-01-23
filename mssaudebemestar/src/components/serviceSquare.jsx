import React, { useState, useEffect, useRef } from 'react';
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
    //Filter

    const [input, setInput] = useState(''); // Initialize with an empty string

    const servicesFilter = service.subService !== null 
    ? service.subService.filter((subServiceItem) => {
        return subServiceItem.name.toLowerCase().includes(input.toLowerCase());
        })
    : []; 


    //about of ligthbox
    const lightBoxRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (lightBoxRef.current && !lightBoxRef.current.contains(event.target)) {
                setLigthBox(false);
                document.body.classList.remove("light-box-block");
            }
        };
        if (ligthBox) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ligthBox]);

  return (
    <>
        <div className={`service-square ${isVisible ? 'visible' : ''}`} onClick={toggleLigthBox}>
            <img src={service.image}  alt={service.alt} />
            <p >{service.name}</p>
        </div>
        {ligthBox ? 
        <>
            <div className="ligth-box">
                <div className="ligth-box-content" ref={lightBoxRef}>
                    <div className='ligth-box-service'>
                        <div className='ligth-box-nav'>
                            {subForPage !== null ? 
                                <>
                                    <img className='arrow-button' src={leftArrow} alt="Botão de voltar ao sub menu" onClick={() => changeSubForPage(null)} />
                                </>
                                :
                                <>
                                </>
                            }
                            <img className='close-button' src={closeButton} alt="Botão de fechar" onClick={toggleLigthBox} />
                        </div>
                        
                        
                        {service.subService === null ?
                        
                            <>
                                <h2>{service.name}</h2>
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
                                    <p className='meat-team'>Concheça os profissionais :</p>
                                    <p className='meat-team-container'>
                                        
                                        {profissionals.filter((prof) => service.professionals.includes(prof.id)).map((profi, index) => (
                                            index === service.professionals.length -1 ? (
                                                
                                                <NavLink 
                                                to={`/aboutUs/${profi.id - 1}`} 
                                                onClick={(e) => {

                                                    

                                                    // Scroll to the top
                                                    window.scrollTo(0, 0);

                                                    // Perform your custom logic
                                                    toggleLigthBox();

                                                    // Navigate to the target URL
                                                    
                                                }}
                                                >
                                                    
                                                    <span key={profi.id}>{profi.name}</span>
                                                </NavLink>
                                             // Last professional, no comma
                                            ) : (
                                                <NavLink 
                                                to={`/aboutUs/${profi.id - 1}`} 
                                                onClick={(e) => {

                                                   
                                                    // Scroll to the top
                                                    window.scrollTo(0, 0);

                                                    // Perform your custom logic
                                                    toggleLigthBox();

                                                    // Navigate to the target URL
                                                    
                                                }}
                                                >
                                                    <span key={profi.id}>{profi.name},</span>
                                                </NavLink>
                                            )
                                        ))}
                                    </p>
                                </div>
                            </>
                            :
                            <>
                                {subForPage === null ?
                                    <>
                                        <input type="text"  placeholder='Procure um Serviço'
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        />
                                        {servicesFilter.length > 0 
                                            ?
                                            <>
                                                {servicesFilter.map((sub,index) => (
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
                                            <h2 className='not-found'>Nenhum Serviço Encontrado</h2>
                                            </>
                                        }
                                        
                                    </>
                                    :
                                    <>
                                        <h2>{subForPage.name}</h2>
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
                                            <p className='meat-team'>Concheça os profissionais :</p>
                                            <p className='meat-team-container'>
                                                {profissionals.filter((prof) => subForPage.professionals.includes(prof.id)).map((profi, index) => (
                                                    index === subForPage.professionals.length -1 ? (
                                                        <NavLink 
                                                        to={`/aboutUs/${profi.id - 1}`} 
                                                        onClick={(e) => {
        
                                                            e.preventDefault();

                                                            
                                                            window.scrollTo(0, 0);

                                                            
                                                            toggleLigthBox();

                                                            
                                                           
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
                                                           
                                                        }}
                                                        >
                                                            <span key={profi.id}>{profi.name},
                                                            </span>
                                                        </NavLink>
                                                    )
                                                ))}
                                            </p>
                                        </div>
                                    </>
                                 }
                                
                            </>
                        }
                        
                        <div className='button-padding-container'>
                            <ScheduleButton isVisible={true}/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        
        </> 
        
        : <></>}
    </>
    
  )
}

export default serviceSquare