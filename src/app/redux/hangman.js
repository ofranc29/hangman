import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPoints: 0, // holds total points accrued by player
  wordsGuessedCorrectly: 0, // number of words that the user has guessed correctly
  incorrectGuesses: 0, // count of incorrect letters guessed per game
  wordsProvided: 1, // number of words provided by the system
  usedLetters: [], // letters that have been used by the user. n.b. this should be reset with every word provided
  currentWord: '', // word to be guessed by player
  imgFile: 'state1.GIF', // hangman image file 
  gameCounter: 0, // game played in a session. Used as unique id of game to force change of word on restart game
  hintUsed: false, // hint has been used by player
  latestLetter: '' // latest letter selected by player. Created to stop page switching from triggering incorrect guess
}

export const hangmanSlice = createSlice({
  name: 'hangman',
  initialState,
  reducers: {
    // increment total points
    incrementTotalPoints: (state, action) => {
      state.totalPoints += action.payload
    },
    // increment words that have been guessed correctly
    incrementWordsGuessedCorrectly: (state) => {
      state.wordsGuessedCorrectly += 1;
    },
    // increment word provided by system
    incrementWordsProvided: (state) => {
      state.wordsProvided += 1;
    },
    // add used letters to array
    addUsedLetters: (state, action) => {
      state.usedLetters = [...state.usedLetters, action.payload];
    },
    incrementIncorrectGuesses: (state) => {
      state.incorrectGuesses += 1;
    },
    // move to next word
    resetNextWord: (state) => {
      state.usedLetters = []; // clear letters used
      state.wordsProvided += 1; // move to next word
      state.incorrectGuesses = 0; // reset incorrect letters guessed
      state.gameCounter +=1;
      state.hintUsed = false;
    },
    // set the current word to be guessed
    setCurrentWord: (state, action) => {
      state.currentWord = action.payload;
    },
    // update the hangman image file
    updateImgFile: (state, action) => {
      state.imgFile = action.payload;
    },
    // reset entire game
    restartGame: (state) => {
      state.usedLetters = [];
      state.wordsProvided = 1;
      state.incorrectGuesses = 0;
      state.wordsGuessedCorrectly = 0;
      state.totalPoints = 0;
      state.gameCounter +=1;
      state.hintUsed = false;
      state.latestLetter = '';
    },
    // set hint used to true
    activateHint: (state) => {
      state.hintUsed = true;
    },
    // set latest letter used by player
    setLatestLetter: (state, action) => {
      state.latestLetter = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  incrementTotalPoints, 
  incrementWordsGuessedCorrectly,
  incrementWordsProvided, 
  addUsedLetters, 
  setCurrentWord, 
  incrementIncorrectGuesses,
  resetNextWord,
  updateImgFile,
  restartGame,
  activateHint,
  setLatestLetter
} = hangmanSlice.actions

export default hangmanSlice.reducer