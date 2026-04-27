
export const leaders = [
    {
    id:1,
    title: "1win",
    affiUrl:'https://rt.pornhub.com/', 
    description: "Líder em bônus agressivos e jogos exclusivos como Lucky Jet. Uma escolha sólida para quem busca promoções diárias e giros grátis.",
    bonus: "Bônus de 500% no primeiro depósito.",
    fotopart:"/img/photo_2026-04-01_20-03-50.jpg",
    logo: "/img/photo_2026-04-01_15-08-48-removebg-preview.png",
    rating: 5.0,
    vozrast:"2018",
    colgame:"12 000",
    pixrab:"Instantâneo",
    ganename:'roceta',
    tag: "Grandes Odds",
    color: "from-yellow-500 to-amber-600",
    logoStyle: "hue-rotate-[90deg] brightness-[1.2] drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]",
    cardStyle: "border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]",
    bernd:"Você provavelmente já ouviu falar da 1win. Hoje, ela é uma das marcas que mais crescem, combinando uma casa de apostas com um cassino online completo",
    kompania: `1win Brasil: O Ecossistema que Redefiniu o Jogo em 2026

Você provavelmente já ouviu falar da 1win. Hoje, ela não é apenas uma marca, mas o fenômeno que mais cresce no Brasil, combinando uma casa de apostas de elite com um cassino online brutalmente completo. 

Da FirstBet ao Topo do Mundo: Uma História de Sucesso
Lançada em 2016 como FirstBet, a marca explodiu de verdade em 2018 após um "rebrand" histórico. A 1win não apenas mudou o nome; ela reconstruiu do zero todo o design e a mecânica de jogo. Hoje, opera com licença internacional de Curaçao e se tornou um ecossistema gigante onde a diversão não tem limites.

O que diferencia a 1win da concorrência?
Canivete Suíço do iGaming: A 1win tem TUDO. De apostas clássicas em futebol e eSports a milhares de slots licenciados. Além disso, conta com jogos exclusivos que você só encontra aqui, como o famosíssimo Lucky Jet e o Tiger.
A Política de Bônus mais Agressiva: Eles não brincam em serviço. O pacote de boas-vindas de 500% no primeiro depósito é, sem dúvida, o empurrão mais forte do mercado para você começar com a banca cheia.
Tecnologia de Ponta: Tanto o site quanto os apps iOS/Android voam. Interface intuitiva, sem menus confusos e com carregamento instantâneo.
Diferencial Único: 1win TV. Já pensou em ter um cinema online dentro do cassino? Usuários com saldo positivo assistem a lançamentos de filmes em alta qualidade, sem anúncios, direto na plataforma. É entretenimento total.
Pagamentos na Velocidade da Luz: Suporte total para PIX, cartões e criptomoedas, garantindo que seu dinheiro entre e saia com total confidencialidade e rapidez.

O que você precisa saber Ponto de Atenção:
A 1win é uma plataforma offshore internacional. Isso é uma vantagem enorme para quem busca liberdade, já que não há deduções fiscais automáticas sobre seus lucros. É o lugar perfeito para o jogador que valoriza cada centavo do seu prêmio, operando com total transparência e segurança global.`,

plis1:"⚡ Depósitos via PIX extremamente rápidos",
plis2:"🎰 Grande catálogo de jogos (slots, crash, live casino)",
plis3:"📱 App e site muito leves e responsivos",
plis4:"💰 Bônus de boas-vindas alto para novos usuários",
plis5:"🌍 Aceita criptomoedas e múltiplos métodos de pagamento",
plis6:"🎮 Possui jogos exclusivos e esportes + eSports",

minus1:'📌 Plataforma offshore (licença internacional, não local)',
minus2:'⏳ Alguns bônus possuem regras de rollover altas',
minus3:'🔐 Pode exigir verificação KYC para saques maiores',
minus4:'🌐 Sites espelho podem confundir usuários em alguns países',
minus5:'📉 Promoções variam muito por região',

withdrawal: {
  methods: ["PIX", "Cartões", "E-wallets", "Criptomoedas"],

  processing: [
    { label: "PIX", val: "Instantâneo – 1h" },
    { label: "Cartões", val: "1–24h" },
    { label: "Cripto", val: "10min – 12h" },
    { label: "E-wallets", val: "até 24h" }
  ],

  currencies: {
    fiat: ["BRL","USD","EUR","RUB","UAH","KZT","TRY","INR"],
    crypto: ["USDT (TRC20)","USDT (ERC20)","BTC","ETH","TRX","LTC","XRP"]
  }
},
withdrawalTerms: {
  general: [
    "Os saques podem exigir verificação de identidade (KYC) antes da primeira retirada ou em valores altos.",
    "O tempo de processamento depende do método de pagamento escolhido e da verificação interna da plataforma.",
    "Alguns métodos podem não estar disponíveis em todas as regiões."
  ],

  rules: [
    "O valor mínimo e máximo de saque varia conforme o método e o status da conta.",
    "Promoções e bônus podem exigir rollover antes do saque ser liberado.",
    "Saques devem ser feitos utilizando o mesmo método usado para depósito (quando aplicável).",
    "A plataforma pode solicitar documentos adicionais para segurança (AML/KYC)."
  ],

  delays: [
    "Podem ocorrer atrasos em horários de alta demanda ou durante verificações de segurança.",
    "Transferências bancárias podem levar mais tempo devido a intermediários financeiros.",
    "Criptomoedas dependem da rede blockchain e podem variar conforme congestionamento."
  ],

  notes: [
    "PIX geralmente é o método mais rápido disponível no Brasil.",
    "Carteiras digitais tendem a ser mais rápidas que cartões bancários.",
    "Todos os prazos são estimativas e podem variar conforme a operadora."
  ]
},
fotoreger:'/img/photo_2026-04-18_12-49-54.jpg',
pravilareg: {
  fast: {
    title: "⚡ Método 1 – Registro rápido",
    desc: "Este é o método principal e mais seguro. A conta é vinculada imediatamente aos seus dados, reduzindo riscos em saques grandes.",
    
    steps: [
      {
        label: "📧 Email e Telefone",
        val: "Informe um e-mail válido e número de celular ativo."
      },
      {
        label: "🔐 Senha",
        val: "Crie sua própria senha — o sistema não gera mais combinações aleatórias."
      },
      {
        label: "💱 Moeda",
        val: "Escolha apenas uma vez (BRL, USD, EUR, RUB, UAH, KZT, INR, etc + крипто: BTC, ETH, USDT TRC20/ERC20, TRX, LTC, XRP)."
      },
      {
        label: "🎁 Promocódigo",
        val: "Em 2026 é obrigatório para bônus. Campo oculto em «+ Adicionar código»."
      }
    ]
  },

  social: {
    title: "📲 Método 2 – Redes sociais e mensageiros",
    desc: "Forma mais rápida. O sistema copia automaticamente seus dados do perfil escolhido.",

    steps: [
      {
        label: "🌐 Serviços disponíveis",
        val: "Telegram, Google,Steam"
      },
      {
        label: "⚙️ Como funciona",
        val: "Escolha o serviço, confirme no app e a conta é criada instantaneamente."
      },
      {
        label: "⚠️ Importante",
        val: "Use dados reais na rede social para evitar problemas na verificação (KYC)."
      }
    ]
  },
  

},
verif: {
  brand: "1win",
  region: "Brazil (BRL)",
  license: "Curacao Gaming License / Anjouan Regulatory Authority",
  compliance: "International Digital AML Standard & Brazil PIX Gateway Protocol",

  // Особенности 1win: акцент на автоматизацию и биометрию
  requirements: {
    identity: {
      primary_key: "CPF (Cadastro de Pessoas Físicas)",
      validation_method: "Instant PIX Gateway Verification", // Сверка при первом депозите
      status: "Initial check during registration (Age 18+ check)",
      age_verification: "Real-time validation against the government database"
    },

    biometrics: {
      type: "AI-Powered Liveness Check",
      mandatory: "Mandatory for high-limit accounts or suspicious activity",
      capture_method: "Mobile-first face scan (automated)",
      description: "Быстрое сканирование лица для подтверждения того, что аккаунтом владеет реальный человек, а не бот."
    },

    documents: {
      accepted_types: [
        "RG (Cédula de Identidade) - Original high-res photo",
        "CNH (Carteira Nacional de Habilitação)",
        "Bank Statement (Extrato bancário) for PIX confirmation",
        "Digital ID via Gov.br (Screenshot of the validated profile)"
      ],
      strict_rules: {
        format: "Original smartphone photos (JPEG/PNG)",
        quality: "All document edges must be sharp; no flash glares on the plastic",
        rejection_reason: "Photocopied documents, blurred text, or mismatch between PIX-key holder and ID"
      }
    },

    financial_sync: {
      method: "PIX (Primary), Crypto, Vouchers",
      rule: "Account Integrity (CPF Match)",
      pix_types: ["CPF Key", "Email", "Phone", "EVP"],
      description: "1win требует, чтобы ввод и вывод средств осуществлялся через платежные инструменты, привязанные к CPF владельца аккаунта."
    }
  },

  // Уровни верификации 1win
  trust_levels: {
    standard: "Daily limits applied. Standard withdrawal speed.",
    verified: "Increased limits. Faster processing via PIX.",
    partner_status: "Maximum limits. Dedicated security manager."
  },

  process: {
    step_1: "One-click or Social Media registration with CPF binding",
    step_2: "Email and Phone (+55) verification",
    step_3: "Automated Liveness check (if requested by the system)",
    step_4: "Manual document audit for large cash-outs (> 5,000 BRL)",
    average_approval_time: {
      automated: "1-3 minutes (AI validation)",
      manual: "Up to 24 hours (Security queue)"
    }
  },

  technical_notes: {
    geo_fencing: "Regional Brazil lock (Access from foreign IPs may trigger security locks)",
    vpn_policy: "Strictly prohibited for financial transactions",
    aml_rules: "Automatic audit for fast 'deposit-withdrawal' cycles without betting activity"
  },

  penalties: "Account termination for using 'fake' or 'purchased' CPF data. Funds frozen in case of failed Liveness check during withdrawal."
}
  },
  {
    id:2,
    title: "888starz",
    vozrast:"2020",
    affiUrl:'https://rt.pornhub.com/', 
    description: "A maior plataforma de iGaming baseada em blockchain. Famosa por pagar dividendos aos jogadores e aceitar mais de 40 criptomoedas junto com o PIX.",
    highlight: "Pagamentos via PIX em segundos.",
    logo: "/img/photo_2026-04-02_10-56-41-removebg-preview.png", 
    fotopart:"/img/photo_2026-04-02_11-30-06.jpg",
    bonus: "100% até R$1500",
    rating: 5.0,
    tag: "Melhor Escolha",
    color: "from-green-600 to-green-800",
    logoStyle: "drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]", 
    cardStyle: "border-yellow-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]",
    ganename:'roceta',
    colgame:"10 000",
    pixrab:"média",
    bernd:"Se você está cansado de promessas vazias, a 888STARZ chegou para mudar o jogo no Brasil. Esqueça tudo o que você sabe sobre cassinos convencionais.",
   kompania: `888STARZ: O Cassino que te paga para jogar literalmente

Se você está cansado de promessas vazias, a 888STARZ chegou para mudar o jogo no Brasil. Esqueça tudo o que você sabe sobre cassinos convencionais. Aqui, a pegada é outra: a plataforma roda no sistema blockchain, o que significa que ela é transparente e, o mais louco de tudo, você se torna quase um "sócio" da casa através do token 888.

O que faz a 888STARZ ser única no Brasil?
Diferente das casas tradicionais, aqui cada aposta gera tokens para você, independentemente se você ganha ou perde. Isso cria um sistema de renda passiva real, onde você acumula uma fatia dos lucros da plataforma enquanto se diverte. É o único ecossistema de iGaming que realmente valoriza o seu tempo.

Vantagens competitivas que esmagam a concorrência:
Ecossistema Cripto & PIX: Quer anonimato e velocidade extrema? Eles aceitam mais de 50 criptomoedas. Prefere o clássico? O PIX deles é instantâneo e sem burocracia.
Catálogo Gigante: São mais de 3.500 slots de elite e uma seção de apostas esportivas bruta, que cobre tudo, do Brasileirão até as ligas mais insanas de eSports.
Bônus Massivo: O pacote de boas-vindas é um dos maiores do mercado mundial, turbinando seus primeiros quatro depósitos com valores impressionantes.

Segurança e Licença de Ferro:
Operando sob a licença de Curaçao, a 888STARZ utiliza criptografia de ponta para proteger cada centavo dos usuários. É a escolha definitiva para quem busca inovação tecnológica, transparência total nos pagamentos e quer ser recompensado por cada aposta feita.`,
plis1: "⚡ Depósitos via PIX e criptomoedas com processamento rápido",
plis2: "🎰 Grande variedade de jogos (slots, cassino ao vivo, apostas esportivas)",
plis3: "📱 Plataforma moderna com navegação simples e responsiva",
plis4: "💰 Bônus de boas-vindas agressivo e promoções frequentes",
plis5: "🌍 Suporte a múltiplas criptomoedas e métodos de pagamento",
plis6: "🎮 Integra cassino + apostas esportivas + jogos crash em um só lugar",

minus1: "📌 Operador offshore com licença internacional (não brasileira)",
minus2: "⏳ Termos de bônus podem incluir rollover alto e regras complexas",
minus3: "🔐 Verificação de identidade (KYC) pode ser obrigatória para saques",
minus4: "🌐 Acesso pode variar por região e uso de domínios espelho",
minus5: "📉 Experiência e promoções podem mudar dependendo do país do usuário",
withdrawal: {
  methods: ["PIX","Cartões bancários (Visa/Mastercard)",
    "Carteiras eletrônicas (Skrill, Neteller, Jeton, MiFinity)",
    "Criptomoedas (BTC, ETH, USDT, LTC, TRX, XRP e outras)"],

  processing: [
   { label: "PIX", val: "15 min – 24h (geralmente em poucas horas)" },
    { label: "Cartões", val: "1–3 dias úteis" },
    { label: "Carteiras eletrônicas", val: "15 min – 2h" },
    { label: "Cripto", val: "instantâneo – 15 min" }
  ],

  currencies: {
    fiat: ["BRL", "USD", "EUR",
      "RUB", "UAH", "KZT", "TRY", "INR",
      "PKR", "BDT", "NGN", "KES"],
    crypto: [
      "BTC",
      "ETH",
      "USDT (TRC20)",
      "USDT (ERC20)",
      "TRX",
      "LTC",
      "XRP",
      "DOGE",
      "BCH",
      "XMR"
    ]
  }
},
withdrawalTerms: {
  general: [
    "Os saques exigem verificação de identidade (KYC) antes da primeira retirada ou em valores elevados.",
    "O tempo de processamento depende do método escolhido e do nível de verificação da conta.",
    "Alguns métodos podem não estar disponíveis em todos os países ou regiões."
  ],

  rules: [
    "O valor mínimo de saque varia conforme o método de pagamento utilizado.",
    "Bônus ativos podem exigir rollover antes de permitir retirada de fundos.",
    "O saque deve ser realizado, sempre que possível, pelo mesmo método utilizado para depósito.",
    "A plataforma pode solicitar documentos adicionais para verificação de segurança (AML/KYC)."
  ],

  delays: [
    "Saques podem demorar mais durante verificações de segurança ou alta demanda.",
    "Transferências bancárias podem levar mais tempo devido a intermediários financeiros.",
    "Criptomoedas dependem da rede blockchain e podem variar conforme congestionamento da rede."
  ],

  notes: [
    "PIX (quando disponível) costuma ser o método mais rápido para usuários do Brasil.",
    "Carteiras digitais geralmente processam mais rápido que cartões bancários.",
    "Criptomoedas são uma das opções mais rápidas para retirada em plataformas internacionais.",
    "Todos os prazos são estimativas e podem variar conforme o operador e a verificação da conta."
  ]
},
fotoreger:'/img/photo_2026-04-02_11-28-52.jpg',
pravilareg: {
  fast: {
    title: "⚡ Método 1 – Registro clássico",
    desc: "Método mais confiável. Permite usar todos os recursos da conta sem limitações.",

    steps: [
      {
        label: "📧 Email ou Telefone",
        val: "Cadastro usando e-mail válido ou número de celular."
      },
      {
        label: "🔐 Senha",
        val: "Criação de senha pessoal segura."
      },
      {
        label: "🌍 Moeda",
        val: "Definida automaticamente (BRL para Brasil) ou escolhida manualmente."
      },
      {
        label: "🎁 Código promocional",
        val: "Opcional para ativar bônus de boas-vindas."
      }
    ]
  },

  social: {
    title: "⚡ Método 2 – Registro em 1 clique",
    desc: "Forma mais rápida de criar conta sem preencher formulário manualmente.",

    steps: [
      {
        label: "📲 Registro rápido",
        val: "Conta criada em poucos segundos com apenas um clique."
      },
      {
        label: "🌐 Redes suportadas",
        val: "Google e иногда Telegram (dependendo da região)."
      },
      {
        label: "⚙️ Como funciona",
        val: "Você confirma acesso ao perfil e o sistema importa seus dados automaticamente."
      },
      {
        label: "⚠️ Importante",
        val: "Dados devem ser reais para evitar problemas em saques (KYC)."
      }
    ]
  }
},
verif: {
  brand: "888starz",
  region: "Brazil (BRL)",
  license: "Curacao Antillephone N.V. / Licensing for 2026",
  compliance: "International KYC/AML Standards & SPA Regulatory Alignment",

  // Особенности 888starz: упор на подтверждение личности и борьбу с мультиаккаунтингом
  requirements: {
    identity: {
      primary_key: "CPF (Cadastro de Pessoas Físicas)",
      validation_method: "Cross-check with Payment Gateway Data",
      status: "Required for the first withdrawal and to lift deposit restrictions",
      age_verification: "Manual check of the ID document compared to profile data"
    },

    biometrics: {
      type: "Liveness Check / Video Call",
      mandatory: "On demand (usually for accounts with high turnover)",
      capture_method: "Real-time camera capture via web-interface",
      description: "Система может запросить видеоверификацию, если замечена активность с разных IP или использование разных платежных реквизитов."
    },

    documents: {
      accepted_types: [
        "RG (Cédula de Identidade) - Full scan or high-res photo",
        "CNH (Carteira de Motorista)",
        "Passaporte Brasileiro",
        "Comprovante de residência (Water, electricity, or telephone bill - last 3 months)"
      ],
      strict_rules: {
        format: "Original photos (JPEG, PNG, PDF)",
        quality: "High resolution, all edges of the document must be visible, no glare",
        rejection_reason: "Low quality, expired documents, name mismatch with bank account"
      }
    },

    financial_sync: {
      method: "PIX (Main), Bank Transfer, Pay4Fun",
      rule: "Account Holder Match (Same CPF)",
      pix_types: ["CPF Key", "Email", "Phone", "EVP (Random Key)"],
      description: "Выплаты производятся только на верифицированные PIX-ключи, принадлежащие владельцу аккаунта. Использование корпоративных счетов (CNPJ) запрещено."
    }
  },

  // Уровни верификации для 888starz
  trust_levels: {
    unverified: "Restricted withdrawals, standard deposit limits",
    verified_identity: "Withdrawals allowed, increased limits",
    fully_verified: "No limits on withdrawals, priority in queue"
  },

  process: {
    step_1: "Registration and SMS/Email activation",
    step_2: "Filling in all mandatory profile fields (CPF included)",
    step_3: "Upload of ID and Proof of Address in the 'Verification' tab",
    step_4: "Manual review by the security department",
    average_approval_time: {
      automated: "N/A (Primarily manual verification)",
      manual: "12-48 hours (Typically faster on weekdays)"
    }
  },

  technical_notes: {
    geo_fencing: "Strict Brazilian IP match (Geo-location must match the registered country)",
    vpn_policy: "Discouraged; usage during verification leads to automatic additional audit",
    aml_rules: "Mandatory check for single transactions over 5,000 BRL"
  },

  penalties: "Suspension of account for 'Bonus Abusing' or multi-accounting. Funds may be frozen until full video-identity confirmation is completed."
}
 
  
  },
  {
  id: 3,
  title: "1xSlots",
  vozrast: 2017,
  affiUrl:'https://rt.pornhub.com/', 
  description: "Uma das plataformas mais conhecidas do mercado brasileiro, com grande variedade de jogos, slots e apostas esportivas, além de interface moderna e fluida.",
  highlight: "Interface nota 10 e app extremamente fluido.",
  fotopart: "/img/photo_2026-04-01_20-03-50.jpg",
  logo: "/img/images-removebg-preview.png",

  bonus: "Bônus de boas-vindas de até R$500",
  rating: 4.8,
  tag: "Mais Popular",

  logoStyle: "drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
  cardStyle: "border-yellow-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]",

  ganename: "roceta",
  colgame: " 9 500",
  pixrab: "média",

  bernd: "Se você está cansado de promessas vazias, a 1xSlots chega com uma proposta mais completa para o público brasileiro, reunindo cassino, slots e apostas esportivas em uma única plataforma.",

  kompania: `
1xSlots: uma plataforma completa de iGaming

A 1xSlots é uma casa de apostas e cassino online que combina vários tipos de entretenimento em um único ecossistema: apostas esportivas, slots e jogos ao vivo.

O que a plataforma oferece:
- Grande variedade de jogos, com milhares de slots disponíveis
- Cassino ao vivo com dealers reais
- Interface moderna e fácil de usar
- Aplicativo para dispositivos móveis com boa fluidez
- Diversos métodos de pagamento, incluindo PIX e carteiras digitais

Bônus e promoções:
A plataforma costuma oferecer bônus de boas-vindas e promoções para novos usuários, que podem variar conforme campanhas ativas.

Experiência do usuário:
A navegação é simples, com carregamento rápido e design otimizado para celular e desktop, o que facilita o uso mesmo para iniciantes.

Observação importante:
Por ser uma plataforma internacional, as condições de acesso, bônus e disponibilidade podem variar de acordo com a região do usuário.
`,
plis1: "🎰 Grande variedade de jogos (mais de 10.000 slots, cassino ao vivo, crash e jogos de mesa)",
plis2: "⚡ Registro rápido e interface simples e intuitiva",
plis3: "💳 Suporte a diversos métodos de pagamento, incluindo PIX e criptomoedas",
plis4: "📱 Site e versão mobile bem otimizados",
plis5: "🌍 Plataforma internacional com suporte a vários idiomas",
plis6: "🎁 Bônus frequentes e programa VIP para jogadores ativos",

minus1: "📌 Licença de Curaçao (regulação offshore, não brasileira)",
minus2: "⏳ Bônus com requisitos de rollover altos e regras mais rígidas",
minus3: "🔐 Verificação KYC obrigatória para saques maiores",
minus4: "📉 Alguns usuários relatam atrasos em retiradas em determinadas situações",
minus5: "🌐 Suporte ao cliente pode variar dependendo do horário e idioma",
//раздел способ вывода средств
withdrawal: {
  methods: [
    "PIX",
    "Cartões bancários (Visa/Mastercard)",
    "Carteiras eletrônicas (Skrill, Neteller, Jeton, MiFinity)",
    "Criptomoedas (BTC, ETH, USDT, LTC, TRX, XRP e outras)"
  ],

  processing: [
    { label: "PIX", val: "15 min – 24h (geralmente em poucas horas)" },
    { label: "Cartões", val: "1–3 dias úteis" },
    { label: "Carteiras eletrônicas", val: "15 min – 2h" },
    { label: "Cripto", val: "instantâneo – 15 min" }
  ],

  currencies: {
    fiat: [
      "BRL", "USD", "EUR",
      "RUB", "UAH", "KZT", "TRY", "INR",
      "PKR", "BDT", "NGN", "KES"
    ],
    crypto: [
      "BTC",
      "ETH",
      "USDT (TRC20)",
      "USDT (ERC20)",
      "TRX",
      "LTC",
      "XRP",
      "DOGE",
      "BCH",
      "XMR"
    ]
  }
},
withdrawalTerms: {
  general: [
    "Os saques geralmente exigem verificação de identidade (KYC), especialmente no primeiro saque ou em valores altos.",
    "O tempo de processamento depende do método de pagamento escolhido e do nível de verificação da conta.",
    "Alguns métodos podem não estar disponíveis em todas as regiões do usuário."
  ],

  rules: [
    "O valor mínimo de saque varia conforme o método (PIX, cartões, carteiras eletrônicas ou criptomoedas).",
    "Bônus ativos precisam de rollover completo antes de permitir saque de fundos bônus.",
    "Sempre que possível, o saque deve ser feito pelo mesmo método utilizado no depósito.",
    "A plataforma pode solicitar documentos adicionais por motivos de segurança (AML/KYC)."
  ],

  delays: [
    "Saques podem ficar pendentes durante verificações de segurança ou análise manual da conta.",
    "Cartões bancários podem demorar mais devido ao processamento do banco emissor.",
    "PIX pode ser rápido, mas ainda pode sofrer retenções internas da plataforma em caso de análise.",
    "Criptomoedas dependem da confirmação da rede blockchain e podem variar em tempo de congestionamento."
  ],

  notes: [
    "PIX normalmente é o método mais rápido para usuários no Brasil quando liberado pela plataforma.",
    "E-wallets como Skrill ou Neteller costumam ter processamento mais rápido que bancos tradicionais.",
    "Criptomoedas geralmente oferecem maior velocidade e menos intermediários.",
    "Todos os prazos são estimativas e podem variar conforme verificação e políticas internas da operadora."
  ]
},
fotoreger:'/img/photo_2026-04-18_13-53-53.jpg',
pravilareg: {
  fast: {
    title: "⚡ Método 1 – Registro completo",
    desc: "Método padrão e mais seguro. Permite controle total da conta e facilita saques futuros.",

    steps: [
      {
        label: "📧 Email ou Telefone",
        val: "Cadastro via e-mail válido ou número de celular."
      },
      {
        label: "🔐 Senha",
        val: "Criação manual de senha segura pelo usuário."
      },
      {
        label: "🌍 País e Moeda",
        val: "Moeda definida automaticamente (BRL no Brasil) ou escolhida manualmente."
      },
      {
        label: "🎁 Código promocional",
        val: "Opcional para ativar bônus de boas-vindas."
      }
    ]
  },

  social: {
    title: "⚡ Método 2 – Registro rápido (1 clique)",
    desc: "Permite criar conta em segundos utilizando serviços externos.",

    steps: [
      {
        label: "📲 Registro instantâneo",
        val: "Conta criada rapidamente sem preencher formulário completo."
      },
      {
        label: "🌐 Redes disponíveis",
        val: "Google, Telegram, VK, OK, Mail.ru (dependendo da região)."
      },
      {
        label: "⚙️ Como funciona",
        val: "Você autoriza o acesso e o sistema importa automaticamente seus dados."
      },
      {
        label: "⚠️ Importante",
        val: "Use dados reais para evitar problemas na verificação (KYC)."
      }
    ]
  }
},
verif: {
  brand: "1xSlots",
  region: "Brazil (BRL)",
  license: "Curacao eGaming / Anjouan Licensing Board",
  compliance: "International AML/KYC Standard & Local PIX Gateway Integration",

  // Требования 1xSlots — акцент на многоуровневую проверку
  requirements: {
    identity: {
      primary_key: "CPF (Cadastro de Pessoas Físicas)",
      validation_method: "Internal Security Audit & PIX API Verification",
      status: "Required to unlock the 'Withdrawal' section in the profile",
      age_verification: "Manual or Semi-automated document review"
    },

    biometrics: {
      type: "Selfie with Document (ID-Face Match)",
      mandatory: "Selective (Triggered by high-volume or suspicious activity)",
      capture_method: "Photo upload (High-resolution)",
      description: "Фото пользователя, держащего паспорт/RG рядом с лицом. В редких случаях — видеозвонок в Telegram/Skype для подтверждения личности."
    },

    documents: {
      accepted_types: [
        "RG (Registro Geral) - Identity card",
        "CNH (Driver’s License) - Digital or Physical",
        "Brazilian Passport",
        "Military ID (Carteira de Identidade Militar)",
        "Proof of Wealth (в исключительных случаях при оборотах > 50,000 BRL)"
      ],
      strict_rules: {
        format: "Original photos (HEIC/JPG/PNG)",
        quality: "All corners must be visible, text must be readable without zoom",
        rejection_reason: "Blurry images, presence of photo-editing traces, expired documents"
      }
    },

    financial_sync: {
      method: "PIX, AstroPay, Cryptocurrencies",
      rule: "Closed Loop (Вывод тем же путем, что и депозит)",
      pix_types: ["CPF Key (Mandatory for fast tracking)"],
      description: "Строго запрещено использовать счета родственников. При использовании крипты верификация может быть запрошена повторно для привязки кошелька."
    }
  },

  // Уровни аккаунта 1xSlots
  trust_levels: {
    new_user: "Email/Phone confirmed. Deposits enabled.",
    verified_identity: "ID approved. Withdrawal enabled up to standard limits.",
    vip_status: "Video-KYC passed. Priority withdrawals and high limits."
  },

  process: {
    step_1: "Full profile completion (Address, Name, Surname, CPF)",
    step_2: "Phone number binding (+55) with SMS code",
    step_3: "Document upload in the 'Personal Profile' section",
    step_4: "Manual security review (Checking for multi-accounting/bonus-abuse)",
    average_approval_time: {
      automated: "N/A (Primarily manual)",
      manual: "24-72 hours (Depending on queue)"
    }
  },

  technical_notes: {
    geo_fencing: "Recommended Brazil IP (VPN usage is risky and can lead to additional KYC)",
    vpn_policy: "Allowed only if local laws prevent access, but withdrawals may be frozen for check",
    aml_rules: "Source of funds verification for deposits exceeding cumulative 20,000 BRL"
  },

  penalties: "Multi-accounting detection leads to permanent ban of all linked accounts. Attempts to use stolen CPF result in reporting to payment aggregators."
}

},
{
  id: 4,
  title: "Brazino777",
  vozrast: 2019 ,
  affiUrl:'https://rt.pornhub.com/', 
  description: "Uma das plataformas mais populares no Brasil, conhecida por seu foco em jogos rápidos, slots e promoções frequentes para usuários ativos.",
  highlight: "Promoções constantes e grande volume de jogos disponíveis.",
  fotopart: "/img/photo_2026-04-01_20-03-50.jpg",
  logo: "/img/images__1_-removebg-preview.png",

  bonus: "Bônus de boas-vindas de até R$500",
  rating: 4.8,
  tag: "Mais Popular",

  logoStyle: "drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]",
  cardStyle: "border-yellow-500/30 shadow-[0_0_20px_rgba(251,191,36,0.1)]",

  ganename: "roceta",
  colgame: "4 000",
  pixrab: "média",

  bernd: "Brazino777 é uma plataforma bastante conhecida no Brasil, voltada para entretenimento com apostas esportivas e jogos de cassino.",

  kompania: `
Brazino777: plataforma de cassino e apostas esportivas

A Brazino777 é uma casa de apostas e cassino online que ganhou popularidade no mercado brasileiro por oferecer uma experiência simples e focada em jogos rápidos.

O que a plataforma oferece:
- Grande variedade de slots e jogos de cassino
- Apostas esportivas em diferentes modalidades
- Promoções frequentes e bônus para jogadores ativos
- Interface simples e fácil de usar, tanto no celular quanto no computador
- Sistema otimizado para jogos rápidos e rodadas curtas

Experiência do usuário:
A plataforma é conhecida por sua navegação simples e foco em entretenimento rápido, o que atrai usuários que preferem jogos dinâmicos.

Pagamentos:
Em geral, oferece métodos populares no Brasil, incluindo PIX e carteiras digitais, com foco em depósitos e saques rápidos (dependendo da verificação da conta).

Observação:
Como outras plataformas do setor, as condições de bônus e disponibilidade podem variar conforme a região e campanhas ativas.
`,
plis1: "🎰 Grande variedade de jogos (slots, roleta, blackjack, cassino ao vivo e apostas esportivas)",
plis2: "⚡ Depósitos via PIX rápidos e geralmente processados em poucos minutos",
plis3: "📱 Plataforma otimizada para mobile com navegação simples",
plis4: "💰 Promoções e bônus frequentes para novos e jogadores ativos",
plis5: "🕒 Suporte ao cliente disponível 24/7 em português",
plis6: "🔐 Sistema de segurança com verificação de conta (KYC)",

minus1: "📌 Operador com licença internacional (estrutura offshore, não regulamentação brasileira)",
minus2: "⏳ Bônus podem ter rollover e regras de liberação mais rígidas",
minus3: "🔐 Saques maiores exigem verificação de identidade obrigatória",
minus4: "📉 Tempo de retirada pode variar dependendo do método e análise da conta",
minus5: "🌐 Algumas promoções não estão disponíveis para todos os usuários ou regiões",
withdrawal: {
  methods: [
    "PIX (Brasil)",
    "Cartões bancários (Visa/Mastercard)",
    "Carteiras eletrônicas (varia por região)",
    "Criptomoedas (em algumas campanhas/regiões)"
  ],

  processing: [
    { label: "PIX", val: "Instantâneo – até 24h (mais comum: poucas horas)" },
    { label: "Cartões", val: "1–5 dias úteis" },
    { label: "Carteiras eletrônicas", val: "até 24h" },
    { label: "Cripto", val: "10 min – 24h (dependendo da rede)" }
  ],

  currencies: {
    fiat: [
      "BRL", "USD", "EUR",
      "RUB", "UAH", "KZT", "TRY", "INR",
      "PKR", "BDT", "NGN", "KES"
    ],
    crypto: [
      "BTC",
      "ETH",
      "USDT (TRC20)",
      "USDT (ERC20)",
      "TRX",
      "LTC",
      "XRP"
    ]
  },

},
withdrawalTerms: {
  general: [
    "Os saques exigem verificação de identidade (KYC) antes da primeira retirada ou em casos de valores mais altos.",
    "O processamento depende do método de pagamento escolhido e da análise interna da conta.",
    "Todos os saques devem ser feitos para contas e métodos registrados no nome do próprio usuário."
  ],

  rules: [
    "O valor mínimo de saque varia conforme o método (PIX, bancos, carteiras digitais ou cripto).",
    "Bônus ativos podem exigir rollover completo antes de liberar retirada de fundos.",
    "O saque deve ser solicitado pelo mesmo método utilizado no depósito, quando aplicável.",
    "A plataforma pode solicitar documentos adicionais para verificação de segurança (AML/KYC)."
  ],

  delays: [
    "PIX geralmente é processado rapidamente, podendo levar de minutos até poucas horas dependendo da análise.",
    "Transferências bancárias podem levar de 1 a 5 dias úteis conforme o banco.",
    "Carteiras digitais e cripto podem ser mais rápidas, mas dependem de verificação e rede.",
    "Em horários de alta demanda, os saques podem ficar em fila de processamento."
  ],

  notes: [
    "PIX é o método mais rápido e mais utilizado no Brasil dentro da plataforma.",
    "Saques são geralmente mais rápidos após a verificação completa da conta.",
    "Criptomoedas e carteiras digitais podem reduzir tempo de processamento em comparação a bancos.",
    "Todos os prazos são estimativas e podem variar conforme análise de segurança."
  ]
},
fotoreger:'/img/photo_2026-04-18_13-54-01.jpg',

pravilareg: {
  fast: {
    title: "⚡ Método 1 – Cadastro clássico",
    desc: "Método principal e mais seguro. Permite acesso completo à conta e evita problemas em saques.",

    steps: [
      {
        label: "📧 Email e Telefone",
        val: "Cadastro com e-mail válido e número de celular com confirmação por código."
      },
      {
        label: "🔐 Senha",
        val: "Criação de uma senha pessoal segura para acesso à conta."
      },
      {
        label: "👤 Dados pessoais",
        val: "Nome completo, CPF e data de nascimento são solicitados."
      },
      {
        label: "🛂 Verificação (KYC)",
        val: "Envio de documento e selfie para liberar depósitos e saques."
      }
    ]
  },

  social: {
    title: "📲 Método 2 – Cadastro rápido",
    desc: "Forma mais simples de criar conta, mas a verificação completa será necessária depois.",

    steps: [
      {
        label: "⚡ Registro rápido",
        val: "Conta criada em poucos minutos diretamente no site."
      },
      {
        label: "📲 Confirmação",
        val: "Código enviado por SMS ou e-mail para ativar a conta."
      },
      {
        label: "⚙️ Como funciona",
        val: "Você preenche apenas os dados básicos e confirma o contato."
      },
      {
        label: "⚠️ Importante",
        val: "Sem verificação completa, saques podem ser limitados."
      }
    ]
  }
},

verif: {
   brand: "Brazino777",
  region: "Brazil (BRL)",
  license: "SRIJ/SPA Federal License №001/2026",
  compliance: "Federal Law 14.790/23 (New Gambling Framework)",

  requirements: {
    identity: {
      primary_key: "CPF (Cadastro de Pessoas Físicas)",
      validation_method: "Gov.br Silver/Gold Integration", // Интеграция с гос. порталом
      status: "Mandatory for registration (Registration without CPF is disabled)",
      age_verification: "Automated age-gate via Receita Federal API"
    },

    biometrics: {
      type: "3D Liveness Detection (FaceTec/iProov)",
      mandatory: true,
      capture_method: "In-browser or In-app camera stream",
      description: "Проверка на 'живость'. Требуется медленное вращение головой. Использование эмуляторов камеры ведет к автоматическому бану."
    },

    documents: {
      accepted_types: [
        "RG (Registro Geral) - New Unified Format preferred",
        "CNH (Carteira Nacional de Habilitação) - Must be valid",
        "RNE/CRNM (For legal foreign residents in Brazil)",
        "Proof of Address - Electric/Water bills or Bank Statements (PDF original or High-Res photo)"
      ],
      strict_rules: {
        format: "Original photos only (JPG/PNG)",
        quality: "Minimum 300 DPI, no cropped edges",
        rejection_reason: "Scans, black-and-white copies, or edited metadata (Exif)"
      }
    },

    financial_sync: {
      method: "PIX (Exclusively via Central Bank of Brazil)",
      rule: "CPF-Matching (1:1)",
      pix_types: ["CPF Key", "Email Key", "Random Key (Must be linked to user's CPF)"],
      description: "Транзакции от третьих лиц блокируются. Имя отправителя в банковском слипе должно совпадать с именем в аккаунте до буквы."
    }
  },

  // Уровни верификации для UI
  trust_levels: {
    unverified: "Limit: 0 BRL (Deposit/Withdrawal disabled)",
    basic: "CPF Verified. Limit: 5,000 BRL monthly",
    full: "Document + Biometrics approved. Unlimited BRL withdrawal",
  },

  process: {
    step_1: "Real-time CPF & Age check (Instant)",
    step_2: "Phone confirmation via WhatsApp or SMS (+55)",
    step_3: "Liveness Check & Document Upload (Mandatory for first cash-out)",
    step_4: "Address Verification (triggered for withdrawals > 10,000 BRL)",
    average_approval_time: {
      automated: "5-10 minutes",
      manual: "Up to 24 hours (24/7 Support)"
    }
  },

  technical_notes: {
    geo_fencing: "Mandatory Brazilian IP (GPS coordinates required on mobile)",
    vpn_policy: "Hard ban for VPN/Proxy/Tor usage",
    aml_rules: "72-hour hold for suspicious transaction patterns"
  },

  penalties: "Zero-tolerance for 'Contas Laranja' (rented accounts). Detected fraud leads to reporting to Coaf (Financial Activities Control Council)."
    }
  
}

  
];

export default leaders;

