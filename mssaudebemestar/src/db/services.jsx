import React from 'react'
import message from "../assets/services/massage.jpg"

const services = [
    {
        id:1,
        image: message,
        alt:"Imagem de massagem",
        name:"Osteopatia ",
        description:`Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral.\n As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.`,
        professionals:[1,2,3],
        subService:null
    }, 
    {
        id:2,
        image: message,
        alt:"Imagem de massagem",
        name:"Tratamento Terapêutico",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:null
    },
    {
        id:3,
        image: message,
        alt:"Imagem de massagem",
        name:"Massagens ",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:[
            {
                subServiceId:1,
                image: message,
                alt:"Imagem de massagem",
                name:"Massagem ",
                description:`Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral.\n As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.`,
                professionals:[1,2,3],

            },
            {
                subServiceId:2,
                image: message,
                alt:"Imagem de massagem",
                name:"Massagem",
                description:`Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral.\n As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.`,
                professionals:[1,2,3],
            }
            
        ]
    },
    {
        id:4,
        image: message,
        alt:"Imagem de massagem",
        name:"Drenagem Linfática",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:null
    },
    {
        id:5,
        image: message,
        alt:"Imagem de massagem",
        name:"Drenagem Pós-Cirurgica",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:null
    },
    {
        id:6,
        image: message,
        alt:"Imagem de massagem",
        name:"Coaching/Treino Mental",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:null
    },
    ,
    {
        id:7,
        image: message,
        alt:"Imagem de massagem",
        name:"Hipnoterapia ",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:null
    },
    {
        id:8,
        image: message,
        alt:"Imagem de massagem",
        name:"Reiki",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[1],
        subService:null
    },

]

export default services