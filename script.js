let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nome, preco) {
  const produto = { nome, preco };
  carrinho.push(produto);
  atualizarCarrinho();
  alert(`${nome} foi adicionado ao seu carrinho!`);
}

// Função para atualizar o ícone do carrinho
function atualizarCarrinho() {
  const carrinhoButton = document.getElementById('carrinho');
  const quantidade = carrinho.length;
  
  if (quantidade > 0) {
    carrinhoButton.innerHTML = `<button onclick="irParaCarrinho()">Ir para o Carrinho (${quantidade} itens)</button>`;
  } else {
    carrinhoButton.innerHTML = `<button onclick="irParaCarrinho()">Ir para o Carrinho</button>`;
  }
}

// Função para redirecionar para a página de carrinho
function irParaCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  window.location.href = "carrinho.html";
}
