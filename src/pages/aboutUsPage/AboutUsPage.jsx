import React, { useState, useEffect, useRef } from 'react';
import "../../css/AboutUsPage/aboutUsPage.css"
import profissionals from '../../db/profissionals'
import ProfissionalShowCase from '../../components/profissionalShowCase'
import ProfissionalPage from '../../components/ProfissionalPage';
import arrow from "../../assets/icons/left-arrow.png"
import team from "../../assets/professionals/equipa.jpg"
import ScheduleButton from '../../components/scheduleButton';
import ContactUs from "../../components/ContactUsSection"
import { useParams } from 'react-router-dom';

function AboutUsPage({profiIndex}) {
  const { id } = useParams(null);

  const [profiPage,setProfiPage] = useState(!id  ? null : profissionals[id]);
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
              
              <h2>Concheça os profissionais</h2>
              {profissionals.map((profi,index) => (
                <ProfissionalShowCase
                  profi={profi}
                  setProfiPage= {setProfiPage}
                  isActive={index <= currentIndex}
                />
              ))}
          </section>
          <section className={`about-us-page-history ${historyVisible ? 'visible' : ''}`} ref={historyRef}>
            <h2>A nossa história</h2>
            <img src={team} alt="Equipa Miguel Silva - saude e bem estar" />
            <p>{`Abrimos as nossas portas em Novembro de 2016, iniciando com o Miguel Silva sozinho, com a ambição de servir bem os clientes e de um dia vir a criar uma equipa de qualidade e de confiança.

            Nessa altura os tratamentos eram maioritariamente para alívio de lesões e de outro tipo de dores físicas mas, apesar de ainda hoje ser um dos fatores principais pelos quais servimos os nossos clientes, a ideia começou a estruturar-se no sentido de ter uma abordagem Holística e poder ajudar as pessoas num todo e poder promover a sua qualidade de vida em vez de ajudar apenas quando estas já estão em sofrimento. 

            Passo a passo, esse processo solidificou-se e hoje temos o orgulho em ter uma equipa sólida e equilibrada com a presença da Jaqueline Lima e da Elizete Silva.
            Com uma Missão que nos move e com uma cultura virada para a satisfação e confiança dos nossos clientes, seguimos juntos a querer evoluir cada vez mais num ambiente harmonioso e positivo. 

            `}</p>
            <h2 >A nossa missão </h2 >
            <div className={`${missionVisible ? 'visible' : ''}`} ref={missionRef}>
              <h4>O caminho para uma vida mais saudável</h4>
              <p className='misson-p'>{`Promover a qualidade de vida melhorando a Saúde e o Bem-Estar de todos os nossos clientes, através de um bom acolhimento, humanização e de um tratamento personalizado.`}​</p>
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