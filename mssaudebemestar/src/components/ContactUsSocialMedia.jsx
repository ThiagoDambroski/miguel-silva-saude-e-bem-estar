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

  return (
    <div className="contact-us-social-media">
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
