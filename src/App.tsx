import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Calculator, 
  TrendingUp, 
  GraduationCap, 
  Settings,
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
  Star,
  Target,
  Lightbulb,
  BarChart3,
  BookOpen,
  Briefcase,
  FileText,
  Clock,
  Award,
  Rocket,
  Brain,
  Cpu,
  Database,
  Globe,
  Lock,
  Smartphone,
  Headphones,
  ChevronRight,
  Building
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

  const handleExternalLink = (url: string, eventName: string) => {
    trackEvent(eventName, { url });
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = (message: string, context: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodedMessage}`;
    trackEvent('whatsapp_click', { context });
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = (email: string, subject: string, context: string) => {
    const encodedSubject = encodeURIComponent(subject);
    const mailtoUrl = `mailto:${email}?subject=${encodedSubject}`;
    trackEvent('email_click', { context, email });
    window.open(mailtoUrl, '_blank');
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center h-20">
              <nav className="flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  AUTOMAÇÃO IA
                </button>
                <button 
                  onClick={() => scrollToSection('accounting')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  CONTABILIDADE
                </button>
                <button 
                  onClick={() => scrollToSection('consulting')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  CONSULTORIA
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  ENSINO PRÓ
                </button>
                <button 
                  onClick={() => scrollToSection('agents')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  PERSONALIZAÇÃO DE IA
                </button>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  MISSÃO
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
                >
                  CONTATO
                </button>
                <button 
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de falar com um especialista sobre os serviços do Exército de Agentes.', 'header_cta')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  FALAR COM ESPECIALISTA
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleExternalLink('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', 'hero_cta_automation')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                >
                  COMEÇAR AUTOMAÇÃO IA
                </button>
                <button 
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de agendar uma consulta gratuita para conhecer os serviços do Exército de Agentes.', 'hero_cta_consultation')}
                  className="border-2 border-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  CONSULTA GRATUITA
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              <div 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', 'card_click_automation')}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">Automação IA</h3>
                <p className="text-gray-400 text-sm">EssencialBot personalizado para seu negócio</p>
              </div>

              <div 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil', 'card_click_accounting')}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-300">Contabilidade</h3>
                <p className="text-gray-400 text-sm">Escritório contábil completo e inteligente</p>
              </div>

              <div 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial', 'card_click_consulting')}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-300">Consultoria</h3>
                <p className="text-gray-400 text-sm">Gestão empresarial e recuperação judicial</p>
              </div>

              <div 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro', 'card_click_education')}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-orange-400 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-orange-300">Educação</h3>
                <p className="text-gray-400 text-sm">Treinamentos em IA e contabilidade</p>
              </div>

              <div 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal', 'card_click_personalization')}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-300">IA Personalizada</h3>
                <p className="text-gray-400 text-sm">Agentes customizados para sua necessidade</p>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AUTOMAÇÃO IA AVANÇADA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                EssencialBot revoluciona seu negócio com inteligência artificial de última geração
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-blue-300">Níveis de Automação</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-cyan-300">Nível 2 - Integrado</h4>
                      <span className="text-2xl font-bold text-green-400">R$ 297/mês</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />EssencialBot personalizado</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Integração Google Sheets</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Automação Make/Zapier</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" />Relatórios automáticos</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-blue-400">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-blue-300">Nível 3 - Avançado</h4>
                      <span className="text-2xl font-bold text-blue-400">R$ 497/mês</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Tudo do Nível 2 +</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Machine Learning avançado</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Análise preditiva</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Multi-plataformas</li>
                      <li className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-400 mr-2" />Consultoria incluída</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => handleExternalLink('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', 'automation_cta')}
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    ESCOLHER PLANO <ArrowRight className="inline ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
                  <Bot className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="font-bold text-blue-300 mb-2">IA Conversacional</h4>
                  <p className="text-gray-400 text-sm">Chatbots inteligentes que entendem contexto</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
                  <Database className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h4 className="font-bold text-green-300 mb-2">Integração Total</h4>
                  <p className="text-gray-400 text-sm">Conecta todos seus sistemas</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
                  <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="font-bold text-purple-300 mb-2">Analytics IA</h4>
                  <p className="text-gray-400 text-sm">Insights automáticos do seu negócio</p>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center">
                  <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h4 className="font-bold text-cyan-300 mb-2">Segurança Total</h4>
                  <p className="text-gray-400 text-sm">Proteção avançada de dados</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com automação IA para máxima eficiência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-colors">
                <Building className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Abertura de Empresas</h3>
                <p className="text-gray-400 mb-4">Processo completo e automatizado para abertura de CNPJ</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Consulta de viabilidade</li>
                  <li>• Registro na Junta Comercial</li>
                  <li>• Inscrições fiscais</li>
                  <li>• Alvará de funcionamento</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-colors">
                <FileText className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Contabilidade Mensal</h3>
                <p className="text-gray-400 mb-4">Escrituração completa com IA para maior precisão</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Balancetes mensais</li>
                  <li>• DRE automatizado</li>
                  <li>• Conciliação bancária</li>
                  <li>• Análise de indicadores</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-colors">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Obrigações Fiscais</h3>
                <p className="text-gray-400 mb-4">Cumprimento automático de todas as obrigações</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• SPED Contábil/Fiscal</li>
                  <li>• ECF e DEFIS</li>
                  <li>• DCTF e EFD</li>
                  <li>• Alertas automáticos</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-colors">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Departamento Pessoal</h3>
                <p className="text-gray-400 mb-4">Gestão completa de RH com automação</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Folha de pagamento</li>
                  <li>• eSocial automatizado</li>
                  <li>• Férias e 13º salário</li>
                  <li>• Rescisões e admissões</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-colors">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Planejamento Tributário</h3>
                <p className="text-gray-400 mb-4">Otimização fiscal com IA preditiva</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Análise de regime tributário</li>
                  <li>• Simulações fiscais</li>
                  <li>• Economia de impostos</li>
                  <li>• Relatórios personalizados</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition-colors">
                <BarChart3 className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-300">Relatórios Gerenciais</h3>
                <p className="text-gray-400 mb-4">Business Intelligence para tomada de decisão</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Dashboards em tempo real</li>
                  <li>• Análise de performance</li>
                  <li>• Projeções financeiras</li>
                  <li>• KPIs automatizados</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil', 'accounting_cta')}
                className="bg-gradient-to-r from-green-500 to-emerald-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONSULTAR CONTABILIDADE INTELIGENTE <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                CONSULTORIA EMPRESARIAL
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções completas para gestão, recuperação e crescimento empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-purple-300">Áreas de Atuação</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-300 mb-1">Gestão Empresarial</h4>
                      <p className="text-gray-400 text-sm">Planejamento estratégico, processos e governança corporativa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart3 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-300 mb-1">Fluxo de Caixa</h4>
                      <p className="text-gray-400 text-sm">Controle financeiro, projeções e otimização de capital de giro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-300 mb-1">Recuperação Judicial</h4>
                      <p className="text-gray-400 text-sm">Reestruturação empresarial e negociação com credores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Briefcase className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-300 mb-1">Busca de Crédito</h4>
                      <p className="text-gray-400 text-sm">Factoring, financiamentos e linhas de crédito especializadas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-300 mb-1">Consultoria com IA</h4>
                      <p className="text-gray-400 text-sm">Transformação digital e implementação de automação</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-bold text-purple-300">Expertise Comprovada</h4>
                  </div>
                  <p className="text-gray-400">Mais de 15 anos de experiência em consultoria empresarial e recuperação judicial</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Rocket className="h-8 w-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-bold text-purple-300">Resultados Rápidos</h4>
                  </div>
                  <p className="text-gray-400">Metodologia ágil com foco em resultados mensuráveis e sustentáveis</p>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-purple-400 mr-3" />
                    <h4 className="text-xl font-bold text-purple-300">Equipe Multidisciplinar</h4>
                  </div>
                  <p className="text-gray-400">Consultores especializados em diferentes áreas do conhecimento empresarial</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial', 'consulting_cta')}
                className="bg-gradient-to-r from-purple-500 to-pink-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONSULTAR EXPERT <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                EDUCAÇÃO PRO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em IA, contabilidade e gestão empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400 transition-colors">
                <Brain className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-orange-300">IA Empresarial</h3>
                <p className="text-gray-400 mb-4">Fundamentos e aplicações práticas de IA nos negócios</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Fundamentos de IA</li>
                  <li>• Chatbots e automação</li>
                  <li>• Machine Learning</li>
                  <li>• Projetos práticos</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400 transition-colors">
                <Calculator className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-orange-300">Contabilidade Digital</h3>
                <p className="text-gray-400 mb-4">Contabilidade 4.0 com tecnologia e automação</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• SPED e obrigações</li>
                  <li>• Análise de balanços</li>
                  <li>• Contabilidade gerencial</li>
                  <li>• Ferramentas digitais</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400 transition-colors">
                <Shield className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-orange-300">Controladoria</h3>
                <p className="text-gray-400 mb-4">Controles internos, auditoria e compliance</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance e LGPD</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-400 transition-colors">
                <TrendingUp className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-orange-300">Gestão Financeira</h3>
                <p className="text-gray-400 mb-4">Finanças corporativas e análise de investimentos</p>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Valuation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-orange-300 mb-2">Flexibilidade Total</h4>
                  <p className="text-gray-400">Cursos online, presenciais e híbridos com horários flexíveis</p>
                </div>
                <div>
                  <Award className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-orange-300 mb-2">Certificação</h4>
                  <p className="text-gray-400">Certificados reconhecidos pelo mercado e órgãos competentes</p>
                </div>
                <div>
                  <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-orange-300 mb-2">Mentoria</h4>
                  <p className="text-gray-400">Acompanhamento personalizado com especialistas</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro', 'education_cta')}
                className="bg-gradient-to-r from-orange-500 to-red-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                CONSULTAR EDUCAÇÃO PRO <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* AI Personalization Section */}
        <section id="agents" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                PERSONALIZAÇÃO DE IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Agentes de IA customizados para suas necessidades específicas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-cyan-300">Agentes Especializados</h3>
                <div className="space-y-6">
                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <Cpu className="h-8 w-8 text-cyan-400 mr-3" />
                      <h4 className="text-xl font-bold text-cyan-300">IA Conversacional</h4>
                    </div>
                    <p className="text-gray-400 mb-3">Chatbots inteligentes para atendimento ao cliente, vendas e suporte técnico</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Processamento de linguagem natural</li>
                      <li>• Integração com CRM e sistemas</li>
                      <li>• Aprendizado contínuo</li>
                      <li>• Multi-idiomas</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <BarChart3 className="h-8 w-8 text-cyan-400 mr-3" />
                      <h4 className="text-xl font-bold text-cyan-300">IA Analítica</h4>
                    </div>
                    <p className="text-gray-400 mb-3">Análise preditiva e business intelligence automatizada</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Análise de dados em tempo real</li>
                      <li>• Previsões e tendências</li>
                      <li>• Relatórios automáticos</li>
                      <li>• Dashboards inteligentes</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                    <div className="flex items-center mb-4">
                      <Globe className="h-8 w-8 text-cyan-400 mr-3" />
                      <h4 className="text-xl font-bold text-cyan-300">IA Operacional</h4>
                    </div>
                    <p className="text-gray-400 mb-3">Automação de processos e workflows empresariais</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• RPA (Robotic Process Automation)</li>
                      <li>• Integração de sistemas</li>
                      <li>• Workflows inteligentes</li>
                      <li>• Monitoramento automático</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-400/30">
                  <h4 className="text-2xl font-bold text-cyan-300 mb-4">Casos de Uso</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <Smartphone className="h-6 w-6 text-cyan-400 mb-2" />
                      <h5 className="font-bold text-cyan-300 mb-1">E-commerce</h5>
                      <p className="text-gray-400 text-sm">Assistente de vendas, recomendações personalizadas</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <Headphones className="h-6 w-6 text-cyan-400 mb-2" />
                      <h5 className="font-bold text-cyan-300 mb-1">Atendimento</h5>
                      <p className="text-gray-400 text-sm">Suporte 24/7, triagem automática de chamados</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <FileText className="h-6 w-6 text-cyan-400 mb-2" />
                      <h5 className="font-bold text-cyan-300 mb-1">Documentos</h5>
                      <p className="text-gray-400 text-sm">Processamento e análise automática de contratos</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg">
                      <Lock className="h-6 w-6 text-cyan-400 mb-2" />
                      <h5 className="font-bold text-cyan-300 mb-1">Compliance</h5>
                      <p className="text-gray-400 text-sm">Monitoramento de conformidade e alertas</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h4 className="text-xl font-bold text-cyan-300 mb-4">Processo de Desenvolvimento</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                      <span className="text-gray-300">Análise de necessidades e requisitos</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                      <span className="text-gray-300">Desenvolvimento e treinamento do modelo</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                      <span className="text-gray-300">Testes e validação em ambiente controlado</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                      <span className="text-gray-300">Deploy e monitoramento contínuo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleExternalLink('https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal', 'personalization_cta')}
                className="bg-gradient-to-r from-cyan-500 to-blue-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                PERSONALIZE SEU AGENTE <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                NOSSA MISSÃO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Democratizar o acesso à inteligência artificial e transformar negócios através da automação inteligente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Visão</h3>
                <p className="text-gray-400">
                  Ser a principal referência em automação IA para pequenas e médias empresas no Brasil, 
                  tornando a tecnologia acessível e transformadora.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Valores</h3>
                <p className="text-gray-400">
                  Inovação constante, transparência total, foco no cliente e compromisso com resultados 
                  mensuráveis e sustentáveis.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Propósito</h3>
                <p className="text-gray-400">
                  Empoderar empresários com ferramentas de IA que aumentam produtividade, reduzem custos 
                  e criam vantagens competitivas.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-400/30">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-cyan-300">Por que Exército de Agentes?</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Cada agente IA é como um soldado especializado, trabalhando 24/7 para proteger e 
                  fortalecer seu negócio. Juntos, formamos um exército invencível de automação.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <p className="text-gray-400 text-sm">Operação contínua sem pausas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                  <p className="text-gray-400 text-sm">Precisão em automações</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                  <p className="text-gray-400 text-sm">Redução de custos operacionais</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                  <p className="text-gray-400 text-sm">Empresas transformadas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                FALE CONOSCO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pronto para transformar seu negócio? Entre em contato e descubra como podemos ajudar
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-blue-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">Telefone/WhatsApp</h3>
                <p 
                  onClick={() => handleWhatsAppClick('Olá! Gostaria de mais informações sobre os serviços do Exército de Agentes.', 'contact_phone')}
                  className="text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors"
                >
                  (11) 91175-7113
                </p>
                <p className="text-gray-400 text-sm mt-2">Atendimento de segunda a sexta, 8h às 18h</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-300">E-mail</h3>
                <p 
                  onClick={() => handleEmailClick(config.EMAIL_CONTACT, 'Solicitação de Informações - Exército de Agentes', 'contact_email_sac')}
                  className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors mb-1"
                >
                  sac@exercitodeagentes.com.br
                </p>
                <p 
                  onClick={() => handleEmailClick(config.EMAIL_FINANCIAL, 'Consulta Financeira - Exército de Agentes', 'contact_email_financial')}
                  className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors"
                >
                  financeiro@exercitodeagentes.com.br
                </p>
                <p className="text-gray-400 text-sm mt-2">Resposta em até 2 horas úteis</p>
              </div>

              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center hover:border-purple-400 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Localização</h3>
                <p className="text-gray-300 mb-1">São Paulo - SP</p>
                <p className="text-gray-300">Atendimento Online</p>
                <p className="text-gray-400 text-sm mt-2">Cobertura nacional</p>
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">Siga-nos nas Redes Sociais</h3>
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={() => handleWhatsAppClick('Olá! Vim através das redes sociais e gostaria de conhecer os serviços do Exército de Agentes.', 'social_whatsapp')}
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors transform hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                </button>
                <button 
                  onClick={() => handleExternalLink('https://linkedin.com/company/exercitodeagentes', 'social_linkedin')}
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors transform hover:scale-110"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </button>
                <button 
                  onClick={() => handleExternalLink('https://instagram.com/exercitodeagentes', 'social_instagram')}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-2xl border border-blue-400/30 text-center">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Pronto para Começar?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Agende uma consulta gratuita e descubra como o EssencialBot pode revolucionar seu negócio
              </p>
              <button 
                onClick={() => handleWhatsAppClick('Olá! Gostaria de agendar uma consulta gratuita para conhecer como o EssencialBot pode revolucionar meu negócio.', 'contact_cta')}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                AGENDAR CONSULTA GRATUITA <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                EXÉRCITO DE AGENTES
              </h3>
              <p className="text-gray-400 mb-6">
                Transformando negócios através da automação inteligente
              </p>
              <div className="flex justify-center space-x-8 mb-6">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Automação IA
                </button>
                <button 
                  onClick={() => scrollToSection('accounting')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contabilidade
                </button>
                <button 
                  onClick={() => scrollToSection('consulting')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Consultoria
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Contato
                </button>
              </div>
              <div className="border-t border-gray-800 pt-6">
                <p className="text-gray-500 text-sm">
                  © 2024 Exército de Agentes. Todos os direitos reservados.
                </p>
              </div>
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