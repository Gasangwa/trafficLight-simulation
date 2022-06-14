var green = document.getElementById('light3');
var orange = document.getElementById('light2');
var red = document.getElementById('light1');
document.getElementById('simulate').addEventListener('click', function sim() {
  green.style.animation = 'greenlight 5s infinite';
  orange.style.animation = 'orangelight 5s infinite';
  red.style.animation = 'redlight 5s infinite';
});
document.getElementById('stop').addEventListener('click', function sim() {
  green.style.animation = '';
  orange.style.animation = '';
  red.style.animation = '';
});
document.getElementById('blink').addEventListener('click', function sim() {
  green.style.animation = 'blink 1s infinite';
  orange.style.animation = 'blink 1s infinite';
  red.style.animation = 'blink 1s infinite';
});
