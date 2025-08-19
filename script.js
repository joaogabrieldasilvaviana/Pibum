document.addEventListener("DOMContentLoaded", function () {
  // Captura parâmetros da URL
  const params = new URLSearchParams(window.location.search);
  const produto = params.get("produto");
  const preco = params.get("preco");

  // Verifica se há itens na URL
  if (produto && preco) {
    // Adiciona o produto no carrinho
    addItemToCart(produto, preco);
  }

  // Função para adicionar item no carrinho
  function addItemToCart(produto, preco) {
    const produtosCarrinho = document.getElementById("produtos-carrinho");

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("produto-carrinho");

    const nomeProduto = document.createElement("p");
    nomeProduto.textContent = produto;

    const precoProduto = document.createElement("p");
    precoProduto.textContent = `Preço: ${preco}`;

    itemDiv.appendChild(nomeProduto);
    itemDiv.appendChild(precoProduto);

    produtosCarrinho.appendChild(itemDiv);

    // Atualiza o total
    updateTotal(preco);
  }

  // Função para atualizar o total
  function updateTotal(preco) {
    const totalElement = document.getElementById("total-preco");
    let total = parseFloat(totalElement.textContent.replace('R$ ', '').replace(',', '.'));

    if (isNaN(total)) total = 0;

    const precoNumerico = parseFloat(preco.replace('R$', '').replace(',', '.'));

    total += precoNumerico;
    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  }

  // Função para finalizar a compra
  document.getElementById("finalizar-compra").addEventListener("click", function () {
    // Redireciona para a página de pagamento
    window.location.href = "pagamento.html";
  });
});
