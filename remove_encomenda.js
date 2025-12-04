var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvo = event.target;

    // Se clicou no texto, pega a célula (<td>)
    if (alvo.nodeType === 3) { 
        alvo = alvo.parentNode;
    }

    alvo.textContent = "X"; // remove só a célula clicada

    //Estiliza a exclusão
    event.target.parentNode.classList.add("fadeOut");

    //Exclui a encomenda (a linha toda)
    //event.target = elemento que "sofreu" o evento
    //parentNode = chama o elemento "pai" do elemento que "sofreu" o evento
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});
