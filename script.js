const quizDb = [
    {question: "What is the full form of Http?",
     a:"Hyper text Trensfer Product",
     b:"Hyper test Transefre protocol",
     c:"Hyper Thread transfer protocol",
     d:"Hyper Text transfer Protocol",
     ans:"ans4", 
    },

    {question: "What is the full form of url?",
     a:"Uniform resource Load",
     b:"Unicorn Resource Load",
     c:"Uniform Resource Locator",
     d:"Uniform Reforce Locator",
     ans:"ans3", },


];


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer")

 let questionCount = 0;

const loadQuestion = () =>{
    const questionList = quizDb[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}    

loadQuestion();

const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElement)=>{
        if(curAnsElement.checked){
            answer = curAnsElement.id;
        }

    });
    return answer;
}


let score =0;

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer===quizDb[questionCount].ans){
        score++;
    }
    questionCount++;

    //deselect

    if(questionCount<quizDb.length){
        loadQuestion();
    }
    else{

        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDb.length} </h3>
        <button class = "btn" onClick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove("scoreArea");
    }
})