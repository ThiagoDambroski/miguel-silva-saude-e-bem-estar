import React, { useState } from 'react'
import "../../css/AboutUsPage/aboutUsPage.css"
import profissionals from '../../db/profissionals'
import ProfissionalShowCase from '../../components/profissionalShowCase'
import ProfissionalPage from '../../components/ProfissionalPage';
import arrow from "../../assets/icons/left-arrow.png"
import team from "../../assets/professionals/equipa.jpg"
import ScheduleButton from '../../components/scheduleButton';
import ContactUs from "../../components/ContactUsSection"


function AboutUsPage() {
  const [profiPage,setProfiPage] = useState(null);


  return (
    <main className='about-us-page'>
        {
          profiPage === null
          ?
          <>
          
           <h1>Sobre Nós</h1>
            <section className='about-us-page-profi'>
              
              <h2>Nossos profissionals</h2>
              {profissionals.map((profi) => (
                <ProfissionalShowCase
                  profi={profi}
                  setProfiPage= {setProfiPage}
                />
              ))}
          </section>
          <section className='about-us-page-history'>
            <h2>Nossa Historia</h2>
            <img src={team} alt="Equipa Miguel Silva - saude e bem estar" />
            <p>Abrimos as nossas portas em Mafra em Novembro de 2016, acreditando que é essencial investir na saúde para desfrutar de uma vida cheia de alegria, gratidão e satisfação. Isso orienta nossa abordagem, incluindo os nossos serviços, ensinamentos e tratamentos. No nosso espaço concentramo-nos em ajudar os clientes a melhorarem a sua saúde física e mental e transmitimos ferramentas para que possam mantê-la.
            Orgulhamo-nos da capacidade de mudar e impactar vidas de maneira saudável. Fazemos isso oferecendo serviços que ajudam todos os nossos clientes a alcançarem corpos e mentes mais positivos.
            Entre em contato ainda hoje!</p>
            <h2>Nossa Missão</h2>
            <div>
              <h4>O caminho para uma vida mais saudável</h4>
              <p>Ser o local onde os nossos clientes se sentem acolhidos e onde encontram a melhor solução para tratarem os seus problemas/dores, bem como adquirir/manter uma plena Saúde e Bem-Estar, seja no plano Físico, como o Mental e o Emocional.​</p>
            </div>
          </section>
          <ScheduleButton isVisible = {true}/>
      
          
          <ContactUs/>
          </>
          :
          <>
            <div className='container-arrow'>
              <img className='arrow-button' src={arrow} alt="Botão de voltar" onClick={() => setProfiPage(null)} />
              <h1>{profiPage.name}</h1>    
            </div>
            
            <ProfissionalPage  profi={profiPage}/>
            
          </>
        }
        <ScheduleButton isVisible = {true}/>

    </main>
  )
}

export default AboutUsPage