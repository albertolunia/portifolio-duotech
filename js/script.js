var interval = 0;
var variavel2 = document.querySelectorAll('.slide').length;

function funcao1() {
  let variavel3 = document.querySelectorAll('.slide img');
  setInterval(function () {
    variavel3[interval].style.display = 'none';
    interval++;
    if (interval == variavel2) {
      interval = 0;
    }
    variavel3[interval].style.display = 'block';
  }, 5000);
}

funcao1();