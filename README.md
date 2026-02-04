# Divino Sabor - Sistema de Marmitas

Sistema de pedidos online para delivery de marmitas com pagamento via PIX integrado ao backend próprio.

## Configuração do Pagamento PIX (Backend próprio)

### 1. Variável de ambiente

Configure a variável abaixo no ambiente do frontend:

```
VITE_API_BASE=https://backend.divinosabor.shop
```

### 3. Testar Integração

1. Crie um pedido de teste no site
2. Escolha pagamento via PIX
3. Verifique se o QR Code aparece corretamente
4. Use o ambiente de testes do seu provedor de pagamento para simular pagamento
5. Confirme que o status do pedido atualiza para "Pagamento confirmado"

## Arquitetura

### Backend

- Endpoint de pagamento: `POST /create-payment`

## Tecnologias

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Backend próprio

## Desenvolvimento Local

```sh
# Clone o repositório
git clone <YOUR_GIT_URL>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Deploy

Clique em "Publish" no Lovable para publicar sua aplicação.

## Suporte

Para dúvidas sobre a integração de pagamento, consulte a documentação do seu provedor.
