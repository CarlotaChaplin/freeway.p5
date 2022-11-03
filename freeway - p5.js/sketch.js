
   
//função do tamanho do quadro
//createCanvas(w/(x), h/(y), [renderer])
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

//função background e image para chamar as função preload
//image(img, x, y, [width], [height])
//chamamos as funções aqui

function draw() {
  background(imagemDaEstrada);
   mostraCarro();
   mostraAtor();
   movimentaCarro();
   movimentaAtor(); 
   voltaPosicaoInicialDoCarro();
   verificaColisao();
   incluiPontos();
   marcaPonto();  
}
 





