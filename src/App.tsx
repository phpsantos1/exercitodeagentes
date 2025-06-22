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
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  TrendingUp,
  Award,
  MessageCircle,
  User
} from 'lucide-react';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import { initializeAnalytics, trackEvent } from './utils/analytics';

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleCTAClick = (action: string) => {
    trackEvent('cta_click', { action });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
        <SEOHead />
        
        {/* Floating Head */}
        <div className="fixed top-6 left-6 z-50">
          <a
            href="https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:shadow-cyan-400/50"
          >
            <User className="h-8 w-8 text-white" />
          </a>
        </div>

        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]">
                EXÉRCITO DE AGENTES
              </h1>
              
              {/* Cultura Section */}
              <div className="mt-12 mb-16 max-w-4xl mx-auto">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                  <h2 className="text-2xl font-bold mb-6 text-cyan-300">🌟 Nossa Essência Estratégica</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <Target className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-2 text-cyan-300">🔹 Missão</h3>
                      <p className="text-sm text-gray-300">
                        Democratizar o acesso à inteligência artificial e à automação para pequenos negócios, oferecendo soluções contábeis, consultivas e tecnológicas que aliviem a sobrecarga operacional e impulsionem o crescimento sustentável com eficiência e humanidade.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Eye className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-2 text-cyan-300">🔭 Visão</h3>
                      <p className="text-sm text-gray-300">
                        Ser referência nacional em soluções inteligentes e acessíveis para pequenos empreendedores, tornando a tecnologia uma aliada prática, confiável e presente no cotidiano dos que mais precisam — e menos têm acesso.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Heart className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                      <h3 className="text-lg font-semibold mb-2 text-cyan-300">💎 Valores</h3>
                      <div className="text-sm text-gray-300 space-y-1">
                        <p>• Respeito acima de tudo</p>
                        <p>• Disciplina com empatia</p>
                        <p>• Tecnologia para todos</p>
                        <p>• Compromisso com resultado</p>
                        <p>• Clareza e estrutura</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-3 text-cyan-300">🧠 Frases-Símbolo da Cultura</h4>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <span className="bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
                        "Não paramos até conseguir!"
                      </span>
                      <span className="bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
                        "A tecnologia está acessível a todos!"
                      </span>
                      <span className="bg-cyan-500/20 px-3 py-1 rounded-full border border-cyan-400/30">
                        "Respeito, estrutura e entrega!"
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente, contabilidade smart e consultoria especializada
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('falar_especialista')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/50 flex items-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Falar com Especialista</span>
                </a>
                
                <a
                  href="#automation"
                  className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
                >
                  <Bot className="h-5 w-5" />
                  <span>Conhecer Soluções</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Cultura Section in Body */}
        <section className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                🌟 Nossa Essência Cultural
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conheça os valores e princípios que guiam cada decisão do Exército de Agentes
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300 flex items-center">
                    <Shield className="h-6 w-6 mr-3" />
                    🧭 Princípios Culturais em Ação
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <strong className="text-cyan-400">Estilo de liderança:</strong> Direto, estruturado e focado em resultados. A liderança aqui orienta, corrige e conduz — com firmeza, mas com respeito.
                    </div>
                    <div>
                      <strong className="text-cyan-400">Atitude frente a erros:</strong> Corrigimos o processo, não a pessoa. O erro é uma chance de fortalecer o sistema.
                    </div>
                    <div>
                      <strong className="text-cyan-400">Tom de voz interno:</strong> Objetivo, respeitoso e motivador. Aqui se fala com clareza e sem rodeios.
                    </div>
                    <div>
                      <strong className="text-cyan-400">Ambiente de trabalho:</strong> Remoto e disciplinado. Cada um com liberdade e responsabilidade para entregar o que promete.
                    </div>
                    <div>
                      <strong className="text-cyan-400">Decisões difíceis:</strong> São tomadas com base em dados e validação intuitiva — equilibramos razão e sensibilidade.
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/30">
                  <Lightbulb className="h-12 w-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">💎 Valores Inegociáveis</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Respeito acima de tudo:</strong> Não toleramos desrespeito em nenhuma forma</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Disciplina com empatia:</strong> Agimos com firmeza e método, mas sempre com humanidade</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Tecnologia para todos:</strong> Acreditamos que inovação só faz sentido se for acessível</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Compromisso com o resultado:</strong> Não paramos até conseguir — e entregamos com excelência</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span><strong>Clareza e estrutura:</strong> Preferimos processos bem definidos a improvisos recorrentes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                🤖 Automação Inteligente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                EssencialBot: Seu assistente de IA personalizado para revolucionar processos empresariais
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                  <Bot className="h-12 w-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">EssencialBot Personalizado</h3>
                  <p className="text-gray-300 mb-6">
                    Desenvolvemos agentes de IA específicos para seu negócio, automatizando tarefas repetitivas 
                    e otimizando processos com inteligência artificial avançada.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span>Chatbots inteligentes para atendimento 24/7</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span>Automação de processos administrativos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span>Integração com sistemas existentes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyan-400" />
                      <span>Análise preditiva e relatórios inteligentes</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/30">
                    <Zap className="h-8 w-8 text-cyan-400 mb-3" />
                    <h4 className="font-semibold mb-2">Nível 2 - Integrado</h4>
                    <p className="text-sm text-gray-400 mb-3">Automação completa com integrações</p>
                    <p className="text-2xl font-bold text-cyan-400">R$ 297/mês</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/30">
                    <TrendingUp className="h-8 w-8 text-purple-400 mb-3" />
                    <h4 className="font-semibold mb-2">Nível 3 - Avançado</h4>
                    <p className="text-sm text-gray-400 mb-3">IA avançada + Machine Learning</p>
                    <p className="text-2xl font-bold text-purple-400">R$ 497/mês</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                  <div className="text-center mb-6">
                    <Bot className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold">Demonstração EssencialBot</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong className="text-cyan-400">Cliente:</strong> "Preciso de um relatório de vendas"
                      </p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-400/30">
                      <p className="text-sm text-gray-300">
                        <strong className="text-cyan-400">EssencialBot:</strong> "Relatório gerado! Vendas do mês: R$ 45.230. 
                        Crescimento de 23% vs mês anterior. Enviando detalhes por email."
                      </p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <p className="text-sm text-gray-300">
                        <strong className="text-cyan-400">Sistema:</strong> ✅ Relatório enviado automaticamente
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <a
                      href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCTAClick('agente_demo')}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      <span>Personalizar Agente</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-300 to-cyan-400 bg-clip-text text-transparent">
                📊 Contabilidade Inteligente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia de ponta e automação inteligente
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20">
                  <Calculator className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-green-300">Serviços Contábeis Completos</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Abertura de empresas</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Contabilidade mensal</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Obrigações fiscais (SPED, ECF, DEFIS)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Departamento pessoal</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Planejamento tributário</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Relatórios gerenciais</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Compliance e auditoria</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>Consultoria fiscal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-400/30">
                  <h3 className="text-xl font-bold mb-4 text-green-300">🤖 Diferencial Tecnológico</h3>
                  <p className="text-gray-300 mb-4">
                    Nosso escritório utiliza EssencialBot para automatizar processos contábeis, 
                    garantindo maior agilidade, precisão e transparência em todos os serviços.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Lançamentos automáticos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Relatórios em tempo real</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Compliance automático</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <span className="text-sm">Análise preditiva</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
                  <h4 className="text-lg font-bold mb-4 text-green-300">📋 Planos Disponíveis</h4>
                  <div className="space-y-4">
                    <div className="border border-green-400/30 rounded-lg p-4">
                      <h5 className="font-semibold text-green-400">MEI Simples</h5>
                      <p className="text-sm text-gray-400 mb-2">Para microempreendedores</p>
                      <p className="text-xl font-bold">R$ 89/mês</p>
                    </div>
                    <div className="border border-green-400/30 rounded-lg p-4">
                      <h5 className="font-semibold text-green-400">Empresa Completa</h5>
                      <p className="text-sm text-gray-400 mb-2">Todos os serviços inclusos</p>
                      <p className="text-xl font-bold">R$ 297/mês</p>
                    </div>
                    <div className="border border-green-400/30 rounded-lg p-4">
                      <h5 className="font-semibold text-green-400">Premium + IA</h5>
                      <p className="text-sm text-gray-400 mb-2">Com automação avançada</p>
                      <p className="text-xl font-bold">R$ 497/mês</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('contabilidade_consulta')}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300"
                  >
                    <Calculator className="h-4 w-4" />
                    <span>Consultar Contabilidade</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent">
                💼 Consultoria Empresarial Expert
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consultoria estratégica completa para transformar desafios em oportunidades de crescimento
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
                  <Users className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-purple-300">Áreas de Atuação</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <strong className="text-purple-300">Gestão Empresarial:</strong>
                        <span className="text-gray-300"> Planejamento estratégico e otimização de processos</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <strong className="text-purple-300">Fluxo de Caixa:</strong>
                        <span className="text-gray-300"> Controle financeiro e projeções precisas</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <strong className="text-purple-300">Recuperação Judicial:</strong>
                        <span className="text-gray-300"> Reestruturação e negociação de dívidas</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <strong className="text-purple-300">Busca de Crédito:</strong>
                        <span className="text-gray-300"> Factorings e linhas de financiamento</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5" />
                      <div>
                        <strong className="text-purple-300">Fusões e Aquisições:</strong>
                        <span className="text-gray-300"> Due diligence e estruturação de negócios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/30">
                  <Award className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Consultoria com IA</h3>
                  <p className="text-gray-300 mb-6">
                    Combinamos experiência empresarial com inteligência artificial para 
                    análises mais precisas e soluções inovadoras.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Bot className="h-5 w-5 text-purple-400" />
                      <span className="text-sm">Análise preditiva de mercado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-purple-400" />
                      <span className="text-sm">Modelagem financeira automatizada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-purple-400" />
                      <span className="text-sm">Otimização de processos com IA</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
                  <h4 className="text-lg font-bold mb-4 text-purple-300">🎯 Casos de Sucesso</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                      <span>Recuperação de empresa com R$ 2M em dívidas</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                      <span>Aumento de 300% no faturamento em 12 meses</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 mt-0.5" />
                      <span>Estruturação de M&A de R$ 15M</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('consultoria_expert')}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                  >
                    <Users className="h-4 w-4" />
                    <span>Consultoria Expert</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-400 bg-clip-text text-transparent">
                🎓 Educação Pro
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em contabilidade, controladoria e inteligência artificial
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
                    <Bot className="h-10 w-10 text-orange-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-orange-300">🤖 IA Empresarial</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Fundamentos de IA, desenvolvimento de chatbots e implementação de machine learning em negócios.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400" />
                        <span>Fundamentos de IA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400" />
                        <span>Desenvolvimento de Chatbots</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-orange-400" />
                        <span>Machine Learning Aplicado</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
                    <Calculator className="h-10 w-10 text-green-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-green-300">📊 Contabilidade Digital</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Contabilidade 4.0, SPED, análise de balanços e tecnologias contábeis modernas.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Contabilidade 4.0</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>SPED Avançado</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span>Análise de Balanços</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20">
                    <Shield className="h-10 w-10 text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-purple-300">🛡️ Controladoria</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Controles internos, auditoria, compliance e gestão de riscos empresariais.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span>Controles Internos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span>Auditoria Interna</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span>Compliance</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                    <TrendingUp className="h-10 w-10 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-bold mb-3 text-cyan-300">💰 Gestão Financeira</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Fluxo de caixa, análise financeira, orçamento empresarial e planejamento estratégico.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span>Fluxo de Caixa</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span>Análise Financeira</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span>Orçamento Empresarial</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-400/30">
                  <GraduationCap className="h-12 w-12 text-orange-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-orange-300">🎯 Metodologia Diferenciada</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Projetos práticos reais</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Certificação reconhecida</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Mentoria personalizada</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Aulas ao vivo e gravadas</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Comunidade exclusiva</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span>Suporte técnico 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
                  <h4 className="text-lg font-bold mb-4 text-orange-300">📅 Próximas Turmas</h4>
                  <div className="space-y-4 text-sm">
                    <div className="border border-orange-400/30 rounded-lg p-3">
                      <div className="font-semibold text-orange-400">IA Empresarial</div>
                      <div className="text-gray-400">Início: 15/02/2024</div>
                      <div className="text-gray-400">40h • Online</div>
                    </div>
                    <div className="border border-green-400/30 rounded-lg p-3">
                      <div className="font-semibold text-green-400">Contabilidade Digital</div>
                      <div className="text-gray-400">Início: 01/03/2024</div>
                      <div className="text-gray-400">60h • Híbrido</div>
                    </div>
                    <div className="border border-purple-400/30 rounded-lg p-3">
                      <div className="font-semibold text-purple-400">Controladoria</div>
                      <div className="text-gray-400">Início: 15/03/2024</div>
                      <div className="text-gray-400">50h • Online</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCTAClick('educacao_pro')}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Educação Pro</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                🤖 Personalize seu Agente
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Crie agentes de IA personalizados para suas necessidades específicas
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                <Bot className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Agente Personalizado</h3>
                <p className="text-gray-300 mb-6">
                  Desenvolvemos agentes de IA específicos para seu negócio, com conhecimento especializado 
                  e integração completa aos seus sistemas.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm">Treinamento personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm">Integração com sistemas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                    <span className="text-sm">Suporte contínuo</span>
                  </div>
                </div>
                <a
                  href="https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('agente_personalizado')}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  <Bot className="h-4 w-4" />
                  <span>Criar Agente</span>
                </a>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-purple-300">Automação Avançada</h3>
                <p className="text-gray-300 mb-6">
                  Agentes que executam tarefas complexas, tomam decisões inteligentes e 
                  aprendem continuamente com suas interações.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">Tomada de decisão autônoma</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">Aprendizado contínuo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-sm">Execução de workflows</span>
                  </div>
                </div>
                <a
                  href="https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('automacao_avancada')}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  <Zap className="h-4 w-4" />
                  <span>Automatizar</span>
                </a>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/20">
                <Users className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-green-300">Consultoria Especializada</h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe de especialistas ajuda você a identificar as melhores oportunidades 
                  de automação e implementar soluções eficazes.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Análise de processos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Estratégia de implementação</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm">Acompanhamento contínuo</span>
                  </div>
                </div>
                <a
                  href="https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick('consultoria_especializada')}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-600 rounded-full font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300"
                >
                  <Users className="h-4 w-4" />
                  <span>Consultar</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                📞 Entre em Contato
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos prontos para transformar seu negócio com inteligência artificial
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Informações de Contato</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Phone className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-300">WhatsApp</h4>
                        <a 
                          href="https://wa.me/5511911757113" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          (11) 91175-7113
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-300">E-mail SAC</h4>
                        <a 
                          href="mailto:sac@exercitodeagentes.com.br"
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          sac@exercitodeagentes.com.br
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-300">E-mail Financeiro</h4>
                        <a 
                          href="mailto:financeiro@exercitodeagentes.com.br"
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          financeiro@exercitodeagentes.com.br
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-cyan-500/20 rounded-full">
                        <Clock className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-300">Horário de Atendimento</h4>
                        <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-300">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/30">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">🚀 Comece Agora</h3>
                  <p className="text-gray-300 mb-6">
                    Não perca tempo! Agende uma conversa gratuita com nossos especialistas 
                    e descubra como a IA pode revolucionar seu negócio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/5511911757113"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCTAClick('whatsapp_contact')}
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
                    >
                      <Phone className="h-4 w-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCTAClick('essencialbot_contact')}
                      className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    >
                      <Bot className="h-4 w-4" />
                      <span>EssencialBot</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">Envie uma Mensagem</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Seu nome completo"
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">Área de Interesse</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white">
                      <option value="">Selecione uma área</option>
                      <option value="automation">Automação IA</option>
                      <option value="accounting">Contabilidade Inteligente</option>
                      <option value="consulting">Consultoria Empresarial</option>
                      <option value="education">Educação Pro</option>
                      <option value="agents">Agentes Personalizados</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={() => handleCTAClick('contact_form')}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensagem</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  EXÉRCITO DE AGENTES
                </h3>
                <p className="text-gray-400 mb-6 max-w-md">
                  Democratizando o acesso à inteligência artificial para pequenos negócios, 
                  com soluções que aliviam a sobrecarga operacional e impulsionam o crescimento sustentável.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/5511911757113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500/20 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </a>
                  <a
                    href="mailto:sac@exercitodeagentes.com.br"
                    className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500/20 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-300">Soluções</h4>
                <div className="space-y-2">
                  <a href="#automation" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Automação IA
                  </a>
                  <a href="#accounting" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Contabilidade Inteligente
                  </a>
                  <a href="#consulting" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Consultoria Expert
                  </a>
                  <a href="#education" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Educação Pro
                  </a>
                  <a href="#agents" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Agentes Personalizados
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 text-cyan-300">Contato</h4>
                <div className="space-y-2 text-gray-400">
                  <a 
                    href="https://wa.me/5511911757113" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    (11) 91175-7113
                  </a>
                  <a 
                    href="mailto:sac@exercitodeagentes.com.br"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    sac@exercitodeagentes.com.br
                  </a>
                  <a 
                    href="mailto:financeiro@exercitodeagentes.com.br"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    financeiro@exercitodeagentes.com.br
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Exército de Agentes. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                "Não paramos até conseguir!" - Tecnologia acessível para todos.
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