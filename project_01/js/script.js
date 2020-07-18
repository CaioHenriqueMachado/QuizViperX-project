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

function final (){
  console.log('enviou')
}