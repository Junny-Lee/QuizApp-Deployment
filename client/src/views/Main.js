import {navigate, Link} from '@reach/router';
import '../scss/Main.scss';

export default (props) => {
    const {userPicks, setUserPicks} = props;

    const onButtonClick = (e) => {
        setUserPicks([...userPicks, e.target.value]);
    }
    const startGame = (e) => {
        navigate("/Question/1")
    }
    const handleRestart = (e) => {
        setUserPicks([]);
    }

    return (
        <div id="stars-container-main">
            <div id="navbar">
                <h5><Link to={"/"} onClick={(e)=>handleRestart(e)}>Home</Link></h5>
            </div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <div className="header">
                <h2>QuizApp</h2>
            </div> 
            {/* {
                    userPicks.length === 0 ? 
                    <div className="buttons">
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={1}>Single</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={2} disabled>Multiplayer</button> 
                    </div> :
                    ""
            } */}
            {
                userPicks.length === 0 ? 
                <div>
                    <h1 id="subheader">Choose a category:</h1>
                    <div className="buttons">
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={27}>Animals</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={22}>Geography</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={23}>History</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={21}>Sports</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={18}>Computers</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={19}>Mathematics</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={10}>Books</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={11}>Film</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={12}>Music</button> 
                    </div>
                </div> :
                ""
            }
            {
                userPicks.length === 1 ? 
                <div>
                    <h1 id="subheader">Choose a difficulty:</h1>
                    <div className="buttons">
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={"easy"}>Easy</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={"medium"}>Medium</button> 
                        <button type="button" className="btn btn-lg btn-primary" onClick={(e)=>onButtonClick(e)} value={"hard"}>Hard</button> 
                    </div>
                </div>:
                ""
            }
            {
                userPicks.length === 2 ?
                <div id="startButton">
                    <button type="button" className="btn btn-lg btn-light" onClick={(e)=>startGame(e)}><span>START</span></button> 
                </div>:    
                ""
            }
        </div>
    )
}