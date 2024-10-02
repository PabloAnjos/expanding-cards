const boxEstrada = document.querySelector('.container-estrada');
const boxFloresta = document.querySelector('.container-floresta');
const boxNevoeiro = document.querySelector('.container-nevoeiro');
const boxPonte = document.querySelector('.container-ponte');
const boxSol = document.querySelector('.container-sol');



boxEstrada.addEventListener('click', () => {
    boxEstrada.style.width = '1100px'
    boxFloresta.style.width = '120px'
    boxNevoeiro.style.width = '120px'
    boxPonte.style.width = '120px'
    boxSol.style.width = '120px'
    boxEstrada.style.transition = '2s'
});

boxFloresta.addEventListener('click', () => {
    boxFloresta.style.width = '1100px'
    boxEstrada.style.width = '120px'
    boxNevoeiro.style.width = '120px'
    boxPonte.style.width = '120px'
    boxSol.style.width = '120px'
    boxFloresta.style.transition = '2s'
});


boxNevoeiro.addEventListener('click', () => {
    boxNevoeiro.style.width = '1100px'
    boxFloresta.style.width = '120px'
    boxEstrada.style.width = '120px'
    boxPonte.style.width = '120px'
    boxSol.style.width = '120px'
    boxNevoeiro.style.transition = '2s'
});

boxPonte.addEventListener('click', () => {
    boxPonte.style.width = '1100px'
    boxEstrada.style.width = '120px'
    boxNevoeiro.style.width = '120px'
    boxSol.style.width = '120px'
    boxFloresta.style.width = '120px'
    boxPonte.style.transition = '2s'
});

boxSol.addEventListener('click', () => {
    boxSol.style.width = '1100px'
    boxNevoeiro.style.width = '120px'
    boxFloresta.style.width = '120px'
    boxEstrada.style.width = '120px'
    boxPonte.style.width = '120px'
    boxSol.style.transition = '2s'
});