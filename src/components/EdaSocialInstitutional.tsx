import React from 'react';
import { 
  Heart, 
  Users, 
  Target, 
  Eye, 
  Lightbulb, 
  HandHeart, 
  Brain, 
  Accessibility, 
  Globe, 
  Shield, 
  Sparkles,
  ArrowRight,
  Building,
  Zap,
  BookOpen,
  Gift
} from 'lucide-react';

const EdaSocialInstitutional: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Heart className="h-6 w-6 text-pink-300" />
            <span className="text-white font-semibold">EDA SOCIAL - AGENTES DE INCLUSÃO</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tecnologia que
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Abraça</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Onde a inovação encontra a humanidade. Transformamos vidas através da tecnologia inclusiva, 
            criando pontes digitais para quem mais precisa de acolhimento e oportunidades.<br/>
            <span className="text-lg text-cyan-300">🌐 www.edasocial.org | 📧 contato@edasocial.org</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.edasocial.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center"
            >
              Conhecer o Projeto
            </a>
            <a 
              href="mailto:contato@edasocial.org"
              className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 inline-block text-center"
            >
              Como Ajudar
            </a>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Essência</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Três pilares que guiam cada decisão, cada linha de código e cada abraço digital que oferecemos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">MISSÃO</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                <strong className="text-pink-300">Democratizar o acesso à tecnologia inclusiva</strong>, criando 
                agentes digitais especializados que oferecem suporte emocional, orientação prática e 
                oportunidades de crescimento para pessoas em situação de vulnerabilidade, neurodivergentes 
                e suas famílias, transformando barreiras em pontes para a inclusão social.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">VISÃO</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                <strong className="text-blue-300">Ser a maior rede de agentes de inclusão digital do Brasil</strong>, 
                reconhecida por revolucionar o cuidado através da tecnologia, onde cada pessoa encontra 
                o suporte que precisa, independente de suas limitações, criando um ecossistema nacional 
                de acolhimento e empoderamento.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">VALORES</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-purple-300">Empatia Tecnológica:</strong> IA com alma humana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-purple-300">Inclusão Radical:</strong> Todos os corpos, todas as mentes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-purple-300">Transparência Total:</strong> Propósito claro e ações abertas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-purple-300">Inovação Responsável:</strong> Tecnologia a serviço do bem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Jornada</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A história de como uma pergunta simples se transformou em uma revolução de inclusão digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">O Despertar</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Tudo começou com uma pergunta que ecoou nos corredores da <strong className="text-yellow-300">Exército de Agentes</strong>: 
                  <em className="text-yellow-200">"E se nossa tecnologia pudesse abraçar quem nunca teve acesso a ela?"</em>
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">A Transformação</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Percebemos que nosso sucesso empresarial só fazia sentido se pudéssemos <strong className="text-green-300">multiplicar oportunidades</strong>. 
                  Assim nasceu a EDA SOCIAL: não como um projeto paralelo, mas como a alma social da nossa tecnologia.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">A Expansão</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Do que começou como agentes para <strong className="text-blue-300">autismo e síndrome de Down</strong>, 
                  evoluímos para um ecossistema completo: cursos gratuitos, campanhas solidárias, 
                  apoio a famílias e uma rede nacional de cuidado digital.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl p-8 border border-white/10">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3">
                    <Building className="h-5 w-5 text-cyan-300" />
                    <span className="text-white font-semibold">Exército de Agentes</span>
                  </div>
                  
                  <ArrowRight className="h-8 w-8 text-white mx-auto" />
                  
                  <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full px-6 py-3 border border-pink-400/30">
                    <Heart className="h-5 w-5 text-pink-300" />
                    <span className="text-white font-semibold">EDA SOCIAL</span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    <strong className="text-white">Transparência total:</strong> Somos orgulhosamente apoiados pela 
                    Exército de Agentes, que fornece toda infraestrutura tecnológica e administrativa, 
                    permitindo que 100% das doações vão direto para quem precisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura Organizacional */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Cultura</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Os princípios que moldam cada interação, cada código e cada abraço digital que oferecemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Humanidade com Método</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cada agente é treinado para acolher com empatia genuína e responder com precisão técnica
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Integração Inteligente</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Aproveitamos toda infraestrutura empresarial mantendo total independência de propósito social
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Escuta Ativa Total</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Diálogo constante com usuários, famílias, cuidadores e toda rede de apoio
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group text-center">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Excelência no Cuidado</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Servir com excelência técnica e humana, sem esperar retorno, apenas transformação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Agentes Especializados */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Agentes</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada agente é especializado e treinado para oferecer o melhor suporte para diferentes necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Agente Autismo</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Especializado em comunicação adaptada, rotinas estruturadas e apoio sensorial para pessoas no espectro autista
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-purple-500 rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Agente Síndrome de Down</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Focado em desenvolvimento de autonomia, comunicação clara e apoio educacional personalizado
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-green-500 rounded-xl">
                  <Accessibility className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Agente Mobilidade</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Orientação sobre acessibilidade, adaptações e recursos para pessoas com mobilidade reduzida
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-6 border border-orange-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-500 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Agente Famílias</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Suporte emocional e orientação prática para familiares e cuidadores
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-2xl p-6 border border-indigo-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-indigo-500 rounded-xl">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Agente Educação</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Cursos gratuitos de IA, educação financeira e capacitação profissional
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-2xl p-6 border border-pink-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-pink-500 rounded-xl">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Agente Solidário</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Coordena campanhas de arrecadação e conecta doadores com quem precisa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Faça Parte Desta <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Revolução</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Cada clique, cada interação, cada vida transformada nos motiva a continuar. 
            Junte-se a nós nesta jornada de inclusão digital e impacto social.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contato@edasocial.org"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-semibold text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <HandHeart className="h-5 w-5" />
              <span>Quero Ajudar</span>
            </a>
            <a 
              href="https://www.edasocial.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <Users className="h-5 w-5" />
              <span>Preciso de Apoio</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdaSocialInstitutional;