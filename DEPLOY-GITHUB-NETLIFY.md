# 🚀 GUIA DE DEPLOY - GITHUB + NETLIFY

## 📋 PASSO A PASSO COMPLETO

### 1. Preparar o Repositório GitHub

1. **Criar repositório no GitHub:**
   - Acesse [github.com](https://github.com)
   - Clique em "New repository"
   - Nome: `exercito-de-agentes-website`
   - Marque como "Public" ou "Private"
   - Clique em "Create repository"

2. **Fazer upload dos arquivos:**
   - Baixe todos os arquivos do projeto
   - Faça upload via interface web do GitHub ou use Git Desktop

### 2. Configurar Netlify

1. **Conectar GitHub ao Netlify:**
   - Acesse [netlify.com](https://netlify.com)
   - Clique em "New site from Git"
   - Escolha "GitHub"
   - Autorize a conexão
   - Selecione o repositório `exercito-de-agentes-website`

2. **Configurações de Build:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variáveis de Ambiente:**
   - Vá em Site Settings > Environment Variables
   - Adicione as seguintes variáveis:
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   VITE_META_PIXEL_ID=XXXXXXXXXX
   VITE_WEBHOOK_PRE_CADASTRO=https://hook.integromat.com/xxxxxxxx
   VITE_WEBHOOK_CADASTRO_FINAL=https://hook.integromat.com/xxxxxxxx
   VITE_WEBHOOK_CONTACT=https://hook.integromat.com/xxxxxxxx
   ```

### 3. Configurar Domínio Personalizado

1. **No Netlify:**
   - Vá em Site Settings > Domain Management
   - Clique em "Add custom domain"
   - Digite: `exercitodeagentes.com.br`
   - Clique em "Verify"

2. **No GoDaddy (DNS):**
   - Acesse seu painel GoDaddy
   - Vá em "Meus Produtos" > "DNS"
   - Configure os seguintes registros:

   ```
   Tipo: A
   Nome: @
   Valor: 75.2.60.5
   TTL: 1 hora

   Tipo: CNAME
   Nome: www
   Valor: [seu-site-netlify].netlify.app
   TTL: 1 hora
   ```

### 4. Configurar SSL (HTTPS)

1. **No Netlify:**
   - Vá em Site Settings > Domain Management
   - Na seção "HTTPS", clique em "Verify DNS configuration"
   - Aguarde a verificação (pode levar até 24h)
   - Ative "Force HTTPS"

### 5. Testar o Deploy

1. **Verificações:**
   - ✅ Site carrega em `https://www.exercitodeagentes.com.br`
   - ✅ Redirecionamento HTTP → HTTPS funciona
   - ✅ Navegação SPA funciona (todas as seções)
   - ✅ Formulários funcionam
   - ✅ Chat do EssencialBot funciona
   - ✅ Links sociais funcionam

### 6. Configurar Integrações

1. **Google Analytics:**
   - Crie uma propriedade no Google Analytics
   - Copie o ID (G-XXXXXXXXXX)
   - Atualize a variável `VITE_GA_TRACKING_ID` no Netlify

2. **Meta Pixel:**
   - Crie um pixel no Facebook Business
   - Copie o ID
   - Atualize a variável `VITE_META_PIXEL_ID` no Netlify

3. **Webhooks (Make.com/Zapier):**
   - Configure os webhooks para cada formulário
   - Atualize as variáveis de webhook no Netlify

## 🔄 DEPLOY AUTOMÁTICO

Após a configuração inicial, qualquer alteração no repositório GitHub será automaticamente deployada no Netlify.

## 📊 MONITORAMENTO

- **Netlify Analytics**: Monitore tráfego e performance
- **Google Analytics**: Acompanhe conversões e comportamento
- **Netlify Functions**: Para funcionalidades serverless futuras

## 🆘 TROUBLESHOOTING

### Site não carrega:
1. Verifique se o build passou no Netlify
2. Confirme as configurações DNS no GoDaddy
3. Aguarde propagação DNS (até 48h)

### Formulários não funcionam:
1. Verifique as variáveis de ambiente
2. Teste os webhooks manualmente
3. Confirme as integrações Make.com/Zapier

### SSL não ativa:
1. Confirme configuração DNS
2. Aguarde verificação automática
3. Entre em contato com suporte Netlify se necessário

## 📞 SUPORTE

- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GoDaddy**: Suporte via chat/telefone
- **Projeto**: sac@exercitodeagentes.com.br