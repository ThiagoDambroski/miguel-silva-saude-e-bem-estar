import React from 'react'
import "../css/whatsaap/whats.css"
import whatsIcon from "../assets/icons/whatsappFixed.png"

function Whatsapp() {
  const phoneNumber = "351919630219"; 
  const message = "Olá! Gostaria de agendar um horário.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          className="whats-icon" 
          src={whatsIcon} 
          alt="Ícone do WhatsApp, clique aqui para agendar connosco." 
        />
      </a>
    </>
  );
}

export default Whatsapp;