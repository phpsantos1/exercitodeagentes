import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Building2, 
  Calculator, 
  Users, 
  GraduationCap, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MessageCircle, 
  Star,
  Target,
  Eye,
  Heart,
  Compass,
  Quote,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Clock,
  Shield,
  Headphones,
  FileText,
  Lock,
  Scale
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleCTAClick = (action: string) => {
    trackEvent('cta_click', { action });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-blue-400/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  AUTOMAÇÃO IA
                </button>
                <button 
                  onClick={() => scrollToSection('accounting')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  CONTABILIDADE
                </button>
                <button 
                  onClick={() => scrollToSection('consulting')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  CONSULTORIA
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  ENSINO PRÓ
                </button>
                <button 
                  onClick={() => scrollToSection('agents')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  PERSONALIZAÇÃO DE IA
                </button>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  MISSÃO
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  CONTATO
                </button>
              </nav>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white p-2"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                  <div className={`h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                </div>
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-blue-400/30">
                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={() => scrollToSection('automation')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    AUTOMAÇÃO IA
                  </button>
                  <button 
                    onClick={() => scrollToSection('accounting')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    CONTABILIDADE
                  </button>
                  <button 
                    onClick={() => scrollToSection('consulting')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    CONSULTORIA
                  </button>
                  <button 
                    onClick={() => scrollToSection('education')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    ENSINO PRÓ
                  </button>
                  <button 
                    onClick={() => scrollToSection('agents')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    PERSONALIZAÇÃO DE IA
                  </button>
                  <button 
                    onClick={() => scrollToSection('mission')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    MISSÃO
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-blue-300 transition-colors font-medium text-left"
                  >
                    CONTATO
                  </button>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30 mb-8">
                <Bot className="h-6 w-6 text-blue-300" />
                <span className="text-blue-200 font-medium">EssencialBot - Powered by AI</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                EXÉRCITO DE
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  AGENTES
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforme seu negócio com <strong className="text-blue-300">EssencialBot</strong> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => {
                    handleCTAClick('hero_cta_primary');
                    scrollToSection('automation');
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50 flex items-center space-x-2"
                >
                  <span>COMEÇAR AGORA</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <button 
                  onClick={() => {
                    handleCTAClick('hero_cta_secondary');
                    scrollToSection('agents');
                  }}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-300 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
                >
                  <Bot className="h-5 w-5" />
                  <span>CONHECER AGENTES</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30 mb-8">
                <Zap className="h-6 w-6 text-blue-300" />
                <span className="text-blue-200 font-medium">Automação Inteligente</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AUTOMAÇÃO IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seus processos com EssencialBot - nossa IA proprietária que automatiza, 
                otimiza e escala seu negócio de forma inteligente
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Nível 2 - Integrado</h3>
                      <p className="text-blue-300">Automação Completa</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">EssencialBot personalizado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Integração Google Sheets</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Automação Make/Zapier</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Relatórios automáticos</span>
                    </li>
                  </ul>
                  
                  <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">R$ 397,00</div>
                      <div className="text-blue-300">por mês</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Nível 3 - Avançado</h3>
                      <p className="text-cyan-300">IA Premium</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Tudo do Nível 2 +</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Machine Learning avançado</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Análise preditiva</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Multi-plataformas</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Consultoria incluída</span>
                    </li>
                  </ul>
                  
                  <div className="bg-cyan-500/20 rounded-xl p-6 border border-cyan-400/30">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">R$ 497,00</div>
                      <div className="text-cyan-300">por mês</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  handleCTAClick('automation_cta');
                  scrollToSection('contact');
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50 flex items-center space-x-2 mx-auto"
              >
                <span>CONTRATAR AUTOMAÇÃO</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30 mb-8">
                <Calculator className="h-6 w-6 text-green-300" />
                <span className="text-green-200 font-medium">Contabilidade Inteligente</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CONTABILIDADE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação inteligente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg w-fit mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Abertura de Empresas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Consultoria para escolha do tipo societário</li>
                  <li>• Registro na Junta Comercial</li>
                  <li>• Obtenção de CNPJ</li>
                  <li>• Inscrições municipais e estaduais</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg w-fit mb-6">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Contabilidade Mensal</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Escrituração contábil completa</li>
                  <li>• Balancetes e demonstrativos</li>
                  <li>• Conciliação bancária</li>
                  <li>• Análise de resultados</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg w-fit mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Obrigações Fiscais</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• SPED Contábil e Fiscal</li>
                  <li>• ECF (Escrituração Contábil Fiscal)</li>
                  <li>• DEFIS (Simples Nacional)</li>
                  <li>• Declarações diversas</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Diferencial Tecnológico</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Automação com EssencialBot</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Relatórios em tempo real</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Portal do cliente online</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Integração com sistemas</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30 mb-6">
                    <div className="text-2xl font-bold text-white mb-2">Planos Personalizados</div>
                    <div className="text-green-300">Consulte valores</div>
                  </div>
                  <button 
                    onClick={() => {
                      handleCTAClick('accounting_cta');
                      window.open('https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil', '_blank');
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg font-semibold text-white hover:from-green-600 hover:to-emerald-500 transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <span>Contabilidade Inteligente</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/30 mb-8">
                <Users className="h-6 w-6 text-purple-300" />
                <span className="text-purple-200 font-medium">Consultoria Especializada</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CONSULTORIA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consultoria empresarial completa com foco em resultados e recuperação de negócios
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg w-fit mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Gestão Empresarial</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Planejamento estratégico</li>
                  <li>• Reestruturação organizacional</li>
                  <li>• Otimização de processos</li>
                  <li>• Gestão de performance</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg w-fit mb-6">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fluxo de Caixa</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Controle financeiro rigoroso</li>
                  <li>• Projeções e cenários</li>
                  <li>• Otimização de capital de giro</li>
                  <li>• Análise de viabilidade</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg w-fit mb-6">
                  <Scale className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Recuperação Judicial</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Análise de viabilidade</li>
                  <li>• Plano de recuperação</li>
                  <li>• Negociação com credores</li>
                  <li>• Reestruturação completa</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg w-fit mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Busca de Crédito</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Análise de perfil creditício</li>
                  <li>• Negociação com factorings</li>
                  <li>• Estruturação de operações</li>
                  <li>• Acompanhamento completo</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg w-fit mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Fusões e Aquisições</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Due diligence completa</li>
                  <li>• Valuation empresarial</li>
                  <li>• Estruturação de negócios</li>
                  <li>• Integração pós-aquisição</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg w-fit mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Consultoria com IA</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Implementação de IA</li>
                  <li>• Automação de processos</li>
                  <li>• Análise preditiva</li>
                  <li>• Transformação digital</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  handleCTAClick('consulting_cta');
                  window.open('https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial', '_blank');
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/50 flex items-center space-x-2 mx-auto"
              >
                <span>Consultoria Empresarial</span>
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30 mb-8">
                <GraduationCap className="h-6 w-6 text-orange-300" />
                <span className="text-orange-200 font-medium">Educação Profissional</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ENSINO PRÓ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em contabilidade, controladoria, gestão financeira e IA empresarial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg w-fit mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">IA Empresarial</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Fundamentos de IA</li>
                  <li>• Chatbots empresariais</li>
                  <li>• Machine Learning</li>
                  <li>• Automação inteligente</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg w-fit mb-4">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Contabilidade Digital</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Contabilidade 4.0</li>
                  <li>• SPED avançado</li>
                  <li>• Análise de balanços</li>
                  <li>• Perícia contábil</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Controladoria</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Gestão Financeira</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Planejamento tributário</li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Metodologia Exclusiva</h3>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="p-4 bg-orange-500/20 rounded-full w-fit mx-auto mb-4">
                      <GraduationCap className="h-8 w-8 text-orange-300" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Certificação</h4>
                    <p className="text-gray-300 text-sm">Certificados reconhecidos pelo mercado</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-orange-500/20 rounded-full w-fit mx-auto mb-4">
                      <Target className="h-8 w-8 text-orange-300" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Projetos Práticos</h4>
                    <p className="text-gray-300 text-sm">Aplicação real dos conhecimentos</p>
                  </div>
                  <div className="text-center">
                    <div className="p-4 bg-orange-500/20 rounded-full w-fit mx-auto mb-4">
                      <Users className="h-8 w-8 text-orange-300" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">Mentoria</h4>
                    <p className="text-gray-300 text-sm">Acompanhamento personalizado</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    handleCTAClick('education_cta');
                    window.open('https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro', '_blank');
                  }}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-400 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-400/50 flex items-center space-x-2 mx-auto"
                >
                  <span>Educação Pró</span>
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section id="agents" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-cyan-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30 mb-8">
                <Bot className="h-6 w-6 text-cyan-300" />
                <span className="text-cyan-200 font-medium">Agentes Personalizados</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PERSONALIZAÇÃO DE IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Agentes de IA especializados para transformar seu dia a dia
              </p>
              <p className="text-lg text-cyan-300 font-medium">
                "Você não sabe que precisa desses agentes até conhecê-los!"
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 mb-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">Investimento:</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="bg-cyan-500/20 rounded-xl p-6 border border-cyan-400/30">
                    <div className="text-lg font-semibold text-white mb-2">Setup Inicial</div>
                    <div className="text-3xl font-bold text-cyan-300">R$ 120,00</div>
                  </div>
                  <div className="bg-cyan-500/20 rounded-xl p-6 border border-cyan-400/30">
                    <div className="text-lg font-semibold text-white mb-2">Manutenção</div>
                    <div className="text-3xl font-bold text-cyan-300">R$ 50,00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Agents */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Agente de Renovação Visual</h3>
                <p className="text-gray-300 text-sm">Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Pesquisador de Mercado</h3>
                <p className="text-gray-300 text-sm">Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Compilador de Insights</h3>
                <p className="text-gray-300 text-sm">Traduz complexidade em decisão lúcida com precisão lógica.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Agente Buscador de Cupons</h3>
                <p className="text-gray-300 text-sm">Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Avaliador de QIs</h3>
                <p className="text-gray-300 text-sm">Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Encanador Especialista</h3>
                <p className="text-gray-300 text-sm">Especialista sênior em sistemas hidráulicos residenciais e comerciais com domínio técnico absoluto.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Compass className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Passeios em SP</h3>
                <p className="text-gray-300 text-sm">Estrategista urbano supremo, capaz de transformar desejos subjetivos em vivências memoráveis em São Paulo.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Treinadores Especializados</h3>
                <p className="text-gray-300 text-sm">Treinadores de diversas modalidades para desenvolvimento pessoal e profissional.</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg w-fit mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">+250 Modelos</h3>
                <p className="text-gray-300 text-sm">Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  handleCTAClick('agents_cta');
                  scrollToSection('contact');
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/50 flex items-center space-x-2 mx-auto"
              >
                <span>PERSONALIZAR AGENTE</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section - Moved after all services */}
        <section id="mission" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/30 mb-8">
                <Heart className="h-6 w-6 text-yellow-300" />
                <span className="text-yellow-200 font-medium">Nossa Essência</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                MISSÃO
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Mission */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Missão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Democratizar o acesso à inteligência artificial e à automação para pequenos negócios, 
                  oferecendo soluções contábeis, consultivas e tecnológicas que aliviem a sobrecarga 
                  operacional e impulsionem o crescimento sustentável com eficiência e humanidade.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Visão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Ser referência nacional em soluções inteligentes e acessíveis para pequenos 
                  empreendedores, tornando a tecnologia uma aliada prática, confiável e presente 
                  no cotidiano dos que mais precisam — e menos têm acesso.
                </p>
              </div>

              {/* Values */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Valores</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Respeito acima de tudo:</strong> Não toleramos desrespeito em nenhuma forma</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Disciplina com empatia:</strong> Agimos com firmeza e método, mas sempre com humanidade</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Tecnologia para todos:</strong> Acreditamos que inovação só faz sentido se for acessível</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cultural Principles */}
            <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Princípios Culturais</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-300 mb-4">Como Trabalhamos</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• <strong>Liderança:</strong> Direta, estruturada e focada em resultados</li>
                    <li>• <strong>Erros:</strong> Corrigimos o processo, não a pessoa</li>
                    <li>• <strong>Comunicação:</strong> Objetiva, respeitosa e motivadora</li>
                    <li>• <strong>Ambiente:</strong> Remoto e disciplinado</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-yellow-300 mb-4">Frases-Símbolo</h4>
                  <div className="space-y-4">
                    <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/20">
                      <Quote className="h-5 w-5 text-yellow-400 mb-2" />
                      <p className="text-gray-300 italic">"Não paramos até conseguir!"</p>
                    </div>
                    <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/20">
                      <Quote className="h-5 w-5 text-yellow-400 mb-2" />
                      <p className="text-gray-300 italic">"A tecnologia está acessível a todos. Aqui temos a solução que você procura!"</p>
                    </div>
                    <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/20">
                      <Quote className="h-5 w-5 text-yellow-400 mb-2" />
                      <p className="text-gray-300 italic">"Respeito, estrutura e entrega — esse é o nosso jeito."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-400/30 mb-8">
                <Headphones className="h-6 w-6 text-green-300" />
                <span className="text-green-200 font-medium">Suporte Especializado</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                SUPORTE
              </h2>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">FAQ (Perguntas Frequentes)</h3>
              <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-400/30">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-colors rounded-2xl"
                    >
                      <span className="text-white font-semibold">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="h-5 w-5 text-green-300" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-green-300" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Suporte Técnico</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-4">
                    <Mail className="h-8 w-8 text-green-300" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">E-mail</h4>
                  <p className="text-gray-300 text-sm">sac@exercitodeagentes.com.br</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-green-300" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Chat</h4>
                  <p className="text-gray-300 text-sm">Disponível no canto inferior direito (horário comercial)</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-300" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Tempo de Resposta</h4>
                  <p className="text-gray-300 text-sm">Até 24h úteis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-400/30 mb-8">
                <MessageCircle className="h-6 w-6 text-blue-300" />
                <span className="text-blue-200 font-medium">Fale Conosco</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CONTATO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu negócio
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">WhatsApp</h4>
                        <p className="text-gray-300">(11) 91175-7113</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">E-mail</h4>
                        <p className="text-gray-300">sac@exercitodeagentes.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                        <Bot className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">EssencialBot</h4>
                        <p className="text-gray-300">Chat inteligente disponível 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Links Rápidos</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <button 
                      onClick={() => window.open('https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil', '_blank')}
                      className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-left"
                    >
                      <span className="text-white font-medium">Contabilidade Inteligente</span>
                      <ExternalLink className="h-4 w-4 text-blue-300" />
                    </button>
                    <button 
                      onClick={() => window.open('https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial', '_blank')}
                      className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-left"
                    >
                      <span className="text-white font-medium">Consultoria Empresarial</span>
                      <ExternalLink className="h-4 w-4 text-blue-300" />
                    </button>
                    <button 
                      onClick={() => window.open('https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro', '_blank')}
                      className="flex items-center justify-between p-4 bg-blue-500/20 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-left"
                    >
                      <span className="text-white font-medium">Educação Pró</span>
                      <ExternalLink className="h-4 w-4 text-blue-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white">
                      <option value="">Selecione um serviço</option>
                      <option value="automation">Automação IA</option>
                      <option value="accounting">Contabilidade</option>
                      <option value="consulting">Consultoria</option>
                      <option value="education">Ensino Pró</option>
                      <option value="agents">Personalização de IA</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Descreva como podemos ajudar seu negócio..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCTAClick('contact_form');
                    }}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50 flex items-center justify-center space-x-2"
                  >
                    <span>ENVIAR MENSAGEM</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transformando negócios com inteligência artificial, automação inteligente e soluções empresariais completas.
                </p>
                <div className="flex space-x-4">
                  <a href="https://wa.me/5511911757113" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition-colors">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                  <a href="mailto:sac@exercitodeagentes.com.br" className="text-gray-400 hover:text-blue-300 transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-white font-semibold mb-4">Serviços</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('automation')} className="text-gray-400 hover:text-blue-300 transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="text-gray-400 hover:text-blue-300 transition-colors">Contabilidade</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="text-gray-400 hover:text-blue-300 transition-colors">Consultoria</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="text-gray-400 hover:text-blue-300 transition-colors">Ensino Pró</button></li>
                  <li><button onClick={() => scrollToSection('agents')} className="text-gray-400 hover:text-blue-300 transition-colors">Personalização de IA</button></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><button onClick={() => openModal('privacy')} className="text-gray-400 hover:text-blue-300 transition-colors">Política de Privacidade</button></li>
                  <li><button onClick={() => openModal('terms')} className="text-gray-400 hover:text-blue-300 transition-colors">Termos de Uso</button></li>
                  <li><button onClick={() => openModal('lgpd')} className="text-gray-400 hover:text-blue-300 transition-colors">LGPD</button></li>
                  <li><button onClick={() => scrollToSection('support')} className="text-gray-400 hover:text-blue-300 transition-colors">Suporte</button></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Exército de Agentes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Legal Modals */}
        {activeModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {activeModal === 'privacy' && 'Política de Privacidade'}
                  {activeModal === 'terms' && 'Termos de Uso'}
                  {activeModal === 'lgpd' && 'LGPD - Política de Tratamento de Dados'}
                </h3>
                <button onClick={closeModal} className="text-gray-400 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="prose prose-invert max-w-none">
                {activeModal === 'privacy' && (
                  <div className="space-y-6 text-gray-300">
                    <p>A Exército de Agentes Contabilidade e Consultoria Ltda (CNPJ [CNPJ_AQUI]), respeita a sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais.</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">1. Dados Coletados:</h4>
                      <p>Nome, e-mail, telefone, CPF/CNPJ, dados bancários, dados de acesso e interações no site, histórico de atendimento e dados sensíveis (como dados financeiros).</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">2. Finalidade:</h4>
                      <p>Prestação de serviços, atendimento personalizado, melhoria contínua, obrigações legais e marketing autorizado.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">3. Compartilhamento:</h4>
                      <p>Com parceiros tecnológicos (CRMs, provedores de IA, servidores de nuvem), sempre com cláusulas de confidencialidade.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">4. Direitos do Titular:</h4>
                      <p>Acesso, correção, portabilidade, exclusão, revogação de consentimento. Solicitações pelo e-mail: sac@exercitodeagentes.com.br</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">5. Segurança:</h4>
                      <p>Usamos criptografia, autenticação em dois fatores, firewalls e backups criptografados.</p>
                    </div>
                  </div>
                )}

                {activeModal === 'terms' && (
                  <div className="space-y-6 text-gray-300">
                    <p>Ao acessar e utilizar os serviços da Exército de Agentes, você concorda com os termos abaixo:</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">1. Uso dos Serviços:</h4>
                      <p>O usuário se compromete a fornecer informações verdadeiras e utilizar os serviços de forma ética e legal.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">2. Propriedade Intelectual:</h4>
                      <p>Todo o conteúdo do site, plataformas e materiais de treinamento são protegidos por direitos autorais. É proibida a reprodução não autorizada.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">3. Responsabilidades:</h4>
                      <p>Não garantimos resultados específicos. Nossos serviços são consultivos e operacionais, conforme escopo contratado.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">4. Modificações:</h4>
                      <p>Podemos alterar os Termos. Recomendamos consulta periódica.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">5. Foro:</h4>
                      <p>Fica eleito o foro da comarca de [Cidade/Sede], para dirimir quaisquer controvérsias.</p>
                    </div>
                  </div>
                )}

                {activeModal === 'lgpd' && (
                  <div className="space-y-6 text-gray-300">
                    <p>Esta política visa demonstrar o compromisso da Exército de Agentes com a Lei Geral de Proteção de Dados (Lei 13.709/18).</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">1. Controlador:</h4>
                      <p>Exército de Agentes Contabilidade e Consultoria Ltda</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">2. Encarregado de Dados:</h4>
                      <p>Nomeado internamente – contato via sac@exercitodeagentes.com.br</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">3. Fundamento Legal:</h4>
                      <p>Tratamos dados com base no consentimento, execução de contrato e obrigação legal.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">4. Tempo de Retenção:</h4>
                      <p>Dados são armazenados pelo tempo necessário para a finalidade legal ou contratual.</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">5. Reclamações:</h4>
                      <p>O titular pode recorrer à ANPD ou ao nosso canal interno: sac@exercitodeagentes.com.br</p>
                    </div>
                  </div>
                )}
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