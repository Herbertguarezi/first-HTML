var pacientes = [];  //Gera uma array vazia para inserir os pacientes cadastrados
var botaoCalcular = document.getElementById("calcularIMC");  //Cria uma variável para poder dar uma função ao botão
botaoCalcular.addEventListener('click', function(){  //Faz o botão ao receber um click executar as seguintes ações:
                                            var paciente = lePaciente();  //Cria uma variável paciente atribui a ela o objeto paciente com os dados inputados
                                            pacientes.push(paciente);  //Adiciona o paciente a array vazia(pacientes)
                                            mostraPaciente(paciente);  //Mostra os dados do paciente na tela
                                            limpaInputs()  //Limpa os dados dos campos a serem preenchidos
});

var botaoLista = document.getElementById("lista");  //Cria uma variável para poder dar uma função ao botão
botaoLista.addEventListener('click', function(){  //Faz o botão ao receber um click executar as seguintes ações:
                                        gerarLista(pacientes);  //Gera uma lista com todos os pacientes já cadastrados
});
