class Produto extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const title = this.getAttribute('titulo');
      const preco = this.getAttribute('preco');
      const descricao = this.getAttribute('descricao');
      const img = this.getAttribute('img');
      const div = document.createElement("div");

      div.innerHTML = `
            <div class="card text-center bg-light">
              <div class="position-absolute end-0 p-2 text-danger">
                <i class="bi-suit-heart heart"></i>
              </div>

              <img src = "${img}" class="card-img-top">
              <div claass="card-header">${preco}</div>
              <div class="card-body card_corpo">
                <h5 class="card-title"> ${title} </h5>
                <p class="card-text">${descricao}</p>
              </div>

              <div class="card-footer card_rodape">
                <div class="btn btn-outline-secondary mt-2 d-block"> Adicionar ao Carrinho</div>
              </div>
            </div>
      `;
      this.appendChild(div);
    }
  }
customElements.define("produto-novo", Produto);