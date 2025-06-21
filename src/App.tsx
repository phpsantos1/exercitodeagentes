import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Brain, 
  Calculator, 
  Users, 
  GraduationCap, 
  Zap, 
  ChevronRight,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Cpu,
  Network,
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Linkedin,
  Instagram
} from 'lucide-react';
import EssencialBotChat from './components/EssencialBotChat';
import SEOHead from './components/SEOHead';
import { initializeAnalytics, trackEvent } from './utils/analytics';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Inicializar analytics
    initializeAnalytics();
    
    const handleScroll = () => {
      const sections = ['home', 'automation', 'accounting', 'consulting', 'education', 'agents', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Track navigation
      trackEvent('navigation_click', { section: sectionId });
    }
    setIsMenuOpen(false);
  };

  const handleBotClick = () => {
    // Track bot click
    trackEvent('bot_gpt_click', { source: 'header' });
    // Open GPT link in new tab
    window.open('https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge', '_blank');
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
        <SEOHead />
        
        {/* Advanced Electronic Circuit Background */}
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950"></div>
          
          {/* Animated circuit lines */}
          <div className="absolute inset-0">
            {/* Horizontal scanning lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Vertical scanning lines */}
            <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Circuit nodes */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50 animate-pulse" style={{ animationDelay: '0.3s' }}></div>

          {/* Floating particles */}
          <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-2/3 w-1 h-1 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>

          {/* Complex circuit paths */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Organic circuit paths */}
            <path d="M100,200 Q300,100 500,200 T900,150" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" fill="none" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="8s" repeatCount="indefinite"/>
            </path>
            <path d="M200,400 Q400,300 600,400 T1000,350" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="10s" repeatCount="indefinite"/>
            </path>
            <path d="M50,600 Q250,500 450,600 T750,550" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" fill="none" filter="url(#glow)">
              <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="12s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-blue-400/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleBotClick}
                  className="relative p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  title="Acesse o EssencialBot Concierge no ChatGPT"
                >
                  {/* Scanning effect around bot icon */}
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-300/50 animate-pulse"></div>
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-sm"></div>
                  <Bot className="relative h-7 w-7 text-white animate-pulse group-hover:animate-bounce" />
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    Clique para acessar o GPT
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                </button>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent uppercase tracking-wide">
                    EXÉRCITO DE AGENTES
                  </span>
                  <span className="text-xs text-blue-300 -mt-1 uppercase tracking-wide">
                    POWERED BY ESSENCIALBOT
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {[
                    { id: 'home', label: 'INÍCIO' },
                    { id: 'automation', label: 'AUTOMAÇÃO IA' },
                    { id: 'accounting', label: 'CONTABILIDADE' },
                    { id: 'consulting', label: 'CONSULTORIA' },
                    { id: 'education', label: 'EDUCAÇÃO' },
                    { id: 'agents', label: 'AGENTES' },
                    { id: 'contact', label: 'CONTATO' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-colors uppercase tracking-wide ${
                        activeSection === item.id
                          ? 'text-cyan-300 border-b-2 border-cyan-300'
                          : 'text-gray-300 hover:text-cyan-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-md text-gray-400 hover:text-cyan-300"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { id: 'home', label: 'INÍCIO' },
                  { id: 'automation', label: 'AUTOMAÇÃO IA' },
                  { id: 'accounting', label: 'CONTABILIDADE' },
                  { id: 'consulting', label: 'CONSULTORIA' },
                  { id: 'education', label: 'EDUCAÇÃO' },
                  { id: 'agents', label: 'AGENTES' },
                  { id: 'contact', label: 'CONTATO' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-300 uppercase tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full border border-cyan-400/30 mb-8 relative">
                {/* Pulsing aura around bot */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-cyan-300/30 animate-pulse"></div>
                <Bot className="relative h-20 w-20 text-cyan-300 animate-pulse" />
              </div>
              
              {/* Enhanced title with neon cyan effect */}
              <div className="relative mb-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                  {/* Glow backdrop */}
                  <div className="absolute inset-0 text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent blur-sm opacity-50"></div>
                  
                  {/* Scanning effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent animate-pulse"></div>
                  
                  {/* Main text with neon cyan */}
                  <span className="relative bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent animate-pulse uppercase tracking-wide">
                    EXÉRCITO DE AGENTES
                  </span>
                </h1>
                
                {/* Scanning line effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-lg text-cyan-300 uppercase tracking-wide">POWERED BY</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                  ESSENCIALBOT
                </span>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto uppercase tracking-wide">
                REVOLUÇÃO DIGITAL PARA SUA EMPRESA COM IA AVANÇADA, AUTOMAÇÃO INTELIGENTE E CONSULTORIA ESPECIALIZADA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {[
                { icon: Brain, title: 'IA AVANÇADA', desc: 'ESSENCIALBOT COM INTELIGÊNCIA PERSONALIZADA', color: 'from-purple-500 to-pink-500' },
                { icon: Calculator, title: 'CONTABILIDADE', desc: 'ESCRITÓRIO CONTÁBIL COMPLETO', color: 'from-green-500 to-emerald-500' },
                { icon: Users, title: 'CONSULTORIA EXPERT', desc: 'ESTRATÉGIAS EMPRESARIAIS EFICAZES', color: 'from-blue-500 to-cyan-500' },
                { icon: GraduationCap, title: 'EDUCAÇÃO PRO', desc: 'TREINAMENTOS E CAPACITAÇÕES', color: 'from-orange-500 to-red-500' },
                { icon: Bot, title: 'PERSONALIZE SEU AGENTE', desc: 'TEMOS DIVERSOS MODELOS', color: 'from-indigo-500 to-purple-500' }
              ].map((item, index) => (
                <div key={index} className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${item.color} rounded-lg mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-200 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  scrollToSection('automation');
                  trackEvent('cta_click', { button: 'começar_agora' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg hover:shadow-cyan-400/30 uppercase tracking-wide"
              >
                COMEÇAR AGORA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  scrollToSection('agents');
                  trackEvent('cta_click', { button: 'ver_agentes' });
                }}
                className="px-8 py-4 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              >
                VER AGENTES
              </button>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                  AUTOMAÇÃO INTELIGENTE
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto uppercase tracking-wide">
                O <span className="text-cyan-300 font-semibold">ESSENCIALBOT</span> TRABALHA 24/7 PARA OTIMIZAR SUA EMPRESA COM INTELIGÊNCIA ARTIFICIAL AVANÇADA
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {[
                {
                  level: 'NÍVEL 2 - INTEGRADO',
                  price: 'Setup: R$ 397 + R$ 397/mês',
                  features: [
                    'ESSENCIALBOT PERSONALIZADO',
                    'MÚLTIPLAS INTEGRAÇÕES',
                    'MACHINE LEARNING',
                    'ANÁLISE DE DADOS',
                    'SUPORTE BÁSICO',
                    '1 ATUALIZAÇÃO POR SEMANA'
                  ],
                  popular: false
                },
                {
                  level: 'NÍVEL 3 - AVANÇADO',
                  price: 'Setup: R$ 497 + R$ 497/mês',
                  features: [
                    'TUDO DO INTEGRADO',
                    'LANDING PAGE PERSONALIZADA',
                    'DEEP LEARNING',
                    'PROCESSAMENTO DE LINGUAGEM NEURAL',
                    'CONSULTORIA INCLUÍDA',
                    '3 ATUALIZAÇÕES POR SEMANA'
                  ],
                  popular: true
                }
              ].map((plan, index) => (
                <div key={index} className={`relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border ${plan.popular ? 'border-cyan-400' : 'border-gray-700'} hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-cyan-200 uppercase tracking-wide">{plan.level}</h3>
                    <div className="text-4xl font-bold text-cyan-300 mb-4">{plan.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-white uppercase tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => trackEvent('plan_click', { plan: plan.level })}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 uppercase tracking-wide ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-400/30' 
                        : 'border border-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    ESCOLHER PLANO
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                  ESCRITÓRIO DE CONTABILIDADE
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto uppercase tracking-wide">
                SOMOS UM ESCRITÓRIO DE CONTABILIDADE ESPECIALIZADO EM EMPRESAS DE COMÉRCIO E SERVIÇOS, OFERECENDO SERVIÇOS COMPLETOS COM AUTOMAÇÃO DO <span className="text-cyan-300 font-semibold">ESSENCIALBOT</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calculator,
                  title: 'ABERTURA DE EMPRESAS',
                  description: 'CONSTITUIÇÃO COMPLETA DE EMPRESAS COM TODA DOCUMENTAÇÃO NECESSÁRIA',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Brain,
                  title: 'CONTABILIDADE MENSAL',
                  description: 'ESCRITURAÇÃO CONTÁBIL, BALANCETES E DEMONSTRAÇÕES FINANCEIRAS',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Shield,
                  title: 'OBRIGAÇÕES FISCAIS',
                  description: 'SPED, ECF, DEFIS E TODAS AS OBRIGAÇÕES ACESSÓRIAS',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Users,
                  title: 'DEPARTAMENTO PESSOAL',
                  description: 'FOLHA DE PAGAMENTO, ADMISSÕES, DEMISSÕES E ESOCIAL',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Network,
                  title: 'PLANEJAMENTO TRIBUTÁRIO',
                  description: 'OTIMIZAÇÃO FISCAL E ESCOLHA DO MELHOR REGIME TRIBUTÁRIO',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Cpu,
                  title: 'RELATÓRIOS GERENCIAIS',
                  description: 'ANÁLISES FINANCEIRAS E RELATÓRIOS PARA TOMADA DE DECISÃO',
                  color: 'from-teal-500 to-cyan-500'
                }
              ].map((feature, index) => (
                <div key={index} className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-200 uppercase tracking-wide">{feature.title}</h3>
                  <p className="text-gray-400 uppercase tracking-wide">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                    CONSULTORIA EMPRESARIAL
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 uppercase tracking-wide">
                  CONSULTORIA COMPLETA QUE VAI ALÉM DA IA, OFERECENDO SOLUÇÕES ESTRATÉGICAS PARA TODOS OS ASPECTOS DO SEU NEGÓCIO
                </p>
                <div className="space-y-4">
                  {[
                    'GESTÃO EMPRESARIAL E PLANEJAMENTO ESTRATÉGICO',
                    'FLUXO DE CAIXA E CONTROLE FINANCEIRO',
                    'RECUPERAÇÃO JUDICIAL E REESTRUTURAÇÃO',
                    'BUSCA DE CRÉDITO EM FACTORINGS',
                    'FUSÕES E AQUISIÇÕES',
                    'CONSULTORIA COM IA E AUTOMAÇÃO'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mr-3" />
                      <span className="text-white uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    trackEvent('cta_click', { button: 'agendar_consultoria' });
                  }}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 uppercase tracking-wide"
                >
                  AGENDAR CONSULTORIA
                </button>
              </div>
              <div className="relative">
                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-6">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-200 uppercase tracking-wide">CONSULTORIA ESPECIALIZADA</h3>
                  <p className="text-white mb-6 uppercase tracking-wide">
                    NOSSA EQUIPE DE ESPECIALISTAS COMBINA DÉCADAS DE EXPERIÊNCIA EMPRESARIAL COM SOLUÇÕES INOVADORAS PARA ENTREGAR RESULTADOS EXCEPCIONAIS EM TODAS AS ÁREAS DO SEU NEGÓCIO.
                  </p>
                  
                  {/* Alert Badge for Critical Services */}
                  <div className="relative inline-block">
                    <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-red-300 font-semibold text-sm uppercase tracking-wide">
                          RECUPERAÇÃO JUDICIAL, CAPTURA DE CRÉDITO, REESTRUTURAÇÃO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-6">
                    <GraduationCap className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-200 uppercase tracking-wide">CAPACITAÇÃO AVANÇADA</h3>
                  <p className="text-white mb-6 uppercase tracking-wide">
                    PREPARE SUA EQUIPE PARA A ERA DIGITAL COM NOSSOS CURSOS ESPECIALIZADOS EM CONTABILIDADE, CONTROLADORIA, FINANÇAS E TECNOLOGIA.
                  </p>
                  <div className="space-y-3">
                    {[
                      'WORKSHOPS PRÁTICOS ESPECIALIZADOS',
                      'CERTIFICAÇÕES RECONHECIDAS NO MERCADO',
                      'MENTORIA PERSONALIZADA POR ESPECIALISTAS',
                      'PROJETOS REAIS COM ESSENCIALBOT',
                      'NETWORKING COM PROFISSIONAIS DA ÁREA',
                      'MATERIAL DIDÁTICO ATUALIZADO'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-white uppercase tracking-wide">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                    EDUCAÇÃO & TREINAMENTOS
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 uppercase tracking-wide">
                  CURSOS, PALESTRAS E WORKSHOPS ESPECIALIZADOS EM ÁREAS CONTÁBEIS, FINANCEIRAS E TECNOLÓGICAS PARA EMPRESAS
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    {
                      category: '🤖 IA EMPRESARIAL',
                      courses: ['FUNDAMENTOS DE IA', 'IMPLEMENTAÇÃO DE CHATBOTS', 'MACHINE LEARNING PARA NEGÓCIOS', 'AUTOMAÇÃO INTELIGENTE']
                    },
                    {
                      category: '📊 CONTABILIDADE DIGITAL',
                      courses: ['CONTABILIDADE 4.0', 'SPED E OBRIGAÇÕES DIGITAIS', 'ANÁLISE DE BALANÇOS', 'CONTABILIDADE GERENCIAL']
                    },
                    {
                      category: '🎯 CONTROLADORIA',
                      courses: ['CONTROLES INTERNOS', 'AUDITORIA INTERNA', 'COMPLIANCE EMPRESARIAL', 'GESTÃO DE RISCOS']
                    },
                    {
                      category: '💰 GESTÃO FINANCEIRA',
                      courses: ['FLUXO DE CAIXA AVANÇADO', 'ANÁLISE FINANCEIRA', 'ORÇAMENTO EMPRESARIAL', 'PLANEJAMENTO ESTRATÉGICO']
                    }
                  ].map((area, index) => (
                    <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/40 transition-all duration-300">
                      <h4 className="text-cyan-300 font-semibold mb-2 uppercase tracking-wide">{area.category}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {area.courses.map((course, cIndex) => (
                          <span key={cIndex} className="text-sm text-white uppercase tracking-wide">• {course}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    trackEvent('cta_click', { button: 'ver_cursos' });
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30 uppercase tracking-wide"
                >
                  VER TODOS OS CURSOS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Agents Models Section */}
        <section id="agents" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                  MODELOS DO ESSENCIALBOT
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto uppercase tracking-wide">
                ESCOLHA O NÍVEL DE INTELIGÊNCIA ARTIFICIAL PERFEITO PARA SUAS NECESSIDADES EMPRESARIAIS
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  level: 'NÍVEL 1',
                  title: 'PERSONALIZADO',
                  description: 'AGENTE CUSTOMIZADO SOB DEMANDA COM RESPOSTAS DE ALTA PERFORMANCE',
                  features: ['AGENTE CUSTOMIZADO SOB DEMANDA', 'RESPOSTAS DE ALTA PERFORMANCE', 'SEM SUPORTE TÉCNICO', 'ENTREGA VIA LINK GPT PRIVADO'],
                  price: 'Setup: R$ 120 + R$ 50 manutenção',
                  color: 'from-green-500 to-emerald-400'
                },
                {
                  level: 'NÍVEL 2',
                  title: 'INTEGRADO',
                  description: 'ESSENCIALBOT INTELIGENTE COM APRENDIZADO E INTEGRAÇÃO AVANÇADA',
                  features: ['AGENTE CUSTOMIZADO SOB DEMANDA', 'MÚLTIPLAS INTEGRAÇÕES', 'MACHINE LEARNING', 'ANÁLISE DE DADOS', 'SUPORTE BÁSICO', '1 ATUALIZAÇÃO POR SEMANA'],
                  price: 'Setup: R$ 397 + R$ 397/mês',
                  color: 'from-blue-500 to-cyan-400'
                },
                {
                  level: 'NÍVEL 3',
                  title: 'AVANÇADO',
                  description: 'ESSENCIALBOT DE ÚLTIMA GERAÇÃO COM CAPACIDADES COGNITIVAS AVANÇADAS',
                  features: ['TUDO DO INTEGRADO', 'LANDING PAGE PERSONALIZADA', 'DEEP LEARNING', 'PROCESSAMENTO DE LINGUAGEM NEURAL', 'CONSULTORIA INCLUÍDA', '3 ATUALIZAÇÕES POR SEMANA'],
                  price: 'Setup: R$ 497 + R$ 497/mês',
                  color: 'from-purple-500 to-pink-400'
                }
              ].map((agent, index) => (
                <div key={index} className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${agent.color} text-white text-sm font-semibold mb-4 uppercase tracking-wide`}>
                    {agent.level}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-200 uppercase tracking-wide">{agent.title}</h3>
                  <p className="text-gray-300 mb-4 uppercase tracking-wide">{agent.description}</p>
                  <div className="text-lg font-bold text-cyan-300 mb-6">{agent.price}</div>
                  <ul className="space-y-3 mb-8">
                    {agent.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        <span className="text-sm text-white uppercase tracking-wide">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => trackEvent('agent_demo_click', { agent: agent.level })}
                    className={`w-full py-3 rounded-lg font-semibold bg-gradient-to-r ${agent.color} hover:opacity-90 transition-all duration-300 shadow-lg uppercase tracking-wide`}
                  >
                    SOLICITAR DEMO
                  </button>
                </div>
              ))}
            </div>

            {/* Detailed Examples Section */}
            <div className="space-y-12">
              {/* Nível 1 Examples */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent uppercase tracking-wide">
                    NÍVEL 1 — ESSENCIALBOT PERSONALIZADO
                  </span>
                </h3>
                <p className="text-center text-gray-400 mb-8 uppercase tracking-wide">
                  SEM AUTOMAÇÃO. PERSONALIDADE E FUNÇÃO AJUSTADAS PARA O PERFIL DESEJADO. ENTREGA VIA LINK GPT PRIVADO.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'ESSENCIALBOT PROFESSOR UNIVERSITÁRIO', desc: 'INTERAGE COMO PROFESSOR DE ENSINO SUPERIOR COM DIDÁTICA FORMAL E LINGUAGEM ACESSÍVEL. IDEAL PARA ESTUDANTES E MENTORIA ACADÊMICA.' },
                    { title: 'ESSENCIALBOT NUTRICIONISTA', desc: 'ATENDE COM LINGUAGEM ACOLHEDORA E TÉCNICA, EXPLICANDO DIETAS E ORIENTAÇÕES NUTRICIONAIS PERSONALIZADAS.' },
                    { title: 'ESSENCIALBOT COSTUREIRO', desc: 'ATUA COMO PROFISSIONAL EXPERIENTE EM MODA SOB MEDIDA. USA LINGUAGEM PRÁTICA DE ATELIÊ COM REFERÊNCIAS DE MODA.' },
                    { title: 'ESSENCIALBOT DESENVOLVEDOR MOBILE', desc: 'RESPONDE COM VOCABULÁRIO TÉCNICO E LINGUAGEM DIRETA. IDEAL PARA MENTORIAS EM DESENVOLVIMENTO.' },
                    { title: 'ESSENCIALBOT CONSULTOR JURÍDICO', desc: 'ATENDE DÚVIDAS INICIAIS COM LINGUAGEM DESCOMPLICADA. IDEAL PARA ADVOCACIA PREVENTIVA E ESCLARECIMENTOS BÁSICOS.' }
                  ].map((bot, index) => (
                    <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-green-300 mb-3 uppercase tracking-wide">{bot.title}</h4>
                      <p className="text-gray-400 text-sm uppercase tracking-wide">{bot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nível 2 Examples */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wide">
                    NÍVEL 2 — ESSENCIALBOT INTEGRADO
                  </span>
                </h3>
                <p className="text-center text-gray-400 mb-8 uppercase tracking-wide">
                  COM AUTOMAÇÃO LEVE. GPT + FORMULÁRIO + INTEGRAÇÃO VIA WEBHOOK COM WHATSAPP E GOOGLE SHEETS.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'ESSENCIALBOT ATENDIMENTO COMERCIAL', desc: 'RECEBE SOLICITAÇÕES DE ORÇAMENTO E ENVIA PARA O RESPONSÁVEL VIA WHATSAPP. IDEAL PARA LOJAS E COMÉRCIOS LOCAIS.' },
                    { title: 'ESSENCIALBOT COLETA DE DOCUMENTOS', desc: 'AUTOMATIZA A COLETA DE ARQUIVOS E COMPROVANTES DE CLIENTES. ATUALIZA PLANILHAS E ENVIA ALERTAS AO GESTOR.' },
                    { title: 'ESSENCIALBOT CONTROLE DE PEDIDOS', desc: 'RECEBE PEDIDOS DE PRODUTOS OU REFEIÇÕES E OS REDIRECIONA PARA SETORES ESPECÍFICOS. IDEAL PARA RESTAURANTES E DELIVERIES.' }
                  ].map((bot, index) => (
                    <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3 uppercase tracking-wide">{bot.title}</h4>
                      <p className="text-gray-400 text-sm uppercase tracking-wide">{bot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nível 3 Examples */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wide">
                    NÍVEL 3 — ESSENCIALBOT AVANÇADO
                  </span>
                </h3>
                <p className="text-center text-gray-400 mb-8 uppercase tracking-wide">
                  COM LANDING PAGE PERSONALIZADA, IDENTIDADE VISUAL E FLUXOS AUTOMATIZADOS INTEGRADOS.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'ESSENCIALBOT CENTRAL DE AGENDAMENTOS', desc: 'PERMITE MARCAÇÃO DE HORÁRIOS COM CONFIRMAÇÃO AUTOMÁTICA, INTEGRAÇÃO COM AGENDA E WHATSAPP. IDEAL PARA CLÍNICAS, SALÕES E CONSULTÓRIOS.' },
                    { title: 'ESSENCIALBOT RECEPÇÃO INTELIGENTE', desc: 'ATUA COMO RECEPCIONISTA DIGITAL EM SITES E PÁGINAS INSTITUCIONAIS. APRESENTA OS SERVIÇOS, COLETA INFORMAÇÕES E ENCAMINHA PARA ATENDIMENTO.' }
                  ].map((bot, index) => (
                    <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3 uppercase tracking-wide">{bot.title}</h4>
                      <p className="text-gray-400 text-sm uppercase tracking-wide">{bot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                  ENTRE EM CONTATO
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 uppercase tracking-wide">
                PRONTO PARA TRANSFORMAR SEU NEGÓCIO COM O <span className="text-cyan-300 font-semibold">ESSENCIALBOT</span>? VAMOS CONVERSAR SOBRE SUAS NECESSIDADES
              </p>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-800/30 rounded-lg border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <Phone className="h-5 w-5 text-cyan-300" />
                  <span className="text-cyan-200 text-sm">(11) 91175-7113</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-800/30 rounded-lg border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <Mail className="h-5 w-5 text-cyan-300" />
                  <span className="text-cyan-200 text-sm">sac@exercitodeagentes.com.br</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-800/30 rounded-lg border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <Mail className="h-5 w-5 text-green-400" />
                  <span className="text-green-200 text-sm">financeiro@exercitodeagentes.com.br</span>
                </div>
                <div className="flex items-center justify-center space-x-2 p-4 bg-gray-800/30 rounded-lg border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <Globe className="h-5 w-5 text-cyan-300" />
                  <span className="text-cyan-200 text-sm">exercitodeagentes.com.br</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-center space-x-6 mb-12">
                <a 
                  href="https://wa.me/5511911757113" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_click', { platform: 'whatsapp' })}
                  className="group p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-400/30"
                >
                  <MessageCircle className="h-6 w-6 text-white group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://linkedin.com/company/exercitodeagentes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_click', { platform: 'linkedin' })}
                  className="group p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-400/30"
                >
                  <Linkedin className="h-6 w-6 text-white group-hover:animate-pulse" />
                </a>
                <a 
                  href="https://instagram.com/exercitodeagentes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('social_click', { platform: 'instagram' })}
                  className="group p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-pink-400/30"
                >
                  <Instagram className="h-6 w-6 text-white group-hover:animate-pulse" />
                </a>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 p-8 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                trackEvent('form_submit', { form: 'contact' });
                // Aqui você adicionaria a lógica de envio do formulário
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">NOME</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">WHATSAPP</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">E-MAIL</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">INTERESSE</label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">SELECIONE SEU INTERESSE</option>
                    <option value="automation">AUTOMAÇÃO IA</option>
                    <option value="accounting">SERVIÇOS CONTÁBEIS</option>
                    <option value="consulting">CONSULTORIA EMPRESARIAL</option>
                    <option value="education">EDUCAÇÃO E TREINAMENTOS</option>
                    <option value="agents">MODELOS DE AGENTES</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">MENSAGEM</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30 uppercase tracking-wide"
                >
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="relative p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-lg">
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-300/30 animate-pulse"></div>
                  <Bot className="relative h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent uppercase tracking-wide">
                    EXÉRCITO DE AGENTES
                  </span>
                  <span className="text-xs text-cyan-300 -mt-1 uppercase tracking-wide">
                    POWERED BY ESSENCIALBOT
                  </span>
                </div>
              </div>
              <div className="text-gray-400 text-sm text-center md:text-right uppercase tracking-wide">
                <div>© 2024 EXÉRCITO DE AGENTES. TODOS OS DIREITOS RESERVADOS.</div>
                <div className="mt-1">WWW.EXERCITODEAGENTES.COM.BR</div>
              </div>
            </div>
          </div>
        </footer>

        {/* EssencialBot Chat Component */}
        <EssencialBotChat />
      </div>
    </HelmetProvider>
  );
}

export default App;