import './HangmanImg.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateImgFile } from '../app/redux/hangman';

const HangmanImg = () => {
    const { incorrectGuesses, imgFile } = useSelector(state => state.hangman);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateImgFile(`state${incorrectGuesses + 1}.GIF`));
    }, [incorrectGuesses]);

    return ( 
        <span className="hangman-img">
            <img src={`${process.env.PUBLIC_URL}/hangmandrawings/${imgFile}`} alt={incorrectGuesses} />
        </span>
     );
}
 


export default HangmanImg;