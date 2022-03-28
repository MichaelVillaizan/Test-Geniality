import React,{useState} from 'react';
import GameStart from '../GameStart';
import './main.css';
import { getQuestions } from '../tools/apiReciever';
import endScreen from '../endScreen';



function App() {
  
  let [currentQuestion, setCurrentQuestion]= useState(0);
  const [qText, setQText]= useState("Loading...");
  const [boxContent , setBoxContent] = useState();
  const [bottomBoxContent , setBottomBoxContent] = useState();
  const [answers , setAnswers] = useState([]);
  

  const nextQuestion = async({quest,element})=>{
    if (element ){
    
      if (element.target.id === "truebtn"){
        
        
        if (quest[currentQuestion-1].correct_answer === "True"){
          setAnswers(answers.push({key:currentQuestion,title:quest[currentQuestion-1].question,correct:true, answer:"True"}))
        }
        else{
          setAnswers(answers.push({key:currentQuestion,title:quest[currentQuestion-1].question,correct:false, answer:"False"}))
        }
      }
      else if(element.target.id === "falsebtn"){
        if (quest[currentQuestion-1].correct_answer === "False"){
          setAnswers(answers.push({key:currentQuestion,title:quest[currentQuestion-1].question,correct:true, answer:"False"}))
        }
        else{
          setAnswers(answers.push({key:currentQuestion,title:quest[currentQuestion-1].question,correct:false, answer:"True"}))
        }
  
      }
  
    }
    
  if(currentQuestion<11){
    
    
    setQText(quest[currentQuestion].question);
    
    setCurrentQuestion(currentQuestion += 1);
    
  }
  
  else{
    //end of the questions
    
    endScreen(answers,setBoxContent,setBottomBoxContent);
  }

}

  const startGame = async()=>{
    
    const responses =  await getQuestions();
    const quest = responses.data.results;
    
    const responseButtons = <section className="bottom-box">
    <button className="button btn-green" id="truebtn" value="true" onClick={(e)=>{nextQuestion({quest:quest,element:e})}} >TRUE</button>
    <button className="button btn-red" id="falsebtn" value="false" onClick={(j)=>{nextQuestion({quest:quest,element:j})}} >FALSE</button>
    
    </section>;
    setBottomBoxContent(responseButtons);
    
    
    setCurrentQuestion(1);
    nextQuestion({quest:quest,element:null});
    
    
    
}    

  return (
    
    
    <div  className="startGame">
      <GameStart 
        boxContent={boxContent}
        bottomBoxContent={bottomBoxContent}
        setBoxContent={setBoxContent}
        setBottomBoxContent={setBottomBoxContent}
        startGame={startGame}
        currentQuestion={currentQuestion}
        qText={qText}
        setQText={setQText}
      />
      
    </div>
  );
}

export default App;
