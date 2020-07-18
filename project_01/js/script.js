var options = [ 0, 0, 0, 0 ];

function teste1(option) {
  const divs = document.getElementsByClassName('question1');
  initial = document.getElementsByClassName('question1 selected');

  if ( initial.length != 0) {
    const divSelected = document.getElementsByClassName('question1 selected');
    divSelected[0].classList.replace('selected', 'unselected');
  }
  divs[option].classList.add('selected');


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
