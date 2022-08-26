import { useEffect, useState } from 'react';
import Topbar from './components/Topbar';
import './App.css'
import slhs from './slhs.svg';
import Game from './components/Game';

function App() {
  const [gameIsStarted, setGameIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCovering, setIsCovering] = useState(true);
  const [timeleft, setTimeleft] = useState(10);
  const [isGameOver, setIsGameOver] = useState(false);
  
  const refreshPage = () => {
    window.location.reload();
  }

  const startGame = () => {
    setGameIsStarted(true);
    setIsCovering(false);
  }

  // use use effect to create a 10 second countdown timer which will call end game after the ten seconds and stop the timer
  useEffect(() => {
    if (gameIsStarted && isGameOver === false) {
      const interval = setInterval(() => {
        setTimeleft(timeleft - 1);
        if (timeleft === 0) {
          clearInterval(interval);
          endGame()
        }
      } , 1000);
    }
  } , [gameIsStarted, timeleft]);

  const endGame = () => {
    setIsGameOver(true);

    // wait five seconds then reload the page
    setTimeout(() => {
      setGameIsStarted(false);
      setIsCovering(true);
      refreshPage();
    }, 5000);

  }

  return (
    <div className={`${gameIsStarted ? "started App" : "not-started App"}`}>
      {gameIsStarted ? null : 
        <div className="img-container">
          :<img src={slhs} className="slhslogo" alt="slhs" />
        </div>
      }
      {gameIsStarted ? null :
        <h1 className="title">Whack - A - Hack</h1>
      }
      {gameIsStarted ? null :
        <h6 className="description">Welcome, in this game, you get 
    to figure out which applications on <br/> your desktops are malicous and you get
    to whack them! <br/> You only have 10 seconds, Good Luck <br /> Note: In this senario, you are viewing a workstation desktop, remove anything that you do not think <br /> someone who is working should be on.</h6>
      } 
      {gameIsStarted ? null :
          <button className="start-game" onClick={startGame}>Start</button>
      }
      {gameIsStarted ? isGameOver ? null : <Topbar score={score} timeleft={timeleft} className="topbar"/> : null}
      {gameIsStarted && !isGameOver ? <Game  setScore={setScore}/> : null}

      {isGameOver ?  
        <div className='game-over-container'> <h1 className='game-over'>
          {score < 0 ? `Wow, negative score, better luck next time, your score was: ${score}` 
          :`Game over, your score was: ${score}`}
          </h1> </div>
      :null }
      <div className={`${isCovering ? "covering" : "uncovered"}`}></div>
    </div>
  );
}

export default App;
