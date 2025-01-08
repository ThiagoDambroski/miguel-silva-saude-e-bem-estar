import React from 'react'
import video from "../../assets/home/video.mp4"
import "../../css/mainPage/introscetion.css"
function introSection() {
  return (
    <section className='intro-section'>   
      <div className='video-background'>
          <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
          <div className="text-overlay">
            <h1>Miguel Silva</h1>
            <h2>Saúde e bem-estar</h2>
          </div>
      </div>
      
      
      
        
    </section>
  )
}

export default introSection