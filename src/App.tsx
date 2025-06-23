import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  Users, 
  GraduationCap, 
  Settings, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle,
  Star,
  Target,
  Shield,
  Lightbulb,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  FileText,
  Briefcase,
  BookOpen,
  Cpu,
  Network,
  Smartphone,
  Globe,
  Lock,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleCTAClick = (action: string) => {
    trackEvent('cta_click', { action });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <SEOHead />
        
        {/* Circuit Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Horizontal Lines */}
            <line x1="0" y1="100" x2="1920" y2="100" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="0" y1="200" x2="1920" y2="200" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.4"/>
            <line x1="0" y1="300" x2="1920" y2="300" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="0" y1="400" x2="1920" y2="400" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.3"/>
            <line x1="0" y1="500" x2="1920" y2="500" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="0" y1="600" x2="1920" y2="600" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.4"/>
            <line x1="0" y1="700" x2="1920" y2="700" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="0" y1="800" x2="1920" y2="800" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.3"/>
            <line x1="0" y1="900" x2="1920" y2="900" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            
            {/* Vertical Lines */}
            <line x1="200" y1="0" x2="200" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.4"/>
            <line x1="400" y1="0" x2="400" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="600" y1="0" x2="600" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.3"/>
            <line x1="800" y1="0" x2="800" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="1000" y1="0" x2="1000" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.4"/>
            <line x1="1200" y1="0" x2="1200" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <line x1="1400" y1="0" x2="1400" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.3"/>
            <line x1="1600" y1="0" x2="1600" y2="1080" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            
            {/* Circuit Nodes */}
            <circle cx="200" cy="100" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="400" cy="200" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="600" cy="300" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="800" cy="400" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="1000" cy="500" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="1200" cy="600" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="1400" cy="700" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            <circle cx="1600" cy="800" r="3" fill="url(#neonGradient)" opacity="0.8"/>
            
            {/* Diagonal Connections */}
            <line x1="200" y1="100" x2="400" y2="200" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="400" y1="200" x2="600" y2="300" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="600" y1="300" x2="800" y2="400" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="800" y1="400" x2="1000" y2="500" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="1000" y1="500" x2="1200" y2="600" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="1200" y1="600" x2="1400" y2="700" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            <line x1="1400" y1="700" x2="1600" y2="800" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.5"/>
            
            {/* Circuit Components */}
            <rect x="190" y="90" width="20" height="20" fill="none" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <rect x="590" y="290" width="20" height="20" fill="none" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <rect x="990" y="490" width="20" height="20" fill="none" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            <rect x="1390" y="690" width="20" height="20" fill="none" stroke="url(#neonGradient)" strokeWidth="1" opacity="0.6"/>
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00BFFF" stopOpacity="1"/>
                <stop offset="50%" stopColor="#1E90FF" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Header */}
        <header className="relative z-10 px-6 py-4">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold">EXÉRCITO DE AGENTES</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('automation')} className="hover:text-cyan-400 transition-colors font-medium">AUTOMAÇÃO IA</button>
              <button onClick={() => scrollToSection('accounting')} className="hover:text-cyan-400 transition-colors font-medium">CONTABILIDADE</button>
              <button onClick={() => scrollToSection('consulting')} className="hover:text-cyan-400 transition-colors font-medium">CONSULTORIA</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors font-medium">ENSINO PRÓ</button>
              <button onClick={() => scrollToSection('agents')} className="hover:text-cyan-400 transition-colors font-medium">PERSONALIZAÇÃO DE IA</button>
              <button onClick={() => scrollToSection('mission')} className="hover:text-cyan-400 transition-colors font-medium">MISSÃO</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors font-medium">CONTATO</button>
            </div>

            <div className="flex items-center space-x-4">
              <a href={`https://wa.me/${config.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              EXÉRCITO DE <span className="text-cyan-400">AGENTES</span>
            </h1>
            <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed">
              Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - IA avançada, automação inteligente,<br />
              contabilidade smart e consultoria especializada
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16">
              {/* Automação IA */}
              <a 
                href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:bg-blue-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20"
              >
                <div className="bg-blue-500 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Automação IA</h3>
                <p className="text-gray-300 text-sm">EssencialBot personalizado para seu negócio</p>
              </a>

              {/* Contabilidade */}
              <a 
                href="https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 hover:bg-green-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20"
              >
                <div className="bg-green-500 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contabilidade</h3>
                <p className="text-gray-300 text-sm">Escritório contábil completo e inteligente</p>
              </a>

              {/* Consultoria */}
              <a 
                href="https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-purple-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:bg-purple-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20"
              >
                <div className="bg-purple-500 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consultoria</h3>
                <p className="text-gray-300 text-sm">Gestão empresarial e recuperação judicial</p>
              </a>

              {/* Educação */}
              <a 
                href="https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 hover:bg-orange-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-400/20"
              >
                <div className="bg-orange-500 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Educação</h3>
                <p className="text-gray-300 text-sm">Treinamentos em IA e contabilidade</p>
              </a>

              {/* Personalização IA */}
              <div className="bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:bg-cyan-600/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 cursor-pointer">
                <div className="bg-cyan-500 rounded-xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalização IA</h3>
                <p className="text-gray-300 text-sm">Agentes customizados para suas necessidades</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => {
                  handleCTAClick('começar_agora');
                  scrollToSection('contact');
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                COMEÇAR AGORA
              </button>
              <a 
                href="https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleCTAClick('falar_essencialbot')}
                className="px-8 py-4 bg-transparent border-2 border-cyan-400 rounded-full text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                FALAR COM ESSENCIALBOT
              </a>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Zap className="inline-block h-12 w-12 text-blue-400 mr-4" />
                AUTOMAÇÃO IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu negócio com o EssencialBot - nossa IA avançada que automatiza processos, 
                otimiza operações e impulsiona resultados
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">🤖 EssencialBot Nível 2 - Integrado</h3>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />EssencialBot personalizado</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Integração Google Sheets</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Automação Make/Zapier</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Relatórios automáticos</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Suporte prioritário</li>
                  </ul>
                  <div className="bg-blue-900/50 rounded-xl p-4 mb-6">
                    <p className="text-2xl font-bold text-blue-300">R$ 297,00/mês</p>
                  </div>
                  <a 
                    href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                  >
                    Consultar Agente <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">🚀 EssencialBot Nível 3 - Avançado</h3>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Tudo do Nível 2 +</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Machine Learning avançado</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Análise preditiva</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Multi-plataformas</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Consultoria incluída</li>
                  </ul>
                  <div className="bg-purple-900/50 rounded-xl p-4 mb-6">
                    <p className="text-2xl font-bold text-purple-300">R$ 497,00/mês</p>
                  </div>
                  <a 
                    href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                  >
                    Consultar Agente <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
                  <Bot className="h-16 w-16 text-blue-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Por que escolher o EssencialBot?</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1" />
                      <span>IA treinada especificamente para seu negócio</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <span>Automação de processos complexos</span>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                      <span>Aumento de produtividade em até 300%</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                      <span>Segurança e conformidade LGPD</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center">
                  <a 
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre o EssencialBot`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Calculator className="inline-block h-12 w-12 text-green-400 mr-4" />
                CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia avançada e automação inteligente
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <FileText className="h-12 w-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Serviços Essenciais</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Abertura de empresas</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Contabilidade mensal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Obrigações fiscais</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Departamento pessoal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Planejamento tributário</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <BarChart3 className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Tecnologia Avançada</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Automação com IA</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Relatórios em tempo real</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Dashboard inteligente</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Integração bancária</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Backup automático</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <Award className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Diferenciais</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Atendimento 100% online</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Suporte via WhatsApp</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Consultoria incluída</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Preços competitivos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Conformidade LGPD</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Contabilidade Inteligente <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href={`mailto:${config.EMAIL_CONTACT}?subject=Interesse em Serviços Contábeis`}
                  className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Briefcase className="inline-block h-12 w-12 text-purple-400 mr-4" />
                CONSULTORIA EMPRESARIAL
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consultoria especializada em gestão, recuperação judicial e transformação digital
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">🎯 Áreas de Atuação</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-green-400 mr-3" />
                        <span>Gestão Empresarial</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-400 mr-3" />
                        <span>Fluxo de Caixa</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-green-400 mr-3" />
                        <span>Recuperação Judicial</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <BarChart3 className="h-5 w-5 text-blue-400 mr-3" />
                        <span>Busca de Crédito</span>
                      </div>
                      <div className="flex items-center">
                        <Network className="h-5 w-5 text-blue-400 mr-3" />
                        <span>Fusões e Aquisições</span>
                      </div>
                      <div className="flex items-center">
                        <Bot className="h-5 w-5 text-blue-400 mr-3" />
                        <span>Consultoria com IA</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">💼 Metodologia Exclusiva</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <span>Diagnóstico completo da situação empresarial</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <span>Plano de ação personalizado com IA</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <span>Acompanhamento contínuo dos resultados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <span>Relatórios executivos automatizados</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-orange-400">🏆 Casos de Sucesso</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-bold text-green-400">Recuperação Judicial</h4>
                      <p className="text-gray-300 text-sm">Empresa do setor alimentício - Recuperação de R$ 2,3M em dívidas</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-bold text-blue-400">Otimização de Fluxo</h4>
                      <p className="text-gray-300 text-sm">E-commerce - Redução de 40% nos custos operacionais</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-bold text-purple-400">Transformação Digital</h4>
                      <p className="text-gray-300 text-sm">Indústria - Automação completa com IA, +200% produtividade</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href="https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-4"
                  >
                    Consultar Expert <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <p className="text-gray-400 text-sm">Consultoria inicial gratuita via WhatsApp</p>
                  <a 
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Preciso de consultoria empresarial`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition-colors mt-2"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Gratuito
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <BookOpen className="inline-block h-12 w-12 text-orange-400 mr-4" />
                EDUCAÇÃO PRÓ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em contabilidade, controladoria, gestão financeira e IA empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <Bot className="h-12 w-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-blue-400">🤖 IA Empresarial</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Fundamentos de IA para negócios</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Implementação de Chatbots</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Machine Learning aplicado</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Automação de processos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Projetos práticos</li>
                </ul>
                <div className="bg-blue-900/50 rounded-xl p-4">
                  <p className="text-lg font-bold text-blue-300">40h • Certificação • Projetos</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <Calculator className="h-12 w-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-green-400">📊 Contabilidade Digital</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Contabilidade 4.0</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />SPED e obrigações digitais</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Análise de balanços</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Planejamento tributário</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Casos práticos</li>
                </ul>
                <div className="bg-green-900/50 rounded-xl p-4">
                  <p className="text-lg font-bold text-green-300">60h • Certificação • Estágio</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <Shield className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-purple-400">🛡️ Controladoria</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Controles internos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Auditoria interna</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Compliance empresarial</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Gestão de riscos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Relatórios gerenciais</li>
                </ul>
                <div className="bg-purple-900/50 rounded-xl p-4">
                  <p className="text-lg font-bold text-purple-300">50h • Certificação • Mentoria</p>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <DollarSign className="h-12 w-12 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">💰 Gestão Financeira</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Fluxo de caixa avançado</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Análise financeira</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Orçamento empresarial</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Valuation de empresas</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-3" />Simulações práticas</li>
                </ul>
                <div className="bg-yellow-900/50 rounded-xl p-4">
                  <p className="text-lg font-bold text-yellow-300">45h • Certificação • Consultoria</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">🎓 Metodologia Exclusiva</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-bold">Flexível</h4>
                    <p className="text-sm text-gray-300">Estude no seu ritmo</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <h4 className="font-bold">Certificado</h4>
                    <p className="text-sm text-gray-300">Reconhecido no mercado</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="font-bold">Mentoria</h4>
                    <p className="text-sm text-gray-300">Suporte especializado</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Educação Pró <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Settings className="inline-block h-12 w-12 text-cyan-400 mr-4" />
                PERSONALIZAÇÃO DE IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Agentes de IA customizados para suas necessidades específicas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">🤖 Agentes Personalizados</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start">
                      <Cpu className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Atendimento ao Cliente</span>
                        <p className="text-sm text-gray-400">IA treinada para seu negócio específico</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Network className="h-5 w-5 text-green-400 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Automação de Processos</span>
                        <p className="text-sm text-gray-400">Workflows inteligentes personalizados</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="h-5 w-5 text-purple-400 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Análise de Dados</span>
                        <p className="text-sm text-gray-400">Insights automáticos do seu negócio</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Smartphone className="h-5 w-5 text-orange-400 mr-3 mt-1" />
                      <div>
                        <span className="font-semibold">Integração Multi-canal</span>
                        <p className="text-sm text-gray-400">WhatsApp, site, e-mail, redes sociais</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">💎 Investimento</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Setup Inicial</span>
                      <span className="text-2xl font-bold text-cyan-300">R$ 120,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Manutenção</span>
                      <span className="text-2xl font-bold text-cyan-300">R$ 50,00 a manutenção</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-400">✅ Processo de Criação</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-bold">Análise de Necessidades</h4>
                        <p className="text-gray-300 text-sm">Entendemos seu negócio e objetivos</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-bold">Desenvolvimento</h4>
                        <p className="text-gray-300 text-sm">Criamos e treinamos seu agente personalizado</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-bold">Testes e Ajustes</h4>
                        <p className="text-gray-300 text-sm">Refinamos até atingir a perfeição</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-bold">Implementação</h4>
                        <p className="text-gray-300 text-sm">Colocamos seu agente em produção</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de criar um agente de IA personalizado`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Settings className="mr-3 h-5 w-5" />
                    Criar Meu Agente
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Target className="inline-block h-12 w-12 text-blue-400 mr-4" />
                NOSSA MISSÃO
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 text-center">
                <Lightbulb className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">INOVAÇÃO</h3>
                <p className="text-gray-300">
                  Revolucionar o mercado empresarial através da inteligência artificial, 
                  oferecendo soluções que transformam a forma como as empresas operam.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 text-center">
                <Users className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">EXCELÊNCIA</h3>
                <p className="text-gray-300">
                  Entregar serviços de alta qualidade em contabilidade, consultoria e automação, 
                  sempre superando as expectativas dos nossos clientes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 text-center">
                <TrendingUp className="h-16 w-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">CRESCIMENTO</h3>
                <p className="text-gray-300">
                  Impulsionar o crescimento sustentável dos nossos clientes através de 
                  tecnologia avançada, educação e consultoria estratégica.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-cyan-400">NOSSO COMPROMISSO</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  "Acreditamos que a inteligência artificial não substitui o humano, mas potencializa suas capacidades. 
                  Nossa missão é democratizar o acesso à tecnologia avançada, permitindo que empresas de todos os 
                  tamanhos possam competir em igualdade no mercado digital."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-lg font-semibold">Exército de Agentes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <HelpCircle className="inline-block h-12 w-12 text-green-400 mr-4" />
                SUPORTE
              </h2>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-center text-green-400">FAQ (Perguntas Frequentes)</h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-green-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-green-400" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Suporte Técnico</h3>
              <p className="text-gray-300 mb-6">Caso enfrente problemas técnicos, entre em contato por:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-400 mr-3" />
                    <div>
                      <span className="font-semibold">E-mail:</span>
                      <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-blue-400 hover:text-blue-300 ml-2">
                        {config.EMAIL_CONTACT}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Chat: disponível no canto inferior direito do site (horário comercial)</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-400 mr-3" />
                    <span>Tempo de resposta: até 24h úteis</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-purple-400 mr-3" />
                    <span>Canais emergenciais: disponíveis em planos com SLA contratado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Phone className="inline-block h-12 w-12 text-blue-400 mr-4" />
                CONTATO
              </h2>
              <p className="text-xl text-gray-300">
                Entre em contato conosco e transforme seu negócio hoje mesmo
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-green-400">📱 Contato Direto</h3>
                  <div className="space-y-4">
                    <a 
                      href={`https://wa.me/${config.WHATSAPP_NUMBER}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-green-600/20 border border-green-400/30 rounded-xl hover:bg-green-600/30 transition-colors"
                    >
                      <MessageCircle className="h-8 w-8 text-green-400 mr-4" />
                      <div>
                        <span className="font-semibold block">WhatsApp</span>
                        <span className="text-gray-300">(11) 91175-7113</span>
                      </div>
                    </a>
                    
                    <a 
                      href={`mailto:${config.EMAIL_CONTACT}`}
                      className="flex items-center p-4 bg-blue-600/20 border border-blue-400/30 rounded-xl hover:bg-blue-600/30 transition-colors"
                    >
                      <Mail className="h-8 w-8 text-blue-400 mr-4" />
                      <div>
                        <span className="font-semibold block">E-mail</span>
                        <span className="text-gray-300">{config.EMAIL_CONTACT}</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-purple-400">🤖 Assistentes Especializados</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-purple-600/20 border border-purple-400/30 rounded-lg hover:bg-purple-600/30 transition-colors"
                    >
                      <span>Contabilidade Inteligente / Consultoria Empresarial, Educação Pró</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">💬 Fale Conosco</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Serviço de Interesse</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent">
                      <option>Automação IA</option>
                      <option>Contabilidade</option>
                      <option>Consultoria</option>
                      <option>Educação</option>
                      <option>Personalização IA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Descreva sua necessidade..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="relative z-10 px-6 py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <Lock className="inline-block h-12 w-12 text-purple-400 mr-4" />
                LEGAL
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Privacy Policy */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Política de Privacidade</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    A Exército de Agentes Contabilidade e Consultoria Ltda (CNPJ [CNPJ_AQUI]), 
                    respeita a sua privacidade. Esta política descreve como coletamos, usamos, 
                    armazenamos e protegemos seus dados pessoais.
                  </p>
                  <div>
                    <h4 className="font-bold text-white mb-2">1. Dados Coletados:</h4>
                    <p>Nome, e-mail, telefone, CPF/CNPJ, dados bancários, dados de acesso e interações no site, histórico de atendimento e dados sensíveis (como dados financeiros).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">2. Finalidade:</h4>
                    <p>Prestação de serviços, atendimento personalizado, melhoria contínua, obrigações legais e marketing autorizado.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">3. Compartilhamento:</h4>
                    <p>Com parceiros tecnológicos (CRMs, provedores de IA, servidores de nuvem), sempre com cláusulas de confidencialidade.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">4. Direitos do Titular:</h4>
                    <p>Acesso, correção, portabilidade, exclusão, revogação de consentimento. Solicitações pelo e-mail: <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-blue-400">{config.EMAIL_CONTACT}</a></p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">5. Segurança:</h4>
                    <p>Usamos criptografia, autenticação em dois fatores, firewalls e backups criptografados.</p>
                  </div>
                </div>
              </div>

              {/* Terms of Use */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-green-400">Termos de Uso</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    Ao acessar e utilizar os serviços da Exército de Agentes, você concorda com os termos abaixo:
                  </p>
                  <div>
                    <h4 className="font-bold text-white mb-2">1. Uso dos Serviços:</h4>
                    <p>O usuário se compromete a fornecer informações verdadeiras e utilizar os serviços de forma ética e legal.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">2. Propriedade Intelectual:</h4>
                    <p>Todo o conteúdo do site, plataformas e materiais de treinamento são protegidos por direitos autorais. É proibida a reprodução não autorizada.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">3. Responsabilidades:</h4>
                    <p>Não garantimos resultados específicos. Nossos serviços são consultivos e operacionais, conforme escopo contratado.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">4. Modificações:</h4>
                    <p>Podemos alterar os Termos. Recomendamos consulta periódica.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">5. Foro:</h4>
                    <p>Fica eleito o foro da comarca de [Cidade/Sede], para dirimir quaisquer controvérsias.</p>
                  </div>
                </div>
              </div>

              {/* LGPD */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">LGPD (Política de Tratamento de Dados)</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    Esta política visa demonstrar o compromisso da Exército de Agentes com a 
                    Lei Geral de Proteção de Dados (Lei 13.709/18).
                  </p>
                  <div>
                    <h4 className="font-bold text-white mb-2">1. Controlador:</h4>
                    <p>Exército de Agentes Contabilidade e Consultoria Ltda</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">2. Encarregado de Dados:</h4>
                    <p>Nomeado internamente – contato via <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-purple-400">{config.EMAIL_CONTACT}</a></p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">3. Fundamento Legal:</h4>
                    <p>Tratamos dados com base no consentimento, execução de contrato e obrigação legal.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">4. Tempo de Retenção:</h4>
                    <p>Dados são armazenados pelo tempo necessário para a finalidade legal ou contratual.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">5. Reclamações:</h4>
                    <p>O titular pode recorrer à ANPD ou ao nosso canal interno: <a href={`mailto:${config.EMAIL_CONTACT}`} className="text-purple-400">{config.EMAIL_CONTACT}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 px-6 py-12 bg-black/50 backdrop-blur-sm border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Transformando negócios com inteligência artificial, automação e consultoria especializada.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">SERVIÇOS</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-white transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-white transition-colors">Contabilidade</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-white transition-colors">Consultoria</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors">Educação</button></li>
                  <li><button onClick={() => scrollToSection('agents')} className="hover:text-white transition-colors">Personalização IA</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">CONTATO</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href={`https://wa.me/${config.WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      WhatsApp: (11) 91175-7113
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${config.EMAIL_CONTACT}`} className="hover:text-white transition-colors">
                      {config.EMAIL_CONTACT}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">LEGAL</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><button onClick={() => scrollToSection('legal')} className="hover:text-white transition-colors">Política de Privacidade</button></li>
                  <li><button onClick={() => scrollToSection('legal')} className="hover:text-white transition-colors">Termos de Uso</button></li>
                  <li><button onClick={() => scrollToSection('legal')} className="hover:text-white transition-colors">LGPD</button></li>
                  <li><button onClick={() => scrollToSection('support')} className="hover:text-white transition-colors">Suporte</button></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 Exército de Agentes. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* EssencialBot Chat */}
        <EssencialBotChat />
      </div>
    </HelmetProvider>
  );
}

export default App;