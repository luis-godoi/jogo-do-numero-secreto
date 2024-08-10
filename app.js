let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

//a funcao verificarChute() executa
function verificarChute() {
  //a variavel chute vai receber o valor colocado no input do html
  let chute = document.querySelector('input').value;
  //se o chute for igual ao numero secreto vai ser exibido...
  if (chute == numeroSecreto) {
    //se a tentativa for menor que 1 coloca tentativas, se não, tentativa
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    //frase:
    let mensagemTentativas = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('h1', 'Acertou!');
    //xibe o texto da variavel mensagemTentativas no p
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

  //se não for igual blablabla
  } else {
      if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O numero secreto é menor');
      } else {
        exibirTextoNaTela('p', 'O numero secreto é maior');
      }
      tentativas++;
      limparCampo()
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
  } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  exibirMensagemInicial()
  limparCampo();
  numeroSecreto = gerarNumeroAleatorio();
  tentativas = 1;
  document.getElementById('reiniciar').setAttribute('disabled', true); //pegue o elemento com o id 'reiniciar' e ative o atributo 'disabled' como verdadeiro!
}
