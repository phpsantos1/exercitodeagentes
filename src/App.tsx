import React, { useEffect, useState } from 'react';
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
import ContactModal from './components/ContactModal';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import { config } from './config/environment';
import { initializeAnalytics, trackEvent } from './utils/analytics';

const App: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    initializeAnalytics();
  }, []);

  const handleContactClick = () => {
    trackEvent('contact_clicked');
    setShowContactModal(true);
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <SEOHead />
        
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    EssencialBot
                  </h1>
                  <p className="text-sm text-gray-600">Inteligência Artificial Avançada</p>
                </div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Recursos
                </a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Sobre
                </a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contato
                </a>
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Começar Agora
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                O Futuro da
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Inteligência Artificial
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Revolucione sua experiência com nossa IA avançada. Automatize tarefas, 
                obtenha insights inteligentes e transforme sua produtividade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleContactClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Experimente Grátis
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Recursos Poderosos
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Descubra como nossa IA pode transformar sua forma de trabalhar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Processamento Rápido
                  </h4>
                </div>
                <p className="text-gray-600">
                  Respostas instantâneas com processamento de linguagem natural avançado
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Aprendizado Contínuo
                  </h4>
                </div>
                <p className="text-gray-600">
                  IA que evolui e se adapta às suas necessidades específicas
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Segurança Avançada
                  </h4>
                </div>
                <p className="text-gray-600">
                  Proteção de dados com criptografia de ponta e privacidade garantida
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Component */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Converse com a IA
              </h3>
              <p className="text-xl text-gray-600">
                Experimente nossa inteligência artificial agora mesmo
              </p>
            </div>
            <EssencialBotChat />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <EdaSocialInstitutional />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">EssencialBot</span>
                </div>
                <p className="text-gray-400">
                  Transformando o futuro com inteligência artificial avançada
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Produto</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Empresa</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold mb-4">Contato</h5>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>contato@essencialbot.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+55 (11) 9999-9999</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 EssencialBot. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>

        {/* Modals */}
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}
        
        {showAdminLogin && (
          <AdminLogin 
            onClose={() => setShowAdminLogin(false)}
            onLogin={() => {
              setIsAdmin(true);
              setShowAdminLogin(false);
            }}
          />
        )}
        
        {isAdmin && (
          <AdminPanel onClose={() => setIsAdmin(false)} />
        )}
      </div>
    </HelmetProvider>
  );
};

export default App;