import React, {useEffect} from 'react';
import { Link } from '@reach/router';
import '../scss/ScoreBoard.scss'

import { Fragment } from 'react';
import ScrollButton from '../components/ScrollButton';
import ScrollButtonDown from '../components/ScrollButtonDown';

import EmailForm from './EmailForm'

export default (props) => {
    const {setUserPicks, points, setPoints, setUserQuiz, finalTime, timer, numOfQuestionsCorrect, setNumOfQuestionsCorrect} = props;
    const handleRestart = (e) => {
        setUserPicks([]);
        setPoints(0);
        setUserQuiz([]);
        setNumOfQuestionsCorrect(0);
    }

    useEffect(()=>{
        clearInterval(timer);
    }, []); 

    return (
        <Fragment>
            <div id="stars-container-scoreboard">
                <div id="navbar">
                    <h5>Time: {finalTime} seconds</h5>
                    <h5>Points: {points}</h5>
                    <h5><Link to={"/"} onClick={(e)=>handleRestart(e)}>Home</Link></h5>
                </div>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div className="header">
                    <h2>QuizApp</h2>
                </div>
                <ScrollButtonDown />
                <div id="scoreboard">
                    <p>You answered correctly {numOfQuestionsCorrect} out of 5 questions. </p>
                    <p> You took {finalTime} seconds and earned {points} points.</p>
                </div>
                <div id="linkToAnswers">
                    <h5><Link to={"/answers"} class="btn btn-outline-warning btn-lg">See Correct Answers</Link></h5>
                    <h5><Link to={"/"} class="btn btn-outline-warning btn-lg">Play Again</Link></h5>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <div id="reachOut">
                    <h2 id="formTitle">Want to get in touch? Feel free to send an email!</h2>
                    <div id="emailForm"><EmailForm /></div>
                </div>
            </div>
            <ScrollButton />
        </Fragment>
    )
}