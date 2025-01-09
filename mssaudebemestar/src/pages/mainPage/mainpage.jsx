import React from 'react'
import IntroSection from './introSection'
import ServiceSection from './ServiceSection'
import ProfissionalsSection from './profissionalsSection'
import AboutUsSection from './aboutUsSection'
import "../../css/mainPage/main.css"
function mainpage() {
  return (
    <main>
        <IntroSection/>
        <ServiceSection/>
        <ProfissionalsSection/>
        <AboutUsSection/>
    </main>
  )
}

export default mainpage