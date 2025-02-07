import React from 'react'
import "../css/footer/footer.css"
import insta from "../assets/icons/instagram_black.png"
import whats from "../assets/icons/whatsapp_black.png"
import face from "../assets/icons/facebook_black.png"
import email from "../assets/icons/email_black.png"
function Footer() {

  const openLink = (id) => {
    switch(id){
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
    <footer>
        <div>
            <img src={whats} alt="Logo Whatsapp" onClick={() => openLink(1)} />
            <img src={insta} alt="Logo Instagram" onClick={() => openLink(2)}/>
            <img src={face} alt="Logo Facebook" onClick={() => openLink(3)}/>
            <img src={email} alt="Logo Email" onClick={() => openLink(4)}/>
        </div>
        <p>R. do Fontanário 45, 2640-410 Mafra</p>
    </footer>
  )
}

export default Footer