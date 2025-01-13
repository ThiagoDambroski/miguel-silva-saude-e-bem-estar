import React from 'react'
import "../css/schedule/sheduleButton.css"

function scheduleButton({ isVisible }) {
  const phoneNumber = "351261092645"; 
  const message = "Olá! Gostaria de agendar um horário.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const textwpp = () => {
    window.open(whatsappLink, "_blank"); // Open the WhatsApp link in a new tab or app
  };

  return (
    <>
    
      <button className={`shedule-button ${isVisible ? "visible" : ""}`} onClick={textwpp}>
          Marque a sua sessão
      </button>
    
    </>
    
  )
}

export default scheduleButton