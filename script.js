document.addEventListener("DOMContentLoaded", function () {
  // Scroll suave ao clicar nos links do menu
  const links = document.querySelectorAll(".nav a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth"
        });
      }
    });
  });

  // Ação nos botões "Comprar"
  const comprarBtns = document.querySelectorAll(".btn-small");
  comprarBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const produto = this.parentElement.querySelector("h4").innerText;
      const preco = this.parentElement.querySelector("span").innerText;

      let urlCarrinho;

      if (preco.includes("5.499,00")) {
        urlCarrinho = "/carrinho-5499.html";
      } else if (preco.includes("6.299,00")) {
        urlCarrinho = "/carrinho-6299.html";
      } else {
        urlCarrinho = "/carrinho-personalizado.html";
      }

      // Redireciona para a página do carrinho
      window.location.href = urlCarrinho;
    });
  });
});
