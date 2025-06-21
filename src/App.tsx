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
                <div className="relative p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300">
                  {/* Scanning effect around bot icon */}
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-300/50 animate-pulse"></div>
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-sm"></div>
                  <Bot className="relative h-7 w-7 text-white animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    EXÉRCITO DE AGENTES
                  </span>
                  <span className="text-xs text-blue-300 -mt-1">
                    Powered by EssencialBot
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {[
                    { id: 'home', label: 'Início' },
                    { id: 'automation', label: 'Automação IA' },
                    { id: 'accounting', label: 'Contabilidade' },
                    { id: 'consulting', label: 'Consultoria' },
                    { id: 'education', label: 'Educação' },
                    { id: 'agents', label: 'Agentes' },
                    { id: 'contact', label: 'Contato' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
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
                  { id: 'home', label: 'Início' },
                  { id: 'automation', label: 'Automação IA' },
                  { id: 'accounting', label: 'Contabilidade' },
                  { id: 'consulting', label: 'Consultoria' },
                  { id: 'education', label: 'Educação' },
                  { id: 'agents', label: 'Agentes' },
                  { id: 'contact', label: 'Contato' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-300"
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
                  <span className="relative bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                    Exército de Agentes
                  </span>
                </h1>
                
                {/* Scanning line effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-lg text-cyan-300">Powered by</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  EssencialBot
                </span>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolução digital para sua empresa com IA avançada, automação inteligente e consultoria especializada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
              {[
                { icon: Brain, title: 'IA Avançada', desc: 'EssencialBot com inteligência personalizada', color: 'from-purple-500 to-pink-500' },
                { icon: Calculator, title: 'Contabilidade', desc: 'Escritório contábil completo', color: 'from-green-500 to-emerald-500' },
                { icon: Users, title: 'Consultoria Expert', desc: 'Estratégias empresariais eficazes', color: 'from-blue-500 to-cyan-500' },
                { icon: GraduationCap, title: 'Educação Pro', desc: 'Treinamentos e capacitações', color: 'from-orange-500 to-red-500' },
                { icon: Bot, title: 'Personalize seu Agente', desc: 'Temos diversos modelos', color: 'from-indigo-500 to-purple-500' }
              ].map((item, index) => (
                <div key={index} className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${item.color} rounded-lg mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-cyan-200">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  scrollToSection('automation');
                  trackEvent('cta_click', { button: 'começar_agora' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg hover:shadow-cyan-400/30"
              >
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  scrollToSection('agents');
                  trackEvent('cta_click', { button: 'ver_agentes' });
                }}
                className="px-8 py-4 border border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
              >
                Ver Agentes
              </button>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Automação Inteligente
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                O <span className="text-cyan-300 font-semibold">EssencialBot</span> trabalha 24/7 para otimizar sua empresa com inteligência artificial avançada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {[
                {
                  level: 'Nível 2 - Integrado',
                  price: 'Setup: R$ 397 + R$ 397/mês',
                  features: [
                    'EssencialBot personalizado',
                    'Múltiplas integrações',
                    'Machine Learning',
                    'Análise de dados',
                    'Suporte básico',
                    '1 atualização por semana'
                  ],
                  popular: false
                },
                {
                  level: 'Nível 3 - Avançado',
                  price: 'Setup: R$ 497 + R$ 497/mês',
                  features: [
                    'Tudo do Integrado',
                    'Landing page personalizada',
                    'Deep Learning',
                    'Processamento de linguagem neural',
                    'Consultoria incluída',
                    '3 atualizações por semana'
                  ],
                  popular: true
                }
              ].map((plan, index) => (
                <div key={index} className={`relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border ${plan.popular ? 'border-cyan-400' : 'border-gray-700'} hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-cyan-200">{plan.level}</h3>
                    <div className="text-4xl font-bold text-cyan-300 mb-4">{plan.price}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => trackEvent('plan_click', { plan: plan.level })}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-400/30' 
                        : 'border border-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Escolher Plano
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
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Escritório de Contabilidade
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Somos um escritório de contabilidade especializado em empresas de comércio e serviços, oferecendo serviços completos com automação do <span className="text-cyan-300 font-semibold">EssencialBot</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calculator,
                  title: 'Abertura de Empresas',
                  description: 'Constituição completa de empresas com toda documentação necessária',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Brain,
                  title: 'Contabilidade Mensal',
                  description: 'Escrituração contábil, balancetes e demonstrações financeiras',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Shield,
                  title: 'Obrigações Fiscais',
                  description: 'SPED, ECF, DEFIS e todas as obrigações acessórias',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Users,
                  title: 'Departamento Pessoal',
                  description: 'Folha de pagamento, admissões, demissões e eSocial',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Network,
                  title: 'Planejamento Tributário',
                  description: 'Otimização fiscal e escolha do melhor regime tributário',
                  color: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: Cpu,
                  title: 'Relatórios Gerenciais',
                  description: 'Análises financeiras e relatórios para tomada de decisão',
                  color: 'from-teal-500 to-cyan-500'
                }
              ].map((feature, index) => (
                <div key={index} className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${feature.color} rounded-lg mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-200">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
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
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Consultoria Empresarial
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Consultoria completa que vai além da IA, oferecendo soluções estratégicas para todos os aspectos do seu negócio
                </p>
                <div className="space-y-4">
                  {[
                    'Gestão empresarial e planejamento estratégico',
                    'Fluxo de caixa e controle financeiro',
                    'Recuperação judicial e reestruturação',
                    'Busca de crédito em factorings',
                    'Fusões e aquisições',
                    'Consultoria com IA e automação'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-cyan-300 mr-3" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    trackEvent('cta_click', { button: 'agendar_consultoria' });
                  }}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
                >
                  Agendar Consultoria
                </button>
              </div>
              <div className="relative">
                <div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-6">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-200">Consultoria Especializada</h3>
                  <p className="text-white mb-6">
                    Nossa equipe de especialistas combina décadas de experiência empresarial com soluções inovadoras para entregar resultados excepcionais em todas as áreas do seu negócio.
                  </p>
                  
                  {/* Alert Badge for Critical Services */}
                  <div className="relative inline-block">
                    <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-red-300 font-semibold text-sm uppercase tracking-wide">
                          Recuperação judicial, captura de crédito, reestruturação
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
                  <h3 className="text-2xl font-bold mb-4 text-cyan-200">Capacitação Avançada</h3>
                  <p className="text-white mb-6">
                    Prepare sua equipe para a era digital com nossos cursos especializados em contabilidade, controladoria, finanças e tecnologia.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Workshops práticos especializados',
                      'Certificações reconhecidas no mercado',
                      'Mentoria personalizada por especialistas',
                      'Projetos reais com EssencialBot',
                      'Networking com profissionais da área',
                      'Material didático atualizado'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        <span className="text-sm text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Educação & Treinamentos
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Cursos, palestras e workshops especializados em áreas contábeis, financeiras e tecnológicas para empresas
                </p>
                
                <div className="space-y-6 mb-8">
                  {[
                    {
                      category: '🤖 IA Empresarial',
                      courses: ['Fundamentos de IA', 'Implementação de Chatbots', 'Machine Learning para Negócios', 'Automação Inteligente']
                    },
                    {
                      category: '📊 Contabilidade Digital',
                      courses: ['Contabilidade 4.0', 'SPED e Obrigações Digitais', 'Análise de Balanços', 'Contabilidade Gerencial']
                    },
                    {
                      category: '🎯 Controladoria',
                      courses: ['Controles Internos', 'Auditoria Interna', 'Compliance Empresarial', 'Gestão de Riscos']
                    },
                    {
                      category: '💰 Gestão Financeira',
                      courses: ['Fluxo de Caixa Avançado', 'Análise Financeira', 'Orçamento Empresarial', 'Planejamento Estratégico']
                    }
                  ].map((area, index) => (
                    <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-400/40 transition-all duration-300">
                      <h4 className="text-cyan-300 font-semibold mb-2">{area.category}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {area.courses.map((course, cIndex) => (
                          <span key={cIndex} className="text-sm text-white">• {course}</span>
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
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
                >
                  Ver Todos os Cursos
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
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Modelos do EssencialBot
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escolha o nível de inteligência artificial perfeito para suas necessidades empresariais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  level: 'Nível 1',
                  title: 'Personalizado',
                  description: 'Agente customizado sob demanda com respostas de alta performance',
                  features: ['Agente customizado sob demanda', 'Respostas de alta performance', 'Sem suporte técnico', 'Entrega via link GPT privado'],
                  price: 'Setup: R$ 120 + R$ 50 manutenção',
                  color: 'from-green-500 to-emerald-400'
                },
                {
                  level: 'Nível 2',
                  title: 'Integrado',
                  description: 'EssencialBot inteligente com aprendizado e integração avançada',
                  features: ['Agente customizado sob demanda', 'Múltiplas integrações', 'Machine Learning', 'Análise de dados', 'Suporte básico', '1 atualização por semana'],
                  price: 'Setup: R$ 397 + R$ 397/mês',
                  color: 'from-blue-500 to-cyan-400'
                },
                {
                  level: 'Nível 3',
                  title: 'Avançado',
                  description: 'EssencialBot de última geração com capacidades cognitivas avançadas',
                  features: ['Tudo do Integrado', 'Landing page personalizada', 'Deep Learning', 'Processamento de linguagem neural', 'Consultoria incluída', '3 atualizações por semana'],
                  price: 'Setup: R$ 497 + R$ 497/mês',
                  color: 'from-purple-500 to-pink-400'
                }
              ].map((agent, index) => (
                <div key={index} className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${agent.color} text-white text-sm font-semibold mb-4`}>
                    {agent.level}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-cyan-200">{agent.title}</h3>
                  <p className="text-gray-300 mb-4">{agent.description}</p>
                  <div className="text-lg font-bold text-cyan-300 mb-6">{agent.price}</div>
                  <ul className="space-y-3 mb-8">
                    {agent.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3" />
                        <span className="text-sm text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => trackEvent('agent_demo_click', { agent: agent.level })}
                    className={`w-full py-3 rounded-lg font-semibold bg-gradient-to-r ${agent.color} hover:opacity-90 transition-all duration-300 shadow-lg`}
                  >
                    Solicitar Demo
                  </button>
                </div>
              ))}
            </div>

            {/* Detailed Examples Section */}
            <div className="space-y-12">
              {/* Nível 1 Examples */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Nível 1 — EssencialBot Personalizado
                  </span>
                </h3>
                <p className="text-center text-gray-400 mb-8">
                  Sem automação. Personalidade e função ajustadas para o perfil desejado. Entrega via link GPT privado.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'EssencialBot Professor Universitário', desc: 'Interage como professor de ensino superior com didática formal e linguagem acessível. Ideal para estudantes e mentoria acadêmica.' },
                    { title: 'EssencialBot Nutricionista', desc: 'Atende com linguagem acolhedora e técnica, explicando dietas e orientações nutricionais personalizadas.' },
                    { title: 'EssencialBot Costureiro', desc: 'Atua como profissional experiente em moda sob medida. Usa linguagem prática de ateliê com referências de moda.' },
                    { title: 'EssencialBot Desenvolvedor Mobile', desc: 'Responde com vocabulário técnico e linguagem direta. Ideal para mentorias em desenvolvimento.' },
                    { title: 'EssencialBot Consultor Jurídico', desc: 'Atende dúvidas iniciais com linguagem descomplicada. Ideal para advocacia preventiva e esclarecimentos básicos.' }
                  ].map((bot, index) => (
                    <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-green-300 mb-3">{bot.title}</h4>
                      <p className="text-gray-400 text-sm">{bot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nível 2 Examples */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Nível 2 — EssencialBot Integrado
                  </span>
                </h3>
                <p className="text-center text-gray-400 mb-8">
                  Com automação leve. GPT + formulário + integração via webhook com WhatsApp e Google Sheets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: 'EssencialBot Atendimento Comercial', desc: 'Recebe solicitações de orçamento e envia para o responsável via WhatsApp. Ideal para lojas e comércios locais.' },
                    { title: 'EssencialBot Coleta de Documentos', desc: 'Automatiza a coleta de arquivos e comprovantes de clientes. Atualiza planilhas e envia alertas ao gestor.' },
                    { title: 'EssencialBot Controle de Pedidos', desc: 'Recebe pedidos de produtos ou refeições e os redireciona para setores específicos. Ideal para restaurantes e deliveries.' }
                  ].map((bot, index) => (
                    <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">{bot.title}</h4>
                      <p className="text-gray-400 text-sm">{bot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nível 3 Examples */}
              <div>
                <h3 className="text-3xl font-bold mb-8 text-center">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Nível 3 — EssencialBot Avançado
                  </span>
                </h3>
                <p className="text-center text-gray-400 mb-8">
                  Com landing page personalizada, identidade visual e fluxos automatizados integrados.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'EssencialBot Central de Agendamentos', desc: 'Permite marcação de horários com confirmação automática, integração com agenda e WhatsApp. Ideal para clínicas, salões e consultórios.' },
                    { title: 'EssencialBot Recepção Inteligente', desc: 'Atua como recepcionista digital em sites e páginas institucionais. Apresenta os serviços, coleta informações e encaminha para atendimento.' }
                  ].map((bot, index) => (
                    <div key={index} className="p-6 bg-gray-800/30 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">{bot.title}</h4>
                      <p className="text-gray-400 text-sm">{bot.desc}</p>
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
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  Entre em Contato
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Pronto para transformar seu negócio com o <span className="text-cyan-300 font-semibold">EssencialBot</span>? Vamos conversar sobre suas necessidades
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interesse</label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione seu interesse</option>
                    <option value="automation">Automação IA</option>
                    <option value="accounting">Serviços contábeis</option>
                    <option value="consulting">Consultoria empresarial</option>
                    <option value="education">Educação e treinamentos</option>
                    <option value="agents">Modelos de agentes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30"
                >
                  Enviar Mensagem
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
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Exército de Agentes
                  </span>
                  <span className="text-xs text-cyan-300 -mt-1">
                    Powered by EssencialBot
                  </span>
                </div>
              </div>
              <div className="text-gray-400 text-sm text-center md:text-right">
                <div>© 2024 Exército de Agentes. Todos os direitos reservados.</div>
                <div className="mt-1">www.exercitodeagentes.com.br</div>
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