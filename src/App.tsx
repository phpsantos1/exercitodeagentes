import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Calculator, 
  TrendingUp, 
  GraduationCap, 
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  FileText,
  HelpCircle,
  Eye,
  Heart,
  Compass
} from 'lucide-react';
import EssencialBotChat from './components/EssencialBotChat';
import SEOHead from './components/SEOHead';
import { initializeAnalytics } from './utils/analytics';

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

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <SEOHead />
        
        {/* Header */}
        <header className="fixed top-0 w-full z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">EXÉRCITO DE AGENTES</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('automation')} className="hover:text-cyan-400 transition-colors">
                  AUTOMAÇÃO IA
                </button>
                <button onClick={() => scrollToSection('accounting')} className="hover:text-cyan-400 transition-colors">
                  CONTABILIDADE
                </button>
                <button onClick={() => scrollToSection('consulting')} className="hover:text-cyan-400 transition-colors">
                  CONSULTORIA
                </button>
                <button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors">
                  ENSINO PRÓ
                </button>
                <button onClick={() => scrollToSection('ai-customization')} className="hover:text-cyan-400 transition-colors">
                  PERSONALIZAÇÃO DE IA
                </button>
                <button onClick={() => scrollToSection('mission')} className="hover:text-cyan-400 transition-colors">
                  MISSÃO
                </button>
                <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">
                  CONTATO
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                EXÉRCITO DE AGENTES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transforme seu negócio com <span className="text-cyan-400 font-semibold">EssencialBot</span> - 
                IA avançada, automação inteligente e soluções empresariais completas
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => scrollToSection('automation')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  🚀 COMEÇAR AGORA
                </button>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  🎯 CONHECER ANTES
                </button>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {/* Automação IA */}
                <button
                  onClick={() => scrollToSection('automation')}
                  className="group p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                      <Zap className="h-8 w-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-blue-300 mb-2">AUTOMAÇÃO IA</h3>
                      <p className="text-sm text-gray-300">EssencialBot personalizado para seu negócio</p>
                    </div>
                  </div>
                </button>

                {/* Contabilidade */}
                <button
                  onClick={() => scrollToSection('accounting')}
                  className="group p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl hover:from-green-500/30 hover:to-emerald-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                      <Calculator className="h-8 w-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-green-300 mb-2">CONTABILIDADE</h3>
                      <p className="text-sm text-gray-300">Contabilidade Inteligente completa</p>
                    </div>
                  </div>
                </button>

                {/* Consultoria */}
                <button
                  onClick={() => scrollToSection('consulting')}
                  className="group p-6 bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/30 rounded-2xl hover:from-purple-500/30 hover:to-violet-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
                      <TrendingUp className="h-8 w-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-purple-300 mb-2">CONSULTORIA</h3>
                      <p className="text-sm text-gray-300">Consultoria Empresarial expert</p>
                    </div>
                  </div>
                </button>

                {/* Ensino Pró */}
                <button
                  onClick={() => scrollToSection('education')}
                  className="group p-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-2xl hover:from-orange-500/30 hover:to-red-500/30 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-orange-500/20 rounded-full group-hover:bg-orange-500/30 transition-colors">
                      <GraduationCap className="h-8 w-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-orange-300 mb-2">ENSINO PRÓ</h3>
                      <p className="text-sm text-gray-300">Educação Pró especializada</p>
                    </div>
                  </div>
                </button>

                {/* Personalização de IA */}
                <button
                  onClick={() => scrollToSection('ai-customization')}
                  className="group p-6 bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30 rounded-2xl hover:from-pink-500/30 hover:to-rose-500/30 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition-colors">
                      <Settings className="h-8 w-8 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-pink-300 mb-2">PERSONALIZAÇÃO</h3>
                      <p className="text-sm text-gray-300">Agentes IA customizados</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
                AUTOMAÇÃO IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu negócio com o EssencialBot - nossa IA personalizada que automatiza processos, 
                otimiza operações e impulsiona resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg">
                      <Bot className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">EssencialBot Personalizado</h3>
                      <p className="text-gray-300">IA treinada especificamente para seu negócio, entendendo suas necessidades únicas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automação Inteligente</h3>
                      <p className="text-gray-300">Processos automatizados que aprendem e se adaptam continuamente</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Análise Preditiva</h3>
                      <p className="text-gray-300">Insights avançados para tomada de decisões estratégicas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-center">Planos de Automação</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-blue-400/30">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold text-blue-300">Nível 2 - Integrado</h4>
                      <span className="text-2xl font-bold text-cyan-400">R$ 397</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
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

                  <div className="bg-gray-700/50 rounded-xl p-6 border border-purple-400/30">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold text-purple-300">Nível 3 - Avançado</h4>
                      <span className="text-2xl font-bold text-cyan-400">R$ 497</span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
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

                <button className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Começar Automação
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
                CONTABILIDADE INTELIGENTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Escritório contábil completo com tecnologia avançada para empresas que buscam excelência e eficiência
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                <div className="p-4 bg-green-500/20 rounded-full w-fit mb-6">
                  <Calculator className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-300">Serviços Essenciais</h3>
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
                    <span>Obrigações fiscais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Departamento pessoal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                <div className="p-4 bg-blue-500/20 rounded-full w-fit mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">Planejamento Avançado</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Planejamento tributário</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Relatórios gerenciais</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Compliance e auditoria</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Consultoria fiscal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                <div className="p-4 bg-cyan-500/20 rounded-full w-fit mb-6">
                  <Bot className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Diferencial IA</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Automação com EssencialBot</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Processos inteligentes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Maior agilidade</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>Precisão aprimorada</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Solicitar Proposta Contábil
              </button>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
                CONSULTORIA EMPRESARIAL
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Consultoria completa que vai além da IA - desde gestão estratégica até recuperação judicial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-purple-500/20 rounded-full w-fit mb-6">
                  <Target className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Gestão Estratégica</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Planejamento estratégico</li>
                  <li>• Gestão empresarial</li>
                  <li>• Análise de mercado</li>
                  <li>• Otimização de processos</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-green-500/20 rounded-full w-fit mb-6">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-300">Controle Financeiro</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fluxo de caixa</li>
                  <li>• Controle financeiro</li>
                  <li>• Análise de viabilidade</li>
                  <li>• Orçamento empresarial</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-red-500/20 rounded-full w-fit mb-6">
                  <Shield className="h-8 w-8 text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-300">Recuperação Judicial</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Reestruturação empresarial</li>
                  <li>• Negociação com credores</li>
                  <li>• Plano de recuperação</li>
                  <li>• Acompanhamento jurídico</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-yellow-500/20 rounded-full w-fit mb-6">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-300">Busca de Crédito</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Factoring especializado</li>
                  <li>• Análise de crédito</li>
                  <li>• Negociação de taxas</li>
                  <li>• Estruturação financeira</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-blue-500/20 rounded-full w-fit mb-6">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">Fusões & Aquisições</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Due diligence</li>
                  <li>• Valuation empresarial</li>
                  <li>• Estruturação de negócios</li>
                  <li>• Assessoria em M&A</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-cyan-500/20 rounded-full w-fit mb-6">
                  <Bot className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">Consultoria com IA</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Automação de processos</li>
                  <li>• Análise preditiva</li>
                  <li>• Otimização com IA</li>
                  <li>• Transformação digital</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full font-semibold hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
                Agendar Consultoria
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-400">
                ENSINO PRÓ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos especializados em contabilidade, controladoria, gestão financeira e IA empresarial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-4 bg-cyan-500/20 rounded-full w-fit mb-6">
                  <Bot className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">IA Empresarial</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fundamentos de IA</li>
                  <li>• Chatbots empresariais</li>
                  <li>• Machine Learning</li>
                  <li>• Automação inteligente</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-4 bg-green-500/20 rounded-full w-fit mb-6">
                  <Calculator className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-green-300">Contabilidade Digital</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Contabilidade 4.0</li>
                  <li>• SPED avançado</li>
                  <li>• Análise de balanços</li>
                  <li>• Tecnologia contábil</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-4 bg-purple-500/20 rounded-full w-fit mb-6">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Controladoria</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Controles internos</li>
                  <li>• Auditoria interna</li>
                  <li>• Compliance</li>
                  <li>• Gestão de riscos</li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-4 bg-blue-500/20 rounded-full w-fit mb-6">
                  <TrendingUp className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-300">Gestão Financeira</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Fluxo de caixa</li>
                  <li>• Análise financeira</li>
                  <li>• Orçamento empresarial</li>
                  <li>• Planejamento financeiro</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Certificação Completa</h3>
                <p className="text-gray-300 mb-6">
                  Todos os cursos incluem certificação reconhecida e projetos práticos para aplicação imediata
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm">
                    ✅ Certificação Reconhecida
                  </span>
                  <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm">
                    ✅ Projetos Práticos
                  </span>
                  <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm">
                    ✅ Suporte Especializado
                  </span>
                  <span className="px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm">
                    ✅ Aplicação Imediata
                  </span>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                  Ver Cursos Disponíveis
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Customization Section */}
        <section id="ai-customization" className="py-20 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-400">
                PERSONALIZAÇÃO DE IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
                Agentes IA customizados para necessidades específicas
              </p>
              <p className="text-lg text-pink-300 font-semibold">
                Você não sabe que precisa desses agentes até conhecê-los!
              </p>
            </div>

            {/* Pricing */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-pink-400/30 mb-12 max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center text-pink-300">Investimento:</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Setup Inicial</span>
                  <span className="text-2xl font-bold text-cyan-400">R$ 120,00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Manutenção</span>
                  <span className="text-2xl font-bold text-cyan-400">R$ 50,00</span>
                </div>
              </div>
            </div>

            {/* AI Agents Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-pink-500/20 rounded-lg w-fit mb-4">
                  <Settings className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-pink-300">Agente de Renovação Visual</h3>
                <p className="text-gray-300 text-sm">
                  Ressignificar marcas por meio de rebranding de alta performance estratégica e estética.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-blue-300">Pesquisador de Mercado</h3>
                <p className="text-gray-300 text-sm">
                  Transforma dados dispersos e fenômenos de mercado em inteligência estratégica clara.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-purple-300">Compilador de Insights</h3>
                <p className="text-gray-300 text-sm">
                  Traduz complexidade em decisão lúcida com precisão lógica.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <Star className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-green-300">Agente Buscador de Cupons</h3>
                <p className="text-gray-300 text-sm">
                  Informa se o fornecedor de seu interesse está disponibilizando cupons na internet.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                  <Award className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-orange-300">Avaliador de QIs</h3>
                <p className="text-gray-300 text-sm">
                  Realizar avaliações cognitivas rigorosas com base em instrumentos cientificamente validados.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                  <Settings className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-cyan-300">Encanador Especialista</h3>
                <p className="text-gray-300 text-sm">
                  Especialista sênior em sistemas hidráulicos residenciais e comerciais com domínio técnico absoluto.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-4">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-yellow-300">Passeios em SP</h3>
                <p className="text-gray-300 text-sm">
                  Estrategista urbano supremo, capaz de transformar desejos subjetivos em vivências memoráveis em São Paulo.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-red-300">Treinadores Especializados</h3>
                <p className="text-gray-300 text-sm">
                  Treinadores de diversas modalidades esportivas e desenvolvimento pessoal.
                </p>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-400/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="p-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg w-fit mb-4">
                  <Bot className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-pink-300">+250 Modelos Disponíveis</h3>
                <p className="text-gray-300 text-sm">
                  Temos mais de 250 modelos de agentes que podem facilitar seu dia a dia em diversas áreas.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105">
                Explorar Todos os Agentes
              </button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NOSSA ESSÊNCIA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conheça os valores e princípios que guiam o Exército de Agentes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Missão */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                <div className="p-4 bg-cyan-500/20 rounded-full w-fit mb-6">
                  <Target className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">🔹 Missão</h3>
                <p className="text-gray-300">
                  Democratizar o acesso à inteligência artificial e à automação para pequenos negócios, oferecendo soluções contábeis, consultivas e tecnológicas que aliviem a sobrecarga operacional e impulsionem o crescimento sustentável com eficiência e humanidade.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-4 bg-purple-500/20 rounded-full w-fit mb-6">
                  <Eye className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">🔭 Visão</h3>
                <p className="text-gray-300">
                  Ser referência nacional em soluções inteligentes e acessíveis para pequenos empreendedores, tornando a tecnologia uma aliada prática, confiável e presente no cotidiano dos que mais precisam — e menos têm acesso.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-400/50 transition-all duration-300">
                <div className="p-4 bg-green-500/20 rounded-full w-fit mb-6">
                  <Heart className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">💎 Valores</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• <strong>Respeito acima de tudo</strong></li>
                  <li>• <strong>Disciplina com empatia</strong></li>
                  <li>• <strong>Tecnologia para todos</strong></li>
                  <li>• <strong>Compromisso com resultado</strong></li>
                  <li>• <strong>Clareza e estrutura</strong></li>
                </ul>
              </div>
            </div>

            {/* Princípios Culturais */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 mb-12">
              <div className="flex items-center mb-6">
                <Compass className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-blue-300">🧭 Princípios Culturais em Ação</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Estilo de liderança:</h4>
                    <p className="text-gray-300 text-sm">Direto, estruturado e focado em resultados. A liderança aqui orienta, corrige e conduz — com firmeza, mas com respeito.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Atitude frente a erros:</h4>
                    <p className="text-gray-300 text-sm">Corrigimos o processo, não a pessoa. O erro é uma chance de fortalecer o sistema.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Tom de voz interno:</h4>
                    <p className="text-gray-300 text-sm">Objetivo, respeitoso e motivador. Aqui se fala com clareza e sem rodeios.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Ambiente de trabalho:</h4>
                    <p className="text-gray-300 text-sm">Remoto e disciplinado. Cada um com liberdade e responsabilidade para entregar o que promete.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Decisões difíceis:</h4>
                    <p className="text-gray-300 text-sm">São tomadas com base em dados e validação intuitiva — equilibramos razão e sensibilidade.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Frases-Símbolo */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">🧠 Frases-Símbolo da Cultura</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-lg font-semibold text-cyan-300">"Não paramos até conseguir!"</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-lg font-semibold text-blue-300">"A tecnologia está acessível a todos. Aqui temos a solução que você procura!"</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-lg font-semibold text-purple-300">"Respeito, estrutura e entrega — esse é o nosso jeito."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-20 px-6 bg-gray-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
                SUPORTE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Estamos aqui para ajudar você em cada etapa da sua jornada
              </p>
            </div>

            {/* FAQ */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-cyan-300">
                <HelpCircle className="inline h-8 w-8 mr-2" />
                FAQ (Perguntas Frequentes)
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="font-bold text-cyan-300 mb-3">1. Quais serviços a Exército de Agentes oferece?</h4>
                  <p className="text-gray-300 text-sm">
                    Oferecemos contabilidade digital, consultoria financeira, implantação de inteligência artificial, automações empresariais, ensino e treinamentos corporativos.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="font-bold text-cyan-300 mb-3">2. Como funcionam os atendimentos?</h4>
                  <p className="text-gray-300 text-sm">
                    Todo o suporte e consultoria são realizados 100% online, por canais como e-mail, chat, videoconferência e plataformas especializadas.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="font-bold text-cyan-300 mb-3">3. Quais tecnologias são utilizadas?</h4>
                  <p className="text-gray-300 text-sm">
                    Utilizamos ferramentas de automação, CRMs, plataformas de IA (como GPT) e softwares contábeis integrados.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h4 className="font-bold text-cyan-300 mb-3">4. É seguro compartilhar meus dados?</h4>
                  <p className="text-gray-300 text-sm">
                    Sim. Todos os dados são tratados conforme a LGPD, com protocolos de segurança e criptografia em nossos sistemas.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 md:col-span-2">
                  <h4 className="font-bold text-cyan-300 mb-3">5. Posso cancelar um serviço?</h4>
                  <p className="text-gray-300 text-sm">
                    Sim, os contratos são regidos por cláusulas específicas. Consulte o Termo de Uso ou contate o suporte para orientações.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">
                <Settings className="inline h-8 w-8 mr-2" />
                Suporte Técnico
              </h3>
              
              <p className="text-gray-300 mb-6 text-center">
                Caso enfrente problemas técnicos, entre em contato por:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-cyan-500/20 rounded-full w-fit mx-auto mb-3">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-cyan-300 mb-2">E-mail</h4>
                  <p className="text-gray-300 text-sm">sac@exercitodeagentes.com.br</p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-blue-500/20 rounded-full w-fit mx-auto mb-3">
                    <Bot className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-blue-300 mb-2">Chat</h4>
                  <p className="text-gray-300 text-sm">Disponível no site (horário comercial)</p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-green-500/20 rounded-full w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <h4 className="font-semibold text-green-300 mb-2">Tempo de Resposta</h4>
                  <p className="text-gray-300 text-sm">Até 24h úteis</p>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-red-500/20 rounded-full w-fit mx-auto mb-3">
                    <Shield className="h-6 w-6 text-red-400" />
                  </div>
                  <h4 className="font-semibold text-red-300 mb-2">Emergencial</h4>
                  <p className="text-gray-300 text-sm">Disponível em planos com SLA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-400">
                CONTATO
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                    <p className="text-gray-300">(11) 91175-7113</p>
                    <p className="text-sm text-gray-400">Atendimento de segunda a sexta, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                    <p className="text-gray-300">sac@exercitodeagentes.com.br</p>
                    <p className="text-sm text-gray-400">Resposta em até 24h úteis</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Localização</h3>
                    <p className="text-gray-300">São Paulo, SP</p>
                    <p className="text-sm text-gray-400">Atendimento 100% online</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-400/30">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Pronto para começar?</h3>
                  <p className="text-gray-300 mb-4">
                    Agende uma conversa gratuita e descubra como nossas soluções podem transformar seu negócio.
                  </p>
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Agendar Conversa Gratuita
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-center">Envie sua Mensagem</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                    <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white">
                      <option value="">Selecione um serviço</option>
                      <option value="automation">Automação IA</option>
                      <option value="accounting">Contabilidade Inteligente</option>
                      <option value="consulting">Consultoria Empresarial</option>
                      <option value="education">Educação Pró</option>
                      <option value="ai-customization">Personalização de IA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
                      placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Enviar Mensagem</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold">EXÉRCITO DE AGENTES</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Transformando negócios com inteligência artificial, automação e soluções empresariais completas.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Serviços</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-cyan-400 transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-cyan-400 transition-colors">Contabilidade Inteligente</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-cyan-400 transition-colors">Consultoria Empresarial</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-cyan-400 transition-colors">Educação Pró</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Suporte</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><button onClick={() => scrollToSection('support')} className="hover:text-cyan-400 transition-colors">FAQ</button></li>
                  <li><a href="#" className="hover:text-cyan-400 transition-colors">Suporte Técnico</a></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contato</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#privacy" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a></li>
                  <li><a href="#terms" className="hover:text-cyan-400 transition-colors">Termos de Uso</a></li>
                  <li><a href="#lgpd" className="hover:text-cyan-400 transition-colors">LGPD</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Exército de Agentes. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* Legal Sections (Hidden by default, shown when clicked) */}
        <div id="privacy" className="hidden">
          {/* Privacy Policy content would go here */}
        </div>
        
        <div id="terms" className="hidden">
          {/* Terms of Use content would go here */}
        </div>
        
        <div id="lgpd" className="hidden">
          {/* LGPD content would go here */}
        </div>

        {/* EssencialBot Chat */}
        <EssencialBotChat />
      </div>
    </HelmetProvider>
  );
}

export default App;