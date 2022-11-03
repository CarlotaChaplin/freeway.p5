//foi criado a variavel para mostrr ator
let xAtor = 85;
let yAtor=366;

let colisao= false;

let meusPontos= 0;


//função mostrar o ator
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor,30,30);
  
}

//movimento do ator
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
  if(keyIsDown(DOWN_ARROW)) {
   if(podeSeMover()){ 
    yAtor+=3;
   }
  }
}

//função para verificar a colisao dos carros com a vaquinha
 //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisao(){
  for (let i =0; i< imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
     voltaAtoeParaPosicaoInicial();
      somDaColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -=1;
    }
    }
  }  
}

//função caso colida voltar para posição inicial 
function voltaAtoeParaPosicaoInicial(){
  yAtor=366;
}

//incluir placar dos pontos na tela 
function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(255,240,60));
  text(meusPontos, width/5, 27);
}

//função pra registrar os pontos
function marcaPonto(){
  if(yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    voltaAtoeParaPosicaoInicial();
    
  }
} 

 function pontosMaiorQueZero(){
   return meusPontos > 0;
 }


function podeSeMover(){
  return yAtor < 366;
}