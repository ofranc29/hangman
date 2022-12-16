import { configureStore } from '@reduxjs/toolkit'
import hangmanReducer from './hangman'

export const store = configureStore({
  reducer: {
    hangman: hangmanReducer,
  },
})