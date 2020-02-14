const q1answer = document.querySelectorAll("input[name='answer1']");



const resultButton = document.querySelector(".resultButton");
resultButton.addEventListener("click", checkResult);

const result = document.querySelector(".result");

let character = ""

function checkResult()
{
    let pointsTotal = 0;
    pointsTotal = pointsTotal + checkAnswer(q1answer);
    console.log(pointsTotal)
    
    if (pointsTotal = 1) 
    {
       character = "Darth Vader"; 
    }

    else if (pointsTotal = 2) 
    {
        character = "Kylo Ren";
    }

    else if (pointsTotal = 3)
    {
        character = "Darth Sidius";
    }

    result.textContent = character;
}


function checkAnswer (q)
{
    let pointsTotal = 0;

    for (let index = 0; index < q.length; index++) 
    {
        let inputElement = q[index];
        
        if (inputElement.checked) 
        {
            pointsTotal = pointsTotal + parseInt(inputElement.value)
        }

    }

    return pointsTotal;
}

//Fixa poängen