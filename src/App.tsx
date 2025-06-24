import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Shield, 
  Zap, 
  Users, 
  Calculator, 
  TrendingUp, 
  BookOpen, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Briefcase,
  GraduationCap,
  Settings,
  Palette,
  Search,
  Lightbulb,
  Tag,
  Brain,
  Wrench,
  MapIcon,
  Dumbbell,
  Instagram
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleContactClick = (method: string) => {
    trackEvent('contact_click', { method });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-black text-white">
        <SEOHead />
        
        {/* Header */}
        <header className="bg-black border-b border-gray-800 sticky top-0 z-40">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">EXÉRCITO DE AGENTES</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('automation')} className="text-white hover:text-cyan-400 transition-colors">
                  AUTOMAÇÃO IA
                </button>
                <button onClick={() => scrollToSection('accounting')} className="text-white hover:text-cyan-400 transition-colors">
                  CONTABILIDADE
                </button>
                <button onClick={() => scrollToSection('consulting')} className="text-white hover:text-cyan-400 transition-colors">
                  CONSULTORIA
                </button>
                <button onClick={() => scrollToSection('education')} className="text-white hover:text-cyan-400 transition-colors">
                  ENSINO PRÓ
                </button>
                <button onClick={() => scrollToSection('agents')} className="text-white hover:text-cyan-400 transition-colors">
                  PERSONALIZAÇÃO DE IA
                </button>
                <button onClick={() => scrollToSection('mission')} className="text-white hover:text-cyan-400 transition-colors">
                  MISSÃO
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors flex items-center space-x-2">
                  <span>CONTATO</span>
                  <Phone className="h-4 w-4" />
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </div>
          <div className="h-1 bg-black"></div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                >
                  CONHECER SOLUÇÕES
                </button>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                  onClick={() => handleContactClick('whatsapp')}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  FALAR COM ESPECIALISTA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-auto" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-auto)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                AUTOMAÇÃO INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seus processos com EssencialBot - IA que aprende, evolui e otimiza seu negócio 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Nível 2 - Integrado */}
              <div className="bg-gradient-to-br from-blue-600/30 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-full mr-4">
                    <Zap className="h-8 w-8 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">NÍVEL 2 - INTEGRADO</h3>
                    <p className="text-blue-200">Automação Essencial</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                    <span>EssencialBot personalizado</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                    <span>Integração Google Sheets</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                    <span>Automação Make/Zapier</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                    <span>Relatórios automáticos</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-blue-300 mr-3" />
                    <span>Suporte prioritário</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">R$ 397</div>
                  <div className="text-blue-200">Setup + R$ 397/mês</div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white">
                  ESCOLHER INTEGRADO
                </button>
              </div>

              {/* Nível 3 - Avançado */}
              <div className="bg-gradient-to-br from-purple-600/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-full mr-4">
                    <Bot className="h-8 w-8 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">NÍVEL 3 - AVANÇADO</h3>
                    <p className="text-purple-200">IA Completa</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Tudo do Nível 2 +</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Machine Learning avançado</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Análise preditiva</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Multi-plataformas</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Consultoria incluída</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">R$ 497</div>
                  <div className="text-purple-200">Setup + R$ 497/mês</div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white">
                  ESCOLHER AVANÇADO
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-acc" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-acc)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação total
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-600/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <Calculator className="h-12 w-12 text-green-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">SERVIÇOS ESSENCIAIS</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Abertura de empresas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Contabilidade mensal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Obrigações fiscais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Departamento pessoal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <TrendingUp className="h-12 w-12 text-green-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">GESTÃO AVANÇADA</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Planejamento tributário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Relatórios gerenciais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Compliance e auditoria</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Consultoria fiscal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600/30 to-emerald-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300">
                <Bot className="h-12 w-12 text-green-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">DIFERENCIAL IA</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Automação total</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>EssencialBot integrado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Relatórios inteligentes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-300 mr-2" />
                    <span>Atendimento 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 text-white">
                SOLICITAR PROPOSTA CONTÁBIL
              </button>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-cons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-cons)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                CONSULTORIA EMPRESARIAL
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções estratégicas completas - da gestão à recuperação judicial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <Briefcase className="h-12 w-12 text-orange-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">GESTÃO EMPRESARIAL</h3>
                <p className="text-gray-300">
                  Planejamento estratégico, otimização de processos e estruturação organizacional para crescimento sustentável.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <TrendingUp className="h-12 w-12 text-orange-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">FLUXO DE CAIXA</h3>
                <p className="text-gray-300">
                  Controle financeiro rigoroso, projeções precisas e estratégias para otimização do capital de giro.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <Shield className="h-12 w-12 text-orange-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">RECUPERAÇÃO JUDICIAL</h3>
                <p className="text-gray-300">
                  Reestruturação empresarial, negociação com credores e estratégias para superação de crises financeiras.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <Target className="h-12 w-12 text-orange-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">BUSCA DE CRÉDITO</h3>
                <p className="text-gray-300">
                  Conexão com factorings, estruturação de propostas e negociação de condições favoráveis de financiamento.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <Users className="h-12 w-12 text-orange-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">FUSÕES & AQUISIÇÕES</h3>
                <p className="text-gray-300">
                  Due diligence, avaliação de empresas, estruturação de operações e acompanhamento de transações.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                <Bot className="h-12 w-12 text-orange-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">CONSULTORIA COM IA</h3>
                <p className="text-gray-300">
                  Integração de inteligência artificial nos processos de consultoria para análises mais precisas e eficientes.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 text-white">
                AGENDAR CONSULTORIA
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-edu" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-edu)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                ENSINO PRÓ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Capacitação avançada em contabilidade, controladoria, gestão financeira e IA empresarial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <Bot className="h-12 w-12 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">IA EMPRESARIAL</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fundamentos de IA</li>
                  <li>• Chatbots empresariais</li>
                  <li>• Machine Learning</li>
                  <li>• Automação inteligente</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <Calculator className="h-12 w-12 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">CONTABILIDADE DIGITAL</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Contabilidade 4.0</li>
                  <li>• SPED e obrigações</li>
                  <li>• Análise de balanços</li>
                  <li>• Tecnologia contábil</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <Shield className="h-12 w-12 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">CONTROLADORIA</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                <TrendingUp className="h-12 w-12 text-purple-300 mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">GESTÃO FINANCEIRA</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Planejamento estratégico</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 max-w-2xl mx-auto">
                <Award className="h-16 w-16 text-purple-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">CERTIFICAÇÃO PROFISSIONAL</h3>
                <p className="text-gray-300 mb-6">
                  Todos os cursos incluem certificação reconhecida, projetos práticos e acompanhamento personalizado.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white">
                  VER CURSOS DISPONÍVEIS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section id="agents" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-agents" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-agents)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                PERSONALIZAÇÃO DE IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Configuração e disponibilização de agentes de IA customizados para suas necessidades específicas
              </p>
              <p className="text-lg text-red-300 font-semibold">
                Você não sabe que precisa desses agentes até conhecê-los!
              </p>
            </div>

            <div className="text-center mb-12">
              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 max-w-md mx-auto">
                <Settings className="h-16 w-16 text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">CONFIGURAÇÃO PERSONALIZADA</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">R$ 120</div>
                  <div className="text-red-200">Setup + R$ 50 por manutenção</div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 text-white">
                  PERSONALIZAR AGENTE
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Palette className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Agente de Renovação Visual</h4>
                <p className="text-gray-300 text-sm">Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Search className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Pesquisador de Mercado</h4>
                <p className="text-gray-300 text-sm">Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Lightbulb className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Compilador de Insights</h4>
                <p className="text-gray-300 text-sm">Traduz complexidade em decisão lúcida com precisão lógica.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Tag className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Agente Buscador de Cupons</h4>
                <p className="text-gray-300 text-sm">Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Brain className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Avaliador de QIs</h4>
                <p className="text-gray-300 text-sm">Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Wrench className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Encanador</h4>
                <p className="text-gray-300 text-sm">Especialista sênior em sistemas hidráulicos residenciais e comerciais.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <MapIcon className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Passeios em SP</h4>
                <p className="text-gray-300 text-sm">Estrategista urbano supremo, capaz de transformar desejos em vivências memoráveis em São Paulo.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <Dumbbell className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Treinadores</h4>
                <p className="text-gray-300 text-sm">Treinadores especializados em diversas modalidades esportivas e fitness.</p>
              </div>

              <div className="bg-gradient-to-br from-red-600/30 to-red-800/30 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <Star className="h-8 w-8 text-red-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">E Muito Mais!</h4>
                <p className="text-gray-300 text-sm">Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-mission" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-mission)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                NOSSA MISSÃO
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30">
                <div className="text-center mb-8">
                  <Bot className="h-20 w-20 text-cyan-300 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-6">TRANSFORMAÇÃO DIGITAL COMPLETA</h3>
                </div>
                
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    O <span className="text-cyan-400 font-semibold">Exército de Agentes</span> nasceu com uma missão clara: 
                    democratizar o acesso à inteligência artificial e automação empresarial, tornando essas tecnologias 
                    acessíveis para empresas de todos os portes.
                  </p>
                  
                  <p>
                    Combinamos <span className="text-cyan-400 font-semibold">expertise tradicional</span> em contabilidade 
                    e consultoria com <span className="text-cyan-400 font-semibold">inovação tecnológica</span> de ponta, 
                    criando soluções que não apenas automatizam processos, mas transformam completamente a forma como 
                    as empresas operam.
                  </p>
                  
                  <p>
                    Nosso <span className="text-cyan-400 font-semibold">EssencialBot</span> é mais que um chatbot - 
                    é um assistente inteligente que aprende, evolui e se adapta às necessidades específicas de cada negócio, 
                    proporcionando eficiência operacional e insights estratégicos únicos.
                  </p>
                  
                  <div className="text-center mt-8">
                    <p className="text-xl font-semibold text-cyan-300">
                      "Construindo o futuro dos negócios, um agente por vez."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                <defs>
                  <pattern id="circuit-contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M20 20h60v60h-60z" fill="none" stroke="cyan" strokeWidth="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="20" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="20" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <circle cx="80" cy="80" r="2" fill="cyan" opacity="0.6"/>
                    <path d="M20 20L80 20M20 80L80 80M20 20L20 80M80 20L80 80" stroke="cyan" strokeWidth="0.3" opacity="0.4"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-contact)"/>
              </svg>
            </div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                FALE CONOSCO
              </h2>
              <p className="text-xl text-gray-300">
                Pronto para transformar seu negócio? Entre em contato agora!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a 
                href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                onClick={() => handleContactClick('whatsapp')}
                className="bg-gradient-to-br from-green-600/30 to-green-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 text-center group"
              >
                <Phone className="h-12 w-12 text-green-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-green-200">(11) 91175-7113</p>
                <p className="text-gray-300 text-sm mt-2">Atendimento imediato</p>
              </a>

              <a 
                href={`mailto:${config.EMAIL_CONTACT}`}
                onClick={() => handleContactClick('email')}
                className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 text-center group"
              >
                <Mail className="h-12 w-12 text-blue-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
                <p className="text-blue-200">sac@exercitodeagentes.com.br</p>
                <p className="text-gray-300 text-sm mt-2">Resposta em até 2h</p>
              </a>

              <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 text-center">
                <Clock className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Horário</h3>
                <p className="text-purple-200">Segunda a Sexta</p>
                <p className="text-purple-200">8h às 18h</p>
                <p className="text-gray-300 text-sm mt-2">Suporte 24/7 via IA</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">AGENDE UMA DEMONSTRAÇÃO</h3>
                <p className="text-gray-300 mb-6">
                  Veja na prática como o EssencialBot pode revolucionar seu negócio
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-white">
                  AGENDAR DEMO GRATUITA
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Transformando negócios com inteligência artificial e automação avançada.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/exercitodeagentes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">SERVIÇOS</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-cyan-400 transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-cyan-400 transition-colors">Contabilidade</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-cyan-400 transition-colors">Consultoria</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors">Ensino Pró</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">CONTATO</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>(11) 91175-7113</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>sac@exercitodeagentes.com.br</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>São Paulo, SP</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">EMPRESA</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => scrollToSection('mission')} className="hover:text-cyan-400 transition-colors">Nossa Missão</button></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Exército de Agentes. Todos os direitos reservados.
              </p>
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