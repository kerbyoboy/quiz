var startButton = document.getElementById('startBtn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerElement = document.getElementById('answerBtn')
var timer ;
var timerElement = document.getElementsByClassName('timer')
let currentQuestionIndex, shuffledQuestions

startButton.addEventListener('click', startQuiz)

function startQuiz () {
    console.log('Started')
    startButton.classList.add('hide')
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    timer = setInterval(timeManage, 1000)
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    nextQuestion()
}
function timeManage () {
    timer--
    timerElement.textContent = timer
    if (timer <= 0) {
        endQuiz(); 
    }
}
function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
    questionElement.innerText = question.question
    
}
function selectAnswer(choices) {
    
}
function endQuiz () {
    clearInterval(timer)
}
var questions = [
    {
    question: "1. What color is the sun?",
    choices: ["Yellow", "Blue", "Green", "Purple"],
    correctAnswer: 0
}, 
{
    question: "2. Vampires are known for turnining into what animal?",
    choices: ["Cows", "Lions", "Bats", "Pigs"],
    correctAnswer: 2
}, 
{
    question: "3. Animals that eat both plants and meat are called:",
    choices: ["Herbivores", "Omnivores", "Bothivores", "Carnivores"],
    correctAnswer: 1
}, 
{
    question: "4. Name the capitol of Florida.",
    choices: ["Tallahassee", "Miami", "Orlando", "Tampa"],
    correctAnswer: 0
}, 
{
    question: "5. When is Pi day celebrated?",
    choices: ["March 14", "May 14", "March 24", "May 24"],
    correctAnswer: 0
}];
var countdown = questions.length * 20
