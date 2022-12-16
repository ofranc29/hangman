import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li><Link to='/'>Game</Link></li>
                <li><Link to='/help'>Help</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;