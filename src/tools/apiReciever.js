import axios from "axios";


export const getQuestions = async(setQuestions)=>{
    const gameApi = "https://opentdb.com/api.php?amount=12&difficulty=hard&type=boolean";
    const {data} = await axios.get(gameApi);
    
    return {data};
}