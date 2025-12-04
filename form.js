//Obtém o botão do formulário
var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    //Captura o formulário
    var form = document.querySelector("#frmContato");

    //Verifica se o usuário preencheu e-mail ou telefone
    if(form.email.value=="" && form.telefone.value==""){
        return alert("Nenhuma das opções foram preenchidas. Por favor, preencha alguma das opções para que possamos retornar o seu contato.");
    } else {
        //Monta o texto do retorno 
        msgRetorno=form.sobrenome.value + ", agradecemos o seu contatos com a gente! <br><br>Vamos avaliar suas considerações e retornaremos o mais rápido possível."

        //Abre a div de retorno
        document.getElementById("formRetorno").style.display="block";
        //Efetua o retorno
        document.getElementById("textoRetorno").innerHTML=msgRetorno;
        //Fecha o formulário
        document.getElementById("formulario").style.display="none";
        // Botões adicionais
        const botoesExtras = `
            <div style="margin-top: 30px;">
                <button onclick="window.location.href='index.html'" class="enviar">Voltar para a Home</button>
                <button onclick="window.location.href='indexprodutos.html'" class="enviar" style="margin-left: 25px;">Ver Produtos</button>
            </div>
        `;

        document.getElementById("textoRetorno").innerHTML = msgRetorno + botoesExtras;
        return;
    }
})