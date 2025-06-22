import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Bot, Zap, Calculator, Users, GraduationCap, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight, Star, Shield, Target, TrendingUp, Briefcase, BookOpen, MessageSquare, ChevronRight, Building, CreditCard, FileText, BarChart3, Lightbulb, Rocket, Globe, Smartphone, Headphones, Award, Sparkles, Brain, Cpu, Database, Network, Settings, Lock, Gauge, PieChart, TrendingDown, DollarSign, FileBarChart, Calculator as CalculatorIcon, Receipt, Banknote, FileSpreadsheet, ClipboardCheck, Scale, Gavel, HandHeart, CreditCard as CreditCardIcon, Building2, UserCheck, BookMarked, Video, Users2, AlignCenterVertical as Certificate, Presentation, Library, GraduationCap as GraduationCapIcon, User } from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleContactClick = (type: string) => {
    trackEvent('contact_click', { type });
  };

  const handleServiceClick = (service: string) => {
    trackEvent('service_interest', { service });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <SEOHead />
        
        {/* Header */}
        <header className="relative z-40 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</h1>
                  <p className="text-sm text-cyan-300">EssencialBot • Automação Inteligente</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a
                  href="https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleContactClick('specialist')}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Falar com Especialista
                </a>
                <a
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleContactClick('whatsapp')}
                  className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Phone className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="#automation"
                onClick={() => handleServiceClick('automation')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <Rocket className="h-5 w-5" />
                <span>Começar Automação</span>
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
              >
                <ArrowRight className="h-5 w-5" />
                <span>Conhecer Serviços</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-400">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Suporte IA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                <div className="text-gray-400">Redução Custos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Nossas <span className="text-cyan-400">Soluções</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Oferecemos um ecossistema completo de serviços para transformar digitalmente seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Automação IA */}
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Automação IA</h3>
                <p className="text-gray-300 mb-6">EssencialBot personalizado com IA avançada para automatizar processos e aumentar produtividade</p>
                <a
                  href="#automation"
                  onClick={() => handleServiceClick('automation')}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Contabilidade */}
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Contabilidade</h3>
                <p className="text-gray-300 mb-6">Escritório contábil completo com tecnologia avançada e atendimento personalizado</p>
                <a
                  href="#accounting"
                  onClick={() => handleServiceClick('accounting')}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Consultoria */}
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Consultoria</h3>
                <p className="text-gray-300 mb-6">Consultoria empresarial especializada em gestão, recuperação judicial e crescimento</p>
                <a
                  href="#consulting"
                  onClick={() => handleServiceClick('consulting')}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Educação */}
              <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl w-fit mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Educação</h3>
                <p className="text-gray-300 mb-6">Treinamentos e cursos especializados em contabilidade, IA e gestão empresarial</p>
                <a
                  href="#education"
                  onClick={() => handleServiceClick('education')}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Automação IA Section */}
        <section id="automation" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-cyan-400">EssencialBot</span> - Automação Inteligente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu negócio com nossa IA proprietária que aprende e evolui com sua empresa
              </p>
            </div>

            {/* Planos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Nível 2 - Integrado */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-cyan-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-transparent w-32 h-32 opacity-10"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Nível 2 - Integrado</h3>
                    <div className="px-4 py-2 bg-cyan-500/20 rounded-full">
                      <span className="text-cyan-400 font-semibold">POPULAR</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">R$ 297</span>
                      <span className="text-gray-400 ml-2">/mês</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">EssencialBot personalizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Integração Google Sheets</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Automação Make/Zapier</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Relatórios automáticos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Suporte prioritário</span>
                    </div>
                  </div>

                  <a
                    href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceClick('nivel-2')}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Contratar Agora</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Nível 3 - Avançado */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-transparent w-32 h-32 opacity-10"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white">Nível 3 - Avançado</h3>
                    <div className="px-4 py-2 bg-purple-500/20 rounded-full">
                      <span className="text-purple-400 font-semibold">PREMIUM</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">R$ 497</span>
                      <span className="text-gray-400 ml-2">/mês</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">Tudo do Nível 2 +</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">Machine Learning avançado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">Análise preditiva</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">Multi-plataformas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">Consultoria incluída</span>
                    </div>
                  </div>

                  <a
                    href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceClick('nivel-3')}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Contratar Agora</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Recursos Técnicos */}
            <div className="bg-gray-800/50 rounded-3xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Recursos Técnicos Avançados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-cyan-500/20 rounded-xl w-fit mx-auto mb-4">
                    <Brain className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">IA Conversacional</h4>
                  <p className="text-gray-400 text-sm">Processamento natural de linguagem avançado</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-blue-500/20 rounded-xl w-fit mx-auto mb-4">
                    <Database className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Big Data</h4>
                  <p className="text-gray-400 text-sm">Análise de grandes volumes de dados</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-purple-500/20 rounded-xl w-fit mx-auto mb-4">
                    <Network className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Integrações</h4>
                  <p className="text-gray-400 text-sm">Conecta com 1000+ aplicações</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-green-500/20 rounded-xl w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Segurança</h4>
                  <p className="text-gray-400 text-sm">Criptografia e compliance LGPD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contabilidade Section */}
        <section id="accounting" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-green-400">Contabilidade</span> Inteligente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e atendimento humanizado
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Serviços Completos</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Building className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Abertura de Empresas</h4>
                      <p className="text-gray-400">Processo completo e rápido para constituição empresarial</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <FileSpreadsheet className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Contabilidade Mensal</h4>
                      <p className="text-gray-400">Escrituração, balancetes e demonstrações financeiras</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Receipt className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Obrigações Fiscais</h4>
                      <p className="text-gray-400">SPED, ECF, DEFIS e todas as obrigações acessórias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Users className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Departamento Pessoal</h4>
                      <p className="text-gray-400">Folha de pagamento, admissões, demissões e eSocial</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Diferenciais Tecnológicos</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Automação com EssencialBot</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Relatórios em tempo real</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Portal do cliente online</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Backup em nuvem</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-gray-300">Suporte especializado</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a
                    href="https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceClick('contabilidade')}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Solicitar Proposta</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Especialidades Contábeis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-500/20">
                <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4">
                  <PieChart className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Planejamento Tributário</h4>
                <p className="text-gray-400 mb-4">Otimização da carga tributária com estratégias legais</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Análise de regime tributário</li>
                  <li>• Elisão fiscal</li>
                  <li>• Recuperação de tributos</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-500/20">
                <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Relatórios Gerenciais</h4>
                <p className="text-gray-400 mb-4">Informações estratégicas para tomada de decisão</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• DRE gerencial</li>
                  <li>• Fluxo de caixa</li>
                  <li>• Indicadores financeiros</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-500/20">
                <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Compliance</h4>
                <p className="text-gray-400 mb-4">Conformidade total com legislação vigente</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Auditoria interna</li>
                  <li>• Controles internos</li>
                  <li>• LGPD contábil</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consultoria Section */}
        <section id="consulting" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-purple-400">Consultoria</span> Empresarial Expert
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções estratégicas para crescimento, recuperação e otimização empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Gestão Empresarial */}
              <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-3xl p-8 border border-purple-500/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Gestão & Crescimento</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Planejamento Estratégico</h4>
                      <p className="text-gray-400 text-sm">Definição de metas e estratégias de crescimento</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Gestão Financeira</h4>
                      <p className="text-gray-400 text-sm">Controle de fluxo de caixa e orçamento</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Otimização Operacional</h4>
                      <p className="text-gray-400 text-sm">Melhoria de processos e produtividade</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recuperação Judicial */}
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-red-500/20">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-xl">
                    <Scale className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Recuperação Judicial</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Análise de Viabilidade</h4>
                      <p className="text-gray-400 text-sm">Estudo completo da situação empresarial</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Plano de Recuperação</h4>
                      <p className="text-gray-400 text-sm">Elaboração de estratégias de reestruturação</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Acompanhamento Judicial</h4>
                      <p className="text-gray-400 text-sm">Suporte durante todo o processo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outros Serviços */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-500/20">
                <div className="p-3 bg-blue-500/20 rounded-xl w-fit mb-4">
                  <CreditCard className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Busca de Crédito</h4>
                <p className="text-gray-400 mb-4">Intermediação com factorings e instituições financeiras</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Análise de perfil creditício</li>
                  <li>• Negociação de condições</li>
                  <li>• Acompanhamento do processo</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-500/20">
                <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-4">
                  <Building2 className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Fusões & Aquisições</h4>
                <p className="text-gray-400 mb-4">Assessoria completa em operações societárias</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Due diligence</li>
                  <li>• Valuation empresarial</li>
                  <li>• Estruturação de operações</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-purple-500/20">
                <div className="p-3 bg-cyan-500/20 rounded-xl w-fit mb-4">
                  <Bot className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Consultoria com IA</h4>
                <p className="text-gray-400 mb-4">Transformação digital e automação inteligente</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Diagnóstico digital</li>
                  <li>• Implementação de IA</li>
                  <li>• Treinamento de equipes</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleServiceClick('consultoria')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-white font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 space-x-2"
              >
                <span>Solicitar Consultoria</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Educação Section */}
        <section id="education" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-orange-400">Educação</span> Profissional
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados para capacitar profissionais e empresas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Cursos Principais */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Áreas de Capacitação</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-cyan-500/20 rounded-xl">
                        <Bot className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white">IA Empresarial</h4>
                    </div>
                    <p className="text-gray-400 mb-4">Fundamentos e aplicações práticas de Inteligência Artificial</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Fundamentos de IA e Machine Learning</li>
                      <li>• Desenvolvimento de Chatbots</li>
                      <li>• Automação com IA</li>
                      <li>• Ética e governança em IA</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-green-500/20 rounded-xl">
                        <Calculator className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="text-xl font-bold text-white">Contabilidade Digital</h4>
                    </div>
                    <p className="text-gray-400 mb-4">Modernização e digitalização de processos contábeis</p>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Contabilidade 4.0</li>
                      <li>• SPED e obrigações digitais</li>
                      <li>• Análise de balanços</li>
                      <li>• Auditoria digital</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Metodologia */}
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Nossa Metodologia</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Video className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Aulas Online e Presenciais</h4>
                      <p className="text-gray-400 text-sm">Flexibilidade total para seu aprendizado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Briefcase className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Projetos Práticos</h4>
                      <p className="text-gray-400 text-sm">Aplicação real dos conhecimentos adquiridos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Certificate className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Certificação</h4>
                      <p className="text-gray-400 text-sm">Certificados reconhecidos pelo mercado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Users2 className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Mentoria Personalizada</h4>
                      <p className="text-gray-400 text-sm">Acompanhamento individual de especialistas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleServiceClick('educacao')}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Ver Cursos Disponíveis</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cursos Adicionais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-orange-500/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Controladoria</h4>
                </div>
                <p className="text-gray-400 mb-4">Controles internos, auditoria e compliance empresarial</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance e governança</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-6 border border-orange-500/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Gestão Financeira</h4>
                </div>
                <p className="text-gray-400 mb-4">Planejamento financeiro e análise de investimentos</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Valuation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Agentes Personalizados Section */}
        <section id="agents" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="text-cyan-400">Personalize</span> seu Agente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Crie agentes de IA únicos e especializados para suas necessidades específicas
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Agentes Sob Medida</h3>
                  <p className="text-gray-300 mb-6">
                    Desenvolvemos agentes de IA personalizados que se adaptam perfeitamente ao seu negócio, 
                    com conhecimento específico do seu setor e processos únicos.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Treinamento com seus dados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Integração com seus sistemas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Personalidade e tom únicos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">Evolução contínua</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded-2xl p-4 border border-cyan-500/20">
                    <div className="p-3 bg-cyan-500/20 rounded-xl w-fit mb-3">
                      <Headphones className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Atendimento</h4>
                    <p className="text-gray-400 text-sm">Agentes especializados em suporte ao cliente</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-2xl p-4 border border-cyan-500/20">
                    <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-3">
                      <DollarSign className="h-6 w-6 text-green-400" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Vendas</h4>
                    <p className="text-gray-400 text-sm">IA focada em conversão e relacionamento</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-2xl p-4 border border-cyan-500/20">
                    <div className="p-3 bg-purple-500/20 rounded-xl w-fit mb-3">
                      <BarChart3 className="h-6 w-6 text-purple-400" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Análise</h4>
                    <p className="text-gray-400 text-sm">Insights e relatórios inteligentes</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-2xl p-4 border border-cyan-500/20">
                    <div className="p-3 bg-orange-500/20 rounded-xl w-fit mb-3">
                      <BookOpen className="h-6 w-6 text-orange-400" />
                    </div>
                    <h4 className="font-bold text-white mb-2">Educação</h4>
                    <p className="text-gray-400 text-sm">Treinamento e capacitação automatizada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleServiceClick('agente-personalizado')}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 space-x-2"
              >
                <span>Criar Meu Agente</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Entre em <span className="text-cyan-400">Contato</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos prontos para transformar seu negócio com nossas soluções inteligentes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Fale Conosco</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">WhatsApp</h4>
                      <a
                        href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleContactClick('whatsapp')}
                        className="text-green-400 hover:text-green-300 transition-colors"
                      >
                        (11) 91175-7113
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">E-mail Geral</h4>
                      <a
                        href={`mailto:${config.EMAIL_CONTACT}`}
                        onClick={() => handleContactClick('email')}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {config.EMAIL_CONTACT}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Financeiro</h4>
                      <a
                        href={`mailto:${config.EMAIL_FINANCIAL}`}
                        onClick={() => handleContactClick('email-financial')}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {config.EMAIL_FINANCIAL}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl">
                      <Clock className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Horário de Atendimento</h4>
                      <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-300">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                {/* Links Rápidos */}
                <div className="mt-12">
                  <h4 className="text-xl font-bold text-white mb-6">Acesso Rápido aos Especialistas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleServiceClick('agente-link')}
                      className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:bg-cyan-500/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Bot className="h-5 w-5 text-cyan-400" />
                        <span className="text-white font-medium">Agente IA</span>
                      </div>
                    </a>
                    
                    <a
                      href="https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleServiceClick('contabilidade-link')}
                      className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Calculator className="h-5 w-5 text-green-400" />
                        <span className="text-white font-medium">Contabilidade</span>
                      </div>
                    </a>
                    
                    <a
                      href="https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleServiceClick('consultoria-link')}
                      className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl hover:bg-purple-500/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Users className="h-5 w-5 text-purple-400" />
                        <span className="text-white font-medium">Consultoria</span>
                      </div>
                    </a>
                    
                    <a
                      href="https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleServiceClick('educacao-link')}
                      className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="h-5 w-5 text-orange-400" />
                        <span className="text-white font-medium">Educação</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <div className="bg-gray-900/50 rounded-3xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Envie sua Mensagem</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white">
                      <option value="">Selecione um serviço</option>
                      <option value="automacao">Automação IA</option>
                      <option value="contabilidade">Contabilidade</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="educacao">Educação</option>
                      <option value="agente-personalizado">Agente Personalizado</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Descreva sua necessidade..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={() => handleContactClick('form-submit')}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</h3>
                    <p className="text-sm text-cyan-300">EssencialBot • Automação Inteligente</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transformamos negócios através da inteligência artificial, oferecendo soluções completas 
                  em automação, contabilidade, consultoria e educação.
                </p>
                <div className="flex space-x-4">
                  <a
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-green-400" />
                  </a>
                  <a
                    href={`mailto:${config.EMAIL_CONTACT}`}
                    className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
                <ul className="space-y-2">
                  <li><a href="#automation" className="text-gray-400 hover:text-cyan-400 transition-colors">Automação IA</a></li>
                  <li><a href="#accounting" className="text-gray-400 hover:text-cyan-400 transition-colors">Contabilidade</a></li>
                  <li><a href="#consulting" className="text-gray-400 hover:text-cyan-400 transition-colors">Consultoria</a></li>
                  <li><a href="#education" className="text-gray-400 hover:text-cyan-400 transition-colors">Educação</a></li>
                  <li><a href="#agents" className="text-gray-400 hover:text-cyan-400 transition-colors">Agentes Personalizados</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">
                    <a
                      href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                    >
                      (11) 91175-7113
                    </a>
                  </li>
                  <li className="text-gray-400">
                    <a
                      href={`mailto:${config.EMAIL_CONTACT}`}
                      className="hover:text-blue-400 transition-colors"
                    >
                      {config.EMAIL_CONTACT}
                    </a>
                  </li>
                  <li className="text-gray-400">Segunda a Sexta: 8h às 18h</li>
                  <li className="text-gray-400">Sábado: 8h às 12h</li>
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