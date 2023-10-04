
const mario = document.querySelector('.mario');

const tubo = document.querySelector('.tubo');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetleft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px"," ");

    
    if (tuboPosition <= 70 && tuboPosition < 0 && marioPosition < 90 ) {
        tubo.style.animation = none;
        tubo.style.left = '${tuboPosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
    } 

}, 10);


document.addEventListener('keydown', jump);

