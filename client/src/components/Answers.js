import React from 'react';
import { Link } from '@reach/router';
import '../scss/Answers.scss'

import { Fragment } from 'react';
import ScrollButton from './ScrollButton';

export default (props) => {
    const {setUserPicks, points, setPoints, userQuiz, setUserQuiz, finalTime, setNumOfQuestionsCorrect} = props;
    const handleRestart = (e) => {
        setUserPicks([]);
        setPoints(0);
        setUserQuiz([]);
        setNumOfQuestionsCorrect(0);
    }

    return (
        <Fragment>
            <div id="stars-container-answers">
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
                <div id="linkToAnswers">
                    <h5><Link to={"/scoreboard"} class="btn btn-outline-warning btn-lg">Back to scoreboard</Link></h5>
                </div>
                <div id="question">
                    {
                        userQuiz.map( (item, i) =>
                            <div>
                                <div key={i} id="questionBox">
                                    <p dangerouslySetInnerHTML={{__html:item.question.question}}></p><br></br>
                                    <div id="yourAnswer">
                                        <p id="title">Your answer:</p>
                                        <p id="answer" dangerouslySetInnerHTML={{__html:item.userAnswer}}></p>
                                    </div>
                                </div> 
                                <div id="correctAnswer">
                                    <div id="title">
                                        <p id="subtitle">Correct Answer:</p>
                                        <div dangerouslySetInnerHTML={{__html:item.question.correct_answer}}></div>
                                    </div>
                                    <div>{i+1}/5</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <ScrollButton />
        </Fragment>
    )
}