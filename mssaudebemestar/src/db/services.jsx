import React from 'react'
import message from "../assets/services/massage.jpg"
import osteopatia from "../assets/services/Osteopatia.jpg"
import tratamento from "../assets/services/tratramento.jpg"
import drenagem from "../assets/services/drenagem.jpg"
import drenagemCi from "../assets/services/drenagemCI.jpg"
import coach from "../assets/services/coach.jpg"
import hipo from "../assets/services/hipnoterapia.jpg"
import reiki from "../assets/services/reiki.png"


//SUBSERVICE MASSAGE
import mTerapeu from "../assets/services/mterapeuta.jpg"
import mSport from "../assets/services/msport.jpg"
import mPodal from "../assets/services/mpodal.jpg"
import mPedra from "../assets/services/mpedra.jpg"
import mEsfo from "../assets/services/mesfo.jpg"
import mGravida from "../assets/services/mgravida.jpg"
import mKob from "../assets/services/mKob.jpg"
import mVela from "../assets/services/mVela.jpg"
import mshiatstu from "../assets/services/mshiatsu.jpg"

//SubService COACH
import cLife from "../assets/services/clife.jpg"
import cSport from "../assets/services/csport.jpg"
import cEnea from "../assets/services/cenea.jpg"
import cSaude from "../assets/services/csaude.jpg"
import cMentoria from "../assets/services/cmentoria.jpg"
import cCarreira from "../assets/services/ccarreira.jpg"


//SubService MENTORIA
import hEmo from "../assets/services/hemo.jpg"
import hAns from "../assets/services/hans.jpg"
import hRegre from "../assets/services/hregre.jpg"
import hCigarro from "../assets/services/hcigarro.jpg"
import hFino from "../assets/services/hfino.jpg"
import hTrauma from "../assets/services/htrauma.jpg"
import hPisico from "../assets/services/hpisco.png"

