import './Help.css';

const Help = () => {
    return ( 
        <div className='help-container'>
            <h2>Help</h2>
            <ul>
                <li className='rules-list-item'>The system will generate a new word for each game that you play.</li>
                <li className='rules-list-item'>Pick a letter from the letter pad, on the right-hand side of the screen.</li>
                <li className='rules-list-item'>For each incorrect letter that you select an element of the hangman will appear in the img on the left-hand side of the screen.</li>
                <li className='rules-list-item'>If you select 10 incorrect letters you lose the game and you will be moved onto the next word.</li>
                <li className='rules-list-item'>If you get the word correct, you will be awarded 10 pts.</li>
                <li className='rules-list-item'>If at any point you get stuck you can select the "Hint" button to get a single correct letter given to you. Hoever this will dock your points total by 2pts.</li>
                <li className='rules-list-item'>If you hit the "Restart" button, this will reset the entire game and you will lose all of your points and progress.</li>
                <li className='rules-list-item'>Happy gaming!</li>
            </ul>
        </div>
     );
}
 
export default Help;