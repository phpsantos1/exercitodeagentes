# 🚀 GUIA DE DEPLOY PARA GODADDY

## 📋 CHECKLIST PRÉ-DEPLOY

### 1. Preparar Arquivos para Upload
```bash
npm run build
```
Isso criará a pasta `dist/` com todos os arquivos otimizados.

### 2. Arquivos que devem ir para o GoDaddy:
- Todo conteúdo da pasta `dist/`
- Arquivo `.htaccess` (já configurado)
- Arquivo `robots.txt`
- Arquivo `sitemap.xml`

## 🌐 CONFIGURAÇÃO NO GODADDY

### 1. Acesso ao cPanel
- Entre no seu painel GoDaddy
- Acesse o cPanel da hospedagem
- Vá para "Gerenciador de Arquivos"

### 2. Upload dos Arquivos
- Navegue até a pasta `public_html/`
- Delete arquivos existentes (se houver)
- Faça upload de TODOS os arquivos da pasta `dist/`
- Certifique-se que o `.htaccess` foi enviado

### 3. Estrutura Final no Servidor:
```
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── vite.svg
```

## 🔧 CONFIGURAÇÕES IMPORTANTES

### 1. DNS (se necessário)
Se você comprou o domínio em outro lugar:
- Aponte os nameservers para o GoDaddy
- Configure o A Record para o IP da hospedagem

### 2. SSL/HTTPS
- No painel GoDaddy, ative o SSL gratuito
- Aguarde a propagação (até 24h)

### 3. Teste de Funcionamento
Após upload, teste:
- ✅ Site carrega: www.exercitodeagentes.com.br
- ✅ Navegação funciona (SPA)
- ✅ Formulários funcionam
- ✅ Chat do EssencialBot funciona
- ✅ Redirecionamento HTTPS funciona

## 📊 CONFIGURAR INTEGRAÇÕES

### 1. Google Analytics
- Substitua `G-XXXXXXXXXX` pelo seu ID real
- Arquivo: `src/config/environment.ts`

### 2. Meta Pixel
- Substitua `XXXXXXXXXX` pelo seu ID real
- Arquivo: `src/config/environment.ts`

### 3. Webhooks (Make.com/Zapier)
- Configure os webhooks no Make.com
- Atualize as URLs em `src/config/environment.ts`

### 4. Z-API (WhatsApp)
- Configure sua instância Z-API
- Atualize as credenciais em `src/utils/integrations.ts`

## 🛠️ MANUTENÇÃO

### Para Atualizações:
1. Faça as alterações no código
2. Execute `npm run build`
3. Faça upload apenas dos arquivos alterados
4. Limpe o cache do navegador

### Backup:
- Sempre faça backup antes de atualizações
- Use o cPanel para criar backups automáticos

## 📞 SUPORTE

Se houver problemas:
1. Verifique os logs de erro no cPanel
2. Teste em modo incógnito
3. Verifique se o .htaccess está correto
4. Confirme se todos os arquivos foram enviados

## 🎯 PRÓXIMOS PASSOS APÓS DEPLOY

1. **Configurar Google Search Console**
   - Adicione www.exercitodeagentes.com.br
   - Envie o sitemap.xml

2. **Configurar Google Analytics**
   - Crie a propriedade
   - Instale o código de acompanhamento

3. **Testar Formulários**
   - Teste o pré-cadastro
   - Teste o cadastro final
   - Verifique se chegam no Google Sheets

4. **Configurar Automações**
   - Configure Make.com/Zapier
   - Teste integração WhatsApp
   - Configure emails automáticos

## ✅ CHECKLIST FINAL

- [ ] Site no ar em www.exercitodeagentes.com.br
- [ ] HTTPS funcionando
- [ ] Todas as páginas carregando
- [ ] Formulários funcionando
- [ ] Chat do EssencialBot ativo
- [ ] Google Analytics configurado
- [ ] Integrações testadas
- [ ] Backup realizado