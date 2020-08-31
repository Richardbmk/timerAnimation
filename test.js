class Timer {
    constructor(timeDuration, startButton, pauseButton) {
        this.timeDuration = timeDuration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        startButton.addEventListener('click', this.start);
        pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.setIntervalID = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.setIntervalID);
    }

    tick = () => {
        this.inputValue = this.inputValue - 1;
    }

    get inputValue() {
        return this.timeDuration.value;
    }

    set inputValue(time) {
        return this.timeDuration.value = time;
    }
}



const timeDuration = document.querySelector('#timeInput');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');


const timer = new Timer(timeDuration, startButton, pauseButton);









