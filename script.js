const topDisplay = document.querySelector(".top");
const bottomDisplay = document.querySelector(".bottom");

let evaluation = "";

const appendCharacter = (ch)=>{
    evaluation += ch;
    bottomDisplay.innerHTML = evaluation;
}

const calc = ()=>{
    try{
        topDisplay.innerHTML = evaluation;
        evaluation = Number(eval(evaluation));
        bottomDisplay.innerHTML = evaluation;
    }
    catch(e){
        console.log(e);
    }
}

const cleared = ()=>{
    topDisplay.innerHTML = "";
    bottomDisplay.innerHTML = "";
    evaluation = "";
}

const backspace = ()=>{
    evaluation = evaluation.substring(0,evaluation.length-1);
    bottomDisplay.innerHTML = evaluation;
}
