import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import '../scss/AllQuestions.scss';

export default (props) => {
    const {userPicks, setUserPicks, points, setPoints, userQuiz, setUserQuiz, qNum, setFinalTime, numOfQuestionsCorrect, setNumOfQuestionsCorrect } = props;
    const [question, setQuestion] = useState([]);
    const [randomChoices, setRandomChoices] = useState([])
    const [styles, setStyles] = useState(["btn btn-lg btn-warning", "btn btn-lg btn-warning", "btn btn-lg btn-warning", "btn btn-lg btn-warning"]);
    const [timerId, setTimerId] = useState(); // where we store ID of the interval that is modifying elapsedTime
    const [elapsedTime, setElapsedTime] = useState(0);
    const [displayNum, setDisplayNum] = useState(1);
    
    const handleRestart = (e) => {
        setUserPicks([]);
        setPoints(0);
        setUserQuiz([]);
        setNumOfQuestionsCorrect(0);
    }
    const handleAnswerSubmitted = (e, j) => {
        if (e.target.value == question[0].correct_answer) {
            setNumOfQuestionsCorrect(numOfQuestionsCorrect + 1);
            setPoints(points + 10);
            setStyles([...styles.slice(0,j), "btn btn-lg btn-success", ...styles.slice(j+1)]);
        } else {
            setPoints(points - 5);
            setStyles([...styles.slice(0,j), "btn btn-lg btn-danger", ...styles.slice(j+1)]);
        } 

        setUserQuiz([...userQuiz, {question: question[0], userAnswer: e.target.value}])

        if (qNum <= 4 ){
            setTimeout( () =>{ 
                setStyles(["btn btn-lg btn-warning", "btn btn-lg btn-warning", "btn btn-lg btn-warning", "btn btn-lg btn-warning"]);
                navigate('/Question/' + ( parseInt(qNum) + 1 ) );
            }, 700 ) // wait till 0.7 seconds before navigating
        } else {
            setFinalTime(elapsedTime); // take the time when qNum === 10 and set that to the finalTime (which lives in App.js)
            setTimeout( () => {
                setStyles(["btn btn-lg btn-warning", "btn btn-lg btn-warning", "btn btn-lg btn-warning", "btn btn-lg btn-warning"]);
                navigate('/scoreboard')
            }, 700 )
        }
    }

    useEffect(()=>{
        axios.get(`https://opentdb.com/api.php?amount=1&category=${userPicks[0]}&difficulty=${userPicks[1]}&type=multiple`)
            .then(res=> {
                setQuestion(res.data.results);  // res.data.results[0] ==> can get rid of map and can do question.whatever
                let random = [...res.data.results[0].incorrect_answers, res.data.results[0].correct_answer];
                // randomize the answer choices
                for (let i = random.length-1; i > 0; i--){
                    let j = Math.floor(Math.random()*(i+1));
                    [random[i],random[j]]=[random[j],random[i]];
                }
                setRandomChoices(random);
                setDisplayNum(qNum);
            })
            .catch(err => {console.log(err)})
    }, [qNum]); 

    // controls setting up and setting down the timer
    useEffect( () => {
        setTimerId(setInterval( () => { setElapsedTime(time => time + 1) }, 1000)) // setInterval is built in js function that says to run this function every 1000 ms
        return() => clearInterval(timerId) // when you get to page for Q1, initialize timer // this function runs when this component is taken down. this should clear the interval function that is running every second 
    }, []) // clearInterval accepts an intervalId that clears the setInterval() execution 

    return (
        <div id="stars-container-questions">
            <div id="navbar">
                <h5>Time: {elapsedTime} seconds</h5>
                <h5>Points: {points}</h5>
                <h5><Link to={"/"} onClick={(e)=>handleRestart(e)}>Home</Link></h5>
            </div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className="header">
                <h2>QuizApp</h2>
            </div>
            <div id="question">
                {
                    question.map( (item, i) =>
                        i === 0 ?
                        <div>
                            <div key={i} id="questionBox">
                                <p dangerouslySetInnerHTML={{__html:item.question}}></p>
                                <br></br>
                                <button type="button" className={styles[0]} onClick={(e)=>handleAnswerSubmitted(e, 0)} value={randomChoices[0]} dangerouslySetInnerHTML={{__html:randomChoices[0]}}></button>
                                <button type="button" className={styles[1]} onClick={(e)=>handleAnswerSubmitted(e, 1)} value={randomChoices[1]} dangerouslySetInnerHTML={{__html:randomChoices[1]}}></button>
                                <button type="button" className={styles[2]} onClick={(e)=>handleAnswerSubmitted(e, 2)} value={randomChoices[2]} dangerouslySetInnerHTML={{__html:randomChoices[2]}}></button>
                                <button type="button" className={styles[3]} onClick={(e)=>handleAnswerSubmitted(e, 3)} value={randomChoices[3]} dangerouslySetInnerHTML={{__html:randomChoices[3]}}></button>
                            </div> 
                            <div id="category">
                                <div>{item.category}</div>
                                <div>{displayNum}/5</div>
                            </div>
                        </div>:
                        ""
                    )
                }
            </div>
        </div>
    )
}