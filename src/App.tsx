import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  Users, 
  GraduationCap, 
  Heart,
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  TrendingUp,
  Shield,
  Target,
  Lightbulb,
  Sparkles,
  MessageCircle,
  Globe,
  Award,
  BarChart3,
  Briefcase,
  BookOpen,
  HeartHandshake,
  Accessibility,
  Brain,
  HandHeart,
  Gift
} from 'lucide-react';
import EssencialBotChat from './components/EssencialBotChat';
import EdaSocialInstitutional from './components/EdaSocialInstitutional';
import SEOHead from './components/SEOHead';
import { config } from './config/environment';
import { initializeAnalytics, trackEvent } from './utils/analytics';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = React.useState('home');

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleContactClick = (type: string) => {
    trackEvent('contact_click', { contact_type: type });
  };

  const handleServiceClick = (service: string) => {
    trackEvent('service_interest', { service_name: service });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentSection === 'eda-social') {
    return (
      <HelmetProvider>
        <SEOHead 
          title="EDA SOCIAL - Projeto de Inclusão Digital | Exército de Agentes"
          description="Agentes de IA especializados para apoiar pessoas com autismo, síndrome de Down, mobilidade reduzida, luto, ansiedade e outros. Acesse: www.edasocial.org"
          keywords="EDA SOCIAL, inclusão digital, autismo, síndrome de down, mobilidade reduzida, luto, ansiedade, agentes IA, acessibilidade"
        />
        <div className="min-h-screen bg-white">
          <EdaSocialInstitutional />
          <button
            onClick={() => setCurrentSection('home')}
            className="fixed top-4 left-4 z-50 px-4 py-2 bg-black text-yellow-400 rounded-lg hover:bg-gray-800 transition-colors font-bold"
          >
            ← VOLTAR
          </button>
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <SEOHead />
      <div className="min-h-screen bg-white text-gray-900">
        {/* Header */}
        <header className="bg-black text-yellow-400 py-4 px-4 sticky top-0 z-40 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="h-8 w-8 text-yellow-400" />
              <h1 className="text-2xl font-bold">EXÉRCITO DE AGENTES</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('automation')} className="hover:text-yellow-300 transition-colors font-bold">AUTOMAÇÃO</button>
              <button onClick={() => scrollToSection('accounting')} className="hover:text-yellow-300 transition-colors font-bold">CONTABILIDADE</button>
              <button onClick={() => scrollToSection('consulting')} className="hover:text-yellow-300 transition-colors font-bold">CONSULTORIA</button>
              <button onClick={() => scrollToSection('education')} className="hover:text-yellow-300 transition-colors font-bold">EDUCAÇÃO</button>
              <button onClick={() => setCurrentSection('eda-social')} className="hover:text-yellow-300 transition-colors font-bold">EDA SOCIAL</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-300 transition-colors font-bold">CONTATO</button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 bg-blue-100 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">REVOLUÇÃO DA AUTOMAÇÃO INTELIGENTE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">EXÉRCITO DE AGENTES</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Disponibilizando a você, seu bem mais precioso: O seu tempo! Venha conferir!<br/><br/>
              EssencialBot + Escritório Contábil + Consultoria Empresarial + Educação Profissional. 
              Tudo integrado em uma solução completa para o sucesso da sua empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('automation')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Conhecer EssencialBot
              </button>
              <button 
                onClick={() => setCurrentSection('eda-social')}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                EDA SOCIAL - Projeto de Inclusão
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Empresas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-gray-600">Anos Experiência</div>
              </div>
            </div>
          </div>
        </section>

        {/* Automação IA Section */}
        <section id="automation" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">EssencialBot</span> - Automação IA
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Agentes de IA personalizados que revolucionam o atendimento e automatizam processos complexos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Agentes Personalizados */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Bot className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">AGENTES PERSONALIZADOS</h3>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-200" />
                      <span>Agente 100% personalizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-200" />
                      <span>Sem mensalidade</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-200" />
                      <span>Manutenção R$ 50/mês</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-200" />
                      <span>Ideal para necessidades específicas</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">R$ 497</div>
                    <div className="text-green-200 mb-4">Setup único</div>
                    <button 
                      onClick={() => handleServiceClick('agentes_personalizados')}
                      className="w-full py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>

              {/* Intermediário */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">INTERMEDIÁRIO</h3>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>EssencialBot personalizado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Integração Google Sheets</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Automação Make/Zapier</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-200" />
                      <span>Relatórios automáticos</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">R$ 597</div>
                    <div className="text-blue-200 mb-4">Setup + R$ 597/mês</div>
                    <button 
                      onClick={() => handleServiceClick('intermediario')}
                      className="w-full py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Contratar Agora
                    </button>
                  </div>
                </div>
              </div>

              {/* Avançado */}
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                  PREMIUM
                </div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">AVANÇADO</h3>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-200" />
                      <span>Tudo do Intermediário +</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-200" />
                      <span>Machine Learning avançado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-200" />
                      <span>Análise preditiva</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-200" />
                      <span>Multi-plataformas</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">R$ 797</div>
                    <div className="text-purple-200 mb-4">Setup + R$ 797/mês</div>
                    <button 
                      onClick={() => handleServiceClick('avancado')}
                      className="w-full py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Contratar Premium
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Observação sobre Agentes Personalizados */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">AGENTES PERSONALIZADOS - Condições Especiais</h4>
                  <p className="text-yellow-700">
                    Para solicitações de automação com Agente Personalizado, verificamos condições específicas. 
                    Entre em contato para avaliarmos sua necessidade e oferecermos a melhor solução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contabilidade Section */}
        <section id="accounting" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Escritório <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Contábil</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Serviços contábeis completos com tecnologia de ponta e atendimento personalizado
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-green-100 rounded-2xl">
                    <Building className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Abertura de Empresas</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>MEI, LTDA, SA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Processo 100% digital</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Consultoria de enquadramento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-2xl">
                    <Calculator className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Contabilidade Mensal</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Escrituração completa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Obrigações fiscais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Relatórios gerenciais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-purple-100 rounded-2xl">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Departamento Pessoal</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Folha de pagamento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>eSocial e FGTS</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Admissões e demissões</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consultoria Section */}
        <section id="consulting" className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Consultoria <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Empresarial</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estratégias personalizadas para transformar desafios em oportunidades de crescimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-2xl">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Planejamento Estratégico</h3>
                    <p className="text-gray-600">Definição de metas, análise de mercado e criação de roadmaps para crescimento sustentável.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-red-100 rounded-2xl">
                    <TrendingUp className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recuperação Empresarial</h3>
                    <p className="text-gray-600">Especialistas em reestruturação, recuperação judicial e revitalização de negócios.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-2xl">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Gestão Financeira</h3>
                    <p className="text-gray-600">Controle de fluxo de caixa, análise de investimentos e otimização de recursos.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Transformação Digital</h3>
                <p className="text-lg mb-6 text-orange-100">
                  Implementamos soluções de IA e automação que revolucionam a eficiência operacional da sua empresa.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Diagnóstico completo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Implementação gradual</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Treinamento da equipe</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-200" />
                    <span>Suporte contínuo</span>
                  </li>
                </ul>
                <button 
                  onClick={() => handleServiceClick('consultoria')}
                  className="w-full py-3 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Solicitar Consultoria
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Educação Section */}
        <section id="education" className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Educação <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Profissional</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Capacitação especializada para profissionais que querem liderar a transformação digital
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="p-3 bg-blue-100 rounded-2xl w-fit mx-auto mb-4">
                  <Bot className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">IA Empresarial</h3>
                <p className="text-gray-600 text-sm mb-4">Fundamentos, Chatbots e Machine Learning aplicados aos negócios</p>
                <div className="text-2xl font-bold text-blue-600 mb-2">40h</div>
                <div className="text-gray-500 text-sm">Certificação inclusa</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="p-3 bg-green-100 rounded-2xl w-fit mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Contabilidade 4.0</h3>
                <p className="text-gray-600 text-sm mb-4">Contabilidade digital, SPED e análise de dados</p>
                <div className="text-2xl font-bold text-green-600 mb-2">60h</div>
                <div className="text-gray-500 text-sm">Certificação inclusa</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="p-3 bg-purple-100 rounded-2xl w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Controladoria</h3>
                <p className="text-gray-600 text-sm mb-4">Controles internos, auditoria e compliance</p>
                <div className="text-2xl font-bold text-purple-600 mb-2">50h</div>
                <div className="text-gray-500 text-sm">Certificação inclusa</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="p-3 bg-orange-100 rounded-2xl w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Gestão Financeira</h3>
                <p className="text-gray-600 text-sm mb-4">Fluxo de caixa, análise e orçamento empresarial</p>
                <div className="text-2xl font-bold text-orange-600 mb-2">45h</div>
                <div className="text-gray-500 text-sm">Certificação inclusa</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => handleServiceClick('educacao')}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Todos os Cursos
              </button>
            </div>
          </div>
        </section>

        {/* EDA SOCIAL Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-pink-100 rounded-full px-6 py-3 mb-8">
                <Heart className="h-6 w-6 text-pink-600" />
                <span className="text-pink-800 font-semibold">COMPROMISSO SOCIAL</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">EDA SOCIAL</span> - Projeto de Inclusão
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Nosso compromisso social: agentes de IA especializados para apoiar pessoas com autismo, síndrome de Down, mobilidade reduzida, luto, ansiedade e outros. Acesse: <a href="https://www.edasocial.org" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-semibold">www.edasocial.org</a>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agente Autismo</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Especializado em comunicação adaptada, rotinas estruturadas e apoio sensorial para pessoas no espectro autista
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agente Síndrome de Down</h3>
                </div>
                <p className="text-purple-100 leading-relaxed">
                  Focado em desenvolvimento de autonomia, comunicação clara e apoio educacional personalizado
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Accessibility className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agente Mobilidade</h3>
                </div>
                <p className="text-green-100 leading-relaxed">
                  Orientação sobre acessibilidade, adaptações e recursos para pessoas com mobilidade reduzida
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agente Famílias</h3>
                </div>
                <p className="text-orange-100 leading-relaxed">
                  Suporte emocional e orientação prática para familiares e cuidadores
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <HandHeart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agente Luto</h3>
                </div>
                <p className="text-indigo-100 leading-relaxed">
                  Apoio emocional especializado para pessoas em processo de luto e perda
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl">
                    <Gift className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Agente Ansiedade</h3>
                </div>
                <p className="text-yellow-100 leading-relaxed">
                  Ferramentas e técnicas para gerenciamento da ansiedade e bem-estar emocional
                </p>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setCurrentSection('eda-social')}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Conhecer o Projeto Completo
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O que nossos <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Clientes</span> dizem
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "O EssencialBot revolucionou nosso atendimento. Reduzimos 80% do tempo de resposta e aumentamos a satisfação dos clientes."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria Rodrigues</div>
                    <div className="text-gray-500 text-sm">CEO, TechSolutions</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "A consultoria empresarial nos ajudou a sair da crise. Hoje somos uma empresa 3x maior e mais eficiente."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">João Silva</div>
                    <div className="text-gray-500 text-sm">Diretor, Indústria ABC</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Os cursos de IA transformaram nossa equipe. Agora somos líderes em inovação no nosso setor."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ana Costa</div>
                    <div className="text-gray-500 text-sm">CTO, StartupXYZ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Entre em <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contato</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pronto para transformar seu negócio? Nossa equipe está aqui para ajudar você a dar o próximo passo.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços do Exército de Agentes.`}
                onClick={() => handleContactClick('whatsapp')}
                className="bg-green-600 hover:bg-green-700 rounded-2xl p-6 text-center transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
                <p className="text-green-100">(11) 91175-7113</p>
              </a>

              {/* Email Geral */}
              <a 
                href={`mailto:${config.EMAIL_CONTACT}`}
                onClick={() => handleContactClick('email')}
                className="bg-blue-600 hover:bg-blue-700 rounded-2xl p-6 text-center transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">E-mail Geral</h3>
                <p className="text-blue-100 text-sm">sac@exercitodeagentes.com.br</p>
              </a>

              {/* Email Financeiro */}
              <a 
                href="mailto:financeiro@exercitodeagentes.com.br"
                onClick={() => handleContactClick('email_financeiro')}
                className="bg-purple-600 hover:bg-purple-700 rounded-2xl p-6 text-center transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Financeiro</h3>
                <p className="text-purple-100 text-sm">financeiro@exercitodeagentes.com.br</p>
              </a>

              {/* Email Paulo Henrique */}
              <a 
                href="mailto:paulohenrique@exercitodeagentes.com.br"
                onClick={() => handleContactClick('email_paulo')}
                className="bg-orange-600 hover:bg-orange-700 rounded-2xl p-6 text-center transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Paulo Henrique</h3>
                <p className="text-orange-100 text-sm">paulohenrique@exercitodeagentes.com.br</p>
              </a>
            </div>

            {/* EDA SOCIAL Contact */}
            <div className="mt-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">EDA SOCIAL - Projeto de Inclusão</h3>
              <p className="text-pink-100 mb-6">
                Para dúvidas, suporte ou colaboração com nosso projeto social
              </p>
              <a 
                href="mailto:contato@edasocial.org"
                onClick={() => handleContactClick('email_eda_social')}
                className="inline-flex items-center space-x-2 bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contato@edasocial.org</span>
              </a>
            </div>

            {/* Horário de Atendimento */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-3 bg-gray-800 rounded-full px-6 py-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-300 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Empresa */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Bot className="h-8 w-8 text-yellow-400" />
                  <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Transformando negócios através da automação inteligente, contabilidade especializada e consultoria estratégica.
                </p>
              </div>

              {/* Serviços */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">SERVIÇOS</h4>
                <ul className="space-y-2">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-white transition-colors">EssencialBot - Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-white transition-colors">Escritório Contábil</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-white transition-colors">Consultoria Empresarial</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors">Educação Profissional</button></li>
                </ul>
              </div>

              {/* EDA SOCIAL */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">EDA SOCIAL</h4>
                <p className="text-gray-400 mb-4">
                  Projeto de inclusão com agentes especializados para autismo, síndrome de Down, mobilidade reduzida, luto e ansiedade.
                </p>
                <div className="space-y-2">
                  <a 
                    href="https://www.edasocial.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    www.edasocial.org
                  </a>
                  <a 
                    href="mailto:contato@edasocial.org"
                    className="block text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    contato@edasocial.org
                  </a>
                </div>
              </div>

              {/* Contato */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">CONTATO</h4>
                <div className="space-y-3">
                  <a 
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}`}
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(11) 91175-7113</span>
                  </a>
                  <a 
                    href={`mailto:${config.EMAIL_CONTACT}`}
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>sac@exercitodeagentes.com.br</span>
                  </a>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Exército de Agentes. Todos os direitos reservados. | 
                <span className="text-pink-400 ml-2">EDA SOCIAL - Tecnologia que abraça</span>
              </p>
            </div>
          </div>
        </footer>

        {/* EssencialBot Chat */}
        <EssencialBotChat />
      </div>
    </HelmetProvider>
  );
};

export default App;