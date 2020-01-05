let globe = document.getElementById('globe');

let ranNum = 0
const randomNumber = () => {
    ranNum = Math.floor(Math.random()*4)
};

globe.onclick = () => {
    globe.innerHTML = 'hello';
};

ranNum();