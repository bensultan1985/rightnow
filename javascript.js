let globe1 = document.getElementById('globe');

let ranNum = 0

function startRound () {

    globe1.innerHTML = 'Good luck!';

  }
const randomNumber = () => {
    ranNum = Math.floor(Math.random()*4)
};

globe1.onclick = () => {
    globe1.innerHTML = 'hello';
};

ranNum();
startRound();

globe1.innerHTML = 'hello'

let button = document.getElementById('test').innerHTML = 'changes'
