import './LetterGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUsedLetters, incrementIncorrectGuesses, setLatestLetter } from "../app/redux/hangman";
import React, { useEffect } from "react";



const LetterGrid = () => {
    // list all letters of the alphabet to be mapped later
    const letterArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    // get variables from redux reducer
    const { usedLetters, currentWord, incorrectGuesses, latestLetter } = useSelector(state => state.hangman);
    // initiate dispatch function
    const dispatch = useDispatch();

    useEffect(() => {
        // get latest letter entered
        const letter = usedLetters[usedLetters.length - 1];
        // check if latest letter in redux is the same as the latest letter in the used letter array
        // and current game has has some guesses take place
        if(!Array.from(currentWord).includes(letter) && letter !== latestLetter && usedLetters.length){
            // increase incorrect guesses
            dispatch(incrementIncorrectGuesses());
            dispatch(setLatestLetter(letter));
        }
    },[usedLetters, latestLetter])

    return ( 
        <div className="letter-grid">
            {/* map letter to span and add class and event capture */}
            {letterArr.map((letter) => (
                usedLetters.includes(letter) || incorrectGuesses > 9 ? (<span className="selected letter-choice" id={letter} key={letter}>{letter}</span>) :
                (<span className="letter-choice"  id={letter} key={letter} onClick={() => dispatch(addUsedLetters(letter))}>{letter}</span>)
            ))}
        </div>
     );
}
 
export default LetterGrid; 