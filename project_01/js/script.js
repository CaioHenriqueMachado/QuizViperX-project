var options = [ 0, 0, 0, 0 ];

function teste1(option) {
  var models = document.getElementsByClassName('question1');
  // var model = models[option];
  models[option].element.classList('selected');
  console.log(models);
  console.log(model);
  options[0] = option;
  console.log(options);
}

function teste2(option) {
  options[1] = option;
  console.log(options);
}

function teste3(option) {
  options[2] = option;
  console.log(options);
}

function teste4(option) {
  options[3] = option;
  console.log(options);
}
