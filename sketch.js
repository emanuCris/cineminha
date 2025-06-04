// deu certo, eu aacho
// dificil de fazer misericordia


// invocação do mal, 14, terror, misterio 
// the last of us, 18, drama     //minha serie favorita talvez
//coraline, 10, terror, infantil      // muito bom 

// alice no país das maravilhas, 10, infantil, aventura  //AMOOOOOOOO de paixao 
// pânico, 16, terror, misterio   // amo serio panico e muito bom principalmente primeiro, segundo, o quinto e o sexto 
// homem-aranha, 12, ação, ficção cientifica   //eu sou o homem-aranha ne 
// dia do sim, LIVRE, comedia, infantil  //nada a falar
// toy story, LIVRE, infantil, comedia    //melhor desenho de todos os tempos

let campoIdade;
let campoTerror;   //aventura para nao confundir :) 
let campoInfantil;   //fantasia

function setup() {
  createCanvas(800, 400);
  createSpan("Sua idade: ");
  campoIdade = createInput("5")
  campoIdade.position(10, 93);
  
  campoInfantil = createCheckbox(" Gosta de infantil?"); //prefiro terror
  campoInfantil.position(11,139);
  
  campoTerror = createCheckbox(" Gosta de terror?");
  campoTerror.position(10, 120);
  
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background("#7E7EFF"); //que cor bonitaa
  
  let idade = parseInt(campoIdade.value());
  let gostaDeTerror = campoTerror.checked();
  let gostaDeInfantil = campoInfantil.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeInfantil); // corrigir
  
  fill(color(76, 0, 115));
 text(recomendacao, width / 2, height / 2 ); //fiz tudo e deu erro nessa linha, mais ja corrig
}

function geraRecomendacao(idade, gostaDeTerror, gostaDeInfantil) { // tem que ser sempre maiusculo as primeiras letras tirando o gosto
  if (isNaN(idade)) {
    return "Digite uma idade válida!";
  }

  if (idade < 10) {
    if (gostaDeTerror && gostaDeInfantil) {
      return "Recomendado: 'Dia do Sim'";
    } else if (gostaDeInfantil) {
      return "Recomendado: 'Toy Story'";
    } else {
      return "Recomendado: 'Coraline'";
    }
  } else if (idade >= 18 && idade < 12) {
    if (gostaDeTerror && gostaDeInfantil) {
      return "Recomendado: 'Homem-Aranha: De Volta Para Casa'";
    } else if (gostaDeInfantil) {
      return "Recomendado: 'Alice no País das Maravilhas'";
    } else {
      return "Recomendado: 'Pânico'";
    }
  } else {
    if (gostaDeTerror && gostaDeInfantil) {
      return "Recomendado: 'The Last of Us'";
    } else if (gostaDeInfantil) {
      return "Recomendado: 'Alice no País das Maravilhas'";
    } else if (gostaDeTerror) {
      return "Recomendado: 'Invocação do Mal'";
    } else {
      return "Recomendado: 'Pânico'";
    }
  }
}