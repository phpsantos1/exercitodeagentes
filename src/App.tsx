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
  MapPin,
  Building,
  Target,
  Eye,
  Heart,
  Compass,
  Quote,
  Shield,
  Lightbulb,
  Award,
  TrendingUp,
  HelpCircle,
  FileText,
  Headphones,
  Palette,
  Search,
  Brain,
  ShoppingCart,
  Dumbbell,
  MapPin as MapPinIcon,
  Wrench,
  Plus,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleLinkClick = (linkName: string, url: string) => {
    trackEvent('external_link_click', { link_name: linkName, url });
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = (context: string) => {
    const message = encodeURIComponent(`Olá! Vim do site do Exército de Agentes e gostaria de saber mais sobre ${context}.`);
    const whatsappUrl = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${message}`;
    trackEvent('whatsapp_click', { context });
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = (email: string, subject: string) => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    trackEvent('email_click', { email, subject });
    window.open(mailtoUrl, '_blank');
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "O que é o EssencialBot e como ele pode ajudar meu negócio?",
      answer: "O EssencialBot é uma IA personalizada que automatiza processos, atende clientes 24/7, integra com seus sistemas e gera relatórios inteligentes. Ele aprende sobre seu negócio e se torna um assistente especializado."
    },
    {
      question: "Qual a diferença entre os planos Nível 2 e Nível 3?",
      answer: "O Nível 2 (R$ 397/mês) inclui EssencialBot personalizado, integração Google Sheets e automações básicas. O Nível 3 (R$ 497/mês) adiciona Machine Learning avançado, análise preditiva, multi-plataformas e consultoria incluída."
    },
    {
      question: "Como funciona a personalização de IA?",
      answer: "Criamos agentes específicos para suas necessidades por R$ 120 de setup + R$ 50/mês de manutenção. Temos mais de 250 modelos disponíveis, desde renovação visual até treinadores especializados."
    },
    {
      question: "Vocês atendem empresas de todos os portes?",
      answer: "Sim! Atendemos desde pequenos empreendedores até grandes empresas. Nossos serviços contábeis, consultoria e automação são escaláveis para qualquer porte de negócio."
    },
    {
      question: "Como é o processo de implementação?",
      answer: "Após a contratação, fazemos um onboarding completo em até 48h, configuramos seu EssencialBot, integramos com seus sistemas e fornecemos treinamento para sua equipe."
    },
    {
      question: "Oferecem suporte técnico?",
      answer: "Sim! Oferecemos suporte prioritário via WhatsApp, email e através do próprio EssencialBot. Nossa equipe está disponível para resolver qualquer questão rapidamente."
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-blue-400/30">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-8 text-sm font-medium">
                <a href="#automation" className="text-gray-300 hover:text-blue-300 transition-colors">AUTOMAÇÃO IA</a>
                <a href="#accounting" className="text-gray-300 hover:text-blue-300 transition-colors">CONTABILIDADE</a>
                <a href="#consulting" className="text-gray-300 hover:text-blue-300 transition-colors">CONSULTORIA</a>
                <a href="#education" className="text-gray-300 hover:text-blue-300 transition-colors">ENSINO PRÓ</a>
                <a href="#personalization" className="text-gray-300 hover:text-blue-300 transition-colors">PERSONALIZAÇÃO DE IA</a>
                <a href="#mission" className="text-gray-300 hover:text-blue-300 transition-colors">MISSÃO</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-300 transition-colors">CONTATO</a>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                EXÉRCITO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AGENTES</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforme seu negócio com <strong>EssencialBot</strong> - IA avançada, automação inteligente, 
                contabilidade smart e consultoria especializada
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              <div 
                onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                className="bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-6 rounded-2xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20"
              >
                <div className="bg-blue-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automação IA</h3>
                <p className="text-gray-300 text-sm">EssencialBot personalizado para seu negócio</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Contabilidade Inteligente', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20"
              >
                <div className="bg-green-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Contabilidade</h3>
                <p className="text-gray-300 text-sm">Escritório contábil completo e inteligente</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Consultoria Expert', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="bg-gradient-to-br from-purple-500/20 to-pink-400/20 p-6 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20"
              >
                <div className="bg-purple-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Consultoria</h3>
                <p className="text-gray-300 text-sm">Gestão empresarial e recuperação judicial</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Educação Pro', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-orange-400/20"
              >
                <div className="bg-orange-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Educação</h3>
                <p className="text-gray-300 text-sm">Treinamentos em IA e contabilidade</p>
              </div>

              <div 
                onClick={() => handleLinkClick('Personalize seu Agente', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                className="bg-gradient-to-br from-cyan-500/20 to-teal-400/20 p-6 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                <div className="bg-cyan-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Personalização IA</h3>
                <p className="text-gray-300 text-sm">Agentes customizados para suas necessidades</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleWhatsAppClick('nossos serviços')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/50 text-white"
              >
                COMEÇAR AGORA
              </button>
              <button 
                onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300 text-blue-300 hover:text-white"
              >
                FALAR COM ESSENCIALBOT
              </button>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-16 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Automação IA com EssencialBot</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu negócio com inteligência artificial personalizada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">EssencialBot Personalizado</h3>
                      <p className="text-gray-300">IA treinada especificamente para seu negócio e necessidades</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Automação Completa</h3>
                      <p className="text-gray-300">Integração com Google Sheets, Make/Zapier e sistemas existentes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Análise Preditiva</h3>
                      <p className="text-gray-300">Machine Learning avançado para insights e previsões precisas</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl border border-blue-400/30">
                  <h4 className="text-lg font-semibold text-white mb-4">Planos Disponíveis:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Nível 2 - Integrado</span>
                      <span className="text-blue-300 font-semibold">R$ 397/mês</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Nível 3 - Avançado</span>
                      <span className="text-blue-300 font-semibold">R$ 497/mês</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => handleLinkClick('Agente IA', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                  className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white"
                >
                  ESCOLHER PLANO
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-8 rounded-2xl border border-blue-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Funcionalidades Avançadas</h3>
                <div className="space-y-4">
                  {[
                    'Chatbot inteligente 24/7',
                    'Integração multi-plataformas',
                    'Relatórios automáticos',
                    'API personalizada',
                    'Suporte prioritário',
                    'Consultoria incluída'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Escritório Contábil Inteligente</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contabilidade completa com tecnologia de ponta para sua empresa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                <Building className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Abertura de Empresas</h3>
                <p className="text-gray-300 mb-4">Processo completo e ágil para constituição da sua empresa</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Consulta de viabilidade</li>
                  <li>• Registro na Junta Comercial</li>
                  <li>• Inscrições fiscais</li>
                  <li>• Alvará de funcionamento</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                <Calculator className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Contabilidade Mensal</h3>
                <p className="text-gray-300 mb-4">Escrituração completa e obrigações fiscais em dia</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Escrituração contábil</li>
                  <li>• Balancetes mensais</li>
                  <li>• SPED Contábil</li>
                  <li>• Demonstrações financeiras</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                <Shield className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Compliance Fiscal</h3>
                <p className="text-gray-300 mb-4">Todas as obrigações fiscais automatizadas</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• SPED Fiscal</li>
                  <li>• ECF (Escrituração Contábil Fiscal)</li>
                  <li>• DEFIS (Simples Nacional)</li>
                  <li>• Declarações diversas</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Departamento Pessoal</h3>
                <p className="text-gray-300 mb-4">Gestão completa de recursos humanos</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Folha de pagamento</li>
                  <li>• eSocial</li>
                  <li>• Admissões e demissões</li>
                  <li>• Benefícios e férias</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Planejamento Tributário</h3>
                <p className="text-gray-300 mb-4">Otimização fiscal inteligente</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Análise de regime tributário</li>
                  <li>• Simulações fiscais</li>
                  <li>• Elisão fiscal</li>
                  <li>• Consultoria tributária</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                <Bot className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Contabilidade 4.0</h3>
                <p className="text-gray-300 mb-4">Automação total com EssencialBot</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Relatórios automáticos</li>
                  <li>• Dashboard em tempo real</li>
                  <li>• Alertas inteligentes</li>
                  <li>• Integração bancária</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => handleLinkClick('Contabilidade Inteligente', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full font-semibold hover:from-green-600 hover:to-emerald-500 transition-all duration-300 text-white"
              >
                CONSULTAR CONTABILIDADE INTELIGENTE
              </button>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-16 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Consultoria Empresarial Expert</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções estratégicas para gestão, crescimento e recuperação empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Nossas Especialidades</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 p-2 rounded-lg flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Gestão Empresarial</h4>
                      <p className="text-gray-300">Planejamento estratégico, estruturação organizacional e otimização de processos</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 p-2 rounded-lg flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Fluxo de Caixa</h4>
                      <p className="text-gray-300">Controle financeiro, projeções e gestão de capital de giro</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Recuperação Judicial</h4>
                      <p className="text-gray-300">Reestruturação empresarial e negociação com credores</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 p-2 rounded-lg flex-shrink-0">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Busca de Crédito</h4>
                      <p className="text-gray-300">Intermediação com factorings e instituições financeiras</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-400/10 p-8 rounded-2xl border border-purple-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Diferenciais da Nossa Consultoria</h3>
                <div className="space-y-4">
                  {[
                    'Experiência em casos críticos',
                    'Metodologia estruturada',
                    'Integração com IA e automação',
                    'Acompanhamento personalizado',
                    'Resultados mensuráveis',
                    'Suporte contínuo'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-purple-500/20 rounded-lg border border-purple-400/30">
                  <p className="text-purple-200 text-sm italic">
                    "Atendemos desde empresas em crescimento até casos críticos de recuperação judicial, 
                    sempre com foco em resultados sustentáveis."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => handleLinkClick('Consultoria Expert', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full font-semibold hover:from-purple-600 hover:to-pink-500 transition-all duration-300 text-white"
              >
                CONSULTAR EXPERT
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Educação Pro - Treinamentos Especializados</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Capacitação profissional em IA, contabilidade e gestão empresarial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30">
                <Bot className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">IA Empresarial</h3>
                <p className="text-gray-300 mb-4">Fundamentos e aplicações práticas</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Fundamentos de IA</li>
                  <li>• Chatbots e automação</li>
                  <li>• Machine Learning</li>
                  <li>• Projetos práticos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30">
                <Calculator className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Contabilidade Digital</h3>
                <p className="text-gray-300 mb-4">Contabilidade 4.0 e tecnologia</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• SPED e obrigações</li>
                  <li>• Análise de balanços</li>
                  <li>• Automação contábil</li>
                  <li>• Compliance digital</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30">
                <Shield className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Controladoria</h3>
                <p className="text-gray-300 mb-4">Controles internos e auditoria</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30">
                <TrendingUp className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Gestão Financeira</h3>
                <p className="text-gray-300 mb-4">Finanças corporativas avançadas</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Valuation</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-orange-500/20 to-red-400/20 p-8 rounded-2xl border border-orange-400/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Metodologia de Ensino</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Certificação</h4>
                    <p className="text-gray-300 text-sm">Certificados reconhecidos no mercado</p>
                  </div>
                  <div className="text-center">
                    <Lightbulb className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Projetos Práticos</h4>
                    <p className="text-gray-300 text-sm">Aprendizado baseado em casos reais</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-orange-400 mx-auto mb-3" />
                    <h4 className="text-lg font-semibold text-white mb-2">Mentoria</h4>
                    <p className="text-gray-300 text-sm">Acompanhamento personalizado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => handleLinkClick('Educação Pro', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-400 rounded-full font-semibold hover:from-orange-600 hover:to-red-500 transition-all duration-300 text-white"
              >
                CONSULTAR EDUCAÇÃO PRO
              </button>
            </div>
          </div>
        </section>

        {/* Personalization Section */}
        <section id="personalization" className="py-16 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Personalização de IA</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Crie seu agente de IA personalizado para necessidades específicas
              </p>
              <p className="text-lg text-cyan-300 font-semibold italic">
                "Você não sabe que precisa desses agentes até conhecê-los!"
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Agentes Personalizados</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-500 p-2 rounded-lg flex-shrink-0">
                      <Settings className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Configuração Personalizada</h4>
                      <p className="text-gray-300">Agente treinado especificamente para seu setor e necessidades</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-500 p-2 rounded-lg flex-shrink-0">
                      <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Integração Completa</h4>
                      <p className="text-gray-300">Conecta com seus sistemas e bases de conhecimento</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-500 p-2 rounded-lg flex-shrink-0">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Aprendizado Contínuo</h4>
                      <p className="text-gray-300">Evolui constantemente com base nas interações</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/20 to-blue-400/20 rounded-2xl border border-cyan-400/30">
                  <h4 className="text-lg font-semibold text-white mb-4">Investimento:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Setup Inicial</span>
                      <span className="text-cyan-300 font-semibold">R$ 120,00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Manutenção Mensal</span>
                      <span className="text-cyan-300 font-semibold">R$ 50,00</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => handleLinkClick('Personalize seu Agente', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-500 transition-all duration-300 text-white"
                  >
                    PERSONALIZE SEU AGENTE
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-400/10 p-8 rounded-2xl border border-cyan-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Casos de Uso</h3>
                <div className="space-y-4">
                  {[
                    'Atendimento ao cliente especializado',
                    'Análise de documentos específicos',
                    'Consultoria técnica automatizada',
                    'Treinamento de equipes',
                    'Suporte técnico avançado',
                    'Análise de dados personalizados'
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span className="text-gray-300">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* IAs Personalizadas Examples */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white text-center mb-8">Exemplos de IAs Personalizadas</h3>
              <p className="text-center text-gray-300 mb-8">Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-pink-500/20 to-rose-400/20 p-6 rounded-2xl border border-pink-400/30">
                  <Palette className="h-10 w-10 text-pink-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Agente de Renovação Visual</h4>
                  <p className="text-gray-300 text-sm">Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-400/20 p-6 rounded-2xl border border-blue-400/30">
                  <Search className="h-10 w-10 text-blue-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Pesquisador de Mercado</h4>
                  <p className="text-gray-300 text-sm">Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-violet-400/20 p-6 rounded-2xl border border-purple-400/30">
                  <Brain className="h-10 w-10 text-purple-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Compilador de Insights</h4>
                  <p className="text-gray-300 text-sm">Traduz complexidade em decisão lúcida com precisão lógica.</p>
                </div>

                <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30">
                  <ShoppingCart className="h-10 w-10 text-green-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Agente Buscador de Cupons</h4>
                  <p className="text-gray-300 text-sm">Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/20 to-amber-400/20 p-6 rounded-2xl border border-yellow-400/30">
                  <Award className="h-10 w-10 text-yellow-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Avaliador de QIs</h4>
                  <p className="text-gray-300 text-sm">Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.</p>
                </div>

                <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30">
                  <Wrench className="h-10 w-10 text-orange-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Encanador Especialista</h4>
                  <p className="text-gray-300 text-sm">Especialista sênior em sistemas hidráulicos residenciais e comerciais com domínio técnico absoluto.</p>
                </div>

                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-400/20 p-6 rounded-2xl border border-teal-400/30">
                  <MapPinIcon className="h-10 w-10 text-teal-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Passeios em SP</h4>
                  <p className="text-gray-300 text-sm">Estrategista urbano supremo, capaz de transformar desejos subjetivos em vivências memoráveis em São Paulo.</p>
                </div>

                <div className="bg-gradient-to-br from-red-500/20 to-pink-400/20 p-6 rounded-2xl border border-red-400/30">
                  <Dumbbell className="h-10 w-10 text-red-400 mb-4" />
                  <h4 className="text-lg font-semibold text-white mb-3">Treinadores Especializados</h4>
                  <p className="text-gray-300 text-sm">Treinadores de diversas modalidades esportivas e atividades físicas personalizadas.</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-500/20 to-purple-400/20 p-6 rounded-2xl border border-indigo-400/30 flex items-center justify-center">
                  <div className="text-center">
                    <Plus className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-3">E muito mais...</h4>
                    <p className="text-gray-300 text-sm">Mais de 250 modelos disponíveis para todas as necessidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Star className="inline-block h-10 w-10 text-yellow-400 mr-3" />
                Essência Estratégica da Cultura
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossos valores e princípios que guiam cada decisão e ação
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-8 rounded-2xl border border-blue-400/30">
                <div className="text-center mb-6">
                  <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Missão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Democratizar o acesso à inteligência artificial e à automação para pequenos negócios, 
                  oferecendo soluções contábeis, consultivas e tecnológicas que aliviem a sobrecarga 
                  operacional e impulsionem o crescimento sustentável com eficiência e humanidade.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-400/20 p-8 rounded-2xl border border-purple-400/30">
                <div className="text-center mb-6">
                  <Eye className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Visão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Ser referência nacional em soluções inteligentes e acessíveis para pequenos empreendedores, 
                  tornando a tecnologia uma aliada prática, confiável e presente no cotidiano dos que mais 
                  precisam — e menos têm acesso.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-8 rounded-2xl border border-green-400/30">
                <div className="text-center mb-6">
                  <Heart className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Valores</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Respeito acima de tudo:</strong> Não toleramos desrespeito em nenhuma forma</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Disciplina com empatia:</strong> Agimos com firmeza e método, mas sempre com humanidade</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Tecnologia para todos:</strong> Acreditamos que inovação só faz sentido se for acessível</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Compromisso com o resultado:</strong> Não paramos até conseguir</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm"><strong>Clareza e estrutura:</strong> Preferimos processos bem definidos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Princípios Culturais */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-gray-600/30 mb-12">
              <div className="text-center mb-8">
                <Compass className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Princípios Culturais em Ação</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Estilo de liderança:</h4>
                    <p className="text-gray-300 text-sm">Direto, estruturado e focado em resultados. A liderança aqui orienta, corrige e conduz — com firmeza, mas com respeito.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Atitude frente a erros:</h4>
                    <p className="text-gray-300 text-sm">Corrigimos o processo, não a pessoa. O erro é uma chance de fortalecer o sistema.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Tom de voz interno:</h4>
                    <p className="text-gray-300 text-sm">Objetivo, respeitoso e motivador. Aqui se fala com clareza e sem rodeios.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Ambiente de trabalho:</h4>
                    <p className="text-gray-300 text-sm">Remoto e disciplinado. Cada um com liberdade e responsabilidade para entregar o que promete.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">Decisões difíceis:</h4>
                    <p className="text-gray-300 text-sm">São tomadas com base em dados e validação intuitiva — equilibramos razão e sensibilidade.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frases-Símbolo */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-400/20 p-8 rounded-2xl border border-yellow-400/30">
              <div className="text-center mb-8">
                <Quote className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Frases-Símbolo da Cultura</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                  <Quote className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-yellow-200 font-semibold">"Não paramos até conseguir!"</p>
                </div>
                
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                  <Quote className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-yellow-200 font-semibold">"A tecnologia está acessível a todos. Aqui temos a solução que você procura!"</p>
                </div>
                
                <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/20">
                  <Quote className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <p className="text-yellow-200 font-semibold">"Respeito, estrutura e entrega — esse é o nosso jeito."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <HelpCircle className="inline-block h-10 w-10 text-blue-400 mr-3" />
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tire suas dúvidas sobre nossos serviços e soluções
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 mb-4">Não encontrou sua resposta?</p>
              <button 
                onClick={() => handleWhatsAppClick('dúvidas sobre os serviços')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 text-white"
              >
                FALE CONOSCO
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pronto para transformar seu negócio? Fale conosco agora!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30 text-center">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">WhatsApp</h3>
                <p className="text-gray-300 mb-4">Atendimento direto e personalizado</p>
                <button 
                  onClick={() => handleWhatsAppClick('atendimento geral')}
                  className="text-green-300 hover:text-green-200 font-semibold transition-colors"
                >
                  (11) 91175-7113
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-6 rounded-2xl border border-blue-400/30 text-center">
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">E-mail SAC</h3>
                <p className="text-gray-300 mb-4">Suporte e atendimento ao cliente</p>
                <button 
                  onClick={() => handleEmailClick(config.EMAIL_CONTACT, 'Contato via Site')}
                  className="text-blue-300 hover:text-blue-200 font-semibold transition-colors"
                >
                  {config.EMAIL_CONTACT}
                </button>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-400/20 p-6 rounded-2xl border border-purple-400/30 text-center">
                <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">E-mail Financeiro</h3>
                <p className="text-gray-300 mb-4">Questões financeiras e cobrança</p>
                <button 
                  onClick={() => handleEmailClick(config.EMAIL_FINANCIAL, 'Questão Financeira')}
                  className="text-purple-300 hover:text-purple-200 font-semibold transition-colors"
                >
                  {config.EMAIL_FINANCIAL}
                </button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleWhatsAppClick('demonstração dos serviços')}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full font-semibold hover:from-green-600 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/50 text-white"
                >
                  SOLICITAR DEMONSTRAÇÃO
                </button>
                <button 
                  onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                  className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400/10 transition-all duration-300 text-blue-300 hover:text-white"
                >
                  FALAR COM ESSENCIALBOT
                </button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Siga-nos nas redes sociais:</p>
              <div className="flex justify-center space-x-6">
                <button 
                  onClick={() => handleWhatsAppClick('redes sociais')}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  WhatsApp
                </button>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-16 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <Headphones className="inline-block h-10 w-10 text-green-400 mr-3" />
                Suporte
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nossa equipe está sempre pronta para ajudar você
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-400/20 p-6 rounded-2xl border border-green-400/30 text-center">
                <Phone className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Suporte via WhatsApp</h3>
                <p className="text-gray-300 mb-4 text-sm">Atendimento rápido e personalizado</p>
                <p className="text-green-300 font-semibold">24/7 Disponível</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-6 rounded-2xl border border-blue-400/30 text-center">
                <Mail className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Suporte via E-mail</h3>
                <p className="text-gray-300 mb-4 text-sm">Para questões mais complexas</p>
                <p className="text-blue-300 font-semibold">Resposta em até 2h</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-400/20 p-6 rounded-2xl border border-purple-400/30 text-center">
                <Bot className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">EssencialBot</h3>
                <p className="text-gray-300 mb-4 text-sm">IA especializada em nossos serviços</p>
                <p className="text-purple-300 font-semibold">Instantâneo</p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-400/20 p-6 rounded-2xl border border-orange-400/30 text-center">
                <Users className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Consultoria Direta</h3>
                <p className="text-gray-300 mb-4 text-sm">Fale diretamente com nossos especialistas</p>
                <p className="text-orange-300 font-semibold">Agendamento</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 rounded-2xl border border-gray-600/30">
                <h3 className="text-2xl font-bold text-white mb-4">Compromisso com a Excelência</h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Nosso suporte vai além do técnico. Oferecemos consultoria, treinamento e acompanhamento 
                  contínuo para garantir que você aproveite ao máximo nossas soluções.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Suporte Prioritário</p>
                    <p className="text-gray-400 text-sm">Para clientes dos planos premium</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Treinamento Incluído</p>
                    <p className="text-gray-400 text-sm">Capacitação da sua equipe</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <p className="text-white font-semibold">Atualizações Gratuitas</p>
                    <p className="text-gray-400 text-sm">Sempre com as últimas funcionalidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-700">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Exército de Agentes</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Transformando negócios com inteligência artificial e automação
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleWhatsAppClick('redes sociais')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    WhatsApp
                  </button>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">Instagram</a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#automation" className="text-gray-400 hover:text-blue-300 transition-colors">Automação IA</a></li>
                  <li><a href="#accounting" className="text-gray-400 hover:text-blue-300 transition-colors">Contabilidade</a></li>
                  <li><a href="#consulting" className="text-gray-400 hover:text-blue-300 transition-colors">Consultoria</a></li>
                  <li><a href="#education" className="text-gray-400 hover:text-blue-300 transition-colors">Educação Pro</a></li>
                  <li><a href="#personalization" className="text-gray-400 hover:text-blue-300 transition-colors">Personalização IA</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Suporte</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#faq" className="text-gray-400 hover:text-blue-300 transition-colors">FAQ</a></li>
                  <li><a href="#support" className="text-gray-400 hover:text-blue-300 transition-colors">Suporte Técnico</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-blue-300 transition-colors">Contato</a></li>
                  <li>
                    <button 
                      onClick={() => handleLinkClick('EssencialBot Concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                      className="text-gray-400 hover:text-blue-300 transition-colors"
                    >
                      EssencialBot
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#privacy" className="text-gray-400 hover:text-blue-300 transition-colors">Política de Privacidade</a></li>
                  <li><a href="#terms" className="text-gray-400 hover:text-blue-300 transition-colors">Termos de Uso</a></li>
                  <li><a href="#lgpd" className="text-gray-400 hover:text-blue-300 transition-colors">LGPD</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="text-center">
                <p className="text-gray-400 mb-2">
                  © 2024 Exército de Agentes. Todos os direitos reservados.
                </p>
                <p className="text-gray-500 text-sm">
                  CNPJ: XX.XXX.XXX/XXXX-XX | Desenvolvido com ❤️ e IA
                </p>
              </div>
            </div>
          </div>
        </footer>

        {/* Privacy Policy Modal */}
        <div id="privacy" className="hidden">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl border border-blue-400/30 p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <FileText className="h-8 w-8 text-blue-400 mr-3" />
                  Política de Privacidade
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">1. Coleta de Informações</h3>
                  <p className="text-sm leading-relaxed">
                    Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e dados empresariais 
                    quando você se cadastra em nossos serviços, solicita demonstrações ou entra em contato conosco.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">2. Uso das Informações</h3>
                  <p className="text-sm leading-relaxed">
                    Utilizamos suas informações para fornecer nossos serviços, personalizar sua experiência, 
                    enviar comunicações relevantes e melhorar nossos produtos e serviços.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">3. Compartilhamento de Dados</h3>
                  <p className="text-sm leading-relaxed">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                    exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">4. Segurança</h3>
                  <p className="text-sm leading-relaxed">
                    Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                    suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">5. Seus Direitos (LGPD)</h3>
                  <p className="text-sm leading-relaxed">
                    Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais. 
                    Para exercer esses direitos, entre em contato conosco através dos canais disponibilizados.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-white mb-3">6. Contato</h3>
                  <p className="text-sm leading-relaxed">
                    Para questões sobre esta política de privacidade, entre em contato através do e-mail: 
                    <button 
                      onClick={() => handleEmailClick(config.EMAIL_CONTACT, 'Política de Privacidade')}
                      className="text-blue-300 hover:text-blue-200 ml-1"
                    >
                      {config.EMAIL_CONTACT}
                    </button>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* EssencialBot Chat */}
        <EssencialBotChat />
      </div>
    </HelmetProvider>
  );
}

export default App;