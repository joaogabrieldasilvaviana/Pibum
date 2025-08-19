document.addEventListener("DOMContentLoaded", function () {
  // Definindo um array para armazenar os itens do carrinho no localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Atualiza o contador do carrinho
  const updateCartCount = () => {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
  };

  // Adiciona o produto ao carrinho
  const addToCart = (produto, preco) => {
    const item = { produto, preco };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    // Mostra o botão "Ir para o Carrinho" quando algum item for adicionado
    document.getElementById('go-to-cart').style.display = 'block';
  };

  // Adiciona os eventos aos botões de "Adicionar ao Carrinho"
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const produto = this.dataset.produto;
      const preco = this.dataset.preco;
      addToCart(produto, preco);
    });
  });

  // Vai para a página do carrinho
  document.getElementById('go-to-cart').addEventListener('click', () => {
    window.location.href = 'carrinho.html';
  });

  // Atualiza o contador do carrinho na página inicial
  updateCartCount();
});
