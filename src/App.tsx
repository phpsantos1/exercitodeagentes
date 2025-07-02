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
  Instagram,
  Heart
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
      <div className="min-h-screen bg-white text-gray-800">
        <SEOHead />
        
        {/* Header */}
        <header className="bg-black sticky top-0 z-40 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="/imagem_gerada.png" 
                  alt="Exército de Agentes Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-2xl font-bold text-yellow-400">EXÉRCITO DE AGENTES</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('automation')} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  AUTOMAÇÃO IA
                </button>
                <button onClick={() => scrollToSection('accounting')} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  CONTABILIDADE
                </button>
                <button onClick={() => scrollToSection('consulting')} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  CONSULTORIA
                </button>
                <button onClick={() => scrollToSection('education')} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  EDUCAÇÃO PRÓ
                </button>
                <button onClick={() => scrollToSection('agents')} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  IA PERSONALIZADA
                </button>
                <button onClick={() => scrollToSection('ea-social')} className="text-yellow-400 hover:text-yellow-300 transition-colors font-medium">
                  EA SOCIAL
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-2 font-medium">
                  <span>CONTATO</span>
                  <Phone className="h-4 w-4" />
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Transforme seu negócio com <span className="text-blue-600 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  CONHECER SOLUÇÕES
                </button>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                  onClick={() => handleContactClick('whatsapp')}
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  FALAR COM ESPECIALISTA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                NOSSOS SERVIÇOS
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções completas em IA, contabilidade, consultoria, educação e inclusão social
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
              {/* IA Automação */}
              <button 
                onClick={() => scrollToSection('automation')}
                className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl h-64 flex flex-col justify-center items-center group"
              >
                <Shield className="h-12 w-12 text-blue-200 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">IA AUTOMAÇÃO</h3>
                <p className="text-blue-100 text-sm">Especialista em soluções de automação inteligente</p>
              </button>

              {/* Contabilidade */}
              <button 
                onClick={() => scrollToSection('accounting')}
                className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-center hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl h-64 flex flex-col justify-center items-center group"
              >
                <Calculator className="h-12 w-12 text-green-200 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">CONTABILIDADE</h3>
                <p className="text-green-100 text-sm">Expert em serviços contábeis inteligentes</p>
              </button>

              {/* Consultoria */}
              <button 
                onClick={() => scrollToSection('consulting')}
                className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-center hover:from-orange-700 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl h-64 flex flex-col justify-center items-center group"
              >
                <Briefcase className="h-12 w-12 text-orange-200 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">CONSULTORIA</h3>
                <p className="text-orange-100 text-sm">Especialista em gestão e estratégia empresarial</p>
              </button>

              {/* Educação Pró */}
              <button 
                onClick={() => scrollToSection('education')}
                className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-center hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl h-64 flex flex-col justify-center items-center group"
              >
                <GraduationCap className="h-12 w-12 text-purple-200 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">EDUCAÇÃO PRÓ</h3>
                <p className="text-purple-100 text-sm">Expert em treinamentos e capacitação</p>
              </button>

              {/* IA Personalizada */}
              <button 
                onClick={() => scrollToSection('agents')}
                className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-center hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl h-64 flex flex-col justify-center items-center group"
              >
                <Settings className="h-12 w-12 text-red-200 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">IA PERSONALIZADA</h3>
                <p className="text-red-100 text-sm">Especialista em agentes customizados</p>
              </button>

              {/* EA Social */}
              <button 
                onClick={() => scrollToSection('ea-social')}
                className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-8 text-center hover:from-pink-700 hover:to-pink-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl h-64 flex flex-col justify-center items-center group"
              >
                <Heart className="h-12 w-12 text-pink-200 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">EA SOCIAL</h3>
                <p className="text-pink-100 text-sm">Projeto de inclusão e acessibilidade</p>
              </button>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                AUTOMAÇÃO INTELIGENTE
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolucione seus processos com EssencialBot - IA que aprende, evolui e otimiza seu negócio 24/7
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Nível 2 - Integrado */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 border-4 border-blue-400 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/50">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-full mr-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-1">NÍVEL 2 - INTEGRADO</h3>
                    <p className="text-blue-100">Automação Essencial</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                    <span>EssencialBot personalizado</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                    <span>Integração Google Sheets</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                    <span>Automação Make/Zapier</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                    <span>Relatórios automáticos</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-blue-200 mr-3" />
                    <span>Suporte prioritário</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">R$ 397</div>
                  <div className="text-blue-100">Setup + R$ 397/mês</div>
                </div>

                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Tenho interesse no Nível 2 - Integrado de Automação IA.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 block text-center shadow-lg"
                >
                  ESCOLHER INTEGRADO
                </a>
              </div>

              {/* Nível 3 - Avançado */}
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    MAIS POPULAR
                  </span>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/20 rounded-full mr-4">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-400 mb-1">NÍVEL 3 - AVANÇADO</h3>
                    <p className="text-purple-100">IA Completa</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-purple-200 mr-3" />
                    <span>Tudo do Nível 2 +</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-purple-200 mr-3" />
                    <span>Machine Learning avançado</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-purple-200 mr-3" />
                    <span>Análise preditiva</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-purple-200 mr-3" />
                    <span>Multi-plataformas</span>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-purple-200 mr-3" />
                    <span>Consultoria incluída</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">R$ 497</div>
                  <div className="text-purple-100">Setup + R$ 497/mês</div>
                </div>

                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Tenho interesse no Nível 3 - Avançado de Automação IA.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 block text-center shadow-lg"
                >
                  ESCOLHER AVANÇADO
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação total
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 border-4 border-green-400 hover:border-green-300 transition-all duration-300 shadow-2xl hover:shadow-green-500/50">
                <Calculator className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">SERVIÇOS ESSENCIAIS</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Abertura de empresas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Contabilidade mensal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Obrigações fiscais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Departamento pessoal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 border-4 border-green-400 hover:border-green-300 transition-all duration-300 shadow-2xl hover:shadow-green-500/50">
                <TrendingUp className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">GESTÃO AVANÇADA</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Planejamento tributário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Relatórios gerenciais</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Compliance e auditoria</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Consultoria fiscal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 border-4 border-green-400 hover:border-green-300 transition-all duration-300 shadow-2xl hover:shadow-green-500/50">
                <Bot className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">DIFERENCIAL IA</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Automação total</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>EssencialBot integrado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Relatórios inteligentes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-200 mr-2" />
                    <span>Atendimento 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Accounting Services */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-12 border-4 border-green-400 shadow-2xl">
              <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">SERVIÇOS CONTÁBEIS COMPLETOS</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">📊 CONTABILIDADE GERAL</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Escrituração contábil completa</li>
                    <li>• Balancetes mensais</li>
                    <li>• Demonstrações financeiras</li>
                    <li>• Conciliações bancárias</li>
                    <li>• Controle de estoque</li>
                    <li>• Análise de custos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">🏢 ABERTURA DE EMPRESAS</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Consultoria de enquadramento</li>
                    <li>• Registro na Junta Comercial</li>
                    <li>• Inscrições municipais e estaduais</li>
                    <li>• CNPJ e alvará de funcionamento</li>
                    <li>• Contratos sociais</li>
                    <li>• Licenças especiais</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">📋 OBRIGAÇÕES FISCAIS</h4>
                  <ul className="space-y-2 text-white">
                    <li>• SPED Contábil e Fiscal</li>
                    <li>• ECF (Escrituração Contábil Fiscal)</li>
                    <li>• DEFIS (Simples Nacional)</li>
                    <li>• DCTF e DCTF-Web</li>
                    <li>• EFD-Contribuições</li>
                    <li>• Declarações diversas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">👥 DEPARTAMENTO PESSOAL</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Folha de pagamento</li>
                    <li>• Admissões e demissões</li>
                    <li>• eSocial e FGTS</li>
                    <li>• Férias e 13º salário</li>
                    <li>• CAGED e RAIS</li>
                    <li>• Benefícios e vale-transporte</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">💰 PLANEJAMENTO TRIBUTÁRIO</h4>
                  <ul className="space-y-2 text-white">
                    <li>• Análise de regime tributário</li>
                    <li>• Elisão fiscal legal</li>
                    <li>• Recuperação de tributos</li>
                    <li>• Parcelamentos fiscais</li>
                    <li>• Consultoria tributária</li>
                    <li>• Simulações e projeções</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-4">🤖 TECNOLOGIA E IA</h4>
                  <ul className="space-y-2 text-white">
                    <li>• EssencialBot contábil</li>
                    <li>• Automação de processos</li>
                    <li>• Relatórios inteligentes</li>
                    <li>• Dashboard em tempo real</li>
                    <li>• Integração com ERPs</li>
                    <li>• Atendimento 24/7</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar uma proposta para serviços contábeis.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                SOLICITAR PROPOSTA CONTÁBIL
              </a>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                CONSULTORIA EMPRESARIAL
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções estratégicas completas - da gestão à recuperação judicial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-4 border-orange-400 hover:border-orange-300 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
                <Briefcase className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">GESTÃO EMPRESARIAL</h3>
                <p className="text-white">
                  Planejamento estratégico, otimização de processos e estruturação organizacional para crescimento sustentável.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-4 border-orange-400 hover:border-orange-300 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
                <TrendingUp className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">FLUXO DE CAIXA</h3>
                <p className="text-white">
                  Controle financeiro rigoroso, projeções precisas e estratégias para otimização do capital de giro.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-4 border-orange-400 hover:border-orange-300 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
                <Shield className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">RECUPERAÇÃO JUDICIAL</h3>
                <p className="text-white">
                  Reestruturação empresarial, negociação com credores e estratégias para superação de crises financeiras.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-4 border-orange-400 hover:border-orange-300 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
                <Target className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">BUSCA DE CRÉDITO</h3>
                <p className="text-white">
                  Conexão com factorings, estruturação de propostas e negociação de condições favoráveis de financiamento.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-4 border-orange-400 hover:border-orange-300 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
                <Users className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">FUSÕES & AQUISIÇÕES</h3>
                <p className="text-white">
                  Due diligence, avaliação de empresas, estruturação de operações e acompanhamento de transações.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 border-4 border-orange-400 hover:border-orange-300 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
                <Bot className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">CONSULTORIA COM IA</h3>
                <p className="text-white">
                  Integração de inteligência artificial nos processos de consultoria para análises mais precisas e eficientes.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma consultoria empresarial.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                AGENDAR CONSULTORIA
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
                EDUCAÇÃO PRÓ
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Capacitação avançada em contabilidade, controladoria, gestão financeira e IA empresarial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <Bot className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">IA EMPRESARIAL</h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Fundamentos de IA</li>
                  <li>• Chatbots empresariais</li>
                  <li>• Machine Learning</li>
                  <li>• Automação inteligente</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <Calculator className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">CONTABILIDADE DIGITAL</h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Contabilidade 4.0</li>
                  <li>• SPED e obrigações</li>
                  <li>• Análise de balanços</li>
                  <li>• Tecnologia contábil</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <Shield className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">CONTROLADORIA</h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 hover:border-purple-300 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50">
                <TrendingUp className="h-12 w-12 text-white mb-6" />
                <h3 className="text-xl font-bold text-yellow-400 mb-4">GESTÃO FINANCEIRA</h3>
                <ul className="space-y-2 text-white text-sm">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Planejamento estratégico</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 max-w-2xl mx-auto shadow-2xl">
                <Award className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">CERTIFICAÇÃO PROFISSIONAL</h3>
                <p className="text-white mb-6">
                  Todos os cursos incluem certificação reconhecida, projetos práticos e acompanhamento personalizado.
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de ver os cursos disponíveis na Educação Pró.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  VER CURSOS DISPONÍVEIS
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents Section */}
        <section id="agents" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                IA PERSONALIZADA
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Configuração e disponibilização de agentes de IA customizados para suas necessidades específicas
              </p>
              <p className="text-lg text-red-600 font-semibold">
                Você não sabe que precisa desses agentes até conhecê-los!
              </p>
            </div>

            <div className="text-center mb-12">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 border-4 border-red-400 max-w-2xl mx-auto shadow-2xl">
                <Settings className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">CONFIGURAÇÃO PERSONALIZADA</h3>
                
                {/* Pricing Table */}
                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400 mb-2">1 AGENTE</div>
                      <div className="text-2xl font-bold mb-1">R$ 497</div>
                      <div className="text-sm text-red-100">Setup + R$ 50/mês manutenção</div>
                    </div>
                    
                    <div className="text-center border-l border-r border-white/20 px-4">
                      <div className="text-lg font-bold text-yellow-400 mb-2">2 A 4 AGENTES</div>
                      <div className="text-2xl font-bold mb-1">R$ 397</div>
                      <div className="text-sm text-red-100">cada + R$ 50/mês manutenção</div>
                      <div className="text-xs text-yellow-300 mt-1">ECONOMIA DE R$ 100</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-400 mb-2">5+ AGENTES</div>
                      <div className="text-2xl font-bold mb-1">R$ 297</div>
                      <div className="text-sm text-red-100">cada + R$ 50/mês manutenção</div>
                      <div className="text-xs text-yellow-300 mt-1">ECONOMIA DE R$ 200</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-200 text-sm">
                    💡 <strong>DICA:</strong> Quanto mais agentes, maior a economia! Ideal para empresas que querem automatizar múltiplos processos.
                  </p>
                </div>

                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de personalizar agentes de IA. Preciso de mais informações sobre os preços progressivos.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 block text-center shadow-lg"
                >
                  PERSONALIZAR AGENTES
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Palette className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Agente de Renovação Visual</h4>
                <p className="text-red-100 text-sm">Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Search className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Pesquisador de Mercado</h4>
                <p className="text-red-100 text-sm">Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Lightbulb className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Compilador de Insights</h4>
                <p className="text-red-100 text-sm">Traduz complexidade em decisão lúcida com precisão lógica.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Tag className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Agente Buscador de Cupons</h4>
                <p className="text-red-100 text-sm">Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Brain className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Avaliador de QIs</h4>
                <p className="text-red-100 text-sm">Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Wrench className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Encanador</h4>
                <p className="text-red-100 text-sm">Especialista sênior em sistemas hidráulicos residenciais e comerciais.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <MapIcon className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Passeios em SP</h4>
                <p className="text-red-100 text-sm">Estrategista urbano supremo, capaz de transformar desejos em vivências memoráveis em São Paulo.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
                <Dumbbell className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">Treinadores</h4>
                <p className="text-red-100 text-sm">Treinadores especializados em diversas modalidades esportivas e fitness.</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 border-4 border-red-400 hover:border-red-300 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 md:col-span-2 lg:col-span-1">
                <Star className="h-8 w-8 text-white mb-4" />
                <h4 className="text-lg font-bold text-yellow-400 mb-2">E Muito Mais!</h4>
                <p className="text-red-100 text-sm">Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EA Social Section */}
        <section id="ea-social" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                EA SOCIAL - PROJETO DE INCLUSÃO
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Nosso compromisso social: tecnologia de IA a serviço da inclusão e acessibilidade
              </p>
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                🌟 ACESSO 100% GRATUITO 🌟
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-12 border-4 border-pink-400 shadow-2xl mb-12">
              <h3 className="text-3xl font-bold text-yellow-400 mb-8 text-center">COMO FUNCIONA</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">AGENTE ESPECIALIZADO</h4>
                  <p className="text-white">Acesso gratuito a agentes de IA treinados especificamente para cada condição</p>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">SUPORTE FAMILIAR</h4>
                  <p className="text-white">Agentes específicos para orientar familiares e cuidadores no dia a dia</p>
                </div>

                <div className="text-center">
                  <div className="bg-white/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">ACOMPANHAMENTO PSICOLÓGICO</h4>
                  <p className="text-white">Agente com perfil psicológico para mediar relações e oferecer suporte emocional</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 border-4 border-blue-400 hover:border-blue-300 transition-all duration-300 shadow-2xl hover:shadow-blue-500/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🧩</div>
                  <h3 className="text-2xl font-bold text-yellow-400">AUTISMO</h3>
                </div>
                <p className="text-white mb-6 text-center">
                  Agentes especializados para facilitar relacionamento social, comunicação e rotinas diárias
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de acessar o agente especializado em Autismo do projeto EA Social.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 block text-center shadow-lg"
                >
                  ACESSAR AGENTE
                </a>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 border-4 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">😊</div>
                  <h3 className="text-2xl font-bold text-white">SÍNDROME DE DOWN</h3>
                </div>
                <p className="text-white mb-6 text-center">
                  Suporte personalizado para desenvolvimento cognitivo, autonomia e orientação familiar
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de acessar o agente especializado em Síndrome de Down do projeto EA Social.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-yellow-50 transition-all duration-300 block text-center shadow-lg"
                >
                  ACESSAR AGENTE
                </a>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 border-4 border-green-400 hover:border-green-300 transition-all duration-300 shadow-2xl hover:shadow-green-500/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">💚</div>
                  <h3 className="text-2xl font-bold text-yellow-400">ANSIEDADE</h3>
                </div>
                <p className="text-white mb-6 text-center">
                  Ferramentas para gerenciamento emocional, técnicas de relaxamento e suporte psicológico
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de acessar o agente especializado em Ansiedade do projeto EA Social.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 block text-center shadow-lg"
                >
                  ACESSAR AGENTE
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 border-4 border-pink-400 max-w-2xl mx-auto shadow-2xl">
                <Heart className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">NOSSO COMPROMISSO</h3>
                <p className="text-white mb-6">
                  Acreditamos que a tecnologia deve ser inclusiva e acessível a todos. O EA Social é nossa contribuição para um mundo mais justo e igualitário.
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre o projeto EA Social e como posso contribuir.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  SAIBA MAIS SOBRE O PROJETO
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                FALE CONOSCO
              </h2>
              <p className="text-xl text-gray-600">
                Pronto para transformar seu negócio? Entre em contato agora!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a 
                href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                onClick={() => handleContactClick('whatsapp')}
                className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 border-4 border-green-400 hover:border-green-300 transition-all duration-300 transform hover:scale-105 text-center group shadow-2xl hover:shadow-green-500/50"
              >
                <Phone className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">WhatsApp</h3>
                <p className="text-green-100">(11) 91175-7113</p>
                <p className="text-white text-sm mt-2">Atendimento imediato</p>
              </a>

              <a 
                href={`mailto:${config.EMAIL_CONTACT}`}
                onClick={() => handleContactClick('email')}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 border-4 border-blue-400 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 text-center group shadow-2xl hover:shadow-blue-500/50"
              >
                <Mail className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">E-mail</h3>
                <p className="text-blue-100">sac@exercitodeagentes.com.br</p>
                <p className="text-white text-sm mt-2">Resposta em até 2h</p>
              </a>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 border-4 border-purple-400 text-center shadow-2xl">
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Horário</h3>
                <p className="text-purple-100">Segunda a Sexta</p>
                <p className="text-purple-100">8h às 18h</p>
                <p className="text-white text-sm mt-2">Suporte 24/7 via IA</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 border-4 border-blue-400 max-w-2xl mx-auto shadow-2xl">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">AGENDE UMA DEMONSTRAÇÃO</h3>
                <p className="text-white mb-6">
                  Veja na prática como o EssencialBot pode revolucionar seu negócio
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de agendar uma demonstração gratuita do EssencialBot.`}
                  onClick={() => handleContactClick('whatsapp_demo')}
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  AGENDAR DEMO GRATUITA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src="/imagem_gerada.png" 
                    alt="Exército de Agentes Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-bold text-yellow-400">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-yellow-300 mb-4">
                  Transformando negócios com inteligência artificial e automação avançada.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/exercitodeagentes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">SERVIÇOS</h4>
                <ul className="space-y-2 text-yellow-300">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-yellow-200 transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-yellow-200 transition-colors">Contabilidade</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-yellow-200 transition-colors">Consultoria</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-yellow-200 transition-colors">Educação Pró</button></li>
                  <li><button onClick={() => scrollToSection('agents')} className="hover:text-yellow-200 transition-colors">IA Personalizada</button></li>
                  <li><button onClick={() => scrollToSection('ea-social')} className="hover:text-yellow-200 transition-colors">EA Social</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">CONTATO</h4>
                <ul className="space-y-2 text-yellow-300">
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <a 
                      href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                      onClick={() => handleContactClick('whatsapp_footer')}
                      className="hover:text-yellow-200 transition-colors"
                    >
                      (11) 91175-7113
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <a 
                      href={`mailto:${config.EMAIL_CONTACT}`}
                      onClick={() => handleContactClick('email_footer')}
                      className="hover:text-yellow-200 transition-colors"
                    >
                      sac@exercitodeagentes.com.br
                    </a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>São Paulo, SP</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">EMPRESA</h4>
                <ul className="space-y-2 text-yellow-300">
                  <li><a href="#" className="hover:text-yellow-200 transition-colors">Nossa Missão</a></li>
                  <li><a href="#" className="hover:text-yellow-200 transition-colors">Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-yellow-200 transition-colors">Termos de Uso</a></li>
                  <li><button onClick={() => scrollToSection('ea-social')} className="hover:text-yellow-200 transition-colors">Projeto Social</button></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-yellow-600 mt-8 pt-8 text-center">
              <p className="text-yellow-400">
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