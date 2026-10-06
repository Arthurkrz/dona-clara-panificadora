# Dona Clara · Panificadora Artesanal

**Tradição que acompanha a sua rotina.** Web app responsivo criado com auxílio de IA para uma atividade acadêmica de análise de cliente, design e desenvolvimento.

> Protótipo funcional demonstrativo. Não envia pedidos à padaria, não cobra pagamentos e não sincroniza dispositivos. Os registros ficam no `localStorage` do navegador. Produtos, preços e limites são ilustrativos; a fundação foi representada como 2014, a partir dos 12 anos informados no briefing de 2026.

## Problema e briefing

Clara Ramos e Roberto administram uma padaria artesanal de bairro há 12 anos, com 2 padeiros, 1 confeiteira e 3 atendentes. A qualidade dos pães de fermentação natural e produtos coloniais sustenta sua reputação. Entretanto, o atendimento exclusivamente presencial e as encomendas anotadas em papel causam filas, vendas perdidas, atrasos e trocas de sabores. Moradores com rotinas flexíveis e empresas interessadas em coffee breaks precisam de conveniência. Duas redes gourmet próximas já possuem presença digital.

## Decisão de solução e design

Escolhemos **web app responsivo com catálogo e painel de produção**. Abre por link no computador ou celular, dispensa instalação e reúne descoberta da marca, pedido e organização da equipe. Um aplicativo nativo exigiria distribuição e manutenção adicionais; um site apenas institucional não organizaria os pedidos. O painel complementa a jornada de compra com dados estruturados.

A identidade usa creme, verde e café, tipografia editorial e ilustrações próprias em CSS. O tom acolhedor preserva a tradição artesanal. Botões claros, categorias, limites por pedido e escolha explícita de data e horário reduzem dúvidas. O layout se adapta a telas pequenas, os campos têm rótulos e a sacola usa diálogo nativo.

## Funcionalidades e relação com a dor

| Dor | Entrega implementada |
|---|---|
| Filas e rotina variável | Sacola e retirada agendada |
| Dificuldade em encontrar produtos | Catálogo organizado por categorias |
| Troca de sabores e anotações perdidas | Formulário de encomenda com detalhes, telefone e data |
| Falta de organização da cozinha | Painel com pedidos e atualização de etapas |
| Falta de presença digital | Página responsiva com história e proposta artesanal |
| Necessidade de coffee breaks | Solicitação específica para empresas |

O limite de quantidade é por pedido, não um estoque compartilhado. A reserva real de estoque e a capacidade de cada horário dependem do backend futuro. Encomendas exigem antecedência mínima de 2 dias e ficam aguardando orçamento.

## Protótipos e telas

Veja [docs/prototipos.svg](docs/prototipos.svg), um wireframe das três telas, e [docs/arquitetura.md](docs/arquitetura.md).

1. **Loja:** apresentação, categorias e seis produtos; ação de adicionar à sacola.
2. **Sacola:** quantidades, total, identificação e agendamento; confirmação local.
3. **Painel demonstrativo:** indicadores, detalhes de pedidos e encomendas, etapas e exportação JSON.

A aplicação implementa essas telas. Para avaliar, faça um pedido, abra o painel, altere o status e recarregue a página para conferir a persistência.

## Arquitetura e tecnologias

HTML semântico, CSS responsivo e JavaScript com módulos ES. Node.js executa build e testes; nenhuma dependência npm ou chave paga é necessária. Google Fonts é opcional: fontes locais de fallback mantêm o site utilizável sem essa conexão.

```text
src/                  # interface e lógica
  index.html          # loja, formulário, sacola e painel
  style.css           # identidade e responsividade
  app.js              # interação e persistência
  domain.js           # catálogo, preços e validações
scripts/build.mjs     # gera dist/
tests/                # testes das regras de pedido
docs/                 # arquitetura, canvas e protótipos
.github/workflows/    # validação e deploy GitHub Pages
```

## Executar localmente

Pré-requisitos: **Node.js 20+** e **Python 3** (servidor estático).

```bash
npm test
npm run build
npm start
```

Abra **http://localhost:8080**. Não abra o HTML diretamente por `file://`, pois ele utiliza módulos JavaScript. Não é necessário `npm install`: o projeto não tem dependências externas de execução ou de build.

## Publicar no GitHub

Nome recomendado: **dona-clara-panificadora**. Crie um repositório vazio na sua conta e envie o projeto pela integração GitHub ou por Git. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**. O workflow publica o conteúdo de `dist/` após os testes. Se necessário, execute o workflow manualmente após habilitar Pages. O endereço final aparece no job de deploy; não há endereço GitHub confirmado antes da publicação.

```bash
git remote add github https://github.com/SEU_USUARIO/dona-clara-panificadora.git
git push -u github main
```

A credencial deve ser fornecida pelo gerenciador de credenciais do Git ou integração autenticada; nunca embutida na URL. `SEU_USUARIO` é um marcador a substituir, não uma credencial. O diretório `.openai/` contém apenas configuração do ambiente Sites e não é necessário para GitHub Pages.

## Validação e segurança

`npm test` verifica totais em centavos, pedidos válidos, datas passadas, telefone, horário, sacola vazia e limites de quantidade. O build copia somente os arquivos necessários. `.gitignore` exclui dependências, builds, arquivos de ambiente e arquivos de sistema. Não há senha, token ou API key no projeto. Texto fornecido pelo usuário é escapado antes de ser exibido no painel.

O painel **não tem autenticação** e não deve receber dados reais. `localStorage` não é um banco seguro nem compartilhado e pode ser apagado. Use dados fictícios ao avaliar. Exportações podem conter os dados digitados e devem ser tratadas de acordo com sua sensibilidade.

## Evolução para operação real

API e banco central para pedidos, estoque e capacidade de retirada; autenticação e autorização da equipe; validações no servidor; confirmação de orçamento; notificações; backups e políticas de retenção de dados. Pagamentos e entrega não integram este escopo. Essas funcionalidades não são simuladas como se estivessem disponíveis.

## Canvas e autoria

[Canvas da proposta](docs/canvas.md). O enunciado continha o termo “canvas” sem detalhar um formato; incluímos um Business Model Canvas resumido como complemento. Desenvolvimento, texto e identidade visual produzidos com auxílio de IA. Cenário empresarial fornecido pelo enunciado. Licença [MIT](LICENSE).
