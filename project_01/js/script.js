var options = [ 0, 0, 0, 0 ];

function teste1(option) {
  const divs = document.getElementsByClassName('question1');
  const divSelected = document.getElementsByClassName('question1 selected');
  console.log(divSelected);
  divSelected[0].classList.replace('selected', 'unselected');

  // 
  console.log(divs);

  // for  (let div in divs ){
  //   console.log(div);
  // }

//   console.log(divs.forEach());
  divs[option].classList.add('selected');
//   options[0] = option;
}

function teste2(option) {
  options[1] = option;

}

function teste3(option) {
  options[2] = option;

}

function teste4(option) {
  options[3] = option;

}
