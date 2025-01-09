import React, { useState } from 'react'
import ScheduleButton from './scheduleButton'
import closeButton from '../assets/icons/close.png'
import profissionals from '../db/profissionals'

function serviceSquare({service,isVisible}) {

    const[ligthBox,setLigthBox] = useState(false)

    const toggleLigthBox = () => {
        document.body.classList.toggle("light-box-block")
        setLigthBox(!ligthBox)
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
                        <img className='close-button' src={closeButton} alt="Botão de fechar" onClick={toggleLigthBox} />
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
                            <p className='meat-team'>Concheça os profissionais:</p>
                            <p>
                                {profissionals.map((profi, index) => (
                                service.professionals.includes(profi.id) ? (
                                    index === service.professionals.length - 1 ? (
                                    <span key={profi.id}>{profi.name}</span> // Last professional, no comma
                                    ) : (
                                    <span key={profi.id}>{profi.name},</span> // Add comma for others
                                    )
                                ) : null
                                ))}
                            </p>
                        </div>
                        
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