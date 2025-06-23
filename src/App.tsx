import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  Users, 
  GraduationCap, 
  Settings, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MessageCircle,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Lightbulb,
  BarChart3,
  FileText,
  Briefcase,
  BookOpen,
  Cog,
  Search,
  Brain,
  Wrench,
  MapPin,
  Dumbbell,
  Instagram
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = (action: string) => {
    trackEvent('cta_click', { action });
    // Implementar ação específica
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <SEOHead />
        
        {/* Circuito Eletrônico de Fundo */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" fill="none">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            
            {/* Grid de linhas horizontais */}
            {Array.from({ length: 20 }, (_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 54}
                x2="1920"
                y2={i * 54}
                stroke="url(#circuitGradient)"
                strokeWidth="1"
              />
            ))}
            
            {/* Grid de linhas verticais */}
            {Array.from({ length: 35 }, (_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 55}
                y1="0"
                x2={i * 55}
                y2="1080"
                stroke="url(#circuitGradient)"
                strokeWidth="1"
              />
            ))}
            
            {/* Conexões diagonais sequenciais */}
            {Array.from({ length: 15 }, (_, i) => (
              <g key={`diag-${i}`}>
                <line
                  x1={i * 128}
                  y1={100 + (i % 3) * 200}
                  x2={i * 128 + 100}
                  y2={200 + (i % 3) * 200}
                  stroke="url(#circuitGradient)"
                  strokeWidth="1"
                />
                <line
                  x1={i * 128 + 50}
                  y1={150 + (i % 4) * 180}
                  x2={i * 128 + 150}
                  y2={50 + (i % 4) * 180}
                  stroke="url(#circuitGradient)"
                  strokeWidth="1"
                />
              </g>
            ))}
            
            {/* Nós de circuito */}
            {Array.from({ length: 50 }, (_, i) => (
              <circle
                key={`node-${i}`}
                cx={(i % 10) * 192 + 96}
                cy={Math.floor(i / 10) * 216 + 108}
                r="3"
                fill="url(#circuitGradient)"
              />
            ))}
            
            {/* Componentes eletrônicos */}
            {Array.from({ length: 25 }, (_, i) => (
              <rect
                key={`comp-${i}`}
                x={(i % 5) * 384 + 150}
                y={Math.floor(i / 5) * 216 + 80}
                width="80"
                height="20"
                fill="none"
                stroke="url(#circuitGradient)"
                strokeWidth="1"
                rx="2"
              />
            ))}
          </svg>
        </div>

        {/* Header */}
        <header className="relative z-10 bg-black">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">EXÉRCITO DE AGENTES</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  AUTOMAÇÃO IA
                </button>
                <button 
                  onClick={() => scrollToSection('accounting')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  CONTABILIDADE
                </button>
                <button 
                  onClick={() => scrollToSection('consulting')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  CONSULTORIA
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  ENSINO PRÓ
                </button>
                <button 
                  onClick={() => scrollToSection('personalization')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  PERSONALIZAÇÃO DE IA
                </button>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  MISSÃO
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-cyan-300 transition-colors font-medium"
                >
                  CONTATO
                </button>
                
                <div className="flex items-center space-x-3">
                  <a 
                    href="tel:+5511911757113" 
                    className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                    title="WhatsApp: (11) 91175-7113"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  <a 
                    href="mailto:sac@exercitodeagentes.com.br" 
                    className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors"
                    title="Email: sac@exercitodeagentes.com.br"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Faixa preta abaixo do cabeçalho */}
          <div className="w-full h-1 bg-black"></div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            EXÉRCITO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">AGENTES</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforme seu negócio com <span className="font-bold text-cyan-300">EssencialBot</span> - IA avançada, automação inteligente,
            <br />contabilidade smart e consultoria especializada
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12 max-w-7xl mx-auto">
            {/* Automação IA */}
            <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/30 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/20">
              <div className="p-4 bg-blue-500 rounded-xl mb-4 w-fit mx-auto">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automação IA</h3>
              <p className="text-gray-300 text-sm mb-4">EssencialBot personalizado para seu negócio</p>
              <button 
                onClick={() => scrollToSection('automation')}
                className="text-cyan-300 hover:text-cyan-200 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Contabilidade */}
            <div className="bg-gradient-to-br from-green-600/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-400/20">
              <div className="p-4 bg-green-500 rounded-xl mb-4 w-fit mx-auto">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contabilidade</h3>
              <p className="text-gray-300 text-sm mb-4">Escritório contábil completo e inteligente</p>
              <button 
                onClick={() => scrollToSection('accounting')}
                className="text-green-300 hover:text-green-200 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Consultoria */}
            <div className="bg-gradient-to-br from-purple-600/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/20">
              <div className="p-4 bg-purple-500 rounded-xl mb-4 w-fit mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consultoria</h3>
              <p className="text-gray-300 text-sm mb-4">Gestão empresarial e recuperação judicial</p>
              <button 
                onClick={() => scrollToSection('consulting')}
                className="text-purple-300 hover:text-purple-200 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Educação */}
            <div className="bg-gradient-to-br from-orange-600/30 to-orange-800/30 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-400/20">
              <div className="p-4 bg-orange-500 rounded-xl mb-4 w-fit mx-auto">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Educação</h3>
              <p className="text-gray-300 text-sm mb-4">Treinamentos em IA e contabilidade</p>
              <button 
                onClick={() => scrollToSection('education')}
                className="text-orange-300 hover:text-orange-200 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Personalização IA */}
            <div className="bg-gradient-to-br from-cyan-600/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20">
              <div className="p-4 bg-cyan-500 rounded-xl mb-4 w-fit mx-auto">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalização IA</h3>
              <p className="text-gray-300 text-sm mb-4">Agentes customizados para suas necessidades</p>
              <button 
                onClick={() => scrollToSection('personalization')}
                className="text-cyan-300 hover:text-cyan-200 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
              >
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => handleCTAClick('start_now')}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/50"
            >
              COMEÇAR AGORA
            </button>
            
            <button 
              onClick={() => handleCTAClick('talk_to_essencialbot')}
              className="px-12 py-4 bg-transparent border-2 border-cyan-400 rounded-full text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
            >
              FALAR COM ESSENCIALBOT
            </button>
          </div>
        </section>

        {/* Automação IA Section */}
        <section id="automation" className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AUTOMAÇÃO IA</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu negócio com EssencialBot - nossa IA personalizada que automatiza processos, 
                otimiza operações e impulsiona resultados
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Nível 2 - Integrado */}
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm border border-blue-400/30 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-500 rounded-2xl mb-6">
                    <Zap className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">NÍVEL 2 - INTEGRADO</h3>
                  <div className="text-4xl font-bold text-blue-300 mb-2">R$ 397</div>
                  <p className="text-gray-300">Setup + R$ 397/mês</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>EssencialBot personalizado para seu negócio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Integração automática com Google Sheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Automações Make/Zapier incluídas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Relatórios automáticos personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Suporte prioritário via WhatsApp</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', '_blank')}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                >
                  CONTRATAR NÍVEL 2
                </button>
              </div>

              {/* Nível 3 - Avançado */}
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-bold text-sm">
                    MAIS POPULAR
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center p-4 bg-purple-500 rounded-2xl mb-6">
                    <Bot className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">NÍVEL 3 - AVANÇADO</h3>
                  <div className="text-4xl font-bold text-purple-300 mb-2">R$ 497</div>
                  <p className="text-gray-300">Setup + R$ 497/mês</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <span className="font-semibold">Tudo do Nível 2 MAIS:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>EssencialBot com Machine Learning avançado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Análise preditiva e insights automáticos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Integração multi-plataformas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>Consultoria empresarial incluída</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span>API personalizada para integrações</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3', '_blank')}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  CONTRATAR NÍVEL 3
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contabilidade Section */}
        <section id="accounting" className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">CONTABILIDADE INTELIGENTE</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação inteligente para sua empresa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
                <FileText className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Abertura de Empresas</h3>
                <p className="text-gray-300 mb-4">Processo completo de abertura com agilidade e segurança jurídica</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Consultoria de enquadramento</li>
                  <li>• Documentação completa</li>
                  <li>• Registro em órgãos competentes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
                <BarChart3 className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Contabilidade Mensal</h3>
                <p className="text-gray-300 mb-4">Escrituração completa com relatórios gerenciais automatizados</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Balancetes mensais</li>
                  <li>• DRE automatizado</li>
                  <li>• Fluxo de caixa inteligente</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Obrigações Fiscais</h3>
                <p className="text-gray-300 mb-4">Cumprimento de todas as obrigações com automação total</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• SPED Fiscal e Contábil</li>
                  <li>• ECF e DEFIS</li>
                  <li>• Declarações automáticas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Departamento Pessoal</h3>
                <p className="text-gray-300 mb-4">Gestão completa de RH com automação de processos</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Folha de pagamento</li>
                  <li>• eSocial automatizado</li>
                  <li>• Controle de ponto digital</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Planejamento Tributário</h3>
                <p className="text-gray-300 mb-4">Otimização fiscal inteligente com IA preditiva</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Análise de regime tributário</li>
                  <li>• Simulações automáticas</li>
                  <li>• Economia fiscal garantida</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6">
                <Award className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Compliance & Auditoria</h3>
                <p className="text-gray-300 mb-4">Conformidade total com monitoramento contínuo</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Auditoria preventiva</li>
                  <li>• Compliance automatizado</li>
                  <li>• Relatórios de conformidade</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => window.open('https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                SOLICITAR PROPOSTA CONTÁBIL
              </button>
            </div>
          </div>
        </section>

        {/* Consultoria Section */}
        <section id="consulting" className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">CONSULTORIA EMPRESARIAL</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consultoria especializada em gestão, recuperação judicial e reestruturação empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <Target className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Gestão Empresarial</h3>
                <p className="text-gray-300 mb-4">Planejamento estratégico e otimização de processos</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Planejamento estratégico</li>
                  <li>• Reestruturação organizacional</li>
                  <li>• Otimização de processos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <BarChart3 className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Fluxo de Caixa</h3>
                <p className="text-gray-300 mb-4">Controle financeiro inteligente e previsibilidade</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Controle de fluxo de caixa</li>
                  <li>• Projeções financeiras</li>
                  <li>• Análise de viabilidade</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Recuperação Judicial</h3>
                <p className="text-gray-300 mb-4">Especialistas em reestruturação e recuperação</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Análise de viabilidade</li>
                  <li>• Plano de recuperação</li>
                  <li>• Acompanhamento processual</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <Briefcase className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Busca de Crédito</h3>
                <p className="text-gray-300 mb-4">Conexão com factorings e linhas de crédito</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Análise de perfil creditício</li>
                  <li>• Negociação com factorings</li>
                  <li>• Estruturação de operações</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Fusões & Aquisições</h3>
                <p className="text-gray-300 mb-4">Assessoria completa em M&A e reestruturações</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Due diligence</li>
                  <li>• Valuation empresarial</li>
                  <li>• Estruturação de negócios</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6">
                <Bot className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Consultoria com IA</h3>
                <p className="text-gray-300 mb-4">Transformação digital e automação inteligente</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Diagnóstico de automação</li>
                  <li>• Implementação de IA</li>
                  <li>• Transformação digital</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => window.open('https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                SOLICITAR CONSULTORIA
              </button>
            </div>
          </div>
        </section>

        {/* Educação Section */}
        <section id="education" className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-300">ENSINO PRÓ</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Capacitação profissional em contabilidade, controladoria e inteligência artificial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8">
                <Bot className="h-16 w-16 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">IA EMPRESARIAL</h3>
                <p className="text-gray-300 mb-6">Domine a inteligência artificial aplicada aos negócios</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Fundamentos de IA e Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Desenvolvimento de Chatbots</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Automação de Processos com IA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Projetos práticos reais</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8">
                <Calculator className="h-16 w-16 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">CONTABILIDADE DIGITAL</h3>
                <p className="text-gray-300 mb-6">Contabilidade 4.0 com tecnologia de ponta</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">SPED Fiscal e Contábil avançado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Análise de Balanços com IA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Automação contábil</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Certificação profissional</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8">
                <Shield className="h-16 w-16 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">CONTROLADORIA</h3>
                <p className="text-gray-300 mb-6">Controles internos e auditoria empresarial</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Controles Internos eficazes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Auditoria interna e externa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Compliance e governança</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Cases práticos</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8">
                <TrendingUp className="h-16 w-16 text-orange-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">GESTÃO FINANCEIRA</h3>
                <p className="text-gray-300 mb-6">Finanças corporativas e análise de investimentos</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Fluxo de caixa inteligente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Análise financeira avançada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Orçamento e planejamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Simuladores financeiros</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => window.open('https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300"
              >
                CONHECER CURSOS
              </button>
            </div>
          </div>
        </section>

        {/* Personalização IA Section */}
        <section id="personalization" className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">PERSONALIZAÇÃO DE IA</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Configuração e disponibilização de agentes de IA customizados para suas necessidades específicas
              </p>
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-cyan-300 mb-2">R$ 120</div>
                <p className="text-gray-300">Setup + R$ 50 por manutenção</p>
              </div>
              <p className="text-lg text-cyan-300 font-semibold italic">
                "Você não sabe que precisa desses agentes até conhecê-los!"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Lightbulb className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Agente de Renovação Visual</h3>
                <p className="text-gray-300 text-sm">Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Search className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Pesquisador de Mercado</h3>
                <p className="text-gray-300 text-sm">Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Brain className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Compilador de Insights</h3>
                <p className="text-gray-300 text-sm">Traduz complexidade em decisão lúcida com precisão lógica.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Search className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Agente Buscador de Cupons</h3>
                <p className="text-gray-300 text-sm">Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Brain className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Avaliador de QIs</h3>
                <p className="text-gray-300 text-sm">Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Wrench className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Encanador</h3>
                <p className="text-gray-300 text-sm">Especialista sênior em sistemas hidráulicos residenciais e comerciais com domínio técnico absoluto.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <MapPin className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Passeios em SP</h3>
                <p className="text-gray-300 text-sm">Estrategista urbano supremo, capaz de transformar desejos subjetivos em vivências memoráveis em São Paulo.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Dumbbell className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Treinadores Esportivos</h3>
                <p className="text-gray-300 text-sm">Especialistas em diversas modalidades esportivas para otimizar seu desempenho.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6">
                <Settings className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">E Muito Mais!</h3>
                <p className="text-gray-300 text-sm">Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia.</p>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => window.open('https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                PERSONALIZAR AGENTE
              </button>
            </div>
          </div>
        </section>

        {/* Missão Section */}
        <section id="mission" className="relative z-10 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">NOSSA MISSÃO</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-12">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6">
                    <Target className="h-16 w-16 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-8 text-yellow-300">
                  DEMOCRATIZAR A INTELIGÊNCIA ARTIFICIAL
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Nossa missão é tornar a inteligência artificial acessível para todas as empresas, 
                  independentemente do tamanho ou setor. Acreditamos que a IA não deve ser privilégio 
                  de grandes corporações, mas uma ferramenta transformadora disponível para todos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-yellow-500/20 rounded-full mb-4">
                      <Lightbulb className="h-8 w-8 text-yellow-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-yellow-300">INOVAÇÃO</h4>
                    <p className="text-gray-400 text-sm">Tecnologia de ponta aplicada de forma prática e acessível</p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-orange-500/20 rounded-full mb-4">
                      <Users className="h-8 w-8 text-orange-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-orange-300">PARCERIA</h4>
                    <p className="text-gray-400 text-sm">Relacionamento próximo e suporte dedicado a cada cliente</p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-red-500/20 rounded-full mb-4">
                      <TrendingUp className="h-8 w-8 text-red-400" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-red-300">RESULTADOS</h4>
                    <p className="text-gray-400 text-sm">Foco em ROI mensurável e transformação real dos negócios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">CONTATO</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu negócio com IA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center p-6 bg-green-500 rounded-full mb-6">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
                <p className="text-gray-300 mb-4">Atendimento direto e personalizado</p>
                <a 
                  href="https://wa.me/5511911757113" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>(11) 91175-7113</span>
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center p-6 bg-blue-500 rounded-full mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">E-mail</h3>
                <p className="text-gray-300 mb-4">Suporte técnico e comercial</p>
                <a 
                  href="mailto:sac@exercitodeagentes.com.br"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>sac@exercitodeagentes.com.br</span>
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center p-6 bg-purple-500 rounded-full mb-6">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">EssencialBot</h3>
                <p className="text-gray-300 mb-4">Assistente IA especializado</p>
                <button 
                  onClick={() => window.open('https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge', '_blank')}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Bot className="h-5 w-5" />
                  <span>Falar Agora</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 border-t border-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <span className="text-2xl font-bold">EXÉRCITO DE AGENTES</span>
              </div>
              
              <p className="text-gray-400 mb-6">
                Transformando negócios com inteligência artificial desde 2024
              </p>
              
              <div className="flex justify-center space-x-6 mb-6">
                <a 
                  href="https://wa.me/5511911757113" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:sac@exercitodeagentes.com.br"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com/exercitodeagentes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              
              <p className="text-gray-500 text-sm">
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