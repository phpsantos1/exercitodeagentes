import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  TrendingUp, 
  GraduationCap, 
  Settings,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Briefcase,
  BookOpen,
  Shield,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Building,
  CreditCard,
  FileText,
  BarChart3,
  Lightbulb,
  Palette,
  Search,
  Brain,
  Wrench,
  MapPin,
  Dumbbell
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      trackEvent('navigation_click', { section: sectionId });
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${config.WHATSAPP_NUMBER}`, '_blank');
    trackEvent('whatsapp_click', { source: 'button' });
  };

  const handleEmailClick = () => {
    window.open(`mailto:${config.EMAIL_CONTACT}`, '_blank');
    trackEvent('email_click', { source: 'button' });
  };

  const handleGPTLink = (gptName: string, url: string) => {
    window.open(url, '_blank');
    trackEvent('gpt_access', { gpt_name: gptName });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-pink-600">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
              </div>
              
              <div className="hidden lg:flex items-center space-x-8">
                <button onClick={() => scrollToSection('automation')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  AUTOMAÇÃO IA
                </button>
                <button onClick={() => scrollToSection('accounting')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  CONTABILIDADE
                </button>
                <button onClick={() => scrollToSection('consulting')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  CONSULTORIA
                </button>
                <button onClick={() => scrollToSection('education')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  ENSINO PRÓ
                </button>
                <button onClick={() => scrollToSection('agents')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  PERSONALIZAÇÃO DE IA
                </button>
                <button onClick={() => scrollToSection('mission')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  MISSÃO
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  CONTATO
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="p-2 bg-green-500 hover:bg-green-600 rounded-full transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={handleEmailClick}
                  className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
                >
                  <Mail className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              EXÉRCITO DE <span className="text-cyan-400">AGENTES</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed">
              Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - IA avançada, automação inteligente,
              <br />contabilidade smart e consultoria especializada
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 max-w-7xl mx-auto">
              {/* Automação IA */}
              <div 
                onClick={() => scrollToSection('automation')}
                className="bg-gradient-to-br from-blue-500 to-cyan-400 p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 border border-blue-400/30"
              >
                <div className="bg-white/20 p-4 rounded-xl mb-4 w-fit mx-auto">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automação IA</h3>
                <p className="text-blue-100 text-sm">EssencialBot personalizado para seu negócio</p>
              </div>

              {/* Contabilidade */}
              <div 
                onClick={() => scrollToSection('accounting')}
                className="bg-gradient-to-br from-green-500 to-emerald-400 p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 border border-green-400/30"
              >
                <div className="bg-white/20 p-4 rounded-xl mb-4 w-fit mx-auto">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Contabilidade</h3>
                <p className="text-green-100 text-sm">Escritório contábil completo e inteligente</p>
              </div>

              {/* Consultoria */}
              <div 
                onClick={() => scrollToSection('consulting')}
                className="bg-gradient-to-br from-purple-500 to-violet-400 p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-400/30"
              >
                <div className="bg-white/20 p-4 rounded-xl mb-4 w-fit mx-auto">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Consultoria</h3>
                <p className="text-purple-100 text-sm">Gestão empresarial e recuperação judicial</p>
              </div>

              {/* Educação */}
              <div 
                onClick={() => scrollToSection('education')}
                className="bg-gradient-to-br from-orange-500 to-red-400 p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 border border-orange-400/30"
              >
                <div className="bg-white/20 p-4 rounded-xl mb-4 w-fit mx-auto">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Educação</h3>
                <p className="text-orange-100 text-sm">Treinamentos em IA e contabilidade</p>
              </div>

              {/* Personalização IA */}
              <div 
                onClick={() => scrollToSection('agents')}
                className="bg-gradient-to-br from-pink-500 to-rose-400 p-8 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 border border-pink-400/30"
              >
                <div className="bg-white/20 p-4 rounded-xl mb-4 w-fit mx-auto">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Personalização IA</h3>
                <p className="text-pink-100 text-sm">Agentes customizados para suas necessidades</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/30"
              >
                COMEÇAR AGORA
              </button>
              
              <button
                onClick={() => handleGPTLink('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                className="px-12 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                FALAR COM ESSENCIALBOT
              </button>
            </div>
          </div>
        </section>

        {/* Automação IA Section */}
        <section id="automation" className="py-20 px-6 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">AUTOMAÇÃO IA</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu negócio com o EssencialBot - nossa IA personalizada que automatiza processos, 
                otimiza operações e impulsiona resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mr-4">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nível 2 - Integrado</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />EssencialBot personalizado</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />Integração Google Sheets</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />Automação Make/Zapier</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />Relatórios automáticos</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />Suporte prioritário</li>
                  </ul>
                  <div className="text-3xl font-bold text-cyan-400 mb-4">R$ 397,00/mês</div>
                  <button
                    onClick={() => handleGPTLink('Triagem IA Planos 2 e 3', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Consultar Agente</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nível 3 - Avançado</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 mb-6">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-400 mr-3" />Tudo do Nível 2 +</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-400 mr-3" />Machine Learning avançado</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-400 mr-3" />Análise preditiva</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-400 mr-3" />Multi-plataformas</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-purple-400 mr-3" />Consultoria incluída</li>
                  </ul>
                  <div className="text-3xl font-bold text-purple-400 mb-4">R$ 497,00/mês</div>
                  <button
                    onClick={() => handleGPTLink('Triagem IA Planos 2 e 3', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Consultar Agente</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-2xl border border-cyan-400/30">
                  <Target className="h-12 w-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Resultados Comprovados</h3>
                  <p className="text-gray-300">
                    Nossos clientes relatam até 80% de redução no tempo de processos manuais e 
                    aumento significativo na produtividade da equipe.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-2xl border border-purple-400/30">
                  <Shield className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Segurança Total</h3>
                  <p className="text-gray-300">
                    Todos os dados são protegidos com criptografia de ponta e conformidade total 
                    com a LGPD e melhores práticas de segurança.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-8 rounded-2xl border border-green-400/30">
                  <Clock className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Implementação Rápida</h3>
                  <p className="text-gray-300">
                    Seu EssencialBot fica pronto em até 7 dias, com treinamento completo da equipe 
                    e suporte contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contabilidade Section */}
        <section id="accounting" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">CONTABILIDADE INTELIGENTE</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório de contabilidade completo com tecnologia de ponta e automação inteligente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 text-center">
                <Building className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Abertura de Empresas</h3>
                <p className="text-gray-300 mb-6">Processo completo de abertura com acompanhamento personalizado</p>
                <button
                  onClick={() => handleGPTLink('Triagem Contábil', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                  className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contabilidade Inteligente</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 text-center">
                <FileText className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Contabilidade Mensal</h3>
                <p className="text-gray-300 mb-6">Escrituração completa com relatórios automatizados</p>
                <button
                  onClick={() => handleGPTLink('Triagem Contábil', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contabilidade Inteligente</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 text-center">
                <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Planejamento Tributário</h3>
                <p className="text-gray-300 mb-6">Otimização fiscal inteligente para reduzir custos</p>
                <button
                  onClick={() => handleGPTLink('Triagem Contábil', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Contabilidade Inteligente</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Diferenciais da Nossa Contabilidade</h3>
                <ul className="space-y-3 text-gray-300 text-left">
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Automação completa com EssencialBot</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Relatórios em tempo real</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Atendimento 100% digital</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Compliance total com legislação</li>
                  <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-3" />Suporte especializado</li>
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {config.WHATSAPP_NUMBER}</span>
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email: {config.EMAIL_CONTACT}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultoria Section */}
        <section id="consulting" className="py-20 px-6 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">CONSULTORIA EMPRESARIAL</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consultoria completa desde gestão estratégica até recuperação judicial e busca de crédito
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30">
                <Briefcase className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Gestão Empresarial</h3>
                <p className="text-gray-300 mb-6">Planejamento estratégico e otimização de processos</p>
                <button
                  onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Expert</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30">
                <BarChart3 className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Fluxo de Caixa</h3>
                <p className="text-gray-300 mb-6">Controle financeiro e projeções inteligentes</p>
                <button
                  onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                  className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Expert</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-red-400/30">
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Recuperação Judicial</h3>
                <p className="text-gray-300 mb-6">Reestruturação empresarial e negociação de dívidas</p>
                <button
                  onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                  className="w-full py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg text-white font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Expert</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
                <CreditCard className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Busca de Crédito</h3>
                <p className="text-gray-300 mb-6">Conexão com factorings e linhas de crédito</p>
                <button
                  onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                  className="w-full py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Expert</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-400/30">
                <Building className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Fusões e Aquisições</h3>
                <p className="text-gray-300 mb-6">Assessoria completa em M&A e due diligence</p>
                <button
                  onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Expert</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30">
                <Bot className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Consultoria com IA</h3>
                <p className="text-gray-300 mb-6">Transformação digital e automação empresarial</p>
                <button
                  onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consultar Expert</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Contato Direto</h3>
                <p className="text-gray-300 mb-6">
                  Entre em contato conosco para uma consulta personalizada sobre suas necessidades empresariais
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {config.WHATSAPP_NUMBER}</span>
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email: {config.EMAIL_CONTACT}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ensino Pró Section */}
        <section id="education" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">ENSINO PRÓ</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em contabilidade, controladoria, gestão financeira e inteligência artificial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30 text-center">
                <Bot className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">IA Empresarial</h3>
                <p className="text-gray-300 mb-6">Fundamentos de IA, Chatbots e Machine Learning aplicados aos negócios</p>
                <button
                  onClick={() => handleGPTLink('Triagem Educação Pró', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Educação Pró</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 text-center">
                <Calculator className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Contabilidade Digital</h3>
                <p className="text-gray-300 mb-6">Contabilidade 4.0, SPED, Análise de Balanços e tecnologias contábeis</p>
                <button
                  onClick={() => handleGPTLink('Triagem Educação Pró', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                  className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Educação Pró</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 text-center">
                <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Controladoria</h3>
                <p className="text-gray-300 mb-6">Controles Internos, Auditoria, Compliance e Gestão de Riscos</p>
                <button
                  onClick={() => handleGPTLink('Triagem Educação Pró', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Educação Pró</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-400/30 text-center">
                <BarChart3 className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Gestão Financeira</h3>
                <p className="text-gray-300 mb-6">Fluxo de Caixa, Análise Financeira, Orçamento e Planejamento</p>
                <button
                  onClick={() => handleGPTLink('Triagem Educação Pró', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Educação Pró</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-orange-400/30 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Diferenciais dos Nossos Treinamentos</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-orange-400 mr-3" />Certificação reconhecida</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-orange-400 mr-3" />Projetos práticos</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-orange-400 mr-3" />Mentoria personalizada</li>
                  </ul>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-orange-400 mr-3" />Conteúdo atualizado</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-orange-400 mr-3" />Networking profissional</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-orange-400 mr-3" />Suporte contínuo</li>
                  </ul>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {config.WHATSAPP_NUMBER}</span>
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email: {config.EMAIL_CONTACT}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personalização de IA Section */}
        <section id="agents" className="py-20 px-6 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">PERSONALIZAÇÃO DE IA</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Agentes IA customizados para suas necessidades específicas
              </p>
              <p className="text-lg text-pink-300 font-semibold italic">
                "Você não sabe que precisa desses agentes até conhecê-los!"
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-pink-400/30 max-w-md mx-auto mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Investimento:</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Setup Inicial</span>
                  <span className="text-2xl font-bold text-pink-400">R$ 120,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Manutenção</span>
                  <span className="text-2xl font-bold text-pink-400">R$ 50,00</span>
                </div>
              </div>
            </div>

            {/* Agents Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-400/30">
                <Palette className="h-10 w-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Agente de Renovação Visual</h3>
                <p className="text-gray-300 text-sm">Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30">
                <Search className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Pesquisador de Mercado</h3>
                <p className="text-gray-300 text-sm">Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/30">
                <Brain className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Compilador de Insights</h3>
                <p className="text-gray-300 text-sm">Traduz complexidade em decisão lúcida com precisão lógica.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30">
                <CreditCard className="h-10 w-10 text-green-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Agente Buscador de Cupons</h3>
                <p className="text-gray-300 text-sm">Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30">
                <Target className="h-10 w-10 text-orange-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Avaliador de QIs</h3>
                <p className="text-gray-300 text-sm">Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/30">
                <Wrench className="h-10 w-10 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Encanador</h3>
                <p className="text-gray-300 text-sm">Especialista sênior em sistemas hidráulicos residenciais e comerciais com domínio técnico absoluto.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-400/30">
                <MapPin className="h-10 w-10 text-yellow-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Passeios em SP</h3>
                <p className="text-gray-300 text-sm">Estrategista urbano supremo, capaz de transformar desejos subjetivos em vivências memoráveis em São Paulo.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-red-400/30">
                <Dumbbell className="h-10 w-10 text-red-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Treinadores Esportivos</h3>
                <p className="text-gray-300 text-sm">Especialistas em diversas modalidades esportivas para treinamento personalizado.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-indigo-400/30">
                <Bot className="h-10 w-10 text-indigo-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">E Muito Mais...</h3>
                <p className="text-gray-300 text-sm">Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-pink-400/30 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Solicite Seu Agente Personalizado</h3>
                <p className="text-gray-300 mb-6">
                  Entre em contato conosco para criar um agente IA específico para suas necessidades
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex-1 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp: {config.WHATSAPP_NUMBER}</span>
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email: {config.EMAIL_CONTACT}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão Section */}
        <section id="mission" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">NOSSA MISSÃO</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Democratizar o acesso à inteligência artificial e automação empresarial, 
                transformando negócios através da tecnologia e conhecimento especializado.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30 text-center">
                <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">VISÃO</h3>
                <p className="text-gray-300">
                  Ser referência nacional em automação inteligente e consultoria empresarial, 
                  liderando a transformação digital dos negócios brasileiros.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30 text-center">
                <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">VALORES</h3>
                <p className="text-gray-300">
                  Inovação, transparência, excelência no atendimento e compromisso com 
                  o sucesso dos nossos clientes em todas as soluções oferecidas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30 text-center">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">PROPÓSITO</h3>
                <p className="text-gray-300">
                  Empoderar empresários e profissionais com ferramentas de IA acessíveis, 
                  criando um futuro mais eficiente e próspero para todos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">SUPORTE</h2>
              <h3 className="text-3xl font-bold text-white mb-8">FAQ (Perguntas Frequentes)</h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/30">
                <h4 className="text-xl font-bold text-white mb-3">1. Quais serviços a Exército de Agentes oferece?</h4>
                <p className="text-gray-300">
                  Oferecemos contabilidade digital, consultoria financeira, implantação de inteligência artificial, 
                  automações empresariais, ensino e treinamentos corporativos.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-green-400/30">
                <h4 className="text-xl font-bold text-white mb-3">2. Como funcionam os atendimentos?</h4>
                <p className="text-gray-300">
                  Todo o suporte e consultoria são realizados 100% online, por canais como e-mail, chat, 
                  videoconferência e plataformas especializadas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-400/30">
                <h4 className="text-xl font-bold text-white mb-3">3. Quais tecnologias são utilizadas?</h4>
                <p className="text-gray-300">
                  Utilizamos ferramentas de automação, CRMs, plataformas de IA (como GPT) e softwares contábeis integrados.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-orange-400/30">
                <h4 className="text-xl font-bold text-white mb-3">4. É seguro compartilhar meus dados?</h4>
                <p className="text-gray-300">
                  Sim. Todos os dados são tratados conforme a LGPD, com protocolos de segurança e criptografia em nossos sistemas.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-pink-400/30">
                <h4 className="text-xl font-bold text-white mb-3">5. Posso cancelar um serviço?</h4>
                <p className="text-gray-300">
                  Sim, os contratos são regidos por cláusulas específicas. Consulte o Termo de Uso ou contate o suporte para orientações.
                </p>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Suporte Técnico</h3>
                <p className="text-gray-300 mb-6">
                  Caso enfrente problemas técnicos, entre em contato por:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span>E-mail: </span>
                    <button
                      onClick={handleEmailClick}
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      {config.EMAIL_CONTACT}
                    </button>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                    <span>Chat: disponível no canto inferior direito do site (horário comercial)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <Clock className="h-5 w-5 text-orange-400" />
                    <span>Tempo de resposta: até 24h úteis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">CONTATO</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="h-8 w-8 text-green-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Atendimento direto e personalizado</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{config.WHATSAPP_NUMBER}</span>
                  </button>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
                  <div className="flex items-center mb-4">
                    <Mail className="h-8 w-8 text-blue-400 mr-4" />
                    <h3 className="text-2xl font-bold text-white">E-mail</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Suporte e atendimento comercial</p>
                  <button
                    onClick={handleEmailClick}
                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Mail className="h-5 w-5" />
                    <span>{config.EMAIL_CONTACT}</span>
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Acesso Direto aos GPTs</h3>
                <div className="space-y-4">
                  <button
                    onClick={() => handleGPTLink('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Bot className="h-4 w-4" />
                    <span>EssencialBot Concierge</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleGPTLink('Triagem Contábil', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Calculator className="h-4 w-4" />
                    <span>Contabilidade Inteligente</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleGPTLink('Triagem Consultoria Empresarial', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>Consultoria Empresarial</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleGPTLink('Triagem Educação Pró', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Educação Pró</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-20 px-6 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">LEGAL</h2>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Política de Privacidade */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Política de Privacidade</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    A Exército de Agentes Contabilidade e Consultoria Ltda respeita a sua privacidade. 
                    Esta política descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais.
                  </p>
                  <div>
                    <h4 className="font-semibold text-white mb-2">1. Dados Coletados:</h4>
                    <p>Nome, e-mail, telefone, CPF/CNPJ, dados bancários, dados de acesso e interações no site.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">2. Finalidade:</h4>
                    <p>Prestação de serviços, atendimento personalizado, melhoria contínua e obrigações legais.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">3. Direitos do Titular:</h4>
                    <p>Acesso, correção, portabilidade, exclusão, revogação de consentimento.</p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleEmailClick}
                      className="text-blue-400 hover:text-blue-300 underline text-sm"
                    >
                      Solicitações: {config.EMAIL_CONTACT}
                    </button>
                  </div>
                </div>
              </div>

              {/* Termos de Uso */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Termos de Uso</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    Ao acessar e utilizar os serviços da Exército de Agentes, você concorda com os termos abaixo:
                  </p>
                  <div>
                    <h4 className="font-semibold text-white mb-2">1. Uso dos Serviços:</h4>
                    <p>O usuário se compromete a fornecer informações verdadeiras e utilizar os serviços de forma ética e legal.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">2. Propriedade Intelectual:</h4>
                    <p>Todo o conteúdo do site é protegido por direitos autorais. É proibida a reprodução não autorizada.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">3. Responsabilidades:</h4>
                    <p>Não garantimos resultados específicos. Nossos serviços são consultivos conforme escopo contratado.</p>
                  </div>
                </div>
              </div>

              {/* LGPD */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-green-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">LGPD</h3>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    Esta política demonstra o compromisso da Exército de Agentes com a Lei Geral de Proteção de Dados (Lei 13.709/18).
                  </p>
                  <div>
                    <h4 className="font-semibold text-white mb-2">1. Controlador:</h4>
                    <p>Exército de Agentes Contabilidade e Consultoria Ltda</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">2. Encarregado de Dados:</h4>
                    <button
                      onClick={handleEmailClick}
                      className="text-green-400 hover:text-green-300 underline"
                    >
                      {config.EMAIL_CONTACT}
                    </button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">3. Fundamento Legal:</h4>
                    <p>Tratamos dados com base no consentimento, execução de contrato e obrigação legal.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">4. Reclamações:</h4>
                    <p>O titular pode recorrer à ANPD ou ao nosso canal interno.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Transformando negócios com IA avançada, automação inteligente e consultoria especializada.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">SERVIÇOS</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-white transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-white transition-colors">Contabilidade</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-white transition-colors">Consultoria</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors">Ensino Pró</button></li>
                  <li><button onClick={() => scrollToSection('agents')} className="hover:text-white transition-colors">Personalização IA</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">SUPORTE</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                  <li><button onClick={() => scrollToSection('legal')} className="hover:text-white transition-colors">Política de Privacidade</button></li>
                  <li><button onClick={() => scrollToSection('legal')} className="hover:text-white transition-colors">Termos de Uso</button></li>
                  <li><button onClick={() => scrollToSection('legal')} className="hover:text-white transition-colors">LGPD</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">CONTATO</h4>
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{config.WHATSAPP_NUMBER}</span>
                  </button>
                  <button
                    onClick={handleEmailClick}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{config.EMAIL_CONTACT}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
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