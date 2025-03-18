//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  // Captura o valor do campo de entrada
  const input = document.getElementById("amigo");
  const nome = input.value.trim(); // Remove espaços em branco desnecessários

  // Valida se o campo está vazio
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Atualiza o array de amigos
  amigos.push(nome);

  // Atualiza a exibição da lista na página
  atualizarListaDeAmigos();

  // Limpa o campo de entrada
  input.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarListaDeAmigos() {
  // Seleciona o elemento da lista
  const lista = document.getElementById("listaAmigos");

  // Limpa a lista atual
  lista.innerHTML = "";

  // Adiciona os nomes dos amigos à lista
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  // Verifica se há amigos na lista
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione um amigo primeiro!");
    return;
  }

  // Gera um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}