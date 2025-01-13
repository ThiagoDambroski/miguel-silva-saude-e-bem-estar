import React from 'react'
import "../css/footer/footer.css"
import insta from "../assets/icons/instagram_black.png"
import whats from "../assets/icons/whatsapp_black.png"
import face from "../assets/icons/facebook_black.png"
import email from "../assets/icons/email_black.png"
function Footer() {
  return (
    <footer>
        <div>
            <img src={whats} alt="Logo Whatsapp"  />
            <img src={insta} alt="Logo Instagram" />
            <img src={face} alt="Logo Facebook" />
            <img src={email} alt="Logo Email" />
        </div>
        <p>R. do Fontanário 45, 2640-410 Mafra</p>
    </footer>
  )
}

export default Footer