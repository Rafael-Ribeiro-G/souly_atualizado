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

    //captura o formulário de encomendas

    var form = document.querySelector("#frmContato");

    //captura os dados da nova encomenda
    var encomendaNova = obtemEncomenda(form);

    //captura a tabela de encomendas
    var tabela = document.querySelector(".tabela-clientes");

    //cria a nova linha na tabela
    tabela.appendChild(montaTR());
});

function obtemEncomenda(formulario){

    var encomenda = {
        nome:formulario.nome.value,
        produto:formulario.produto.value,
        qtde:formulario.qtde.value,
        unitario:formulario.unitario.value
    }
    return encomenda;
}

function montaTR(){
    var tr = document.createElement("tr");

    tr.appendChild(montaTD(dadosEncomenda.nome));
    tr.appendChild(montaTD(dadosEncomenda.produto));
    tr.appendChild(montaTD(dadosEncomenda.qtde));
    tr.appendChild(montaTD(formataValor(dadosEncomenda.unitario)));
    tr.appendChild(montaTD());

    return tr;
}

function montaTD(dado){
    var td = document.createElement("td");
    td.textContent = dado;
    return td;
}