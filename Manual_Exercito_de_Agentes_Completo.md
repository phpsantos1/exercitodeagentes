# MANUAL COMPLETO - EXÉRCITO DE AGENTES
## USO, MANUTENÇÃO E AUTOMAÇÃO DO SITE

---

### **ÍNDICE**

1. [Visão Geral do Sistema](#1-visão-geral-do-sistema)
2. [Arquitetura Técnica](#2-arquitetura-técnica)
3. [Configuração Inicial](#3-configuração-inicial)
4. [GitHub - Controle de Versão](#4-github---controle-de-versão)
5. [Netlify - Deploy e Hospedagem](#5-netlify---deploy-e-hospedagem)
6. [Gestão de Conteúdo](#6-gestão-de-conteúdo)
7. [Automações e Integrações](#7-automações-e-integrações)
8. [Manutenção e Atualizações](#8-manutenção-e-atualizações)
9. [Monitoramento e Analytics](#9-monitoramento-e-analytics)
10. [Backup e Segurança](#10-backup-e-segurança)
11. [Troubleshooting](#11-troubleshooting)
12. [Escalabilidade](#12-escalabilidade)

---

## **1. VISÃO GERAL DO SISTEMA**

### **1.1 Descrição do Projeto**
O site do Exército de Agentes é uma plataforma digital completa que apresenta os serviços de automação IA, contabilidade, consultoria e educação da empresa. O sistema integra múltiplas ferramentas para criar uma experiência automatizada e eficiente.

### **1.2 Objetivos Principais**
- **Captação de Leads**: Formulários inteligentes e chatbot interativo
- **Apresentação de Serviços**: Showcase profissional dos produtos
- **Automação de Processos**: Integração com ferramentas de automação
- **Conversão de Vendas**: Fluxos automatizados de vendas

### **1.3 Público-Alvo**
- Empresários e gestores
- Profissionais de contabilidade
- Empresas em busca de automação
- Estudantes e profissionais em capacitação

### **1.4 Métricas de Sucesso**
- Taxa de conversão: 3-5%
- Tempo de permanência: >2 minutos
- Leads qualificados: 50+ por mês
- Interações com chatbot: 80%

---

## **2. ARQUITETURA TÉCNICA**

### **2.1 Stack Tecnológica**
```
Frontend: React + TypeScript + Tailwind CSS
Desenvolvimento: StackBlitz (Bolt.new)
Controle de Versão: GitHub
Hospedagem: Netlify
Domínio: GoDaddy (exercitodeagentes.com.br)
Chatbot: EssencialBot (GPT-4 personalizado)
Automação: Make.com + Zapier
Armazenamento: Google Sheets + Google Drive
Formulários: Tally + Formulários nativos
API WhatsApp: Z-API
Landing Pages: Carrd (páginas específicas)
CMS Adicional: WordPress (blog/conteúdo)
```

### **2.2 Fluxo de Dados**
```
Usuário → Site → Chatbot → Formulários → Google Sheets → Automações → WhatsApp/Email
```

### **2.3 Integrações Principais**
- **GPT-4**: Chatbot inteligente personalizado
- **Google Workspace**: Sheets, Drive, Gmail
- **Make.com**: Automações complexas
- **Zapier**: Integrações simples
- **Z-API**: Comunicação WhatsApp
- **Tally**: Formulários avançados
- **GitHub**: Controle de versão
- **Netlify**: Deploy automático

---

## **3. CONFIGURAÇÃO INICIAL**

### **3.1 Configuração do Domínio (GoDaddy)**

#### **3.1.1 Compra e Configuração DNS**
```
1. Acesse GoDaddy.com
2. Compre o domínio: exercitodeagentes.com.br
3. Configure DNS para apontar para Netlify:
   - Tipo: CNAME
   - Nome: www
   - Valor: [seu-site].netlify.app
   - TTL: 600

4. Configuração adicional:
   - A Record: @ → IP do Netlify
   - CNAME: www → [seu-site].netlify.app
```

#### **3.1.2 Configuração SSL**
```
1. No painel GoDaddy, ative SSL gratuito
2. No Netlify, configure SSL automático
3. Force HTTPS redirect
4. Configure HSTS headers
```

### **3.2 Configuração do EssencialBot (GPT)**

#### **3.2.1 Criação do Agente Personalizado**
```
1. Acesse OpenAI Platform
2. Crie novo GPT personalizado
3. Configure personalidade:
   - Nome: EssencialBot
   - Função: Assistente de vendas e suporte
   - Tom: Profissional e acolhedor
   - Conhecimento: Serviços da empresa
```

#### **3.2.2 Prompt Base do EssencialBot**
```
Você é o EssencialBot, assistente oficial do Exército de Agentes.

EMPRESA:
- Exército de Agentes
- Especializada em automação IA, contabilidade, consultoria e educação
- Foco em empresas de comércio e serviços

SERVIÇOS:
1. Automação IA (Níveis 1, 2 e 3)
   - Nível 1: Setup R$ 120 + R$ 50 manutenção
   - Nível 2: Setup R$ 397 + R$ 397/mês
   - Nível 3: Setup R$ 497 + R$ 497/mês

2. Escritório de Contabilidade
3. Consultoria Empresarial (incluindo recuperação judicial)
4. Educação e Treinamentos

PERSONALIDADE:
- Profissional mas acolhedor
- Focado em soluções
- Conhecedor técnico
- Orientado a resultados

OBJETIVO:
Qualificar leads, apresentar soluções e direcionar para conversão.
```

---

## **4. GITHUB - CONTROLE DE VERSÃO**

### **4.1 Configuração do Repositório**

#### **4.1.1 Criação do Repositório**
```bash
# 1. Criar repositório no GitHub
# Nome: exercito-de-agentes-site
# Descrição: Site oficial do Exército de Agentes
# Visibilidade: Private (recomendado)

# 2. Clonar localmente
git clone https://github.com/[usuario]/exercito-de-agentes-site.git
cd exercito-de-agentes-site

# 3. Configurar Git
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

#### **4.1.2 Estrutura de Branches**
```
main (produção)
├── develop (desenvolvimento)
├── feature/nova-funcionalidade
├── hotfix/correcao-urgente
└── release/v1.0.0
```

### **4.2 Workflow de Desenvolvimento**

#### **4.2.1 Fluxo GitFlow**
```bash
# 1. Criar nova feature
git checkout develop
git pull origin develop
git checkout -b feature/nova-funcionalidade

# 2. Desenvolver e commitar
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 3. Push da feature
git push origin feature/nova-funcionalidade

# 4. Criar Pull Request no GitHub
# 5. Review e merge para develop
# 6. Deploy para staging

# 7. Merge para main (produção)
git checkout main
git merge develop
git push origin main
```

#### **4.2.2 Convenção de Commits**
```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
test: testes
chore: tarefas de manutenção

Exemplo:
feat: adiciona chatbot EssencialBot
fix: corrige formulário de contato
docs: atualiza README
```

### **4.3 Configuração de Proteções**

#### **4.3.1 Branch Protection Rules**
```
Branch: main
□ Require pull request reviews before merging
□ Require status checks to pass before merging
□ Require branches to be up to date before merging
□ Include administrators
□ Restrict pushes that create files larger than 100MB
```

#### **4.3.2 GitHub Actions (CI/CD)**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
        VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod --dir=dist
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## **5. NETLIFY - DEPLOY E HOSPEDAGEM**

### **5.1 Configuração Inicial**

#### **5.1.1 Conectar GitHub ao Netlify**
```
1. Acesse netlify.com
2. Clique em "New site from Git"
3. Conecte com GitHub
4. Selecione repositório: exercito-de-agentes-site
5. Configure build settings:
   - Branch: main
   - Build command: npm run build
   - Publish directory: dist
```

#### **5.1.2 Configurações de Build**
```
Build command: npm run build
Publish directory: dist
Environment variables:
  VITE_SUPABASE_URL=sua_url_supabase
  VITE_SUPABASE_ANON_KEY=sua_chave_supabase
  VITE_GOOGLE_SHEETS_API=sua_api_google
  VITE_ZAPI_TOKEN=seu_token_zapi
  VITE_MAKE_WEBHOOK=sua_url_webhook_make
```

### **5.2 Configurações Avançadas**

#### **5.2.1 Redirects e Rewrites**
```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

#### **5.2.2 Deploy Previews**
```
1. Configurar deploy previews para PRs
2. Configurar branch deploys para develop
3. Configurar notificações Slack/Discord
4. Configurar split testing (A/B)
```

### **5.3 Domínio Personalizado**

#### **5.3.1 Configuração DNS**
```
1. No Netlify, vá para Domain settings
2. Adicione domínio: exercitodeagentes.com.br
3. Configure DNS records no GoDaddy:
   - A record: @ → 75.2.60.5
   - CNAME: www → [site-id].netlify.app
4. Aguarde propagação DNS (até 48h)
```

#### **5.3.2 SSL/TLS**
```
1. SSL automático via Let's Encrypt
2. Force HTTPS redirect
3. Configure HSTS
4. Verificar certificado válido
```

### **5.4 Monitoramento Netlify**

#### **5.4.1 Analytics**
```
1. Ativar Netlify Analytics
2. Configurar alertas de uptime
3. Monitorar Core Web Vitals
4. Configurar logs de acesso
```

#### **5.4.2 Forms (se necessário)**
```html
<!-- Formulário Netlify -->
<form name="contato" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contato" />
  <input type="text" name="nome" required />
  <input type="email" name="email" required />
  <textarea name="mensagem" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

---

## **6. GESTÃO DE CONTEÚDO**

### **6.1 Estrutura do Site**

#### **6.1.1 Seções Principais**
```
1. HOME - Apresentação geral
2. AUTOMAÇÃO IA - Planos e serviços
3. CONTABILIDADE - Serviços contábeis
4. CONSULTORIA - Consultoria empresarial
5. EDUCAÇÃO - Cursos e treinamentos
6. AGENTES - Modelos de IA
7. CONTATO - Formulários e informações
```

#### **6.1.2 Componentes Dinâmicos**
```
- EssencialBotChat: Chatbot interativo
- Formulários de contato
- Cards de serviços
- Seção de preços
- Galeria de agentes
```

### **6.2 Atualizações de Conteúdo**

#### **6.2.1 Alterações de Texto**
```typescript
// Arquivo: src/App.tsx
// Localizar seção específica e alterar conteúdo

// Exemplo - Alterar preços:
{
  level: 'NÍVEL 2 - INTEGRADO',
  price: 'SETUP: R$ 397 + R$ 397/MÊS', // Alterar aqui
  features: [
    'ESSENCIALBOT PERSONALIZADO',
    // Adicionar/remover features
  ]
}
```

#### **6.2.2 Processo de Atualização**
```bash
# 1. Criar branch para alteração
git checkout -b update/precos-2024

# 2. Fazer alterações no código
# Editar src/App.tsx

# 3. Testar localmente
npm run dev

# 4. Commit e push
git add .
git commit -m "update: atualiza preços 2024"
git push origin update/precos-2024

# 5. Criar Pull Request
# 6. Review e merge
# 7. Deploy automático via Netlify
```

### **6.3 WordPress Integration (Blog)**

#### **6.3.1 Configuração WordPress**
```
1. Instalar WordPress em subdomínio: blog.exercitodeagentes.com.br
2. Configurar tema personalizado
3. Instalar plugins essenciais:
   - Yoast SEO
   - Contact Form 7
   - WP Rocket (cache)
   - Wordfence (segurança)
```

#### **6.3.2 Integração com Site Principal**
```javascript
// Buscar posts do WordPress via API
const fetchBlogPosts = async () => {
  const response = await fetch('https://blog.exercitodeagentes.com.br/wp-json/wp/v2/posts');
  const posts = await response.json();
  return posts.slice(0, 3); // Últimos 3 posts
};

// Exibir no site principal
const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetchBlogPosts().then(setPosts);
  }, []);
  
  return (
    <section>
      <h2>Últimas do Blog</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3>{post.title.rendered}</h3>
          <p>{post.excerpt.rendered}</p>
          <a href={post.link}>Ler mais</a>
        </article>
      ))}
    </section>
  );
};
```

---

## **7. AUTOMAÇÕES E INTEGRAÇÕES**

### **7.1 Google Sheets - Base de Dados**

#### **7.1.1 Estrutura das Planilhas**

**Planilha: "Leads_Site"**
```
Colunas:
A - Timestamp
B - Nome
C - WhatsApp  
D - Email
E - Interesse
F - Tipo_Negocio
G - Status
H - Origem
I - Observações
J - Score_Lead
K - Data_Followup
L - Responsavel
```

**Planilha: "Cadastros_Finais"**
```
Colunas:
A - Timestamp
B - Nome_Completo
C - WhatsApp
D - Email
E - CNPJ_CPF
F - Endereco
G - Cidade
H - Estado
I - CEP
J - Produto_Escolhido
K - Forma_Pagamento
L - Status_Pagamento
M - Data_Inicio
N - Valor_Contrato
O - Observacoes
```

#### **7.1.2 Configuração da API Google Sheets**
```javascript
// 1. Ativar Google Sheets API
// 2. Criar credenciais de serviço
// 3. Compartilhar planilha com email de serviço

const SHEET_CONFIG = {
  spreadsheetId: 'SEU_ID_PLANILHA',
  range: 'Leads_Site!A:L',
  apiKey: 'SUA_API_KEY'
};

// Função para adicionar lead
const addLeadToSheet = async (leadData) => {
  const values = [
    [
      new Date().toISOString(),
      leadData.nome,
      leadData.whatsapp,
      leadData.email,
      leadData.interesse,
      leadData.tipoNegocio,
      'Novo',
      'Site',
      '',
      calculateLeadScore(leadData),
      new Date(Date.now() + 24*60*60*1000).toISOString(), // +1 dia
      'Equipe Comercial'
    ]
  ];
  
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_CONFIG.spreadsheetId,
    range: 'Leads_Site!A:L',
    valueInputOption: 'RAW',
    resource: { values }
  });
};
```

### **7.2 Make.com - Automações Avançadas**

#### **7.2.1 Cenário 1: Novo Lead do Site**
```
Trigger: Webhook (formulário site)
↓
Google Sheets: Adicionar linha
↓
Filtro: Verificar interesse
↓
Delay: 2 minutos
↓
WhatsApp (Z-API): Enviar mensagem personalizada
↓
Gmail: Enviar email de boas-vindas
↓
Google Calendar: Agendar follow-up
↓
Slack: Notificar equipe comercial
```

#### **7.2.2 Cenário 2: Cadastro Final (Venda)**
```
Trigger: Webhook (cadastro final)
↓
Google Sheets: Adicionar à planilha de vendas
↓
Filtro: Validar dados obrigatórios
↓
WhatsApp: Notificar equipe comercial
↓
Gmail: Enviar contrato e onboarding
↓
Google Drive: Criar pasta do cliente
↓
Slack/Discord: Notificar equipe técnica
↓
CRM: Criar cliente (se integrado)
↓
Calendly: Agendar onboarding
```

#### **7.2.3 Cenário 3: Follow-up Automático**
```
Trigger: Schedule (diário às 9h)
↓
Google Sheets: Buscar leads sem follow-up
↓
Filtro: Data follow-up = hoje
↓
Iterator: Para cada lead
↓
WhatsApp: Enviar mensagem personalizada
↓
Google Sheets: Atualizar status follow-up
↓
Slack: Relatório diário de follow-ups
```

#### **7.2.4 Configuração dos Webhooks**
```javascript
// URL do Make.com
const MAKE_WEBHOOKS = {
  newLead: 'https://hook.make.com/novo-lead-webhook-id',
  finalSale: 'https://hook.make.com/venda-final-webhook-id',
  chatInteraction: 'https://hook.make.com/chat-webhook-id'
};

// Estrutura de dados enviada
const webhookData = {
  timestamp: new Date().toISOString(),
  source: 'website',
  type: 'lead' | 'sale' | 'chat',
  data: {
    // dados do formulário/interação
  },
  metadata: {
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    sessionId: generateSessionId()
  }
};

// Função para enviar webhook
const sendWebhook = async (type, data) => {
  try {
    const response = await fetch(MAKE_WEBHOOKS[type], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...webhookData,
        type,
        data
      })
    });
    
    if (!response.ok) {
      throw new Error(`Webhook failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Webhook error:', error);
    // Fallback: salvar localmente para retry
    saveForRetry(type, data);
  }
};
```

### **7.3 Zapier - Integrações Simples**

#### **7.3.1 Zap 1: Backup Automático**
```
Trigger: Google Sheets (nova linha)
↓
Filter: Apenas leads qualificados
↓
Google Drive: Criar backup diário
↓
Email: Relatório para gestão
```

#### **7.3.2 Zap 2: Notificações Slack**
```
Trigger: Webhook (novo lead)
↓
Filter: Lead score > 7
↓
Slack: Enviar notificação para canal #vendas-hot
↓
Google Calendar: Criar evento de follow-up
```

#### **7.3.3 Zap 3: Integração CRM**
```
Trigger: Google Sheets (nova venda)
↓
CRM (Pipedrive/HubSpot): Criar deal
↓
Email: Notificar gerente de vendas
↓
Trello: Criar card de onboarding
```

### **7.4 Z-API - WhatsApp Business**

#### **7.4.1 Configuração Inicial**
```javascript
const ZAPI_CONFIG = {
  token: 'SEU_TOKEN_ZAPI',
  instance: 'SUA_INSTANCIA',
  baseUrl: 'https://api.z-api.io/instances/SUA_INSTANCIA/token/SEU_TOKEN'
};

// Função para enviar mensagem
const sendWhatsAppMessage = async (phone, message, type = 'text') => {
  try {
    const endpoint = type === 'text' ? '/send-text' : '/send-image';
    
    const response = await fetch(`${ZAPI_CONFIG.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Token': ZAPI_CONFIG.token
      },
      body: JSON.stringify({
        phone: phone.replace(/\D/g, ''), // Remove formatação
        message: message
      })
    });
    
    if (!response.ok) {
      throw new Error(`Z-API Error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('WhatsApp send error:', error);
    throw error;
  }
};

// Função para verificar status da instância
const checkZAPIStatus = async () => {
  try {
    const response = await fetch(`${ZAPI_CONFIG.baseUrl}/status`);
    const status = await response.json();
    return status.connected;
  } catch (error) {
    console.error('Z-API status check failed:', error);
    return false;
  }
};
```

#### **7.4.2 Templates de Mensagens**
```javascript
const WHATSAPP_TEMPLATES = {
  welcome: (nome) => `
🤖 Olá ${nome}! 

Obrigado pelo interesse no Exército de Agentes!

Recebemos suas informações e nossa equipe entrará em contato em breve.

Enquanto isso, que tal conhecer nossos casos de sucesso? 
👉 exercitodeagentes.com.br/casos

Abraços,
Equipe Exército de Agentes
  `,
  
  followUp: (nome, interesse) => `
🚀 Oi ${nome}!

Vi que você tem interesse em ${interesse}.

Temos uma proposta especial que pode revolucionar seu negócio!

Que tal agendar uma conversa de 15 minutos?
👉 Responda este WhatsApp ou clique: https://calendly.com/exercitodeagentes
  `,
  
  proposal: (nome, plano, valor) => `
💼 ${nome}, sua proposta está pronta!

📋 **Plano**: ${plano}
💰 **Investimento**: ${valor}
⚡ **Início**: Imediato

Benefícios inclusos:
✅ EssencialBot personalizado
✅ Integração completa
✅ Suporte especializado
✅ Treinamento da equipe

Aceita? Responda SIM para fechar!
  `,
  
  onboarding: (nome) => `
🎉 Parabéns ${nome}!

Bem-vindo ao Exército de Agentes!

📅 **Próximos passos**:
1. Reunião de onboarding (agendada)
2. Configuração do EssencialBot
3. Treinamento da equipe
4. Go-live!

Grupo VIP de clientes:
👉 https://chat.whatsapp.com/grupo-vip

Vamos revolucionar seu negócio! 🚀
  `
};

// Função para enviar template
const sendTemplate = async (phone, templateName, ...params) => {
  const template = WHATSAPP_TEMPLATES[templateName];
  if (!template) {
    throw new Error(`Template ${templateName} não encontrado`);
  }
  
  const message = template(...params);
  return await sendWhatsAppMessage(phone, message);
};
```

### **7.5 Tally - Formulários Avançados**

#### **7.5.1 Configuração de Formulários**

**Formulário 1: Pré-cadastro Detalhado**
```
Campos:
- Nome completo (obrigatório)
- WhatsApp (obrigatório, validação)
- Email (obrigatório, validação)
- Empresa (obrigatório)
- Cargo (obrigatório)
- Faturamento mensal (select)
- Número de funcionários (select)
- Principais desafios (textarea)
- Interesse específico (multiple choice)
- Como conheceu (select)
- Urgência (escala 1-5)
```

**Formulário 2: Qualificação de Lead**
```
Campos:
- Orçamento disponível (range)
- Prazo para implementação (select)
- Decisor da compra (yes/no)
- Já usa automação (yes/no)
- Principais objetivos (checkboxes)
- Disponibilidade para reunião (calendar)
```

#### **7.5.2 Integração com Webhooks**
```javascript
// Webhook do Tally para Make.com
const tallyWebhook = {
  url: 'https://hook.make.com/tally-webhook',
  events: ['form.submitted'],
  data: {
    formId: 'SEU_FORM_ID',
    responseId: 'ID_RESPOSTA',
    fields: {
      // dados do formulário
    }
  }
};

// Processamento do webhook Tally
const processTallySubmission = async (submission) => {
  // 1. Calcular score do lead
  const leadScore = calculateLeadScore(submission.fields);
  
  // 2. Adicionar ao Google Sheets
  await addLeadToSheet({
    ...submission.fields,
    score: leadScore,
    source: 'Tally Form'
  });
  
  // 3. Trigger automação baseada no score
  if (leadScore >= 8) {
    await sendTemplate(
      submission.fields.whatsapp,
      'followUp',
      submission.fields.nome,
      submission.fields.interesse
    );
  }
  
  // 4. Notificar equipe comercial
  await sendSlackNotification({
    channel: '#vendas',
    message: `🔥 Lead qualificado: ${submission.fields.nome} (Score: ${leadScore})`
  });
};

// Função para calcular score do lead
const calculateLeadScore = (fields) => {
  let score = 0;
  
  // Faturamento (peso 3)
  const faturamento = fields.faturamento_mensal;
  if (faturamento === 'acima_100k') score += 30;
  else if (faturamento === '50k_100k') score += 25;
  else if (faturamento === '20k_50k') score += 20;
  else if (faturamento === '10k_20k') score += 15;
  
  // Urgência (peso 2)
  score += (fields.urgencia || 1) * 4;
  
  // Decisor (peso 2)
  if (fields.decisor === 'sim') score += 20;
  
  // Orçamento (peso 2)
  const orcamento = fields.orcamento_disponivel;
  if (orcamento >= 1000) score += 20;
  else if (orcamento >= 500) score += 15;
  else if (orcamento >= 200) score += 10;
  
  // Número de funcionários (peso 1)
  const funcionarios = fields.numero_funcionarios;
  if (funcionarios === 'acima_50') score += 10;
  else if (funcionarios === '20_50') score += 8;
  else if (funcionarios === '5_20') score += 6;
  
  return Math.min(score, 100); // Máximo 100
};
```

### **7.6 Carrd - Landing Pages Específicas**

#### **7.6.1 Páginas Recomendadas**
```
1. exercitodeagentes.carrd.co/nivel1
   - Foco no EssencialBot Nível 1
   - Preço destacado: R$ 120 + R$ 50 manutenção
   - CTA: "Solicitar Demo"

2. exercitodeagentes.carrd.co/contabilidade
   - Serviços contábeis completos
   - Formulário de orçamento
   - CTA: "Solicitar Proposta"

3. exercitodeagentes.carrd.co/consultoria
   - Consultoria empresarial
   - Destaque: Recuperação judicial
   - CTA: "Agendar Consultoria"

4. exercitodeagentes.carrd.co/cursos
   - Educação e treinamentos
   - Calendário de cursos
   - CTA: "Inscrever-se"
```

#### **7.6.2 Integração com Site Principal**
```javascript
// Redirecionamentos inteligentes
const redirectToLandingPage = (interesse) => {
  const landingPages = {
    'automacao': 'https://exercitodeagentes.carrd.co/nivel1',
    'contabilidade': 'https://exercitodeagentes.carrd.co/contabilidade',
    'consultoria': 'https://exercitodeagentes.carrd.co/consultoria',
    'educacao': 'https://exercitodeagentes.carrd.co/cursos'
  };
  
  const url = landingPages[interesse] || 'https://exercitodeagentes.com.br';
  window.open(url, '_blank');
};

// Tracking de conversões
const trackLandingPageConversion = (source, page) => {
  gtag('event', 'landing_page_visit', {
    event_category: 'conversion',
    event_label: page,
    custom_parameter_source: source
  });
};
```

---

## **8. MANUTENÇÃO E ATUALIZAÇÕES**

### **8.1 Rotina de Manutenção Diária**

#### **8.1.1 Checklist Diário (Automatizado)**
```javascript
// Script de monitoramento diário
const dailyHealthCheck = async () => {
  const checks = [
    { name: 'Site Principal', test: () => checkSiteStatus('https://exercitodeagentes.com.br') },
    { name: 'Chatbot', test: () => testChatbotResponse() },
    { name: 'Formulários', test: () => testFormSubmission() },
    { name: 'Z-API WhatsApp', test: () => checkZAPIStatus() },
    { name: 'Google Sheets', test: () => testSheetsAPI() },
    { name: 'Make.com', test: () => checkMakeScenarios() },
    { name: 'Netlify', test: () => checkNetlifyStatus() },
    { name: 'GitHub', test: () => checkGitHubStatus() }
  ];
  
  const results = [];
  
  for (const check of checks) {
    try {
      const result = await check.test();
      results.push({
        name: check.name,
        status: 'OK',
        details: result
      });
      console.log(`✅ ${check.name}: OK`);
    } catch (error) {
      results.push({
        name: check.name,
        status: 'ERROR',
        error: error.message
      });
      console.log(`❌ ${check.name}: ERRO - ${error.message}`);
      
      // Enviar alerta crítico
      await sendCriticalAlert(check.name, error);
    }
  }
  
  // Gerar relatório diário
  await generateDailyReport(results);
  
  return results;
};

// Executar às 8h todos os dias
// Configurar via cron job ou GitHub Actions
```

#### **8.1.2 Monitoramento de Performance**
```javascript
// Métricas de performance
const performanceMetrics = {
  async checkPageSpeed() {
    const url = 'https://exercitodeagentes.com.br';
    const response = await fetch(`https://www.googleapis.com/pagespeedinights/v5/runPagespeed?url=${url}&strategy=mobile`);
    const data = await response.json();
    
    return {
      score: data.lighthouseResult.categories.performance.score * 100,
      fcp: data.lighthouseResult.audits['first-contentful-paint'].displayValue,
      lcp: data.lighthouseResult.audits['largest-contentful-paint'].displayValue,
      cls: data.lighthouseResult.audits['cumulative-layout-shift'].displayValue
    };
  },
  
  async checkUptime() {
    const start = Date.now();
    const response = await fetch('https://exercitodeagentes.com.br');
    const responseTime = Date.now() - start;
    
    return {
      status: response.status,
      responseTime,
      isUp: response.ok
    };
  },
  
  async checkSSL() {
    const response = await fetch('https://api.ssllabs.com/api/v3/analyze?host=exercitodeagentes.com.br');
    const data = await response.json();
    
    return {
      grade: data.endpoints[0].grade,
      hasWarnings: data.endpoints[0].hasWarnings
    };
  }
};
```

### **8.2 Atualizações de Código**

#### **8.2.1 Processo de Deploy Seguro**
```bash
# 1. Desenvolvimento local
git checkout develop
git pull origin develop
git checkout -b feature/nova-funcionalidade

# 2. Desenvolvimento e testes
npm run dev
npm run build
npm run preview

# 3. Testes automatizados
npm run test
npm run lint
npm run type-check

# 4. Commit seguindo convenção
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 5. Push e Pull Request
git push origin feature/nova-funcionalidade
# Criar PR no GitHub

# 6. Review e testes em staging
# Deploy automático para staging.exercitodeagentes.com.br

# 7. Merge para produção
git checkout main
git merge develop
git push origin main

# 8. Deploy automático para produção
# Netlify deploy automático
```

#### **8.2.2 Rollback de Emergência**
```bash
# Rollback via Netlify (interface)
# 1. Acessar Netlify dashboard
# 2. Ir para Deploys
# 3. Selecionar deploy anterior estável
# 4. Clicar em "Publish deploy"

# Rollback via Git
git checkout main
git revert HEAD~1  # Reverte último commit
git push origin main

# Rollback via GitHub
# 1. Ir para Actions
# 2. Re-run deploy anterior
# 3. Ou fazer revert via interface
```

### **8.3 Backup e Recuperação**

#### **8.3.1 Estratégia de Backup 3-2-1**
```
3 cópias dos dados
2 mídias diferentes  
1 cópia offsite

Implementação:
- Cópia 1: Google Sheets (principal)
- Cópia 2: Google Drive (backup diário)
- Cópia 3: GitHub (código) + Backup local (dados)
```

#### **8.3.2 Automação de Backup**
```javascript
// Backup automático diário
const dailyBackup = async () => {
  const timestamp = new Date().toISOString().split('T')[0];
  
  try {
    // 1. Backup Google Sheets
    const sheetsData = await exportSheetsData();
    
    // 2. Backup configurações
    const configs = await exportConfigs();
    
    // 3. Backup logs
    const logs = await exportLogs();
    
    // 4. Criar arquivo de backup
    const backupData = {
      timestamp,
      version: '1.0',
      data: {
        sheets: sheetsData,
        configs: configs,
        logs: logs
      }
    };
    
    // 5. Salvar no Google Drive
    await saveToGoogleDrive(`backup_${timestamp}.json`, backupData);
    
    // 6. Backup no GitHub (configs)
    await commitBackupToGitHub(configs, timestamp);
    
    // 7. Notificar sucesso
    await sendSlackMessage('✅ Backup diário concluído com sucesso');
    
    // 8. Limpar backups antigos (manter 30 dias)
    await cleanOldBackups(30);
    
  } catch (error) {
    console.error('Erro no backup:', error);
    await sendCriticalAlert('Backup Failed', error);
  }
};

// Executar via GitHub Actions diariamente às 2h
```

#### **8.3.3 Plano de Recuperação de Desastres**
```
CENÁRIO 1: Site fora do ar
- Tempo de detecção: 5 minutos (monitoramento)
- Tempo de resposta: 15 minutos
- Ações:
  1. Verificar status Netlify
  2. Verificar DNS GoDaddy
  3. Rollback se necessário
  4. Ativar página de manutenção

CENÁRIO 2: Perda de dados
- Tempo de detecção: Imediato
- Tempo de recuperação: 2-4 horas
- Ações:
  1. Restaurar do backup mais recente
  2. Verificar integridade dos dados
  3. Reconfigurar integrações
  4. Testar funcionalidades

CENÁRIO 3: Comprometimento de segurança
- Tempo de resposta: Imediato
- Ações:
  1. Isolar sistema comprometido
  2. Trocar todas as senhas/tokens
  3. Analisar logs de acesso
  4. Restaurar do backup limpo
  5. Implementar correções de segurança
```

---

## **9. MONITORAMENTO E ANALYTICS**

### **9.1 Google Analytics 4**

#### **9.1.1 Configuração Avançada**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'GA_MEASUREMENT_ID', {
    // Enhanced ecommerce
    send_page_view: true,
    // Custom dimensions
    custom_map: {
      'custom_parameter_lead_score': 'lead_score',
      'custom_parameter_source': 'traffic_source'
    }
  });
</script>
```

#### **9.1.2 Eventos Personalizados**
```javascript
// Rastreamento de conversões
const trackConversion = (eventName, value, parameters = {}) => {
  gtag('event', eventName, {
    event_category: 'conversion',
    event_label: 'lead_generation',
    value: value,
    currency: 'BRL',
    ...parameters
  });
};

// Eventos importantes
const trackingEvents = {
  // Formulários
  formStart: (formName) => trackConversion('form_start', 0, { form_name: formName }),
  formSubmit: (formName) => trackConversion('form_submit', 10, { form_name: formName }),
  
  // Chatbot
  chatStart: () => trackConversion('chat_start', 0),
  chatInteraction: (message) => trackConversion('chat_interaction', 1, { message_type: message }),
  
  // Planos
  planView: (plan) => trackConversion('plan_view', 0, { plan_name: plan }),
  planSelect: (plan, price) => trackConversion('plan_select', price, { plan_name: plan }),
  
  // Navegação
  sectionView: (section) => gtag('event', 'section_view', { section_name: section }),
  downloadClick: (file) => gtag('event', 'file_download', { file_name: file }),
  externalClick: (url) => gtag('event', 'click', { link_url: url, link_domain: new URL(url).hostname })
};

// Auto-tracking de scroll
let maxScroll = 0;
window.addEventListener('scroll', () => {
  const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
    maxScroll = scrollPercent;
    gtag('event', 'scroll', { percent_scrolled: scrollPercent });
  }
});
```

### **9.2 Métricas de Performance**

#### **9.2.1 KPIs Principais**
```javascript
const kpiDashboard = {
  // Tráfego
  async getTrafficMetrics() {
    return {
      visitors: await getAnalyticsData('visitors', '30daysAgo'),
      pageviews: await getAnalyticsData('pageviews', '30daysAgo'),
      bounceRate: await getAnalyticsData('bounceRate', '30daysAgo'),
      avgSessionDuration: await getAnalyticsData('avgSessionDuration', '30daysAgo')
    };
  },
  
  // Conversões
  async getConversionMetrics() {
    const leads = await getSheetsData('leads_count', '30daysAgo');
    const sales = await getSheetsData('sales_count', '30daysAgo');
    const visitors = await getAnalyticsData('visitors', '30daysAgo');
    
    return {
      totalLeads: leads,
      totalSales: sales,
      conversionRate: (leads / visitors * 100).toFixed(2),
      salesConversionRate: (sales / leads * 100).toFixed(2)
    };
  },
  
  // Chatbot
  async getChatbotMetrics() {
    return {
      totalInteractions: await getSheetsData('chat_interactions', '30daysAgo'),
      avgMessagesPerSession: await getSheetsData('avg_messages', '30daysAgo'),
      leadConversionRate: await getSheetsData('chat_to_lead_rate', '30daysAgo')
    };
  },
  
  // Performance técnica
  async getTechnicalMetrics() {
    return {
      uptime: await getUptimeData('30daysAgo'),
      avgResponseTime: await getResponseTimeData('30daysAgo'),
      errorRate: await getErrorRateData('30daysAgo'),
      coreWebVitals: await getCoreWebVitals()
    };
  }
};
```

#### **9.2.2 Dashboard Automatizado**
```javascript
// Atualização automática do dashboard
const updateDashboard = async () => {
  try {
    const metrics = {
      traffic: await kpiDashboard.getTrafficMetrics(),
      conversions: await kpiDashboard.getConversionMetrics(),
      chatbot: await kpiDashboard.getChatbotMetrics(),
      technical: await kpiDashboard.getTechnicalMetrics(),
      timestamp: new Date().toISOString()
    };
    
    // Atualizar Google Sheets dashboard
    await updateSheetsDashboard(metrics);
    
    // Enviar relatório semanal
    if (isMonday()) {
      await sendWeeklyReport(metrics);
    }
    
    // Alertas baseados em métricas
    await checkMetricAlerts(metrics);
    
  } catch (error) {
    console.error('Erro ao atualizar dashboard:', error);
    await sendCriticalAlert('Dashboard Update Failed', error);
  }
};

// Executar a cada hora
setInterval(updateDashboard, 60 * 60 * 1000);
```

### **9.3 Alertas e Notificações**

#### **9.3.1 Sistema de Alertas**
```javascript
const alertSystem = {
  // Alertas críticos (imediatos)
  critical: {
    siteDown: async () => {
      await Promise.all([
        sendSlackAlert('🚨 CRÍTICO: Site fora do ar!', '#emergencia'),
        sendEmailAlert('Site Down', 'admin@exercitodeagentes.com.br'),
        sendWhatsAppAlert('🚨 Site fora do ar - Verificar imediatamente')
      ]);
    },
    
    formError: async (error) => {
      await sendSlackAlert(`🚨 CRÍTICO: Erro nos formulários - ${error}`, '#tech');
    },
    
    chatbotDown: async () => {
      await sendSlackAlert('🚨 CRÍTICO: EssencialBot offline', '#tech');
    },
    
    dataLoss: async (details) => {
      await Promise.all([
        sendSlackAlert(`🚨 CRÍTICO: Possível perda de dados - ${details}`, '#emergencia'),
        sendEmailAlert('Data Loss Alert', 'admin@exercitodeagentes.com.br')
      ]);
    }
  },
  
  // Alertas de warning (importantes)
  warning: {
    highTraffic: async (traffic) => {
      await sendSlackAlert(`📈 WARNING: Pico de tráfego detectado - ${traffic} usuários`, '#ops');
    },
    
    lowConversion: async (rate) => {
      await sendSlackAlert(`📉 WARNING: Taxa de conversão baixa - ${rate}%`, '#marketing');
    },
    
    slowResponse: async (time) => {
      await sendSlackAlert(`⏱️ WARNING: Site lento - ${time}ms`, '#tech');
    }
  },
  
  // Alertas informativos (diários/semanais)
  info: {
    dailyReport: async (metrics) => {
      const message = `
📊 **Relatório Diário**
👥 Visitantes: ${metrics.visitors}
📝 Leads: ${metrics.leads}
💬 Interações Chat: ${metrics.chatInteractions}
⚡ Uptime: ${metrics.uptime}%
      `;
      await sendSlackAlert(message, '#relatorios');
    },
    
    weeklyReport: async (metrics) => {
      // Relatório mais detalhado
      await generateWeeklyReport(metrics);
    }
  }
};

// Verificação de métricas para alertas
const checkMetricAlerts = async (metrics) => {
  // Site down
  if (metrics.technical.uptime < 99) {
    await alertSystem.critical.siteDown();
  }
  
  // Conversão baixa
  if (metrics.conversions.conversionRate < 1) {
    await alertSystem.warning.lowConversion(metrics.conversions.conversionRate);
  }
  
  // Tráfego alto
  if (metrics.traffic.visitors > 1000) {
    await alertSystem.warning.highTraffic(metrics.traffic.visitors);
  }
  
  // Response time alto
  if (metrics.technical.avgResponseTime > 3000) {
    await alertSystem.warning.slowResponse(metrics.technical.avgResponseTime);
  }
};
```

---

## **10. BACKUP E SEGURANÇA**

### **10.1 Estratégia de Segurança**

#### **10.1.1 Proteção de APIs e Dados**
```javascript
// Rate limiting para APIs
const rateLimiter = {
  requests: new Map(),
  
  isAllowed(ip, endpoint) {
    const key = `${ip}:${endpoint}`;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutos
    const maxRequests = 100;
    
    if (!this.requests.has(key)) {
      this.requests.set(key, []);
    }
    
    const requests = this.requests.get(key);
    
    // Remove requests antigas
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(key, validRequests);
    
    return true;
  }
};

// Validação e sanitização de dados
const dataValidator = {
  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },
  
  validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10 && cleaned.length <= 11;
  },
  
  sanitizeInput(input) {
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/[<>]/g, '');
  },
  
  validateFormData(data) {
    const errors = [];
    
    if (!data.nome || data.nome.length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    if (!this.validateEmail(data.email)) {
      errors.push('Email inválido');
    }
    
    if (!this.validatePhone(data.whatsapp)) {
      errors.push('WhatsApp inválido');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
};
```

#### **10.1.2 Proteção LGPD**
```javascript
// Sistema de consentimento LGPD
const lgpdCompliance = {
  // Consentimento
  consent: {
    required: true,
    text: `Aceito os termos de serviço e autorizo o processamento 
           dos meus dados pessoais conforme a LGPD. Concordo em 
           receber comunicações sobre os serviços contratados.`,
    version: '1.0',
    date: new Date().toISOString()
  },
  
  // Política de retenção
  retention: {
    leads: '2 anos',
    customers: '5 anos',
    logs: '1 ano',
    backups: '30 dias'
  },
  
  // Anonização de dados
  anonymizeData(data) {
    return {
      ...data,
      nome: this.hashString(data.nome),
      email: this.hashString(data.email),
      whatsapp: this.hashString(data.whatsapp),
      cpf: data.cpf ? this.hashString(data.cpf) : null
    };
  },
  
  hashString(str) {
    // Implementar hash seguro (SHA-256)
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(str))
      .then(buffer => Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join(''));
  },
  
  // Direito ao esquecimento
  async deleteUserData(email) {
    try {
      // 1. Remover do Google Sheets
      await removeFromSheets(email);
      
      // 2. Remover backups
      await removeFromBackups(email);
      
      // 3. Notificar sistemas integrados
      await notifyDataDeletion(email);
      
      // 4. Log da ação
      await logDataDeletion(email);
      
      return { success: true };
    } catch (error) {
      console.error('Erro ao deletar dados:', error);
      return { success: false, error: error.message };
    }
  }
};
```

### **10.2 Monitoramento de Segurança**

#### **10.2.1 Detecção de Ameaças**
```javascript
const securityMonitoring = {
  // Detecção de ataques
  detectThreats: {
    // SQL Injection
    sqlInjection(input) {
      const patterns = [
        /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)/i,
        /(UNION|OR|AND)\s+\d+\s*=\s*\d+/i,
        /['"]\s*(OR|AND)\s*['"]\s*=\s*['"]*/i
      ];
      
      return patterns.some(pattern => pattern.test(input));
    },
    
    // XSS
    xssAttempt(input) {
      const patterns = [
        /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        /javascript:/i,
        /on\w+\s*=/i
      ];
      
      return patterns.some(pattern => pattern.test(input));
    },
    
    // Brute force
    bruteForce(ip) {
      const attempts = this.getFailedAttempts(ip);
      return attempts > 10; // 10 tentativas em 1 hora
    }
  },
  
  // Log de segurança
  logSecurityEvent(type, details) {
    const event = {
      timestamp: new Date().toISOString(),
      type,
      details,
      ip: details.ip,
      userAgent: details.userAgent
    };
    
    // Salvar log
    this.saveSecurityLog(event);
    
    // Alertar se crítico
    if (['sql_injection', 'xss_attempt', 'brute_force'].includes(type)) {
      this.sendSecurityAlert(event);
    }
  },
  
  // Análise de logs
  async analyzeSecurityLogs() {
    const logs = await this.getSecurityLogs('24h');
    
    const analysis = {
      totalEvents: logs.length,
      criticalEvents: logs.filter(log => log.type.includes('critical')).length,
      topIPs: this.getTopIPs(logs),
      attackPatterns: this.identifyAttackPatterns(logs)
    };
    
    if (analysis.criticalEvents > 0) {
      await this.sendSecurityReport(analysis);
    }
    
    return analysis;
  }
};
```

### **10.3 Backup Avançado**

#### **10.3.1 Backup Incremental**
```javascript
const advancedBackup = {
  // Backup incremental
  async incrementalBackup() {
    const lastBackup = await this.getLastBackupTimestamp();
    const changes = await this.getChangesSince(lastBackup);
    
    if (changes.length === 0) {
      console.log('Nenhuma mudança desde o último backup');
      return;
    }
    
    const backupData = {
      type: 'incremental',
      timestamp: new Date().toISOString(),
      baseBackup: lastBackup,
      changes: changes
    };
    
    await this.saveBackup(backupData);
    await this.updateBackupIndex(backupData);
  },
  
  // Backup completo semanal
  async fullBackup() {
    const backupData = {
      type: 'full',
      timestamp: new Date().toISOString(),
      data: {
        sheets: await this.exportAllSheets(),
        configs: await this.exportConfigs(),
        code: await this.exportCodeSnapshot(),
        assets: await this.exportAssets()
      }
    };
    
    // Salvar em múltiplos locais
    await Promise.all([
      this.saveToGoogleDrive(backupData),
      this.saveToGitHub(backupData),
      this.saveToLocalStorage(backupData)
    ]);
    
    // Verificar integridade
    await this.verifyBackupIntegrity(backupData);
  },
  
  // Restauração point-in-time
  async restoreToPoint(timestamp) {
    try {
      // 1. Encontrar backup base
      const baseBackup = await this.findBaseBackup(timestamp);
      
      // 2. Aplicar mudanças incrementais
      const incrementalChanges = await this.getIncrementalChanges(baseBackup.timestamp, timestamp);
      
      // 3. Restaurar dados
      await this.restoreData(baseBackup.data);
      
      // 4. Aplicar mudanças incrementais
      for (const change of incrementalChanges) {
        await this.applyChange(change);
      }
      
      // 5. Verificar integridade
      await this.verifyRestoration();
      
      return { success: true, restoredTo: timestamp };
    } catch (error) {
      console.error('Erro na restauração:', error);
      return { success: false, error: error.message };
    }
  }
};
```

---

## **11. TROUBLESHOOTING**

### **11.1 Problemas Comuns e Soluções**

#### **11.1.1 Site Não Carrega**
```
SINTOMAS:
- Erro 404/500
- Timeout de conexão
- Página em branco

DIAGNÓSTICO:
1. Verificar status Netlify
   - Acessar dashboard Netlify
   - Verificar último deploy
   - Verificar logs de build

2. Verificar DNS GoDaddy
   - Usar dig/nslookup
   - Verificar propagação DNS
   - Verificar configuração A/CNAME

3. Verificar SSL/HTTPS
   - Verificar certificado válido
   - Verificar redirect HTTP→HTTPS

SOLUÇÕES:
□ Rebuild no Netlify
□ Limpar cache DNS (8.8.8.8)
□ Verificar variáveis de ambiente
□ Rollback para versão anterior
□ Verificar quota Netlify
□ Contatar suporte GoDaddy (DNS)
```

#### **11.1.2 Chatbot Não Responde**
```
SINTOMAS:
- Chatbot não abre
- Não responde mensagens
- Respostas genéricas

DIAGNÓSTICO:
1. Verificar API OpenAI
   - Status da API
   - Créditos disponíveis
   - Rate limits

2. Verificar configuração GPT
   - Prompt personalizado
   - Modelo correto
   - Parâmetros de resposta

SOLUÇÕES:
□ Verificar créditos OpenAI
□ Reconfigurar prompt
□ Implementar fallback
□ Verificar logs de erro
□ Testar API diretamente
□ Contatar suporte OpenAI
```

#### **11.1.3 Formulários Não Enviam**
```
SINTOMAS:
- Erro ao submeter
- Dados não chegam no Sheets
- Automações não disparam

DIAGNÓSTICO:
1. Verificar Google Sheets API
   - Permissões da API
   - Quota de requests
   - Estrutura da planilha

2. Verificar webhooks Make/Zapier
   - Status dos cenários
   - Logs de execução
   - Configuração de triggers

SOLUÇÕES:
□ Renovar tokens API
□ Reconfigurar webhooks
□ Verificar validação de dados
□ Configurar CORS headers
□ Testar endpoints manualmente
□ Verificar rate limits
```

### **11.2 Logs e Debugging**

#### **11.2.1 Sistema de Logs Centralizado**
```javascript
const logger = {
  levels: {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
  },
  
  currentLevel: 2, // INFO
  
  log(level, message, data = {}) {
    if (this.levels[level] > this.currentLevel) return;
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      url: window.location.href,
      userAgent: navigator.userAgent,
      sessionId: this.getSessionId()
    };
    
    // Console
    console[level.toLowerCase()](message, data);
    
    // Enviar para serviço de log
    this.sendToLogService(logEntry);
    
    // Alertas críticos
    if (level === 'ERROR') {
      this.sendCriticalAlert(logEntry);
    }
  },
  
  error(message, error) {
    this.log('ERROR', message, {
      error: error.message,
      stack: error.stack,
      name: error.name
    });
  },
  
  warn(message, data) {
    this.log('WARN', message, data);
  },
  
  info(message, data) {
    this.log('INFO', message, data);
  },
  
  debug(message, data) {
    this.log('DEBUG', message, data);
  }
};

// Error boundary React
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    logger.error('React Error Boundary', {
      error: error.message,
      componentStack: errorInfo.componentStack
    });
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Algo deu errado!</h2>
          <p>Nossa equipe foi notificada. Tente recarregar a página.</p>
          <button onClick={() => window.location.reload()}>
            Recarregar
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

#### **11.2.2 Debugging de Integrações**
```javascript
const integrationDebugger = {
  // Testar Google Sheets
  async testSheetsIntegration() {
    try {
      const testData = {
        nome: 'Teste Debug',
        email: 'debug@test.com',
        timestamp: new Date().toISOString()
      };
      
      const result = await addLeadToSheet(testData);
      logger.info('Sheets integration test passed', result);
      return { success: true, result };
    } catch (error) {
      logger.error('Sheets integration test failed', error);
      return { success: false, error: error.message };
    }
  },
  
  // Testar Make.com
  async testMakeIntegration() {
    try {
      const testWebhook = {
        test: true,
        timestamp: new Date().toISOString(),
        data: { nome: 'Debug Test' }
      };
      
      const response = await fetch(MAKE_WEBHOOKS.newLead, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testWebhook)
      });
      
      if (!response.ok) {
        throw new Error(`Make webhook failed: ${response.status}`);
      }
      
      logger.info('Make integration test passed');
      return { success: true };
    } catch (error) {
      logger.error('Make integration test failed', error);
      return { success: false, error: error.message };
    }
  },
  
  // Testar Z-API
  async testZAPIIntegration() {
    try {
      const status = await checkZAPIStatus();
      
      if (!status) {
        throw new Error('Z-API instance not connected');
      }
      
      logger.info('Z-API integration test passed');
      return { success: true, status };
    } catch (error) {
      logger.error('Z-API integration test failed', error);
      return { success: false, error: error.message };
    }
  },
  
  // Executar todos os testes
  async runAllTests() {
    const tests = [
      { name: 'Google Sheets', test: () => this.testSheetsIntegration() },
      { name: 'Make.com', test: () => this.testMakeIntegration() },
      { name: 'Z-API', test: () => this.testZAPIIntegration() }
    ];
    
    const results = [];
    
    for (const test of tests) {
      try {
        const result = await test.test();
        results.push({ name: test.name, ...result });
      } catch (error) {
        results.push({ 
          name: test.name, 
          success: false, 
          error: error.message 
        });
      }
    }
    
    return results;
  }
};
```

### **11.3 Ferramentas de Diagnóstico**

#### **11.3.1 Health Check Endpoint**
```javascript
// Endpoint para verificação de saúde
const healthCheck = {
  async checkAll() {
    const checks = {
      timestamp: new Date().toISOString(),
      status: 'healthy',
      checks: {}
    };
    
    try {
      // Verificar APIs
      checks.checks.googleSheets = await this.checkGoogleSheets();
      checks.checks.makeWebhooks = await this.checkMakeWebhooks();
      checks.checks.zapi = await this.checkZAPI();
      checks.checks.openai = await this.checkOpenAI();
      
      // Verificar performance
      checks.checks.responseTime = await this.checkResponseTime();
      checks.checks.memoryUsage = this.checkMemoryUsage();
      
      // Determinar status geral
      const failedChecks = Object.values(checks.checks)
        .filter(check => !check.healthy);
      
      if (failedChecks.length > 0) {
        checks.status = 'degraded';
      }
      
      if (failedChecks.length > 2) {
        checks.status = 'unhealthy';
      }
      
    } catch (error) {
      checks.status = 'error';
      checks.error = error.message;
    }
    
    return checks;
  },
  
  async checkGoogleSheets() {
    try {
      const start = Date.now();
      await testSheetsAPI();
      const responseTime = Date.now() - start;
      
      return {
        healthy: true,
        responseTime,
        message: 'Google Sheets API responding'
      };
    } catch (error) {
      return {
        healthy: false,
        error: error.message,
        message: 'Google Sheets API failed'
      };
    }
  }
};

// Executar health check periodicamente
setInterval(async () => {
  const health = await healthCheck.checkAll();
  
  if (health.status !== 'healthy') {
    logger.warn('Health check failed', health);
    
    if (health.status === 'unhealthy') {
      await sendCriticalAlert('System Unhealthy', health);
    }
  }
}, 5 * 60 * 1000); // A cada 5 minutos
```

---

## **12. ESCALABILIDADE**

### **12.1 Planejamento de Crescimento**

#### **12.1.1 Métricas de Escalabilidade**
```javascript
const scalabilityMetrics = {
  // Limites atuais
  currentLimits: {
    netlifyBandwidth: '100GB/mês',
    googleSheetsAPI: '100 requests/100s',
    makeOperations: '10.000/mês',
    zapierTasks: '750/mês',
    zapiMessages: '3.000/mês',
    openaiTokens: '1M tokens/mês'
  },
  
  // Projeções de crescimento
  projections: {
    visitors: {
      current: 1000,
      month3: 3000,
      month6: 8000,
      month12: 20000
    },
    leads: {
      current: 50,
      month3: 150,
      month6: 400,
      month12: 1000
    }
  },
  
  // Pontos de upgrade
  upgradePoints: {
    netlify: {
      trigger: '80GB bandwidth used',
      action: 'Upgrade to Pro plan ($19/month)'
    },
    googleSheets: {
      trigger: '80 requests/100s',
      action: 'Implement caching and batch operations'
    },
    make: {
      trigger: '8000 operations/month',
      action: 'Upgrade to Core plan ($10.59/month)'
    },
    zapier: {
      trigger: '600 tasks/month',
      action: 'Upgrade to Starter plan ($19.99/month)'
    }
  }
};
```

#### **12.1.2 Otimizações de Performance**
```javascript
const performanceOptimizations = {
  // Cache de dados
  cache: {
    // Cache em memória para dados frequentes
    memory: new Map(),
    
    set(key, value, ttl = 300000) { // 5 minutos default
      this.memory.set(key, {
        value,
        expires: Date.now() + ttl
      });
    },
    
    get(key) {
      const item = this.memory.get(key);
      if (!item) return null;
      
      if (Date.now() > item.expires) {
        this.memory.delete(key);
        return null;
      }
      
      return item.value;
    }
  },
  
  // Batch operations para Google Sheets
  batchOperations: {
    queue: [],
    batchSize: 10,
    flushInterval: 5000, // 5 segundos
    
    add(operation) {
      this.queue.push(operation);
      
      if (this.queue.length >= this.batchSize) {
        this.flush();
      }
    },
    
    async flush() {
      if (this.queue.length === 0) return;
      
      const batch = this.queue.splice(0, this.batchSize);
      
      try {
        await this.executeBatch(batch);
      } catch (error) {
        logger.error('Batch operation failed', error);
        // Re-queue failed operations
        this.queue.unshift(...batch);
      }
    },
    
    async executeBatch(operations) {
      // Agrupar por tipo de operação
      const grouped = operations.reduce((acc, op) => {
        if (!acc[op.type]) acc[op.type] = [];
        acc[op.type].push(op);
        return acc;
      }, {});
      
      // Executar cada grupo
      for (const [type, ops] of Object.entries(grouped)) {
        await this.executeOperationType(type, ops);
      }
    }
  },
  
  // Lazy loading de componentes
  lazyComponents: {
    // Carregar chatbot apenas quando necessário
    loadChatbot: () => import('./components/EssencialBotChat'),
    
    // Carregar formulários avançados sob demanda
    loadAdvancedForms: () => import('./components/AdvancedForms'),
    
    // Carregar analytics apenas em produção
    loadAnalytics: () => {
      if (process.env.NODE_ENV === 'production') {
        return import('./utils/analytics');
      }
      return Promise.resolve(null);
    }
  }
};
```

### **12.2 Arquitetura Escalável**

#### **12.2.1 Microserviços**
```javascript
// Separação de responsabilidades
const microservices = {
  // Serviço de leads
  leadsService: {
    baseUrl: 'https://api.exercitodeagentes.com.br/leads',
    
    async create(leadData) {
      return await fetch(`${this.baseUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    },
    
    async update(id, data) {
      return await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }
  },
  
  // Serviço de notificações
  notificationService: {
    baseUrl: 'https://api.exercitodeagentes.com.br/notifications',
    
    async send(type, recipient, message) {
      return await fetch(`${this.baseUrl}/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, recipient, message })
      });
    }
  },
  
  // Serviço de analytics
  analyticsService: {
    baseUrl: 'https://api.exercitodeagentes.com.br/analytics',
    
    async track(event, properties) {
      return await fetch(`${this.baseUrl}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event, properties })
      });
    }
  }
};
```

#### **12.2.2 CDN e Otimização de Assets**
```javascript
// Configuração de CDN
const cdnConfig = {
  // Usar CDN para assets estáticos
  images: 'https://cdn.exercitodeagentes.com.br/images/',
  fonts: 'https://cdn.exercitodeagentes.com.br/fonts/',
  scripts: 'https://cdn.exercitodeagentes.com.br/js/',
  
  // Otimização de imagens
  optimizeImage(src, options = {}) {
    const { width, height, quality = 80, format = 'webp' } = options;
    
    let url = `${this.images}${src}`;
    const params = new URLSearchParams();
    
    if (width) params.append('w', width);
    if (height) params.append('h', height);
    params.append('q', quality);
    params.append('f', format);
    
    return `${url}?${params.toString()}`;
  },
  
  // Preload de recursos críticos
  preloadCriticalResources() {
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/essential.js', as: 'script' }
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      document.head.appendChild(link);
    });
  }
};
```

### **12.3 Monitoramento de Escalabilidade**

#### **12.3.1 Alertas de Capacidade**
```javascript
const capacityMonitoring = {
  // Monitorar uso de recursos
  async checkResourceUsage() {
    const usage = {
      netlify: await this.getNetlifyUsage(),
      googleSheets: await this.getGoogleSheetsUsage(),
      make: await this.getMakeUsage(),
      zapier: await this.getZapierUsage(),
      openai: await this.getOpenAIUsage()
    };
    
    // Verificar limites
    for (const [service, data] of Object.entries(usage)) {
      const threshold = this.getThreshold(service);
      
      if (data.percentage > threshold.warning) {
        await this.sendCapacityWarning(service, data);
      }
      
      if (data.percentage > threshold.critical) {
        await this.sendCapacityCritical(service, data);
      }
    }
    
    return usage;
  },
  
  getThreshold(service) {
    const thresholds = {
      netlify: { warning: 80, critical: 95 },
      googleSheets: { warning: 70, critical: 90 },
      make: { warning: 80, critical: 95 },
      zapier: { warning: 80, critical: 95 },
      openai: { warning: 75, critical: 90 }
    };
    
    return thresholds[service] || { warning: 80, critical: 95 };
  },
  
  async sendCapacityWarning(service, data) {
    const message = `
⚠️ **Aviso de Capacidade**
Serviço: ${service}
Uso atual: ${data.percentage}%
Limite: ${data.limit}
Usado: ${data.used}

Considere upgrade ou otimização.
    `;
    
    await sendSlackAlert(message, '#ops');
  }
};
```

---

## **CONCLUSÃO**

Este manual fornece uma base sólida para o gerenciamento completo do site do Exército de Agentes. As configurações e processos descritos garantem:

### **Benefícios Implementados:**
- ✅ **Automação Completa**: Fluxos automatizados de lead para venda
- ✅ **Monitoramento 24/7**: Alertas proativos e relatórios automáticos
- ✅ **Escalabilidade**: Preparado para crescimento exponencial
- ✅ **Segurança**: Proteção LGPD e monitoramento de ameaças
- ✅ **Backup Robusto**: Estratégia 3-2-1 com recuperação point-in-time
- ✅ **Performance**: Otimizações para velocidade e conversão

### **Próximos Passos:**
1. Implementar todas as configurações descritas
2. Treinar equipe nos processos
3. Configurar monitoramento e alertas
4. Realizar testes de todos os sistemas
5. Documentar procedimentos específicos da empresa

### **Suporte Contínuo:**
- Revisão mensal dos processos
- Atualização trimestral das automações
- Auditoria semestral de segurança
- Planejamento anual de escalabilidade

**Versão do Manual:** 1.0  
**Última Atualização:** 2024  
**Próxima Revisão:** Trimestral