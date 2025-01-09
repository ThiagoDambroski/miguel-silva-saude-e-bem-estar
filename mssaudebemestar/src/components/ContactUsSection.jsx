import React, { useState, useEffect, useRef } from 'react';
import whatsapp from "../assets/icons/whatsapp2.png";
import "../css/contactUs/contactUs.css";
import contacts from '../db/contacts';
import ContactUsSocialMedia from './ContactUsSocialMedia';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
function ContactUsSection() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  
  const transitionDelay = 300;
  const mediaContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        
        threshold: 0.1,
        rootMargin:"20px"
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

      return () => clearTimeout(timeout); // Clear timeout on component unmount or index change
    }
  }, [currentIndex, isVisible]);

  //map
    const [mapLoaded, setMapLoaded] = useState(false);

    const center = {
      lat: 38.95636, // Latitude for "Miguel e Silva Saúde e Bem Estar"
      lng: -9.341202 // Longitude for the location
    };

    const containerStyle = {
      
      width: '80%',
      height: '400px',
    };

    useEffect(() => {
      setMapLoaded(true);
    }, []);


  return (
    <section className='contact-us-section' ref={mediaContainerRef}>
      <h2>Nossos Contatos</h2>
      <div className='contact-us-media-container' >
        {contacts.map((contact, index) => (
          <ContactUsSocialMedia
            key={contact.id}
            contact={contact}
            isActive={index <= currentIndex}
          />
        ))}
      </div>
      <h3>endereço</h3>
      <p className='contact-us-section-adress'>R. do Fontanário 45, 2640-410 Mafra</p>
      {mapLoaded ? (
        <div className="map">
          <LoadScript
              googleMapsApiKey="AIzaSyC9_24fEaoug-DK7nXMZw_XxQ4hRRqL3g0"
              onLoad={() => setMapLoaded(true)}
              onError={(error) => console.error("Map loading error: ", error)}
            >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
        
      ) : (
        <div>carregando map...</div>
      )}
    </section>
  );
}

export default ContactUsSection;
