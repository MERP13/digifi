# Demonstração do Ei! Logistics e Mercado de Serviços

<p align="center">
<br />
<a>Início Rápido</a>

Este é um exemplo de aplicativo criado para demonstrar a integração sem carteira e promover uma experiência interoperável e multichain de usuário com interface integrável, segura e suave para serviços de logística on-chain sem a necessidade de um backend tradicional. Ele utiliza um sistema de entrega on-chain e um "Mercado" de serviços como uma exploração de conceito no mundo da logística blockchain e custódia híbrida alimentada pelo Cadence no Flow e lachain.

**IMPORTANTE**

> **Aviso**
>
> :warning: Este projeto implementa uma solução de gerenciamento de chaves local, por enquanto **não deve** ser usado como referência para
> construir uma aplicação de produção.


## Saiba Mais

- [Visão Geral da Vinculação de Contas](https://developers.flow.com/account-linking)
- [Explore a Integração sem Carteira (Walletless)](https://developers.flow.com/account-linking/guides/walletless-onboarding)
- [Postagem de Fórum de Introdução à Custódia Híbrida](https://forum.onflow.org/t/hybrid-custody/4016)
- [Contrato de Custódia Híbrida](https://f.dnz.dev/294e44e1ec6993c6/HybridCustody)
- [Repositório de Código-Fonte da Custódia Híbrida](https://github.com/onflow/hybrid-custody)

### Aplicativos e Pacotes

- `rps-game`: um aplicativo [Next.js](https://nextjs.org/) para o Monster Game Arcade (Pedra, Papel, Tesoura)
- `prize-market`: um aplicativo [Next.js](https://nextjs.org/) para o Monster Mall Prize Marketplace
- `shared`: Componentes e Contextos React compartilhados por ambos os aplicativos `rps-game` e `prize-market`
- `eslint-config-custom`: Configurações do `eslint` (inclui `eslint-config-next` e `eslint-config-prettier`)
- `tsconfig`: Arquivos `tsconfig.json` usados em todo o monorepo
- `tailwind-config`: `tailwind.config.js` compartilhado usado em todo o monorepo

## Demonstração de Início Rápido

Para demonstrar a funcionalidade deste repositório, clone-o e siga as etapas abaixo.

```sh
git clone https://github.com/diegofornalha/digifi.git
```
```
cd digifi
```
## Pré-Requisitos

**1. Instalar o Flow CLI**

Siga as [instruções de instalação](https://developers.flow.com/tooling/flow-cli/install) para instalar o Flow CLI na sua máquina.

**2. Copiar `emulator.private.json.example` e `testnet.private.json.example`**

```sh
cp emulator.private.json.example emulator.private.json
cp testnet.private.json.example testnet.private.json
```
:bookmark: Atualize com seus próprios dados de chave.

**3. Copie o arquivo .env-example para .env e atualize os valores necessários.**

```sh
cp .env-example .env
```
:warning: O aplicativo requer várias variáveis de ambiente (`env`) para desenvolvimento e implantação. As credenciais e chaves de API podem ser obtidas por meio de seus respectivos provedores. Consulte `.env-exemplo` para obter detalhes.

#### Provedores de Serviço

- Stripe (Usado para Compra de NFT): [https://stripe.com/docs/development](https://stripe.com/docs/development)
- Google (Usado como Provedor de Autenticação Next): [https://developers.google.com/identity/protocols/oauth2/openid-connect](https://developers.google.com/identity/protocols/oauth2/openid-connect)

### Executar Demonstração Localmente

- Inicie o emulador

```sh
flow emulator start
```
- Inicie a Carteira de Desenvolvimento (A partir de uma nova janela do terminal)

```sh
flow dev-wallet
```
- Inicie o servidor de desenvolvimento para implantar os contratos e configurar a conta de serviço (De uma nova janela de terminal) - isso criará nossas contas de implantação de emulador, transferirá algum $FLOW para nossa conta de desenvolvedor e configurará recursos iniciais.

```sh
npm run dev:local:complete
```
Este comando iniciará o servidor de desenvolvimento e implantará os contratos no emulador. Ele também configurará a conta de serviço com as capacidades necessárias.

### Implantação

Consulte a implantação do `testnet-account` a partir do arquivo `flow.json` para implantar os contratos necessários na sua própria conta de administração de jogo.
Esta conta precisará de um saldo Flow para uso na criação de contas e taxas de transação.

Depois que os contratos forem implantados em suas contas de administração, atualize as variáveis de ambiente `NEXT_PUBLIC_ADMIN_ADDRESS` e `NEXT_PUBLIC_ADMIN_KEY_INDEX` na sua plataforma de implantação.

Execute a seguinte transação para configurar a conta de administração com as capacidades necessárias:

```shell
flow transactions send --network=testnet --signer testnet-account cadence/transactions/child_account/setup_child_account_creator.cdc
```
#### Variáveis de Ambiente e Configuração
As seguintes variáveis de ambiente são necessárias para implantação:

**Públicas**
- `NEXT_PUBLIC_VERCEL_URL`: Sua URL do Vercel (ex: https://walletless-arcade-game.vercel.app)
- `NEXT_PUBLIC_ADMIN_ADDRESS`: O endereço da conta de administrador onde os contratos do jogo e dos prêmios estão implantados
- `NEXT_PUBLIC_ADMIN_KEY_INDEX`: O índice da chave da conta de administrador onde os contratos do jogo e dos prêmios estão implantados
- `NEXTAUTH_URL`: Sua URL do Vercel (ex: https://walletless-arcade-game.vercel.app)
- `NEXTAUTH_SECRET`: Uma string aleatória usada para criar hashes de tokens, assinar/criptografar cookies e gerar chaves criptográficas. Você pode gerar o segredo com `openssl rand -base64 32` no Linux
- `NEXT_PUBLIC_FLOW_NETWORK`: A rede para a qual você está implantando (ex: testnet)
- `NEXT_PUBLIC_MARKETPLACE_URL`: A URL do mercado de prêmios (ex: https://walletless-arcade-prize-market.vercel.app)

**Privadas**
- `ADMIN_PRIVATE_KEY_HEX`: A chave privada da conta de administrador onde os contratos do jogo e dos prêmios estão implantados
- `GOOGLE_CLIENT_SECRET`: O Segredo do Cliente do Google. Usado como Provedor para o NextAuth
- `GOOGLE_CLIENT_ID`: O ID do Cliente do Google. Usado como Provedor para o NextAuth
- `STRIPE_SK`: A Chave Secreta do Stripe. Usada para Compra de NFT