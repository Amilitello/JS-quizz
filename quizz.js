var startscreen = document.getElementById("startscreen")
var startbutton = document.getElementById("startbutton")
var questions = document.getElementById("questions")
var choices = document.getElementById("choices")
var endscreen = document.getElementById("endscreen")
var finalscore = document.getElementById("finalscore")
var name = document.getElementById("name")
var submit = document.getElementById("submit")
var questiontitle = document.getElementById("questiontitle")
var questionarray = [
    {
        title: "This is question 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Anaswer 4"],
        answer: "Answer 2"
    },
    {
        title: "This is question 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Anaswer 4"],
        answer: "Answer 2"
    },
    {
        title: "This is question 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Anaswer 4"],
        answer: "Answer 2"
    },
    {
        title: "This is question 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Anaswer 4"],
        answer: "Answer 2"
    },
    {
        title: "This is question 1",
        choices: ["Answer 1", "Answer 2", "Answer 3", "Anaswer 4"],
        answer: "Answer 2"
    }

]
var index = 0
var time = 120
var timerid;
function start() {
    startscreen.setAttribute("class", "hide")
    questions.removeAttribute("class")
    getquestion()
}
function getquestion() {
var current = questionarray [index]
questiontitle.textContent = current.title
}

startbutton.onclick = start

// loop over choices 