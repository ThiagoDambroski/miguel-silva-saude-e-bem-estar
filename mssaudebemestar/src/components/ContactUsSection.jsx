import React, { useState, useEffect, useRef } from "react";
import whatsapp from "../assets/icons/whatsapp2.png";
import "../css/contactUs/contactUs.css";
import contacts from "../db/contacts";
import ContactUsSocialMedia from "./ContactUsSocialMedia";
import ContactUsMap from "./ContactUsMap";

function ContactUsSection() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  const transitionDelay = 300;
  const mediaContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setIsVisible(true);
        } 
      },
      {
        threshold: 0.1,
        rootMargin: "20px",
      }
    );

    if (mediaContainerRef.current) {
      observer.observe(mediaContainerRef.current);
    }

    return () => {
      if (mediaContainerRef.current) {
        observer.unobserve(mediaContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (currentIndex < contacts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, transitionDelay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isVisible]);

  //MAP
  const [showMap,setShowMap] = useState(false)
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting){
          setShowMap(true);
        } 
        
      },
      {
        threshold: 0.1,
        rootMargin: "20px",
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);
 
  return (
    <section className="contact-us-section" ref={mediaContainerRef}>
      <h2>Contatos</h2>
      <div className="contact-us-media-container">
        {contacts.map((contact, index) => (
          <ContactUsSocialMedia
            key={contact.id}
            contact={contact}
            isActive={index <= currentIndex}
          />
        ))}
      </div>
      <h3>Endereço</h3>
      <p className="contact-us-section-adress">R. do Fontanário 45, 2640-410 Mafra</p>
      <div className={`map ${showMap ? 'visible' : ''}`} ref={mapRef}>
       <ContactUsMap/>
      </div>
    </section>
  );
}

export default ContactUsSection;
