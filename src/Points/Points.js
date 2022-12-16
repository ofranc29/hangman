import './Points.css';
import { useSelector } from 'react-redux';

const Points = () => {
    const { totalPoints, wordsGuessedCorrectly, wordsProvided } = useSelector((state) => state.hangman);

    return ( 
        <div className='points-container'>
            <div className='points-text'><strong>Points: </strong>{totalPoints}</div>
            <div className='points-text'><strong>Words Guessed: </strong>{wordsGuessedCorrectly}</div>
            <div className='points-text'><strong>Games Played: </strong>{wordsProvided}</div>
        </div>
     );
}
 
export default Points;