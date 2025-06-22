import React, { useEffect } from 'react';
import { 
  Bot, 
  Zap, 
  Calculator, 
  Users, 
  GraduationCap, 
  Settings,
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Eye,
  Heart,
  Compass,
  MessageSquare,
  Linkedin,
  Instagram
} from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import { config } from './config/environment';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleCardClick = (service: string, url: string) => {
    trackEvent('service_card_click', { service });
    window.open(url, '_blank');
  };

  const handleButtonClick = (action: string, url: string) => {
    trackEvent('button_click', { action });
    window.open(url, '_blank');
  };

  const handleContactClick = (type: string, value: string) => {
    trackEvent('contact_click', { type, value });
    if (type === 'whatsapp') {
      window.open(`https://wa.me/${config.WHATSAPP_NUMBER}`, '_blank');
    } else if (type === 'email') {
      window.open(`mailto:${value}`, '_blank');
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-900 to-purple-800">
        <SEOHead />
        
        {/* Header */}
        <header className="bg-gray-900/95 backdrop-blur-sm border-b border-blue-400/30 sticky top-0 z-40">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-cyan-400" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
                  <span className="text-xs text-cyan-300">NOSSA CULTURA</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#automation" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">AUTOMAÇÃO</a>
                <a href="#accounting" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">CONTABILIDADE</a>
                <a href="#consulting" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">CONSULTORIA</a>
                <a href="#education" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">EDUCAÇÃO</a>
                <a href="#agents" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">AGENTES</a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">CONTATO</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleButtonClick('start_automation', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/50 text-white"
                >
                  COMEÇAR AUTOMAÇÃO
                </button>
                <button 
                  onClick={() => handleContactClick('whatsapp', config.WHATSAPP_NUMBER)}
                  className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  FALAR COM ESPECIALISTA
                </button>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div 
                onClick={() => handleCardClick('automation', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer group"
              >
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-6 w-fit group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-300">
                  <Zap className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">AUTOMAÇÃO IA</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  EssencialBot personalizado para seu negócio. Automatize processos, integre sistemas e aumente produtividade com IA avançada.
                </p>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Explorar Agente</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('accounting', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer group"
              >
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl mb-6 w-fit group-hover:from-green-400/30 group-hover:to-emerald-400/30 transition-all duration-300">
                  <Calculator className="h-8 w-8 text-green-400 group-hover:text-green-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">CONTABILIDADE INTELIGENTE</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Escritório contábil completo com IA. Abertura de empresas, obrigações fiscais, planejamento tributário e muito mais.
                </p>
                <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300">
                  <span>Consultar Contabilidade Inteligente</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('consulting', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer group"
              >
                <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-6 w-fit group-hover:from-purple-400/30 group-hover:to-pink-400/30 transition-all duration-300">
                  <Users className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">CONSULTORIA EXPERT</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Gestão empresarial, recuperação judicial, busca de crédito e consultoria com IA. Soluções completas para seu crescimento.
                </p>
                <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300">
                  <span>Consultar Expert</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('education', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer group"
              >
                <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-6 w-fit group-hover:from-orange-400/30 group-hover:to-red-400/30 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">EDUCAÇÃO PRO</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Treinamentos em IA empresarial, contabilidade digital, controladoria e gestão financeira. Capacite sua equipe.
                </p>
                <div className="flex items-center text-orange-400 font-semibold group-hover:text-orange-300">
                  <span>Consultar Educação Pro</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('agents', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer group"
              >
                <div className="p-4 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl mb-6 w-fit group-hover:from-indigo-400/30 group-hover:to-blue-400/30 transition-all duration-300">
                  <Settings className="h-8 w-8 text-indigo-400 group-hover:text-indigo-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">PERSONALIZE SEU AGENTE</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Crie agentes IA personalizados para suas necessidades específicas. Automação sob medida para seu negócio único.
                </p>
                <div className="flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300">
                  <span>Personalize seu Agente</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 group">
                <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl mb-6 w-fit group-hover:from-cyan-400/30 group-hover:to-teal-400/30 transition-all duration-300">
                  <Bot className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">ESSENCIALBOT CONCIERGE</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Seu assistente pessoal especializado. Acesse informações detalhadas sobre todos os nossos serviços em um só lugar.
                </p>
                <button 
                  onClick={() => handleButtonClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                  className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300"
                >
                  <span>Acessar Concierge</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa Cultura Section */}
        <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🌟 NOSSA CULTURA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conheça a essência estratégica que move o Exército de Agentes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">MISSÃO</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Democratizar o acesso à inteligência artificial e à automação para pequenos negócios, oferecendo soluções contábeis, consultivas e tecnológicas que aliviem a sobrecarga operacional e impulsionem o crescimento sustentável com eficiência e humanidade.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">VISÃO</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Ser referência nacional em soluções inteligentes e acessíveis para pequenos empreendedores, tornando a tecnologia uma aliada prática, confiável e presente no cotidiano dos que mais precisam — e menos têm acesso.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-pink-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">VALORES</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p><strong className="text-cyan-400">Respeito acima de tudo:</strong> Não toleramos desrespeito em nenhuma forma</p>
                  <p><strong className="text-purple-400">Disciplina com empatia:</strong> Agimos com firmeza e método, mas sempre com humanidade</p>
                  <p><strong className="text-green-400">Tecnologia para todos:</strong> Acreditamos que inovação só faz sentido se for acessível</p>
                  <p><strong className="text-orange-400">Compromisso com o resultado:</strong> Não paramos até conseguir</p>
                  <p><strong className="text-blue-400">Clareza e estrutura:</strong> Preferimos processos bem definidos</p>
                </div>
              </div>
            </div>

            {/* Princípios Culturais */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30 mb-8">
              <div className="flex items-center mb-6">
                <Compass className="h-8 w-8 text-indigo-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">PRINCÍPIOS CULTURAIS EM AÇÃO</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <p><strong className="text-cyan-400">Estilo de liderança:</strong> Direto, estruturado e focado em resultados</p>
                  <p><strong className="text-purple-400">Atitude frente a erros:</strong> Corrigimos o processo, não a pessoa</p>
                  <p><strong className="text-green-400">Tom de voz interno:</strong> Objetivo, respeitoso e motivador</p>
                </div>
                <div>
                  <p><strong className="text-orange-400">Ambiente de trabalho:</strong> Remoto e disciplinado</p>
                  <p><strong className="text-blue-400">Decisões difíceis:</strong> Baseadas em dados e validação intuitiva</p>
                </div>
              </div>
            </div>

            {/* Frases-Símbolo */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">🧠 FRASES-SÍMBOLO DA CULTURA</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-xl border border-cyan-400/30">
                  <p className="text-cyan-300 font-bold text-lg">"Não paramos até conseguir!"</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-400/30">
                  <p className="text-purple-300 font-bold text-lg">"A tecnologia está acessível a todos!"</p>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-400/30">
                  <p className="text-green-300 font-bold text-lg">"Respeito, estrutura e entrega!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🤖 AUTOMAÇÃO INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                EssencialBot revoluciona seu negócio com IA avançada e automação personalizada
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Níveis de Automação</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                        NÍVEL 2
                      </div>
                      <h4 className="text-xl font-bold text-white">INTEGRADO</h4>
                    </div>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />EssencialBot personalizado</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Integração Google Sheets</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação Make/Zapier</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Relatórios automáticos</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">R$ 297/mês</span>
                      <button 
                        onClick={() => handleButtonClick('choose_plan_2', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                        className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-white"
                      >
                        ESCOLHER PLANO
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold mr-4">
                        NÍVEL 3
                      </div>
                      <h4 className="text-xl font-bold text-white">AVANÇADO</h4>
                    </div>
                    <ul className="space-y-2 text-gray-300 mb-4">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Tudo do Nível 2 +</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning avançado</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise preditiva</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Multi-plataformas</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Consultoria incluída</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-400">R$ 497/mês</span>
                      <button 
                        onClick={() => handleButtonClick('choose_plan_3', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white"
                      >
                        ESCOLHER PLANO
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Por que EssencialBot?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">IA Personalizada</h4>
                      <p className="text-gray-300">Treinada especificamente para seu negócio e necessidades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Integração Total</h4>
                      <p className="text-gray-300">Conecta com suas ferramentas e sistemas existentes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Suporte Especializado</h4>
                      <p className="text-gray-300">Equipe dedicada para implementação e suporte contínuo</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">ROI Comprovado</h4>
                      <p className="text-gray-300">Redução de até 80% no tempo de tarefas repetitivas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                📊 CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação IA
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">🏢 Serviços Empresariais</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Abertura de empresas</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Alterações contratuais</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Encerramento de empresas</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Regularização fiscal</li>
                  </ul>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">📋 Obrigações Fiscais</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />SPED Contábil e Fiscal</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />ECF (Escrituração Contábil Fiscal)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />DEFIS (Simples Nacional)</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Declarações mensais e anuais</li>
                  </ul>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">👥 Departamento Pessoal</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Folha de pagamento</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />eSocial e FGTS</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Admissões e demissões</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Benefícios e férias</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-orange-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">💰 Planejamento Tributário</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise de regime tributário</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Otimização fiscal</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Recuperação de tributos</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Consultoria tributária</li>
                  </ul>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30">
                  <h3 className="text-xl font-bold text-white mb-4">🤖 Diferencial IA</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação de processos</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Relatórios inteligentes</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Alertas automáticos</li>
                    <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Dashboard em tempo real</li>
                  </ul>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => handleButtonClick('accounting_consult', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/50 text-white"
                  >
                    CONSULTAR CONTABILIDADE INTELIGENTE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                💼 CONSULTORIA EXPERT
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções empresariais completas para crescimento e recuperação de negócios
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg mb-4 w-fit">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Gestão Empresarial</h3>
                <p className="text-gray-300 mb-4">Planejamento estratégico, estruturação organizacional e otimização de processos.</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Planejamento estratégico</li>
                  <li>• Reestruturação organizacional</li>
                  <li>• Otimização de processos</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-400/30 hover:border-green-300/60 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg mb-4 w-fit">
                  <Calculator className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fluxo de Caixa</h3>
                <p className="text-gray-300 mb-4">Controle financeiro avançado e gestão de capital de giro para sustentabilidade.</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Controle de fluxo de caixa</li>
                  <li>• Gestão de capital de giro</li>
                  <li>• Projeções financeiras</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-red-400/30 hover:border-red-300/60 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg mb-4 w-fit">
                  <Target className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Recuperação Judicial</h3>
                <p className="text-gray-300 mb-4">Reestruturação de empresas em dificuldades financeiras e negociação com credores.</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Análise de viabilidade</li>
                  <li>• Plano de recuperação</li>
                  <li>• Negociação com credores</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg mb-4 w-fit">
                  <Star className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Busca de Crédito</h3>
                <p className="text-gray-300 mb-4">Intermediação com factorings e instituições financeiras para capital de giro.</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Análise de necessidades</li>
                  <li>• Negociação com factorings</li>
                  <li>• Estruturação de operações</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-orange-400/30 hover:border-orange-300/60 transition-all duration-300">
                <div className="p-3 bg-orange-500/20 rounded-lg mb-4 w-fit">
                  <Zap className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fusões e Aquisições</h3>
                <p className="text-gray-300 mb-4">Assessoria completa em processos de M&A, due diligence e valuation.</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Due diligence</li>
                  <li>• Valuation empresarial</li>
                  <li>• Estruturação de negócios</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300">
                <div className="p-3 bg-cyan-500/20 rounded-lg mb-4 w-fit">
                  <Bot className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Consultoria com IA</h3>
                <p className="text-gray-300 mb-4">Implementação de inteligência artificial nos processos de consultoria e gestão.</p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Automação de análises</li>
                  <li>• Relatórios inteligentes</li>
                  <li>• Predição de cenários</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => handleButtonClick('consulting_expert', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/50 text-white"
              >
                CONSULTAR EXPERT
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🎓 EDUCAÇÃO PRO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Capacitação profissional em áreas contábeis, financeiras e tecnológicas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30">
                <div className="p-4 bg-cyan-500/20 rounded-lg mb-6 w-fit">
                  <Bot className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">IA EMPRESARIAL</h3>
                <p className="text-gray-300 mb-6">Domine as ferramentas de inteligência artificial para transformar seu negócio.</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Fundamentos de IA</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Chatbots e automação</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning aplicado</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Projetos práticos</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-green-400/30">
                <div className="p-4 bg-green-500/20 rounded-lg mb-6 w-fit">
                  <Calculator className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">CONTABILIDADE DIGITAL</h3>
                <p className="text-gray-300 mb-6">Modernize seus conhecimentos contábeis com tecnologia de ponta.</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Contabilidade 4.0</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />SPED e obrigações</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise de balanços</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação contábil</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-purple-400/30">
                <div className="p-4 bg-purple-500/20 rounded-lg mb-6 w-fit">
                  <Target className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">CONTROLADORIA</h3>
                <p className="text-gray-300 mb-6">Desenvolva competências em controles internos e auditoria.</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Controles internos</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Auditoria interna</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Compliance</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-orange-400/30">
                <div className="p-4 bg-orange-500/20 rounded-lg mb-6 w-fit">
                  <Star className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">GESTÃO FINANCEIRA</h3>
                <p className="text-gray-300 mb-6">Aprenda técnicas avançadas de gestão e análise financeira.</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Fluxo de caixa</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise financeira</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Orçamento empresarial</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Valuation</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => handleButtonClick('education_pro', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-400/50 text-white"
              >
                CONSULTAR EDUCAÇÃO PRO
              </button>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                🤖 NOSSOS AGENTES ESPECIALIZADOS
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada agente é especializado em uma área específica para oferecer o melhor atendimento
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div 
                onClick={() => handleCardClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="p-4 bg-cyan-500/20 rounded-lg mb-4 w-fit group-hover:bg-cyan-400/30 transition-all duration-300">
                  <Bot className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">EssencialBot Concierge</h3>
                <p className="text-gray-300 mb-4">Seu assistente pessoal especializado com informações completas sobre todos os serviços.</p>
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Acessar Concierge</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('ai_agent', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="p-4 bg-blue-500/20 rounded-lg mb-4 w-fit group-hover:bg-blue-400/30 transition-all duration-300">
                  <Zap className="h-8 w-8 text-blue-400 group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Agente IA</h3>
                <p className="text-gray-300 mb-4">Especialista em automação inteligente e soluções de IA para empresas.</p>
                <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                  <span>Consultar Agente</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('accounting_agent', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-400/30 hover:border-green-300/60 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="p-4 bg-green-500/20 rounded-lg mb-4 w-fit group-hover:bg-green-400/30 transition-all duration-300">
                  <Calculator className="h-8 w-8 text-green-400 group-hover:text-green-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">Contabilidade Inteligente</h3>
                <p className="text-gray-300 mb-4">Especialista em serviços contábeis, fiscais e obrigações empresariais.</p>
                <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300">
                  <span>Consultar Contabilidade</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('consulting_agent', 'https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial')}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="p-4 bg-purple-500/20 rounded-lg mb-4 w-fit group-hover:bg-purple-400/30 transition-all duration-300">
                  <Users className="h-8 w-8 text-purple-400 group-hover:text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Consultoria Expert</h3>
                <p className="text-gray-300 mb-4">Especialista em gestão empresarial, recuperação judicial e consultoria estratégica.</p>
                <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300">
                  <span>Consultar Expert</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('education_agent', 'https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro')}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-orange-400/30 hover:border-orange-300/60 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="p-4 bg-orange-500/20 rounded-lg mb-4 w-fit group-hover:bg-orange-400/30 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">Educação Pro</h3>
                <p className="text-gray-300 mb-4">Especialista em treinamentos e capacitação profissional em áreas técnicas.</p>
                <div className="flex items-center text-orange-400 font-semibold group-hover:text-orange-300">
                  <span>Consultar Educação</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              <div 
                onClick={() => handleCardClick('personal_agent', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-400/30 hover:border-indigo-300/60 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              >
                <div className="p-4 bg-indigo-500/20 rounded-lg mb-4 w-fit group-hover:bg-indigo-400/30 transition-all duration-300">
                  <Settings className="h-8 w-8 text-indigo-400 group-hover:text-indigo-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">Personalize seu Agente</h3>
                <p className="text-gray-300 mb-4">Especialista em criar agentes IA personalizados para necessidades específicas.</p>
                <div className="flex items-center text-indigo-400 font-semibold group-hover:text-indigo-300">
                  <span>Personalizar Agente</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                📞 ENTRE EM CONTATO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos prontos para transformar seu negócio com nossas soluções inteligentes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-green-500/20 rounded-lg">
                        <Phone className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">WhatsApp</p>
                        <button 
                          onClick={() => handleContactClick('whatsapp', config.WHATSAPP_NUMBER)}
                          className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                        >
                          (11) 91175-7113
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-500/20 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">E-mail SAC</p>
                        <button 
                          onClick={() => handleContactClick('email', config.EMAIL_CONTACT)}
                          className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                        >
                          {config.EMAIL_CONTACT}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Mail className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">E-mail Financeiro</p>
                        <button 
                          onClick={() => handleContactClick('email', config.EMAIL_FINANCIAL)}
                          className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                        >
                          {config.EMAIL_FINANCIAL}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-orange-500/20 rounded-lg">
                        <Clock className="h-6 w-6 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-gray-300">Horário de Atendimento</p>
                        <p className="text-orange-400 font-semibold">Segunda a Sexta: 8h às 18h</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-cyan-400/30">
                  <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => handleContactClick('whatsapp', config.WHATSAPP_NUMBER)}
                      className="p-3 bg-green-500/20 rounded-lg hover:bg-green-500/30 transition-all duration-300 group"
                    >
                      <MessageSquare className="h-6 w-6 text-green-400 group-hover:text-green-300" />
                    </button>
                    <button 
                      onClick={() => window.open('https://linkedin.com/company/exercitodeagentes', '_blank')}
                      className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-all duration-300 group"
                    >
                      <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                    </button>
                    <button 
                      onClick={() => window.open('https://instagram.com/exercitodeagentes', '_blank')}
                      className="p-3 bg-pink-500/20 rounded-lg hover:bg-pink-500/30 transition-all duration-300 group"
                    >
                      <Instagram className="h-6 w-6 text-pink-400 group-hover:text-pink-300" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-blue-400/30">
                <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Como podemos ajudar você?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-white"
                  >
                    ENVIAR MENSAGEM
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold text-white">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Transformando negócios com inteligência artificial e automação inteligente.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleContactClick('whatsapp', config.WHATSAPP_NUMBER)}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => window.open('https://linkedin.com/company/exercitodeagentes', '_blank')}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => window.open('https://instagram.com/exercitodeagentes', '_blank')}
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">SERVIÇOS</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#automation" className="hover:text-cyan-400 transition-colors">Automação IA</a></li>
                  <li><a href="#accounting" className="hover:text-cyan-400 transition-colors">Contabilidade</a></li>
                  <li><a href="#consulting" className="hover:text-cyan-400 transition-colors">Consultoria</a></li>
                  <li><a href="#education" className="hover:text-cyan-400 transition-colors">Educação</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">AGENTES</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleCardClick('concierge', 'https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge')}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      EssencialBot Concierge
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleCardClick('ai_agent', 'https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3')}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Agente IA
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleCardClick('accounting_agent', 'https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil')}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Contabilidade Inteligente
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleCardClick('personal_agent', 'https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal')}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      Personalize seu Agente
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">CONTATO</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleContactClick('whatsapp', config.WHATSAPP_NUMBER)}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      (11) 91175-7113
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleContactClick('email', config.EMAIL_CONTACT)}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {config.EMAIL_CONTACT}
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleContactClick('email', config.EMAIL_FINANCIAL)}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {config.EMAIL_FINANCIAL}
                    </button>
                  </li>
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