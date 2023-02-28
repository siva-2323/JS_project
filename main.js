
let total=0;
let buffer="0";
let operator;
const screen=document.querySelector(".screen");

let init=()=>
{
    document
        .querySelector(".buttons")
        .addEventListener("click",function (event)
        { 
            buttonClick(event.target.innerText)
        });
}

let buttonClick=(input) => 
{
    if(isNaN(parseInt(input)))
    {
         handleNaN(input);   
    }
    else 
    {
        handleNum(input);
    }
    refresh();  
    
}

let handleNaN=input =>
{       
    switch (input)
    {
        case "c":
            buffer="0";
            total=0;
            break;
    
        case "←":
            buffer=buffer.substring(0,buffer.length-1);
            break;

        case "=":
            if (operator === null)
            {
                return;
            }else
            {
                maths(parseInt(buffer));
                operator = null;
                buffer = +total;
                total = 0;
            }
            break;   

        default: 
            handleMath(input);
            break;

    } 
}

let handleNum=(input) =>
{
    if(buffer ==="0")
    {
        buffer=input
    }
    else
    {
        buffer += input
    };
}

let handleMath=(input) =>
{
    if(buffer==="0")
    {
        return;
    }
    else 
    {                 
        const intBuffer= parseInt(buffer);
        if(total===0)
        {
            total =intBuffer;
        }
        else 
        {  
             maths(intBuffer);
        }
        operator=input;
        buffer="0";
    }
}



let refresh=(input) =>
{
    screen.innerText=buffer;
}

let maths=(input) =>
{
    if(operator==="+")
    {
        total +=input;

    }else if(operator==="-")
    {
        total -=input

    }else if(operator==="*")
    {
        total *=input;
        
    }else
    {
        total /=input
    }
}


try 
{
init();
}

catch 
{
    alert("Unexpected error occured. Check your internet connection");
}