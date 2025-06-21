// Configurações de ambiente para produção
export const config = {
  // URLs de produção
  SITE_URL: 'https://www.exercitodeagentes.com.br',
  API_BASE_URL: 'https://api.exercitodeagentes.com.br',
  
  // Integrações
  WHATSAPP_NUMBER: '5511911757113',
  EMAIL_CONTACT: 'sac@exercitodeagentes.com.br',
  EMAIL_FINANCIAL: 'financeiro@exercitodeagentes.com.br',
  
  // Google Analytics (usar variável de ambiente)
  GA_TRACKING_ID: import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX',
  
  // Meta Pixel (usar variável de ambiente)
  META_PIXEL_ID: import.meta.env.VITE_META_PIXEL_ID || 'XXXXXXXXXX',
  
  // Webhooks para integrações (usar variáveis de ambiente)
  WEBHOOK_URLS: {
    PRE_CADASTRO: import.meta.env.VITE_WEBHOOK_PRE_CADASTRO || 'https://hook.integromat.com/xxxxxxxx',
    CADASTRO_FINAL: import.meta.env.VITE_WEBHOOK_CADASTRO_FINAL || 'https://hook.integromat.com/xxxxxxxx',
    CONTACT_FORM: import.meta.env.VITE_WEBHOOK_CONTACT || 'https://hook.integromat.com/xxxxxxxx'
  },
  
  // Google Sheets IDs (substitua pelos seus)
  GOOGLE_SHEETS: {
    PRE_CADASTRO: '1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    CADASTRO_FINAL: '1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    CONTATOS: '1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
  }
};