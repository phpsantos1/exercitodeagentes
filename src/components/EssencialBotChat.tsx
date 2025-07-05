import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, ExternalLink } from 'lucide-react';

const EssencialBotChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your bot API
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const gptLinks = [
    {
      name: "EA EssencialBot Concierge",
      description: "Atendimento geral que direciona para especialistas específicos",
      url: "https://chatgpt.com/g/g-68570ffa4eac8191960f0475b576fb77-ea-essencialbot-concierge",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "EA Triagem Contábil",
      description: "Especialista em contabilidade e questões fiscais",
      url: "https://chatgpt.com/g/g-68571184fa60819187a1c1a4c459c153-ea-triagem-contabil",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "EA Triagem Consultoria Empresarial",
      description: "Consultoria empresarial e estratégica",
      url: "https://chatgpt.com/g/g-685713a0a450819181b59fee416ebf2f-ea-triagem-consultoria-empresarial",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "EA Triagem Educação Pro",
      description: "Cursos e capacitação profissional",
      url: "https://chatgpt.com/g/g-6857154789bc8191bc1d7840adae7382-ea-triagem-educacao-pro",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "EA Triagem IA - Planos 2 e 3",
      description: "Especialista em planos Intermediário e Avançado de IA",
      url: "https://chatgpt.com/g/g-685716af22f881918330545239763a46-ea-triagem-de-ia-planos-2-e-3",
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "EA Triagem IA Personal",
      description: "Atendimento personalizado para soluções de IA customizadas",
      url: "https://chatgpt.com/g/g-685717cd0c7481919dfaf0d8654ef085-ea-triagem-ia-personal",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "EDA SOCIAL Bot",
      description: "Projeto de inclusão digital e apoio social",
      url: "https://chatgpt.com/g/g-eda-social-bot",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-96 h-[500px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">EssencialBot - Atendentes Especializados</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Olá! Escolha o atendente especializado para sua necessidade:</strong>
              </p>
            </div>

            {/* GPT Links */}
            <div className="space-y-3">
              {gptLinks.map((gpt, index) => (
                <a
                  key={index}
                  href={gpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-3 rounded-lg bg-gradient-to-r ${gpt.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{gpt.name}</h4>
                      <p className="text-xs opacity-90">{gpt.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-75 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mt-4 rounded">
              <p className="text-xs text-yellow-800">
                <strong>💡 Dica:</strong> Cada atendente é especializado em sua área. 
                Escolha o mais adequado para obter respostas mais precisas!
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50 rounded-b-lg">
            <div className="text-center">
              <p className="text-xs text-gray-600 mb-2">
                Atendimento 24/7 via WhatsApp:
              </p>
              <a
                href="https://wa.me/5511911757113?text=Olá! Gostaria de falar com um atendente humano."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>(11) 91175-7113</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <Bot className="h-6 w-6" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </>
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="fixed bottom-20 right-4 bg-black text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
          Fale com nossos atendentes especializados
        </div>
      )}
    </>
  );
};

export default EssencialBotChat;