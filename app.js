let quantidadeNumeroSecreto = 10;
let listaNumeroSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirTexto();
console.log(numeroSecreto);

function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemAcertou = `Muito bem, você descobriu o número secreto, em ${tentativas} ${palavraTentativa} !!!`;
        exibirTextoTela('h1', 'Acertou!!!');
        exibirTextoTela('p', mensagemAcertou);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto < chute){
            exibirTextoTela('h1', 'Que pena, tente novamente');
            exibirTextoTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoTela('h1', 'Que pena, tente novamente');
            exibirTextoTela('p', 'O numero secreto é maior');
        }
        tentativas ++;
        limarCampo();
    }
}

function exibirTexto() {
    exibirTextoTela('h1', 'Jogo do Número Secreto');
    exibirTextoTela('p', `Escolha um número entre 1 e ${quantidadeNumeroSecreto}`);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random(10)* quantidadeNumeroSecreto + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;

if (quantidadeElementosLista == quantidadeNumeroSecreto){
    listaNumeroSorteados = [];
}

    if (listaNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }
}

function limarCampo() {
    chute = document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limarCampo();
    tentativas = 1;
    exibirTexto();
    console.log(numeroSecreto);
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}