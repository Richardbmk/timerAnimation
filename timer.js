class Timer {
    constructor(durationInput, startBotton, pauseBotton, callbacks){
        this.durationInput = durationInput;
        this.startBotton = startBotton;
        this.pauseBotton = pauseBotton;

        this.startBotton.addEventListener('click', this.start);
        this.pauseBotton.addEventListener('click', this.pause);

        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onCompletion = callbacks.onCompletion;
        }
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.valueInput);
        }
        this.tick();
        this.interval = setInterval(this.tick, 10);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        // const valueInput = this.valueInput;
        // this.valueInput = valueInput - 1;
        // The code above could become this:
        // this.valueInput = this.valueInput - 1;
        if(this.valueInput <= 0) {
            this.pause();
            if(this.onCompletion) {
                this.onCompletion();
            }
        } else {
            this.valueInput = this.valueInput - 0.01;
            if(this.onTick) {
                this.onTick(this.valueInput);
            }
        }
    }

    get valueInput() {
        return parseFloat(this.durationInput.value);
    }

    set valueInput(timer) {
        return this.durationInput.value = timer.toFixed(2);
    }
}

