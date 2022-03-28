import React from "react";
import stringRepair from "../tools/stringRepair";

export default function endScreen(answers,setBoxContent,setBottomBoxContent){
    const correctAnswers = (answers.filter(answer=> answer.correct === true)).length;
    let answersboxes = []
    answers.forEach(element => {
        /*en este punto tuve un problema importate con la presentacion 
        de los caracteres especiales HTML que entregaba el api en el String del titulo,
        al intentar buscar documentacion sobre este problema y tardar horas sin hallar nada
        al respecto, decidi forzar el cambio dentro del String de los caracteres especiales        
        */
        if(element.title.indexOf(';') !== -1){
        element.title = stringRepair(element.title);
        }
        
        let answerClass = "aFalse"
        if (element.answer=== "True"){
            
            answerClass ="aTrue"
        }

        if (element.correct === true){
            answersboxes.push(<div className={"result-box approved "+ answerClass} key={element.key}><h1>✅</h1><p>{element.title}</p></div>)
        }
        else{
            answersboxes.push(<div className={"result-box "+ answerClass} key={element.key}><h1>❌</h1><p>{element.title}</p></div>)
        }
        
    });
    
    const percentage = parseInt(correctAnswers*100/11);
    
    const results = <div className="end-box"><h1>You scored <br></br> {correctAnswers}/11 or {percentage}%</h1>
    <div className="answers_cards-box">
        <h3>The background color indicates the correct answer of the question.</h3>
        {answersboxes}
    </div>
    </div>;
    



    const playAgainButton=<section className="bottom-box">
        <button className="button btn-blue" onClick={()=>{window.location.replace('')}} >PLAY AGAIN?</button>
        </section>;
    setBoxContent(results)

    setBottomBoxContent(playAgainButton)

}