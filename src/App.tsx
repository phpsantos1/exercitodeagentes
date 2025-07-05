import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Bot, Zap, Calculator, Users, GraduationCap, Heart, Phone, Mail, MapPin, Clock, CheckCircle, Star, ArrowRight, Building, TrendingUp, Shield, Target, Lightbulb, Award, MessageCircle, BarChart3, FileText, Briefcase, BookOpen, Headphones, Globe, Smartphone, Monitor, Database, Cloud, Lock, Rocket, Sparkles, ChevronRight, Play, Download, Share2, Eye, ThumbsUp, Calendar, DollarSign, PieChart, Settings, UserCheck, Handshake, Gift, Coffee, Megaphone, Palette, Code, Layers, Cpu, Network, Workflow, BarChart, LineChart, Activity, Gauge, Repeat, Filter, Search, Bell, Flag, Bookmark, Tag, Link, ExternalLink, MousePointer, TextCursor as Cursor, Move, RotateCcw, RefreshCw, Power, Wifi, Signal, Battery, Volume2, Camera, Video, Image, Music, Mic, Speaker, Headphones as HeadphonesIcon, Radio, Tv, Gamepad2, Joystick, Dices, Puzzle, Gamepad, Trophy, Medal, Crown, Gem, Diamond, Coins, CreditCard, Wallet, Banknote, Receipt, ShoppingCart, ShoppingBag, Store, Store as Storefront, Package, Truck, Plane, Car, Bus, Train, Bike, Ship, Anchor, Compass, Map, Navigation, Route, Signpost, MapPin as MapPinIcon, Home, Building2, Factory, Warehouse, School, Guitar as Hospital, Church, TreePine, Mountain, Sun, Moon, Star as StarIcon, Cloud as CloudIcon, CloudRain, CloudSnow, Zap as ZapIcon, Flame, Droplets, Wind, Thermometer, Umbrella, Snowflake, Rainbow, Sunrise, Sunset } from 'lucide-react';
import { config } from './config/environment';
import { initializeAnalytics, trackEvent } from './utils/analytics';
import SEOHead from './components/SEOHead';
import EssencialBotChat from './components/EssencialBotChat';
import EdaSocialInstitutional from './components/EdaSocialInstitutional';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [showEdaSocial, setShowEdaSocial] = React.useState(false);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleContactClick = (type: string) => {
    trackEvent('contact_click', { type });
  };

  const handleServiceClick = (service: string) => {
    trackEvent('service_interest', { service });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (showEdaSocial) {
    return (
      <HelmetProvider>
        <SEOHead 
          title="EDA SOCIAL - Projeto de Inclusão Digital | Exército de Agentes"
          description="EDA SOCIAL: agentes de IA especializados para apoiar pessoas com autismo, síndrome de Down, mobilidade reduzida, luto, ansiedade e outros. Acesse: www.edasocial.org"
          keywords="EDA SOCIAL, inclusão digital, autismo, síndrome de down, mobilidade reduzida, luto, ansiedade, agentes IA, acessibilidade, projeto social"
        />
        <div className="relative">
          <button
            onClick={() => setShowEdaSocial(false)}
            className="fixed top-4 left-4 z-50 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Voltar ao Site Principal</span>
          </button>
          <EdaSocialInstitutional />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <SEOHead />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">Exército de Agentes</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Início
                </button>
                <button 
                  onClick={() => scrollToSection('automation')}
                  className={`text-sm font-medium transition-colors ${activeSection === 'automation' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Automação IA
                </button>
                <button 
                  onClick={() => scrollToSection('accounting')}
                  className={`text-sm font-medium transition-colors ${activeSection === 'accounting' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Contabilidade
                </button>
                <button 
                  onClick={() => scrollToSection('consulting')}
                  className={`text-sm font-medium transition-colors ${activeSection === 'consulting' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Consultoria
                </button>
                <button 
                  onClick={() => scrollToSection('education')}
                  className={`text-sm font-medium transition-colors ${activeSection === 'education' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Educação
                </button>
                <button 
                  onClick={() => setShowEdaSocial(true)}
                  className="text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
                >
                  EDA SOCIAL
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`text-sm font-medium transition-colors ${activeSection === 'contact' ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Contato
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pt-16 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                <span className="text-white font-semibold">REVOLUÇÃO DA AUTOMAÇÃO INTELIGENTE</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Exército de
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Agentes</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transforme seu negócio com <strong className="text-cyan-300">EssencialBot</strong> - IA avançada, 
                automação inteligente, contabilidade smart e consultoria especializada. 
                A revolução digital que sua empresa precisa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => {
                    scrollToSection('automation');
                    handleServiceClick('automation');
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Conhecer EssencialBot
                </button>
                <button 
                  onClick={() => setShowEdaSocial(true)}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  EDA SOCIAL - Projeto de Inclusão
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Empresas Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300">Redução de Custos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Suporte Ativo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">100%</div>
                  <div className="text-gray-300">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nossas <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Soluções</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tecnologia de ponta para revolucionar seu negócio e transformar vidas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Automação IA */}
              <div 
                onClick={() => {
                  scrollToSection('automation');
                  handleServiceClick('automation');
                }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AUTOMAÇÃO IA</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  EssencialBot personalizado com IA avançada, integração completa e automação inteligente para revolucionar seu atendimento.
                </p>
                <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Contabilidade */}
              <div 
                onClick={() => {
                  scrollToSection('accounting');
                  handleServiceClick('accounting');
                }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">CONTABILIDADE</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Escritório contábil completo com tecnologia avançada, planejamento tributário e gestão financeira inteligente.
                </p>
                <div className="mt-6 flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Consultoria */}
              <div 
                onClick={() => {
                  scrollToSection('consulting');
                  handleServiceClick('consulting');
                }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">CONSULTORIA</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Consultoria empresarial estratégica, recuperação judicial, gestão financeira e transformação digital.
                </p>
                <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Educação */}
              <div 
                onClick={() => {
                  scrollToSection('education');
                  handleServiceClick('education');
                }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">EDUCAÇÃO</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Treinamentos especializados em IA, contabilidade digital, controladoria e gestão financeira com certificação.
                </p>
                <div className="mt-6 flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* EDA SOCIAL */}
              <div 
                onClick={() => {
                  setShowEdaSocial(true);
                  handleServiceClick('eda_social');
                }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">EDA SOCIAL</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Nosso compromisso social: agentes de IA especializados para apoiar pessoas com autismo, síndrome de Down e ansiedade. Acesse: www.edasocial.org
                </p>
                <div className="mt-6 flex items-center text-pink-400 group-hover:text-pink-300 transition-colors">
                  <span className="text-sm font-semibold">Conhecer projeto</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Agentes Especializados */}
              <div 
                onClick={() => {
                  scrollToSection('agents');
                  handleServiceClick('agents');
                }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">AGENTES IA</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Agentes especializados para diferentes setores: vendas, suporte, marketing, RH e muito mais.
                </p>
                <div className="mt-6 flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  <span className="text-sm font-semibold">Ver agentes</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">EssencialBot</span> - Automação IA
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolucione seu atendimento com inteligência artificial avançada e automação completa
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Transforme Seu Atendimento</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Bot className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">IA Conversacional Avançada</h4>
                      <p className="text-gray-300">Chatbot inteligente que entende contexto, aprende com interações e oferece respostas personalizadas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Database className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Integração Completa</h4>
                      <p className="text-gray-300">Conecta com Google Sheets, CRM, WhatsApp, Instagram e todas suas ferramentas de trabalho.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Relatórios Inteligentes</h4>
                      <p className="text-gray-300">Analytics avançado com insights automáticos e relatórios personalizados em tempo real.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h4 className="text-2xl font-bold text-white mb-6 text-center">Planos EssencialBot</h4>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-xl font-bold text-white">NÍVEL 2 - INTEGRADO</h5>
                      <div className="text-right">
                        <div className="text-sm text-gray-300">Setup</div>
                        <div className="text-lg font-bold text-cyan-400">R$ 397</div>
                      </div>
                    </div>
                    <div className="text-right mb-4">
                      <div className="text-sm text-gray-300">Mensalidade</div>
                      <div className="text-2xl font-bold text-white">R$ 397</div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />EssencialBot personalizado</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Integração Google Sheets</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Automação Make/Zapier</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Relatórios automáticos</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Suporte prioritário</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl p-6 border border-purple-400/30">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-xl font-bold text-white">NÍVEL 3 - AVANÇADO</h5>
                      <div className="text-right">
                        <div className="text-sm text-gray-300">Setup</div>
                        <div className="text-lg font-bold text-purple-400">R$ 497</div>
                      </div>
                    </div>
                    <div className="text-right mb-4">
                      <div className="text-sm text-gray-300">Mensalidade</div>
                      <div className="text-2xl font-bold text-white">R$ 497</div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Tudo do Nível 2 +</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Machine Learning avançado</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Análise preditiva</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Multi-plataformas</li>
                      <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-400 mr-2" />Site personalizado</li>
                    </ul>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    handleServiceClick('automation_contact');
                  }}
                  className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Solicitar Demonstração
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-cyan-500/20 rounded-2xl w-fit mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Multi-Plataforma</h4>
                <p className="text-gray-300 text-sm">WhatsApp, Instagram, Site, Telegram e muito mais</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-blue-500/20 rounded-2xl w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">24/7 Disponível</h4>
                <p className="text-gray-300 text-sm">Atendimento ininterrupto, mesmo quando você dorme</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-purple-500/20 rounded-2xl w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">ROI Comprovado</h4>
                <p className="text-gray-300 text-sm">Redução de até 95% nos custos de atendimento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Accounting Section */}
        <section id="accounting" className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Escritório <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Contábil</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contabilidade completa com tecnologia avançada e automação inteligente
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Serviços Contábeis Completos</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Abertura de empresas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Contabilidade mensal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Obrigações fiscais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">SPED Contábil/Fiscal</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Departamento pessoal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Planejamento tributário</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Relatórios gerenciais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Consultoria fiscal</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-400/30">
                  <h4 className="text-lg font-bold text-white mb-3">🤖 Diferencial: Contabilidade + IA</h4>
                  <p className="text-gray-300 text-sm">
                    Único escritório que combina contabilidade tradicional com automação IA. 
                    Seus relatórios, obrigações e análises são gerados automaticamente pelo EssencialBot.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Tecnologia Contábil Avançada</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <FileText className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Automação Fiscal</h4>
                      <p className="text-gray-300">SPED, ECF, DEFIS e todas obrigações geradas automaticamente com IA.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <PieChart className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Dashboard Inteligente</h4>
                      <p className="text-gray-300">Acompanhe sua situação fiscal e financeira em tempo real com relatórios automáticos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Compliance Garantido</h4>
                      <p className="text-gray-300">IA monitora mudanças na legislação e ajusta automaticamente seus processos.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                    <div className="text-sm text-gray-300">Compliance</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">24h</div>
                    <div className="text-sm text-gray-300">Entrega</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Consultoria <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Empresarial</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Soluções estratégicas para empresas em qualquer situação, da recuperação ao crescimento
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl w-fit mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Gestão Estratégica</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-purple-400 mr-2" />Planejamento estratégico</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-purple-400 mr-2" />Gestão financeira</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-purple-400 mr-2" />Controle de fluxo de caixa</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-purple-400 mr-2" />Análise de viabilidade</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-red-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl w-fit mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Recuperação Judicial</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-red-400 mr-2" />Reestruturação empresarial</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-red-400 mr-2" />Negociação com credores</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-red-400 mr-2" />Plano de recuperação</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-red-400 mr-2" />Acompanhamento judicial</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Crédito Empresarial</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-green-400 mr-2" />Busca em factorings</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-green-400 mr-2" />Análise de propostas</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-green-400 mr-2" />Negociação de taxas</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 text-green-400 mr-2" />Estruturação financeira</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-3xl p-8 border border-purple-400/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">🚨 Especialistas em Casos Críticos</h3>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Nossa equipe tem experiência comprovada em recuperação de empresas em situação crítica. 
                  Já salvamos centenas de negócios da falência com estratégias inovadoras e tecnologia avançada.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">200+</div>
                  <div className="text-gray-300">Empresas Recuperadas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">95%</div>
                  <div className="text-gray-300">Taxa de Sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">15 anos</div>
                  <div className="text-gray-300">Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Educação <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Especializada</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Treinamentos avançados para capacitar sua equipe nas tecnologias do futuro
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 text-center">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl w-fit mx-auto mb-4">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">IA Empresarial</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fundamentos de IA, implementação de chatbots, automação e machine learning aplicado aos negócios.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Contabilidade 4.0</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Contabilidade digital, SPED automatizado, análise de dados contábeis e compliance inteligente.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Controladoria</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Controles internos, auditoria, compliance, gestão de riscos e governança corporativa.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl w-fit mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Gestão Financeira</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Fluxo de caixa, análise financeira, orçamento empresarial e planejamento estratégico.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-400/30">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">🎓 Metodologia Exclusiva</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
                      <span className="text-gray-300">Aulas práticas com projetos reais</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
                      <span className="text-gray-300">Certificação reconhecida pelo mercado</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
                      <span className="text-gray-300">Mentoria individual especializada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
                      <span className="text-gray-300">Acesso vitalício ao conteúdo</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-400" />
                      <span className="text-gray-300">Comunidade exclusiva de alunos</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/5 rounded-2xl p-6 mb-6">
                    <div className="text-4xl font-bold text-orange-400 mb-2">1000+</div>
                    <div className="text-gray-300">Profissionais Capacitados</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-red-400 mb-1">4.9/5</div>
                      <div className="text-sm text-gray-300">Avaliação</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-400 mb-1">98%</div>
                      <div className="text-sm text-gray-300">Aprovação</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agents Section */}
        <section id="agents" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agentes <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Especializados</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                IA personalizada para cada área do seu negócio com especialização setorial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl w-fit mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agente Vendas</h3>
                <p className="text-gray-300 leading-relaxed">
                  Especializado em qualificação de leads, apresentação de produtos e fechamento de vendas com técnicas avançadas de persuasão.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mb-4">
                  <Headphones className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agente Suporte</h3>
                <p className="text-gray-300 leading-relaxed">
                  Atendimento técnico especializado, resolução de problemas e escalação inteligente para equipe humana quando necessário.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl w-fit mb-4">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agente Marketing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Criação de conteúdo, análise de campanhas, segmentação de audiência e otimização de conversões automatizada.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl w-fit mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agente RH</h3>
                <p className="text-gray-300 leading-relaxed">
                  Triagem de currículos, agendamento de entrevistas, onboarding de funcionários e gestão de benefícios.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl w-fit mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">EDA SOCIAL</h3>
                <p className="text-gray-300 leading-relaxed">
                  Nosso compromisso social: agentes de IA especializados para apoiar pessoas com autismo, síndrome de Down e ansiedade. Acesse: www.edasocial.org
                </p>
                <a 
                  href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre o EDA SOCIAL - Projeto de Inclusão.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleContactClick('whatsapp_social')}
                  className="inline-flex items-center mt-4 text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold"
                >
                  Conhecer projeto <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl w-fit mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agente Financeiro</h3>
                <p className="text-gray-300 leading-relaxed">
                  Análise de fluxo de caixa, controle de inadimplência, negociação de pagamentos e relatórios financeiros automáticos.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-3xl p-8 border border-yellow-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🎯 Personalização Total</h3>
                <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                  Cada agente é treinado especificamente para seu negócio, com conhecimento do seu produto, 
                  processo e linguagem da sua empresa. Não é um chatbot genérico, é seu funcionário digital especializado.
                </p>
                <button 
                  onClick={() => {
                    scrollToSection('contact');
                    handleServiceClick('agents_contact');
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full font-semibold text-white hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Criar Meu Agente Personalizado
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                O que nossos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">clientes</span> dizem
              </h2>
              <p className="text-xl text-gray-300">Resultados reais de empresas que transformaram seus negócios</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "O EssencialBot revolucionou nosso atendimento. Reduzimos 90% dos custos e aumentamos a satisfação dos clientes. 
                  É como ter uma equipe de 10 atendentes trabalhando 24h por dia."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Maria Clara</div>
                    <div className="text-gray-400 text-sm">CEO, TechSolutions</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "A consultoria salvou nossa empresa da falência. Em 6 meses, saímos do vermelho e hoje temos o melhor resultado da história. 
                  Profissionais excepcionais!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">RS</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Roberto Silva</div>
                    <div className="text-gray-400 text-sm">Diretor, Indústria Silva</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "O treinamento em IA transformou nossa equipe. Agora somos referência em automação no nosso setor. 
                  Investimento que se paga em poucos meses."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AF</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Ana Ferreira</div>
                    <div className="text-gray-400 text-sm">CTO, DigitalCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Vamos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Conversar</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pronto para revolucionar seu negócio? Entre em contato e descubra como podemos ajudar
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Entre em Contato</h3>
                
                <div className="space-y-6">
                  <a 
                    href={`https://wa.me/${config.WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os serviços do Exército de Agentes.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleContactClick('whatsapp')}
                    className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-green-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-green-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">WhatsApp</div>
                      <div className="text-gray-300">(11) 91175-7113</div>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${config.EMAIL_CONTACT}`}
                    onClick={() => handleContactClick('email')}
                    className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">E-mail</div>
                      <div className="text-gray-300">{config.EMAIL_CONTACT}</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="p-3 bg-purple-500 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Localização</div>
                      <div className="text-gray-300">São Paulo, SP - Brasil</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="p-3 bg-orange-500 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Horário de Atendimento</div>
                      <div className="text-gray-300">Segunda a Sexta: 8h às 18h</div>
                      <div className="text-gray-300">Sábado: 8h às 12h</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-400/30">
                  <h4 className="text-lg font-bold text-white mb-3">🚀 Resposta Rápida</h4>
                  <p className="text-gray-300 text-sm">
                    Respondemos todas as mensagens em até 2 horas durante o horário comercial. 
                    Para urgências, use o WhatsApp para resposta imediata.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Solicite uma Demonstração</h3>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Nome da sua empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white">
                      <option value="">Selecione um serviço</option>
                      <option value="automation">Automação IA - EssencialBot</option>
                      <option value="accounting">Contabilidade</option>
                      <option value="consulting">Consultoria Empresarial</option>
                      <option value="education">Treinamentos</option>
                      <option value="agents">Agentes Especializados</option>
                      <option value="eda_social">EDA SOCIAL</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Conte-nos mais sobre sua necessidade..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      handleContactClick('form_submit');
                    }}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-black/40 border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Bot className="h-8 w-8 text-cyan-400" />
                  <span className="text-xl font-bold text-white">Exército de Agentes</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Revolucionando negócios com inteligência artificial avançada e automação inteligente.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Serviços</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><button onClick={() => scrollToSection('automation')} className="hover:text-white transition-colors">Automação IA</button></li>
                  <li><button onClick={() => scrollToSection('accounting')} className="hover:text-white transition-colors">Contabilidade</button></li>
                  <li><button onClick={() => scrollToSection('consulting')} className="hover:text-white transition-colors">Consultoria</button></li>
                  <li><button onClick={() => scrollToSection('education')} className="hover:text-white transition-colors">Educação</button></li>
                  <li><button onClick={() => setShowEdaSocial(true)} className="hover:text-white transition-colors">EDA SOCIAL</button></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Contato</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>WhatsApp: (11) 91175-7113</li>
                  <li>E-mail: {config.EMAIL_CONTACT}</li>
                  <li>São Paulo, SP - Brasil</li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">EDA SOCIAL</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Projeto de inclusão digital com agentes especializados para autismo, síndrome de Down e ansiedade.
                </p>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>🌐 www.edasocial.org</div>
                  <div>📧 contato@edasocial.org</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700/50 mt-8 pt-8 text-center">
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