import './Restart.css';
import { useDispatch } from 'react-redux';
import { restartGame } from '../app/redux/hangman';

const Restart = () => {

    const dispatch = useDispatch();

    const restart = () => {
        if(window.confirm('Are you sure that you would like to reset the game?')){
            dispatch(restartGame());
        }
    }

    return ( 
        <span className="restart-container">
            <button className="restart-btn" onClick={() => restart()}>
                Restart
            </button>
        </span>
     );
}
 
export default Restart;