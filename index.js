const durationInput = document.querySelector('#duration');
const startBotton = document.querySelector('#start');
const pauseBotton = document.querySelector('#pause');

const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;

circle.setAttribute('stroke-dasharray', perimeter);


// startBotton.addEventListener('click', () => {console.log("this work")})

let duration;
const timer = new Timer(durationInput, startBotton, pauseBotton, {
    onStart(totalTime){
        duration = totalTime;
    },
    onTick(valueInput) {
        circle.setAttribute('stroke-dashoffset',
        perimeter * valueInput / duration - perimeter
        );

    },
    onCompletion() {
        console.log("We reach to completion broh!");
    }
});
// timer.start();





