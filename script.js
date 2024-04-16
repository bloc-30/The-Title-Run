const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
  questionElement.innertext = question.question
  question.answers.forEach(answer => {
    startButton.innerText = answer.text
    startButton.classList.add('btn')
    if (answer.correct) {
      startButton.dataset.correct = answer.correct
    }
    button.addEventListner('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
      ()
  }
}

function selectAnswer() {

}

const questions = [
  {
    question: 'Who is the best boxer in the UFC',
    answer: [
      { text: 'Max Holoway', correct: true },
      { text: 'Israel Adesanya', correct: false }
    ]
  }
]