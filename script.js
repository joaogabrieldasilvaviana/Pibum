// Script Pibum - Interações básicas

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
      alert(`Você selecionou o produto: ${produto}\nEm breve você será redirecionado para finalizar a compra.`);
      // Aqui no futuro pode ser: redirecionar para página de compra ou adicionar ao carrinho
      // window.location.href = "/checkout.html";
    });
  });
});
