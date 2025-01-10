import React from 'react'

function IndividualService({service,isActive,setPage}) {
  return (
    <div className={`individual-services ${isActive ? 'active' : ''}`} onClick={() => setPage(service)}>
        <img src={service.image} alt={service.alt} />
        <div>
            <h2>{service.name}</h2>
            <p>
            {service.description.length > 90
                ? `${service.description.slice(0, 90)}...`
                : service.description
            }    
            </p>
        </div>
        
    </div>
  )
}

export default IndividualService