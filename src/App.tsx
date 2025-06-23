import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  Users, 
  GraduationCap, 
  Settings,
  ArrowRight, 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Palette,
  Search,
  Brain,
  ShoppingCart,
  Award,
  Wrench,
  MapPin as MapPinIcon,
  Dumbbell,
  Plus,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  FileText,
  Shield,
  X
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showLGPDModal, setShowLGPDModal] = useState(false);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechStart Solutions",
      text: "O EssencialBot revolucionou nossa operação. Automatizamos 80% dos processos repetitivos e aumentamos a produtividade em 300%.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Boutique Fashion",
      text: "A contabilidade inteligente da Exército de Agentes nos deu controle total sobre as finanças. Recomendo para qualquer empresa!",
      rating: 5
    },
    {
      name: "Roberto Lima",
      company: "Construtora Lima & Filhos",
      text: "A consultoria em recuperação judicial salvou nossa empresa. Profissionais excepcionais e resultados comprovados.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "Quais serviços a Exército de Agentes oferece?",
      answer: "Oferecemos contabilidade digital, consultoria financeira, implantação de inteligência artificial, automações empresariais, ensino e treinamentos corporativos."
    },
    {
      question: "Como funcionam os atendimentos?",
      answer: "Todo o suporte e consultoria são realizados 100% online, por canais como e-mail, chat, videoconferência e plataformas especializadas."
    },
    {
      question: "Quais tecnologias são utilizadas?",
      answer: "Utilizamos ferramentas de automação, CRMs, plataformas de IA (como GPT) e softwares contábeis integrados."
    },
    {
      question: "É seguro compartilhar meus dados?",
      answer: "Sim. Todos os dados são tratados conforme a LGPD, com protocolos de segurança e criptografia em nossos sistemas."
    },
    {
      question: "Posso cancelar um serviço?",
      answer: "Sim, os contratos são regidos por cláusulas específicas. Consulte o Termo de Uso ou contate o suporte para orientações."
    }
  ];

  const aiAgents = [
    {
      name: "Agente de Renovação Visual",
      description: "Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.",
      icon: Palette,
      color: "from-pink-500 to-rose-400"
    },
    {
      name: "Pesquisador de Mercado",
      description: "Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.",
      icon: Search,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Compilador de Insights",
      description: "Traduz complexidade em decisão lúcida com precisão lógica.",
      icon: Brain,
      color: "from-purple-500 to-indigo-400"
    },
    {
      name: "Agente Buscador de Cupons",
      description: "Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-400"
    },
    {
      name: "Avaliador de QIs",
      description: "Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.",
      icon: Award,
      color: "from-yellow-500 to-orange-400"
    },
    {
      name: "Encanador Especialista",
      description: "Atuar como especialista sênior em sistemas hidráulicos residenciais e comerciais.",
      icon: Wrench,
      color: "from-gray-500 to-slate-400"
    },
    {
      name: "Passeios em SP",
      description: "Ser o estrategista urbano supremo, capaz de transformar desejos subjetivos em vivências memoráveis em São Paulo.",
      icon: MapPinIcon,
      color: "from-red-500 to-pink-400"
    },
    {
      name: "Treinadores Especializados",
      description: "Treinadores de diversas modalidades para otimizar seu desenvolvimento pessoal e profissional.",
      icon: Dumbbell,
      color: "from-teal-500 to-cyan-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('navigation_click', { section: sectionId });
    }
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'header' });
    window.open(`https://wa.me/${config.WHATSAPP_NUMBER}`, '_blank');
  };

  const handleEmailClick = () => {
    trackEvent('email_click', { source: 'header' });
    window.open(`mailto:${config.EMAIL_CONTACT}`, '_blank');
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-blue-400/30">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-white tracking-wider">
                  EXÉRCITO DE AGENTES
                </h1>
                <p className="text-blue-300 text-sm mt-1">AUTOMAÇÃO INTELIGENTE COM ESSENCIALBOT</p>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                A Revolução da <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Automação Inteligente</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transforme seu negócio com EssencialBot - IA avançada, contabilidade smart, consultoria especializada e educação de ponta. Sua empresa merece estar no futuro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50"
                >
                  Conhecer EssencialBot
                </button>
                <button 
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-300 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Falar com Especialista
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <div 
                onClick={() => scrollToSection('automation')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AUTOMAÇÃO IA</h3>
                <p className="text-gray-300 text-sm">EssencialBot personalizado para seu negócio</p>
              </div>

              <div 
                onClick={() => window.open('https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil', '_blank')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CONTABILIDADE INTELIGENTE</h3>
                <p className="text-gray-300 text-sm">Escritório contábil completo e inteligente</p>
              </div>

              <div 
                onClick={() => window.open('https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial', '_blank')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">CONSULTORIA EMPRESARIAL</h3>
                <p className="text-gray-300 text-sm">Gestão empresarial e recuperação judicial</p>
              </div>

              <div 
                onClick={() => window.open('https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro', '_blank')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-orange-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">EDUCAÇÃO PRÓ</h3>
                <p className="text-gray-300 text-sm">Treinamentos em IA e contabilidade</p>
              </div>

              <div 
                onClick={() => window.open('https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal', '_blank')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">PERSONALIZAÇÃO DE IA</h3>
                <p className="text-gray-300 text-sm">Personalize seu Agente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Nossa Essência Estratégica</h2>
              <p className="text-xl text-gray-300">Os valores que nos movem e definem nossa cultura</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Missão */}
              <div className="p-8 bg-gradient-to-br from-blue-900/50 to-cyan-900/30 rounded-2xl border border-blue-400/30">
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-fit mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">🔹 MISSÃO</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Democratizar o acesso à inteligência artificial e à automação para pequenos negócios, oferecendo soluções contábeis, consultivas e tecnológicas que aliviem a sobrecarga operacional e impulsionem o crescimento sustentável com eficiência e humanidade.
                </p>
              </div>

              {/* Visão */}
              <div className="p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl border border-purple-400/30">
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-fit mx-auto mb-4">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">🔭 VISÃO</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Ser referência nacional em soluções inteligentes e acessíveis para pequenos empreendedores, tornando a tecnologia uma aliada prática, confiável e presente no cotidiano dos que mais precisam — e menos têm acesso.
                </p>
              </div>

              {/* Valores */}
              <div className="p-8 bg-gradient-to-br from-green-900/50 to-emerald-900/30 rounded-2xl border border-green-400/30">
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">💎 VALORES</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p><strong>Respeito acima de tudo:</strong> Não toleramos desrespeito em nenhuma forma</p>
                  <p><strong>Disciplina com empatia:</strong> Agimos com firmeza e método, mas sempre com humanidade</p>
                  <p><strong>Tecnologia para todos:</strong> Acreditamos que inovação só faz sentido se for acessível</p>
                  <p><strong>Compromisso com o resultado:</strong> Não paramos até conseguir</p>
                </div>
              </div>
            </div>

            {/* Frases-Símbolo */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-8">🧠 Frases-Símbolo da Nossa Cultura</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl border border-blue-400/30">
                  <p className="text-lg font-semibold text-blue-300">"Não paramos até conseguir!"</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-xl border border-purple-400/30">
                  <p className="text-lg font-semibold text-purple-300">"A tecnologia está acessível a todos!"</p>
                </div>
                <div className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-xl border border-green-400/30">
                  <p className="text-lg font-semibold text-green-300">"Respeito, estrutura e entrega!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">EssencialBot - Automação Inteligente</h2>
              <p className="text-xl text-gray-300">Revolucione seu negócio com IA personalizada</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Nível 2 - Integrado */}
              <div className="p-8 bg-gradient-to-br from-blue-900/50 to-cyan-900/30 rounded-2xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-fit mx-auto mb-4">
                    <Bot className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">NÍVEL 2 - INTEGRADO</h3>
                  <p className="text-3xl font-bold text-blue-300">R$ 397<span className="text-lg">/mês</span></p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">EssencialBot personalizado para seu negócio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Integração automática com Google Sheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Automações Make/Zapier incluídas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Relatórios automáticos personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Suporte prioritário via WhatsApp</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  Contratar Nível 2
                </button>
              </div>

              {/* Nível 3 - Avançado */}
              <div className="p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-fit mx-auto mb-4">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">NÍVEL 3 - AVANÇADO</h3>
                  <p className="text-3xl font-bold text-purple-300">R$ 497<span className="text-lg">/mês</span></p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Tudo do Nível 2 incluído</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Machine Learning avançado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Análise preditiva de dados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Integração multi-plataformas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">Consultoria empresarial incluída</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">API personalizada para integração</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                >
                  Contratar Nível 3
                </button>
              </div>
            </div>

            {/* Personalização de IA */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="p-8 bg-gradient-to-br from-cyan-900/50 to-teal-900/30 rounded-2xl border border-cyan-400/30">
                <div className="text-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full w-fit mx-auto mb-4">
                    <Settings className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">PERSONALIZAÇÃO DE IA</h3>
                  <p className="text-gray-300 mb-6">Crie agentes especializados para necessidades específicas do seu negócio</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">Investimento:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                        <span className="text-gray-300">Setup Inicial</span>
                        <span className="text-cyan-300 font-bold">R$ 120,00</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                        <span className="text-gray-300">R$ 50,00 a manutenção</span>
                        <span className="text-cyan-300 font-bold">R$ 50,00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">Agente totalmente personalizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">Treinamento específico do seu setor</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">Integração com seus sistemas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">Suporte técnico especializado</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal', '_blank')}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-lg font-semibold hover:from-cyan-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-105"
                >
                  Personalizar Meu Agente
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">IAs Personalizadas</h2>
              <p className="text-xl text-cyan-300 mb-8 font-semibold">
                "Você não sabe que precisa desses agentes até conhecê-los!"
              </p>
              <p className="text-gray-300">
                Descubra nossa coleção de agentes especializados que podem revolucionar diferentes aspectos do seu negócio e vida pessoal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {aiAgents.map((agent, index) => (
                <div key={index} className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20">
                  <div className={`p-3 bg-gradient-to-r ${agent.color} rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <agent.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center">{agent.name}</h3>
                  <p className="text-gray-300 text-sm text-center leading-relaxed">{agent.description}</p>
                </div>
              ))}
            </div>

            {/* More Agents Card */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="group p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Plus className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">E muito mais...</h3>
                <p className="text-gray-300 mb-6">
                  Temos mais de <span className="text-purple-300 font-bold">250 modelos de agentes</span> especializados que podem facilitar seu dia a dia, desde tarefas simples até processos complexos de negócio.
                </p>
                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal', '_blank')}
                  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                >
                  Explorar Todos os Agentes
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-xl text-gray-300">Resultados reais de empresas que transformaram seus negócios</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-blue-400/30">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                      <p className="text-blue-300">{testimonials[activeTestimonial].company}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial ? 'bg-blue-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-300">Pronto para transformar seu negócio? Fale conosco!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8 bg-gradient-to-br from-blue-900/50 to-cyan-900/30 rounded-2xl border border-blue-400/30">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WHATSAPP</h3>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  (11) 91175-7113
                </a>
                <p className="text-gray-400 text-sm mt-2">Atendimento 24/7</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl border border-purple-400/30">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">E-MAIL</h3>
                <a 
                  href={`mailto:${config.EMAIL_CONTACT}`}
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  sac@exercitodeagentes.com.br
                </a>
                <p className="text-gray-400 text-sm mt-2">Resposta em até 2h</p>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-green-900/50 to-emerald-900/30 rounded-2xl border border-green-400/30">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full w-fit mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LOCALIZAÇÃO</h3>
                <p className="text-green-300">São Paulo, SP</p>
                <p className="text-gray-400 text-sm mt-2">Atendimento 100% online</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">FAQ - Perguntas Frequentes</h2>
              <p className="text-xl text-gray-300">Tire suas dúvidas sobre nossos serviços</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {activeFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    )}
                  </button>
                  {activeFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">Não encontrou sua resposta?</p>
              <button 
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Suporte</h2>
              <p className="text-xl text-gray-300">Estamos aqui para ajudar você em cada passo</p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Suporte Técnico */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Suporte Técnico</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-900/50 to-cyan-900/30 rounded-2xl border border-blue-400/30">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-fit mx-auto mb-4">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">WhatsApp</h4>
                    <p className="text-gray-300 text-sm mb-3">Suporte 24/7 via WhatsApp</p>
                    <a 
                      href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 transition-colors text-sm"
                    >
                      (11) 91175-7113
                    </a>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/30 rounded-2xl border border-purple-400/30">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-fit mx-auto mb-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">E-mail</h4>
                    <p className="text-gray-300 text-sm mb-3">Resposta em até 24h úteis</p>
                    <a 
                      href={`mailto:${config.EMAIL_CONTACT}`}
                      className="text-purple-300 hover:text-purple-200 transition-colors text-sm"
                    >
                      sac@exercitodeagentes.com.br
                    </a>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-green-900/50 to-emerald-900/30 rounded-2xl border border-green-400/30">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full w-fit mx-auto mb-4">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Chat</h4>
                    <p className="text-gray-300 text-sm mb-3">Disponível no canto inferior direito</p>
                    <p className="text-green-300 text-sm">Horário comercial</p>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-orange-900/50 to-red-900/30 rounded-2xl border border-orange-400/30">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-full w-fit mx-auto mb-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Emergencial</h4>
                    <p className="text-gray-300 text-sm mb-3">Canais emergenciais</p>
                    <p className="text-orange-300 text-sm">Planos com SLA contratado</p>
                  </div>
                </div>
              </div>

              {/* Compromisso */}
              <div className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Nosso Compromisso com a Excelência</h3>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Na Exército de Agentes, acreditamos que suporte de qualidade é fundamental para o sucesso dos nossos clientes. 
                  Nossa equipe está sempre pronta para ajudar, seja com questões técnicas, dúvidas sobre funcionalidades ou 
                  orientações estratégicas. Não paramos até conseguir resolver sua necessidade!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">EXÉRCITO DE AGENTES</h3>
                <p className="text-gray-400 mb-4">
                  Revolucionando negócios com automação inteligente e EssencialBot.
                </p>
                <div className="space-y-2">
                  <a 
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(11) 91175-7113</span>
                  </a>
                  <a 
                    href={`mailto:${config.EMAIL_CONTACT}`}
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-300 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>sac@exercitodeagentes.com.br</span>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">SERVIÇOS</h4>
                <ul className="space-y-2">
                  <li><a href="#automation" className="text-gray-400 hover:text-blue-300 transition-colors">Automação IA</a></li>
                  <li><a href="#accounting" className="text-gray-400 hover:text-blue-300 transition-colors">Contabilidade</a></li>
                  <li><a href="#consulting" className="text-gray-400 hover:text-blue-300 transition-colors">Consultoria</a></li>
                  <li><a href="#education" className="text-gray-400 hover:text-blue-300 transition-colors">Educação</a></li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">SUPORTE</h4>
                <ul className="space-y-2">
                  <li><a href="#faq" className="text-gray-400 hover:text-blue-300 transition-colors">FAQ</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-blue-300 transition-colors">Contato</a></li>
                  <li><a href={`https://wa.me/${config.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">WhatsApp</a></li>
                  <li><a href={`mailto:${config.EMAIL_CONTACT}`} className="text-gray-400 hover:text-blue-300 transition-colors">E-mail</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">LEGAL</h4>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-gray-400 hover:text-blue-300 transition-colors text-left"
                    >
                      Política de Privacidade
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowTermsModal(true)}
                      className="text-gray-400 hover:text-blue-300 transition-colors text-left"
                    >
                      Termos de Uso
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowLGPDModal(true)}
                      className="text-gray-400 hover:text-blue-300 transition-colors text-left"
                    >
                      LGPD
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Exército de Agentes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-300" />
                  <span>Política de Privacidade</span>
                </h3>
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>
                  A Exército de Agentes Contabilidade e Consultoria Ltda (CNPJ [CNPJ_AQUI]), respeita a sua privacidade. 
                  Esta política descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Dados Coletados:</h4>
                  <p>Nome, e-mail, telefone, CPF/CNPJ, dados bancários, dados de acesso e interações no site, histórico de atendimento e dados sensíveis (como dados financeiros).</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Finalidade:</h4>
                  <p>Prestação de serviços, atendimento personalizado, melhoria contínua, obrigações legais e marketing autorizado.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Compartilhamento:</h4>
                  <p>Com parceiros tecnológicos (CRMs, provedores de IA, servidores de nuvem), sempre com cláusulas de confidencialidade.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Direitos do Titular:</h4>
                  <p>Acesso, correção, portabilidade, exclusão, revogação de consentimento. Solicitações pelo e-mail: <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-blue-300 hover:text-blue-200">{config.EMAIL_CONTACT}</a></p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">5. Segurança:</h4>
                  <p>Usamos criptografia, autenticação em dois fatores, firewalls e backups criptografados.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terms Modal */}
        {showTermsModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-300" />
                  <span>Termos de Uso</span>
                </h3>
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>
                  Ao acessar e utilizar os serviços da Exército de Agentes, você concorda com os termos abaixo:
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Uso dos Serviços:</h4>
                  <p>O usuário se compromete a fornecer informações verdadeiras e utilizar os serviços de forma ética e legal.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Propriedade Intelectual:</h4>
                  <p>Todo o conteúdo do site, plataformas e materiais de treinamento são protegidos por direitos autorais. É proibida a reprodução não autorizada.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Responsabilidades:</h4>
                  <p>Não garantimos resultados específicos. Nossos serviços são consultivos e operacionais, conforme escopo contratado.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Modificações:</h4>
                  <p>Podemos alterar os Termos. Recomendamos consulta periódica.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">5. Foro:</h4>
                  <p>Fica eleito o foro da comarca de [Cidade/Sede], para dirimir quaisquer controvérsias.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LGPD Modal */}
        {showLGPDModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-300" />
                  <span>LGPD - Política de Tratamento de Dados</span>
                </h3>
                <button
                  onClick={() => setShowLGPDModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6 text-gray-300">
                <p>
                  Esta política visa demonstrar o compromisso da Exército de Agentes com a Lei Geral de Proteção de Dados (Lei 13.709/18).
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Controlador:</h4>
                  <p>Exército de Agentes Contabilidade e Consultoria Ltda</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Encarregado de Dados:</h4>
                  <p>Nomeado internamente – contato via <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-blue-300 hover:text-blue-200">{config.EMAIL_CONTACT}</a></p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Fundamento Legal:</h4>
                  <p>Tratamos dados com base no consentimento, execução de contrato e obrigação legal.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">4. Tempo de Retenção:</h4>
                  <p>Dados são armazenados pelo tempo necessário para a finalidade legal ou contratual.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">5. Reclamações:</h4>
                  <p>O titular pode recorrer à ANPD ou ao nosso canal interno: <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-blue-300 hover:text-blue-200">{config.EMAIL_CONTACT}</a></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EssencialBot Chat */}
        <EssencialBotChat />
      </div>
    </HelmetProvider>
  );
}

export default App;