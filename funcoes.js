function calculaIMC(peso, altura){  //Calcula o IMC do paciente com base no seu peso e altura
    var imc = peso / ( altura ** 2);  
    return imc
}

function verificaIMC(imc){  //Verifica em qual faixa o paciente se encaixa de acordo com o seu IMC 
    var situacao = null
    if (imc < 18.5 ) {
        situacao = "Magreza";
    } else if (imc <= 24.9) {
        situacao = "Normal";  
    } else if (imc <= 30) {
        situacao = "Sobrepeso"
    } else {
        situacao = "Obesidade"
    }
    return situacao
}

function lePaciente(){  //De acordo com os dados recebidos no Input, gera um objeto(paciente) para ser a base dos calculos que virão
    var inputNome = document.getElementById("txtNome");
    var inputPeso = document.getElementById("numPeso");
    var inputAltura = document.getElementById("numAltura");

    var paciente ={
        nome: inputNome.value,
        peso: inputPeso.value,
        altura: inputAltura.value
    }
    return paciente
}

function mostraPaciente(paciente){  //Função para interagir com os elementos do DOM, mostrando os dados inputados e calculados do paciente "x" 
    var imc = calculaIMC( paciente.peso, paciente.altura );
    var situacao = verificaIMC(imc);

    var spanNome = document.getElementById("nome");
    spanNome.innerHTML = paciente.nome;
    
    var spanPeso = document.getElementById("peso");
    spanPeso.innerHTML = paciente.peso;
    
    var spanAltura = document.getElementById("altura");
    spanAltura.innerHTML = paciente.altura;
    
    var spanImc = document.getElementById("imc");
    spanImc.innerHTML = imc.toFixed(2);
    
    var spanSituacao = document.getElementById("situacao");
    spanSituacao.innerHTML = situacao;
}

function gerarLista(pacientes){  //Gera uma lista que mostra os dados dos pacientes que já foram analisados
    var listaNumerada = document.getElementById("listaNumerada");
    listaNumerada.innerHTML = "" 

    pacientes.forEach((paciente) => {
                        var imc = calculaIMC(paciente.peso, paciente.altura);
                        var situcao = verificaIMC(imc)     
                        listaNumerada.innerHTML += `<li> ${paciente.nome} - Situação: ${situcao} </li>`;
                    });
}

function limpaInputs(){  //Função para limpar os campos a serem preenchidos
    document.getElementById("txtNome").value = "";
    document.getElementById("numPeso").value = "";
    document.getElementById("numAltura").value = "";
}