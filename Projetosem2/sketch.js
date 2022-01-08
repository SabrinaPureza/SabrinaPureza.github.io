//variáveis da bola
let diametro = 13;
let bola = [300, 200, diametro, diametro / 2];

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = [110, 370]
let yRaquete = 158;

//variáveis do oponente
let xRaqueteOponente = [480, 220]
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

//para o oponente errar
let chanceDeErrar = 0;

//variáveis do gol
let xGol = 22;
let yGol = 157;
let golComprimento = 8;
let golAltura = 101;

//variáveis do gol oponente
let xGolOponente = 570;
let yGolOponente = 157;

// gol
let gol = [22, 157, 8, 101];
let golOponente = [570, gol[1], gol[2], gol[3]];

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto1 = loadSound("ponto1.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  campDeFutebol();
  movimentaMinhaRaquete();
  mostraJogadores ();
  colisaoRaquetes();
  incluiPlacar();
  mostraGol(xGol,yGol);
  mostraGol(xGolOponente,yGolOponente);
  verificaColisaoGol(xGol, yGol);
  verificaColisaoGol(xGolOponente, yGolOponente);
  marcaGol();
}

function mostraBolinha(){
  fill(color(255, 255, 255));
  circle(bola[0], bola[1], bola[2]);
}

function movimentaBolinha(){
  bola[0] += velocidadeXBolinha;
  bola[1] += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (bola[0] + bola[3]> width ||
     bola[0] - bola[3]< 0){
    velocidadeXBolinha *= -1;
  }
  if (bola[1] + bola[3]> height ||
     bola[1] - bola[3] < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostraJogadores (){
  for (let i = 0; i < xRaquete.length; i += 1) {
    fill(color(255,255,0));
    rect(xRaquete[i], yRaquete, raqueteComprimento, raqueteAltura);
    fill(color(255, 0, 0));
    rect(xRaqueteOponente[i], yRaqueteOponente, raqueteComprimento, raqueteAltura);
  }
} 

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
    yRaquete = constrain (yRaquete, 26, 280);
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
    yRaquete = constrain (yRaquete, 26, 280);
  }
     if (keyIsDown(87)) {
    yRaqueteOponente -= 10;
    yRaqueteOponente = constrain (yRaqueteOponente, 26, 280);
  }
  if (keyIsDown(83)) {
    yRaqueteOponente +=10;
    yRaqueteOponente = constrain (yRaqueteOponente, 26, 280);
  }
}

function colisaoRaquetes (){
  for (let i = 0; i < xRaquete.length; i += 1) {
    colidiu = 
    collideRectCircle(xRaquete[i], yRaquete, raqueteComprimento, raqueteAltura, bola [0], bola [1], bola[3]) || collideRectCircle(xRaqueteOponente[i], yRaqueteOponente, raqueteComprimento, raqueteAltura, bola [0], bola [1], bola[3]);
    if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();  
    }
  }
}

function incluiPlacar(){
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(50, 205, 50));
    rect(150, 5, 40, 20);
    fill(255);
    text(meusPontos, 170, 21);
    fill(color(50, 205, 50));
    rect(450, 5, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 21);
}


function mostraGol(x,y){
  rect(x, y, golComprimento, 
      golAltura);
}


function verificaColisaoGol(){
  if (bola[0] - bola[3] < xGol + golComprimento && 
      bola[1] - bola[3] < yGol + golAltura && 
      bola[1] + bola[3] > yGol){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoGol(x, y){
  colidiu = collideRectCircle(x, y,golComprimento,golAltura,bola[0],bola[1],bola[3]);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function marcaGol(){
  if(bola [0] > 567 && bola [1] > 150 && bola [1] < 250){
    meusPontos += 1;
    ponto1.play();
    bola [0] = 300;
    bola [1] = 200;
    
  }
   if(bola [0] < 35 && bola [1] > 150 && bola [1] < 250) {
    pontosDoOponente += 1;
     ponto1.play();
    bola [0] = 300;
    bola [1] = 200;
 }
}
