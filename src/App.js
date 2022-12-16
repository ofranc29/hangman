import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { resetNextWord, incrementWordsGuessedCorrectly, incrementTotalPoints } from './app/redux/hangman';
import React, { useEffect } from "react";
import Game from './Game/Game';
import Help from './Help/Help';

function App() {
  const { incorrectGuesses, usedLetters, currentWord } = useSelector((state) => state.hangman);
  const dispatch = useDispatch();

  useEffect(() => {
    let solved = false;
    let lettersMatched = 0;
    // check if word has been solved
    Array.from(currentWord).forEach(element => {
        if(usedLetters.includes(element)){
            lettersMatched += 1;
            if(lettersMatched === currentWord.length) {
                solved = true;
            }
        }
    });
    // check if solved
    if(solved){
        // display won game message
        alert(`you have guessed the word correctly\n\n${currentWord}`);
        // reset game vars
        dispatch(incrementTotalPoints(5));
        dispatch(incrementWordsGuessedCorrectly());
        dispatch(resetNextWord());
        // add one to streak value
        // add to total points
    } else if(incorrectGuesses > 9) { // check if max amount of attempts has been breached
      // display lost game message
        alert(`Too many incorrect answers. The word was \n\n${currentWord}`);
        // reset game vars
        dispatch(resetNextWord());  
    }
  }, [usedLetters, incorrectGuesses, currentWord])

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Game />}></Route>
          <Route exact path='/help' element={<Help />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
