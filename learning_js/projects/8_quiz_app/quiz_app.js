const questions = [
    {
        'question' : 'numbers = [1, 2, 3, 4, 5]. squares = list(map(lambda x: x**2, numbers)). What does the squares list contain after executing the code?',
        'A': '[1, 2, 3, 4, 5]',
        'B': '[1, 4, 9, 16, 25]',
        'C': '[2, 4, 6, 8, 10]',
        'D': '[0, 1, 4, 9, 16]',
        'correct_ans': 'B'
    },
    {
        'question' : '["apple", "banana", "cherry"]. filtered_words = list(filter(lambda x: len(x) > 5, words)). What is the value of filtered_words after executing the code?',
        'A':'["apple"]',
        'B':'["banana"]',
        'C':'["cherry"]',
        'D':' ["banana", "cherry"]',
        'correct_ans': 'D'
    },
    {
        'question' : 'num1 = [1, 2, 3], nums2 = [4, 5, 6]. result = list(zip(nums1, nums2)). What is the value of result after executing the code?',
        'A': '[(1, 4), (2, 5), (3, 6)]',
        'B': '[5, 7, 9]',
        'C': '[(1, 2, 3), (4, 5, 6)]',
        'D': '[1, 2, 3, 4, 5, 6]',
        'correct_ans': 'A'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")

const loadQuestion = () => {
    if (index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quesBox.innerHTML = `Q. ${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = `A. ${data.A}`;
    optionInputs[1].nextElementSibling.innerText = `B. ${data.B}`;
    optionInputs[2].nextElementSibling.innerText = `C. ${data.C}`;
    optionInputs[3].nextElementSibling.innerText = `D. ${data.D}`;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    console.log(ans,data);
    if (ans == data.correct_ans){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked){
            answer = input.value;
        }
    })
    return answer
}

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    console.log(right,wrong);
    document.getElementById("box").innerHTML = `<h3>Thank you playing the quiz</h3><h2> ${right}/ ${total} is correct</h2>`
}
loadQuestion()