export class AudioSounds {
    constructor() {
        this.trueSound = new Audio('./assets/mixkit-small-win.wav');
        this.falseSound = new Audio('./assets/mixkit-retro-arcade-lose.wav');
        this.currentSound = null;
        this.muteSounds = false;
    }
    playTrueSound() {
        this.stopCurrentSound(); 
        this.currentSound = this.trueSound;
        if (this.trueSound.paused && !this.muteSounds) {
            this.trueSound.play();
        }
    }

    playFalseSound() {
        this.stopCurrentSound(); 
        this.currentSound = this.falseSound;
        if (this.falseSound.paused && !this.muteSounds) {
            this.falseSound.play();
        }
    }

    stopCurrentSound() {
        if (this.currentSound) {
            this.currentSound.pause();
            this.currentSound.currentTime = 0;
        }
    }
    mute = () => {
        this.muteSounds === false ? this.muteSounds = true : this.muteSounds = false
    }
}