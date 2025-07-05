# Exército de Agentes - Website

Site oficial do Exército de Agentes com EssencialBot - Automação Inteligente para empresas e EDA SOCIAL - Projeto de Inclusão Digital.

## 🚀 Deploy Automático

Este projeto está configurado para deploy automático no Netlify via GitHub.

### Configuração no Netlify:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: 18

### Domínio Personalizado:

- Domínio principal: `www.exercitodeagentes.com.br`
- Configurar DNS no GoDaddy para apontar para Netlify

## 📋 Configurações Necessárias

### 1. Variáveis de Ambiente no Netlify:

```
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=XXXXXXXXXX
VITE_WEBHOOK_PRE_CADASTRO=https://hook.integromat.com/xxxxxxxx
VITE_WEBHOOK_CADASTRO_FINAL=https://hook.integromat.com/xxxxxxxx
VITE_WEBHOOK_CONTACT=https://hook.integromat.com/xxxxxxxx
```

### 2. DNS no GoDaddy:

Para conectar seu domínio GoDaddy ao Netlify:

1. No painel Netlify, vá em **Domain Settings**
2. Adicione o domínio `exercitodeagentes.com.br`
3. Configure os seguintes registros DNS no GoDaddy:

```
Tipo: CNAME
Nome: www
Valor: [seu-site].netlify.app

Tipo: A
Nome: @
Valor: 75.2.60.5
```

## 🛠️ Desenvolvimento Local

```bash
npm install
npm run dev
```

## 📦 Build para Produção

```bash
npm run build
```

## 🔧 Integrações

- **EDA SOCIAL**: www.edasocial.org | contato@edasocial.org
- **Google Analytics**: Configurar ID no arquivo de ambiente
- **Meta Pixel**: Configurar ID no arquivo de ambiente  
- **Webhooks**: Make.com/Zapier para formulários
- **WhatsApp**: Z-API para automação

## 📞 Suporte

- Email: sac@exercitodeagentes.com.br
- WhatsApp: (11) 91175-7113