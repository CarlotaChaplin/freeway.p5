//Foi criado Listas(xcarro, ycarro e velocidade) para melhorar o codigo e eliminando as variaveis juntando elas em lista.

//lista yCarros
let yCarros = [40,96,150,210,270,318];

//lista xCarros
let xCarros = [600,600,600,600,600,600];

//lista velocidade carros
let velocidadeCarros = [2,2.5,3.2,5,3.3,2.3];

//criamos as variaveis para o comprimento e altura do carro
let comprimentoCarro= 50;
let alturaCarro=40;


//função mostrar o carro
//após criar as lista foi alterado o codigo com os indices
//refatoramos o codigo fazendo o loop com for
 // variavel/quantos vezes eu quero repetir-comparação/incremento(a cada repetição)

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}


//movimento do carrinho
//após criar as lista foi alterado o codigo com os indices
//refatoramos o codigo fazendo o loop com for

function movimentaCarro(){  
 for(let i=0; i< imagemCarros.length; i++) {
   xCarros[i] -= velocidadeCarros[i];
 } 
}

//função para os carros voltarem
//após criar as lista foi alterado o codigo com os indices
//refatoramos o codigo fazendo o loop com for
//a variavel let i =0 enquanto o i for menor que a imagem carros (o length) eu quero falar que o valor de i a cada repetição é o valor dele mesmo +1

function voltaPosicaoInicialDoCarro(){
  for(let i =0; i < imagemCarros.length; i++){
     if(passouTodaATela(xCarros[i])){
       xCarros[i]=600;
     }   
  }  
}

function passouTodaATela(xPosicaoCarro){
  return xPosicaoCarro < -50;
}