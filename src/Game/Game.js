import Points from '../Points/Points';
import RandomWord from '../RandomWord/RandomWord';
import Restart from '../Restart/Restart';
import Hint from '../Hint/Hint';
import LetterGrid from '../LetterGrid/LetterGrid';
import HangmanImg from '../HangmanImg/HangmanImg';


const Game = () => {
    return ( 
        <div className="container">
          <span className="hangman-container">
            <HangmanImg />
            <div className='options-container'>
              <Hint />
              <Restart />
            </div>
          </span>
          <span className="letter-container">
            <div className="random-word-container">
              <RandomWord />
            </div>
            <div className="letter-grid-container">
              <LetterGrid />
            </div>
            <div>
              <Points />
            </div>
          </span>
        </div>
     );
}
 
export default Game;