import {Canvas} from './canvas.js'
import { Question } from './question_component.js';
import { New_Game } from './new_game.js';
import { AudioSounds } from './audio.js';

export function renderGamePage() {
    let main = document.querySelector('.main');
    main.innerHTML = ''
    let audio = new AudioSounds()
    let convasContainer = document.createElement('div')
    convasContainer.classList.add('convas_container')
    main.appendChild(convasContainer)
    let canvas = new Canvas(convasContainer)
    canvas.init();
    let countQuestions = 1
    let questionsContainer = document.createElement('div')
    questionsContainer.classList.add('uestions_container')
    let gameInfo = new New_Game(questionsContainer, 0, 30, 3, audio.mute)
    let questions = new Question(questionsContainer, 'history', countQuestions)
    main.appendChild(questionsContainer)
    questions.askQuestion()
    window.addEventListener('keydown', async (e) => {
        if ( (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)) {
            let check = questions.checkAnswer(e.key.toLowerCase())
            if (check.isCorrect) audio.playTrueSound()
            if (check.alreadyPushed) {
                console.log('alredy pushed')
            } else if(check.isQuestionDone) {
                while (convasContainer.firstChild) {
                    convasContainer.removeChild(convasContainer.firstChild);
                }
                countQuestions++
                questions.askQuestion()
                gameInfo.addAnswerQuestion()
                canvas = new Canvas(convasContainer)
                canvas.init();
            } else if (!check.isCorrect) {
                audio.playFalseSound()
                questions.wrongAnswerAnimation()
                canvas.drow()
                if (canvas.count === 6) gameInfo.decreaseLives()
                    if (canvas.count === 6 && gameInfo.livesCount > 0) {
                        setTimeout(() => {     
                            while (convasContainer.firstChild) {
                                convasContainer.removeChild(convasContainer.firstChild);
                            }
                            canvas = new Canvas(convasContainer)
                            canvas.init();
                        }, 1000)
                    }
                    if (gameInfo.livesCount === 0) {
                        alert('Game over')
                    }
            }
        }
    })
}
