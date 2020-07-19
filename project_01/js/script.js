var options = [ 0, 0, 0, 0 ];

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
  var resp = [ 1, 3, 1, 1];
  var points = 0;
  options.forEach( (alternative, i) => {
  alternative == resp[i] ? points+= 25 : points+= 0;
  });
 console.log(points);
}

function modal(){
  const modal = document.getElementById('modalError');
  modal.classList.toggle('show')
  const texto = document.getElementById('h1Error');
  texto.innerText = 'SUA PONTUAÇÃO FOI DE ' + String(points);
}