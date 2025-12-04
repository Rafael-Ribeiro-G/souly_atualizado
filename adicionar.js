//Código para calcular o total de 1 Linha 
//document.querySelector(".total").textContent = document.querySelector(".unitario").textContent * 
//document.querySelector(".qtde").textContent

//Captura todas as encomendas para calcular o total
document.addEventListener("DOMContentLoaded", function () {
    // Pega todas as linhas da tabela com a classe .cliente
    var clientes = document.querySelectorAll(".cliente");

    for (var count = 0; count < clientes.length; count++) {
        // pega a linha atual do loop
        var linha = clientes[count];

        // pega a quantidade e o valor unitário dessa linha
        var qtde = parseInt(linha.querySelector(".qtde").textContent);
        var unitario = parseFloat(linha.querySelector(".unitario").textContent);

        // calcula o total
        var total = qtde * unitario;

        // escreve o resultado na coluna "total"
        linha.querySelector(".total").textContent = total.toFixed(0);
    }
});

var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("O botão foi clicado");
});

document.addEventListener("DOMContentLoaded", function () {
    var botaoAdicionar = document.querySelector("#adicionar-encomenda"); // botão correto
    var tabela = document.querySelector(".tabela-clientes"); // tbody da tabela

    botaoAdicionar.addEventListener("click", function (event) {
        event.preventDefault(); // impede o envio do formulário

        // pega os valores do formulário
        var nome = document.querySelector("#sobrenome").value;
        var quantidade = parseInt(document.querySelector("#email").value);
        var produto = document.querySelector("#produto").value;
        var valorUnitario = parseFloat(document.querySelector("#mensagem").value);

        // cria a nova linha
        var novaLinha = document.createElement("tr");
        novaLinha.classList.add("cliente"); // mesma classe das outras linhas

        // cria e preenche as células
        var tdNome = document.createElement("td");
        tdNome.textContent = nome;

        var tdProduto = document.createElement("td");
        tdProduto.textContent = produto;

        var tdQtde = document.createElement("td");
        tdQtde.textContent = quantidade;

        var tdUnitario = document.createElement("td");
        tdUnitario.textContent = valorUnitario;

        var tdTotal = document.createElement("td");
        tdTotal.textContent = (quantidade * valorUnitario).toFixed(0);

        // adiciona as células na linha
        novaLinha.appendChild(tdNome);
        novaLinha.appendChild(tdProduto);
        novaLinha.appendChild(tdQtde);
        novaLinha.appendChild(tdUnitario);
        novaLinha.appendChild(tdTotal);

        // adiciona a linha na tabela
        tabela.appendChild(novaLinha);

        // limpa o formulário após adicionar
        document.querySelector("#frmContato").reset();

        var encomendaNova = obtemEncomenda(form);
    });

    function addEncomendaTabela(novaEncomenda){
    
    //Captura a tabela de encomendas
    var tabela = document.querySelector(".tabela-clientes");

    //Cria a nova linha da tabela
    tabela.appendChild(montaTR(novaEncomenda));
}

});
