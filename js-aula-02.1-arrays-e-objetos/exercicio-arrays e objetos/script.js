// TAREFA 1:

const estoqueProdutos = [
  {
    nome: "V500",
    marca: "Ignite",
    preco: 140,
    descricao: "Design moderno e uma capacidade impressionante.",
  },
  {
    nome: "Ice King",
    marca: "Elfbar",
    preco: 130,
    descricao: "Durabilidade extrema e sabor marcante.",
  },
  {
    nome: "Magic Maze Pro",
    marca: "Oxbar",
    preco: 110,
    descricao: "Melhor custo benefício do mercado.",
  },
];

// TAREFA 2:

document.write(`<h3>Lista de produtos em estoque:</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>
        `);
});

// TAREFA 3:

estoqueProdutos.push({
  nome: "Dual Tank 40K",
  marca: "Black Sheep",
  preco: 125,
  descricao: "Dois sabores e muita potência.",
});

document.write(`<h3>A lista atualizada (após push):</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>
        `);
});

// TAREFA 4:

estoqueProdutos.unshift({
  nome: "Ice Baby",
  marca: "Nikbar",
  preco: 145,
  descricao: "Controle total e tela digital interativa.",
});

document.write(`<h3>A lista atualizada (após unshift):</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: ${produto.preco} <br>
        Descrição: ${produto.descricao} <br> <br>
        `);
});

// TAREFA 5:

estoqueProdutos.sort((a, b) => a.preco - b.preco);

document.write(`<h3>A lista ordenada em ordem crescente de preço:</h3>`);

estoqueProdutos.forEach((produto) => {
  document.write(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco.toFixed(2)} <br>
        Descrição: ${produto.descricao} <br> <br>
        `);
});
