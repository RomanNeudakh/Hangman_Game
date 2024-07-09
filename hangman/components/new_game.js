export class New_Game {
    constructor(container, questions, timer, lives, muteFunc) {
        this.questions = questions;
        this.timer = timer;
        this. livesCount = lives;
        container.appendChild(Object.assign(this.gameInfoContainer = document.createElement('div'), {classList: ['game_info']}));
        this.gameInfoContainer.appendChild(Object.assign(this.questionsContainer = document.createElement('div'), {classList: ['current_question']}));
        this.gameInfoContainer.appendChild(Object.assign(this.timerElement = document.createElement('div'), {classList: ['timer']}));
        this.gameInfoContainer.appendChild(Object.assign(this.lives = document.createElement('div'), {classList: ['lives']}));
        this.gameInfoContainer.appendChild(Object.assign(this.muteButton = document.createElement('div'), {classList: ['muteButton']})),
        this.muteButton.addEventListener('click', () => {
            muteFunc()
            this.muteButton.classList.toggle('muted')
        })
        this.lives.textContent = this.livesCount;
        this.currentQuestionArray = Array.from({ length: 10 }).map((_, index) => {
            const currentQuestionElement = document.createElement('div');
            index === this.questions ?  currentQuestionElement.classList.add('current_question_element') :  _ ;
            index < this.questions && index !== this.questions ? currentQuestionElement.classList.add('passed_question_element') :  _;
            index > this.questions ? currentQuestionElement.classList.add('future_question_element') :  _;
            index < this.questions ? currentQuestionElement.textContent = 'o' : currentQuestionElement.textContent = `${index + 1}`
            this.questionsContainer.appendChild(currentQuestionElement);
            return currentQuestionElement;
        });
        this.timerElement.textContent = `${~~(this.timer/60) < 10 ? '0' + ~~(this.timer/60) : ~~(this.timer/60)} : ${this.timer%60 < 10 ? '0' + this.timer%60 : this.timer%60}`
        this.startTimer()
    }
    fillGameInfoContainer() {

    }
    addAnswerQuestion () {
        this.currentQuestionArray[this.questions].textContent = 'X';
        this.currentQuestionArray[this.questions].classList.remove('current_question_element');
        this.currentQuestionArray[this.questions].classList.add('passed_question_element');
        this.currentQuestionArray[this.questions + 1].classList.remove('future_question_element');
        this.currentQuestionArray[this.questions + 1].classList.add('current_question_element');
        this.questions < 10 ? this.questions++ : this.questions = 0 && this.currentQuestionArray.forEach((item) => {
            item.textContent = '_'
        });
    }
    decreaseLives() {
        this.livesCount--
        this.lives.textContent = this.livesCount
    }
    startTimer() {
        setInterval(() => {
            this.timerElement.textContent = `${~~(this.timer/60) < 10 ? '0' + ~~(this.timer/60) : ~~(this.timer/60)} : ${this.timer%60 < 10 ? '0' + this.timer%60 : this.timer%60}`
            this.timer ++
        }, 1000)
    }
}
