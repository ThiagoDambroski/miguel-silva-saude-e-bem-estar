import React from 'react'
import message from "../assets/services/massage.jpg"
import osteopatia from "../assets/services/Osteopatia.jpg"
import tratamento from "../assets/services/tratramento.jpg"
import drenagem from "../assets/services/drenagem.jpg"
import drenagemCi from "../assets/services/drenagemCi.jpg"
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
import mKob from "../assets/services/mkob.jpg"
import mVela from "../assets/services/mvela.jpg"
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
        professionals:[1,2,3],
        subService:[
            {
                subServiceId:1,
                image: mTerapeu,
                alt:"Imagem de Terapêutica",
                name:"Massagem Terapêutica",
                description:`É um tipo de massagem que utiliza técnicas específicas profundas que procuram aliviar dores musculares, tensões e desconfortos no corpo. 
                Este é o tipo de massagem indicado para tratar de lesões específicas nos músculos, tendões, ligamentos e/ou nervos.`,
                professionals:[1,2,3],

            },
            {
                subServiceId:2,
                image: mSport,
                alt:"Imagem de Massagem Desportiva",
                name:"Massagem Desportiva",
                description:`É o tipo de massagem voltada para a prevenção e recuperação de lesões em atletas e outros praticantes de atividades físicas. 
                Envolvendo um conjunto de movimentos harmoniosos e profundos, alivia tensões musculares, melhora a circulação sanguínea, reduz o risco de lesões e acelera a recuperação, proporcionando assim um melhor desempenho desportivo.
                `,
                professionals:[1,3],
            },
            {
                subServiceId:3,
                image: message,
                alt:"Imagem de Massagem de Relaxamento",
                name:"Massagem de Relaxamento",
                description:`É um tipo de massagem que utiliza uma técnica suave e envolvente que tem como objetivo aliviar o stress, promover o relaxamento e o bem-estar. 
                Através de movimentos lentos, envolventes e fluidos, estimula a circulação sanguínea, relaxa os músculos tensos e proporciona uma sensação de calma e tranquilidade, ajudando a reduzir a ansiedade e a melhorar o equilíbrio emocional.
                `,
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
                description:`É uma técnica terapêutica que utiliza pedras aquecidas para relaxar os músculos e promover uma sensação profunda de tranquilidade. As pedras, geralmente de basalto, são posicionadas em pontos específicos do corpo, enquanto o terapeuta realiza movimentos suaves para aliviar tensões, melhorar a circulação e reduzir o stress, proporcionando um relaxamento intenso e restaurador.`,
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
                description:`É uma técnica terapêutica suave e segura, adaptada às necessidades das grávidas, procurando aliviar desconfortos comuns durante a gravidez, como dores nas costas, inchaço e tensões musculares. Com movimentos leves e cuidadosos, melhora a circulação, reduz o stress, promove o relaxamento e contribui para o bem-estar geral, respeitando as condições e limitações do corpo durante a gestação.`,
                professionals:[2,3],
            },
            {
                subServiceId:8,
                image: mKob,
                alt:"Imagem de Massagem facial asiática KOBIDO ",
                name:"Massagem facial asiática KOBIDO ",
                description:`A massagem facial asiática Kobido é uma técnica tradicional japonesa que combina movimentos rápidos e suaves para tonificar, relaxar e rejuvenescer a pele.
                Utiliza acupressão, alongamentos faciais e massagens circulares para estimular a circulação sanguínea, aliviar tensões faciais, reduzir linhas de expressão e melhorar a elasticidade da pele, proporcionando um efeito lifting natural e uma aparência mais jovem e radiante.
                `,
                professionals:[2],
            },
            {
                subServiceId:9,
                image: mVela,
                alt:"Imagem de Candle Massaje ( Velas aromáticas ) ",
                name:"Massagem Candle Massaje ( Velas aromáticas ) ",
                description:`A massagem Candle Massage, ou massagem com velas aromáticas, utiliza velas especiais que derretem em óleos quentes e nutritivos, proporcionando uma experiência sensorial única. Durante o tratamento, o terapeuta derrama o óleo morno sobre o corpo, aplicando movimentos suaves e relaxantes que ajudam a aliviar tensões, hidratar a pele e promover o relaxamento profundo. O aroma das velas também contribui para o alívio do stress e para uma sensação de bem-estar.`,
                professionals:[2],
            },
            {
                subServiceId:10,
                image: mshiatstu,
                alt:"Imagem de Shiatsu",
                name:"Massagem Shiatsu ",
                description:`Esta terapia alia o tratamento da estrutura física do corpo, com a ativação dos seus pontos energéticos, visando melhorar o seu funcionamento e saúde. 

                É uma massagem utilizando a pressão dos dedos, os polegares, as mãos, as palmas das mãos, os cotovelos e os joelhos para alongar o corpo, pressionar os pontos adequados (“tsubos”). 

                Os pontos onde ocorrem essa pressão são canais de energia do corpo (meridianos), que estão presentes, por exemplo, nas articulações, nos músculos e nos nervos. 
                Os seus benefícios desta terapia são promover a melhoria: 

                -Da pele;
                -Dos músculos;
                -Do sistema circulatório;
                -Do aparelho digestivo;
                -Da parte óssea;
                -Do sistema endócrino;
                -Do sistema nervoso;
                -Do aparelho respiratório;`,
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
        description:`É um acompanhamento personalizado de orientação e de desenvolvimento pessoal que visa ajudar as pessoas no seu autoconhecimento, a alcançar o seus objetivos, a superar desafios e a maximizar seu potencial. 
        Através de sessões estruturadas, procura-se a identificação de metas, desbloquear medos e limitações, melhorar a capacidade de tomada de decisão e promover mudanças positivas na vida. 

        Também tem como objetivo impulsionar a auto-estima, aumentar a motivação e ajudar a criar uma vida mais satisfatória e alinhada com os valores pessoais de cada pessoa. 

        `,
        professionals:[1],
        subService:[
            {
                subServiceId:1,
                image: cLife,
                alt:"Imagem de Life Coaching ",
                name:"Life Coaching ",
                description:`É um processo de orientação e desenvolvimento pessoal que visa ajudar as pessoas no seu autoconhecimento, a alcançar o seus objetivos, a superar desafios e a maximizar seu potencial. 
                Através de sessões estruturadas, procura-se a identificação de metas, desbloquear medos e limitações, melhorar a capacidade de tomada de decisão e promover mudanças positivas na vida. 

                Também tem como objetivo impulsionar a auto-estima, aumentar a motivação e ajudar a criar uma vida mais satisfatória e alinhada com os valores pessoais de cada pessoa. 
                `,
                professionals:[1],

            },
            {
                subServiceId:2,
                image: cSport,
                alt:"Imagem de Treino Mental para Atletas ",
                name:"Treino Mental para Atletas ",
                description:`
                É um tipo de Coaching especializado no desenvolvimento das habilidades psicológicas necessárias para melhorar o desempenho desportivo. 
                Além do processo de autoconhecimento e reforço mental, também envolve técnicas como a visualização, controlo da ansiedade, concentração, estabelecimento de metas e resiliência emocional, ajudando assim o atleta a lidar com a pressão, a superar obstáculos e a manter o foco. 
                O objetivo é fortalecer a mente, promover a confiança, a motivação e equilíbrio emocional para alcançar o máximo potencial físico e psicológico e ter uma carreira mais sustentável. 
                `,
                professionals:[1],
            },
            {
                subServiceId:3,
                image: cEnea,
                alt:"Imagem de Eneacoaching ",
                name:"Eneacoaching ",
                description:`É uma abordagem de coaching baseada na integração dos princípios da metodologia do Eneagrama com as técnicas de coaching. 
                O Eneagrama é um sistema que classifica o tipo de personalidade da pessoa e o Eneacoaching utiliza esse conhecimento para ajudar o indivíduo a compreender melhor o seus padrões de comportamento, as suas motivações e os seus desafios internos. 
                O objetivo é promover o autoconhecimento, o desenvolvimento pessoal e profissional e a melhoria das relações interpessoais, através da exploração das forças e desafios de cada tipo de personalidade.
                `,
                professionals:[1],
            },
            {
                subServiceId:4,
                image: cSaude,
                alt:"Imagem de Coaching de Saúde e Bem-Estar  ",
                name:"Coaching de Saúde e Bem-Estar ",
                description:`
                Coaching de Saúde e Bem-Estar 
                É um processo que visa ajudar o indivíduo a alcançar um equilíbrio na sua vida de forma a promover a sua saúde mental e emocional. 
                Começando com um diagnóstico personalizado, estabelecem-se metas realistas de forma a alcançar hábitos saudáveis e sustentáveis. 
                O foco é promover mudanças positivas no estilo de vida, melhorar a qualidade de vida e aumentar a energia, motivação e autoestima, incentivando uma abordagem holística e personalizada para o bem-estar.
                `,
                professionals:[1],
            },
            {
                subServiceId:5,
                image: cMentoria,
                alt:"Imagem de Mentoria",
                name:"Mentoria",
                description:`É um processo de desenvolvimento pessoal e profissional no qual um mentor, geralmente alguém com mais experiência e conhecimento numa área específica, orienta e apoia o mentorando a alcançar o seus objetivos. 
                O mentor partilha a sua sabedoria, oferece conselhos, orientações práticas e ajuda o mentorado a enfrentar desafios, aprimorar habilidades e a tomar decisões estratégicas, acelerando o sucesso do mentorando ao evitar ter de "criar a roda do zero".

                Temos Mentoria referente aos temas de todos os serviços de Coaching que oferecemos.`,
                professionals:[1],
            },
            {
                subServiceId:6,
                image: cCarreira,
                alt:"Imagem de Coaching de Carreira/Liderança",
                name:"Coaching de Carreira/Liderança",
                description:`É um processo estruturado de desenvolvimento pessoal e profissional, ajudando a pessoa a ter um rumo e uma estratégia para a sua carreira e/ou para o seu projeto profissional, adquirindo competências de liderança e de Alta-performance profissional. 

                Identificando forças, superando desafios, aprimorando competências estratégicas e tomando decisões alinhadas com os valores e objetivos, é um acompanhamento que promove o autoconhecimento, o crescimento sustentável e, assim, uma carreira saudável e com maior potencial para a realização e o sucesso. 

                `,
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
        description:`É uma terapia que acede ao inconsciente do paciente através de um estado profundo de consciência com o objetivo de explorar e de tratar o seu inconsciente de forma a potenciar o seu equilíbrio físico, mental, emocional e até espiritual.
                Trata problemas como:
                -Bloqueios emocionais;
                -Traumas;
                -Tristeza;
                -Falta de confiança;
                -Fadiga mental/emocional;
                -Vícios (tabaco p.e);
                -Medos;
                -Problemas amorosos;
                -Stress;
        Além de ajudar a resolver estes problemas e tantos mais, esta é uma óptima terapia para estimular o bem-estar, autoconhecimento e relaxamento. 

        `,
        professionals:[1],
        subService:[
            {
                subServiceId:1,
                image: hEmo,
                alt:"Imagem de Processo Terapêutico Emotional Lúmen ",
                name:"Processo Terapêutico Emotional Lúmen",
                description:`
                É um processo sustentado de Hipnoterapia que visa promover o equilíbrio emocional e o autoconhecimento, utilizando técnicas para identificar e transformar padrões de comportamento, crenças limitadoras e bloqueios emocionais. 
                A metodologia busca iluminar e restaurar a harmonia interior, permitindo libertar traumas do passado e desenvolver uma maior consciência emocional. 
                `,
                professionals:[1],

            },
            {
                subServiceId:2,
                image: hAns,
                alt:"Imagem de Processo Terapêutico para Ansiedade e/ou Depressão  ",
                name:"Processo Terapêutico para Ansiedade e/ou Depressão  ",
                description:`É um processo com bases do Emotional Lumen aliado a mais técnicas específicas numa abordagem focada ao tratamento da Ansiedade e da Depressão, procurando aliviar os sintomas, promover a recuperação e uma vida mais saudável e equilibrada. `,
                professionals:[1],
            },
            {
                subServiceId:3,
                image: hRegre,
                alt:"Imagem de Regressão (Vidas Passadas) ",
                name:"Regressão (Vidas Passadas) ",
                description:`É uma técnica terapêutica que promove uma experiência que leva a pessoa a fazer uma viagem no seu subconsciente, reavivando memórias do passado e/ou vivendo uma projecção para onde o subconsciente a direcciona.
                Existem sessões em que se atingem outros tempos e outros lugares, onde há quem acredite ser uma vida passada.

                O objetivo, além de reavivar memórias, é encontrar respostas que a pessoa procure encontrar que podem estar profundas no subconsciente.`,
                professionals:[1],
            },
            {
                subServiceId:4,
                image: hCigarro,
                alt:"Imagem de Processo Anti-tabágico.",
                name:"Processo Anti-tabágico.",
                description:`É um tratamento terapêutico que visa ajudar a pessoa a deixar de fumar através de técnicas como a Hipnoterapia e outras técnicas complementares de Coaching e PNL.`,
                professionals:[1],
            },
            {
                subServiceId:5,
                image: hFino,
                alt:"Imagem de Processo Emagrecimento ",
                name:"Processo Emagrecimento ",
                description:`É um tratamento através da hipnoterapia que ajuda a pessoa a emagrecer adquirindo mais força de vontade para promover hábitos saudáveis e para diminuir a dependência emocional pelos alimentos.`,
                professionals:[1],
            },
            {
                subServiceId:6,
                image: hTrauma,
                alt:"Imagem de Destraumatização",
                name:"Processo Destraumatização",
                description:`É uma abordagem terapêutica que visa ajudar a pessoa a superar e a ressignificar traumas emocionais e/ou psicológicos. Utiliza técnicas específicas de desbloqueio emocional e de destraumatização. `,
                professionals:[1],
            },
            {
                subServiceId:7,
                image: hPisico,
                alt:"Imagem de Psicodrama",
                name:"Processo Psicodrama",
                description:`É uma abordagem terapêutica que utiliza a dramatização a ação e a memória para explorar e resolver conflitos emocionais, traumas e dilemas pessoais. 
                Através de encenações, o indivíduo pode revisitar situações do passado ou do presente, revivendo experiências e sentimentos, encontrando novas formas de entender e de libertar a tensão emocional associada aos seus problemas.`,
                professionals:[1],
            },
        ]
    },
    {
        id:8,
        image: reiki,
        alt:"Imagem de Reiki",
        name:"Reiki",
        description:"Prática terapêutica energética que busca equilibrar e harmonizar o corpo, a mente e o espírito através da canalização de energia em pontos específicos (Chakras).Durante a sessão, o terapeuta utiliza as mãos, posicionando-as suavemente sobre ou junto ao corpo do receptor, promovendo relaxamento, redução do stress, alívio emocional, alinhamento energético e estímulo do processo natural de cura.",
        professionals:[2],
        subService:null
    },

]

export default services