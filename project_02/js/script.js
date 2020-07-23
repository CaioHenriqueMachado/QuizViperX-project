var options = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
var texts = {
  10: "Não tá ruim, mas também não está bom !!",
  20: "Pandemia chegou, e o shape aqui está quase indo embora !!",
  30: "Não se deixe levar pelo tempo de isolamento, da pra melhorar !!",
  40: "O esforço está bom, mas você consegue melhoras !!",
  50: "Pandemia chegou, mas o importante é que você não parou !!",
  60: "A rotina não é a mesma, mas o importante é o esforço para tentar manter !!",
  70: "Parabéns, está mantendo conseguindo manter o shape do jeito que dá !!",
  80: "Está se esforçando mesmo nessa crise, é admirável a sua atidude !!",
  90: "Se manter na atividade em meio a pandemia é para poucos, parabéns !!",
  100: "A pandemia não abala quem tem mente e corpo forte, parabéns guerreiro(a) !!"
}
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
  const title = document.getElementById('h1Error');
  title.innerText = `Seu nível marombeiro é de ${points}%`;

  const img = document.getElementById('imageResult');
  img.src = `./img/result/value${value}.jpg`;

  const text = document.getElementById('textResult');
  text.innerText = texts[value];

  const modal = document.getElementById('modalError');
  modal.classList.toggle('show')
}