import React, { useState, useEffect } from 'react';

function ContactUsSocialMedia({ contact, isActive }) {
  const [imageActive, setImageActive] = useState(false);
  const [pActive, setPActive] = useState(false);
  const transitionSpeed = 400;

  useEffect(() => {
    if (isActive) {
      setImageActive(true);
      const timeout = setTimeout(() => {
        setPActive(true);
      }, transitionSpeed - 200);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [isActive]);

  const openLink = () => {
    switch(contact.id){
      case 1:
        const phoneNumber = "351919630219"; 
        const message = "Olá! Gostaria de agendar um horário.";
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
        break;
      case 2:
        window.open("https://www.instagram.com/miguelsilva_saude_e_bem_estar/", "_blank");
        break;
      case 3:
        window.open("https://www.facebook.com/miguelsilvaterapiassaude/", "_blank");
        break;
      case 4:
        window.location.href = "mailto:miguelsilvaterapeuta@gmail.com";
        break;
    }
  }


  return (
    <div className="contact-us-social-media" onClick={openLink}>
      <img
        className={`${imageActive ? "active" : ""}`}
        src={contact.image}
        alt={contact.alt}
        style={{ transition: `all ${transitionSpeed}ms ease-in` }}
      />
      <p className={`${pActive ? "active" : ""}`}>{contact.content}</p>
    </div>
  );
}

export default ContactUsSocialMedia;
