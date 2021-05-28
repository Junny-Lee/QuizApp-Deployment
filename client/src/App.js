import React from 'react';
import Main from './views/Main';
import QuestionComponent from './components/QuestionComponent'
import ScoreBoard from './components/ScoreBoard'
import Answers from './components/Answers'
import {Router} from '@reach/router'
import { useState } from 'react'

function App() {
  const [userPicks, setUserPicks] = useState([]);
  const [userQuiz, setUserQuiz] = useState([]);
  const [points, setPoints] = useState(0);
  const [finalTime, setFinalTime] = useState(); // lifting state from logic from QuestionComponent // this variable is waiting to be used
  const [numOfQuestionsCorrect, setNumOfQuestionsCorrect] = useState(0);

  return (
    <div className="App">
      <Router> 
        <Main path='/' userPicks={userPicks} setUserPicks={setUserPicks}/>
        <QuestionComponent path='/Question/:qNum' userPicks={userPicks} setUserPicks={setUserPicks} points={points} setPoints={setPoints} userQuiz={userQuiz} setUserQuiz={setUserQuiz} setFinalTime={setFinalTime} numOfQuestionsCorrect={numOfQuestionsCorrect} setNumOfQuestionsCorrect={setNumOfQuestionsCorrect}/>
        <ScoreBoard path='/scoreboard' setUserPicks={setUserPicks} points={points} setPoints={setPoints} userQuiz={userQuiz} setUserQuiz={setUserQuiz} finalTime={finalTime} numOfQuestionsCorrect={numOfQuestionsCorrect} setNumOfQuestionsCorrect={setNumOfQuestionsCorrect}/>
        <Answers path='/answers' setUserPicks={setUserPicks} points={points} setPoints={setPoints} userQuiz={userQuiz} setUserQuiz={setUserQuiz} finalTime={finalTime} setNumOfQuestionsCorrect={setNumOfQuestionsCorrect}/>
      </Router>
    </div>
  );
}
export default App;