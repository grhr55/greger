export const demogame = [

{
    id: 1,
    nickgame: "Jogo-do-Tigre",
    titlegame: "Jogo do Tigre",
    imggame: '/img/Airbrush-IMAGE-ENHANCER-1775136822948-1775136822948.jpg',
    razrab: 'PG Soft',
    slug: "fortune-tiger",
    gamedemo:"https://public.pg-demo.com/demo/?gi=126&lang=pt",
    
    // Технические характеристики
    rtp: "96.81%",
    volatilidade: "Média", // Важно! Показывает частоту выигрышей
    gridslot: "3x3", // Сетка барабанов
    paylines: "5 Linhas", // Линии выплат
    maxwin: "x2500",
    apostamin: "R$ 0.50", // Минимальная ставка (стандарт в Бразилии)
    
    // Описание и фишки
    settinggame: 'Tema chinês clássico com foco no Tigre da Fortuna, um amuleto de prosperidade.',
    poivgame: '20 Janeiro 2022',
    fiagame: "Recurso Tigre da Sorte: aciona re-spins aleatórios até completar uma combinação. Se preencher a tela, o prêmio total é multiplicado por 10x.",
    
    // ЧТО ДОБАВИТЬ ДЛЯ ПОЛНОТЫ КАРТИНЫ:
    
    // 1. Самый дорогой символ (чтобы юзер знал, что ловить)
    topSymbol: "Lingote de Ouro", 
    
    // 2. На чем работает (мобильная оптимизация)
    platform: "Mobile First (iOS & Android)", 
    
    // 3. Быстрый вердикт (почему стоит играть)
    veredito: "O slot mais popular do Brasil em 2026 pela sua simplicidade e rodadas rápidas via PIX.",
    
    // 4. Минуты (маркетинговая фишка для бразильцев)
    tip: "Funciona 24/7 via RNG oficial, sem horários fixos para pagar." ,
    
    strategy_status: {
        intensity: "78%",
        payout_volume: "14.502",
        hot_window: "12"
    },
    steps: [
        { 
            title: "Fase de Sondagem", 
            desc: "Realize 10 giros manuais com aposta mínima. Turbo OFF.", 
            highlight: "Turbo OFF",
            color: "hover:border-[#FEDD00]/50" 
        },
        { 
            title: "Estímulo de Frequência", 
            desc: "Ative o Modo Turbo por 5 giros e suba a aposta em 2x.", 
            highlight: "Modo Turbo",
            color: "hover:border-[#009739]/50" 
        },
        { 
            title: "O Pulo do Tigre", 
            desc: "Mantenha o Turbo ON и use a função Auto (10 giros).", 
            highlight: "Turbo ON",
            color: "border-[#009739]/30" 
        }
    ],
    signals: [
        { icon: "🐯", title: "Rugido Falso", desc: "Indica acúmulo de prêmio. Aumente a bet." },
        { icon: "💰", title: "Saco de Ouro", desc: "O multiplicador 10x costuma cair em até 5 giros." }
    ]
  },
  {
    id: 2,
    nickgame: "Sugar-Rush-1000",
    titlegame: "Sugar Rush 1000",
    imggame: '/img/Airbrush-IMAGE-ENHANCER-1775146201945-1775146201945.jpg', // Проверь путь к картинке
    razrab: 'Pragmatic Play',
    slug: "sugar-rush-1000",
    gamedemo:" https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=pt&cur=USD&websiteUrl=https%3A%2F%2Fclienthub.pragmaticplay.com%2F&gcpif=2273&gameSymbol=vs20sugarrushx&jurisdiction=99&lobbyUrl=https://clienthub.pragmaticplay.com/slots/game-library/",
    
    // Технические характеристики
    rtp: "96.53%",
    volatilidade: "Alta", // Очень высокая волатильность
    gridslot: "7x7", 
    paylines: "Cluster Pay", // Платит кластерами
    maxwin: "x25.000", // Огромный потенциал
    apostamin: "R$ 0.40", 
   
    
    // Описание и фишки
    settinggame: 'Um mundo de doces e multiplicadores que podem chegar a x1024 em cada posição.',
    poivgame: '15 Março 2024',
    fiagame: "Multiplicadores de Posição: Quando um símbolo explode duas vezes no mesmo lugar, um multiplicador é adicionado, dobrando a cada explosão até 1024x.",
    
    // Дополнительно
    topSymbol: "Pirulito Rosa (Scatter)", 
    platform: "Mobile & Desktop", 
    veredito: "A versão turbinada do clássico, favorita dos brasileiros que buscam prêmios explosivos acima de x10.000.",
    tip: "Os multiplicadores não resetam durante as Rodadas Grátis, foque no bônus!" 
},
{
    id: 3,
    nickgame: "Roleta-Brasileira",
    titlegame: "Roleta Brasileira Live",
    imggame: '/img/SpeedRoletaBrasileira.webp', 
    razrab: 'Playtech / Evolution',
    slug: "roleta-brasileira",
    gamedemo: "https://bgaming-network.com/play/EuropeanRoulette/FUN?server=demo&lang=pt", // Замени на рабочую ссылку демо
    
    // Технические характеристики
    rtp: "97.30%", // Стандарт для европейской рулетки
    volatilidade: "Variável", 
    gridslot: "Roda Europeia", 
    paylines: "36 Números + 0", 
    maxwin: "35:1 (Direto)", 
    apostamin: "R$ 0.50", 
    
    // Описание и фишки
    settinggame: 'A autêntica experiência de cassino com crupiês que falam português e ambiente sofisticado.',
    poivgame: 'Sempre disponível',
    fiagame: "Apostas de Pista (Racetrack): Permite fazer apostas complexas como Vizinhos do Zero, Órfãos и Tiers de Cilindro com um clique.",
    
    // Дополнительно
    topSymbol: "Número Pleno (35x)", 
    platform: "Mobile, Desktop & Tablet", 
    veredito: "A favorita dos grandes apostadores brasileiros. Interface 100% em português com estatísticas em tempo real.",
    tip: "Acompanhe os 'Números Quentes' (Hot Numbers) para identificar tendências antes de apostar." 
},
{
    id: 4,
    nickgame: "Jogo-do-Coelho",
    titlegame: "Fortune Rabbit",
    imggame: '/img/Airbrush-IMAGE-ENHANCER-1775154469334-1775154469334.jpg', // Проверь путь к картинке с кроликом
    razrab: 'PG Soft',
    slug: "fortune-rabbit",
    gamedemo: "https://public.pg-demo.com/demo/?gi=1543462&lang=pt", // Официальная демо-ссылка PG Soft для кролика
    
    // Технические характеристики
    rtp: "96.75%", // Чуть ниже, чем у Тигра, но все равно отлично
    volatilidade: "Média", 
    gridslot: "3-4-3 (Inovador)", // Уникальная сетка барабанов
    paylines: "10 Linhas", // В два раза больше линий, чем у Тигра
    maxwin: "x5000", // Потенциал в 2 раза выше, чем у Тигра!
    apostamin: "R$ 0.50", 
    
    // Описание и фишки
    settinggame: 'O Coelho da Fortuna traz prosperidade e multiplicadores rápidos em uma grade única.',
    poivgame: '10 Maio 2023',
    fiagame: "Rodadas de Fortuna: Aciona aleatoriamente 8 rodadas grátis onde apenas símbolos de prêmio (dinheiro) aparecem, garantindo ganhos explosivos.",
    
    // Дополнительно
    topSymbol: "Coelho de Ouro (Wild)", 
    platform: "Mobile First (iOS & Android)", 
    veredito: "O sucessor do Fortune Tiger com potencial de ganho dobrado (x5000) e mecânica de bônus mais frequente.",
    ip: "Funciona 24/7 via RNG oficial, ideal para rodadas rápidas via PIX." 
},
{
    id: 5,
    nickgame: "Mines-Grátis",
    titlegame: "Mines Spribe",
    imggame: '/img/mines.webp', // Фото с минами и кристаллами
    razrab: 'Spribe',
    slug: "mines",
    gamedemo: "https://turbo.spribegaming.com/mines?currency=USD&operator=demo&jurisdiction=CW&lang=PT&return_url=https:%2F%2Fspribe.co%2Fgames&user=67327&token=z1GcNqtst7hmMn2xeO8vrEAtVHi2Vikz", 
    
    // Технические характеристики
    rtp: "97.00%", // Один из самых высоких в индустрии
    volatilidade: "Ajustável", // Игрок сам выбирает риск количеством мин
    gridslot: "5x5 (25 Casas)", 
    paylines: "Multiplicadores Progressivos", 
    maxwin: "x10.000+", 
    apostamin: "R$ 1.00", 
    
    // Описание и фишки
    settinggame: 'O desafio definitivo de estratégia: encontre as estrelas e fuja das bombas para multiplicar seu saldo.',
    poivgame: 'Lançado em 2021',
    fiagame: "Cashout Instantâneo: Você decide quando parar. A cada estrela encontrada, seu prêmio aumenta, mas o risco de explodir também!",
    
    // Дополнительно
    topSymbol: "Diamante (Estrela)", 
    platform: "Ultra Light (Funciona em qualquer celular)", 
    veredito: "O jogo de 'explosão' mais estratégico do Brasil. Baixo consumo de dados e alta taxa de acerto.",
    tip: "Comece com 3 minas para um equilíbrio perfeito entre risco e retorno." 
},{
    id: 6,
    nickgame: "Lucky-Jet",
    titlegame: "Lucky Jet 1win",
    imggame: '/img/Lucky-Jet.jpg', // Фото Сэма на реактивном ранце
    razrab: '1win Games',
    slug: "lucky-jet",
    gamedemo: "https://1play.gamedev-tech.cc/lucky_grm/vgs/?b=18b25290aab013c253aacac70cfef9f502251d9371f0164d83bb093b8825c999f820d499845c2bb0656878852dd53f2f423ade68c6e2916242064d1e09c4d2315e3ea85fff6f065c5e9eb85635bffa9f5779a271588bb5b8f5348d024f694dccbff9d152f9382d9473819b4394c967ae67d58fe9a78f4531e63b9758116184a518ecda08fdd2dc7d002373ca422a932cb8704a2bb4347822f8eecfe9290f64d45cd5885f19fda3893124778d1c9766c5be3e1b87e2f6dbdcb4.fc2e4bcabeba12e0c241705c559bfa33.077dee8d-c923-4c02-9bee-757573662e69&language=pt&pid=1win&pik=019aa5d3-290c-7469-b133-89d1948a968c", // Замени на актуальную демо-ссылку
    
    // Технические характеристики
    rtp: "97.00%", 
    volatilidade: "Dinâmica", // Зависит от того, когда игрок нажмет Cashout
    gridslot: "Crash Game", 
    paylines: "Multiplicador Infinito", 
    maxwin: "x10.000+", 
    apostamin: "R$ 1.00", 
    
    // Описание и фишки
    settinggame: 'Acompanhe o Joe na sua jornada espacial. Quanto mais alto ele voa, maior o seu multiplicador. Mas cuidado: ele pode voar para longe a qualquer momento!',
    poivgame: 'Lançado em 2021',
    fiagame: "Auto-Cashout: Defina um multiplicador alvo e o jogo retira sua aposta automaticamente assim que o Joe atingir a marca, garantindo sua estratégia.",
    
    // Дополнительно
    topSymbol: "Joe (Lucky Joe)", 
    platform: "Mobile & Desktop (Super Fast)", 
    veredito: "O jogo de crash mais jogado de 2026. Simples, rápido e com uma comunidade gigante no Brasil.",
    tip: "A estratégia 1.5x é a mais popular entre os brasileiros para ganhos constantes." 
},
{
    id: 7,
    nickgame: "Jogo-do-Touro",
    titlegame: "Fortune Ox",
    imggame: '/img/Airbrush-IMAGE-ENHANCER-1775155893823-1775155893823.jpg', // Фото золотого быка
    razrab: 'PG Soft',
    slug: "fortune-ox",
    gamedemo: "https://m.pg-demo.com/98/index.html?&ot=ca7094186b309ee149c55c8822e7ecf2&l=pt&btt=2&or=04wxexmg=7inddzsc4=gsq&__hv=2fMEUCIDA8vaFNaorBGxV%2Bp2N0BDVIBLeZkxrM5xj42j8x9P7cAiEA6cMtxWIZOfgIq1m9KM8gfmfjN0Y6%2Bk%2FXBpN3gUBlcPA%3D&__sv=010601azkdnuO6ltZVmUGtzsn2ffZ6gHyGjSKF2-IwTQIlRjo", // Официальная ссылка демо Быка
    
    // Технические характеристики
    rtp: "96.75%", 
    volatilidade: "Média", 
    gridslot: "3-4-3 (Especial)", 
    paylines: "10 Linhas", 
    maxwin: "x2000", 
    apostamin: "R$ 0.50", 
    
    // Описание и фишки
    settinggame: 'O Touro da Fortuna representa a força e a riqueza. Um slot vibrante onde o Touro pode ativar ganhos em qualquer rodada.',
    poivgame: 'Lançado em 2021',
    fiagame: "Recurso Touro da Fortuna: O Touro pode ser ativado aleatoriamente durante qualquer giro. Os rolos 1 и 3 ficam idênticos, e você ganha re-spins grátis até conseguir uma vitória!",
    
    // Дополнительно
    topSymbol: "Lingote de Ouro (Wild)", 
    platform: "Mobile First (iOS & Android)", 
    veredito: "O preferido dos jogadores que buscam o multiplicador de x10 ao preencher toda a tela com o mesmo símbolo.",
    tip: "O modo Turbo ajuda a ativar o Recurso do Touro mais rapidamente em sessões curtas." 
},{
    id: 8,
    nickgame: "O-Velho-do-Raio",
    titlegame: "Gates of Olympus",
    imggame: '/img/images (8) (1).jpeg', // Фото Зевса с молнией
    razrab: 'Pragmatic Play',
    slug: "gates-of-olympus",
    gamedemo: "https://demogamesfree.pragmaticplay.net/hub-demo/openGame.do?lang=pt&cur=USD&websiteUrl=https%3A%2F%2Fslotslib.com&gameSymbol=vs20olympx&jurisdiction=99", 
    
    // Технические характеристики
    rtp: "96.50%", 
    volatilidade: "Alta", // Высокая волатильность — редкие, но огромные выигрыши
    gridslot: "6x5", 
    paylines: "Pagamento em qualquer lugar", 
    maxwin: "x5.000", 
    apostamin: "R$ 0.40", 
    
    // Описание и фишки
    settinggame: 'Entre no reino de Zeus. Os símbolos pagam em qualquer posição na tela e multiplicadores de até 500x podem cair do céu a qualquer momento.',
    poivgame: 'Lançado em 2021',
    fiagame: "Queda de Símbolos (Tumble): Símbolos vencedores desaparecem e novos caem, permitindo vitórias consecutivas no mesmo giro. Zeus pode lançar raios com multiplicadores acumulativos!",
    
    // Дополнительно
    topSymbol: "Coroa de Ouro", 
    platform: "Desktop & Mobile Optimized", 
    veredito: "Considerado por muitos o melhor slot da Pragmatic. O sistema de multiplicadores somados nas rodadas grátis é o que atrai os grandes ganhadores.",
    tip: "As Rodadas Grátis são o segredo: os multiplicadores não resetam e se acumulam até o final do bônus!" 
},
{
    id: 9,
    nickgame: "Jogo-do-Dragão",
    titlegame: "Dragon Hatch",
    imggame: '/img/images (9).jpeg', // Фото яиц дракона или Королевы
    razrab: 'PG Soft',
    slug: "dragon-hatch",
    gamedemo: "https://public.pg-demo.com/demo/?gi=57&lang=pt", // Официальная ссылка демо Дракона
    
    // Технические характеристики
    rtp: "96.83%", 
    volatilidade: "Média", 
    gridslot: "5x5 (Cascata)", 
    paylines: "Cluster Pay (10+ símbolos)", 
    maxwin: "x15.000", // Очень высокий потенциал для PG Soft!
    apostamin: "R$ 0.40", 
    
    // Описание и фишки
    settinggame: 'Entre na caverna profunda onde ovos de dragão aguardam para chocar. Colete símbolos para despertar os 4 dragões elementares.',
    poivgame: 'Lançado em 2019',
    fiagame: "Barra de Coleta: Cada explosão de símbolos preenche a barra. 10 símbolos despertam o Dragão da Terra, 30 o da Água, 50 o do Fogo e 70 a Rainha Dragão, que transforma o tabuleiro!",
    
    // Дополнительно
    topSymbol: "Olho da Rainha Dragão", 
    platform: "Totalmente Mobile Optimized", 
    veredito: "Diferente de tudo! É um jogo de paciência e estratégia onde uma única rodada pode durar minutos com combos infinitos.",
    tip: "A magia acontece quando você limpa o tabuleiro. Foque em sequências longas para chegar à Rainha." 
},
{
    id: 10,
    nickgame: "Aviator-Grátis",
    titlegame: "Aviator Spribe",
    imggame: '/img/aviator.webp', // Фото красного самолета
    razrab: 'Spribe',
    slug: "aviator",
    gamedemo: "https://aviator-demo.spribegaming.com/?currency=USD&operator=demo&jurisdiction=CW&lang=EN&return_url=https%3A%2F%2Fspribe.co%2Fgames&user=48979&token=Z3lWU00TVE6PknBTGMoqLKKECg3i6iRa", 
    
    // Технические характеристики
    rtp: "97.00%", 
    volatilidade: "Ajustável", 
    gridslot: "Crash Game", 
    paylines: "Multiplicador Crescente", 
    maxwin: "x10.000+", 
    apostamin: "R$ 1.00", 
    
    // Описание и фишки
    settinggame: 'O jogo do aviãozinho que conquistou o Brasil. Aposte e veja o multiplicador subir, mas retire o dinheiro antes que o avião voe para longe!',
    poivgame: 'Lançado em 2019',
    fiagame: "Aposta Dupla: Você pode fazer duas apostas independentes na mesma rodada. Saia com um multiplicador baixo em uma para garantir o lucro e deixe a outra voar alto!",
    
    // Дополнительно
    topSymbol: "Avião Vermelho", 
    platform: "Ultra Leve (Roda em 3G/4G)", 
    veredito: "O rei dos Crash Games. Interface minimalista com histórico de rodadas e chat em tempo real.",
    tip: "A estratégia de 1.20x é excelente para iniciantes que buscam consistência no PIX." 
}

]