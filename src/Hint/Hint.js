import './Hint.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUsedLetters, activateHint, incrementTotalPoints } from "../app/redux/hangman";

const Hint = () => {
    // retrieve vars from redux
    const { usedLetters, currentWord, hintUsed } = useSelector(state => state.hangman);
    // initiate dispatch function from redux
    const dispatch = useDispatch();
    // initiate potential hint array
    let possibleHint = [];

    // got this random number in range function from MDN website here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getHint = () => {
        // loop all letters from current word
        Array.from(currentWord).forEach((item) => {
            // check if letter is in usedLetter array
            if(!usedLetters.includes(item.toUpperCase()))
                // add to possible hint letter array 
                possibleHint.push(item);              
        });
        // pick random letter in possible hint array
        const hintLetter = possibleHint[getRandomInt(0, currentWord.length - 1)];
        // dispatch letter to used letter array, this should trigger the cascade of updating random word and greying out used letter on grid 
        dispatch(addUsedLetters(hintLetter));
        // mark hint as used for this game
        dispatch(activateHint());
        // deduct 2 points for using a hint
        dispatch(incrementTotalPoints(-2));
    }

    return ( 
        <div className='hint-container'>
            {/* grey out button if hint has been used for this game */}
            {hintUsed ? <button className='hint-btn selected' >Hint</button> : <button className='hint-btn' onClick={() => getHint()}>Hint</button>}
        </div>
     );
}
 
export default Hint;