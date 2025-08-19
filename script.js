// Função para adicionar ao carrinho
function addToCart(produto, preco) {
  // Cria um objeto para o produto
  const item = {
    nome: produto,
    preco: preco
  };

  // Recupera o carrinho do localStorage ou cria um novo
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adiciona o item ao carrinho
  carrinho.push(item);

  // Armazena o carrinho atualizado no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Atualiza o contador do carrinho no index.html
  updateCartCount();
}

// Função para atualizar o contador de itens no carrinho
function updateCartCount() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const contador = document.getElementById('cart-count');
  contador.textContent = carrinho.length;
}

// Função para carregar os itens do carrinho na página do carrinho
function loadCartItems() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const carrinhoContainer = document.getElementById('carrinho-items');
  const totalElement = document.getElementById('total');

  // Limpa a lista de produtos
  carrinhoContainer.innerHTML = '';

  let total = 0;

  // Adiciona os itens do carrinho na página
  carrinho.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    itemElement.innerHTML = `
      <p>${item.nome}</p>
      <span>${item.preco}</span>
    `;
    carrinhoContainer.appendChild(itemElement);

    // Atualiza o valor total
    total += parseFloat(item.preco.replace('R$', '').replace(',', '.'));
  });

  // Exibe o valor total no carrinho
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para limpar o carrinho
function clearCart() {
  localStorage.removeItem('carrinho');
  loadCartItems();
  updateCartCount();
}

// Atualiza o contador do carrinho na inicialização
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  // Ação do botão de compra
  const btns = document.querySelectorAll('.btn-small');
  btns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      // Pega o nome e preço do produto
      const produto = this.parentElement.querySelector('h4').innerText;
      const preco = this.parentElement.querySelector('span').innerText;

      // Adiciona ao carrinho
      addToCart(produto, preco);
    });
  });

  // Verifica se estamos na página do carrinho e carrega os itens
  if (window.location.pathname.includes('carrinho.html')) {
    loadCartItems();
  }

  // Verifica se estamos na página de aproveitamento do produto
  if (window.location.pathname.includes('aproveite.html')) {
    const escolhaFormaPagamento = document.getElementById('forma-pagamento');
    if (escolhaFormaPagamento) {
      escolhaFormaPagamento.addEventListener('change', (event) => {
        console.log(`Forma de pagamento escolhida: ${event.target.value}`);
      });
    }
  }
});

// Função para manipular a forma de pagamento no carrinho
function finalizarCompra() {
  // Aqui você pode adicionar lógica para escolher entre PIX ou Cartão
  alert('Compra finalizada com sucesso!');
  clearCart(); // Limpar carrinho após compra
}
