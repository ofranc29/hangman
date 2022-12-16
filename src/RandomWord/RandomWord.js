import './RandomWord.css';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import randomWordGen from 'random-words';
import { setCurrentWord } from '../app/redux/hangman';


const RandomWord = () => {

    // initiate state of word to be guessed 
    const { usedLetters, currentWord, gameCounter } = useSelector(state => state.hangman);
    const dispatch = useDispatch();

    const getWord = () => {
        dispatch(setCurrentWord(randomWordGen().toUpperCase()));
    }

    useEffect(() => {
        getWord();
        // eslint-disable-next-line
    }, [gameCounter]);

    // set word to array to map later
    let currentWordArr = Array.from(currentWord);
    return ( 
        <span className="random-word-container">
            <div className="guess-word">
                {/* map letters if they exist in both usedLetter array and fetched word, else use underscores */}
                {currentWordArr.map((letter, id) => (
                    <span className="guess-letter" key={id}>{(usedLetters.includes(letter) ? letter : "_")}</span>
                ))}
            </div>
        </span>
     );
}
 
export default RandomWord;