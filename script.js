// Array que vai guardar os produtos adicionados
let carrinho = [];
let total = 0;

// Função principal disparada pelo clique no botão
function adicionarAoCarrinho(nomeProduto, precoProduto) {
// 1. Adiciona o produto à lista
carrinho.push({ nome: nomeProduto, preco: precoProduto });

// 2. Soma o preço ao total
total += precoProduto;

// 3. Atualiza o ecrã
atualizarInterface();
}

// Função que redesenha o carrinho no ecrã
function atualizarInterface() {
const listaCarrinho = document.getElementById('cart-items');
const elementoTotal = document.getElementById('total-price');

// Limpa a lista antiga para não duplicar
listaCarrinho.innerHTML = '';

// Cria um elemento de texto para cada produto no carrinho
carrinho.forEach(item => {
const li = document.createElement('li');
li.innerText = ${item.nome} - ${item.preco.toFixed(2)} €;
listaCarrinho.appendChild(li);
});

// Atualiza o valor do total com duas casas decimais
elementoTotal.innerText = total.toFixed(2);
}

