let total=0;
let state="0";
let previousOperator;
let screen=document.querySelector(".screen");

let pressed=input =>
{
    if(isNaN(parseInt(input))){
        symbol(input);
    }else{
        num(input);
    }
    rerender();
}
let num=input=>
{
    if(state=="0")
    {
        state=input;
    }else state +=input;
}
let rerender=input =>
{
    screen.innerText =state;
}
let symbol=input=>
{
    if(input=='c')
    {
        state="0";
        total=0;
    }
    else if(input=="=")
    {
        if(previousOperator === null)
        return;
    }
    operation(parseInt(state));
    previousOperator = null;
    state +=total;
    total=0;
    if(input =="←")
    {
        if(state.length === 1)
        {
            state = "0";
        }else {
            state.substring(0,state.length-1);
        }
    }else maths(input);
}
let maths=input=>
{
    if(state=="0")
    {
        return;
    }
}
function init(){
    document.querySelector(".ind")
    .addEventListener("pressed",function(input)
    {
        pressed(input.target.innerText);
    });
}
init();