let total=0;
let buffer="0";
let operator;
const screen=document.querySelector(".screen");  // all buttons as input

let init=()=>
{
document
    .querySelector(".buttons")
    .addEventListener("click",function (event){  // after clicked a button
        buttonClick(event.target.innerText)
    });
}
let buttonClick=(input) =>  //button value as input
{
    // has to check whether a num or sym
    if(isNaN(parseInt(input)))
    {
        // input is not a num

         handleNaN(input);   
        }
        else {
            handleNum(input);
        }
        refresh();  
    
}
let handleNaN=input =>
{       // operation button or action button
    switch (input)
    {
        case "c":     // clears everything
            buffer="0";
            total=0;
            break;
        case "←":
            buffer=buffer.substring(0,buffer.length-1);
            break;     // action button completes
        case "=":
            if(operator==null) return;   // no operation has entered before
            else 
            {
                maths(parseInt(buffer));  //a;ready a operator is pressed
                operator=null;
                buffer +=total;
                total=0;
            }
            break;
            default:    // for the add sub mul....
                handleMath(input);
                break;

    }   // switch closes



}


let handleNum=input =>
{
    if(buffer =="0") buffer=input;
    else buffer += input;
}
let handleMath=input =>
{
    if(buffer=="0") return;
    else 
    {                   // operation plus min...
        const intBuffer= parseInt(buffer);
        if(total=0) 
            {total =intBuffer;}
        else 
        {  
             maths(input);
        }
        operator=input;
        buffer=intBuffer;
    }
}



let refresh=input =>
{
    screen.innerText=buffer;
}
let maths=input =>   // after the first operator
{
    if(operator=="+") total +=parseInt(buffer);
    else if(operator=="-") total -=parseInt(buffer);
    else if(operator=="*") total *=parseInt(buffer);
    else total /=parseInt(buffer);

}

init();