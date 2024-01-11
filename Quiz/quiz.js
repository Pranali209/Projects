const questions = [{
    'que': 'Which of these elements in HTML can be used for making a text bold?',
    'a': 'a',
    'b': 'b',
    'c': 'br',
    'd': 'pre',
    'correct': 'b'
},
{
    'que': 'Which tag do we use to define the options present in the drop-down selection lists?',
    'a': 'List',
    'b': 'Option',
    'c': 'Dropdown',
    'd': 'Select',
    'correct': 'Option'
},
{
    'que': ' Which HTML tag do we use to display text along with a scrolling effect?',
    'a': 'Div',
    'b': 'Scroll',
    'c': 'Marquee',
    'd': 'None of above',
    'correct': 'Marquee',
}];

let index = 0;
let right = 0 ;
let  wrong  = 0;
const inputs = document.querySelectorAll('.Options');
let total = questions.length;


function loadquestion() {
   if (index == total) {
        return endquiz()
    }
    resetfunction()

    const data = questions[index];
    document.getElementById("questiontag").innerHTML = `${index + 1} ${data.que}`;
    // console.log(inputs);
    inputs[0].nextElementSibling.innerHTML = " " + data.a;
    inputs[1].nextElementSibling.innerHTML = " " + data.b;
    inputs[2].nextElementSibling.innerHTML = " " + data.c;
    inputs[3].nextElementSibling.innerHTML = " " + data.d;


    // document.getElementById("opt1").innerHTML = " "+data.c 

}


submitme = () => {
   
    const data = questions[index];
    const ans = getanswer();
    
      if(data.correct === ans)
      {
        right = right+1;
      }
      else{
         wrong = wrong +1;
      }

      
    index++;
    loadquestion();
  
    return

}

// document.querySelector("#btnsubmit").addEventListener(
//     "click",
//     function() {
//         const data = questions[index]
//         const ans = getanswer()
//         if (ans === data.correct) {
//             right++;
//         } else {
//             wrong++;
//         }
//         index++;
//         loadquestion()
//     }
// )
function getanswer() {
    let answer;
    inputs.forEach(
        (element) => {
            if (element.checked) {
                answer = (element.value);
            }

        }
    )
    return answer;
}

const resetfunction = () => {
    inputs.forEach((element) => {
        element.checked = false;
    })
}

const endquiz = () => {
    let box = document.getElementsByClassName("quizcard");
    box[0].style.display = "none";
    document.getElementById("end").innerHTML = "Quiz has Submitted Successfully!!!!";
    document.getElementById("score").innerHTML = `${right}/ ${total}`;
}


loadquestion(index)

