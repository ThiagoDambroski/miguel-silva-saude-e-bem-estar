import React from 'react'
import "../css/schedule/sheduleButton.css"

function scheduleButton({ isVisible }) {
  return (
    <button className={`shedule-button ${isVisible ? "visible" : ""}`}>
        Marque a sua sessão
    </button>
  )
}

export default scheduleButton