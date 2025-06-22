import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  Users, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  Settings,
  BarChart3,
  MessageSquare,
  Linkedin,
  Instagram,
  Sparkles,
  Brain,
  Rocket,
  Globe,
  Database,
  FileText,
  PieChart,
  Briefcase,
  BookOpen,
  Cpu,
  Network,
  Palette
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleAgentClick = (agentType: string, url: string) => {
    trackEvent('agent_click', { agent_type: agentType });
    window.open(url, '_blank');
  };

  const handleContactClick = (contactType: string, contact: string) => {
    trackEvent('contact_click', { contact_type: contactType });
    if (contactType === 'whatsapp') {
      window.open(`https://wa.me/5511911757113?text=${encodeURIComponent(contact)}`, '_blank');
    } else if (contactType === 'email') {
      window.location.href = `mailto:${contact}`;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-md border-b border-blue-400/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</h1>
                  <p className="text-xs text-blue-300">Powered by EssencialBot</p>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#automation" className="text-gray-300 hover:text-blue-300 transition-colors">Automação IA</a>
                <a href="#accounting" className="text-gray-300 hover:text-blue-300 transition-colors">Contabilidade</a>
                <a href="#consulting" className="text-gray-300 hover:text-blue-300 transition-colors">Consultoria</a>
                <a href="#education" className="text-gray-300 hover:text-blue-300 transition-colors">Ensino Pró</a>
                <a href="#agents" className="text-gray-300 hover:text-blue-300 transition-colors">Personalização de IA</a>
                <a href="#mission" className="text-gray-300 hover:text-blue-300 transition-colors">Missão</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors">Contato</a>
                <button
                  onClick={() => handleAgentClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white"
                >
                  Falar com Especialista
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforme seu negócio com <span className="text-cyan-300 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
            </div>

            {/* Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div 
                onClick={() => handleAgentClick('ia-agent', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl w-fit mx-auto mb-4 group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Automação IA</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">EssencialBot personalizado para seu negócio</p>
              </div>

              <div 
                onClick={() => handleAgentClick('contabilidade', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl w-fit mx-auto mb-4 group-hover:from-green-400 group-hover:to-emerald-300 transition-all duration-300">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">Contabilidade</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Escritório contábil completo e inteligente</p>
              </div>

              <div 
                onClick={() => handleAgentClick('consultoria', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl w-fit mx-auto mb-4 group-hover:from-purple-400 group-hover:to-pink-300 transition-all duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">Consultoria</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Gestão empresarial e recuperação judicial</p>
              </div>

              <div 
                onClick={() => handleAgentClick('educacao', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20"
              >
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl w-fit mx-auto mb-4 group-hover:from-orange-400 group-hover:to-red-300 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">Educação</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Treinamentos em IA e contabilidade</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleAgentClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50 text-white flex items-center justify-center space-x-2"
              >
                <Bot className="h-6 w-6" />
                <span>FALAR COM ESPECIALISTA</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleContactClick('whatsapp', 'Olá! Gostaria de conhecer o EssencialBot e as soluções do Exército de Agentes.')}
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-blue-400/30 rounded-xl font-bold text-lg hover:bg-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 text-white flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-6 w-6" />
                <span>WHATSAPP DIRETO</span>
              </button>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                AUTOMAÇÃO IA AVANÇADA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                EssencialBot revoluciona seu negócio com inteligência artificial de última geração
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Níveis de Automação</h3>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800/50 rounded-2xl border border-blue-400/20">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-500 rounded-lg mr-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Nível 2 - Integrado</h4>
                        <p className="text-blue-300 font-semibold">R$ 297/mês</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />EssencialBot personalizado</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Integração Google Sheets</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação Make/Zapier</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Relatórios automáticos</li>
                    </ul>
                  </div>

                  <div className="p-6 bg-gray-800/50 rounded-2xl border border-cyan-400/20">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-cyan-500 rounded-lg mr-4">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">Nível 3 - Avançado</h4>
                        <p className="text-cyan-300 font-semibold">R$ 497/mês</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Tudo do Nível 2 +</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning avançado</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise preditiva</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Multi-plataformas</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Consultoria incluída</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => handleAgentClick('ia-plans', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                  className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 text-white flex items-center space-x-2"
                >
                  <span>ESCOLHER PLANO</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-2xl border border-blue-400/30">
                  <Rocket className="h-12 w-12 text-blue-300 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Implementação Rápida</h4>
                  <p className="text-gray-300 text-sm">Setup em 24-48h com suporte completo</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-2xl border border-purple-400/30">
                  <Shield className="h-12 w-12 text-purple-300 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Segurança Total</h4>
                  <p className="text-gray-300 text-sm">Criptografia e compliance LGPD</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-400/20 rounded-2xl border border-green-400/30">
                  <TrendingUp className="h-12 w-12 text-green-300 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">ROI Comprovado</h4>
                  <p className="text-gray-300 text-sm">Retorno médio de 300% em 6 meses</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-500/20 to-red-400/20 rounded-2xl border border-orange-400/30">
                  <Award className="h-12 w-12 text-orange-300 mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Suporte 24/7</h4>
                  <p className="text-gray-300 text-sm">Equipe especializada sempre disponível</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação total
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="p-8 bg-gray-800/50 rounded-2xl border border-green-400/20">
                <FileText className="h-12 w-12 text-green-300 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Serviços Básicos</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Abertura de empresas</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Contabilidade mensal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Departamento pessoal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Obrigações fiscais</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-800/50 rounded-2xl border border-emerald-400/20">
                <PieChart className="h-12 w-12 text-emerald-300 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Gestão Avançada</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Planejamento tributário</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Relatórios gerenciais</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise financeira</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Compliance e auditoria</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-800/50 rounded-2xl border border-cyan-400/20">
                <Bot className="h-12 w-12 text-cyan-300 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Diferencial IA</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação total</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />EssencialBot integrado</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Alertas inteligentes</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise preditiva</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleAgentClick('contabilidade', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 text-white flex items-center space-x-2 mx-auto"
              >
                <span>CONSULTAR CONTABILIDADE INTELIGENTE</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                CONSULTORIA EMPRESARIAL
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções completas para gestão, recuperação judicial e crescimento empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-800/50 rounded-2xl border border-purple-400/20">
                <Briefcase className="h-10 w-10 text-purple-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Gestão Empresarial</h3>
                <p className="text-gray-300 text-sm">Planejamento estratégico e otimização de processos</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-pink-400/20">
                <BarChart3 className="h-10 w-10 text-pink-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Fluxo de Caixa</h3>
                <p className="text-gray-300 text-sm">Controle financeiro e projeções inteligentes</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-red-400/20">
                <Shield className="h-10 w-10 text-red-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Recuperação Judicial</h3>
                <p className="text-gray-300 text-sm">Reestruturação e negociação de dívidas</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-blue-400/20">
                <TrendingUp className="h-10 w-10 text-blue-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Busca de Crédito</h3>
                <p className="text-gray-300 text-sm">Factorings e linhas de financiamento</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-green-400/20">
                <Network className="h-10 w-10 text-green-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Fusões & Aquisições</h3>
                <p className="text-gray-300 text-sm">Due diligence e estruturação de negócios</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-cyan-400/20">
                <Bot className="h-10 w-10 text-cyan-300 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Consultoria com IA</h3>
                <p className="text-gray-300 text-sm">Análises preditivas e automação de processos</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleAgentClick('consultoria', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 text-white flex items-center space-x-2 mx-auto"
              >
                <span>CONSULTAR EXPERT</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
                EDUCAÇÃO PRO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em IA, contabilidade e gestão empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-gray-800/50 rounded-2xl border border-orange-400/20">
                <div className="flex items-center mb-6">
                  <Brain className="h-12 w-12 text-orange-300 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">IA Empresarial</h3>
                    <p className="text-orange-300">Fundamentos e aplicações práticas</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Fundamentos de IA</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Chatbots e automação</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Projetos práticos</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-800/50 rounded-2xl border border-red-400/20">
                <div className="flex items-center mb-6">
                  <Calculator className="h-12 w-12 text-red-300 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Contabilidade Digital</h3>
                    <p className="text-red-300">Contabilidade 4.0 e tecnologia</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />SPED e obrigações</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise de balanços</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação contábil</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Certificação profissional</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-800/50 rounded-2xl border border-purple-400/20">
                <div className="flex items-center mb-6">
                  <Shield className="h-12 w-12 text-purple-300 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Controladoria</h3>
                    <p className="text-purple-300">Controles internos e auditoria</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Controles internos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Auditoria interna</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Compliance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Gestão de riscos</li>
                </ul>
              </div>

              <div className="p-8 bg-gray-800/50 rounded-2xl border border-green-400/20">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-12 w-12 text-green-300 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Gestão Financeira</h3>
                    <p className="text-green-300">Finanças corporativas avançadas</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Fluxo de caixa</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise financeira</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Orçamento empresarial</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Valuation</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleAgentClick('educacao', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-500 transition-all duration-300 transform hover:scale-105 text-white flex items-center space-x-2 mx-auto"
              >
                <span>CONSULTAR EDUCAÇÃO PRO</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                PERSONALIZAÇÃO DE IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Crie seu agente de IA personalizado para necessidades específicas do seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="p-6 bg-gray-800/50 rounded-2xl border border-cyan-400/20 text-center">
                <Palette className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Design Personalizado</h3>
                <p className="text-gray-300 text-sm">Interface única para sua marca</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-blue-400/20 text-center">
                <Cpu className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">IA Especializada</h3>
                <p className="text-gray-300 text-sm">Treinamento específico do seu setor</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-purple-400/20 text-center">
                <Database className="h-12 w-12 text-purple-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Base de Conhecimento</h3>
                <p className="text-gray-300 text-sm">Dados e processos da sua empresa</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-green-400/20 text-center">
                <Settings className="h-12 w-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Integrações</h3>
                <p className="text-gray-300 text-sm">Conecte com seus sistemas</p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl border border-cyan-400/20 p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Processo de Criação</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Análise de Necessidades</h4>
                        <p className="text-gray-300 text-sm">Entendemos seu negócio e objetivos</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Desenvolvimento</h4>
                        <p className="text-gray-300 text-sm">Criamos e treinamos seu agente</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Implementação</h4>
                        <p className="text-gray-300 text-sm">Deploy e integração completa</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Suporte Contínuo</h4>
                        <p className="text-gray-300 text-sm">Monitoramento e melhorias</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30">
                    <Bot className="h-20 w-20 text-cyan-300 mx-auto mb-6" />
                    <h4 className="text-2xl font-bold text-white mb-4">Seu Agente Único</h4>
                    <p className="text-gray-300 mb-6">Desenvolvido especificamente para suas necessidades</p>
                    <div className="flex items-center justify-center space-x-2 text-cyan-300">
                      <Sparkles className="h-5 w-5" />
                      <span className="font-semibold">100% Personalizado</span>
                      <Sparkles className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleAgentClick('personalizacao', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 text-white flex items-center space-x-2 mx-auto"
              >
                <span>PERSONALIZE SEU AGENTE</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                NOSSA MISSÃO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Democratizar o acesso à inteligência artificial e transformar negócios através da automação inteligente
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-yellow-400/20">
                <Target className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
                <p className="text-gray-300">
                  Ser a principal referência em automação inteligente para pequenas e médias empresas no Brasil
                </p>
              </div>

              <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-orange-400/20">
                <Lightbulb className="h-16 w-16 text-orange-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
                <p className="text-gray-300">
                  Inovação, transparência, excelência no atendimento e compromisso com o sucesso dos nossos clientes
                </p>
              </div>

              <div className="text-center p-8 bg-gray-800/50 rounded-2xl border border-red-400/20">
                <Globe className="h-16 w-16 text-red-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Impacto</h3>
                <p className="text-gray-300">
                  Transformar a realidade empresarial brasileira através da democratização da inteligência artificial
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl border border-yellow-400/20 p-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">Por que escolher o Exército de Agentes?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-yellow-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Experiência</h4>
                    <p className="text-gray-300 text-sm">Mais de 10 anos no mercado</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-orange-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Equipe</h4>
                    <p className="text-gray-300 text-sm">Especialistas certificados</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-red-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Resultados</h4>
                    <p className="text-gray-300 text-sm">ROI comprovado</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-8 w-8 text-purple-300" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Confiança</h4>
                    <p className="text-gray-300 text-sm">Segurança total</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                FALE CONOSCO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entre em contato e descubra como podemos transformar seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div 
                    onClick={() => handleContactClick('whatsapp', 'Olá! Gostaria de conhecer os serviços do Exército de Agentes.')}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-green-400/20 hover:border-green-400/50 transition-all cursor-pointer group"
                  >
                    <div className="p-3 bg-green-500 rounded-lg group-hover:bg-green-400 transition-colors">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors">WhatsApp</h4>
                      <p className="text-gray-300">(11) 91175-7113</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => handleContactClick('email', 'sac@exercitodeagentes.com.br')}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all cursor-pointer group"
                  >
                    <div className="p-3 bg-blue-500 rounded-lg group-hover:bg-blue-400 transition-colors">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">E-mail SAC</h4>
                      <p className="text-gray-300">sac@exercitodeagentes.com.br</p>
                    </div>
                  </div>

                  <div 
                    onClick={() => handleContactClick('email', 'financeiro@exercitodeagentes.com.br')}
                    className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all cursor-pointer group"
                  >
                    <div className="p-3 bg-purple-500 rounded-lg group-hover:bg-purple-400 transition-colors">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">E-mail Financeiro</h4>
                      <p className="text-gray-300">financeiro@exercitodeagentes.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl border border-gray-400/20">
                    <div className="p-3 bg-gray-500 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Horário de Atendimento</h4>
                      <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleContactClick('whatsapp', 'Olá! Vim através das redes sociais e gostaria de conhecer os serviços.')}
                      className="p-3 bg-green-500 rounded-lg hover:bg-green-400 transition-colors"
                    >
                      <MessageSquare className="h-6 w-6 text-white" />
                    </button>
                    <button
                      onClick={() => window.open('https://linkedin.com/company/exercitodeagentes', '_blank')}
                      className="p-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-white" />
                    </button>
                    <button
                      onClick={() => window.open('https://instagram.com/exercitodeagentes', '_blank')}
                      className="p-3 bg-pink-500 rounded-lg hover:bg-pink-400 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Acesso Rápido aos Agentes</h3>
                
                <div className="space-y-4">
                  <button
                    onClick={() => handleAgentClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                    className="w-full p-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Bot className="h-6 w-6" />
                      <span>EssencialBot Concierge</span>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handleAgentClick('ia-agent', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                    className="w-full p-4 bg-gray-800/50 border border-blue-400/30 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-blue-400/50 transition-all duration-300 text-white flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-blue-300" />
                      <span>Agente IA</span>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handleAgentClick('contabilidade', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                    className="w-full p-4 bg-gray-800/50 border border-green-400/30 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-green-400/50 transition-all duration-300 text-white flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Calculator className="h-6 w-6 text-green-300" />
                      <span>Contabilidade Inteligente</span>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handleAgentClick('consultoria', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                    className="w-full p-4 bg-gray-800/50 border border-purple-400/30 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-purple-400/50 transition-all duration-300 text-white flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-purple-300" />
                      <span>Consultoria Expert</span>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handleAgentClick('educacao', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                    className="w-full p-4 bg-gray-800/50 border border-orange-400/30 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-orange-400/50 transition-all duration-300 text-white flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="h-6 w-6 text-orange-300" />
                      <span>Educação Pro</span>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>

                  <button
                    onClick={() => handleAgentClick('personalizacao', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                    className="w-full p-4 bg-gray-800/50 border border-cyan-400/30 rounded-xl font-semibold hover:bg-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 text-white flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Settings className="h-6 w-6 text-cyan-300" />
                      <span>Personalização de IA</span>
                    </div>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">EXÉRCITO DE AGENTES</h3>
                    <p className="text-xs text-blue-300">Powered by EssencialBot</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Transformando negócios através da inteligência artificial e automação inteligente.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#automation" className="hover:text-blue-300 transition-colors">Automação IA</a></li>
                  <li><a href="#accounting" className="hover:text-blue-300 transition-colors">Contabilidade</a></li>
                  <li><a href="#consulting" className="hover:text-blue-300 transition-colors">Consultoria</a></li>
                  <li><a href="#education" className="hover:text-blue-300 transition-colors">Educação</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>(11) 91175-7113</li>
                  <li>sac@exercitodeagentes.com.br</li>
                  <li>financeiro@exercitodeagentes.com.br</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Agentes IA</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <button
                      onClick={() => handleAgentClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      EssencialBot Concierge
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleAgentClick('ia-agent', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      Agente IA
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleAgentClick('contabilidade', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      Contabilidade Inteligente
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleAgentClick('personalizacao', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                      className="hover:text-blue-300 transition-colors"
                    >
                      Personalização IA
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
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