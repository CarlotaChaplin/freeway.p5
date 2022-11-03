
//foi criado as variaveis das imagens carregadas
//depois criamos os outros carros 2 e 3
//variavel dos sons
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


//função de pre carregamento das imagens
//depois foi feito o pre load dos carros 2 e 3
//criamos lista para imagens
//função de pre carregamento dos sons loadsound

function preload(){
    imagemDaEstrada = loadImage("imagens/estrada.png");
    imagemDoAtor = loadImage("imagens/ator-1.png");
    imagemCarro = loadImage("imagens/carro-1.png");
    imagemCarro2 = loadImage("imagens/carro-2.png");
    imagemCarro3 = loadImage("imagens/carro-3.png");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro, imagemCarro2,imagemCarro3]
  
  somDaTrilha= loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
  
}  
