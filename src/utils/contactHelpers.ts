// Utilitários para gerar textos automáticos de contato

export const generateEmailText = (emailType: string): { subject: string; body: string } => {
  const baseInfo = {
    name: '[SEU NOME]',
    company: '[SUA EMPRESA]',
    phone: '[SEU TELEFONE]'
  };

  switch (emailType) {
    case 'sac':
      return {
        subject: 'Solicitação de Informações - Exército de Agentes',
        body: `Olá equipe do Exército de Agentes,

Meu nome é ${baseInfo.name} e represento a empresa ${baseInfo.company}.

Gostaria de receber mais informações sobre:
[ ] EssencialBot - Automação IA
[ ] Escritório Contábil
[ ] Consultoria Empresarial
[ ] Educação Profissional
[ ] EDA SOCIAL

Telefone para contato: ${baseInfo.phone}

Aguardo retorno.

Atenciosamente,
${baseInfo.name}`
      };

    case 'financeiro':
      return {
        subject: 'Questão Financeira - Exército de Agentes',
        body: `Olá equipe Financeira,

Meu nome é ${baseInfo.name} da empresa ${baseInfo.company}.

Preciso de esclarecimentos sobre:
[ ] Cobrança/Fatura
[ ] Formas de pagamento
[ ] Negociação
[ ] Outros: ___________

Telefone: ${baseInfo.phone}

Aguardo contato.

Atenciosamente,
${baseInfo.name}`
      };

    case 'paulo':
      return {
        subject: 'Contato Direto - Paulo Henrique',
        body: `Olá Paulo Henrique,

Meu nome é ${baseInfo.name} da empresa ${baseInfo.company}.

Gostaria de conversar sobre:
[ ] Consultoria estratégica
[ ] Automação personalizada
[ ] Parceria comercial
[ ] Outros: ___________

Telefone: ${baseInfo.phone}

Aguardo seu retorno.

Atenciosamente,
${baseInfo.name}`
      };

    case 'eda_social':
      return {
        subject: 'EDA SOCIAL - Projeto de Inclusão Digital',
        body: `Olá equipe EDA SOCIAL,

Meu nome é ${baseInfo.name}.

Gostaria de:
[ ] Conhecer melhor o projeto
[ ] Oferecer ajuda/voluntariado
[ ] Solicitar apoio
[ ] Fazer doação
[ ] Parceria institucional

Telefone: ${baseInfo.phone}

Obrigado pelo trabalho social que vocês fazem!

Atenciosamente,
${baseInfo.name}`
      };

    default:
      return {
        subject: 'Contato - Exército de Agentes',
        body: `Olá,

Meu nome é ${baseInfo.name} e gostaria de mais informações sobre os serviços do Exército de Agentes.

Telefone: ${baseInfo.phone}

Aguardo retorno.

Atenciosamente,
${baseInfo.name}`
      };
  }
};

export const generateWhatsAppText = (): string => {
  return `Olá! 👋

Vim através do site do Exército de Agentes e gostaria de saber mais sobre:

🤖 *EssencialBot* - Automação IA
📊 *Escritório Contábil* 
💼 *Consultoria Empresarial*
🎓 *Educação Profissional*
❤️ *EDA SOCIAL* - Projeto de Inclusão

Podem me ajudar?

Obrigado! 😊`;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Erro ao copiar texto:', err);
    return false;
  }
};

export const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
  // Criar notificação visual
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  }`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
};