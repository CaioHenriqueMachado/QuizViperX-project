var options = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var points = 0;
var value = 10;

function calculator(question, number, points) {
  const divs = document.getElementsByClassName('question'+ String(question));
  initial = document.getElementsByClassName('question'+ String(question) +' selected');

  if ( initial.length != 0) {
    const divSelected = document.getElementsByClassName('question'+ String(question) +' selected');
    divSelected[0].classList.replace('selected', 'unselected');
  }
  divs[number].classList.add('selected');
  options[question - 1] = points;
}

function finish(){
  points = 0;
  options.forEach( (alternative, i) => {
    if (alternative == 1){
      points+=10;
    }
    if (alternative == 2){
      points+=7;
    }
    if (alternative == 3){
      points+=4;
    }
    if (alternative == 4){
      points+=1;
    }
  });

  while (true){
    if (points >= value){
      value+=10;
    }else {
      break;
    }
  }
}

function modal(){
  const texto = document.getElementById('h1Error');
  texto.innerText = `Seu nível marombeiro é de ${points}%`;

  const img = document.getElementById('imageResult');
  img.src = `./img/result/value${value}.jpg`;

  const modal = document.getElementById('modalError');
  modal.classList.toggle('show')
  
  

}