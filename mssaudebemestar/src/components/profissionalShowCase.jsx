import React from 'react'

function profissionalShowCase({profi,setProfiPage}) {



  return (
    <div className='profi-showcase' onClick={() => setProfiPage(profi)}>
        <div className='profi-showcase-image'>
            <img src={profi.image} alt={profi.alt} />
        </div>
        
        <div  className='profi-showcase-content'>
            <h3>{profi.name}</h3>
            <p>
                {profi.description.length > 100
            ? `${profi.description.slice(0, 100)}...`
            : profi.description}
            </p>
            <button>Saiba Mais</button>
        </div>
    </div>
  )
}

export default profissionalShowCase