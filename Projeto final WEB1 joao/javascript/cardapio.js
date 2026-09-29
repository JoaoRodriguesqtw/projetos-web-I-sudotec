const indicador = document.getElementById("indicador");

const entradas = document.getElementById("entradas");
const pratos = document.getElementById("pratos");
const sobremesas = document.getElementById("sobremesas");

const btnProximo = document.getElementById("btnProximo");
const btnAnterior = document.getElementById("btnAnterior");
const btnTodos = document.getElementById("btnTodos"); // fazer o bonus do botao de mostrar todo o cardapio

let telas = 1;
let mostrarTodos = false;

//display ao iniciar o site
entradas.style.display = "block";
pratos.style.display = "none";
sobremesas.style.display = "none";

btnProximo.addEventListener("click", () => {
  telas = telas + 1;

  if (telas === 1) {
    indicador.textContent = "Seção 1 de 3";

    entradas.style.display = "block";
    pratos.style.display = "none";
    sobremesas.style.display = "none";
  } else if (telas === 2) {
    indicador.textContent = "Seção 2 de 3";

    entradas.style.display = "none";
    pratos.style.display = "block";
    sobremesas.style.display = "none";
  } else if (telas === 3) {
    indicador.textContent = "Seção 3 de 3";

    entradas.style.display = "none";
    pratos.style.display = "none";
    sobremesas.style.display = "block";
  } else if (telas > 3) {
    indicador.textContent = "Seção 1 de 3";

    entradas.style.display = "block";
    pratos.style.display = "none";
    sobremesas.style.display = "none";
    telas = 1;
  }
});

btnAnterior.addEventListener("click", () => {
  telas = telas - 1;

  if (telas === 0) {
    indicador.textContent = "Seção 3 de 3";

    entradas.style.display = "none";
    pratos.style.display = "none";
    sobremesas.style.display = "block";
  } else if (telas === -1) {
    indicador.textContent = "Seção 2 de 3";

    entradas.style.display = "none";
    pratos.style.display = "block";
    sobremesas.style.display = "none";
  } else if (telas === -2) {
    indicador.textContent = "Seção 1 de 3";

    entradas.style.display = "block";
    pratos.style.display = "none";
    sobremesas.style.display = " none";
    telas = 1;
  } else if (telas === 1) {
    indicador.textContent = "Seção 1 de 3";

    entradas.style.display = "block";
    pratos.style.display = "none";
    sobremesas.style.display = " none";
  } else if (telas === 2) {
    indicador.textContent = "Seção 2 de 3";

    entradas.style.display = "none";
    pratos.style.display = "block";
    sobremesas.style.display = "none";
  } else if (telas === 3) {
    indicador.textContent = "Seção 3 de 3";

    entradas.style.display = "none";
    pratos.style.display = "none";
    sobremesas.style.display = "block";
  }
});

btnTodos.addEventListener("click", () => {
  mostrarTodos = !mostrarTodos;
  btnTodos.textContent = "Ver menos";

  if (mostrarTodos === true) {
    entradas.style.display = "block";
    pratos.style.display = "block";
    sobremesas.style.display = "block";
  } else {
    btnTodos.textContent = "Ver tudo";

    if (telas === 1) {
      entradas.style.display = "block";
      pratos.style.display = "none";
      sobremesas.style.display = "none";
    } else if (telas === 2) {
      entradas.style.display = "none";
      pratos.style.display = "block";
      sobremesas.style.display = "none";
    } else {
      entradas.style.display = "none";
      pratos.style.display = "none";
      sobremesas.style.display = "block";
    }
  }
});
