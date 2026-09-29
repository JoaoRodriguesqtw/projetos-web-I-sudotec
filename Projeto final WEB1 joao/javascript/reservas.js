const lista = document.getElementById("lista");
const campoTitulo = document.getElementById("titulo");
const campoDescricao = document.getElementById("descricao");
const formulario = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
const limpar = document.getElementById("limpar");
let tarefas = [];

const salvar = () => {
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

const criarNaTela = () => {
  lista.innerHTML = "";

  const salvo = localStorage.getItem("tarefas");

  tarefas = salvo !== null ? JSON.parse(salvo) : tarefas;

  for (let i = 0; i < tarefas.length; i++) {
    const item = document.createElement("li");
    item.textContent = tarefas[i];
    lista.appendChild(item);
  }
};

limpar.addEventListener("click", (evento) => {
  evento.preventDefault();

  lista.innerHTML = "";
  tarefas = [];
  localStorage.removeItem("tarefas");
  aviso.textContent = "";
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const titulo = campoTitulo.value.trim();
  const descricao = campoDescricao.value.trim();

  if (titulo === "" || descricao === "") {
    aviso.textContent = "Preencha todos os campos.";
  } else {
    aviso.textContent = "";

    let conteudo = `${titulo} - ${descricao}`;
    tarefas.push(conteudo);

    salvar();
    criarNaTela();

    campoTitulo.value = "";
    campoDescricao.value = "";
  }
});

criarNaTela();
