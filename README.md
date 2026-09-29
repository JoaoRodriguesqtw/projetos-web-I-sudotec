# Projetos WEB I - SUDOTEC

Este repositório reúne os projetos que desenvolvi na disciplina de Web I da SUDOTEC. Eles mostram a evolução do conteúdo: começa com uma página simples que troca de seção com botões, passa por uma lista de tarefas que guarda os dados no navegador e termina em um site de várias páginas, que junta tudo o que foi aprendido.

Tudo é feito com **HTML, CSS e JavaScript puro**, sem frameworks e sem etapa de instalação. Para ver qualquer projeto, basta abrir o arquivo HTML no navegador.

## Projetos

| Projeto | O que é | Conceitos praticados |
|---|---|---|
| `Atividade cardapio` | Cardápio interativo de uma pizzaria com tema sombrio | Manipulação do DOM, eventos de clique, navegação entre seções |
| `Minhas tarefas` | Lista de tarefas com título e descrição | Formulários, validação, `localStorage` |
| `Projeto final WEB1 joao` | Site de uma cafeteria temática com três páginas | Organização em pastas, várias páginas, layout com CSS, reaproveitamento da lógica dos projetos anteriores |

### Atividade cardapio

Um cardápio de pizzaria com identidade visual escura, dividido em três seções: entradas, pratos principais e sobremesas. Só uma seção aparece por vez, e o texto "Seção 1 de 3" indica onde você está.

- **Anterior** e **Próximo** percorrem as seções, e a navegação é circular: depois da última volta para a primeira, e vice-versa.
- **Ver tudo** mostra o cardápio inteiro de uma vez, e o mesmo botão passa a dizer "Ver menos" para voltar à visualização por seção.
- O CSS inclui efeito ao passar o mouse, botões estilizados e ajustes para telas pequenas.

### Minhas tarefas

Um formulário simples com dois campos, título e descrição, que adiciona itens a uma lista.

- Não deixa adicionar uma tarefa se algum campo estiver vazio, e mostra um aviso.
- As tarefas ficam salvas no `localStorage`, então continuam na lista quando a página é recarregada.
- O botão **Limpar** apaga a lista e também os dados salvos.

### Projeto final WEB1

O projeto mais completo do repositório: o site da **Delivery Kiki's Coffee**, uma cafeteria temática inspirada no filme *O Serviço de Entregas da Kiki*, do Studio Ghibli.

O site tem três páginas ligadas por um menu de navegação:

- **Cardápio**: reaproveita a navegação por seções do primeiro projeto (Anterior, Próximo e Ver tudo).
- **Sobre**: texto de apresentação da cafeteria.
- **Reservas**: formulário em que a pessoa informa o nome e a quantidade de pessoas com o horário. As reservas aparecem em uma lista e ficam salvas no navegador, a partir da mesma ideia do projeto de tarefas.

O visual usa fontes do Google Fonts e imagens animadas na temática do filme.

## Estrutura do repositório

```
Projetos WEB I SUDOTEC/
├── Atividade cardapio/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── Minhas tarefas/
│   ├── index.html
│   ├── script.js
│   └── style.css
└── Projeto final WEB1 joao/
    ├── css/
    │   ├── cardapio.css
    │   ├── reservas.css
    │   └── sobre.css
    ├── html/
    │   ├── cardapio.html
    │   ├── reservas.html
    │   └── sobre.html
    └── javascript/
        ├── cardapio.js
        └── reservas.js
```

## Como executar

Não precisa instalar nada. Baixe ou clone o repositório e abra o arquivo principal de cada projeto no navegador:

- Atividade cardapio: `Atividade cardapio/index.html`
- Minhas tarefas: `Minhas tarefas/index.html`
- Projeto final: `Projeto final WEB1 joao/html/cardapio.html` (as outras páginas são acessadas pelo menu)

Para clonar:

```bash
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
```

Se você usa o VS Code, a extensão Live Server deixa o teste mais prático, porque atualiza a página sozinha a cada alteração.

## Observações

- O projeto final carrega as fontes e as imagens animadas de endereços externos, então é preciso estar conectado à internet para ver o visual completo.
- Os dados de tarefas e reservas ficam apenas no navegador de quem usa, por causa do `localStorage`. Não existe banco de dados nem servidor.

## Tecnologias

HTML5, CSS3 e JavaScript.