const services = [
    {
        id:1,
        image: osteopatia,
        alt:"Imagem de Osteopatia",
        name:"Osteopatia ",
        description:`A osteopatia é uma prática terapêutica manual que visa diagnosticar, tratar e prevenir disfunções no corpo, promovendo o equilíbrio estrutural e funcional para melhorar a saúde geral. 
        Utilizando técnicas específicas para estimular o sistema musculoesquelético, nervoso e visceral, a Osteopatia ajuda a aliviar dores, restaurar a mobilidade e a otimizar o funcionamento do organismo, respeitando a sua capacidade natural de autocura.
        A nossa metodologia:
        No nosso tratamento de Osteopatia aliamos as técnicas osteopáticas às técnicas utilizadas no Tratamento Terapêutico com vista a potenciar ainda mais a eficácia do seu tratamento.`,
        professionals:[1],
        subService:null
    }, 
    {
        id:2,
        image: tratamento,
        alt:"Imagem de Tratamento Terapêutico",
        name:"Tratamento Terapêutico",
        description:`
        O nosso Tratamento Terapêutico é o acompanhamento personalizado que tem como objetivo o alívio de dores e a recuperação de lesões, bem como a manutenção e promoção da saúde e do bem-estar dos clientes.

        Com recurso a uma abordagem Holística, os clientes terão sempre uma avaliação para assim permitir um tratamento mais adaptado às suas queixas e necessidades. 

        De acordo com o plano de tratamento, são utilizadas um conjunto de técnicas Terapêuticas, sendo a Massagem Terapêutica (mais profunda) um dos pontos principais da terapia. 

        Para potenciar a eficácia do tratamento, também poderão ser aplicadas técnicas como:
        - Eletroterapia;
        - Calores húmidos; 
        - Ventosas; 
        - Infravermelhos;
        - Massajador Pneumático;
        -Alongamentos e/ou mobilizações específicas.`,
        professionals:[1,2,3],
        subService:null
    },
    {
        id:3,
        image: message,
        alt:"Imagem de massagem",
        name:"Massagens ",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[],
        subService:[
            {
                subServiceId:1,
                image: mTerapeu,
                alt:"Imagem de Terapêutica",
                name:"Massagem Terapêutica",
                description:`A massagem terapêutica é uma técnica que utiliza manobras específicas de pressão, alongamento e fricção para tratar dores musculares, tensões e desconfortos no corpo. Ela visa melhorar a circulação, aliviar o estresse, promover o relaxamento e restaurar o equilíbrio físico e emocional, sendo aplicada conforme as necessidades individuais de cada paciente.`,
                professionals:[1,2,3],

            },
            {
                subServiceId:2,
                image: mSport,
                alt:"Imagem de Massagem Desportiva",
                name:"Massagem Desportiva",
                description:`A massagem desportiva é uma técnica voltada para a prevenção e recuperação de lesões em praticantes de atividades físicas. Ela envolve movimentos rápidos e profundos para aliviar tensões musculares, melhorar a circulação sanguínea, reduzir o risco de lesões e acelerar a recuperação pós-treino. Além disso, auxilia no aumento da flexibilidade, proporcionando melhor desempenho esportivo.`,
                professionals:[1,3],
            },
            {
                subServiceId:3,
                image: message,
                alt:"Imagem de Massagem de Relaxamento",
                name:"Massagem de Relaxamento",
                description:`A massagem de relaxamento é uma técnica suave e envolvente que tem como objetivo aliviar o estresse e promover o bem-estar. Por meio de movimentos lentos e fluidos, ela estimula a circulação sanguínea, relaxa os músculos tensos e proporciona uma sensação de calma e tranquilidade, ajudando a reduzir a ansiedade e a melhorar o equilíbrio emocional.`,
                professionals:[1,2,3],
            },
            {
                subServiceId:4,
                image: mPodal,
                alt:"Imagem de Reflexologia Podal ",
                name:"Reflexologia Podal ",
                description:`A reflexologia podal é uma técnica terapêutica que envolve a aplicação de pressão em pontos específicos dos pés, correspondentes a diferentes partes do corpo. Através dessa estimulação, busca-se promover o equilíbrio energético, aliviar tensões, melhorar a circulação e auxiliar no alívio de dores e distúrbios, proporcionando bem-estar físico e mental.`,
                professionals:[2],
            },
            {
                subServiceId:5,
                image: mPedra,
                alt:"Imagem de Massagem Pedras quentes ",
                name:"Massagem Pedras quentes",
                description:`A massagem com pedras quentes é uma técnica terapêutica que utiliza pedras aquecidas para relaxar os músculos e promover uma sensação profunda de tranquilidade. As pedras, geralmente de basalto, são posicionadas em pontos específicos do corpo, enquanto o terapeuta realiza movimentos suaves para aliviar tensões, melhorar a circulação e reduzir o estresse, proporcionando um relaxamento intenso e restaurador.`,
                professionals:[2],
            },
            {
                subServiceId:6,
                image: mEsfo,
                alt:"Imagem de Esfoliação Corporal + Pedras quentes ",
                name:"Massagem Esfoliação Corporal + Pedras quentes ",
                description:`A massagem de esfoliação corporal combinada com pedras quentes é um tratamento completo que promove o rejuvenescimento e o relaxamento. A esfoliação, realizada com produtos específicos, remove as células mortas da pele, deixando-a mais suave e renovada, enquanto as pedras quentes aplicadas ao longo do corpo proporcionam relaxamento profundo, aliviando tensões e melhorando a circulação. Juntas, essas técnicas ajudam a revitalizar o corpo, melhorar a aparência da pele e proporcionar uma sensação de bem-estar e tranquilidade.`,
                professionals:[2],
            },
            {
                subServiceId:7,
                image: mGravida,
                alt:"Imagem de Massagem para Grávidas ",
                name:"Massagem para Grávidas",
                description:`A massagem para grávidas é uma técnica terapêutica suave e segura, adaptada às necessidades das gestantes, visando aliviar desconfortos comuns durante a gravidez, como dores nas costas, inchaço e tensões musculares. Com movimentos leves e cuidadosos, ela melhora a circulação, reduz o estresse, promove o relaxamento e contribui para o bem-estar geral, respeitando as condições e limitações do corpo durante essa fase.`,
                professionals:[2,3],
            },
            {
                subServiceId:8,
                image: mKob,
                alt:"Imagem de Massagem facial asiática KOBIDO ",
                name:"Massagem facial asiática KOBIDO ",
                description:`A massagem facial asiática Kobido é uma técnica tradicional japonesa que combina movimentos rápidos e suaves para tonificar, relaxar e rejuvenescer a pele. Ela utiliza acupressão, alongamentos faciais e massagens circulares para estimular a circulação sanguínea, aliviar tensões faciais, reduzir linhas de expressão e melhorar a elasticidade da pele, proporcionando um efeito lifting natural e uma aparência mais jovem e radiante.`,
                professionals:[2],
            },
            {
                subServiceId:9,
                image: mVela,
                alt:"Imagem de Candle Massaje ( Velas aromáticas ) ",
                name:"Massagem Candle Massaje ( Velas aromáticas ) ",
                description:`A massagem Candle Massage, ou massagem com velas aromáticas, utiliza velas especiais que derretem em óleos quentes e nutritivos, proporcionando uma experiência sensorial única. Durante o tratamento, o terapeuta derrama o óleo morno sobre o corpo, aplicando movimentos suaves e relaxantes que ajudam a aliviar tensões, hidratar a pele e promover o relaxamento profundo. O aroma das velas também contribui para o alívio do estresse e uma sensação de bem-estar.`,
                professionals:[2],
            },
            {
                subServiceId:10,
                image: mshiatstu,
                alt:"Imagem de Shiatsu",
                name:"Massagem Shiatsu ",
                description:`Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral.\n As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.`,
                professionals:[2],
            },
        ]
    },
    {
        id:4,
        image: drenagem,
        alt:"Imagem de Drenagem Linfática",
        name:"Drenagem Linfática",
        description:"A drenagem linfática é uma técnica de massagem manual que estimula o sistema linfático, promovendo a eliminação de líquidos e toxinas do organismo. Utilizando movimentos suaves, rítmicos e direcionados, estimula a redução de inchaços, melhora a circulação, fortalece o sistema imunitário e contribui para o relaxamento e o bem-estar geral.",
        professionals:[2,3],
        subService:null
    },
    {
        id:5,
        image: drenagemCi,
        alt:"Imagem de Drenagem Pós-Cirurgica",
        name:"Drenagem Pós-cirúrgica",
        description:"A drenagem linfática pós-cirúrgica é uma técnica especializada que auxilia no processo de recuperação e regeneração após procedimentos cirúrgicos.Utilizando movimentos leves e direccionados, estimula o sistema linfático favorecendo uma boa cicatrização, alívio de inflamações e redução de edemas, hematomas bem como os desconfortos causados pela acumulação de líquidos.Desta forma, acelera a regeneração dos tecidos, contribuindo para uma recuperação mais rápida e eficaz.",
        professionals:[2],
        subService:null
    },
    {
        id:6,
        image: coach,
        alt:"Imagem de Coaching/Treino Mental",
        name:"Coaching/Treino Mental",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[],
        subService:[
            {
                subServiceId:1,
                image: cLife,
                alt:"Imagem de Life Coaching ",
                name:"Life Coaching ",
                description:`O Life Coaching é um processo de orientação e desenvolvimento pessoal que visa ajudar o indivíduo a alcançar seus objetivos, superar desafios e maximizar seu potencial. Através de sessões estruturadas, o coach trabalha com o cliente para identificar metas, desbloquear crenças limitantes, melhorar habilidades de tomada de decisão e promover mudanças positivas na vida. O objetivo é impulsionar o autoconhecimento, aumentar a motivação e ajudar a criar uma vida mais satisfatória e alinhada com os valores pessoais.`,
                professionals:[1],

            },
            {
                subServiceId:2,
                image: cSport,
                alt:"Imagem de Treino Mental para Atletas ",
                name:"Treino Mental para Atletas ",
                description:`O treino mental para atletas é uma abordagem focada no desenvolvimento das habilidades psicológicas necessárias para melhorar o desempenho esportivo. Ele envolve técnicas como visualização, controle da ansiedade, concentração, estabelecimento de metas e resiliência emocional, ajudando o atleta a lidar com a pressão, superar obstáculos e manter o foco durante a competição. O objetivo é fortalecer a mente, promovendo confiança, motivação e equilíbrio emocional para alcançar o máximo potencial físico e psicológico`,
                professionals:[1],
            },
            {
                subServiceId:3,
                image: cEnea,
                alt:"Imagem de Eneacoaching ",
                name:"Eneacoaching ",
                description:`O Eneacoaching é uma abordagem de coaching baseada na integração dos princípios da metodologia do Eneagrama com as técnicas de coaching. O Eneagrama é um sistema que classifica nove tipos de personalidade, e o Eneacoaching utiliza esse conhecimento para ajudar o indivíduo a compreender melhor seus padrões de comportamento, crenças limitantes e motivações. O objetivo é promover o autoconhecimento, o desenvolvimento pessoal e profissional, e a melhoria das relações interpessoais, através da exploração das forças e desafios de cada tipo de personalidade.`,
                professionals:[1],
            },
            {
                subServiceId:4,
                image: cSaude,
                alt:"Imagem de Coaching de Saúde e Bem-Estar  ",
                name:"Coaching de Saúde e Bem-Estar ",
                description:`O Coaching de Saúde e Bem-Estar é um processo que visa ajudar o indivíduo a alcançar um equilíbrio saudável em todas as áreas da vida, incluindo alimentação, exercício físico, saúde mental e emocional. O coach trabalha com o cliente para estabelecer metas realistas, identificar obstáculos e desenvolver hábitos saudáveis e sustentáveis. O foco é promover mudanças positivas no estilo de vida, melhorar a qualidade de vida e aumentar a energia, motivação e autoestima, incentivando uma abordagem holística e personalizada para o bem-estar.`,
                professionals:[1],
            },
            {
                subServiceId:5,
                image: cMentoria,
                alt:"Imagem de Mentoria",
                name:"Mentoria",
                description:`A mentoria é um processo de desenvolvimento pessoal e profissional no qual um mentor, geralmente alguém com mais experiência e conhecimento em uma área específica, orienta e apoia o mentorado a alcançar seus objetivos. O mentor compartilha sua sabedoria, oferece conselhos, orientações práticas e ajuda o mentorado a enfrentar desafios, aprimorar habilidades e tomar decisões estratégicas. A mentoria é uma relação de aprendizagem e crescimento mútuo, com o objetivo de acelerar o desenvolvimento e alcançar o sucesso em diversas áreas da vida.`,
                professionals:[1],
            },
            {
                subServiceId:6,
                image: cCarreira,
                alt:"Imagem de Coaching de Carreira/Liderança",
                name:"Coaching de Carreira/Liderança",
                description:`O Coaching de Carreira e Liderança é um processo estruturado de desenvolvimento pessoal e profissional que ajuda indivíduos a explorar seu potencial, definir metas claras e alcançar resultados. Com foco em carreira e habilidades de liderança, o coach auxilia o cliente a identificar forças, superar desafios, aprimorar competências estratégicas e tomar decisões alinhadas aos seus objetivos. Essa jornada promove autoconhecimento, aumento de performance e crescimento sustentável, capacitando o cliente a liderar com confiança e avançar em sua trajetória profissional.`,
                professionals:[1],
            },
        ]
    },
    ,
    {
        id:7,
        image: hipo,
        alt:"Imagem de Hipnoterapia ",
        name:"Hipnoterapia ",
        description:"Descubra o equilíbrio entre corpo e mente com os nossos serviços de massagem. Oferecemos um ambiente acolhedor e relaxante, ideal para aliviar o stress, melhorar a circulação e promover o bem-estar geral. As nossas massagens são realizadas por profissionais qualificados, adaptando técnicas às suas necessidades individuais. Seja para relaxamento, alívio de tensões ou revitalização, temos a solução perfeita para si.",
        professionals:[],
        subService:[
            {
                subServiceId:1,
                image: hEmo,
                alt:"Imagem de Processo Terapêutico Emotional Lúmen ",
                name:"Processo Terapêutico Emotional Lúmen",
                description:`
                O Processo Terapêutico Emotional Lúmen é uma abordagem terapêutica que visa promover o equilíbrio emocional e o autoconhecimento, utilizando técnicas para identificar e transformar padrões de comportamento, crenças limitantes e bloqueios emocionais. A metodologia busca iluminar e restaurar a harmonia interior, permitindo ao indivíduo acessar seu potencial máximo, liberar traumas do passado e desenvolver uma maior consciência emocional. Através desse processo, a pessoa é guiada a alcançar uma vida mais equilibrada, com maior bem-estar e clareza emocional.`,
                professionals:[1],

            },
            {
                subServiceId:2,
                image: hAns,
                alt:"Imagem de Processo Terapêutico para Ansiedade e/ou Depressão  ",
                name:"Processo Terapêutico para Ansiedade e/ou Depressão  ",
                description:`O Processo Terapêutico para Ansiedade e/ou Depressão é uma abordagem focada no tratamento desses transtornos emocionais, buscando aliviar os sintomas e promover a recuperação. A terapia envolve técnicas como a reestruturação cognitiva, o enfrentamento de crenças limitantes, a regulação emocional e o desenvolvimento de estratégias de coping. O terapeuta trabalha com o indivíduo para identificar gatilhos, explorar causas subjacentes, melhorar a autoestima e ensinar ferramentas para lidar com o estresse, a negatividade e a falta de motivação, com o objetivo de restaurar o equilíbrio emocional e promover uma vida mais saudável e equilibrada.`,
                professionals:[1],
            },
            {
                subServiceId:3,
                image: hRegre,
                alt:"Imagem de Regressão (Vidas Passadas) ",
                name:"Regressão (Vidas Passadas) ",
                description:`A regressão a vidas passadas é uma técnica terapêutica que busca acessar memórias ou experiências de supostas encarnações anteriores, com o objetivo de compreender padrões de comportamento, traumas ou bloqueios que podem influenciar a vida atual. Durante a sessão, o terapeuta utiliza a hipnose ou outras ferramentas de relaxamento profundo para guiar o indivíduo a reviver esses momentos, visando promover o autoconhecimento, a cura emocional e a liberação de questões não resolvidas. O processo é frequentemente usado como uma forma de ajudar a resolver questões persistentes ou encontrar respostas para desafios atuais.`,
                professionals:[1],
            },
            {
                subServiceId:4,
                image: hCigarro,
                alt:"Imagem de Processo Anti-tabágico.",
                name:"Processo Anti-tabágico.",
                description:`O Processo Anti-tabágico é um tratamento terapêutico que visa ajudar o indivíduo a parar de fumar, por meio de uma abordagem focada na mudança de comportamento, controle da dependência física e emocional, e desenvolvimento de estratégias para evitar recaídas. O processo pode envolver técnicas como aconselhamento, reestruturação cognitiva, apoio emocional, além de métodos como a terapia de reposição de nicotina ou uso de medicamentos, se necessário. O objetivo é promover a cessação do tabagismo de forma sustentável, melhorando a qualidade de vida e prevenindo doenças relacionadas ao uso do cigarro.`,
                professionals:[1],
            },
            {
                subServiceId:5,
                image: hFino,
                alt:"Imagem de Processo Emagrecimento ",
                name:"Processo Emagrecimento ",
                description:`O Processo de Emagrecimento é um tratamento focado na redução de peso de forma saudável e sustentável, levando em consideração aspectos físicos, emocionais e comportamentais. Ele envolve o desenvolvimento de hábitos alimentares equilibrados, prática regular de atividades físicas e o trabalho de fatores emocionais que possam estar relacionados ao comer excessivo ou à dificuldade de manter a disciplina. O processo é personalizado, visando não apenas a perda de peso, mas a promoção de uma mudança duradoura no estilo de vida, visando a saúde e o bem-estar integral.`,
                professionals:[1],
            },
            {
                subServiceId:6,
                image: hTrauma,
                alt:"Imagem de Destraumatização",
                name:"Processo Destraumatização",
                description:`O Processo de Destraumatização é uma abordagem terapêutica que visa ajudar o indivíduo a lidar com e superar traumas emocionais ou psicológicos passados. Utilizando técnicas específicas, como a reprocessamento de memórias traumáticas, a liberação de emoções reprimidas e o fortalecimento de recursos internos, o objetivo é diminuir o impacto negativo do trauma na vida da pessoa. Esse processo busca restaurar o equilíbrio emocional, promover a cura e permitir ao indivíduo seguir em frente, liberando-se das dores do passado e desenvolvendo uma nova perspectiva de vida.`,
                professionals:[1],
            },
            {
                subServiceId:7,
                image: hPisico,
                alt:"Imagem de Psicodrama",
                name:"Processo Psicodrama",
                description:`O Psicodrama é uma abordagem terapêutica que utiliza a dramatização e a ação para explorar e resolver conflitos emocionais, traumas e dilemas pessoais. Através de encenações, o indivíduo pode representar situações do passado ou do presente, revivendo experiências e sentimentos, e encontrando novas formas de entender e lidar com suas questões. O psicodrama envolve o uso de papéis, improvisação e interação com outros participantes ou o terapeuta, promovendo uma expressão mais profunda das emoções e facilitando o autoconhecimento, a cura e a transformação emocional.`,
                professionals:[1],
            },
        ]
    },
    {
        id:8,
        image: reiki,
        alt:"Imagem de Reiki",
        name:"Reiki",
        description:"O Reiki é uma prática terapêutica energética que busca equilibrar e harmonizar o corpo, a mente e o espírito por meio da canalização de energia universal. Durante a sessão, o terapeuta utiliza as mãos, posicionando-as suavemente sobre ou próximo ao corpo do receptor, promovendo relaxamento, redução do estresse, alívio emocional e estímulo ao processo natural de cura.",
        professionals:[2],
        subService:null
    },

]

export default services