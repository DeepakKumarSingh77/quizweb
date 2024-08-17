const questions=[
    {
        question:"Which planet is known as the Red Planet?",
        answer:[
            {
                text:"Venus",correct:"false"
            },
            {
                text:"Mars",correct:"true"
            },
            {
                text:"Jupitor",correct:"false"
            },
            {
                text:"Saturn",correct:"false"
            },
        ]
    },
    {
        question:"Who wrote the play Romeo and Juliet?",
        answer:[
            {
                text:"William Shakespeare",correct:"true"
            },
            {
                text:"Charles Dickens",correct:"false"
            },
            {
                text:"Jane Austen",correct:"false"
            },
            {
                text:"Mark Twain",correct:"false"
            },
        ]
    },
    {
        question:"What is the capital city of Australia?",
        answer:[
            {
                text:"Sydney",correct:"false"
            },
            {
                text:"Melbourne",correct:"false"
            },
            {
                text:"Brisbane",correct:"false"
            },
            {
                text:"Canberra",correct:"true"
            },
        ]
    },
    {
        question:"Which element has the chemical symbol 'O'?",
        answer:[
            {
                text:"Gold",correct:"false"
            },
            {
                text:"Oxygen",correct:"true"
            },
            {
                text:"Osmium",correct:"false"
            },
            {
                text:"Omnium",correct:"false"
            },
        ]
    },
]

const ques=document.getElementById("question");
const answer=document.getElementById("ans-btn");
const nextbtn=document.getElementById("nxt");

let questionindex=0;
let cnt=0;
function showQues(){
    ques.textContent="";
     let question=questions[questionindex].question;
     let index=questionindex+1;
     ques.textContent=index+ ". " + question;
     nextbtn.style.display="none";
     
     answer.innerHTML="";
     questions[questionindex].answer.forEach(ans=>{
        const button=document.createElement("button");
        button.textContent=ans.text;
        answer.appendChild(button);
        
        if(ans.correct){
            button.dataset.correct=ans.correct;
        }
        button.addEventListener("click",(e)=>{
              let value=e.target.dataset.correct;
              if(value==="true"){
                cnt++;
                button.style.backgroundColor="green";

              }
              else{
                button.style.backgroundColor="red";
              }
              Array.from(answer.children).forEach((button)=>{
                button.setAttribute("disabled","true");
              })
              nextbtn.style.display="block";
        })

     })  
}

function nextquestion(){
    questionindex++;
    if(questionindex<questions.length){
        showQues();
    }else{
       questionindex=-1;
       ques.textContent="";
       answer.innerHTML="your Score is "+ cnt + "out of " +questions.length;
    }

}


showQues();