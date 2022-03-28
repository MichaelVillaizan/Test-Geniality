import React from "react";
import './main.css';
import stringRepair from "../tools/stringRepair";

export default function GameStart({setBoxContent, setBottomBoxContent,startGame,boxContent,bottomBoxContent,qText,currentQuestion,setQText}){
    //start content
    const startContent = <div className="welcome-box"><h1>Welcome to the trivia challenge!</h1>
    <h2>You will be presented with 11 True or False questions.</h2>
    <h2 className="emotion-message">Can you score 100%?</h2></div>;
    const startButton = <section className="bottom-box" >
    <button className="button btn-red" onClick={startGame}><span className="begin_button-span">BEGIN</span></button>
    </section>;
    const setWelcome = ()=>{
        setBoxContent(startContent);
    }
    const setButton = ()=>{
        setBottomBoxContent(startButton);
    }
    
    React.useEffect(()=>{
        /*en este punto tuve un problema importate con la presentacion 
        de los caracteres especiales HTML que entregaba el api en el String del titulo,
        al intentar buscar documentacion sobre este problema y tardar horas sin hallar nada
        al respecto, decidi forzar el cambio dentro del String de los caracteres especiales        
        */
        let text= stringRepair(qText);
        if (text.indexOf(';') !== -1){
            text= stringRepair(text);
        }
        
        
        
        setBoxContent(<div className="welcome-box"><p className="question-text">{text}</p> <div>{currentQuestion} of 11</div></div>);
      },[currentQuestion,qText])

    
    React.useEffect(()=>{
        
        setWelcome();
        setButton();
    },[]);
    //end start content


    return(<React.Fragment>
        {boxContent}
        {bottomBoxContent}
        
    </React.Fragment>
    );

    
}