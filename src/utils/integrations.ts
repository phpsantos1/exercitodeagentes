import { config } from '../config/environment';

// Função para enviar dados para Google Sheets via webhook
export const sendToGoogleSheets = async (data: any, type: 'pre-cadastro' | 'cadastro-final' | 'contato') => {
  try {
    const webhookUrl = config.WEBHOOK_URLS[type.toUpperCase().replace('-', '_') as keyof typeof config.WEBHOOK_URLS];
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'website'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    throw error;
  }
};

// Função para enviar mensagem via WhatsApp (Z-API)
export const sendWhatsAppMessage = async (phone: string, message: string) => {
  try {
    // Implementar integração com Z-API
    const response = await fetch('https://api.z-api.io/instances/YOUR_INSTANCE/token/YOUR_TOKEN/send-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        message: message
      })
    });

    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar WhatsApp:', error);
    throw error;
  }
};

// Função para validar CNPJ/CPF
export const validateDocument = (document: string): boolean => {
  const cleanDoc = document.replace(/\D/g, '');
  
  if (cleanDoc.length === 11) {
    // Validação CPF
    return validateCPF(cleanDoc);
  } else if (cleanDoc.length === 14) {
    // Validação CNPJ
    return validateCNPJ(cleanDoc);
  }
  
  return false;
};

const validateCPF = (cpf: string): boolean => {
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.charAt(9))) return false;
  
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  
  return remainder === parseInt(cpf.charAt(10));
};

const validateCNPJ = (cnpj: string): boolean => {
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  
  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  const digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;
  
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;
  
  length = length + 1;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;
  
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  
  return result === parseInt(digits.charAt(1));
};