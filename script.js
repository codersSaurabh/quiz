const quizdata = [
    {
        question: "In CSS font-weight is used for ?",
        a: 'text boldness',
        b: 'text height',
        c: 'text style',
        d: 'None of these',
        correct: 'a'

    },
    {
        question: "What is the most used programming language in 2019?",
        a: 'java',
        b: 'python',
        c: 'javascript',
        d: 'c',
        correct: 'c'
    },
    {
        question: "Who is the president of US?",
        a: 'Florian pop',
        b: 'Donald trump',
        c: 'Narendra modi',
        d: 'Jo byden',
        correct: 'd'
    },
    {
        question: 'What year javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the these',
        correct: 'd'
    },
    {
        question:"CSS stand for?",
        a:'Cascading Sheet Style',
        b:'Cascading Style Sheet',
        c:'Colouring Style Sheet',
        d:'All of the above',
        correct:'b'

    }
];
let currentQuiz = 0;
let score = 0;
const Text_a = document.getElementById('Text_a');
const Text_b = document.getElementById('Text_b');
const Text_c = document.getElementById('Text_c');
const Text_d = document.getElementById('Text_d');
const questionEl = document.getElementById('question');
const btn = document.getElementById("btn");
const quiz = document.getElementById('quiz');
const pageNo=document.getElementById("pageNo");
function loadQuiz() {
    deSelect();
    pageNo.innerHTML=`${currentQuiz+1}/${quizdata.length}`;
    const currentQuizData = quizdata[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    Text_a.innerText = currentQuizData.a;
    Text_b.innerText = currentQuizData.b;

    Text_c.innerText = currentQuizData.c;

    Text_d.innerText = currentQuizData.d;
};
function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deSelect() {
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
btn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer == quizdata[currentQuiz]. correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizdata.length) {
            loadQuiz();
        }
        else {
            //show results.

            quiz.innerHTML = `<h2>You answered correctly at ${score} /${quizdata.length} question.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
}
)
loadQuiz();

