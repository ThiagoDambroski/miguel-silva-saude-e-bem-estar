import React from 'react'
import miguel from "../assets/professionals/miguelSilva.png"
import jaqueline from "../assets/professionals/jaqueline.jpg"
import elizete from "../assets/professionals/elizete.png"
import jaquelineCertificate1 from "../assets/professionals/jaqueline.jpg"
const profissionals = [
    {
        id:1,
        image: miguel,
        alt:"Miguel",
        name:"Miguel Silva",
        description: "Miguel Silva é um profissional multifacetado, dedicado ao cuidado e ao bem-estar das pessoas. Com uma ampla experiência em diversas áreas da saúde e desenvolvimento pessoal. Com um compromisso profundo com o progresso e o equilíbrio dos seus pacientes, Miguel combina conhecimento técnico e empatia para proporcionar resultados transformadores.",
        jobs:["Responsável clínico","Especialista em Saúde e Bem-Estar","Osteopata","Coach","Hipnoterapeuta"],
        certificates:[{
            image:[jaquelineCertificate1,jaquelineCertificate1],
            alt:["Certificado exemplo 1","Certificado exemplo 1"],
            name:"Certificado exemplo 1",
            description:"Jaqueline Lima é uma profissional dedicada ao bem-estar físico, mental e emocional dos seus pacientes. Com uma abordagem holística e personalizada, atua em diversas áreas complementares. Com um olhar atento às necessidades individuais, ",
        }]
    },
    {
        id:2,
        image: jaqueline,
        alt:"Jaqueline Lima",
        name:"Jaqueline Lima",
        description: "Sou uma profissional de com várias formações dentro da área das terapias manuais não evasivas.Tendo a primeira formação em 2009 como esteticista corporal, logo, Técnica em Massoterapia.Em seguida adentrei no universo das terapias complementares concluindo outros cursos como: Reiki, Massagem com pedras ( com exfoliação corporal)quentes; drenagem linfática manual ,  corporal e facial . Drenagem linfática pré e pós operatória;massagem em grávidas  tratamento terapêutico para dores e queixas musculares. Massagem Kobido ( técnica asiática de massagem facial ).Aromaterapia Massagem Clássica de relaxamento .Reflexologia podal Shiatsu .Meu atendimento é único tratando cada paciente de maneira específica consoante seu estado físico e emocional. Estou sempre 100% para cada um de vós. Minha missão é ajudar, minha satisfação é seu bem estar.",
        jobs:["Reiki  ","Massagem terapêutica ","Massagem com velas aromáticas","Massoterapia","Massagem facial ","Drenagem pós operatória "],
        certificates:[{
            image:[jaquelineCertificate1,jaquelineCertificate1],
            alt:["Certificado exemplo 1","Certificado exemplo 1"],
            name:"Certificado exemplo 1",
            description:"Jaqueline Lima é uma profissional dedicada ao bem-estar físico, mental e emocional dos seus pacientes. Com uma abordagem holística e personalizada, atua em diversas áreas complementares. Com um olhar atento às necessidades individuais, ",
        }]
    },
    {
        id:3,
        image: elizete,
        alt:"Elizete Silva",
        name:"Elizete Silva",
        description: "Elizete Silva é uma profissional experiente, focada em proporcionar alívio físico e recuperação funcional aos seus pacientes.Com uma abordagem prática e cuidadosa, Elizete dedica-se a oferecer tratamentos personalizados, ajudando os seus pacientes a recuperar a saúde e o equilíbrio no dia a dia. ",
        jobs:["Massoterapeuta","Técnica de Fisioterapia"],
        certificates:null
    },
]

export default profissionals