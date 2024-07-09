import {questions} from '../data/questions.js'
export class Question {
    constructor(container, category, countQuestions) {
        this.questionContainer = document.createElement('div')
        this.questionContainer.classList.add('question_container')
        this.answerContainer = document.createElement('div')
        this.answerContainer.classList.add('answer_container')
        this.questions = questions[category]
        // container.appendChild(Object.assign(this.img = document.createElement('img'), {classList: ['img']})),
        container.appendChild(this.questionContainer)
        container.appendChild(this.answerContainer)
        this.countQuestions = 0
        this.answersLettersNodes = []
        this.pushedKeys = []
        this.correctLetters = 0
        this.currentQuestion
        this.countQuestions = countQuestions
    }
    askQuestion() {

        if(this.countQuestions < 11) {
            // this.img.src = 'https://stoneforest.ru/wp-content/uploads/2019/07/vysadka-v-normandii-3.jpg'
            this.pushedKeys = []
            this.correctLetters = 0
            let questionNumber = this.getRandomQuestion()
            this.currentQuestion = questionNumber
            this.questions[questionNumber].isAnswered = true
            this.questionContainer.textContent = this.countQuestions + '. ' + this.questions[questionNumber].question
            this.countQuestions++
            this.createAnswer(questionNumber)   
        }
    }
    getRandomQuestion() {
        let random = Math.floor(Math.random() * 10)
        return !this.questions[random].isAnswered ? random : this.getRandomQuestion();
    }
    createAnswer(questionNumber) {
        this.answersLettersNodes.forEach(item => {
            this.answerContainer.removeChild(item)
        })
        this.answersLettersNodes = []
       
        for (let index = 0; index < this.questions[questionNumber].answer.length; index++) {
            let letter = document.createElement('div')
            letter.classList.add('letter')
            letter.textContent = '_' 
            letter.dataset.correctAnswer = this.questions[questionNumber].answer[index]   
            this.answersLettersNodes.push(letter)
            this.answerContainer.appendChild(letter)
        }
    }
    checkAnswer(key) {
        let isCorrect = false
        let alreadyPushed = false
        let isQuestionDone = false
        if (this.pushedKeys.includes(key)) {
            alreadyPushed = true
        } else {
            this.pushedKeys.push(key)
            this.answersLettersNodes.forEach(item => {
                if(key === item.dataset.correctAnswer.toLowerCase()) {
                    item.textContent = item.dataset.correctAnswer
                    item.classList.add('passed_question_element')
                    isCorrect = true
                    this.correctLetters++ 
                    if (this.correctLetters === this.questions[this.currentQuestion].answer.length) {
                        isQuestionDone = true
                    }
                }
            })
        }
        return {
            isCorrect: isCorrect,
            alreadyPushed: alreadyPushed,
            isQuestionDone: isQuestionDone,
        }
    }
    wrongAnswerAnimation() {
       this.answerContainer.classList.add('incorrect-answer');
        setTimeout(() => {
            this.answerContainer.classList.remove('incorrect-answer');
        }, 1000);
    }
}

