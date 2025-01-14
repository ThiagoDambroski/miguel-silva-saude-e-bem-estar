import React, { useState, useEffect, useRef } from 'react';
import "../../css/AboutUsPage/aboutUsPage.css"
import profissionals from '../../db/profissionals'
import ProfissionalShowCase from '../../components/profissionalShowCase'
import ProfissionalPage from '../../components/ProfissionalPage';
import arrow from "../../assets/icons/left-arrow.png"
import team from "../../assets/professionals/equipa.jpg"
import ScheduleButton from '../../components/scheduleButton';
import ContactUs from "../../components/ContactUsSection"


function AboutUsPage({profiIndex}) {

  const [profiPage,setProfiPage] = useState(profiIndex === null ? null : profissionals[profiIndex]);
  const [checkAgain,setCheckAgain] = useState(false)
  const setProfiToNull = () => {
    
    setProfiPage(null)
    setCheckAgain(true)
  }

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const transitionDelay = 200;
  const containerRef = useRef(null)

  const profiLength = profissionals.length

  useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true);
            }
            
          },
          {
            
            threshold: 0.1,
            rootMargin:"0px"
          }
        );
    
        if (containerRef.current) {
          observer.observe(containerRef.current);
        }
    
        return () => {
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        };
      }, [,checkAgain]);
    
    useEffect(() => {
        if (!isVisible) return;
    
        if (currentIndex < profiLength) {
          const timeout = setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, transitionDelay);
    
          return () => clearTimeout(timeout); 
        }
    }, [currentIndex, isVisible]);


    //history
    const [historyVisible,setHistoryVisible] = useState(false)
    const historyRef = useRef(null)
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setHistoryVisible(true);
          }
          
        },
        {
          
          threshold: 0.3,
          rootMargin:"0px"
        }
      );
  
      if (historyRef.current) {
        observer.observe(historyRef.current);
      }
  
      return () => {
        if (historyRef.current) {
          observer.unobserve(historyRef.current);
        }
      };
    }, [,checkAgain]);

    //mission

    const [missionVisible,setMissionVisible] = useState(false)
    const missionRef = useRef(null)
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setMissionVisible(true);
          }
          
        },
        {
          
          threshold: 0.3,
          rootMargin:"0px"
        }
      );
  
      if (missionRef.current) {
        observer.observe(missionRef.current);
      }
  
      return () => {
        if (missionRef.current) {
          observer.unobserve(missionRef.current);
        }
      };
    }, [,checkAgain]);

    //button
    const [buttonVisible,setButtonVisible] = useState(false)
    const buttonRef = useRef(null)
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if(entry.isIntersecting){
            setButtonVisible(true);
          }
          
        },
        {
          
          threshold: 1,
          rootMargin:"0px"
        }
      );
  
      if (buttonRef.current) {
        observer.observe(buttonRef.current);
      }
  
      return () => {
        if (buttonRef.current) {
          observer.unobserve(buttonRef.current);
        }
      };
    }, [,checkAgain]);

  return (
    <main className='about-us-page'>
        {
          profiPage === null
          ?
          <>
          
           <h1>Sobre Nós</h1>
            <section className='about-us-page-profi' ref={containerRef}>
              
              <h2>Nossos profissionals</h2>
              {profissionals.map((profi,index) => (
                <ProfissionalShowCase
                  profi={profi}
                  setProfiPage= {setProfiPage}
                  isActive={index <= currentIndex}
                />
              ))}
          </section>
          <section className={`about-us-page-history ${historyVisible ? 'visible' : ''}`} ref={historyRef}>
            <h2>Nossa Historia</h2>
            <img src={team} alt="Equipa Miguel Silva - saude e bem estar" />
            <p>Abrimos as nossas portas em Mafra em Novembro de 2016, acreditando que é essencial investir na saúde para desfrutar de uma vida cheia de alegria, gratidão e satisfação. Isso orienta nossa abordagem, incluindo os nossos serviços, ensinamentos e tratamentos. No nosso espaço concentramo-nos em ajudar os clientes a melhorarem a sua saúde física e mental e transmitimos ferramentas para que possam mantê-la.
            Orgulhamo-nos da capacidade de mudar e impactar vidas de maneira saudável. Fazemos isso oferecendo serviços que ajudam todos os nossos clientes a alcançarem corpos e mentes mais positivos.
            Entre em contato ainda hoje!</p>
            <h2 >Nossa Missão</h2 >
            <div className={`${missionVisible ? 'visible' : ''}`} ref={missionRef}>
              <h4>O caminho para uma vida mais saudável</h4>
              <p className='misson-p'>Ser o local onde os nossos clientes se sentem acolhidos e onde encontram a melhor solução para tratarem os seus problemas/dores, bem como adquirir/manter uma plena Saúde e Bem-Estar, seja no plano Físico, como o Mental e o Emocional.​</p>
            </div>
          </section>
          <div ref={buttonRef} className='button-div'>
            <ScheduleButton isVisible = {buttonVisible}/>
          </div>
          
      
          
          <ContactUs/>
          </>
          :
          <>
            <div className='container-arrow'>
              <img className='arrow-button' src={arrow} alt="Botão de voltar" onClick={setProfiToNull} />
              <h1>{profiPage.name}</h1>    
            </div>
            
            <ProfissionalPage  profi={profiPage}/>
            
          </>
        }
        <div  className='button-div'>
            <ScheduleButton isVisible = {true}/>
          </div>

    </main>
  )
}

export default AboutUsPage