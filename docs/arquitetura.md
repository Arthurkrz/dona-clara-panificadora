# Arquitetura e roteiro de avaliação

O navegador carrega HTML, CSS e módulos JavaScript estáticos. `domain.js` concentra catálogo, cálculo em centavos e validação de pedidos. `app.js` controla interface, formulários e `localStorage`. O build usa apenas a biblioteca padrão do Node. GitHub Actions executa testes, gera `dist/` e publica no Pages.

Não há API, banco central, autenticação nem pagamento. Uma equipe em outro dispositivo não visualiza os pedidos. O objetivo acadêmico é demonstrar a jornada completa e a decisão de design, com limites declarados.

## Roteiro manual

1. Filtre por Pães e adicione um pão duas vezes: a sacola deve exibir 2 unidades e R$ 48,00.
2. Abra a sacola, diminua a quantidade e confira o novo total.
3. Preencha nome fictício, telefone de 11 dígitos, data atual ou futura e horário. Confirme.
4. Abra o painel: confira identificação, itens, data, horário e total.
5. Altere para Em preparo e recarregue: a etapa deve persistir.
6. Volte à loja e registre um coffee break para pelo menos dois dias depois, com pessoas, horário e restrições no campo de detalhes.
7. Confira a solicitação aguardando orçamento no painel e exporte JSON.
8. Experimente telefone curto, data passada e quantidade acima do limite: devem ser rejeitados.
9. Verifique navegação por teclado, diálogo com Escape e telas de 390px e 1280px.

Os testes automatizados cobrem regras do domínio. O roteiro acima documenta a verificação manual recomendada; sua presença não significa que todos os passos já foram executados.
