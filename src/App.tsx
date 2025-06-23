import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Calculator, 
  TrendingUp, 
  GraduationCap, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  Target,
  Award,
  Lightbulb,
  BarChart3,
  Shield,
  Smartphone,
  MessageCircle,
  Settings,
  Sparkles
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleLinkClick = (linkName: string, url: string) => {
    trackEvent('external_link_click', { link_name: linkName, url });
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5511911757113?text=${encodedMessage}`;
    trackEvent('whatsapp_click', { message });
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = (email: string, subject?: string) => {
    const mailtoUrl = subject 
      ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
      : `mailto:${email}`;
    trackEvent('email_click', { email, subject });
    window.open(mailtoUrl, '_blank');
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-blue-400/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</h1>
                  <p className="text-sm text-blue-300">Powered by EssencialBot</p>
                </div>
              </div>
              
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#automation" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">AUTOMAÇÃO IA</a>
                <a href="#accounting" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">CONTABILIDADE</a>
                <a href="#consulting" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">CONSULTORIA</a>
                <a href="#education" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">ENSINO PRÓ</a>
                <a href="#personalization" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">PERSONALIZAÇÃO DE IA</a>
                <a href="#mission" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">MISSÃO</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors font-medium">CONTATO</a>
                <button 
                  onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  FALAR COM ESPECIALISTA
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                EXÉRCITO DE <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">AGENTES</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transforme seu negócio com <strong>EssencialBot</strong> - IA avançada, automação inteligente, 
                contabilidade smart e consultoria especializada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50"
                >
                  COMEÇAR AGORA
                </button>
                <button 
                  onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-300 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  CONHECER SOLUÇÕES
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
              <div 
                onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automação IA</h3>
                <p className="text-gray-300 text-sm">EssencialBot personalizado para seu negócio</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Contabilidade Inteligente', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-green-400/20 hover:border-green-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Contabilidade</h3>
                <p className="text-gray-300 text-sm">Escritório contábil completo e inteligente</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Consultoria Expert', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Consultoria</h3>
                <p className="text-gray-300 text-sm">Gestão empresarial e recuperação judicial</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Educação Pro', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-400/20 hover:border-orange-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-orange-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Educação</h3>
                <p className="text-gray-300 text-sm">Treinamentos em IA e contabilidade</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Personalização de IA', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IA Personalizada</h3>
                <p className="text-gray-300 text-sm">Agentes customizados para sua necessidade</p>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AUTOMAÇÃO <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">INTELIGENTE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                EssencialBot revoluciona seu negócio com IA avançada, automação completa e integração perfeita
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Bot className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">EssencialBot Personalizado</h3>
                    <p className="text-gray-300">IA treinada especificamente para seu negócio, entendendo seus processos e necessidades únicas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-green-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Integração Completa</h3>
                    <p className="text-gray-300">Conecta com Google Sheets, CRM, WhatsApp e todas suas ferramentas existentes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Machine Learning Avançado</h3>
                    <p className="text-gray-300">Aprende continuamente com seus dados para otimizar processos e prever tendências.</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  ESCOLHER PLANO
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Planos de Automação</h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-700/50 rounded-xl border border-blue-400/20">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-bold text-white">Nível 2 - Integrado</h4>
                      <span className="text-2xl font-bold text-blue-300">R$ 297/mês</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>EssencialBot personalizado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Integração Google Sheets</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Automação Make/Zapier</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Relatórios automáticos</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-xl border border-cyan-400/30">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-bold text-white">Nível 3 - Avançado</h4>
                      <span className="text-2xl font-bold text-cyan-300">R$ 497/mês</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Tudo do Nível 2 +</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Machine Learning avançado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Análise preditiva</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Multi-plataformas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Consultoria incluída</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CONTABILIDADE <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">INTELIGENTE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação total
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-400/20">
                    <Calculator className="h-8 w-8 text-green-300 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Abertura de Empresas</h3>
                    <p className="text-gray-300">Processo completo e automatizado para abertura de CNPJ com agilidade.</p>
                  </div>

                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-400/20">
                    <BarChart3 className="h-8 w-8 text-green-300 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Contabilidade Mensal</h3>
                    <p className="text-gray-300">Escrituração, balancetes e demonstrações financeiras automatizadas.</p>
                  </div>

                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-400/20">
                    <Shield className="h-8 w-8 text-green-300 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Obrigações Fiscais</h3>
                    <p className="text-gray-300">SPED, ECF, DEFIS e todas as obrigações em dia automaticamente.</p>
                  </div>

                  <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-400/20">
                    <Users className="h-8 w-8 text-green-300 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Departamento Pessoal</h3>
                    <p className="text-gray-300">Folha de pagamento, eSocial e gestão completa de RH.</p>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-2xl border border-emerald-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Diferencial Tecnológico</h3>
                  <p className="text-gray-300 mb-6">
                    Somos o único escritório que combina contabilidade tradicional com IA avançada, 
                    oferecendo relatórios inteligentes, análises preditivas e automação completa.
                  </p>
                  <button 
                    onClick={() => handleLinkClick('Contabilidade Inteligente', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full text-white font-semibold hover:from-green-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
                  >
                    CONSULTAR CONTABILIDADE INTELIGENTE
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Nossos Serviços</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Abertura de empresas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Contabilidade mensal</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Planejamento tributário</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Departamento pessoal</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Relatórios gerenciais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Compliance e auditoria</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Contato Contábil</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleWhatsAppClick('Olá! Gostaria de saber mais sobre os serviços contábeis do Exército de Agentes.')}
                      className="flex items-center space-x-2 text-green-300 hover:text-green-200 transition-colors w-full"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(11) 91175-7113</span>
                    </button>
                    <button 
                      onClick={() => handleEmailClick('sac@exercitodeagentes.com.br', 'Consulta sobre Serviços Contábeis')}
                      className="flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors w-full"
                    >
                      <Mail className="h-4 w-4" />
                      <span>sac@exercitodeagentes.com.br</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CONSULTORIA <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">EMPRESARIAL</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Expertise completa em gestão, recuperação judicial e transformação digital
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <TrendingUp className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Gestão Empresarial</h3>
                  <p className="text-gray-300">Planejamento estratégico, otimização de processos e crescimento sustentável.</p>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <Shield className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Recuperação Judicial</h3>
                  <p className="text-gray-300">Especialistas em reestruturação empresarial e negociação com credores.</p>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <BarChart3 className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Fluxo de Caixa</h3>
                  <p className="text-gray-300">Controle financeiro rigoroso e projeções precisas para tomada de decisão.</p>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <Target className="h-8 w-8 text-purple-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Busca de Crédito</h3>
                  <p className="text-gray-300">Conexões com factorings e instituições financeiras para capital de giro.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-400/20 rounded-2xl border border-pink-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Nossa Expertise</h3>
                  <p className="text-gray-300 mb-6">
                    Com décadas de experiência, nossa equipe já recuperou centenas de empresas, 
                    desde pequenos negócios até grandes corporações em crise.
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>+500 empresas recuperadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>R$ 2B+ em dívidas renegociadas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>95% de taxa de sucesso</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleLinkClick('Consultoria Expert', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full text-white font-semibold hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                  >
                    CONSULTAR EXPERT
                  </button>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Áreas de Atuação</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Planejamento estratégico</li>
                    <li>• Reestruturação empresarial</li>
                    <li>• Recuperação judicial e extrajudicial</li>
                    <li>• Fusões e aquisições</li>
                    <li>• Consultoria financeira</li>
                    <li>• Transformação digital</li>
                    <li>• Gestão de crise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                EDUCAÇÃO <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">PRO</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em IA, contabilidade e gestão empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-400/20">
                  <Bot className="h-8 w-8 text-orange-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">IA Empresarial</h3>
                  <p className="text-gray-300 mb-4">Fundamentos de IA, implementação de chatbots e automação inteligente.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Fundamentos de Inteligência Artificial</li>
                    <li>• Criação e treinamento de chatbots</li>
                    <li>• Machine Learning para negócios</li>
                    <li>• Automação de processos com IA</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-400/20">
                  <Calculator className="h-8 w-8 text-orange-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Contabilidade Digital</h3>
                  <p className="text-gray-300 mb-4">Contabilidade 4.0, SPED e análise avançada de demonstrações.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Contabilidade 4.0 e transformação digital</li>
                    <li>• SPED Contábil e Fiscal avançado</li>
                    <li>• Análise de balanços e DRE</li>
                    <li>• Auditoria e compliance</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-400/20">
                  <Shield className="h-8 w-8 text-orange-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Controladoria</h3>
                  <p className="text-gray-300 mb-4">Controles internos, auditoria e gestão de riscos empresariais.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Controles internos e governança</li>
                    <li>• Auditoria interna e externa</li>
                    <li>• Gestão de riscos</li>
                    <li>• Compliance e ética empresarial</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-400/20">
                  <BarChart3 className="h-8 w-8 text-orange-300 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Gestão Financeira</h3>
                  <p className="text-gray-300 mb-4">Fluxo de caixa, análise financeira e planejamento orçamentário.</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Fluxo de caixa e projeções</li>
                    <li>• Análise financeira avançada</li>
                    <li>• Orçamento e planejamento</li>
                    <li>• Valuation e investimentos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="p-8 bg-gradient-to-r from-orange-500/20 to-red-400/20 rounded-2xl border border-red-400/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Certificação Profissional</h3>
                <p className="text-gray-300 mb-6">
                  Todos os cursos incluem certificação reconhecida, projetos práticos e mentoria personalizada. 
                  Prepare-se para o futuro do mercado de trabalho.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleLinkClick('Educação Pro', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-400 rounded-full text-white font-semibold hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105"
                  >
                    CONSULTAR EDUCAÇÃO PRO
                  </button>
                  <button 
                    onClick={() => handleWhatsAppClick('Olá! Gostaria de saber mais sobre os cursos e treinamentos do Exército de Agentes.')}
                    className="px-8 py-4 border-2 border-orange-400 text-orange-300 rounded-full font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300"
                  >
                    FALAR COM CONSULTOR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalization Section */}
        <section id="personalization" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PERSONALIZAÇÃO DE <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">IA</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Agentes de IA customizados para suas necessidades específicas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Settings className="h-6 w-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Agentes Customizados</h3>
                    <p className="text-gray-300">Desenvolvemos agentes de IA específicos para seu setor e necessidades únicas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Sparkles className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Treinamento Especializado</h3>
                    <p className="text-gray-300">Cada agente é treinado com dados específicos do seu negócio e setor.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Target className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Integração Completa</h3>
                    <p className="text-gray-300">Conectamos seu agente personalizado com todos os seus sistemas existentes.</p>
                  </div>
                </div>

                <button 
                  onClick={() => handleLinkClick('Personalização de IA', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  PERSONALIZE SEU AGENTE
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Casos de Uso</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">Atendimento ao Cliente</h4>
                    <p className="text-gray-300 text-sm">Agente especializado em seu produto/serviço para atendimento 24/7.</p>
                  </div>

                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">Vendas e Qualificação</h4>
                    <p className="text-gray-300 text-sm">IA que qualifica leads e conduz o processo de vendas automaticamente.</p>
                  </div>

                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">Análise de Dados</h4>
                    <p className="text-gray-300 text-sm">Agente que analisa seus dados e gera insights estratégicos.</p>
                  </div>

                  <div className="p-4 bg-gray-700/50 rounded-xl">
                    <h4 className="text-lg font-bold text-white mb-2">Automação de Processos</h4>
                    <p className="text-gray-300 text-sm">IA que automatiza workflows específicos do seu negócio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                NOSSA <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">MISSÃO</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Democratizar o acesso à inteligência artificial e automação, transformando negócios de todos os tamanhos 
                através da tecnologia mais avançada disponível no mercado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20">
                  <Target className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">VISÃO</h3>
                  <p className="text-gray-300">Ser a referência em automação inteligente para empresas no Brasil.</p>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-green-400/20">
                  <Award className="h-12 w-12 text-green-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">VALORES</h3>
                  <p className="text-gray-300">Inovação, transparência, excelência e compromisso com resultados.</p>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <Users className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">PROPÓSITO</h3>
                  <p className="text-gray-300">Empoderar empresários com tecnologia de ponta e conhecimento especializado.</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Por que escolher o Exército de Agentes?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Tecnologia de ponta em IA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Equipe especializada e certificada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Suporte 24/7 personalizado</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">ROI comprovado em 30 dias</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Integração com sistemas existentes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Escalabilidade garantida</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ENTRE EM <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">CONTATO</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pronto para transformar seu negócio? Nossa equipe está aqui para ajudar você a dar o próximo passo.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-blue-400/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => handleWhatsAppClick('Olá! Gostaria de saber mais sobre as soluções do Exército de Agentes.')}
                      className="flex items-center space-x-3 text-green-300 hover:text-green-200 transition-colors w-full p-3 rounded-lg hover:bg-green-500/10"
                    >
                      <Phone className="h-5 w-5" />
                      <div className="text-left">
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-sm">(11) 91175-7113</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleEmailClick('sac@exercitodeagentes.com.br', 'Consulta sobre Soluções')}
                      className="flex items-center space-x-3 text-blue-300 hover:text-blue-200 transition-colors w-full p-3 rounded-lg hover:bg-blue-500/10"
                    >
                      <Mail className="h-5 w-5" />
                      <div className="text-left">
                        <p className="font-semibold">SAC</p>
                        <p className="text-sm">sac@exercitodeagentes.com.br</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleEmailClick('financeiro@exercitodeagentes.com.br', 'Consulta Financeira')}
                      className="flex items-center space-x-3 text-cyan-300 hover:text-cyan-200 transition-colors w-full p-3 rounded-lg hover:bg-cyan-500/10"
                    >
                      <Mail className="h-5 w-5" />
                      <div className="text-left">
                        <p className="font-semibold">Financeiro</p>
                        <p className="text-sm">financeiro@exercitodeagentes.com.br</p>
                      </div>
                    </button>

                    <div className="flex items-center space-x-3 text-gray-300 p-3">
                      <Clock className="h-5 w-5" />
                      <div>
                        <p className="font-semibold">Horário de Atendimento</p>
                        <p className="text-sm">Segunda a Sexta: 8h às 18h</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleWhatsAppClick('Olá! Vim através das redes sociais e gostaria de saber mais sobre o Exército de Agentes.')}
                      className="p-3 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-colors"
                    >
                      <MessageCircle className="h-6 w-6 text-green-300" />
                    </button>
                    <button 
                      onClick={() => handleLinkClick('LinkedIn', 'https://linkedin.com/company/exercitodeagentes')}
                      className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors"
                    >
                      <Users className="h-6 w-6 text-blue-300" />
                    </button>
                    <button 
                      onClick={() => handleLinkClick('Instagram', 'https://instagram.com/exercitodeagentes')}
                      className="p-3 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors"
                    >
                      <Smartphone className="h-6 w-6 text-purple-300" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-4">Agende uma Consulta Gratuita</h3>
                  <p className="text-gray-300 mb-6">
                    Converse com nossos especialistas e descubra como podemos transformar seu negócio com IA e automação.
                  </p>
                  <div className="space-y-4">
                    <button 
                      onClick={() => handleWhatsAppClick('Olá! Gostaria de agendar uma consulta gratuita para conhecer as soluções do Exército de Agentes.')}
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full text-white font-semibold hover:from-green-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105"
                    >
                      AGENDAR VIA WHATSAPP
                    </button>
                    <button 
                      onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                      className="w-full px-6 py-3 border-2 border-blue-400 text-blue-300 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                    >
                      FALAR COM ESSENCIALBOT
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-400/20">
                  <h3 className="text-xl font-bold text-white mb-4">Acesso Rápido aos Agentes</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                      className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors text-center"
                    >
                      <Bot className="h-6 w-6 text-blue-300 mx-auto mb-1" />
                      <span className="text-xs text-blue-300">Agente IA</span>
                    </button>
                    <button 
                      onClick={() => handleLinkClick('Contabilidade', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                      className="p-3 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-colors text-center"
                    >
                      <Calculator className="h-6 w-6 text-green-300 mx-auto mb-1" />
                      <span className="text-xs text-green-300">Contábil</span>
                    </button>
                    <button 
                      onClick={() => handleLinkClick('Consultoria', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                      className="p-3 bg-purple-500/20 rounded-lg hover:bg-purple-500/30 transition-colors text-center"
                    >
                      <TrendingUp className="h-6 w-6 text-purple-300 mx-auto mb-1" />
                      <span className="text-xs text-purple-300">Consultoria</span>
                    </button>
                    <button 
                      onClick={() => handleLinkClick('Educação', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                      className="p-3 bg-orange-500/20 rounded-lg hover:bg-orange-500/30 transition-colors text-center"
                    >
                      <GraduationCap className="h-6 w-6 text-orange-300 mx-auto mb-1" />
                      <span className="text-xs text-orange-300">Educação</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">EXÉRCITO DE AGENTES</h3>
                    <p className="text-sm text-blue-300">Powered by EssencialBot</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  Transformando negócios através da inteligência artificial, automação inteligente e expertise especializada.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleWhatsAppClick('Olá! Gostaria de saber mais sobre o Exército de Agentes.')}
                    className="p-2 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-300" />
                  </button>
                  <button 
                    onClick={() => handleLinkClick('LinkedIn', 'https://linkedin.com/company/exercitodeagentes')}
                    className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <Users className="h-5 w-5 text-blue-300" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">SOLUÇÕES</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      Automação IA
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleLinkClick('Contabilidade', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                      className="hover:text-green-300 transition-colors"
                    >
                      Contabilidade
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleLinkClick('Consultoria', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                      className="hover:text-purple-300 transition-colors"
                    >
                      Consultoria
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleLinkClick('Educação', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                      className="hover:text-orange-300 transition-colors"
                    >
                      Educação Pro
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleLinkClick('Personalização', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      IA Personalizada
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">CONTATO</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleWhatsAppClick('Olá! Gostaria de entrar em contato com o Exército de Agentes.')}
                      className="hover:text-green-300 transition-colors"
                    >
                      (11) 91175-7113
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleEmailClick('sac@exercitodeagentes.com.br')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      SAC
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleEmailClick('financeiro@exercitodeagentes.com.br')}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      Financeiro
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      EssencialBot Concierge
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Exército de Agentes. Todos os direitos reservados. | Powered by EssencialBot
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