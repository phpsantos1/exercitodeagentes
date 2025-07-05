import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  User, 
  Phone, 
  Mail, 
  Building, 
  CreditCard,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  options?: string[];
  showForm?: 'pre-cadastro' | 'cadastro-final';
  isVoice?: boolean;
}

interface PreCadastroData {
  nome: string;
  whatsapp: string;
  email: string;
  interesse: string;
  tipoNegocio: string;
}

interface CadastroFinalData {
  nomeCompleto: string;
  whatsapp: string;
  email: string;
  cnpjCpf: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  produtoEscolhido: string;
  formaPagamento: string;
  termoAceite: boolean;
}

const EssencialBotChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentFlow, setCurrentFlow] = useState<'initial' | 'interested' | 'ready-to-buy'>('initial');
  const [showPreCadastro, setShowPreCadastro] = useState(false);
  const [showCadastroFinal, setShowCadastroFinal] = useState(false);
  const [conversationState, setConversationState] = useState<{
    hasShownServices: boolean;
    hasAskedForInfo: boolean;
    lastTopic: string;
    interactionCount: number;
  }>({
    hasShownServices: false,
    hasAskedForInfo: false,
    lastTopic: '',
    interactionCount: 0
  });
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  
  const [preCadastroData, setPreCadastroData] = useState<PreCadastroData>({
    nome: '',
    whatsapp: '',
    email: '',
    interesse: '',
    tipoNegocio: ''
  });
  
  const [cadastroFinalData, setCadastroFinalData] = useState<CadastroFinalData>({
    nomeCompleto: '',
    whatsapp: '',
    email: '',
    cnpjCpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    cep: '',
    produtoEscolhido: '',
    formaPagamento: '',
    termoAceite: false
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Inicializar APIs de voz
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'pt-BR';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "Olá! Sou o EssencialBot, seu assistente de automação inteligente do Exército de Agentes. 🤖\n\nEstou aqui para ajudar você a transformar seu negócio com nossas soluções de IA. Como posso ajudá-lo hoje?",
          [
            "Quero conhecer os serviços",
            "Preciso de automação IA",
            "Serviços contábeis",
            "Consultoria empresarial",
            "Treinamentos e cursos",
            "EDA Social - Projeto de Inclusão"
          ]
        );
      }, 500);
    }
  }, [isOpen]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const speakText = (text: string) => {
    if (synthRef.current && voiceEnabled) {
      // Parar qualquer fala anterior
      synthRef.current.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      synthRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const addBotMessage = (text: string, options?: string[], showForm?: 'pre-cadastro' | 'cadastro-final') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      options,
      showForm
    };
    setMessages(prev => [...prev, newMessage]);
    
    // Falar a mensagem automaticamente se a voz estiver habilitada
    if (voiceEnabled) {
      // Remover emojis e formatação para melhor síntese de voz
      const cleanText = text.replace(/[🤖📊💼🎓⚡✅🔹🎯📋👥💰🚀📞💬🎉]/g, '').replace(/\*\*/g, '');
      speakText(cleanText);
    }
  };

  const addUserMessage = (text: string, isVoice = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
      isVoice
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    setInputValue('');
    setConversationState(prev => ({
      ...prev,
      interactionCount: prev.interactionCount + 1,
      lastTopic: option
    }));
    
    simulateTyping(() => {
      processUserInput(option);
    });
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue, isListening);
      const userInput = inputValue;
      setInputValue('');
      setConversationState(prev => ({
        ...prev,
        interactionCount: prev.interactionCount + 1,
        lastTopic: userInput
      }));
      
      simulateTyping(() => {
        processUserInput(userInput);
      });
    }
  };

  const processUserInput = (input: string) => {
    const lowerInput = input.toLowerCase();
    const { hasShownServices, hasAskedForInfo, lastTopic, interactionCount } = conversationState;

    // EA Social
    if (lowerInput.includes('eda social') || lowerInput.includes('projeto de inclusão') || lowerInput.includes('inclusão')) {
      setCurrentFlow('interested');
      setConversationState(prev => ({ ...prev, hasShownServices: true, lastTopic: 'eda_social' }));
      addBotMessage(
        "🌟 **EDA SOCIAL - PROJETO DE INCLUSÃO**\n\nNosso projeto social revolucionário oferece suporte especializado através de agentes de IA para:\n\n🧩 **Autismo** - Agentes especializados para facilitar relacionamento social\n💙 **Síndrome de Down** - Suporte personalizado e orientação\n😰 **Ansiedade** - Ferramentas para gerenciamento emocional\n🦽 **Mobilidade Reduzida** - Orientação sobre acessibilidade\n💔 **Luto** - Apoio emocional especializado\n\n**COMO FUNCIONA:**\n\n1️⃣ **AGENTE ESPECIALIZADO** - Acesso gratuito a agentes treinados para cada condição\n2️⃣ **SUPORTE FAMILIAR** - Agentes específicos para familiares e cuidadores\n3️⃣ **ACOMPANHAMENTO PSICOLÓGICO** - Agente com perfil psicológico para mediar relações\n\n🌐 **Site oficial:** www.edasocial.org\n📧 **Contato:** contato@edasocial.org\n\nEste é nosso compromisso social com a inclusão! 💝",
        ["Como acessar os agentes", "Quero ajudar o projeto", "Sou familiar/cuidador", "Conhecer outros serviços"]
      );
    }
    // Respostas específicas para EDA Social
    else if (lowerInput.includes('como acessar') && lastTopic === 'eda_social') {
      addBotMessage(
        "🚀 **ACESSO AOS AGENTES EDA SOCIAL:**\n\n1️⃣ **Acesse:** www.edasocial.org\n2️⃣ **Escolha seu agente** especializado\n3️⃣ **Cadastro gratuito** em 2 minutos\n4️⃣ **Comece a conversar** imediatamente\n\n✅ **100% GRATUITO** - Sem taxas, sem pegadinhas\n✅ **24/7 DISPONÍVEL** - Agentes sempre online\n✅ **PRIVACIDADE TOTAL** - Suas conversas são protegidas\n\nPrecisa de ajuda com o cadastro?",
        ["Sim, me ajude com cadastro", "Quero falar com humano", "Conhecer automação IA"]
      );
    }
    else if (lowerInput.includes('quero ajudar') && lastTopic === 'eda_social') {
      addBotMessage(
        "💝 **COMO VOCÊ PODE AJUDAR O EDA SOCIAL:**\n\n🎯 **FORMAS DE CONTRIBUIR:**\n\n💰 **Doações** - Qualquer valor ajuda a manter os agentes\n📢 **Divulgação** - Compartilhe com quem precisa\n🤝 **Voluntariado** - Ajude na moderação e suporte\n💻 **Desenvolvimento** - Contribua com código\n\n📧 **Contato:** contato@edasocial.org\n📱 **WhatsApp:** (11) 91175-7113\n\nQual forma de ajuda mais combina com você?",
        ["Quero fazer doação", "Posso ser voluntário", "Divulgar nas redes", "Conhecer automação IA"]
      );
    }
    else if (lowerInput.includes('familiar') || lowerInput.includes('cuidador')) {
      addBotMessage(
        "👨‍👩‍👧‍👦 **SUPORTE PARA FAMÍLIAS E CUIDADORES:**\n\n🫂 **AGENTE FAMÍLIA** - Especializado em:\n- Orientação sobre cuidados diários\n- Apoio emocional para cuidadores\n- Dicas de comunicação efetiva\n- Rede de apoio e recursos\n\n💪 **GRUPOS DE APOIO** - Conecte-se com outras famílias\n📚 **MATERIAIS EDUCATIVOS** - Guias práticos gratuitos\n\n🌐 **Acesse:** www.edasocial.org/familias\n\nGostaria de se conectar agora com o Agente Família?",
        ["Sim, conectar agora", "Quero entrar no grupo", "Preciso de orientação específica", "Voltar ao menu"]
      );
    }
    // Detectar interesse em contratar
    else if (lowerInput.includes('quero contratar') || 
        lowerInput.includes('fechar negócio') || 
        lowerInput.includes('vamos começar') ||
        lowerInput.includes('vamos fechar') ||
        lowerInput.includes('aceito') ||
        lowerInput.includes('concordo')) {
      setCurrentFlow('ready-to-buy');
      setConversationState(prev => ({ ...prev, lastTopic: 'contratacao' }));
      addBotMessage(
        "🎉 **EXCELENTE DECISÃO!**\n\nVou abrir nosso formulário de contratação. São apenas alguns dados para personalizar seu EssencialBot e iniciar a implementação.\n\n⚡ **PRÓXIMOS PASSOS:**\n1. Preenchimento do formulário (2 min)\n2. Confirmação por WhatsApp (imediato)\n3. Onboarding agendado (24h)\n4. EssencialBot funcionando (48h)\n\nVamos começar?",
        [],
        'cadastro-final'
      );
      setShowCadastroFinal(true);
    }
    // Automação IA
    else if (lowerInput.includes('automação') || lowerInput.includes('quero conhecer') || lowerInput.includes('preciso de automação')) {
        setCurrentFlow('interested');
        setConversationState(prev => ({ ...prev, hasShownServices: true, lastTopic: 'automacao' }));
        addBotMessage(
          "🤖 **AUTOMAÇÃO IA COM ESSENCIALBOT**\n\nTransforme seu negócio com nossa IA personalizada:\n\n⚡ **NÍVEL 2 - INTEGRADO** (R$ 397 setup + R$ 397/mês)\n✅ EssencialBot personalizado\n✅ Integração Google Sheets\n✅ Automação Make/Zapier\n✅ Relatórios automáticos\n\n🚀 **NÍVEL 3 - AVANÇADO** (R$ 497 setup + R$ 497/mês)\n✅ Tudo do Nível 2 +\n✅ Machine Learning avançado\n✅ Análise preditiva\n✅ Multi-plataformas\n✅ Site com link personalizado\n\nQual nível faz mais sentido para seu negócio?",
          ["Nível 2 - Integrado", "Nível 3 - Avançado", "Quero ver demonstração", "Preciso de consultoria"]
        );
    }
    // Serviços Contábeis
    else if (lowerInput.includes('contábil') || lowerInput.includes('contabilidade') || lowerInput.includes('serviços contábeis')) {
        setCurrentFlow('interested');
        setConversationState(prev => ({ ...prev, hasShownServices: true, lastTopic: 'contabilidade' }));
        addBotMessage(
          "📊 **ESCRITÓRIO CONTÁBIL COMPLETO**\n\nSomos especialistas em empresas de todos os portes:\n\n🏢 **SERVIÇOS PRINCIPAIS:**\n✅ Abertura de empresas (MEI, LTDA, SA)\n✅ Contabilidade mensal completa\n✅ Obrigações fiscais (SPED, ECF, DEFIS)\n✅ Departamento pessoal\n✅ Planejamento tributário\n✅ Relatórios gerenciais\n\n🤖 **DIFERENCIAL:** Tudo automatizado com EssencialBot!\n\nQual necessidade contábil posso ajudar primeiro?",
          ["Abrir minha empresa", "Trocar de contador", "Planejamento tributário", "Quero orçamento completo"]
        );
    }
    // Consultoria
    else if (lowerInput.includes('consultoria')) {
        setCurrentFlow('interested');
        setConversationState(prev => ({ ...prev, hasShownServices: true, lastTopic: 'consultoria' }));
        addBotMessage(
          "💼 **CONSULTORIA EMPRESARIAL ESTRATÉGICA**\n\nSoluções completas para empresas em qualquer situação:\n\n🎯 **ESPECIALIDADES:**\n✅ Gestão empresarial e planejamento estratégico\n✅ Fluxo de caixa e controle financeiro\n✅ Recuperação judicial e reestruturação\n✅ Busca de crédito em factorings\n✅ Fusões e aquisições\n✅ Consultoria com IA e automação\n\n🚨 **CASOS CRÍTICOS:** Especialistas em recuperação empresarial\n\nQual desafio empresarial posso ajudar a resolver?",
          ["Empresa em crise", "Melhorar gestão", "Buscar crédito", "Planejamento estratégico"]
        );
    }
    // Treinamentos
    else if (lowerInput.includes('treinamento') || lowerInput.includes('curso') || lowerInput.includes('capacitação')) {
        setCurrentFlow('interested');
        setConversationState(prev => ({ ...prev, hasShownServices: true, lastTopic: 'treinamentos' }));
        addBotMessage(
          "🎓 **TREINAMENTOS ESPECIALIZADOS**\n\nCapacitação profissional em áreas estratégicas:\n\n📚 **CURSOS DISPONÍVEIS:**\n\n🤖 **IA Empresarial** - Fundamentos, Chatbots, Machine Learning\n📊 **Contabilidade Digital** - Contabilidade 4.0, SPED, Análise\n🎯 **Controladoria** - Controles Internos, Auditoria, Compliance\n💰 **Gestão Financeira** - Fluxo de Caixa, Análise, Orçamento\n\n✅ **Certificação inclusa** + **Projetos práticos**\n\nQual capacitação sua equipe mais precisa?",
          ["IA para empresas", "Contabilidade 4.0", "Controles internos", "Gestão financeira", "Pacote completo"]
        );
    }
    // Respostas específicas para níveis de automação
    else if (lowerInput.includes('nível 2') || lowerInput.includes('integrado')) {
      addBotMessage(
        "💎 **NÍVEL 2 - INTEGRADO - ESCOLHA INTELIGENTE!**\n\n✨ **O QUE VOCÊ RECEBE:**\n✅ EssencialBot 100% personalizado\n✅ Integração automática Google Sheets\n✅ Automações Make/Zapier ilimitadas\n✅ Relatórios automáticos diários\n✅ Suporte prioritário\n✅ Treinamento da equipe incluído\n\n💰 **Investimento:** R$ 397 setup + R$ 397/mês\n\n🎯 **Resolve 90% das necessidades de automação!**\n\nPronto para revolucionar seu atendimento?",
        ["Sim, quero contratar!", "Quero ver demonstração", "Preciso de mais detalhes", "Comparar com Nível 3"]
      );
    }
    else if (lowerInput.includes('nível 3') || lowerInput.includes('avançado')) {
      addBotMessage(
        "🚀 **NÍVEL 3 - AVANÇADO - SOLUÇÃO PREMIUM!**\n\n⚡ **TUDO DO NÍVEL 2 MAIS:**\n✅ Machine Learning avançado\n✅ Análise preditiva de vendas\n✅ Multi-plataformas (WhatsApp, Site, Instagram)\n✅ Site com link personalizado\n✅ API personalizada\n✅ Consultoria empresarial incluída\n✅ Relatórios de BI avançados\n\n💰 **Investimento:** R$ 497 setup + R$ 497/mês\n\n🏆 **Para empresas que querem liderar com IA!**\n\nVamos implementar a solução mais avançada?",
        ["Vamos fechar negócio!", "Quero demonstração premium", "Comparar investimento", "Falar com especialista"]
      );
    }
    // Demonstrações
    else if (lowerInput.includes('demonstração') || lowerInput.includes('demo') || lowerInput.includes('ver funcionando')) {
      addBotMessage(
        "🎬 **DEMONSTRAÇÃO AO VIVO DO ESSENCIALBOT**\n\n📅 **AGENDE SUA DEMO PERSONALIZADA:**\n\n⏰ **Duração:** 30 minutos\n👨‍💻 **Formato:** Videochamada + tela compartilhada\n🎯 **Foco:** Seu negócio específico\n\n📋 **O QUE VOCÊ VAI VER:**\n✅ EssencialBot funcionando em tempo real\n✅ Integrações com suas ferramentas\n✅ Relatórios automáticos\n✅ ROI calculado para seu caso\n\n📱 **WhatsApp:** (11) 91175-7113\n📧 **E-mail:** sac@exercitodeagentes.com.br\n\nQuer agendar agora via WhatsApp?",
        ["Sim, agendar agora", "Prefiro e-mail", "Quero mais informações", "Voltar aos planos"]
      );
    }
    // Voltar ao menu ou conhecer outros serviços
    else if (lowerInput.includes('voltar') || lowerInput.includes('menu') || lowerInput.includes('outros serviços') || lowerInput.includes('conhecer outros')) {
      if (!hasShownServices) {
        setConversationState(prev => ({ ...prev, hasShownServices: true }));
        addBotMessage(
          "🎯 **NOSSAS SOLUÇÕES COMPLETAS:**\n\n🤖 **Automação IA** - EssencialBot personalizado\n📊 **Escritório Contábil** - Serviços completos\n💼 **Consultoria** - Gestão e recuperação empresarial\n🎓 **Treinamentos** - Capacitação especializada\n🌟 **EDA Social** - Projeto de inclusão social\n\nQual solução faz mais sentido para você?",
          ["Automação IA", "Serviços Contábeis", "Consultoria", "Treinamentos", "EDA Social"]
        );
      } else {
        addBotMessage(
          "🤔 **POSSO AJUDAR COM MAIS ALGUMA COISA?**\n\nVejo que já conhece nossos serviços. Como posso direcionar melhor nossa conversa?\n\n💡 **OPÇÕES:**\n- Comparar soluções\n- Agendar demonstração\n- Falar com especialista\n- Solicitar proposta personalizada",
          ["Comparar soluções", "Agendar demo", "Falar com humano", "Quero proposta"]
        );
      }
    }
    // Interesse em informações - só oferece pré-cadastro se ainda não ofereceu
    else if ((lowerInput.includes('interessante') || 
        lowerInput.includes('gostaria de saber mais') ||
        lowerInput.includes('me interessou') ||
        lowerInput.includes('quero mais informações')) && !hasAskedForInfo) {
      
      setConversationState(prev => ({ ...prev, hasAskedForInfo: true }));
      
      // Sugerir pré-cadastro após mostrar interesse
      setTimeout(() => {
        addBotMessage(
          "💡 **PERSONALIZAR ATENDIMENTO**\n\nPara enviar materiais específicos e personalizar nossa conversa, posso coletar algumas informações básicas?\n\n📋 **São apenas:**\n- Nome e contato\n- Área de interesse\n- Tipo de negócio\n\n⚡ **2 minutos** e você recebe conteúdo exclusivo!",
          ["Sim, vamos lá!", "Prefiro continuar conversando", "Quero falar com humano"]
        );
      }, 2000);
    }
    // Aceitar pré-cadastro
    else if (lowerInput.includes('sim, vamos lá') || lowerInput.includes('sim, pode coletar') || lowerInput.includes('pode coletar') || lowerInput.includes('vamos lá')) {
      addBotMessage(
        "🎉 **PERFEITO!**\n\nVou abrir nosso formulário rápido. Com essas informações, posso:\n\n✅ Personalizar recomendações\n✅ Enviar materiais específicos\n✅ Conectar com especialista certo\n✅ Agilizar futuras conversas\n\nVamos começar?",
        [],
        'pre-cadastro'
      );
      setShowPreCadastro(true);
    }
    // Falar com humano
    else if (lowerInput.includes('falar com humano') || lowerInput.includes('atendente') || lowerInput.includes('pessoa')) {
      addBotMessage(
        "👨‍💼 **FALAR COM NOSSA EQUIPE**\n\nClaro! Nossa equipe especializada está pronta para atender você:\n\n📱 **WhatsApp Direto:** (11) 91175-7113\n📧 **E-mail:** sac@exercitodeagentes.com.br\n\n⏰ **Horário de atendimento:**\nSegunda a Sexta: 8h às 18h\nSábado: 8h às 12h\n\n🚀 **Resposta em até 2 horas!**\n\nPrefere que eu transfira agora via WhatsApp?",
        ["Sim, transferir agora", "Prefiro e-mail", "Continuar com EssencialBot", "Agendar ligação"]
      );
    } else {
      // Resposta inteligente baseada no contexto
      if (interactionCount > 5 && !hasAskedForInfo) {
        addBotMessage(
          "🤖 **VEJO QUE ESTÁ EXPLORANDO BASTANTE!**\n\nQue tal conversarmos de forma mais direcionada? Posso:\n\n🎯 **Focar no que mais interessa** você\n📞 **Conectar com especialista** humano\n📋 **Coletar suas necessidades** específicas\n💬 **Agendar conversa** detalhada\n\nO que prefere?",
          ["Focar em automação IA", "Falar com especialista", "Contar minha necessidade", "Agendar conversa"]
        );
      } else {
      addBotMessage(
          "🤖 **ENTENDI SUA MENSAGEM!**\n\nComo EssencialBot, posso ajudar com informações específicas sobre:\n\n💰 **Preços e investimentos**\n⚙️ **Como funcionam as soluções**\n📈 **Casos de sucesso reais**\n🎬 **Demonstrações práticas**\n🌟 **Projeto EDA Social**\n\nSobre o que gostaria de saber mais?",
          ["Preços e planos", "Como funciona", "Casos de sucesso", "Ver demonstração", "EDA Social"]
      );
      }
    }
  };

  const handlePreCadastroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Pré-cadastro enviado:', preCadastroData);
    
    setShowPreCadastro(false);
    addBotMessage(
      `Obrigado, ${preCadastroData.nome}! 🎉\n\nSuas informações foram registradas com sucesso. Vou enviar materiais personalizados sobre ${preCadastroData.interesse} para seu WhatsApp e email.\n\nEm breve, nossa equipe entrará em contato para uma conversa mais detalhada. Enquanto isso, posso responder mais alguma dúvida?`,
      ["Quero saber mais sobre preços", "Como é o processo de implementação?", "Tenho outras dúvidas"]
    );
  };

  const handleCadastroFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cadastroFinalData.termoAceite) {
      alert('Por favor, aceite os termos de serviço para continuar.');
      return;
    }
    
    console.log('Cadastro final enviado:', cadastroFinalData);
    
    setShowCadastroFinal(false);
    addBotMessage(
      `🎉 **PARABÉNS, ${cadastroFinalData.nomeCompleto}!**\n\nSeu cadastro foi finalizado com sucesso! Você agora faz parte do Exército de Agentes.\n\n📋 **Próximos passos:**\n1. Você receberá um email de confirmação\n2. Nossa equipe entrará em contato em até 2h\n3. Agendaremos o onboarding do seu EssencialBot\n\n💬 **Grupo VIP**: [Clique aqui para entrar no grupo exclusivo de clientes](https://wa.me/5511911757113)\n\nBem-vindo à revolução da automação inteligente! 🚀`,
      ["Entrar no grupo VIP", "Quando começa a implementação?"]
    );
  };

  const chatSize = isExpanded ? 'w-[95vw] h-[90vh]' : 'w-96 h-[600px]';

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:shadow-blue-400/50"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 ${chatSize} bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-blue-400/30 shadow-2xl overflow-hidden flex flex-col transition-all duration-300`}>
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">EssencialBot</span>
                <span className="text-xs text-blue-100">Exército de Agentes • Online</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Voice Controls */}
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className="text-white hover:text-gray-200 transition-colors p-1"
                title={voiceEnabled ? "Desativar voz" : "Ativar voz"}
              >
                {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
              
              {isSpeaking && (
                <button
                  onClick={stopSpeaking}
                  className="text-white hover:text-gray-200 transition-colors p-1"
                  title="Parar fala"
                >
                  <VolumeX className="h-4 w-4" />
                </button>
              )}
              
              {/* Expand/Minimize */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white hover:text-gray-200 transition-colors p-1"
                title={isExpanded ? "Minimizar" : "Expandir"}
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>
              
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="h-4 w-4 text-blue-300 mt-0.5 flex-shrink-0" />
                    )}
                    {message.sender === 'user' && (
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                        {message.isVoice && <Mic className="h-3 w-3 text-blue-200" />}
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      
                      {/* Options */}
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="block w-full text-left px-3 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg text-sm transition-colors border border-blue-400/30 hover:border-blue-400/50"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-blue-300" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Digite sua mensagem... (Shift+Enter para nova linha)"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400 resize-none min-h-[40px] max-h-[120px]"
                  rows={2}
                />
              </div>
              
              {/* Voice Button */}
              <button
                onClick={isListening ? stopListening : startListening}
                className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-green-500 hover:bg-green-600'
                }`}
                title={isListening ? "Parar gravação" : "Gravar mensagem"}
              >
                {isListening ? <MicOff className="h-4 w-4 text-white" /> : <Mic className="h-4 w-4 text-white" />}
              </button>
              
              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
              >
                <Send className="h-4 w-4 text-white" />
              </button>
            </div>
            
            {/* Voice Status */}
            {isListening && (
              <div className="mt-2 text-center">
                <span className="text-xs text-green-400 animate-pulse">🎤 Ouvindo... Fale agora!</span>
              </div>
            )}
            
            {isSpeaking && (
              <div className="mt-2 text-center">
                <span className="text-xs text-blue-400 animate-pulse">🔊 EssencialBot está falando...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pré-cadastro Modal */}
      {showPreCadastro && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Bot className="h-6 w-6 text-blue-300" />
                <h3 className="text-xl font-bold text-white">PRÉ-CADASTRO RÁPIDO</h3>
              </div>
              <button
                onClick={() => setShowPreCadastro(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handlePreCadastroSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">NOME</label>
                <input
                  type="text"
                  required
                  value={preCadastroData.nome}
                  onChange={(e) => setPreCadastroData({...preCadastroData, nome: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">WHATSAPP</label>
                <input
                  type="tel"
                  required
                  value={preCadastroData.whatsapp}
                  onChange={(e) => setPreCadastroData({...preCadastroData, whatsapp: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-MAIL</label>
                <input
                  type="email"
                  required
                  value={preCadastroData.email}
                  onChange={(e) => setPreCadastroData({...preCadastroData, email: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ÁREA DE INTERESSE</label>
                <select
                  required
                  value={preCadastroData.interesse}
                  onChange={(e) => setPreCadastroData({...preCadastroData, interesse: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                >
                  <option value="">Selecione sua área de interesse</option>
                  <option value="Automação IA">Automação IA</option>
                  <option value="Serviços Contábeis">Serviços Contábeis</option>
                  <option value="Consultoria Empresarial">Consultoria Empresarial</option>
                  <option value="Treinamentos">Treinamentos e Cursos</option>
                  <option value="EDA Social">EDA Social - Projeto de Inclusão</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">TIPO DE NEGÓCIO</label>
                <input
                  type="text"
                  required
                  value={preCadastroData.tipoNegocio}
                  onChange={(e) => setPreCadastroData({...preCadastroData, tipoNegocio: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  placeholder="Ex: E-commerce, Consultoria, Indústria..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white"
              >
                ENVIAR INFORMAÇÕES
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Cadastro Final Modal */}
      {showCadastroFinal && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Bot className="h-6 w-6 text-blue-300" />
                <h3 className="text-xl font-bold text-white">FINALIZAR CONTRATAÇÃO</h3>
              </div>
              <button
                onClick={() => setShowCadastroFinal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCadastroFinalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">NOME COMPLETO</label>
                  <input
                    type="text"
                    required
                    value={cadastroFinalData.nomeCompleto}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, nomeCompleto: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">WHATSAPP</label>
                  <input
                    type="tel"
                    required
                    value={cadastroFinalData.whatsapp}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, whatsapp: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">E-MAIL</label>
                  <input
                    type="email"
                    required
                    value={cadastroFinalData.email}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, email: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CNPJ/CPF</label>
                  <input
                    type="text"
                    required
                    value={cadastroFinalData.cnpjCpf}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, cnpjCpf: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">ENDEREÇO</label>
                <input
                  type="text"
                  required
                  value={cadastroFinalData.endereco}
                  onChange={(e) => setCadastroFinalData({...cadastroFinalData, endereco: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CIDADE</label>
                  <input
                    type="text"
                    required
                    value={cadastroFinalData.cidade}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, cidade: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">ESTADO</label>
                  <input
                    type="text"
                    required
                    value={cadastroFinalData.estado}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, estado: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">CEP</label>
                  <input
                    type="text"
                    required
                    value={cadastroFinalData.cep}
                    onChange={(e) => setCadastroFinalData({...cadastroFinalData, cep: e.target.value})}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">PRODUTO ESCOLHIDO</label>
                <select
                  required
                  value={cadastroFinalData.produtoEscolhido}
                  onChange={(e) => setCadastroFinalData({...cadastroFinalData, produtoEscolhido: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                >
                  <option value="">Selecione o produto</option>
                  <option value="Nível 2 - Integrado (R$ 397 setup + R$ 397/mês)">Nível 2 - Integrado (R$ 397 setup + R$ 397/mês)</option>
                  <option value="Nível 3 - Avançado (R$ 497 setup + R$ 497/mês)">Nível 3 - Avançado (R$ 497 setup + R$ 497/mês)</option>
                  <option value="Serviços Contábeis">Serviços Contábeis</option>
                  <option value="Consultoria Empresarial">Consultoria Empresarial</option>
                  <option value="Treinamentos">Treinamentos e Cursos</option>
                  <option value="EDA Social">EDA Social - Projeto de Inclusão</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">FORMA DE PAGAMENTO</label>
                <select
                  required
                  value={cadastroFinalData.formaPagamento}
                  onChange={(e) => setCadastroFinalData({...cadastroFinalData, formaPagamento: e.target.value})}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white"
                >
                  <option value="">Selecione a forma de pagamento</option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="Boleto Bancário">Boleto Bancário</option>
                  <option value="PIX">PIX</option>
                  <option value="Transferência Bancária">Transferência Bancária</option>
                </select>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="termoAceite"
                  required
                  checked={cadastroFinalData.termoAceite}
                  onChange={(e) => setCadastroFinalData({...cadastroFinalData, termoAceite: e.target.checked})}
                  className="mt-1"
                />
                <label htmlFor="termoAceite" className="text-sm text-gray-300">
                  Aceito os termos de serviço e autorizo o processamento dos meus dados pessoais conforme a LGPD. Concordo em receber comunicações sobre os serviços contratados.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-5 w-5" />
                <span>FINALIZAR CONTRATAÇÃO</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EssencialBotChat;