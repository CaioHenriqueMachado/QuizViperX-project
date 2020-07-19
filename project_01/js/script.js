var options = [ 0, 0, 0, 0 ];
var points = 0;

function calculator(question, number) {
  const divs = document.getElementsByClassName('question'+ String(question));
  initial = document.getElementsByClassName('question'+ String(question) +' selected');

  if ( initial.length != 0) {
    const divSelected = document.getElementsByClassName('question'+ String(question) +' selected');
    divSelected[0].classList.replace('selected', 'unselected');
  }
  divs[number].classList.add('selected');
  options[question - 1] = number + 1;
  console.log(options);
}

function finish(){
  points = 0;
  var resp = [ 1, 3, 1, 1];
  options.forEach( (alternative, i) => {
  alternative == resp[i] ? points+= 25 : points+= 0;
  });
}

function modal(){
  var textResp = 'Você finalizou com' + String(points) + 'pontos';
  const modal = document.getElementById('modalError');
  modal.classList.toggle('show')
  const texto = document.getElementById('h1Error');
  texto.innerText = `Você finalizou com ${points} pontos`;
}