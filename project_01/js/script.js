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

var resp = [ 1, 3, 1, 1];

function finish (){
  var points = 0;
  options.forEach( (alternative, i) => {
  alternative == resp[i] ? points+= 25 : points+= 0;
  });
 
 console.log(points); 
}

