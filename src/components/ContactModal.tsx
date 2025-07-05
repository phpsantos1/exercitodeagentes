import React, { useState } from 'react';
import { X, Copy, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { generateEmailText, generateWhatsAppText, copyToClipboard, showNotification } from '../utils/contactHelpers';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactType: 'email' | 'whatsapp';
  emailType?: string;
  emailAddress?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  contactType,
  emailType = 'sac',
  emailAddress = 'sac@exercitodeagentes.com.br'
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async (text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      showNotification('Texto copiado para a área de transferência!');
      setTimeout(() => setCopied(false), 2000);
    } else {
      showNotification('Erro ao copiar texto', 'error');
    }
  };

  const handleEmailClick = (subject: string, body: string) => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const handleWhatsAppClick = (text: string) => {
    const whatsappLink = `https://wa.me/5511911757113?text=${encodeURIComponent(text)}`;
    window.open(whatsappLink, '_blank');
  };

  if (contactType === 'email') {
    const { subject, body } = generateEmailText(emailType);
    const fullEmailText = `Para: ${emailAddress}\nAssunto: ${subject}\n\n${body}`;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-xl">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Enviar E-mail</h3>
                <p className="text-gray-600">{emailAddress}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">Texto Sugerido:</span>
                <button
                  onClick={() => handleCopy(fullEmailText)}
                  className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                >
                  <Copy className="h-4 w-4" />
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              <div className="bg-white rounded border p-4">
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Para:</strong> {emailAddress}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <strong>Assunto:</strong> {subject}
                </div>
                <div className="text-sm text-gray-800 whitespace-pre-line border-t pt-4">
                  {body}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleEmailClick(subject, body)}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Abrir no Cliente de E-mail</span>
              </button>
              <button
                onClick={() => handleCopy(fullEmailText)}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Copy className="h-5 w-5" />
                <span>Copiar Texto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (contactType === 'whatsapp') {
    const whatsappText = generateWhatsAppText();

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-xl">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Enviar WhatsApp</h3>
                <p className="text-gray-600">(11) 91175-7113</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-700">Mensagem Sugerida:</span>
                <button
                  onClick={() => handleCopy(whatsappText)}
                  className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
                >
                  <Copy className="h-4 w-4" />
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
              <div className="bg-white rounded border p-4">
                <div className="text-sm text-gray-800 whitespace-pre-line">
                  {whatsappText}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleWhatsAppClick(whatsappText)}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span>Abrir no WhatsApp</span>
              </button>
              <button
                onClick={() => handleCopy(whatsappText)}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Copy className="h-5 w-5" />
                <span>Copiar Mensagem</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ContactModal;