const questions = document.querySelectorAll('.question__heading');
const answers = document.querySelectorAll('.answer');

questions.forEach(question => 
    question.addEventListener('click', e => {
        e.target.nextElementSibling.classList.toggle('visible');
        answers.forEach(answer =>  {
            let questionImg = answer.previousElementSibling.firstElementChild;
            if (answer.classList.contains('visible'))
            {   
                questionImg.src = questionImg.src.replace('plus', 'minus');
                if (e.target.nextElementSibling != answer){
                    answer.classList.remove('visible');
                    questionImg.src = questionImg.src.replace('minus', 'plus');  
                }
            }   
            else
                questionImg.src = questionImg.src.replace('minus', 'plus');     
            
            return; 
        })
    })    
)