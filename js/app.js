limpar();

function adicionar() {
    if (document.getElementById('quantidade').value > 0) {
        let produtoSelecionado = document.getElementById('produto').value;
        let nomeProduto = produtoSelecionado.split('-')[0]
        let valorProduto = produtoSelecionado.split('R$')[1]
        let quantidadeProdutos = document.getElementById('quantidade').value;
        let subTotal = (quantidadeProdutos * valorProduto);
        let carrinho = document.getElementById('lista-produtos');

        carrinho.innerHTML = carrinho.innerHTML + (`<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`);

        valorTotal = valorTotal + subTotal
        let campoTotal = document.getElementById('valor-total');
        campoTotal.innerHTML = (`R$${valorTotal}`);

        document.getElementById('quantidade').value = 0;
    } else {
        alert ('Preencha a quantidade!');
    }
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
    document.getElementById('quantidade').value = 0;
    valorTotal = 0;
    
}